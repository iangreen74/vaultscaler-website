import { MetadataRoute } from "next";
import { execSync } from "node:child_process";
import { SITE } from "@/lib/site";

export const dynamic = "force-static";

// Map each route to the source files that, if touched, mean the page changed.
const ROUTE_SOURCES: Record<string, string[]> = {
  "": ["app/page.tsx", "app/layout.tsx"],
  "services": ["app/services/page.tsx", "lib/site.ts"],
  "how-it-works": ["app/how-it-works/page.tsx"],
  "approach": ["app/approach/page.tsx"],
  "why-local": ["app/why-local/page.tsx"],
  "contact": ["app/contact/page.tsx"],
  "privacy": ["app/privacy/page.tsx"],
};

function lastModifiedFor(files: string[]): string {
  try {
    const dates = files
      .map((file) => {
        try {
          const out = execSync(`git log -1 --format=%cI -- "${file}"`, { encoding: "utf8" }).trim();
          return out || null;
        } catch {
          return null;
        }
      })
      .filter((d): d is string => !!d);
    if (dates.length === 0) return new Date().toISOString();
    return dates.sort().reverse()[0];
  } catch {
    return new Date().toISOString();
  }
}

export default function sitemap(): MetadataRoute.Sitemap {
  const mainRoutes = ["", "services", "how-it-works", "approach", "why-local", "contact", "privacy"];

  const priorityFor = (p: string): number => {
    if (p === "") return 1.0;
    if (p === "services") return 0.9;
    if (p === "how-it-works" || p === "approach" || p === "why-local") return 0.8;
    return 0.4;
  };

  return mainRoutes.map((p) => ({
    url: p ? `${SITE.url}/${p}/` : `${SITE.url}/`,
    lastModified: lastModifiedFor(ROUTE_SOURCES[p] ?? []),
    changeFrequency: "monthly" as const,
    priority: priorityFor(p),
  }));
}
