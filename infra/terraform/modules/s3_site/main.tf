resource "aws_s3_bucket" "site" {
  bucket = var.bucket_name
  
  # Critical safety settings
  force_destroy       = false
  object_lock_enabled = false
  
  lifecycle {
    prevent_destroy = true
  }
  
  tags = {
    Name        = var.bucket_name
    Environment = var.environment
    Purpose     = "static-website"
  }
}

# Bucket policy - only create if one already exists
# This will be imported if present, otherwise skip
resource "aws_s3_bucket_policy" "site" {
  count  = var.create_bucket_policy ? 1 : 0
  bucket = aws_s3_bucket.site.id
  
  policy = var.bucket_policy_json
  
  lifecycle {
    prevent_destroy = true
    # Ignore policy changes to avoid drift
    ignore_changes = [policy]
  }
}

# Bucket versioning - preserve existing settings
resource "aws_s3_bucket_versioning" "site" {
  bucket = aws_s3_bucket.site.id
  
  versioning_configuration {
    status = var.versioning_enabled ? "Enabled" : "Suspended"
  }
  
  lifecycle {
    # Don't change existing versioning settings
    ignore_changes = [versioning_configuration]
  }
}

# Server-side encryption - preserve existing settings
resource "aws_s3_bucket_server_side_encryption_configuration" "site" {
  bucket = aws_s3_bucket.site.id
  
  rule {
    apply_server_side_encryption_by_default {
      sse_algorithm = "AES256"
    }
    bucket_key_enabled = true
  }
  
  lifecycle {
    # Don't change existing encryption settings
    ignore_changes = [rule]
  }
}

# Public access block - preserve existing settings
resource "aws_s3_bucket_public_access_block" "site" {
  bucket = aws_s3_bucket.site.id
  
  block_public_acls       = var.block_public_access
  block_public_policy     = var.block_public_access
  ignore_public_acls      = var.block_public_access
  restrict_public_buckets = var.block_public_access
  
  lifecycle {
    # Don't change existing public access settings
    ignore_changes = [
      block_public_acls,
      block_public_policy,
      ignore_public_acls,
      restrict_public_buckets
    ]
  }
}
