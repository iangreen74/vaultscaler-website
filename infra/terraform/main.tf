# Main Terraform configuration for vaultscaler.com
# Standalone website infrastructure management

# VaultScaler company site
module "vault_s3" {
  count  = var.enable_resources
  source = "./modules/s3_site"

  bucket_name = var.bucket_name
  environment = var.environment
}

module "vault_cf" {
  count  = var.enable_resources
  source = "./modules/cloudfront_site"

  domain_name         = var.domain_name
  bucket_name         = var.bucket_name
  use_www             = var.use_www
  acm_certificate_arn = data.aws_acm_certificate.vault[0].arn
  logging_enabled     = var.cf_logging_enabled
  aws_region          = var.aws_region
  environment         = var.environment
}

module "vault_dns" {
  count  = var.enable_resources
  source = "./modules/route53_records"

  domain_name        = var.domain_name
  use_www            = var.use_www
  hosted_zone_id     = data.aws_route53_zone.vault[0].zone_id
  cloudfront_domain  = module.vault_cf[0].domain_name
  cloudfront_zone_id = module.vault_cf[0].hosted_zone_id
}
