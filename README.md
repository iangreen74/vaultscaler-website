# VaultScaler Website

This repository manages the vaultscaler.com website infrastructure and content.

## 🌐 Website

**[vaultscaler.com](https://vaultscaler.com)**
Company website hosted on AWS S3 + CloudFront + Route53

## 📁 Repository Structure

```
vaultscaler-website/
├── web/vaultscaler.com/     # Website HTML/CSS/assets
├── content/vaultscaler.com/ # Markdown content for injection
├── scripts/                 # Deployment scripts
├── infra/terraform/         # Infrastructure as Code
│   └── modules/            # Reusable Terraform modules
├── Makefile                # Automation commands
└── README.md               # This file
```

## 🚀 Quick Start

### Prerequisites

- AWS CLI configured with appropriate permissions
- Terraform >= 1.0 installed
- Access to AWS resources for vaultscaler.com

### Deployment

```bash
# Deploy content to S3
DRY_RUN=0 make deploy

# Or run script directly
DRY_RUN=0 ./scripts/deploy_vaultscaler_content.sh
```

### Terraform Management

```bash
# Initialize Terraform
cd infra/terraform
terraform init

# Check infrastructure status
terraform plan

# Import existing resources (if needed)
terraform import 'module.vault_s3[0].aws_s3_bucket.site' vaultscaler-com-static-site
terraform import 'module.vault_cf[0].aws_cloudfront_distribution.site' E1Y23HE42FDF87
```

## 📝 AWS Resources

- **S3 Bucket**: vaultscaler-com-static-site
- **CloudFront Distribution**: E1Y23HE42FDF87
- **Route53 Hosted Zone**: Z05489396W4GPV4KMQA5
- **Domain**: vaultscaler.com

## 🔧 Make Commands

```bash
make help       # Show all available commands
make deploy     # Deploy website (requires DRY_RUN=0)
make discover   # Discover AWS resources
make tf-init    # Initialize Terraform
make tf-plan    # Run Terraform plan
```

## 🔒 Safety Features

- All scripts default to DRY_RUN mode
- Terraform prevent_destroy on critical resources
- HTML validation before deployment
- CloudFront cache invalidation after updates

## 📚 Content Management

Website content is managed through markdown files in `content/vaultscaler.com/`:

- `copy_hero.md` - Hero section
- `copy_focus.md` - Focus/mission section
- `copy_platform.md` - Platform details
- `copy_research.md` - Research information
- `copy_partner.md` - Partnership info

Content markers in HTML templates:
```html
<!-- CONTENT: HERO START -->
<!-- Content will be inserted here -->
<!-- CONTENT: HERO END -->
```

## 🌐 Website URL

**Production**: https://vaultscaler.com

## 📞 Support

For issues or questions about this repository, contact the repository maintainer.
