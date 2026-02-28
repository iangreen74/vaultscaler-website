// Route: /radix/core (Radix Core - GPU Training Optimization)
import type { Metadata } from 'next';
import { TrackedCTALink } from '@/components/TrackedLink';
import { SITE } from '@/lib/site';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Radix Core: Up to 21% Faster GPU Training | VaultScaler',
  description: 'Radix Core uses closed-loop control to balance memory, compute, and power across training runs. Up to 21% throughput improvement over FIFO scheduling. Deploy via Helm chart with zero stack changes.',
  alternates: {
    canonical: `${SITE.url}/radix/core/`,
  },
  keywords: [
    'GPU scheduling optimization',
    'GPU training throughput',
    'GPU utilization',
    'Kubernetes GPU scheduler',
    'model training optimization',
    'GPU cluster optimization',
    'AI workload management',
    'GPU fleet optimization',
    'closed-loop GPU scheduling',
  ],
  openGraph: {
    title: 'Radix Core: Up to 21% Faster GPU Training',
    description: 'Closed-loop GPU scheduling that balances memory, compute, and power. Up to 21% throughput improvement. Zero stack changes.',
    type: 'website',
    url: `${SITE.url}/radix/core/`,
    images: [{ url: '/og/radix-core.png', width: 1200, height: 630, alt: 'Radix Core - GPU Training Optimization' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Radix Core: Up to 21% Faster GPU Training',
    description: 'Closed-loop GPU scheduling that balances memory, compute, and power. Up to 21% throughput improvement.',
    images: ['/og/radix-core.png'],
  },
};

const CheckIcon = ({ className = "text-primary-3" }: { className?: string }) => (
  <svg className={`w-5 h-5 ${className} flex-shrink-0`} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

export default function RadixCorePage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": SITE.url },
      { "@type": "ListItem", "position": 2, "name": "Radix Core", "item": `${SITE.url}/radix/core/` },
    ]
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Radix Core",
    applicationCategory: "DevOps/Monitoring",
    operatingSystem: "Kubernetes 1.26+",
    offers: [
      { "@type": "Offer", name: "Trial", price: "0", priceCurrency: "USD", description: "14-day free trial, up to 400 GPUs" },
      { "@type": "Offer", name: "Radix Core", price: "45", priceCurrency: "USD", description: "Per GPU per month" },
    ],
    author: { "@type": "Organization", name: "VaultScaler" },
    url: `${SITE.url}/radix/core/`,
    description: metadata.description,
    releaseNotes: "General Availability April 6, 2026.",
  };

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={softwareSchema} />

      {/* Hero */}
      <section className="relative min-h-[clamp(600px,90vh,1200px)] flex items-center justify-center bg-gradient-to-br from-primary-4 via-primary-3 to-primary-3 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/4 -right-1/4 w-[60%] h-[60%] rounded-full bg-pop-light/10 blur-3xl" />
          <div className="absolute -bottom-1/4 -left-1/4 w-[50%] h-[50%] rounded-full bg-pop-dark/30 blur-3xl" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-5xl sm:text-6xl md:text-7xl font-bold text-pop-light mb-6 tracking-tight">
            Radix Core
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
            Up to 21% Faster <br className="hidden sm:inline" />
            GPU Training
          </h1>

          <p className="text-lg md:text-xl text-pop-light max-w-3xl mx-auto mb-10 leading-relaxed">
            Closed-loop GPU scheduling that balances memory, compute, and power across all training runs. No stack changes. Results in minutes.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <TrackedCTALink
              href="/waitlist"
              trackingName="Join Waitlist"
              trackingLocation="Radix Core Hero"
              className="px-10 py-5 bg-pop-light text-primary-4 rounded-full font-bold text-xl hover:bg-white transition-all shadow-2xl hover:scale-105 transform focus:outline-none focus:ring-4 focus:ring-pop-light/50"
            >
              Join Waitlist
            </TrackedCTALink>
            <TrackedCTALink
              href="/solutions/hyperscale/"
              trackingName="Hyperscale Solutions"
              trackingLocation="Radix Core Hero"
              className="px-8 py-4 border-2 border-white/30 text-white rounded-full font-semibold hover:bg-white/10 hover:border-white/50 transition-all text-lg"
            >
              Hyperscale Solutions
            </TrackedCTALink>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-primary-3">
            The Training Problem
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            GPU schedulers treat hardware as monolithic units. They account for GPU count but ignore memory, compute, and power constraints across training runs.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 hover:shadow-md hover:border-gray-300 transition-all">
              <div className="w-12 h-12 bg-pop-light rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <h3 className="font-bold text-xl mb-3 text-primary-3">Stranded Capacity</h3>
              <p className="text-gray-600 leading-relaxed">
                Memory-bound jobs block compute-bound jobs. Power limits throttle entire nodes. Your fleet has capacity you can't reach.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 hover:shadow-md hover:border-gray-300 transition-all">
              <div className="w-12 h-12 bg-pop-light rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
                </svg>
              </div>
              <h3 className="font-bold text-xl mb-3 text-primary-3">Throughput Degradation</h3>
              <p className="text-gray-600 leading-relaxed">
                Up to 21% training throughput is lost to naive scheduling (VaultScaler internal benchmarks). At fleet scale, that's millions in wasted compute every year.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 hover:shadow-md hover:border-gray-300 transition-all">
              <div className="w-12 h-12 bg-pop-light rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-xl mb-3 text-primary-3">CFO Pressure</h3>
              <p className="text-gray-600 leading-relaxed">
                GPU spend is a scrutinized line item. You need utilization metrics that justify the investment, not excuses about scheduler limitations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Result */}
      <section className="py-16 bg-primary-3">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-3xl sm:text-4xl font-bold text-white mb-2">Up to 21.4% throughput improvement</p>
          <p className="text-sm text-white/50 mb-2">(VaultScaler internal benchmarks)</p>
          <p className="text-xl text-gray-200">over industry-standard FIFO scheduling</p>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-primary-3">How Radix Core Works</h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Deploy in minutes. See results the same day. No changes to your existing training code or workflow.
          </p>

          <div className="bg-gray-50 border-2 border-gray-200 rounded-2xl p-8 mb-12">
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary-3 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">1</div>
                <h3 className="font-semibold text-primary-3 mb-1">Install</h3>
                <p className="text-gray-600 text-sm">Install the Helm chart on your existing Kubernetes cluster</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary-3 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">2</div>
                <h3 className="font-semibold text-primary-3 mb-1">Configure</h3>
                <p className="text-gray-600 text-sm">Choose zero egress or API mode based on your security requirements</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary-3 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">3</div>
                <h3 className="font-semibold text-primary-3 mb-1">Connect</h3>
                <p className="text-gray-600 text-sm">Port-forward the service and connect to the dashboard</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary-3 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">4</div>
                <h3 className="font-semibold text-primary-3 mb-1">Optimize</h3>
                <p className="text-gray-600 text-sm">Get GPU insights and throughput gains in 60 seconds</p>
              </div>
            </div>
            <p className="text-center text-gray-500 mt-6 text-sm">Works with Kubernetes. Your team's workflow stays the same.</p>
          </div>

          {/* Terminal mockup */}
          <div className="max-w-3xl mx-auto bg-gray-900 rounded-2xl p-6 font-mono text-sm overflow-hidden">
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
      </section>

      {/* Core Capabilities */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-primary-3">
            What Radix Core Delivers
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 hover:shadow-md hover:border-gray-300 transition-all">
              <span className="text-pop-dark font-bold text-lg">Light</span>
              <p className="text-gray-600 leading-relaxed mt-2">
                Deploy to Kubernetes in minutes. No existing stack changes. No migration. No retraining your team.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 hover:shadow-md hover:border-gray-300 transition-all">
              <span className="text-pop-dark font-bold text-lg">Demonstrable</span>
              <p className="text-gray-600 leading-relaxed mt-2">
                Leadership-ready dashboards comparing Radix vs. your current scheduler. CFO-defensible ROI from day one.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 hover:shadow-md hover:border-gray-300 transition-all">
              <span className="text-pop-dark font-bold text-lg">Adaptive</span>
              <p className="text-gray-600 leading-relaxed mt-2">
                Closed-loop control with continual scheduling refinement that improves over time as it learns your workload patterns.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 hover:shadow-md hover:border-gray-300 transition-all">
              <span className="text-pop-dark font-bold text-lg">Secure</span>
              <p className="text-gray-600 leading-relaxed mt-2">
                Originally built for air-gapped deployment with zero egress. SLSA Level 3 attestations. Your data never leaves your infrastructure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise Security */}
      <section className="py-20 bg-primary-4">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">
              Security That Satisfies Your Infosec Team
            </h2>
            <p className="text-lg text-white/80 max-w-3xl mx-auto">
              Your GPU fleet processes sensitive training data. Radix Core is built for the most demanding security environments.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all">
              <h3 className="font-bold text-lg mb-2 text-pop-light">Air-Gapped Ready</h3>
              <p className="text-white/70 text-sm leading-relaxed">
                Deploy in fully disconnected environments. No internet access required after installation.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all">
              <h3 className="font-bold text-lg mb-2 text-pop-light">SLSA Level 3</h3>
              <p className="text-white/70 text-sm leading-relaxed">
                Cryptographic attestations for build provenance. Verified supply chain security.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all">
              <h3 className="font-bold text-lg mb-2 text-pop-light">Zero Egress</h3>
              <p className="text-white/70 text-sm leading-relaxed">
                Your training data never leaves your infrastructure. Telemetry is opt-in only.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-primary-3">
            Radix Core Pricing
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Predictable per-GPU pricing. Start with a free 14-day trial.
          </p>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {/* Trial */}
            <div className="bg-gray-50 border-2 border-gray-200 rounded-2xl p-6 flex flex-col hover:shadow-md hover:border-gray-300 transition-all">
              <div className="flex-grow">
                <h3 className="text-xl font-bold text-primary-3 mb-3">Trial</h3>
                <p className="text-2xl font-bold text-primary-3 mb-2">Free</p>
                <p className="text-sm text-gray-600 mb-4">14-day trial, up to 400 GPUs</p>
                <ul className="space-y-2 mb-6 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckIcon className="text-primary-3 mt-0.5 w-4 h-4" />
                    <span className="text-gray-600">Full Radix Core access</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon className="text-primary-3 mt-0.5 w-4 h-4" />
                    <span className="text-gray-600">No stack changes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon className="text-primary-3 mt-0.5 w-4 h-4" />
                    <span className="text-gray-600">Zero-risk validation</span>
                  </li>
                </ul>
              </div>
              <TrackedCTALink
                href="/waitlist"
                trackingName="Join Waitlist"
                trackingLocation="Radix Core Pricing - Trial"
                className="w-full text-center px-4 py-3 bg-primary-3 text-white text-sm rounded-full font-bold hover:bg-primary-4 transition-all shadow-lg hover:scale-105 transform inline-block"
              >
                Join Waitlist
              </TrackedCTALink>
            </div>

            {/* Core */}
            <div className="bg-primary-3 rounded-2xl p-6 flex flex-col hover:shadow-md hover:bg-primary-3/90 transition-all">
              <div className="flex-grow">
                <h3 className="text-xl font-bold text-white mb-3">Radix Core</h3>
                <p className="text-2xl font-bold text-white mb-2">$45<span className="text-sm font-normal text-white/70">/GPU/mo</span></p>
                <p className="text-sm text-white/80 mb-4">GPU scheduling optimization</p>
                <ul className="space-y-2 mb-6 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckIcon className="text-white mt-0.5 w-4 h-4" />
                    <span className="text-white/90">Full deployment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon className="text-white mt-0.5 w-4 h-4" />
                    <span className="text-white/90">Production support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon className="text-white mt-0.5 w-4 h-4" />
                    <span className="text-white/90">Up to 21% throughput gains</span>
                  </li>
                </ul>
              </div>
              <TrackedCTALink
                href="/waitlist"
                trackingName="Join Waitlist"
                trackingLocation="Radix Core Pricing - Core"
                className="inline-block w-full text-center px-4 py-3 bg-white text-primary-3 text-sm rounded-full font-bold hover:bg-gray-100 transition-all"
              >
                Join Waitlist
              </TrackedCTALink>
            </div>

            {/* Hyperscale */}
            <div className="bg-gradient-to-br from-primary-4 to-primary-3 text-white rounded-2xl p-6 border-2 border-primary-2 flex flex-col hover:shadow-md hover:border-primary-1 transition-all">
              <div className="flex-grow">
                <h3 className="text-xl font-bold text-white mb-3">Hyperscale</h3>
                <p className="text-2xl font-bold text-white mb-2">Custom</p>
                <p className="text-sm text-white/80 mb-4">1,000+ GPU deployments</p>
                <ul className="space-y-2 mb-6 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckIcon className="text-white mt-0.5 w-4 h-4" />
                    <span className="text-white/90">Dedicated support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon className="text-white mt-0.5 w-4 h-4" />
                    <span className="text-white/90">Architecture review</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon className="text-white mt-0.5 w-4 h-4" />
                    <span className="text-white/90">Custom SLAs</span>
                  </li>
                </ul>
              </div>
              <TrackedCTALink
                href="/contact/"
                trackingName="Get in Touch"
                trackingLocation="Radix Core Pricing - Hyperscale"
                className="inline-block w-full text-center px-4 py-3 bg-pop-light text-primary-4 text-sm rounded-full font-bold hover:bg-white transition-all"
              >
                Get in Touch
              </TrackedCTALink>
            </div>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary-3">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Maximize Your GPU Fleet?
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Join the waitlist for early access, or book an architecture call to discuss your fleet.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <TrackedCTALink
              href="/waitlist"
              trackingName="Join Waitlist"
              trackingLocation="Radix Core CTA"
              className="px-10 py-5 bg-pop-light text-primary-4 rounded-full font-bold hover:bg-white transition-all text-xl shadow-lg hover:shadow-xl hover:scale-105 transform focus:outline-none focus:ring-4 focus:ring-pop-light/50"
            >
              Join Waitlist
            </TrackedCTALink>
            <TrackedCTALink
              href="/contact/"
              trackingName="Get in Touch"
              trackingLocation="Radix Core CTA"
              className="px-8 py-4 border-2 border-white/30 text-white rounded-full font-semibold hover:bg-white/10 hover:border-white/50 transition-all text-lg"
            >
              Get in Touch
            </TrackedCTALink>
          </div>
        </div>
      </section>
    </>
  );
}
