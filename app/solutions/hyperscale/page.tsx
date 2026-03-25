// Route: /solutions/hyperscale (Hyperscale & Frontier AI Landing Page)
import type { Metadata } from 'next';
import { TrackedCTALink } from '@/components/TrackedLink';
import { SITE } from '@/lib/site';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Hyperscale & Frontier AI: GPU Fleet Optimization | VaultScaler',
  description: 'Maximize GPU utilization across your fleet. Up to 21% training throughput gains and $2.5M estimated savings per 1K GPUs annually.',
  alternates: {
    canonical: `${SITE.url}/solutions/hyperscale/`,
  },
  keywords: [
    'GPU fleet optimization',
    'hyperscale GPU management',
    'frontier AI infrastructure',
    'GPU cluster management',
    'GPU utilization',
    'multi-tenant GPU scheduling',
    'Kubernetes GPU scheduler',
    'data center GPU efficiency',
    'GPU cloud provider',
    'enterprise GPU scheduling',
  ],
  openGraph: {
    title: 'Hyperscale & Frontier AI: GPU Fleet Optimization | VaultScaler',
    description: 'Maximize GPU utilization across your fleet. Up to 21% training throughput gains with zero stack changes.',
    type: 'website',
    url: `${SITE.url}/solutions/hyperscale/`,
    images: [{ url: '/og.jpg', width: 1200, height: 630, alt: 'Hyperscale & Frontier AI GPU Optimization' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hyperscale & Frontier AI: GPU Fleet Optimization | VaultScaler',
    description: 'Maximize GPU utilization across your fleet. Up to 21% training throughput gains with zero stack changes.',
    images: ['/og.jpg'],
  },
};

export default function HyperscalePage() {
  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Hyperscale & Frontier AI: GPU Fleet Optimization",
    "description": "Maximize GPU utilization across your fleet with Radix Core. Up to 21% training throughput gains, enterprise-grade security, and zero stack changes.",
    "url": `${SITE.url}/solutions/hyperscale/`,
    "provider": {
      "@type": "Organization",
      "name": "VaultScaler",
      "url": `${SITE.url}/`,
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": SITE.url
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Hyperscale & Frontier AI",
        "item": `${SITE.url}/solutions/hyperscale/`
      }
    ]
  };

  return (
    <>
      <JsonLd data={pageSchema} />
      <JsonLd data={breadcrumbSchema} />

      {/* Hero Section */}
      <section className="relative min-h-[clamp(600px,85vh,1000px)] flex items-center justify-center bg-gradient-to-br from-primary-4 via-primary-3 to-primary-3 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/4 -right-1/4 w-[60%] h-[60%] rounded-full bg-pop-light/10 blur-3xl" />
          <div className="absolute -bottom-1/4 -left-1/4 w-[50%] h-[50%] rounded-full bg-pop-dark/30 blur-3xl" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Audience tag */}
          <p className="text-base text-pop-light font-medium mb-6 tracking-wide uppercase">
            For Hyperscale GPU Providers, Frontier AI Labs, and Platform Teams
          </p>

          {/* Main headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
            More GPU Training Throughput. <br className="hidden sm:inline" />
            Powered by Radix Core.
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-10 leading-relaxed">
            Increase fleet utilization and customer satisfaction without new buildout. Radix Core maximizes utilization across your entire fleet, turning idle capacity into throughput gains your CFO will notice.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <TrackedCTALink
              href="/contact"
              trackingName="Contact Sales"
              trackingLocation="Hyperscale Hero"
              className="px-10 py-5 bg-pop-light text-primary-4 rounded-full font-bold text-xl hover:bg-white transition-all shadow-2xl hover:scale-105 transform focus:outline-none focus:ring-4 focus:ring-pop-light/50"
            >
              Contact Radix Core Sales
            </TrackedCTALink>
            <TrackedCTALink
              href="/waitlist"
              trackingName="Join Waitlist"
              trackingLocation="Hyperscale Hero"
              className="px-8 py-4 border-2 border-white/30 text-white rounded-full font-semibold hover:bg-white/10 hover:border-white/50 transition-all text-lg"
            >
              Join the Radix Core Waitlist
            </TrackedCTALink>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-primary-3">
            Marginal Gains Matter at Scale
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            At fleet scale, small inefficiencies compound into massive waste. Traditional schedulers treat GPUs as identical units, ignoring the resource imbalances that kill utilization.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
                </svg>
              </div>
              <h3 className="font-bold text-xl mb-3 text-primary-3">Stranded Capacity</h3>
              <p className="text-gray-600 leading-relaxed">
                Memory-bound jobs block compute-bound jobs. Power limits throttle entire nodes. Your fleet needs to run at 85%+ utilization. Is it there?
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-xl mb-3 text-primary-3">CFO Pressure</h3>
              <p className="text-gray-600 leading-relaxed">
                GPU and compute spend is a scrutinized line item. Strong utilization metrics make for easier conversations.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-xl mb-3 text-primary-3">Scaling</h3>
              <p className="text-gray-600 leading-relaxed">
                You need compute today. New capacity is out there, but it costs money and time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Native Integration */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm text-pop-dark font-semibold mb-3 uppercase tracking-wide">Native Integration</p>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-primary-3">
                Deploy in Minutes. Not Months.
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Radix Core deploys as a Helm chart on your existing infrastructure. No migration. No retraining your team. No changes to your existing workflows. Install, configure, and start seeing results the same day.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-pop-dark mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Kubernetes native support</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-pop-dark mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Single Helm chart deployment</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-pop-dark mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Zero changes to existing training code</span>
                </li>
              </ul>
            </div>
            <div className="bg-gray-900 rounded-2xl p-6 font-mono text-sm overflow-hidden">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <pre className="text-gray-300 overflow-x-auto">
<code>{`# Add Helm repo
$ helm repo add radix \\
    https://charts.radix.vaultscaler.com

# Install Radix Core
$ helm install radix-core radix/radix-core \\
    --namespace radix-system \\
    --create-namespace

# Verify installation
$ kubectl get pods -n radix-system
NAME                          READY   STATUS    RESTARTS   AGE
radix-agent-7f8b4d6c5-x2k9l   1/1    Running   0          47s
radix-dashboard-5c9a8e3f1-m4n  1/1    Running   0          47s
radix-observer-6d4b2a9c8-q7w3  1/1    Running   0          46s`}</code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Pillar 4: Enterprise Security */}
      <section className="py-20 bg-primary-4">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm text-pop-light font-semibold mb-3 uppercase tracking-wide">Enterprise Security</p>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">
              Security That Satisfies Your Infosec Team
            </h2>
            <p className="text-lg text-white/80 max-w-3xl mx-auto">
              Your GPU fleet processes sensitive training data. Radix Core is built for the most demanding security environments, with air-gapped deployment and zero data egress options.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="w-12 h-12 bg-pop-light/20 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-pop-light" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2 text-pop-light">Air-Gapped Ready</h3>
              <p className="text-white/70 text-sm leading-relaxed">
                Deploy in fully disconnected environments. No internet access required after installation.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="w-12 h-12 bg-pop-light/20 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-pop-light" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2 text-pop-light">SLSA Level 3</h3>
              <p className="text-white/70 text-sm leading-relaxed">
                Cryptographic attestations for build provenance. Verified supply chain security.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="w-12 h-12 bg-pop-light/20 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-pop-light" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2 text-pop-light">Zero Egress</h3>
              <p className="text-white/70 text-sm leading-relaxed">
                Your training data never leaves your infrastructure. Telemetry is opt-in only.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-primary-3">
            Ready to Maximize Your GPU Fleet?
          </h2>


          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <TrackedCTALink
              href="/contact/"
              trackingName="Get in Touch"
              trackingLocation="Hyperscale CTA"
              className="px-10 py-5 bg-pop-light text-primary-4 rounded-full font-bold hover:bg-white transition-all text-xl shadow-2xl hover:shadow-pop-light/50 hover:scale-105 transform focus:outline-none focus:ring-4 focus:ring-pop-light/50"
            >
              Get in Touch
            </TrackedCTALink>

          </div>

        </div>
      </section>
    </>
  );
}
