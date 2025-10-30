terraform {
  required_version = ">= 1.0"

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 4.0"
    }
  }
}

provider "aws" {
  region = var.aws_region

  default_tags {
    tags = {
      Project    = "vaultscaler-website"
      ManagedBy  = "terraform"
      Repository = "vaultscaler-website"
    }
  }
}

# Provider alias for us-east-1 (required for CloudFront ACM certificates)
provider "aws" {
  alias  = "us_east_1"
  region = "us-east-1"

  default_tags {
    tags = {
      Project    = "vaultscaler-website"
      ManagedBy  = "terraform"
      Repository = "vaultscaler-website"
    }
  }
}
