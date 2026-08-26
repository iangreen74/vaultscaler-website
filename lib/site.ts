// Single source of truth for the company's positioning — consumed by SEO metadata
// across every page. VaultScaler is a private AI consultancy: it designs, specifies,
// and builds systems that run entirely on the client's own hardware, in the client's
// own building, with nothing sent to any external company. Security is the first
// application; it is not the definition of the practice.
//
// Canonical source: business/strategy/VaultScaler_Positioning_and_Services.md (vault).
// Every claim on this site should trace back to that document or to STATUS.md.

export const SITE = {
  name: "VaultScaler",
  url: "https://vaultscaler.com",
  email: "ian@vaultscaler.com",
  location: "Las Vegas",
  tagline: "VaultScaler designs private AI systems for people who cannot afford to send their data anywhere.",
  description:
    "VaultScaler is a private AI consultancy. It designs, specifies, and builds artificial-intelligence systems that run entirely on the client's own hardware, in the client's own building, with nothing sent to any external company. Security is the first application — real-time computer vision, on-premise, with owner-controlled face recognition or obfuscation and natural-language query over recorded events — proven first on a working artist's own collection. The same practice also offers a written security assessment, vendor-independent AI advisory, and bespoke private-knowledge systems, all deliverable without an installed camera. Designed and configured by VaultScaler; physical installation is carried out by a licensed contractor.",
  keywords: [
    // Company / category
    "VaultScaler",
    "private AI consultancy",
    "private AI systems",
    "on-premise AI",
    "edge computer vision",
    "edge AI security",
    "on-premise security",
    "no cloud security",
    "local-first security",
    "discreet security consultancy",
    "private security consultancy",
    // Service lines
    "security assessment",
    "AI advisory",
    "vendor-independent AI advisory",
    "private knowledge management",
    "agentic discovery",
    "local retrieval augmented generation",
    // Vertical / capability
    "art security",
    "gallery security",
    "museum security",
    "private collection security",
    "private residence security",
    "fine art security",
    "artwork removal detection",
    "artwork absence detection",
    "false-alarm-free art protection",
    "non-contact artwork protection",
    "owner-controlled face recognition",
    "face obscuring privacy mode",
  ],
};

export type ServiceStatusTone = "shipping" | "available" | "build";

export interface Service {
  slug: string;
  n: string;
  name: string;
  status: string;
  statusTone: ServiceStatusTone;
  summary: string;
  whatItIs: string;
  whatYouGet: string;
  engagement: string;
}

// Drawn from §4 of the positioning document. Status honesty (§7) is mandatory —
// only 4.1 is described as shipping; 4.4 must always read as a bespoke build.
export const SERVICES: Service[] = [
  {
    slug: "security-systems",
    n: "01",
    name: "Private Security Systems",
    status: "Built and shipping",
    statusTone: "shipping",
    summary: "Real-time computer vision, running wholly on-premise.",
    whatItIs:
      "Zone and boundary monitoring around specific objects, absence detection, after-hours presence, and known-person recognition with owner-controlled face obfuscation. Natural-language query over recorded events — ask what happened, get an answer with the supporting clips, without a frame ever leaving the building.",
    whatYouGet:
      "A surveyed, designed, installed, and tuned system, plus an owner viewing station.",
    engagement:
      "A design and configuration fee. Installation is carried out by a licensed contractor. An ongoing tuning retainer is available — for a rehang, a layout change, or a capability upgrade — always optional, never a condition of purchase.",
  },
  {
    slug: "security-assessment",
    n: "02",
    name: "Private Security Assessment",
    status: "Deliverable today — no purchase required",
    statusTone: "available",
    summary: "A written assessment of a space, independent of any purchase.",
    whatItIs:
      "Sightlines and blind spots. Insider-risk exposure. Where your existing footage actually goes, and who can read it. What your insurer or regulator requires, and what a proportionate response looks like.",
    whatYouGet: "A written report.",
    engagement:
      "A fixed fee. The lowest-friction way to start — it produces something useful before any system is installed, and no camera changes hands.",
  },
  {
    slug: "ai-advisory",
    n: "03",
    name: "Private AI Advisory",
    status: "Deliverable today — vendor-independent",
    statusTone: "available",
    summary: "For anyone told they must choose between capability and confidentiality.",
    whatItIs:
      "What can genuinely run on your own hardware, what cannot, what the honest trade-offs are, what it requires, and what it costs. The recommendation isn't tied to selling you a particular system.",
    whatYouGet: "A written recommendation and architecture.",
    engagement: "A day rate or a fixed scope.",
  },
  {
    slug: "knowledge-discovery",
    n: "04",
    name: "Private Knowledge & Agentic Discovery",
    status: "Capability proven — bespoke build, not a shelf product",
    statusTone: "build",
    summary: "The same primitive as the security query system, pointed at your archive instead of your rooms.",
    whatItIs:
      "Ask questions of your own material — case files, records, correspondence, collection documentation — and have a local system search, read, and reason across it, entirely within your walls.",
    whatYouGet: "A scoped, bespoke system, built around what you actually hold.",
    engagement:
      "A project fee. Said plainly: VaultScaler has built and verified this pattern — local retrieval, local reasoning, cited answers, and a proven guarantee against fabricated responses — inside the security product. Pointing it at documents instead of rooms is a build, not a finished product. Early clients get a bespoke system, not an off-the-shelf one.",
  },
];
