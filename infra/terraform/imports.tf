# Import commands for existing resources
# Updated with actual resource IDs for vaultscaler.com

# Use these terraform import commands after initialization:

# VaultScaler S3 bucket
# terraform import 'module.vault_s3[0].aws_s3_bucket.site' vaultscaler-com-static-site

# VaultScaler CloudFront distribution
# terraform import 'module.vault_cf[0].aws_cloudfront_distribution.site' E1Y23HE42FDF87

# VaultScaler Route53 records
# terraform import 'module.vault_dns[0].aws_route53_record.apex_a' Z05489396W4GPV4KMQA5_vaultscaler.com_A
# terraform import 'module.vault_dns[0].aws_route53_record.apex_aaaa' Z05489396W4GPV4KMQA5_vaultscaler.com_AAAA
# terraform import 'module.vault_dns[0].aws_route53_record.www_cname' Z05489396W4GPV4KMQA5_www.vaultscaler.com_CNAME

# ACM certificates are managed as data sources only - no import needed
# They are referenced in data_discovery.tf
