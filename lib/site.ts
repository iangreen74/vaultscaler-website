// Single source of truth for what VaultScaler actually offers — consumed by the
// contact form's interest options and the waitlist's ?product= attribution.
// Don't hardcode a second list anywhere; every surface must agree.
export const PRODUCTS = [
  // Vivaliux is the product (the local-first measurement app); VaultScaler is the
  // company. It ships as three tiers — Free (the honest instrument), Plus (a model
  // trained on your own record), and Edge + Consultancy (an on-site unit installed
  // by us). These are the only real things — no phantom products.
  { name: "Vivaliux Free", slug: "free", href: "/#platform", tag: "Free", external: false },
  { name: "Vivaliux Plus", slug: "plus", href: "/#pricing", tag: "Paid", external: false },
  { name: "Vivaliux Edge + Consultancy", slug: "edge", href: "/#pricing", tag: "By arrangement", external: false },
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
    "Vivaliux is VaultScaler's private, local-first AI measurement app for living and controlled systems. It measures with a camera and edge compute, remembers every reading in an immutable local record, and tells you what changed — and how sure it is. Free to start; a paid model that learns your plants; and an on-site edge unit installed by us.",
  keywords: [
    // Product / company
    "Vivaliux",
    "Vivaliux app",
    // Positioning
    "local-first AI",
    "measurement platform",
    "private AI",
    "edge AI",
    // Capability / category
    "measure living systems",
    "edge compute measurement",
    "uncertainty-aware measurement",
    "change detection",
    "measurement validity",
    "evidence-grade measurement",
    // Markets
    "research lab measurement",
    "vineyard monitoring",
    "indoor and vertical farm monitoring",
  ],
};
