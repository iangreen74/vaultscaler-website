'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { onCLS, onFCP, onINP, onLCP, onTTFB } from 'web-vitals';
import {
  initScrollDepthTracking,
  resetScrollTracking,
  initTimeOnPageTracking,
  stopTimeOnPageTracking,
  trackWebVital,
} from '@/lib/analytics';

export default function AnalyticsProvider() {
  const pathname = usePathname();

  // Initialize scroll and time tracking, reset on route change
  useEffect(() => {
    resetScrollTracking();
    initScrollDepthTracking();
    initTimeOnPageTracking();

    return () => {
      stopTimeOnPageTracking();
    };
  }, [pathname]);

  // Track Core Web Vitals once on mount
  useEffect(() => {
    onCLS((metric) => trackWebVital({ name: 'CLS', value: metric.value, rating: metric.rating }));
    onFCP((metric) => trackWebVital({ name: 'FCP', value: metric.value, rating: metric.rating }));
    onINP((metric) => trackWebVital({ name: 'INP', value: metric.value, rating: metric.rating }));
    onLCP((metric) => trackWebVital({ name: 'LCP', value: metric.value, rating: metric.rating }));
    onTTFB((metric) => trackWebVital({ name: 'TTFB', value: metric.value, rating: metric.rating }));
  }, []);

  return null;
}
