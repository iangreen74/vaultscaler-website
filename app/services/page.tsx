// Route: /services — two ways to engage VaultScaler (the Exposure Assessment and the
// ongoing advisory retainer), plus a third, clearly secondary block for systems design
// and configuration. Rewritten per the September 2026 repositioning brief: the
// assessment leads, systems work follows a finding and is fenced accordingly.
import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { SITE, SERVICES } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services | VaultScaler",
  description:
    "The Exposure Assessment — a fixed-fee written assessment of how confidential material leaves your premises, from $4,500 — plus an optional ongoing advisory retainer. Where a finding calls for a system, VaultScaler designs and specifies it; licensed Nevada contractors install.",
  alternates: { canonical: `${SITE.url}/services/` },
  openGraph: {
    title: "Services | VaultScaler",
    description:
      "The Exposure Assessment, a fixed-fee written assessment of how confidential material leaves your premises, plus an optional advisory retainer. Systems work follows a finding — it doesn't lead.",
    url: `${SITE.url}/services/`,
    type: "website",
    images: ["/og.jpg"],
  },
};

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

const TONE_CLASS: Record<string, string> = {
  primary: "text-bone/70",
  retainer: "text-muted",
  build: "text-dim",
};

export default function Services() {
  const ld = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Services — VaultScaler",
    url: `${SITE.url}/services/`,
    description:
      "The Exposure Assessment and an optional advisory retainer, plus systems design and configuration where an assessment finding calls for it.",
    mainEntity: {
      "@type": "ItemList",
      itemListElement: SERVICES.map((s, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: s.name,
        description: s.summary,
      })),
    },
  };

  return (
    <>
      <JsonLd data={ld} />

      <section className="relative overflow-hidden border-b border-line">
        <div aria-hidden className="spotlight absolute inset-0" />
        <div className="relative max-w-6xl mx-auto px-5 sm:px-8 pt-20 pb-16 md:pt-28 md:pb-20">
          <p className="eyebrow">Services</p>
          <h1 className="mt-6 font-display font-light text-4xl md:text-6xl leading-[1.06] text-bone max-w-3xl tracking-tight">
            One assessment. One retainer. Systems where they&apos;re earned.
          </h1>
          <p className="mt-7 text-lg md:text-xl leading-relaxed text-muted max-w-2xl">
            The Exposure Assessment is the lead offering, deliverable today for a fixed
            fee. Systems design and configuration follows only where a finding calls
            for it.
          </p>
        </div>
      </section>

      <section>
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-8 md:py-12">
          {SERVICES.map((s) => (
            <div
              key={s.slug}
              id={s.slug}
              className="scroll-mt-24 grid md:grid-cols-[6rem_1fr] gap-x-8 gap-y-4 py-14 border-t border-line first:border-t-0"
            >
              <div className="font-display text-3xl md:text-4xl text-dim">{s.n}</div>
              <div className="max-w-3xl">
                <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
                  <h2 className="font-display text-2xl md:text-3xl text-bone">{s.name}</h2>
                  <span className={"text-xs uppercase tracking-wide " + TONE_CLASS[s.statusTone]}>
                    {s.statusLabel}
                  </span>
                </div>
                <p className="mt-4 text-base md:text-lg leading-relaxed text-muted">
                  {s.whatItIs}
                </p>
                <div className="mt-6 grid sm:grid-cols-2 gap-6">
                  <div>
                    <p className="eyebrow">What you get</p>
                    <p className="mt-2 text-base leading-relaxed text-muted">{s.whatYouGet}</p>
                  </div>
                  <div>
                    <p className="eyebrow">How it works</p>
                    <p className="mt-2 text-base leading-relaxed text-muted">{s.engagement}</p>
                  </div>
                </div>

                {s.slug === "exposure-assessment" && (
                  <div className="mt-10 pt-8 border-t border-line/60">
                    <div className="grid sm:grid-cols-2 gap-10">
                      <div className="min-w-0">
                        <p className="eyebrow">What it costs</p>
                        <div className="mt-4 overflow-x-auto">
                          <table className="w-full min-w-[340px] text-left border-collapse">
                            <thead>
                              <tr className="border-b border-line">
                                <th className="pb-3 pr-6 font-display text-base font-normal text-bone">
                                  Practice size
                                </th>
                                <th className="pb-3 font-display text-base font-normal text-bone">
                                  Fee
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              {PRICING.map((row) => (
                                <tr key={row.size} className="border-b border-line/60">
                                  <td className="py-3 pr-6 text-muted">{row.size}</td>
                                  <td className="py-3 font-display text-lg text-bone">{row.fee}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                        <p className="mt-4 text-sm text-dim">
                          Fixed. No expenses, no hourly overrun, no change orders.
                        </p>
                      </div>

                      <div>
                        <p className="eyebrow">What it does not cover</p>
                        <ul className="mt-4 space-y-3">
                          {NOT_COVERED.map((item) => (
                            <li key={item.title} className="text-sm md:text-base leading-relaxed">
                              <span className="text-bone">{item.title}</span>{" "}
                              <span className="text-muted">{item.body}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <p className="mt-8 font-display italic text-lg md:text-xl text-bone">
                      Most of what an assessment finds costs nothing to fix. We have no
                      commercial interest in those items and recommend you do them
                      regardless.
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-line bg-ink-900">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-20 md:py-24">
          <p className="eyebrow">Not sure where to start</p>
          <h2 className="mt-6 font-display text-2xl md:text-3xl text-bone max-w-2xl">
            Start with the assessment. It produces something useful before anything else
            changes hands.
          </h2>
          <p className="mt-5 text-base md:text-lg leading-relaxed text-muted max-w-2xl">
            A written report, a fixed fee, no system required. That&apos;s deliberate — a
            consultancy is supposed to begin with judgement, not a purchase.
          </p>
          <div className="mt-10">
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
