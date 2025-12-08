import { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  // Exclude /team and /docs (noindex pages)
  const pages = ["", "product", "pricing", "contact", "waitlist"];
  const now = new Date().toISOString();
  return pages.map((p) => ({
    url: `${SITE.url}/${p}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: p === "" ? 1 : 0.8, // Increased priority for agent discovery
  }));
}
