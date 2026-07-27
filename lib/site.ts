// Single source of truth for the company's positioning — consumed by SEO metadata
// across every page. VaultScaler is edge computer-vision security for art: bespoke,
// consulting-led, installed and tuned in person. On-premise; nothing leaves the building.

// The kinds of spaces we work with (used by the contact form's interest options).
export const SPACE_TYPES = [
  { value: "gallery", label: "Commercial gallery" },
  { value: "collection", label: "Private collection" },
  { value: "independent", label: "Artist-run / independent space" },
  { value: "museum", label: "Small museum or institution" },
  { value: "other", label: "Something else" },
] as const;

export const SITE = {
  name: "VaultScaler",
  url: "https://vaultscaler.com",
  email: "bpruess@vaultscaler.com",
  location: "Las Vegas Arts District",
  description:
    "VaultScaler builds private, on-premise security systems for galleries, museums, and private collections. Edge computer vision runs on hardware you own, in your building, watching the whole space — including the people in it. The owner decides what it remembers: recognise known people and flag unknowns, or obscure every face before anything is stored. Nothing it sees ever leaves the building, and nothing is ever attached to the artwork. The system also knows the difference between a visitor in front of a painting and a painting that is no longer there, so the alarms mean something. Specified, built, installed, and tuned in person.",
  keywords: [
    // Company
    "VaultScaler",
    "art security",
    "gallery security",
    "museum security",
    "private collection security",
    "fine art security",
    // Category
    "edge computer vision",
    "edge AI security",
    "on-premise security",
    "computer vision security",
    "no cloud security",
    "local-first security",
    // Capability
    "artwork removal detection",
    "artwork absence detection",
    "false-alarm-free art protection",
    "non-contact artwork protection",
    "no tags on the artwork",
    "owner-controlled face recognition",
    "face obscuring privacy mode",
    "bespoke security consultancy",
  ],
};
