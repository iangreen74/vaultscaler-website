// Single source of truth for the product family — consumed by the global
// Navigation dropdown AND Forgewing's bespoke header. Don't hardcode a second
// list anywhere; both navs must agree on routes and availability badges.
export const PRODUCTS = [
  // Forgewing's official landing page is the standalone https://forgewing.ai —
  // external. The other three are internal roadmap routes on this site.
  { name: "Forgewing", slug: "forgewing", href: "https://forgewing.ai", tag: "Available now", external: true },
  { name: "Radix Core", slug: "radix-core", href: "/radix-core/", tag: "Coming soon", external: false },
  { name: "Redoubt", slug: "redoubt", href: "/redoubt/", tag: "Coming soon", external: false },
  { name: "Warden", slug: "warden", href: "/warden/", tag: "Coming soon", external: false },
] as const;

export type ProductTag = (typeof PRODUCTS)[number]["tag"];
export type ProductSlug = (typeof PRODUCTS)[number]["slug"];

// Resolve a ?product= query slug to its display name (single source of truth).
// Returns null for unknown/absent slugs so callers can fall back to neutral.
export function productNameFromSlug(slug: string | null | undefined): string | null {
  if (!slug) return null;
  const match = PRODUCTS.find((p) => p.slug === slug);
  return match ? match.name : null;
}

export const SITE = {
  name: "VaultScaler",
  products: PRODUCTS.map((p) => p.name),
  url: "https://vaultscaler.com",
  email: "bpruess@vaultscaler.com",
  launchISO: "2026-06-15",
  description:
    "VaultScaler builds AI agents that run entirely inside your own cloud, so you can ask questions of, and act on, your most sensitive data without it ever leaving your control. Every agent ships with an Agent Passport that declares and enforces exactly what it is allowed to do.",
  keywords: [
    // Buyer outcome
    "AI on private data",
    "AI in your own cloud",
    "sovereign AI agents",
    "data never leaves your control",
    // Capability / category
    "Agent Passport",
    "governed AI agents",
    "sovereign research assistant",
    "grounded cited answers",
    "GPU orchestration",
    "intrusion containment",
    "DevSecOps agent",
  ],
};
