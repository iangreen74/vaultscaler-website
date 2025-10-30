# Data sources to discover existing infrastructure

# S3 bucket
data "aws_s3_bucket" "vault_existing" {
  count  = var.enable_resources
  bucket = var.bucket_name
}

# Route53 hosted zone
data "aws_route53_zone" "vault" {
  count = var.enable_resources
  name  = "${var.domain_name}."
}

# ACM certificate (must be in us-east-1 for CloudFront)
data "aws_acm_certificate" "vault" {
  count       = var.enable_resources
  provider    = aws.us_east_1
  domain      = var.domain_name
  statuses    = ["ISSUED"]
  most_recent = true
}
