// Google Analytics 4 Configuration and Helpers

export const GA_MEASUREMENT_ID = "G-SKB7PPD72F";

// Set to true to log events to console instead of (in addition to) sending to GA
const DEBUG_MODE = false;

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
  | "form";

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

  if (DEBUG_MODE) {
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
