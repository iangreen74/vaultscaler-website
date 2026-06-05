// Route: /redoubt (Intrusion Containment — roadmap)
import type { Metadata } from 'next';
import { TrackedCTALink } from '@/components/TrackedLink';
import { SITE } from '@/lib/site';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Redoubt: Intrusion Containment | VaultScaler',
  description:
    'Redoubt is a governed agent intended to contain a breach inside your own environment — isolating a compromised instance, with every action audited. Coming soon.',
  alternates: { canonical: `${SITE.url}/redoubt/` },
  keywords: [
    'intrusion containment',
    'breach containment',
    'incident response agent',
    'governed AI agent',
    'security automation',
  ],
  openGraph: {
    title: 'Redoubt: Intrusion Containment | VaultScaler',
    description:
      'A governed agent intended to contain a breach inside your own environment, with every action audited. Coming soon.',
    type: 'website',
    url: `${SITE.url}/redoubt/`,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Redoubt: Intrusion Containment | VaultScaler',
    description:
      'A governed agent intended to contain a breach inside your own environment, with every action audited. Coming soon.',
  },
};

export default function RedoubtPage() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.url },
      { '@type': 'ListItem', position: 2, name: 'Redoubt', item: `${SITE.url}/redoubt/` },
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
            Redoubt
          </h1>
          <p className="text-xl text-primary-1 font-medium mb-6">Intrusion Containment</p>
          <p className="text-lg md:text-xl text-white/85 max-w-2xl leading-relaxed">
            A governed agent designed to contain a breach inside your own environment — isolating a
            compromised instance the moment something&rsquo;s wrong, with every action audited.
          </p>
        </div>
      </section>

      {/* Body — direction/intent only */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-lg text-gray-700 leading-relaxed">
          <p>
            When an instance is compromised, the time between detection and containment is where damage
            spreads. Redoubt is our direction for closing that gap from inside your own environment —
            an agent intended to isolate a suspected instance quickly, so a single compromise has less
            room to become an incident.
          </p>
          <p>
            We intend for containment to be deliberate and reversible, not a blunt kill switch: the aim
            is to cut a compromised instance off from what it could reach while leaving a clear,
            audited record of every action taken and why. The goal is to help your responders move
            faster, not to take the decision out of their hands.
          </p>
          <p>
            This is a statement of where Redoubt is headed, not a description of a product you can buy
            today. Nothing here should be read as a guarantee of behavior or protection.
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
            Redoubt isn&rsquo;t available yet. Join the waitlist to follow its progress, or tell us
            about the environment you&rsquo;re trying to defend.
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
            An agent that can isolate part of your environment has to be the most governable thing you
            run. Redoubt is intended to ship with an Agent Passport — five declarations covering its
            identity, who may use it, what it may touch, what it may do, and how it ends, enforced
            against the permissions actually deployed. Inspectable, diffable, and verifiable against the
            live deployment.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary-3">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Follow Redoubt&rsquo;s progress</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <TrackedCTALink
              href="/waitlist/"
              trackingName="Join the waitlist"
              trackingLocation="Redoubt CTA"
              className="px-10 py-4 bg-white text-primary-3 rounded-full font-bold text-lg hover:bg-gray-100 transition-all shadow-lg hover:scale-105 transform focus:outline-none focus:ring-4 focus:ring-white/50"
            >
              Join the waitlist
            </TrackedCTALink>
            <TrackedCTALink
              href="/contact/"
              trackingName="Tell us about your use case"
              trackingLocation="Redoubt CTA"
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
