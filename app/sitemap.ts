import { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  // Exclude /team, /docs (noindex), /product, /pricing (redirects)
  const pages = ["", "radix", "radix/core", "radix/studio", "lev", "contact", "waitlist", "privacy"];
  const solutionPages = [
    "solutions/hyperscale",
    "solutions/ml-teams",
    "solutions/product-teams",
  ];
  const now = new Date().toISOString();

  const mainPages = pages.map((p) => ({
    url: p ? `${SITE.url}/${p}/` : `${SITE.url}/`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: p === "" ? 1 : p === "radix" || p === "radix/core" || p === "radix/studio" || p === "lev" ? 0.9 : 0.8,
  }));

  const solutions = solutionPages.map((p) => ({
    url: `${SITE.url}/${p}/`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  return [...mainPages, ...solutions];
}
