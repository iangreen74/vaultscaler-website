"use client";

import { useEffect } from "react";
import {
  initScrollDepthTracking,
  initTimeOnPageTracking,
  resetScrollTracking,
  stopTimeOnPageTracking,
} from "@/lib/analytics";

export default function ForgewingEngagementTracking() {
  useEffect(() => {
    resetScrollTracking();
    initScrollDepthTracking();
    initTimeOnPageTracking();
    return () => {
      stopTimeOnPageTracking();
    };
  }, []);

  return null;
}
