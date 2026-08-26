// Route: /why-local — the architecture-vs-policy argument. §5 of
// business/strategy/VaultScaler_Positioning_and_Services.md. Written as compliance,
// not values — especially the GDPR passage.
import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Why local | VaultScaler",
  description:
    "A cloud vendor's privacy is a policy. VaultScaler's is an architecture: no uplink, no vendor account, no server, no remote access — including for VaultScaler. The checkable consequences, and why that's a materially easier position under GDPR.",
  alternates: { canonical: `${SITE.url}/why-local/` },
  openGraph: {
    title: "Why local | VaultScaler",
    description:
      "Their privacy is a policy. Ours is an architecture. No uplink, no vendor account, no remote access — not even for us.",
    url: `${SITE.url}/why-local/`,
    type: "website",
    images: ["/og.jpg"],
  },
};

const CONSEQUENCES = [
  {
    n: "01",
    title: "There is nothing to breach, subpoena, or browse.",
    body: "No copy of what your system sees exists anywhere else. There's no second location for a court order to name, no vendor database for an attacker to reach, no backup on infrastructure you've never seen.",
  },
  {
    n: "02",
    title: "If someone wants what your system saw, they come to you.",
    body: "Not to a vendor, not to a data center in another country. There is one copy, and it is in your building, under your control.",
  },
  {
    n: "03",
    title: "Support happens in person, because there is no other way in.",
    body: "There's no remote-access account for VaultScaler to sign into, no support tunnel, no admin backdoor. A change to your system means someone is physically there to make it.",
  },
];

export default function WhyLocal() {
  const ld = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Why local — VaultScaler",
    url: `${SITE.url}/why-local/`,
    description:
      "The architecture-vs-policy argument: no uplink, no vendor account, no remote access — including for VaultScaler. Checkable consequences, and the GDPR framing for Europe.",
  };

  return (
    <>
      <JsonLd data={ld} />

      <section className="relative overflow-hidden border-b border-line">
        <div aria-hidden className="spotlight absolute inset-0" />
        <div className="relative max-w-6xl mx-auto px-5 sm:px-8 pt-20 pb-16 md:pt-28 md:pb-20">
          <p className="eyebrow">Why local</p>
          <h1 className="mt-6 font-display font-light text-4xl md:text-6xl leading-[1.06] text-bone max-w-3xl tracking-tight">
            Their privacy is a policy.
            <br />
            Ours is an architecture.
          </h1>
          <p className="mt-7 text-lg md:text-xl leading-relaxed text-muted max-w-2xl">
            A cloud vendor promises not to misuse your data. That promise survives
            exactly as long as their management, their finances, their jurisdiction, and
            their security do. VaultScaler&apos;s systems have no uplink, no vendor
            account, no server, and no remote access — including for VaultScaler.
          </p>
        </div>
      </section>

      {/* The checkable consequences */}
      <section>
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-8 md:py-12">
          <p className="eyebrow px-1">The checkable consequences</p>
          {CONSEQUENCES.map((c) => (
            <div
              key={c.n}
              className="grid md:grid-cols-[6rem_1fr] gap-x-8 gap-y-3 py-9 border-t border-line first:border-t-0 first:mt-8"
            >
              <div className="font-display text-3xl md:text-4xl text-dim">{c.n}</div>
              <div className="max-w-2xl">
                <h2 className="font-display text-xl md:text-2xl text-bone">{c.title}</h2>
                <p className="mt-4 text-base md:text-lg leading-relaxed text-muted">{c.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* For Europe, specifically */}
      <section className="border-t border-line bg-ink-900">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-20 md:py-28">
          <p className="eyebrow">For Europe, specifically</p>
          <h2 className="mt-6 font-display text-2xl md:text-3xl text-bone max-w-2xl">
            This is a compliance argument, not a values one.
          </h2>
          <div className="mt-8 max-w-prose">
            <p className="text-base md:text-lg leading-relaxed text-muted">
              No third-party processor sits in the chain. No personal data crosses a
              border. No retention terms are written by a vendor. Biometric processing
              can be demonstrated, room by room, to be either enabled by the owner&apos;s
              choice or absent entirely.
            </p>
            <p className="mt-5 text-base md:text-lg leading-relaxed text-muted">
              That is a materially easier position under GDPR than any cloud-based
              system — and it is the same product. Only the register changes.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-line">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-24 md:py-32 text-center">
          <h2 className="font-display font-light text-3xl md:text-5xl text-bone">
            Ask us what a vendor can't answer.
          </h2>
          <p className="mt-5 text-lg text-muted max-w-xl mx-auto">
            Where your data actually goes today, and what it would take to keep it home.
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
