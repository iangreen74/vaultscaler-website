// Route: / — VaultScaler homepage. A private AI consultancy whose lead offering is
// the Exposure Assessment. Systems work is real but secondary — it follows a finding,
// it doesn't lead the pitch. Rewritten per the September 2026 repositioning brief.
import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "VaultScaler — The Exposure Assessment",
  description:
    "Most security firms will secure your network. VaultScaler finds out how confidential material actually leaves your building — through the machines that watch it, the software your staff use, and your people — with a fixed-fee written assessment from $4,500. Where a finding calls for a system, we design and specify it, running entirely on hardware you own.",
  alternates: { canonical: SITE.url },
  openGraph: {
    title: "VaultScaler — The Exposure Assessment",
    description:
      "Most security firms will secure your network. We find out how confidential material actually leaves your building — machines, tools, and people — with a fixed-fee written assessment.",
    url: SITE.url,
    type: "website",
    images: ["/og.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "VaultScaler — The Exposure Assessment",
    description:
      "Most security firms will secure your network. We find out how confidential material actually leaves your building — machines, tools, and people.",
    images: ["/og.jpg"],
  },
};

const CHANNELS = [
  {
    n: "01",
    lead: "Machines.",
    body: "Cameras, microphones, access control, conferencing hardware, printers — most cloud-connected by default, streaming the inside of a building to a vendor's servers, reachable by people you have never met.",
  },
  {
    n: "02",
    lead: "Tools.",
    body: "AI services, SaaS platforms, third-party processors. Staff paste confidential material into consumer chat interfaces every day, on personal accounts, with no data processing agreement.",
  },
  {
    n: "03",
    lead: "People.",
    body: "The channel every technical control ignores. Most breaches involve a person persuaded to do something rather than a system defeated.",
  },
];

const WHAT_HAPPENS = [
  "A half-day walkthrough of your premises",
  "Structured interviews with your office administrator, your IT provider, and any staff you nominate",
  "Review of vendor terms, system configurations, and publicly available information about the firm",
  "A written report with rated findings and a prioritised remediation list, issued within six working days",
  "An hour of debrief",
];

const PRICING = [
  { size: "Under 10 staff", fee: "$4,500" },
  { size: "10 to 24 staff", fee: "$6,500" },
  { size: "25 to 75 staff", fee: "$9,500" },
];

const NOT_COVERED = [
  {
    title: "Network and endpoint security.",
    body: "Firewalls, endpoint detection, patching, backups. That remains your IT provider's responsibility and we do not compete for it.",
  },
  {
    title: "Legal, ethical or regulatory determinations.",
    body: "We identify facts. Whether an arrangement satisfies your professional obligations is a question for your counsel.",
  },
  {
    title: "Penetration testing or testing of staff.",
    body: "No system is attacked and no employee is tested.",
  },
  {
    title: "Investigation of individuals.",
    body: "No person is investigated, profiled or surveilled.",
  },
];

const WHO_ITS_FOR = [
  {
    title: "Professional practices.",
    body: "Law firms, medical and dental practices, accounting firms — anyone whose duty to protect client material is a professional one. You do not need persuading that privacy matters. You need to know where yours is currently going.",
  },
  {
    title: "Family offices and wealth management.",
    body: "Where client information is the relationship, and a disclosure is not recoverable.",
  },
  {
    title: "Private wealth.",
    body: "People whose visibility or resources make ordinary security an active liability.",
  },
  {
    title: "Discreet commercial spaces.",
    body: "Private clubs, member venues, and businesses whose clientele expect anonymity as a matter of course.",
  },
];

export default function Home() {
  const pageLD = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "VaultScaler — The Exposure Assessment",
    url: `${SITE.url}/`,
    description: SITE.description,
    isPartOf: { "@type": "WebSite", name: "VaultScaler", url: SITE.url },
  };

  return (
    <>
      <JsonLd data={pageLD} />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div aria-hidden className="spotlight absolute inset-0" />
        <div className="relative max-w-6xl mx-auto px-5 sm:px-8 pt-24 pb-24 md:pt-36 md:pb-32">
          <p className="eyebrow">Private AI consultancy · Las Vegas</p>
          <h1 className="mt-7 font-display font-light text-[2.75rem] leading-[1.05] sm:text-6xl md:text-7xl text-bone max-w-4xl tracking-tight">
            Most security firms will secure your network.
          </h1>
          <p className="mt-8 text-lg md:text-xl leading-relaxed text-muted max-w-2xl">
            We find out how information actually leaves your building — through the
            machines that watch it, the software your staff use, and your people. Then
            we build what closes the gaps, running entirely on hardware you own.
          </p>
          <div className="mt-11 flex flex-wrap items-center gap-5">
            <Link
              href="#exposure-assessment"
              className="inline-flex items-center rounded-full border border-bone/70 px-6 py-3 text-sm font-medium text-bone hover:bg-bone hover:text-ink transition-colors"
            >
              The Exposure Assessment
            </Link>
            <Link
              href="/contact/"
              className="inline-flex items-center gap-2 text-sm text-muted hover:text-bone transition-colors"
            >
              Talk to us
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* The problem: three channels — short version; full treatment on /how-it-works/ */}
      <section className="border-t border-line bg-ink-900">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-20 md:py-28">
          <p className="eyebrow">The problem</p>
          <h2 className="mt-6 font-display text-2xl md:text-3xl text-bone max-w-2xl">
            Information leaves a building three ways.
          </h2>
          <div className="mt-14 grid md:grid-cols-3 gap-x-10 gap-y-10">
            {CHANNELS.map((c) => (
              <div key={c.n}>
                <h3 className="font-display text-xl md:text-2xl text-bone">{c.lead}</h3>
                <p className="mt-3 text-base leading-relaxed text-muted">{c.body}</p>
              </div>
            ))}
          </div>
          <p className="mt-12 max-w-2xl text-base md:text-lg leading-relaxed text-muted">
            Almost nobody assesses all three, and the exposure usually sits in the
            interaction between them.
          </p>
          <div className="mt-8">
            <Link
              href="/how-it-works/"
              className="inline-flex items-center gap-2 text-sm text-muted hover:text-bone transition-colors"
            >
              How an assessment looks at all three
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Why now */}
      <section className="border-t border-line">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-20 md:py-28">
          <p className="eyebrow">Why 2026</p>
          <div className="mt-7 grid md:grid-cols-2 gap-x-16 gap-y-10 items-start">
            <h2 className="font-display font-light text-3xl md:text-5xl leading-[1.08] text-bone max-w-xl">
              The same three channels. All three newly dangerous.
            </h2>
            <div className="max-w-prose">
              <p className="text-base md:text-lg leading-relaxed text-muted">
                AI made every channel worse at once. Chat tools ingest and retain
                whatever staff paste into them. Cameras are more capable and more
                connected than they have ever been. And social engineering — long the
                dominant route into any organisation — now has voice cloning, synthetic
                video, and personalised pretexts generated at scale.
              </p>
              <p className="mt-5 text-base md:text-lg leading-relaxed text-muted">
                The alternative also became viable. Capable models now run on hardware
                the size of a book. What used to take a team to build for one building,
                one engineer can now do. For the right client a private system is no
                longer the weaker option — it is the only one whose guarantees are
                architectural rather than contractual.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Exposure Assessment */}
      <section id="exposure-assessment" className="scroll-mt-20 border-t border-line bg-ink-900">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-20 md:py-28">
          <p className="eyebrow">What we do</p>
          <h2 className="mt-6 font-display text-2xl md:text-3xl text-bone max-w-2xl">
            The Exposure Assessment.
          </h2>
          <p className="mt-5 text-base md:text-lg leading-relaxed text-muted max-w-2xl">
            A fixed-fee written assessment of how confidential material can leave your
            premises. Deliberately wider than an IT security review, and deliberately
            outside what your IT provider already covers.
          </p>

          <div className="mt-14 grid md:grid-cols-2 gap-x-16 gap-y-14">
            <div className="min-w-0">
              <p className="eyebrow">What happens</p>
              <ul className="mt-5 space-y-3">
                {WHAT_HAPPENS.map((item) => (
                  <li key={item} className="flex gap-3 text-base md:text-lg leading-relaxed text-muted">
                    <span aria-hidden className="text-dim">—</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="min-w-0">
              <p className="eyebrow">What it costs</p>
              <div className="mt-5 overflow-x-auto">
                <table className="w-full min-w-[380px] text-left border-collapse">
                  <thead>
                    <tr className="border-b border-line">
                      <th className="pb-3 pr-6 font-display text-base font-normal text-bone">
                        Practice size
                      </th>
                      <th className="pb-3 font-display text-base font-normal text-bone">Fee</th>
                    </tr>
                  </thead>
                  <tbody>
                    {PRICING.map((row) => (
                      <tr key={row.size} className="border-b border-line/60">
                        <td className="py-4 pr-6 text-muted">{row.size}</td>
                        <td className="py-4 font-display text-lg text-bone">{row.fee}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-4 text-sm text-dim">
                Fixed. No expenses, no hourly overrun, no change orders.
              </p>
            </div>
          </div>

          <div className="mt-14 max-w-2xl">
            <p className="eyebrow">What it does not cover</p>
            <ul className="mt-5 space-y-4">
              {NOT_COVERED.map((item) => (
                <li key={item.title} className="text-base md:text-lg leading-relaxed">
                  <span className="text-bone">{item.title}</span>{" "}
                  <span className="text-muted">{item.body}</span>
                </li>
              ))}
            </ul>
          </div>

          <p className="mt-14 max-w-2xl font-display italic text-xl md:text-2xl text-bone">
            Most of what an assessment finds costs nothing to fix. We have no
            commercial interest in those items and recommend you do them regardless.
          </p>
        </div>
      </section>

      {/* What follows */}
      <section className="border-t border-line">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-20 md:py-28">
          <p className="eyebrow">After the assessment</p>
          <div className="mt-7 grid md:grid-cols-2 gap-x-16 gap-y-10 items-start">
            <h2 className="font-display font-light text-3xl md:text-5xl leading-[1.08] text-bone max-w-xl">
              Where a finding calls for a system, we build it.
            </h2>
            <div className="max-w-prose">
              <p className="text-base md:text-lg leading-relaxed text-muted">
                Some exposures close with a setting change. Others need something
                replaced. Where that happens we design and specify the system,
                configure the software, and manage the work — a local model that
                handles drafting and summarisation with nothing leaving the premises; a
                gateway that routes requests locally by default; on-premise recording
                with no vendor access.
              </p>
              <p className="mt-5 text-base md:text-lg leading-relaxed text-muted">
                VaultScaler designs and specifies. Licensed Nevada contractors perform
                any physical installation and invoice you directly. We do not sell or
                supply hardware.
              </p>
              <p className="mt-5 text-base md:text-lg leading-relaxed text-muted">
                This is quoted separately, and you are under no obligation to proceed.
                Also available: an{" "}
                <Link
                  href="/services/#advisory-retainer"
                  className="text-bone underline decoration-line underline-offset-4 hover:decoration-bone transition-colors"
                >
                  ongoing advisory retainer
                </Link>
                , from $1,200 a month, for practices that want the assessment kept
                current rather than repeated.
              </p>
              <p className="mt-5 text-base md:text-lg leading-relaxed text-bone">
                Nothing leaves the building. Not as a policy — as an architecture.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="border-t border-line bg-ink-900">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-20 md:py-28">
          <p className="eyebrow">Who it&apos;s for</p>
          <h2 className="mt-6 font-display text-2xl md:text-3xl text-bone max-w-2xl">
            Practices where confidentiality is an obligation, not a preference.
          </h2>
          <div className="mt-14 grid md:grid-cols-2 gap-x-16 gap-y-14">
            {WHO_ITS_FOR.map((w) => (
              <div key={w.title} className="max-w-prose">
                <h3 className="font-display text-xl md:text-2xl text-bone">{w.title}</h3>
                <p className="mt-4 text-base md:text-lg leading-relaxed text-muted">{w.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Close */}
      <section className="border-t border-line">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-24 md:py-32 text-center">
          <h2 className="font-display font-light text-2xl md:text-4xl leading-[1.2] text-bone max-w-3xl mx-auto">
            Their privacy is a policy. Ours is an architecture.
          </h2>
          <p className="mt-6 text-base md:text-lg text-muted max-w-xl mx-auto">
            No uplink, no vendor account, no remote access — not even for us. If
            someone wants what your system saw, they have to come to you.
          </p>
          <p className="mt-9 text-lg text-bone">It stays between us.</p>
          <p className="mt-2 text-lg text-muted">Whenever you&apos;re ready.</p>
          <div className="mt-9">
            <Link
              href="/contact/"
              className="inline-flex items-center rounded-full border border-bone/70 px-7 py-3 text-sm font-medium text-bone hover:bg-bone hover:text-ink transition-colors"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
