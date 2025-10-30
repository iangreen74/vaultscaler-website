#!/bin/bash
set -euo pipefail

# Backup script for website content
# Creates full backups of S3 buckets before any infrastructure changes

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(dirname "$SCRIPT_DIR")"
BACKUP_DIR="$PROJECT_ROOT/backups"
TIMESTAMP=$(date +%Y%m%d_%H%M%S)
BACKUP_SESSION_DIR="$BACKUP_DIR/backup_$TIMESTAMP"

# Safety check - require explicit permission
if [[ "${ALLOW_BACKUP:-0}" != "1" ]]; then
    echo "❌ Backup not allowed. Set ALLOW_BACKUP=1 to proceed."
    echo "Usage: ALLOW_BACKUP=1 $0"
    exit 1
fi

# Check AWS CLI
if ! command -v aws &> /dev/null; then
    echo "❌ AWS CLI not found. Please install AWS CLI first."
    exit 1
fi

if ! aws sts get-caller-identity &> /dev/null; then
    echo "❌ AWS CLI not configured. Please run 'aws configure'."
    exit 1
fi

echo "=== WEBSITE BACKUP STARTING ==="
echo "Timestamp: $TIMESTAMP"
echo "Backup directory: $BACKUP_SESSION_DIR"
echo ""

# Create backup directory
mkdir -p "$BACKUP_SESSION_DIR"

# Function to backup a bucket
backup_bucket() {
    local bucket_name="$1"
    local backup_path="$BACKUP_SESSION_DIR/$bucket_name"
    
    echo "🪣 Backing up bucket: $bucket_name"
    
    # Check if bucket exists and is accessible
    if ! aws s3api head-bucket --bucket "$bucket_name" 2>/dev/null; then
        echo "⚠️  Bucket '$bucket_name' not found or not accessible - skipping"
        return 0
    fi
    
    # Get bucket region
    BUCKET_REGION=$(aws s3api get-bucket-location --bucket "$bucket_name" --query 'LocationConstraint' --output text 2>/dev/null || echo "us-east-1")
    if [[ "$BUCKET_REGION" == "None" ]]; then
        BUCKET_REGION="us-east-1"
    fi
    
    echo "   Region: $BUCKET_REGION"
    echo "   Destination: $backup_path"
    
    # Create bucket backup directory
    mkdir -p "$backup_path"
    
    # Sync bucket contents
    echo "   Syncing contents..."
    if aws s3 sync "s3://$bucket_name" "$backup_path" --region "$BUCKET_REGION" --delete; then
        echo "   ✅ Backup completed successfully"
        
        # Get object count and size
        OBJECT_COUNT=$(find "$backup_path" -type f | wc -l | tr -d ' ')
        TOTAL_SIZE=$(du -sh "$backup_path" | cut -f1)
        echo "   📊 Objects: $OBJECT_COUNT, Size: $TOTAL_SIZE"
    else
        echo "   ❌ Backup failed for $bucket_name"
        return 1
    fi
    
    echo ""
}

# Backup vaultscaler.com site
DOMAINS=("vaultscaler-com-static-site")
FAILED_BACKUPS=()

for domain in "${DOMAINS[@]}"; do
    if ! backup_bucket "$domain"; then
        FAILED_BACKUPS+=("$domain")
    fi
done

# Create backup manifest
MANIFEST_FILE="$BACKUP_SESSION_DIR/backup_manifest.txt"
echo "=== BACKUP MANIFEST ===" > "$MANIFEST_FILE"
echo "Timestamp: $TIMESTAMP" >> "$MANIFEST_FILE"
echo "AWS Account: $(aws sts get-caller-identity --query 'Account' --output text)" >> "$MANIFEST_FILE"
echo "AWS Region: $(aws configure get region || echo 'default')" >> "$MANIFEST_FILE"
echo "" >> "$MANIFEST_FILE"

echo "Buckets backed up:" >> "$MANIFEST_FILE"
for domain in "${DOMAINS[@]}"; do
    if [[ ! " ${FAILED_BACKUPS[@]} " =~ " ${domain} " ]]; then
        echo "✅ $domain" >> "$MANIFEST_FILE"
        if [[ -d "$BACKUP_SESSION_DIR/$domain" ]]; then
            OBJECT_COUNT=$(find "$BACKUP_SESSION_DIR/$domain" -type f | wc -l | tr -d ' ')
            TOTAL_SIZE=$(du -sh "$BACKUP_SESSION_DIR/$domain" | cut -f1)
            echo "   Objects: $OBJECT_COUNT, Size: $TOTAL_SIZE" >> "$MANIFEST_FILE"
        fi
    else
        echo "❌ $domain (FAILED)" >> "$MANIFEST_FILE"
    fi
done

echo "" >> "$MANIFEST_FILE"
echo "Backup location: $BACKUP_SESSION_DIR" >> "$MANIFEST_FILE"

# Create tarball archive
ARCHIVE_FILE="$BACKUP_DIR/website_backup_$TIMESTAMP.tar.gz"
echo "📦 Creating archive: $ARCHIVE_FILE"
cd "$BACKUP_DIR"
tar -czf "website_backup_$TIMESTAMP.tar.gz" "backup_$TIMESTAMP/"

if [[ -f "$ARCHIVE_FILE" ]]; then
    ARCHIVE_SIZE=$(du -sh "$ARCHIVE_FILE" | cut -f1)
    echo "✅ Archive created successfully: $ARCHIVE_SIZE"
    echo "   Location: $ARCHIVE_FILE"
else
    echo "❌ Failed to create archive"
    exit 1
fi

echo ""
echo "=== BACKUP SUMMARY ==="
cat "$MANIFEST_FILE"

echo ""
if [[ ${#FAILED_BACKUPS[@]} -eq 0 ]] 2>/dev/null || [[ ${#FAILED_BACKUPS} -eq 0 ]]; then
    echo "🎉 ALL BACKUPS COMPLETED SUCCESSFULLY"
    echo ""
    echo "📋 NEXT STEPS:"
    echo "1. Verify backup contents in: $BACKUP_SESSION_DIR"
    echo "2. Archive is available at: $ARCHIVE_FILE"
    echo "3. You can now proceed with infrastructure imports"
    echo "4. Run 'make tf-plan' to verify Terraform configuration"
    exit 0
else
    echo "⚠️  SOME BACKUPS FAILED:"
    for failed in "${FAILED_BACKUPS[@]}"; do
        echo "   - $failed"
    done
    echo ""
    echo "❌ DO NOT PROCEED with infrastructure changes until all backups succeed"
    exit 1
fi
