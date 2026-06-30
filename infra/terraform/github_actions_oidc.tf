# GitHub Actions deploy identity — OIDC, no long-lived keys.
#
# GitHub mints a short-lived OIDC token per workflow run; this role trusts that
# token only for THIS repo on the main branch, and grants only what a static-site
# deploy needs: sync the one site bucket and invalidate the one CloudFront
# distribution. Nothing else.
#
# NOTE: `terraform apply` for this file is Ian's gate. After apply, wire the role
# ARN (output `github_actions_deploy_role_arn`) into the repo as the Actions
# variable AWS_DEPLOY_ROLE_ARN.

variable "github_owner" {
  description = "GitHub org/user that owns the repo"
  type        = string
  default     = "iangreen74"
}

variable "github_repo" {
  description = "GitHub repository name (without owner)"
  type        = string
  default     = "vaultscaler-website"
}

variable "github_oidc_provider_arn" {
  description = <<-EOT
    ARN of an existing account-wide GitHub OIDC provider
    (token.actions.githubusercontent.com). Leave empty to create one here.
    Only one provider per URL is allowed per AWS account, so if other repos
    already federate with GitHub, set this instead of creating a duplicate.
  EOT
  type        = string
  default     = ""
}

locals {
  create_oidc_provider = var.github_oidc_provider_arn == ""
  oidc_provider_arn    = local.create_oidc_provider ? aws_iam_openid_connect_provider.github[0].arn : var.github_oidc_provider_arn
}

data "aws_caller_identity" "current" {}

# Created only when no provider ARN is supplied. AWS validates the GitHub OIDC
# cert against its own trust store; the thumbprint is still a required field.
resource "aws_iam_openid_connect_provider" "github" {
  count = local.create_oidc_provider ? 1 : 0

  url             = "https://token.actions.githubusercontent.com"
  client_id_list  = ["sts.amazonaws.com"]
  thumbprint_list = ["6938fd4d98bab03faadb97b34396831e3780aea1"]
}

# Trust policy: only this repo, only the main branch ref, only the sts audience.
data "aws_iam_policy_document" "github_deploy_trust" {
  statement {
    effect  = "Allow"
    actions = ["sts:AssumeRoleWithWebIdentity"]

    principals {
      type        = "Federated"
      identifiers = [local.oidc_provider_arn]
    }

    condition {
      test     = "StringEquals"
      variable = "token.actions.githubusercontent.com:aud"
      values   = ["sts.amazonaws.com"]
    }

    condition {
      test     = "StringEquals"
      variable = "token.actions.githubusercontent.com:sub"
      values   = ["repo:${var.github_owner}/${var.github_repo}:ref:refs/heads/main"]
    }
  }
}

resource "aws_iam_role" "github_deploy" {
  name               = "vaultscaler-website-gha-deploy"
  description        = "GitHub Actions deploy: sync site bucket + invalidate CloudFront. Trust limited to ${var.github_owner}/${var.github_repo}@main."
  assume_role_policy = data.aws_iam_policy_document.github_deploy_trust.json
}

# Least-privilege: the exact actions the workflow runs, scoped to the one bucket
# and the one distribution. No wildcards on resources.
data "aws_iam_policy_document" "github_deploy_permissions" {
  statement {
    sid       = "ListSiteBucket"
    effect    = "Allow"
    actions   = ["s3:ListBucket"]
    resources = ["arn:aws:s3:::${var.bucket_name}"]
  }

  statement {
    sid       = "WriteSiteObjects"
    effect    = "Allow"
    actions   = ["s3:GetObject", "s3:PutObject", "s3:DeleteObject"]
    resources = ["arn:aws:s3:::${var.bucket_name}/*"]
  }

  statement {
    sid       = "InvalidateDistribution"
    effect    = "Allow"
    actions   = ["cloudfront:CreateInvalidation", "cloudfront:GetInvalidation"]
    resources = ["arn:aws:cloudfront::${data.aws_caller_identity.current.account_id}:distribution/${var.cloudfront_id}"]
  }
}

resource "aws_iam_role_policy" "github_deploy" {
  name   = "vaultscaler-website-gha-deploy"
  role   = aws_iam_role.github_deploy.id
  policy = data.aws_iam_policy_document.github_deploy_permissions.json
}

output "github_actions_deploy_role_arn" {
  description = "Set this as the GitHub Actions variable AWS_DEPLOY_ROLE_ARN"
  value       = aws_iam_role.github_deploy.arn
}
