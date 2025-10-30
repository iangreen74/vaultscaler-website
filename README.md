# VaultScaler Website

This repository manages the vaultscaler.com website infrastructure and content.

## 🌐 Website

**[vaultscaler.com](https://vaultscaler.com)**
Company website hosted on AWS S3 + CloudFront + Route53

---

## 🚀 Getting Started for New Developers

Follow these steps to clone this repository and start deploying changes immediately.

### 1. Clone the Repository

```bash
git clone git@github.com:iangreen74/vaultscaler-website.git
cd vaultscaler-website
```

**First time with GitHub SSH?** If you get a "Permission denied (publickey)" error:

1. Generate an SSH key:
   ```bash
   ssh-keygen -t ed25519 -C "your.email@example.com"
   # Press Enter to accept default location
   # Enter a passphrase (optional but recommended)
   ```

2. Add the key to your SSH agent:
   ```bash
   ssh-add ~/.ssh/id_ed25519
   ```

3. Copy your public key and add it to GitHub:
   ```bash
   cat ~/.ssh/id_ed25519.pub
   # Copy the output
   # Go to: https://github.com/settings/ssh/new
   # Paste the key and save
   ```

4. Test the connection:
   ```bash
   ssh -T git@github.com
   # Should show: "Hi username! You've successfully authenticated..."
   ```

### 2. Install Prerequisites

#### macOS
```bash
# Install Homebrew (if not already installed)
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Install required tools
brew install awscli terraform python3
```

#### Linux (Ubuntu/Debian)
```bash
# Install AWS CLI
curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
unzip awscliv2.zip
sudo ./aws/install

# Install Terraform
wget -O- https://apt.releases.hashicorp.com/gpg | sudo gpg --dearmor -o /usr/share/keyrings/hashicorp-archive-keyring.gpg
echo "deb [signed-by=/usr/share/keyrings/hashicorp-archive-keyring.gpg] https://apt.releases.hashicorp.com $(lsb_release -cs) main" | sudo tee /etc/apt/sources.list.d/hashicorp.list
sudo apt update && sudo apt install terraform

# Install Python3 (usually pre-installed)
sudo apt install python3 python3-pip
```

### 3. Configure AWS CLI

You'll need AWS credentials with permissions for:
- S3 (read/write to vaultscaler-com-static-site bucket)
- CloudFront (create invalidations for distribution E1Y23HE42FDF87)
- Route53 (optional - only if managing DNS)

#### Get Your AWS Credentials
Contact your AWS administrator to get:
- AWS Access Key ID
- AWS Secret Access Key
- Region: `us-east-1` (or your preferred region)

#### Configure AWS CLI
```bash
aws configure
# AWS Access Key ID: [paste your access key]
# AWS Secret Access Key: [paste your secret key]
# Default region name: us-east-1
# Default output format: json
```

#### Verify AWS Configuration
```bash
# Test AWS connection
aws sts get-caller-identity

# Should output your AWS account info
# Example:
# {
#     "UserId": "AIDAXXXXXXXXXXXXXXXXX",
#     "Account": "123456789012",
#     "Arn": "arn:aws:iam::123456789012:user/yourname"
# }

# Test S3 access
aws s3 ls s3://vaultscaler-com-static-site

# Should list the bucket contents without errors
```

### 4. Your First Deployment

#### Test Mode (Safe - No Changes Made)
```bash
# This will show what WOULD happen without actually deploying
make deploy
# OR
DRY_RUN=1 ./scripts/deploy_vaultscaler_content.sh
```

#### Live Deployment
```bash
# This actually deploys changes to production
DRY_RUN=0 make deploy
# OR
DRY_RUN=0 ./scripts/deploy_vaultscaler_content.sh
```

**What the deploy script does:**
1. Downloads current website from S3
2. Updates content sections from markdown files
3. Validates HTML structure
4. Uploads to S3
5. Invalidates CloudFront cache (takes 5-15 min to propagate)

### 5. Making Changes

#### Update Website Content
```bash
# Edit the markdown files in content/vaultscaler.com/
vim content/vaultscaler.com/copy_hero.md
vim content/vaultscaler.com/copy_focus.md
# etc.

# Deploy the changes
DRY_RUN=0 make deploy

# Commit your changes
git add content/
git commit -m "Update hero copy"
git push origin main
```

#### Verify Changes
```bash
# Wait 5-15 minutes for CloudFront cache invalidation
# Then visit: https://vaultscaler.com
```

---

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

## 🔧 Troubleshooting

### AWS CLI Issues

**Problem:** `aws: command not found`
```bash
# Verify installation
which aws
# If not found, reinstall AWS CLI (see Prerequisites section)
```

**Problem:** `Unable to locate credentials`
```bash
# Reconfigure AWS CLI
aws configure

# Check credentials file
cat ~/.aws/credentials
cat ~/.aws/config
```

**Problem:** `Access Denied` when accessing S3
```bash
# Verify your IAM user has the correct permissions
aws sts get-caller-identity

# Contact your AWS administrator to ensure you have:
# - s3:ListBucket on vaultscaler-com-static-site
# - s3:GetObject, s3:PutObject on vaultscaler-com-static-site/*
# - cloudfront:CreateInvalidation on distribution E1Y23HE42FDF87
```

### Git/GitHub Issues

**Problem:** `Permission denied (publickey)` when pushing
```bash
# Check if SSH key is loaded
ssh-add -l

# If empty, add your key
ssh-add ~/.ssh/id_ed25519

# Test GitHub connection
ssh -T git@github.com
```

**Problem:** `Host key verification failed`
```bash
# Remove old GitHub key and add new one
ssh-keygen -R github.com
ssh-keyscan github.com >> ~/.ssh/known_hosts

# Try again
git push
```

### Deployment Issues

**Problem:** Deployment script fails with HTML validation error
```bash
# Check the content markdown files for syntax issues
cat content/vaultscaler.com/copy_hero.md

# The script converts markdown to HTML, so ensure:
# - No unclosed HTML tags in markdown
# - No special characters that break HTML
```

**Problem:** CloudFront invalidation is slow
```bash
# This is normal - CloudFront can take 5-15 minutes
# Check invalidation status
aws cloudfront get-invalidation --distribution-id E1Y23HE42FDF87 --id <invalidation-id>

# You can also check in AWS Console:
# https://console.aws.amazon.com/cloudfront/
```

**Problem:** Changes not visible on website after deployment
```bash
# 1. Check if deployment actually succeeded
DRY_RUN=0 make deploy

# 2. Clear your browser cache
# Chrome: Cmd+Shift+R (Mac) or Ctrl+Shift+R (Windows/Linux)
# Firefox: Cmd+Shift+R (Mac) or Ctrl+F5 (Windows/Linux)
# Safari: Cmd+Option+R

# 3. Test with curl to bypass browser cache
curl -I https://vaultscaler.com
```

### Python Issues

**Problem:** `python3: command not found`
```bash
# macOS
brew install python3

# Linux
sudo apt install python3

# Verify
python3 --version
```

## 📞 Support

For issues or questions about this repository, contact the repository maintainer.

## 📚 Quick Reference

### Common Commands
```bash
# Deploy to production
DRY_RUN=0 make deploy

# Test deployment (dry run)
make deploy

# Check AWS connection
aws sts get-caller-identity

# List S3 bucket
aws s3 ls s3://vaultscaler-com-static-site

# Initialize Terraform
make tf-init

# Plan Terraform changes
make tf-plan

# Check git status
git status

# Push changes
git push origin main
```

### Key Files
- `content/vaultscaler.com/*.md` - Website content (edit these!)
- `scripts/deploy_vaultscaler_content.sh` - Deployment script
- `Makefile` - Automation commands
- `infra/terraform/` - Infrastructure as Code

### Important AWS Resources
- **S3 Bucket:** vaultscaler-com-static-site
- **CloudFront:** E1Y23HE42FDF87
- **Region:** us-east-1
- **Website:** https://vaultscaler.com

---

**Last Updated:** 2025-10-30
