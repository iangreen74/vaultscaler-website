// Single source of truth for the product family — consumed by the global
// Navigation dropdown AND Forgewing's bespoke header. Don't hardcode a second
// list anywhere; both navs must agree on routes and availability badges.
export const PRODUCTS = [
  { name: "Forgewing", href: "/forgewing/", tag: "Available now" },
  { name: "Radix Core", href: "/radix-core/", tag: "Coming soon" },
  { name: "Redoubt", href: "/redoubt/", tag: "Coming soon" },
  { name: "Warden", href: "/warden/", tag: "Coming soon" },
] as const;

export type ProductTag = (typeof PRODUCTS)[number]["tag"];

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
