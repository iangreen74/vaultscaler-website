resource "aws_cloudfront_distribution" "site" {
  enabled             = true
  is_ipv6_enabled     = var.ipv6_enabled
  default_root_object = var.default_root_object
  price_class         = var.price_class
  
  # Aliases - include apex and www if requested
  aliases = var.use_www ? [var.domain_name, "www.${var.domain_name}"] : [var.domain_name]
  
  # Origin pointing to S3 bucket
  origin {
    domain_name = "${var.bucket_name}.s3.${var.aws_region}.amazonaws.com"
    origin_id   = "S3-${var.bucket_name}"
    
    s3_origin_config {
      origin_access_identity = aws_cloudfront_origin_access_identity.site.cloudfront_access_identity_path
    }
  }
  
  # Default cache behavior
  default_cache_behavior {
    allowed_methods        = ["DELETE", "GET", "HEAD", "OPTIONS", "PATCH", "POST", "PUT"]
    cached_methods         = ["GET", "HEAD"]
    target_origin_id       = "S3-${var.bucket_name}"
    compress               = true
    viewer_protocol_policy = "redirect-to-https"
    
    forwarded_values {
      query_string = false
      cookies {
        forward = "none"
      }
    }
    
    min_ttl     = 0
    default_ttl = 3600
    max_ttl     = 86400
  }
  
  # SSL certificate
  viewer_certificate {
    acm_certificate_arn      = var.acm_certificate_arn
    ssl_support_method       = "sni-only"
    minimum_protocol_version = "TLSv1.2_2021"
  }
  
  # Restrictions
  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }
  
  # Logging configuration (optional)
  dynamic "logging_config" {
    for_each = var.logging_enabled ? [1] : []
    content {
      include_cookies = false
      bucket         = var.logging_bucket
      prefix         = "cloudfront-logs/${var.domain_name}/"
    }
  }
  
  # Custom error responses
  custom_error_response {
    error_code         = 404
    response_code      = 404
    response_page_path = "/404.html"
  }
  
  custom_error_response {
    error_code         = 403
    response_code      = 404
    response_page_path = "/404.html"
  }
  
  lifecycle {
    prevent_destroy = true
    # Ignore changes to avoid configuration drift
    ignore_changes = [
      origin,
      default_cache_behavior,
      ordered_cache_behavior,
      logging_config,
      custom_error_response,
      viewer_certificate,
      enabled,
      price_class,
      aliases
    ]
  }
  
  tags = {
    Name        = var.domain_name
    Environment = var.environment
    Purpose     = "static-website-cdn"
  }
}

# Origin Access Identity for S3
resource "aws_cloudfront_origin_access_identity" "site" {
  comment = "OAI for ${var.domain_name}"
  
  lifecycle {
    prevent_destroy = true
  }
}
