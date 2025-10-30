# A record for apex domain pointing to CloudFront
resource "aws_route53_record" "apex_a" {
  zone_id = var.hosted_zone_id
  name    = var.domain_name
  type    = "A"
  
  alias {
    name                   = var.cloudfront_domain
    zone_id                = var.cloudfront_zone_id
    evaluate_target_health = false
  }
  
  lifecycle {
    prevent_destroy = true
  }
}

# AAAA record for apex domain pointing to CloudFront (IPv6)
resource "aws_route53_record" "apex_aaaa" {
  zone_id = var.hosted_zone_id
  name    = var.domain_name
  type    = "AAAA"
  
  alias {
    name                   = var.cloudfront_domain
    zone_id                = var.cloudfront_zone_id
    evaluate_target_health = false
  }
  
  lifecycle {
    prevent_destroy = true
  }
}

# CNAME record for www subdomain (if enabled)
resource "aws_route53_record" "www_cname" {
  count   = var.use_www ? 1 : 0
  zone_id = var.hosted_zone_id
  name    = "www.${var.domain_name}"
  type    = "CNAME"
  ttl     = 300
  records = [var.cloudfront_domain]
  
  lifecycle {
    prevent_destroy = true
  }
}

# TXT records for domain verification (if they exist)
# These will be imported if present, otherwise ignored
resource "aws_route53_record" "verification_txt" {
  count   = length(var.verification_records)
  zone_id = var.hosted_zone_id
  name    = var.verification_records[count.index].name
  type    = "TXT"
  ttl     = var.verification_records[count.index].ttl
  records = var.verification_records[count.index].records
  
  lifecycle {
    prevent_destroy = true
    # Don't change verification records
    ignore_changes = all
  }
}
