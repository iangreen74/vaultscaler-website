// Route: / (VaultScaler company homepage — an edge computer-vision company)
// VaultScaler is the parent brand; Vivaliux is product one, at /vivaliux. The
// structure is built to hold product two and three later without a redesign —
// add cards to "What we build"; do not invent placeholder products.
import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE } from '@/lib/site';
import JsonLd from '@/components/JsonLd';

const TITLE = 'VaultScaler — an edge computer-vision company';
const DESC =
  'VaultScaler builds edge computer-vision instruments that measure the physical world honestly — and run entirely on hardware you own. The camera does the seeing; we make the measurement trustworthy. Nothing goes to the cloud.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: `${SITE.url}/` },
  keywords: SITE.keywords,
  openGraph: {
    title: TITLE,
    description: DESC,
    type: 'website',
    url: `${SITE.url}/`,
    images: [{ url: '/og.jpg', width: 1200, height: 630, alt: 'VaultScaler — an edge computer-vision company' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESC,
    images: ['/og.jpg'],
  },
};

const pillars = [
  {
    k: 'At the edge',
    h: 'At the edge.',
    b: 'Our instruments run on hardware you own. Your data never leaves your site — no cloud dependency, no account, nothing phoned home.',
  },
  {
    k: 'Honest by design',
    h: 'Honest by design.',
    b: 'They measure what they can actually see, and tell you when not to trust a reading. No confident numbers nobody checked.',
  },
  {
    k: 'Owned end to end',
    h: 'Owned end to end.',
    b: 'We build and train our own computer vision, on our own hardware. The intelligence is ours — not rented from a platform that can cut us off.',
  },
];

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
            <p className="text-pop-light text-sm font-semibold uppercase tracking-wide mb-4">
              An edge computer-vision company
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
              We turn ordinary cameras into instruments you can trust.
            </h1>

            <p className="text-lg md:text-xl text-primary-1 max-w-2xl leading-relaxed mb-10">
              VaultScaler builds edge computer-vision instruments that measure the physical world
              honestly — and run entirely on hardware you own. The camera does the seeing; we make the
              measurement trustworthy. Nothing goes to the cloud.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/vivaliux/"
                className="inline-block px-8 py-4 bg-white text-primary-3 rounded-full font-bold text-lg hover:bg-gray-100 transition-all shadow-2xl hover:scale-105 transform focus:outline-none focus:ring-4 focus:ring-white/50 text-center"
              >
                See Vivaliux
              </Link>
              <Link
                href="#work-with-us"
                className="inline-block px-8 py-4 border-2 border-white/40 text-white rounded-full font-semibold text-lg hover:bg-white/10 hover:border-white/60 transition-all focus:outline-none focus:ring-4 focus:ring-white/30 text-center"
              >
                Work with us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* The approach — three pillars */}
      <section id="approach" className="scroll-mt-20 py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-primary-3 max-w-3xl">
            The approach
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {pillars.map((p) => (
              <div
                key={p.k}
                className="flex flex-col bg-white rounded-2xl p-8 shadow-sm border-2 border-gray-200 hover:border-primary-3 hover:shadow-lg transition-all"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">{p.h}</h3>
                <p className="text-gray-600 leading-relaxed">{p.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What we build — products */}
      <section id="products" className="scroll-mt-20 py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-900 max-w-3xl">
            What we build
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mb-12">
            VaultScaler builds a family of edge instruments — each one a camera turned into a
            trustworthy measurement of something real. The first is live today.
          </p>

          {/* Product grid — built to hold product two and three later. No placeholders. */}
          <div className="grid md:grid-cols-2 gap-8">
            <Link
              href="/vivaliux/"
              className="group flex flex-col bg-white rounded-2xl p-8 shadow-sm border-2 border-gray-200 hover:border-primary-3 hover:shadow-lg transition-all"
            >
              <span className="inline-flex w-fit items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-pop-light/20 text-primary-4 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-pop-dark" />
                Live today
              </span>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Vivaliux</h3>
              <p className="text-primary-3 font-semibold mb-4">Honest observability of living systems.</p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Vivaliux watches a living system through an ordinary camera, measures it honestly,
                remembers every reading, and tells you what actually changed. Measure · Remember ·
                Predict.
              </p>
              <span className="mt-auto inline-flex items-center gap-1.5 text-primary-3 font-semibold group-hover:gap-2.5 transition-all">
                Explore Vivaliux <span aria-hidden>→</span>
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* The company — posture */}
      <section className="py-20 bg-primary-4">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white leading-tight">
            Built at the edge, built to last.
          </h2>
          <p className="text-lg text-primary-1 leading-relaxed">
            We think the durable technology of this era is built at the edge — on owned hardware,
            close to a real problem, with data that stays where it belongs. So we build small, honest
            instruments that do one real thing well. No cloud to depend on. No data land-grab. Just
            useful tools, owned by the people who use them.
          </p>
        </div>
      </section>

      {/* Work with us — low-key, near the foot */}
      <section id="work-with-us" className="scroll-mt-20 py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900 leading-tight">
            Have a measurement problem in the physical world?
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mb-8">
            If you&rsquo;ve got something real that a trustworthy camera-based instrument could
            measure, we&rsquo;d like to hear about it.
          </p>
          <Link
            href="/contact/"
            className="inline-block px-8 py-4 bg-primary-3 text-white rounded-full font-bold text-lg hover:bg-primary-4 transition-all shadow-lg hover:scale-105 transform text-center"
          >
            Get in touch
          </Link>
        </div>
      </section>
    </>
  );
}
