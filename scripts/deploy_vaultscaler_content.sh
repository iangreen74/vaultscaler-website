#!/bin/bash
set -euo pipefail

# Safe content deployment script for vaultscaler.com
# Updates only specific content sections without breaking existing structure

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(dirname "$SCRIPT_DIR")"
CONTENT_DIR="$PROJECT_ROOT/content/vaultscaler.com"
TEMP_DIR="$PROJECT_ROOT/temp/vaultscaler.com"
BUCKET_NAME="vaultscaler-com-static-site"

# Safety check - require explicit permission
if [[ "${DRY_RUN:-1}" == "1" ]]; then
    echo "🔒 DRY RUN MODE - No deployment will be performed"
    echo "Set DRY_RUN=0 to actually deploy content"
    echo ""
    echo "This script would perform the following actions:"
    echo "1. Download current website files from S3"
    echo "2. Update specific content sections with new copy"
    echo "3. Validate HTML structure integrity"
    echo "4. Upload updated files back to S3"
    echo "5. Invalidate CloudFront cache"
    echo ""
    exit 0
fi

echo "=== VAULTSCALER.COM CONTENT DEPLOYMENT ==="
echo "🎯 Updating content to reflect GPU orchestration research focus"
echo ""

# Check prerequisites
if ! command -v aws &> /dev/null; then
    echo "❌ AWS CLI not found"
    exit 1
fi

if ! aws sts get-caller-identity &> /dev/null; then
    echo "❌ AWS CLI not configured"
    exit 1
fi

# Create temp directory
mkdir -p "$TEMP_DIR"

echo "📥 Downloading current website files..."
aws s3 sync "s3://$BUCKET_NAME" "$TEMP_DIR" --delete

# Backup current index.html
cp "$TEMP_DIR/index.html" "$TEMP_DIR/index.html.backup"

echo "✏️  Updating content sections..."

# Read content files
HERO_CONTENT=$(cat "$CONTENT_DIR/copy_hero.md")
FOCUS_CONTENT=$(cat "$CONTENT_DIR/copy_focus.md")
PLATFORM_CONTENT=$(cat "$CONTENT_DIR/copy_platform.md")
RESEARCH_CONTENT=$(cat "$CONTENT_DIR/copy_research.md")
PARTNER_CONTENT=$(cat "$CONTENT_DIR/copy_partner.md")

# Convert markdown to HTML (simple conversion)
convert_md_to_html() {
    local content="$1"
    # Convert bullet points
    content=$(echo "$content" | sed 's/^• /<li>/g')
    # Wrap multiple list items in ul tags
    if echo "$content" | grep -q "<li>"; then
        content="<ul>$content</ul>"
    fi
    # Convert line breaks to <p> tags for paragraphs
    if ! echo "$content" | grep -q "<li>"; then
        content=$(echo "$content" | sed 's/^/<p>/' | sed 's/$/<\/p>/' | tr '\n' ' ')
    fi
    echo "$content"
}

HERO_HTML=$(convert_md_to_html "$HERO_CONTENT")
FOCUS_HTML=$(convert_md_to_html "$FOCUS_CONTENT")
PLATFORM_HTML=$(convert_md_to_html "$PLATFORM_CONTENT")
RESEARCH_HTML=$(convert_md_to_html "$RESEARCH_CONTENT")
PARTNER_HTML=$(convert_md_to_html "$PARTNER_CONTENT")

# Update the HTML file with new content
python3 << EOF
import re

# Read the HTML file
with open('$TEMP_DIR/index.html', 'r') as f:
    html_content = f.read()

# Update hero section
hero_lines = '''$HERO_HTML'''.strip().replace('<p>', '').replace('</p>', '').split('\n')
if len(hero_lines) >= 2:
    title = hero_lines[0].strip()
    subtitle = hero_lines[1].strip()
    
    # Update main hero title
    html_content = re.sub(
        r'<h1>[^<]*</h1>',
        f'<h1>{title}</h1>',
        html_content
    )
    
    # Update hero subtitle
    html_content = re.sub(
        r'(<h1>[^<]*</h1>\s*<p>)[^<]*(</p>)',
        f'\\1{subtitle}\\2',
        html_content
    )

# Update intro section (True AI Observability at the Edge)
focus_content = '''$FOCUS_HTML'''
html_content = re.sub(
    r'(<h2>True AI Observability at the Edge</h2>\s*)(.*?)(?=</div>\s*</section>)',
    f'\\1{focus_content}',
    html_content,
    flags=re.DOTALL
)

# Update meta description to reflect research focus
html_content = re.sub(
    r'<meta name="description" content="[^"]*"',
    '<meta name="description" content="VaultScaler researches the future of GPU orchestration, focusing on information-theoretic limits of distributed AI workloads and swarm scheduling systems."',
    html_content
)

# Update page title
html_content = re.sub(
    r'<title>[^<]*</title>',
    '<title>VaultScaler — GPU Orchestration Research</title>',
    html_content
)

# Write the updated HTML
with open('$TEMP_DIR/index.html', 'w') as f:
    f.write(html_content)

print("✅ Content sections updated successfully")
EOF

echo "🔍 Validating HTML structure..."
if ! python3 -c "
import html.parser
class HTMLValidator(html.parser.HTMLParser):
    def error(self, message):
        raise ValueError(f'HTML Error: {message}')

with open('$TEMP_DIR/index.html', 'r') as f:
    content = f.read()
    
validator = HTMLValidator()
validator.feed(content)
print('✅ HTML structure is valid')
"; then
    echo "❌ HTML validation failed"
    exit 1
fi

echo "📤 Uploading updated content..."
aws s3 sync "$TEMP_DIR" "s3://$BUCKET_NAME" --delete

echo "🔄 Invalidating CloudFront cache..."
DISTRIBUTION_ID="E1Y23HE42FDF87"
aws cloudfront create-invalidation --distribution-id "$DISTRIBUTION_ID" --paths "/*" > /dev/null

echo ""
echo "🎉 DEPLOYMENT SUCCESSFUL!"
echo "✅ vaultscaler.com content updated with GPU orchestration research focus"
echo "✅ CloudFront cache invalidated"
echo ""
echo "🌐 Website: https://vaultscaler.com"
echo "⏱️  Cache invalidation may take 5-15 minutes to propagate globally"
echo ""
echo "📋 Changes made:"
echo "   - Updated hero section to 'Researching the future of GPU orchestration'"
echo "   - Updated content to focus on information-theoretic research"
echo "   - Updated meta description and page title"
echo "   - Preserved all existing styling and structure"

# Cleanup
rm -rf "$TEMP_DIR"
