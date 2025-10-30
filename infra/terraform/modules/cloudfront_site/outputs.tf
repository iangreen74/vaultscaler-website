output "distribution_id" {
  description = "CloudFront distribution ID"
  value       = aws_cloudfront_distribution.site.id
}

output "distribution_arn" {
  description = "CloudFront distribution ARN"
  value       = aws_cloudfront_distribution.site.arn
}

output "domain_name" {
  description = "CloudFront distribution domain name"
  value       = aws_cloudfront_distribution.site.domain_name
}

output "hosted_zone_id" {
  description = "CloudFront distribution hosted zone ID"
  value       = aws_cloudfront_distribution.site.hosted_zone_id
}

output "status" {
  description = "CloudFront distribution status"
  value       = aws_cloudfront_distribution.site.status
}

output "origin_access_identity_id" {
  description = "Origin Access Identity ID"
  value       = aws_cloudfront_origin_access_identity.site.id
}

output "origin_access_identity_path" {
  description = "Origin Access Identity CloudFront access identity path"
  value       = aws_cloudfront_origin_access_identity.site.cloudfront_access_identity_path
}
