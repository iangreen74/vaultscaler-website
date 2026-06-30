// Single source of truth for what VaultScaler actually offers — consumed by the
// contact form's interest options and the waitlist's ?product= attribution.
// Don't hardcode a second list anywhere; every surface must agree.
export const PRODUCTS = [
  // VaultScaler is the company (an edge computer-vision company); Vivaliux is
  // product one, at /vivaliux. It ships as three tiers — Free (the honest
  // instrument), Plus (a model trained on your own record), and Edge + Consultancy
  // (an on-site unit installed by us). These are the only real things — no phantom
  // products.
  { name: "Vivaliux Free", slug: "free", href: "/vivaliux/#platform", tag: "Free", external: false },
  { name: "Vivaliux Plus", slug: "plus", href: "/vivaliux/#pricing", tag: "Paid", external: false },
  { name: "Vivaliux Edge + Consultancy", slug: "edge", href: "/vivaliux/#pricing", tag: "By arrangement", external: false },
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
    "VaultScaler is an edge computer-vision company. It builds instruments that turn ordinary cameras into trustworthy measurements of the physical world — running on hardware you own, with data that stays on your machine. Its first product, Vivaliux, brings honest measurement to living systems: measure, remember, and see what really changed — and how sure it is.",
  keywords: [
    // Company / product
    "VaultScaler",
    "edge computer-vision company",
    "Vivaliux",
    "Vivaliux app",
    // Positioning
    "edge computer vision",
    "edge AI",
    "computer-vision instrument",
    // Capability / category
    "data stays on your machine",
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
