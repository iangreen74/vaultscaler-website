import { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  // Exclude /team, /docs (noindex), /product, /pricing (redirects)
  const pages = ["", "radix/core", "lev", "ortobahn", "contact", "waitlist", "privacy"];
  const solutionPages = [
    "solutions/hyperscale",
    "solutions/product-teams",
  ];
  const now = new Date().toISOString();

  const mainPages = pages.map((p) => ({
    url: p ? `${SITE.url}/${p}/` : `${SITE.url}/`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: p === "" ? 1 : p === "radix/core" || p === "lev" || p === "ortobahn" ? 0.9 : 0.8,
  }));

  const solutions = solutionPages.map((p) => ({
    url: `${SITE.url}/${p}/`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  return [...mainPages, ...solutions];
}
