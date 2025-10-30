variable "domain_name" {
  description = "Primary domain name for the site"
  type        = string
}

variable "bucket_name" {
  description = "Name of the S3 bucket serving as origin"
  type        = string
}

variable "use_www" {
  description = "Include www subdomain in aliases"
  type        = bool
  default     = true
}

variable "acm_certificate_arn" {
  description = "ARN of the ACM certificate (must be in us-east-1)"
  type        = string
}

variable "environment" {
  description = "Environment name"
  type        = string
  default     = "production"
}

variable "aws_region" {
  description = "AWS region where S3 bucket is located"
  type        = string
  default     = "us-west-2"
}

variable "ipv6_enabled" {
  description = "Enable IPv6 for CloudFront distribution"
  type        = bool
  default     = true
}

variable "default_root_object" {
  description = "Default root object for the distribution"
  type        = string
  default     = "index.html"
}

variable "price_class" {
  description = "Price class for CloudFront distribution"
  type        = string
  default     = "PriceClass_100"
  
  validation {
    condition = contains([
      "PriceClass_All",
      "PriceClass_200",
      "PriceClass_100"
    ], var.price_class)
    error_message = "Price class must be PriceClass_All, PriceClass_200, or PriceClass_100."
  }
}

variable "logging_enabled" {
  description = "Enable CloudFront access logging"
  type        = bool
  default     = false
}

variable "logging_bucket" {
  description = "S3 bucket for CloudFront access logs (required if logging_enabled is true)"
  type        = string
  default     = ""
}
