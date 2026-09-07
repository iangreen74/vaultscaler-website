// Single source of truth for the company's positioning — consumed by SEO metadata
// across every page. VaultScaler is a private AI consultancy. Its lead offering is
// the Exposure Assessment — a fixed-fee written assessment of how confidential
// material actually leaves a building, through machines, tools, and people. Systems
// work exists, but sits behind the assessment as a secondary, bespoke offering.
//
// Canonical source: business/strategy/VaultScaler_Positioning_and_Services.md (vault),
// as reframed by the September 2026 repositioning brief. Every claim on this site
// should trace back to one of those two documents or to STATUS.md.

export const SITE = {
  name: "VaultScaler",
  url: "https://vaultscaler.com",
  email: "ian@vaultscaler.com",
  location: "Las Vegas",
  tagline: "We find out how confidential information actually leaves your building — then close the gaps.",
  description:
    "VaultScaler is a private AI consultancy. Its lead offering is the Exposure Assessment: a fixed-fee written assessment of how confidential material actually leaves a building — through the machines that watch it, the software staff use, and the people who work there. Where a finding calls for a system, VaultScaler designs and specifies it — a local model, a routing gateway, on-premise recording — running entirely on hardware the client owns, with nothing sent to any external company. VaultScaler designs and specifies; licensed Nevada contractors carry out any physical installation and invoice the client directly. The first live deployment runs in the founder's own building.",
  keywords: [
    // Company / category
    "VaultScaler",
    "private AI consultancy",
    "exposure assessment",
    "confidentiality assessment",
    "information security assessment for law firms",
    "insider risk assessment",
    "social engineering risk assessment",
    "discreet security consultancy",
    "private security consultancy",
    // Service lines
    "vendor-independent AI advisory",
    "on-premise AI",
    "on-premise security",
    "no cloud security",
    "local-first security",
    // Buyer terms
    "law firm confidentiality assessment",
    "medical practice data security",
    "family office security consultancy",
    "private wealth security consultancy",
  ],
};

export type ServiceStatusTone = "primary" | "retainer" | "build";

export interface Service {
  slug: string;
  n: string;
  name: string;
  statusTone: ServiceStatusTone;
  statusLabel: string;
  summary: string;
  whatItIs: string;
  whatYouGet: string;
  engagement: string;
}

// Reframed per the September 2026 repositioning brief: the Exposure Assessment is
// the lead offering; systems work is secondary, fenced, and explicitly a bespoke
// build behind the contractor structure — never described as something VaultScaler
// installs or supplies. "security-systems" keeps its old slug so the existing
// /services/#security-systems anchor from /how-it-works still resolves.
export const SERVICES: Service[] = [
  {
    slug: "exposure-assessment",
    n: "01",
    name: "The Exposure Assessment",
    statusTone: "primary",
    statusLabel: "The lead offering — deliverable today",
    summary: "A fixed-fee written assessment of how confidential material can leave your premises.",
    whatItIs:
      "A half-day walkthrough of your premises. Structured interviews with your office administrator, your IT provider, and any staff you nominate. A review of vendor terms, system configurations, and publicly available information about the firm.",
    whatYouGet:
      "A written report with rated findings and a prioritised remediation list, issued within six working days, plus an hour of debrief.",
    engagement:
      "A fixed fee by practice size — see pricing below. No expenses, no hourly overrun, no change orders.",
  },
  {
    slug: "advisory-retainer",
    n: "02",
    name: "Ongoing Advisory Retainer",
    statusTone: "retainer",
    statusLabel: "Available today — optional",
    summary: "For practices that want the assessment kept current, not repeated.",
    whatItIs:
      "Vendors change, staff turn over, and new tools get adopted quietly between assessments. The retainer keeps the picture current instead of letting it go stale until the next one.",
    whatYouGet: "Ongoing advisory access and periodic review, at a predictable monthly cost.",
    engagement:
      "From $1,200 a month. Optional, and never a condition of the assessment.",
  },
  {
    slug: "security-systems",
    n: "03",
    name: "Systems Design & Configuration",
    statusTone: "build",
    statusLabel: "Secondary — where a finding calls for it",
    summary: "Where an assessment finding needs more than a setting change, we design and specify what replaces it.",
    whatItIs:
      "A local model that handles drafting and summarisation with nothing leaving the premises. A gateway that routes requests locally by default. On-premise recording with no vendor access. Private Knowledge & Agentic Discovery — a local system that can search, read, and reason across your own material — is one example of what a systems engagement can include; it remains a bespoke build, not a shelf product.",
    whatYouGet: "A design, specification, and configuration, quoted separately from the assessment.",
    engagement:
      "VaultScaler designs and specifies. Licensed Nevada contractors carry out any physical installation and invoice you directly — VaultScaler does not sell or supply hardware. You are under no obligation to proceed.",
  },
];
