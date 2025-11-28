#!/bin/bash
# VaultScaler Deployment Script
# Builds and deploys the static site to S3 + CloudFront

set -e

# Configuration
S3_BUCKET="vaultscaler-com-static-site"
CLOUDFRONT_ID="E1Y23HE42FDF87"

echo "🚀 VaultScaler Deployment"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

# Check if AWS CLI is installed
if ! command -v aws &> /dev/null; then
    echo "❌ Error: AWS CLI is not installed"
    echo "Install it: https://aws.amazon.com/cli/"
    exit 1
fi

# Build the site
echo "📦 Building Next.js site..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Build failed"
    exit 1
fi

echo "✅ Build successful"
echo ""

# Sync to S3
echo "☁️  Syncing to S3 bucket: $S3_BUCKET"
aws s3 sync out/ s3://$S3_BUCKET \
    --delete \
    --exclude "*.DS_Store" \
    --exclude ".git/*"

if [ $? -ne 0 ]; then
    echo "❌ S3 sync failed"
    exit 1
fi

echo "✅ Files synced to S3"
echo ""

# Invalidate CloudFront cache
echo "🔄 Invalidating CloudFront cache: $CLOUDFRONT_ID"
INVALIDATION_ID=$(aws cloudfront create-invalidation \
    --distribution-id $CLOUDFRONT_ID \
    --paths "/*" \
    --query 'Invalidation.Id' \
    --output text)

if [ $? -ne 0 ]; then
    echo "❌ CloudFront invalidation failed"
    exit 1
fi

echo "✅ CloudFront invalidation created: $INVALIDATION_ID"
echo ""

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "🎉 Deployment successful!"
echo ""
echo "   Site: https://vaultscaler.com"
echo "   CloudFront invalidation: $INVALIDATION_ID"
echo ""
echo "Note: Cache invalidation may take 1-5 minutes to complete."
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
