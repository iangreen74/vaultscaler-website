output "apex_a_record_name" {
  description = "Name of the apex A record"
  value       = aws_route53_record.apex_a.name
}

output "apex_aaaa_record_name" {
  description = "Name of the apex AAAA record"
  value       = aws_route53_record.apex_aaaa.name
}

output "www_cname_record_name" {
  description = "Name of the www CNAME record"
  value       = var.use_www ? aws_route53_record.www_cname[0].name : null
}

output "apex_a_record_fqdn" {
  description = "FQDN of the apex A record"
  value       = aws_route53_record.apex_a.fqdn
}

output "apex_aaaa_record_fqdn" {
  description = "FQDN of the apex AAAA record"
  value       = aws_route53_record.apex_aaaa.fqdn
}

output "www_cname_record_fqdn" {
  description = "FQDN of the www CNAME record"
  value       = var.use_www ? aws_route53_record.www_cname[0].fqdn : null
}
