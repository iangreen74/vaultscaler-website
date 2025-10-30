# VaultScaler Website Makefile
# Automation for vaultscaler.com infrastructure and deployment

.PHONY: help deploy discover tf-init tf-plan clean

# Default target
help:
	@echo "=== VaultScaler Website Makefile ==="
	@echo ""
	@echo "Available targets:"
	@echo "  help      - Show this help message"
	@echo "  deploy    - Deploy website content (requires DRY_RUN=0)"
	@echo "  discover  - Discover existing AWS infrastructure (read-only)"
	@echo "  tf-init   - Initialize Terraform"
	@echo "  tf-plan   - Run Terraform plan with safety checks"
	@echo "  clean     - Clean up temporary files"
	@echo ""
	@echo "Typical workflow:"
	@echo "  1. make discover          # Find existing resources"
	@echo "  2. make tf-init           # Initialize Terraform"
	@echo "  3. make tf-plan           # Verify configuration"
	@echo "  4. make deploy            # DRY_RUN=0 make deploy"
	@echo ""
	@echo "Safety features:"
	@echo "  - All scripts default to DRY_RUN=1"
	@echo "  - Deploy requires explicit DRY_RUN=0"

# Deploy website content
deploy:
	@echo "Deploying vaultscaler.com..."
	@./scripts/deploy_vaultscaler_content.sh

# Discover existing AWS infrastructure
discover:
	@echo "Discovering AWS infrastructure for vaultscaler.com..."
	@./scripts/discover_aws_resources.sh

# Initialize Terraform
tf-init:
	@echo "Initializing Terraform..."
	@cd infra/terraform && terraform init

# Run Terraform plan
tf-plan:
	@echo "Running Terraform plan..."
	@cd infra/terraform && terraform plan

# Clean up temporary files
clean:
	@echo "Cleaning up temporary files..."
	@rm -rf temp/
	@rm -f infra/terraform/*.tfplan
	@echo "✅ Cleanup complete"
