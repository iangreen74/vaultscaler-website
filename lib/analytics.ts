// Google Analytics 4 Configuration and Helpers

export const GA_MEASUREMENT_ID = "G-SKB7PPD72F";

// Debug mode: enabled only in development
const isDebugMode = (): boolean => {
  return process.env.NODE_ENV === "development";
};

// Extend window type for gtag
declare global {
  interface Window {
    gtag?: (
      command: "event" | "config" | "js",
      targetId: string | Date,
      params?: Record<string, unknown>
    ) => void;
  }
}

type EventCategory =
  | "navigation"
  | "cta"
  | "external_link"
  | "email"
  | "download"
  | "form"
  | "engagement"
  | "performance";

interface TrackEventParams {
  action: string;
  category: EventCategory;
  label?: string;
  value?: number;
}

/**
 * Track a custom event in Google Analytics
 */
export function trackEvent({ action, category, label, value }: TrackEventParams): void {
  const eventParams: Record<string, unknown> = {
    event_category: category,
  };

  if (label) eventParams.event_label = label;
  if (value !== undefined) eventParams.value = value;

  if (isDebugMode()) {
    console.log("[GA Debug]", { action, ...eventParams });
  }

  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", action, eventParams);
  }
}

// Convenience functions for common tracking scenarios

export function trackNavClick(destination: string): void {
  trackEvent({
    action: "click",
    category: "navigation",
    label: destination,
  });
}

export function trackCTAClick(ctaName: string, location?: string): void {
  trackEvent({
    action: "click",
    category: "cta",
    label: location ? `${ctaName} - ${location}` : ctaName,
  });
}

export function trackExternalLink(url: string): void {
  trackEvent({
    action: "click",
    category: "external_link",
    label: url,
  });
}

export function trackEmailClick(emailType: string): void {
  trackEvent({
    action: "click",
    category: "email",
    label: emailType,
  });
}

export function trackDownload(fileName: string): void {
  trackEvent({
    action: "download",
    category: "download",
    label: fileName,
  });
}

export function trackFormSubmit(formName: string, data?: Record<string, string>): void {
  trackEvent({
    action: "submit",
    category: "form",
    label: data ? `${formName} - ${JSON.stringify(data)}` : formName,
  });
}

// Scroll depth tracking - tracks when user scrolls past percentage thresholds
const scrollMilestones = [20, 40, 60, 80, 100];
const reachedMilestones = new Set<number>();

export function initScrollDepthTracking(): void {
  if (typeof window === "undefined") return;

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (docHeight <= 0) return;

    const scrollPercent = Math.round((scrollTop / docHeight) * 100);

    for (const milestone of scrollMilestones) {
      if (scrollPercent >= milestone && !reachedMilestones.has(milestone)) {
        reachedMilestones.add(milestone);
        trackEvent({
          action: "scroll_depth",
          category: "engagement",
          label: `${milestone}%`,
          value: milestone,
        });
      }
    }
  };

  window.addEventListener("scroll", handleScroll, { passive: true });
}

export function resetScrollTracking(): void {
  reachedMilestones.clear();
}

// Time on page tracking - tracks engagement at time thresholds
const timeThresholds = [15, 30, 60, 120]; // seconds
const reachedTimeThresholds = new Set<number>();
let timeTrackingInterval: ReturnType<typeof setInterval> | null = null;
let pageStartTime: number = 0;

export function initTimeOnPageTracking(): void {
  if (typeof window === "undefined") return;

  pageStartTime = Date.now();
  reachedTimeThresholds.clear();

  timeTrackingInterval = setInterval(() => {
    const elapsedSeconds = Math.floor((Date.now() - pageStartTime) / 1000);

    for (const threshold of timeThresholds) {
      if (elapsedSeconds >= threshold && !reachedTimeThresholds.has(threshold)) {
        reachedTimeThresholds.add(threshold);
        trackEvent({
          action: "time_on_page",
          category: "engagement",
          label: `${threshold}s`,
          value: threshold,
        });
      }
    }

    // Stop checking once all thresholds reached
    if (reachedTimeThresholds.size === timeThresholds.length && timeTrackingInterval) {
      clearInterval(timeTrackingInterval);
      timeTrackingInterval = null;
    }
  }, 1000);
}

export function stopTimeOnPageTracking(): void {
  if (timeTrackingInterval) {
    clearInterval(timeTrackingInterval);
    timeTrackingInterval = null;
  }
}

// Core Web Vitals tracking
interface WebVitalMetric {
  name: "CLS" | "FCP" | "FID" | "INP" | "LCP" | "TTFB";
  value: number;
  rating: "good" | "needs-improvement" | "poor";
}

export function trackWebVital(metric: WebVitalMetric): void {
  trackEvent({
    action: "web_vital",
    category: "performance",
    label: `${metric.name} (${metric.rating})`,
    value: Math.round(metric.name === "CLS" ? metric.value * 1000 : metric.value),
  });
}
