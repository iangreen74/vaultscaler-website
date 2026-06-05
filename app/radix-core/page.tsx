// Route: /radix-core (GPU Orchestration — roadmap)
import type { Metadata } from 'next';
import { TrackedCTALink } from '@/components/TrackedLink';
import { SITE } from '@/lib/site';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Radix Core: GPU Orchestration | VaultScaler',
  description:
    'Radix Core is a governed agent that helps you schedule, scale, and govern AI workloads on the GPU fleet you already own — no stack changes required. Coming soon.',
  alternates: { canonical: `${SITE.url}/radix-core/` },
  keywords: [
    'GPU orchestration',
    'GPU scheduling',
    'AI workload scheduling',
    'GPU fleet utilization',
    'governed AI agent',
  ],
  openGraph: {
    title: 'Radix Core: GPU Orchestration | VaultScaler',
    description:
      'Get more from the GPU fleet you already own — schedule, scale, and govern AI workloads. Coming soon.',
    type: 'website',
    url: `${SITE.url}/radix-core/`,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Radix Core: GPU Orchestration | VaultScaler',
    description:
      'Get more from the GPU fleet you already own — schedule, scale, and govern AI workloads. Coming soon.',
  },
};

export default function RadixCorePage() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.url },
      { '@type': 'ListItem', position: 2, name: 'Radix Core', item: `${SITE.url}/radix-core/` },
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
            Radix Core
          </h1>
          <p className="text-xl text-primary-1 font-medium mb-6">GPU Orchestration</p>
          <p className="text-lg md:text-xl text-white/85 max-w-2xl leading-relaxed">
            Get more from the GPU fleet you already own — schedule, scale, and govern AI workloads,
            no stack changes required.
          </p>
        </div>
      </section>

      {/* Body */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-lg text-gray-700 leading-relaxed">
          <p>
            GPUs are expensive, and most fleets leave capacity on the table. Radix Core is designed to
            help you reach more of what you already pay for — placing and balancing AI workloads across
            your fleet so the hardware stays busy on the work that matters.
          </p>
          <p>
            The intent is for it to fit the infrastructure you have rather than asking you to rebuild
            around it: no migration, no retraining your team, no changes to how your workloads are
            written. You set the policy for how capacity is shared; Radix Core works within it.
          </p>
          <p>
            And like every VaultScaler agent, it is meant to stay governable — what it may schedule,
            scale, and touch is declared up front and enforced, not left to trust.
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
            Radix Core isn&rsquo;t available yet. Join the waitlist to hear when it is, or tell us about
            your fleet and what you&rsquo;re trying to get out of it.
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
            Like every VaultScaler agent, Radix Core is designed to ship with an Agent Passport —
            five declarations covering its identity, who may use it, what it may touch, what it may do,
            and how it ends, enforced against the permissions actually deployed. Inspectable, diffable,
            and verifiable against the live deployment.
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
              trackingLocation="Radix Core CTA"
              className="px-10 py-4 bg-white text-primary-3 rounded-full font-bold text-lg hover:bg-gray-100 transition-all shadow-lg hover:scale-105 transform focus:outline-none focus:ring-4 focus:ring-white/50"
            >
              Join the waitlist
            </TrackedCTALink>
            <TrackedCTALink
              href="/contact/"
              trackingName="Tell us about your use case"
              trackingLocation="Radix Core CTA"
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
