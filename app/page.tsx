// Route: / (VaultScaler company homepage — Passport + four products)
import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE } from '@/lib/site';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: "VaultScaler | Put AI to work on data you can't let leave.",
  description:
    'VaultScaler builds AI agents that run entirely inside your own cloud — ask questions of, and act on, your most sensitive data without it ever leaving your control. Every agent ships with an Agent Passport.',
  alternates: {
    canonical: `${SITE.url}/`,
  },
  keywords: SITE.keywords,
  openGraph: {
    title: "VaultScaler | Put AI to work on data you can't let leave.",
    description:
      'AI agents that run entirely inside your own cloud. Your most sensitive data never leaves your control. Every agent ships with an Agent Passport.',
    type: 'website',
    url: `${SITE.url}/`,
    images: [{ url: '/forgewing/opengraph-image', width: 1200, height: 630, alt: 'VaultScaler — AI agents that run inside your own cloud' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "VaultScaler | Put AI to work on data you can't let leave.",
    description:
      'AI agents that run entirely inside your own cloud. Your most sensitive data never leaves your control. Every agent ships with an Agent Passport.',
    images: ['/forgewing/opengraph-image'],
  },
};

type Product = {
  name: string;
  tagline: string;
  body: string;
  badge: 'Available now' | 'Coming soon';
  cta: string;
  href: string;
};

const products: Product[] = [
  {
    name: 'Forgewing',
    tagline: 'Sovereign Research Assistant',
    body: 'Ask questions of your own documents and get grounded, cited answers — then turn them into reports. Runs entirely in your cloud; your data never leaves.',
    badge: 'Available now',
    cta: 'Request a demo',
    href: '/forgewing/',
  },
  {
    name: 'Radix Core',
    tagline: 'GPU Orchestration',
    body: 'Get more from the GPU fleet you already own — schedule, scale, and govern AI workloads, no stack changes required.',
    badge: 'Coming soon',
    cta: 'Join the waitlist',
    href: '/radix-core/',
  },
  {
    name: 'Redoubt',
    tagline: 'Intrusion Containment',
    body: 'A governed agent that contains a breach inside your own environment — isolating a compromised instance the moment something’s wrong, every action audited.',
    badge: 'Coming soon',
    cta: 'Join the waitlist',
    href: '/redoubt/',
  },
  {
    name: 'Warden',
    tagline: 'DevSecOps',
    body: 'A governed agent in your CI/CD that enforces your security policy as code ships — before it reaches production.',
    badge: 'Coming soon',
    cta: 'Join the waitlist',
    href: '/warden/',
  },
];

function Badge({ kind }: { kind: Product['badge'] }) {
  const available = kind === 'Available now';
  return (
    <span
      className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full ${
        available
          ? 'bg-pop-light/20 text-primary-4'
          : 'bg-gray-100 text-gray-500'
      }`}
    >
      <span className={`w-1.5 h-1.5 rounded-full ${available ? 'bg-pop-dark' : 'bg-gray-400'}`} />
      {kind}
    </span>
  );
}

export default function Home() {
  const webSiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'VaultScaler',
    url: `${SITE.url}/`,
    description: SITE.description,
  };

  return (
    <>
      <JsonLd data={webSiteSchema} />

      {/* Hero */}
      <section className="relative min-h-[clamp(520px,62vh,820px)] flex items-center bg-gradient-to-br from-primary-4 via-primary-3 to-primary-3 overflow-hidden pt-12 pb-16">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/4 -right-1/4 w-[60%] h-[60%] rounded-full bg-primary-2/20 blur-3xl" />
          <div className="absolute -bottom-1/4 -left-1/4 w-[50%] h-[50%] rounded-full bg-primary-1/10 blur-3xl" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
              Put AI to work on data you can&rsquo;t let leave.
            </h1>

            <p className="text-lg md:text-xl text-primary-1 max-w-2xl leading-relaxed mb-10">
              VaultScaler builds AI agents that run entirely inside your own cloud — so you can ask
              questions of, and act on, your most sensitive data without it ever leaving your control.
              Every agent ships with an Agent Passport that declares and enforces exactly what it&rsquo;s
              allowed to do.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact/"
                className="inline-block px-8 py-4 bg-white text-primary-3 rounded-full font-bold text-lg hover:bg-gray-100 transition-all shadow-2xl hover:scale-105 transform focus:outline-none focus:ring-4 focus:ring-white/50 text-center"
              >
                Request a demo
              </Link>
              <Link
                href="/waitlist/"
                className="inline-block px-8 py-4 border-2 border-white/40 text-white rounded-full font-semibold text-lg hover:bg-white/10 hover:border-white/60 transition-all focus:outline-none focus:ring-4 focus:ring-white/30 text-center"
              >
                Join the waitlist
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Product cards */}
      <section className="pt-16 pb-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {products.map((p) => (
              <div
                key={p.name}
                className="flex flex-col bg-white rounded-2xl p-8 shadow-sm border-2 border-gray-200 hover:border-primary-3 hover:shadow-lg transition-all"
              >
                <div className="flex items-center justify-between gap-3 mb-4">
                  <h2 className="text-2xl font-bold text-gray-900">{p.name}</h2>
                  <Badge kind={p.badge} />
                </div>
                <p className="text-primary-3 text-sm font-medium mb-4">{p.tagline}</p>
                <p className="text-gray-600 leading-relaxed mb-6 flex-grow">{p.body}</p>
                <Link
                  href={p.href}
                  className="text-primary-3 font-semibold text-sm inline-flex items-center gap-1 hover:gap-2 transition-all"
                >
                  {p.cta}
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Agent Passport */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-primary-3">
            Every agent ships with an Agent Passport
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Five declarations — its identity, who may use it, what data it may touch, what it may do,
            and how it ends — enforced against the permissions actually deployed. Inspectable, diffable,
            verifiable against the live deployment. Standard cryptography; the novelty is in the
            governance.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary-3">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Have a use case in mind?</h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Tell us about the data you can&rsquo;t let leave. We&rsquo;ll show you what an agent in your
            own cloud can do with it.
          </p>
          <Link
            href="/contact/"
            className="inline-block px-8 py-4 bg-white text-primary-3 rounded-full font-bold hover:bg-gray-100 transition-all text-lg shadow-lg hover:scale-105 transform"
          >
            Get in touch
          </Link>
        </div>
      </section>
    </>
  );
}
