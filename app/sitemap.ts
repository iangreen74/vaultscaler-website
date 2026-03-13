import { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  // Exclude /team, /docs (noindex), /product, /pricing (redirects)
  const pages = ["", "radix/core", "lev", "contact", "waitlist", "privacy"];
  const solutionPages = [
    "solutions/hyperscale",
    "solutions/product-teams",
  ];
  const now = new Date().toISOString();

  const mainPages = pages.map((p) => ({
    url: p ? `${SITE.url}/${p}/` : `${SITE.url}/`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: p === "" ? 1 : p === "lev" ? 0.9 : p === "radix/core" ? 0.7 : 0.8,
  }));

  const solutions = solutionPages.map((p) => ({
    url: `${SITE.url}/${p}/`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  return [...mainPages, ...solutions];
}
