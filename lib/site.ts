// Single source of truth for the company, consumed by metadata across every page.
// VaultScaler makes software; Takes is its first product. No claim here may run ahead of
// what has shipped: pricing, availability and platforms are stated only when true.

export const SITE = {
  name: "VaultScaler",
  url: "https://vaultscaler.com",
  email: "ian@vaultscaler.com",
  location: "Las Vegas",
  tagline: "Thoughtfully designed software, made in Las Vegas.",
  description:
    "VaultScaler makes thoughtfully designed software. Its first product is Takes, a writing workspace built around speaking: say a thought, keep every take, arrange them into a manuscript, and return to your work. Transcription happens on your Mac.",
  keywords: [
    "VaultScaler",
    "Takes",
    "writing workspace",
    "dictation writing workspace",
    "speak to write",
    "local transcription",
    "manuscript arrangement",
    "writing by voice",
  ],
};

// Takes: what is true today. Update when a release is published, not before.
export const TAKES = {
  name: "Takes",
  headline: "A writing workspace built around speaking.",
  platforms: "macOS 13 Ventura or later, on a Mac with Apple silicon (M1 or later)",
  notSupported: "Intel Macs, Windows and Linux are not supported.",
  // No download exists until a signed, notarized release has been verified and published.
  downloadAvailable: false,
  previewStatus: "The first Mac preview is being prepared. It is not available to download yet.",
};
