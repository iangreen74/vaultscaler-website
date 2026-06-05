// Route: /warden (DevSecOps — roadmap)
import type { Metadata } from 'next';
import { TrackedCTALink } from '@/components/TrackedLink';
import { SITE } from '@/lib/site';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Warden: DevSecOps | VaultScaler',
  description:
    'Warden is a governed agent intended to run in your CI/CD and enforce your security policy as code ships — before it reaches production. Coming soon.',
  alternates: { canonical: `${SITE.url}/warden/` },
  keywords: [
    'DevSecOps',
    'policy as code',
    'CI/CD security',
    'shift-left security',
    'governed AI agent',
  ],
  openGraph: {
    title: 'Warden: DevSecOps | VaultScaler',
    description:
      'A governed agent intended to enforce your security policy as code ships, before it reaches production. Coming soon.',
    type: 'website',
    url: `${SITE.url}/warden/`,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Warden: DevSecOps | VaultScaler',
    description:
      'A governed agent intended to enforce your security policy as code ships, before it reaches production. Coming soon.',
  },
};

export default function WardenPage() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.url },
      { '@type': 'ListItem', position: 2, name: 'Warden', item: `${SITE.url}/warden/` },
    ],
  };

  return (
    <>
      <JsonLd data={breadcrumbSchema} />

      {/* Hero */}
      <section className="relative min-h-[clamp(440px,55vh,720px)] flex items-center bg-gradient-to-br from-primary-4 via-primary-3 to-primary-3 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/4 -right-1/4 w-[60%] h-[60%] rounded-full bg-primary-2/20 blur-3xl" />
          <div className="absolute -bottom-1/4 -left-1/4 w-[50%] h-[50%] rounded-full bg-primary-1/10 blur-3xl" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-white/10 text-white/90 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-white/70" />
            Coming soon
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight leading-tight">
            Warden
          </h1>
          <p className="text-xl text-primary-1 font-medium mb-6">DevSecOps</p>
          <p className="text-lg md:text-xl text-white/85 max-w-2xl leading-relaxed">
            A governed agent in your CI/CD that enforces your security policy as code ships — before it
            reaches production.
          </p>
        </div>
      </section>

      {/* Body */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-lg text-gray-700 leading-relaxed">
          <p>
            Security policy that lives in a document gets read once and drifts from there. Warden is
            designed to put that policy where the work happens — in your pipeline, checking changes as
            they move toward production rather than after they land.
          </p>
          <p>
            The intent is to make your own rules the gate: you define what&rsquo;s allowed, and Warden
            is meant to hold the line on every change, consistently, so the same standard applies
            whether it&rsquo;s a Friday-afternoon hotfix or a major release. The aim is fewer surprises
            in production and a clear record of what was checked.
          </p>
          <p>
            And like every VaultScaler agent, it&rsquo;s designed to stay governable — its own authority
            in your pipeline declared up front and enforced, not assumed.
          </p>
        </div>
      </section>

      {/* Coming soon state */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 text-sm font-semibold px-4 py-1.5 rounded-full bg-gray-100 text-gray-600">
            <span className="w-2 h-2 rounded-full bg-gray-400" />
            Coming soon — on the VaultScaler roadmap
          </span>
          <p className="mt-4 text-gray-600 max-w-xl mx-auto">
            Warden isn&rsquo;t available yet. Join the waitlist to hear when it is, or tell us about the
            policy you&rsquo;re trying to enforce.
          </p>
        </div>
      </section>

      {/* Agent Passport callout */}
      <section className="py-16 bg-primary-4">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Built around the Agent Passport
          </h2>
          <p className="text-lg text-white/80 leading-relaxed">
            An agent that can block a release needs to be accountable for exactly that. Warden is
            intended to ship with an Agent Passport — five declarations covering its identity, who may
            use it, what it may touch, what it may do, and how it ends, enforced against the permissions
            actually deployed. Inspectable, diffable, and verifiable against the live deployment.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary-3">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Be first to know</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <TrackedCTALink
              href="/waitlist/"
              trackingName="Join the waitlist"
              trackingLocation="Warden CTA"
              className="px-10 py-4 bg-white text-primary-3 rounded-full font-bold text-lg hover:bg-gray-100 transition-all shadow-lg hover:scale-105 transform focus:outline-none focus:ring-4 focus:ring-white/50"
            >
              Join the waitlist
            </TrackedCTALink>
            <TrackedCTALink
              href="/contact/"
              trackingName="Tell us about your use case"
              trackingLocation="Warden CTA"
              className="px-8 py-4 border-2 border-white/40 text-white rounded-full font-semibold text-lg hover:bg-white/10 hover:border-white/60 transition-all"
            >
              Tell us about your use case
            </TrackedCTALink>
          </div>
        </div>
      </section>
    </>
  );
}
