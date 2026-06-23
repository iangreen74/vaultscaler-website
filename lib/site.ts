// Single source of truth for what VaultScaler actually offers — consumed by the
// contact form's interest options and the waitlist's ?product= attribution.
// Don't hardcode a second list anywhere; every surface must agree.
export const PRODUCTS = [
  // VaultScaler is the measurement platform; Studio Habitat is its live public
  // proof, not a separate company or product line. These are the only two real
  // things — no phantom products.
  { name: "VaultScaler Platform", slug: "platform", href: "/#platform", tag: "Available now", external: false },
  { name: "Studio Habitat (live proof)", slug: "studio-habitat", href: "/#studio-habitat", tag: "Live now", external: false },
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
    "VaultScaler is a private, local-first AI measurement platform for living and controlled systems. It measures with a camera and edge compute, remembers every reading in an immutable local record, and tells you what changed — and how sure it is. Studio Habitat is our live public proof.",
  keywords: [
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
    "Studio Habitat",
  ],
};
