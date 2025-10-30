# Terraform variables for vaultscaler.com infrastructure

# Enable resources (set to 1 since resources are already imported)
enable_resources = 1

# Domain configuration
domain_name = "vaultscaler.com"

# S3 bucket name (actual bucket name)
bucket_name = "vaultscaler-com-static-site"

# CloudFront distribution ID
cloudfront_id = "E1Y23HE42FDF87"

# Route53 hosted zone ID
route53_zone_id = "Z05489396W4GPV4KMQA5"

# WWW subdomain configuration
use_www = true

# CloudFront logging (disabled)
cf_logging_enabled = false

# Environment
environment = "production"
aws_region  = "us-east-1"
