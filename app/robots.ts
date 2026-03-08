import { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/"],
        disallow: ["/docs", "/solutions/ml-teams", "/deck"],
      },
      // Explicitly allow AI crawlers
      {
        userAgent: ["GPTBot", "ChatGPT-User", "Google-Extended", "ClaudeBot", "anthropic-ai", "PerplexityBot", "Bytespider", "CCBot", "cohere-ai"],
        allow: ["/"],
        disallow: ["/docs", "/solutions/ml-teams", "/deck"],
      },
    ],
    sitemap: `${SITE.url}/sitemap.xml`,
    host: SITE.url,
  };
}
