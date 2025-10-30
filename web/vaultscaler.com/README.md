# vaultscaler.com

VaultScaler - Edge AI Infrastructure Platform

**Test deployment - 2025-09-20 09:10 PDT**

## Deployment

This website is automatically deployed to AWS S3 + CloudFront via GitHub Actions when changes are pushed to the `web/vaultscaler.com/` directory.

### Infrastructure
- **S3 Bucket**: `vaultscaler.com`
- **CloudFront Distribution**: `E1WQEKUIVMXFN6`
- **Domain**: https://vaultscaler.com
- **SSL Certificate**: AWS Certificate Manager (ACM)

### Local Development

To make changes:
1. Edit files in `web/vaultscaler.com/`
2. Commit and push to `main` branch
3. GitHub Actions will automatically deploy to AWS

### Manual Deployment

```bash
# Sync to S3
aws s3 sync web/vaultscaler.com/ s3://vaultscaler.com/ --delete

# Invalidate CloudFront cache
aws cloudfront create-invalidation --distribution-id E1WQEKUIVMXFN6 --paths "/*"
```
