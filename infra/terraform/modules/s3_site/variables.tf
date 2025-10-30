variable "bucket_name" {
  description = "Name of the S3 bucket"
  type        = string
}

variable "environment" {
  description = "Environment name"
  type        = string
  default     = "production"
}

variable "versioning_enabled" {
  description = "Enable S3 bucket versioning"
  type        = bool
  default     = false
}

variable "block_public_access" {
  description = "Block public access to S3 bucket"
  type        = bool
  default     = true
}

variable "create_bucket_policy" {
  description = "Whether to create/manage bucket policy"
  type        = bool
  default     = false
}

variable "bucket_policy_json" {
  description = "JSON policy for the bucket (if create_bucket_policy is true)"
  type        = string
  default     = ""
}
