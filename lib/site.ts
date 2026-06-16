// Single source of truth for the product family — consumed by the global
// Navigation dropdown and the homepage product cards. Don't hardcode a second
// list anywhere; every surface must agree on routes and availability badges.
export const PRODUCTS = [
  // The Studio Habitat surfaces are the current public positioning. They link
  // to homepage sections rather than dedicated routes for now. Forgewing has
  // been retired from active positioning (the /forgewing route still redirects
  // to forgewing.ai); Radix Core / Redoubt / Warden pages remain on disk but
  // are no longer surfaced here.
  { name: "Studio Habitat Labs", slug: "labs", href: "/#labs", tag: "Available now", external: false },
  { name: "Studio Habitat Phenotyping Console", slug: "console", href: "/#console", tag: "Coming soon", external: false },
  { name: "Studio Habitat Radio", slug: "radio", href: "/#radio", tag: "Prototype live", external: false },
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
    "VaultScaler builds local-first AI systems for biological discovery — evidence-grade systems for observing living systems with cameras, edge compute, and uncertainty-aware interpretation. Studio Habitat Labs is our live public proof.",
  keywords: [
    // Positioning
    "local-first AI",
    "AI for biological discovery",
    "evidence-grade AI",
    // Capability / category
    "AI-assisted phenotyping",
    "edge compute observation",
    "evidence packets",
    "uncertainty-aware measurement",
    "surface coverage measurement",
    "anomaly detection",
    "measurement validity",
    "Studio Habitat",
  ],
};
