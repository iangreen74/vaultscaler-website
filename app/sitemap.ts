import { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  // Exclude /team and /docs (noindex pages)
  const pages = ["", "product", "pricing", "contact", "waitlist"];
  const solutionPages = [
    "solutions/gpu-fleet-optimization",
    "solutions/corporate",
    "solutions/research",
  ];
  const now = new Date().toISOString();

  const mainPages = pages.map((p) => ({
    url: `${SITE.url}/${p}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: p === "" ? 1 : 0.8,
  }));

  const solutions = solutionPages.map((p) => ({
    url: `${SITE.url}/${p}/`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  return [...mainPages, ...solutions];
}
