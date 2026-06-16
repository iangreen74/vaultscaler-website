// Route: / (VaultScaler company homepage — Studio Habitat positioning)
import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE } from '@/lib/site';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'VaultScaler | Local-first AI for biological discovery.',
  description:
    'VaultScaler builds evidence-grade systems for observing living systems with cameras, edge compute, and uncertainty-aware interpretation. Studio Habitat Labs is our live public proof.',
  alternates: {
    canonical: `${SITE.url}/`,
  },
  keywords: SITE.keywords,
  openGraph: {
    title: 'VaultScaler | Local-first AI for biological discovery.',
    description:
      'Evidence-grade systems for observing living systems with cameras, edge compute, and uncertainty-aware interpretation. Studio Habitat Labs is our live public proof.',
    type: 'website',
    url: `${SITE.url}/`,
    images: [{ url: '/og.jpg', width: 1200, height: 630, alt: 'VaultScaler — local-first AI for biological discovery' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VaultScaler | Local-first AI for biological discovery.',
    description:
      'Evidence-grade systems for observing living systems with cameras, edge compute, and uncertainty-aware interpretation. Studio Habitat Labs is our live public proof.',
    images: ['/og.jpg'],
  },
};

type Product = {
  id: string;
  name: string;
  tagline: string;
  body: string;
  badge: 'Available now' | 'Prototype live' | 'Coming soon';
};

const products: Product[] = [
  {
    id: 'labs',
    name: 'Studio Habitat Labs',
    tagline: 'Live AI-assisted phenotyping lab',
    body:
      'Our live public proof: local-first observation with camera and edge compute, producing evidence packets and uncertainty-aware measurement — separating biological change from measurement artifact, with no overclaiming.',
    badge: 'Available now',
  },
  {
    id: 'console',
    name: 'Studio Habitat Phenotyping Console',
    tagline: 'Evidence-grade phenotyping software',
    body:
      'The software layer for the lab — surface coverage, image quality, anomaly surprise, and evidence validity computed from local observations, with measurement confidence carried alongside every reading.',
    badge: 'Coming soon',
  },
  {
    id: 'radio',
    name: 'Studio Habitat Radio',
    tagline: 'Creative stream layer',
    body:
      'The always-on creative stream layer — a public, ambient window into the lab as it observes living systems in real time.',
    badge: 'Prototype live',
  },
];

function Badge({ kind }: { kind: Product['badge'] }) {
  const available = kind !== 'Coming soon';
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
              Local-first AI for biological discovery.
            </h1>

            <p className="text-lg md:text-xl text-primary-1 max-w-2xl leading-relaxed mb-10">
              VaultScaler builds evidence-grade systems for observing living systems with cameras,
              edge compute, and uncertainty-aware interpretation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact/"
                className="inline-block px-8 py-4 bg-white text-primary-3 rounded-full font-bold text-lg hover:bg-gray-100 transition-all shadow-2xl hover:scale-105 transform focus:outline-none focus:ring-4 focus:ring-white/50 text-center"
              >
                Request a Consultation
              </Link>
              <Link
                href="#labs"
                className="inline-block px-8 py-4 border-2 border-white/40 text-white rounded-full font-semibold text-lg hover:bg-white/10 hover:border-white/60 transition-all focus:outline-none focus:ring-4 focus:ring-white/30 text-center"
              >
                See Studio Habitat Labs
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Studio Habitat Labs — primary feature */}
      <section id="labs" className="scroll-mt-20 py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-primary-3 text-sm font-semibold uppercase tracking-wide mb-3">
            Studio Habitat Labs
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-900 leading-tight">
            Our live public proof: an AI-assisted phenotyping lab.
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mb-10">
            Studio Habitat Labs measures surface coverage, image quality, anomaly surprise, and
            evidence validity from local observations. Every reading carries its own uncertainty, so
            biological change is never confused with a measurement artifact.
          </p>
          <ul className="grid sm:grid-cols-2 gap-x-10 gap-y-4 max-w-3xl">
            {[
              'Live AI-assisted phenotyping lab',
              'Local-first observation',
              'Camera + edge compute + evidence packets',
              'Uncertainty-aware measurement',
              'Separates biological change from measurement artifact',
              'No overclaiming',
            ].map((point) => (
              <li key={point} className="flex items-start gap-3 text-gray-700">
                <svg className="w-5 h-5 text-primary-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Product cards */}
      <section className="pt-4 pb-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {products.map((p) => (
              <div
                key={p.id}
                id={p.id}
                className="scroll-mt-20 flex flex-col bg-white rounded-2xl p-8 shadow-sm border-2 border-gray-200 hover:border-primary-3 hover:shadow-lg transition-all"
              >
                <div className="flex items-start justify-between gap-3 mb-4">
                  <h3 className="text-xl font-bold text-gray-900">{p.name}</h3>
                  <Badge kind={p.badge} />
                </div>
                <p className="text-primary-3 text-sm font-medium mb-4">{p.tagline}</p>
                <p className="text-gray-600 leading-relaxed mb-6 flex-grow">{p.body}</p>
                <Link
                  href="/contact/"
                  className="text-primary-3 font-semibold text-sm inline-flex items-center gap-1 hover:gap-2 transition-all"
                >
                  Request a Consultation
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Evidence-grade approach */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-primary-3">
            Evidence, not claims
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            VaultScaler is the trust layer behind Studio Habitat. We treat observation as evidence:
            local-first capture, measurement validity carried with every reading, and uncertainty
            made explicit. The goal is to surface what changed and how confident we are — not to
            promise outcomes we cannot measure.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary-3">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Working with living systems?</h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Tell us what you need to observe. We&rsquo;ll show you what evidence-grade, local-first
            measurement can do for it.
          </p>
          <Link
            href="/contact/"
            className="inline-block px-8 py-4 bg-white text-primary-3 rounded-full font-bold hover:bg-gray-100 transition-all text-lg shadow-lg hover:scale-105 transform"
          >
            Request a Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
