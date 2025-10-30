variable "aws_region" {
  description = "AWS region for resources"
  type        = string
  default     = "us-east-1"
}

variable "environment" {
  description = "Environment name"
  type        = string
  default     = "production"
}

variable "domain_name" {
  description = "Domain for VaultScaler website"
  type        = string
  default     = "vaultscaler.com"
}

variable "bucket_name" {
  description = "S3 bucket name for VaultScaler website"
  type        = string
  default     = "vaultscaler-com-static-site"
}

variable "use_www" {
  description = "Whether to set up www subdomain"
  type        = bool
  default     = true
}

variable "cf_logging_enabled" {
  description = "Enable CloudFront access logging"
  type        = bool
  default     = false
}

variable "enable_resources" {
  description = "Enable resource creation (set to 1 after imports are complete)"
  type        = number
  default     = 1
}

# AWS Resource IDs
variable "cloudfront_id" {
  description = "CloudFront distribution ID"
  type        = string
  default     = "E1Y23HE42FDF87"
}

variable "route53_zone_id" {
  description = "Route53 hosted zone ID"
  type        = string
  default     = "Z05489396W4GPV4KMQA5"
}
