variable "domain_name" {
  description = "Domain name for DNS records"
  type        = string
}

variable "hosted_zone_id" {
  description = "Route53 hosted zone ID"
  type        = string
}

variable "use_www" {
  description = "Create www CNAME record"
  type        = bool
  default     = true
}

variable "cloudfront_domain" {
  description = "CloudFront distribution domain name"
  type        = string
}

variable "cloudfront_zone_id" {
  description = "CloudFront distribution hosted zone ID"
  type        = string
}

variable "verification_records" {
  description = "List of TXT records for domain verification"
  type = list(object({
    name    = string
    ttl     = number
    records = list(string)
  }))
  default = []
}
