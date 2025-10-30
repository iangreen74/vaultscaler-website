# Terraform outputs for vaultscaler.com

output "s3_bucket" {
  description = "S3 bucket name"
  value       = var.enable_resources > 0 ? module.vault_s3[0].bucket_name : "Not created yet"
}

output "s3_arn" {
  description = "S3 bucket ARN"
  value       = var.enable_resources > 0 ? module.vault_s3[0].bucket_arn : "Not created yet"
}

output "cloudfront_id" {
  description = "CloudFront distribution ID"
  value       = var.enable_resources > 0 ? module.vault_cf[0].distribution_id : "Not created yet"
}

output "cloudfront_domain" {
  description = "CloudFront distribution domain name"
  value       = var.enable_resources > 0 ? module.vault_cf[0].domain_name : "Not created yet"
}

output "hosted_zone_id" {
  description = "Route53 hosted zone ID"
  value       = var.enable_resources > 0 ? data.aws_route53_zone.vault[0].zone_id : "Not discovered yet"
}

output "website_url" {
  description = "Website URL"
  value       = "https://${var.domain_name}"
}
