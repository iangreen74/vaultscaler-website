import { MetadataRoute } from "next";
import { execSync } from "node:child_process";
import { SITE } from "@/lib/site";

export const dynamic = "force-static";

// Map each route to the source files that, if touched, mean the page changed.
const ROUTE_SOURCES: Record<string, string[]> = {
  "": ["app/page.tsx", "app/layout.tsx"],
  "takes": ["app/takes/page.tsx", "lib/site.ts"],
  "takes/release-notes": ["app/takes/release-notes/page.tsx"],
  "takes/support": ["app/takes/support/page.tsx"],
  "takes/privacy": ["app/takes/privacy/page.tsx"],
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
  const mainRoutes = ["", "takes", "takes/release-notes", "takes/support", "takes/privacy", "contact", "privacy"];

  const priorityFor = (p: string): number => (p === "" || p === "takes" ? 1.0 : p.startsWith("takes/") ? 0.7 : 0.4);

  return mainRoutes.map((p) => ({
    url: p ? `${SITE.url}/${p}/` : `${SITE.url}/`,
    lastModified: lastModifiedFor(ROUTE_SOURCES[p] ?? []),
    changeFrequency: "monthly" as const,
    priority: priorityFor(p),
  }));
}
