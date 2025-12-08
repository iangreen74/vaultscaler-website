// Route: /product
import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { SITE } from "@/lib/site";
import { TrackedCTALink, TrackedAnchor } from "@/components/TrackedLink";

export const metadata: Metadata = {
  title: "Radix Platform | VaultScaler",
  description:
    "The Radix Platform optimizes training and inference. Radix Core delivers measurable GPU training throughput improvements. Radix Studio provides LLM orchestration, governance, and cost control.",
  alternates: { canonical: `${SITE.url}/product` },
  keywords: SITE.keywords,
  openGraph: {
    title: 'Radix Platform | VaultScaler',
    description: 'Radix Core for 21% GPU throughput gains. Radix Studio for LLM orchestration and governance.',
    url: `${SITE.url}/product`,
    type: 'website',
    images: [{ url: '/og.jpg', width: 1200, height: 630, alt: 'Radix Platform' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Radix Platform | VaultScaler',
    description: 'Radix Core for 21% GPU throughput gains. Radix Studio for LLM orchestration and governance.',
    images: ['/og.jpg'],
  },
};

export default function Page() {
  const ld = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: SITE.product,
    applicationCategory: "DevOps/Monitoring",
    operatingSystem: "Kubernetes 1.26+",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    author: { "@type": "Organization", name: "VaultScaler" },
    url: `${SITE.url}/product`,
    description: metadata.description,
    releaseNotes: "GA December 2025.",
  };

  return (
    <>
      {/* Platform Overview - Hero */}
      <section className="relative py-20 bg-gradient-to-br from-primary-4 via-primary-3 to-primary-3 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/4 -right-1/4 w-[60%] h-[60%] rounded-full bg-pop-light/10 blur-3xl" />
          <div className="absolute -bottom-1/4 -left-1/4 w-[50%] h-[50%] rounded-full bg-primary-2/20 blur-3xl" />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-center text-white">The Radix Platform</h1>
          <p className="text-xl text-white/90 text-center max-w-3xl mx-auto mb-8 leading-relaxed">
            Complete AI operations across the lifecycle. Optimize training. Govern inference. Control costs.
          </p>

          <div className="text-center mb-12">

          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Core - Deep Blue theme */}
            <TrackedAnchor href="#radix-core" trackingName="Product - Radix Core Card" className="bg-white border-2 border-primary-3 rounded-2xl p-8 text-center shadow-xl hover:shadow-2xl hover:border-primary-3 transition-all group focus:outline-none focus:ring-4 focus:ring-primary-1/50">
              <h2 className="text-2xl font-bold mb-2 text-primary-3">Radix Core</h2>
              <p className="text-lg text-gray-600">GPU scheduling optimization</p>
            </TrackedAnchor>
            {/* Studio - Cyan/Accent theme */}
            <TrackedAnchor href="#radix-studio" trackingName="Product - Radix Studio Card" className="bg-white border-2 border-secondary-4 rounded-2xl p-8 text-center shadow-xl hover:shadow-2xl hover:border-pop-light transition-all group focus:outline-none focus:ring-4 focus:ring-pop-light/50">
              <h2 className="text-2xl font-bold mb-2 text-pop-light">Radix Studio</h2>
              <p className="text-lg text-gray-600">LLM governance & control</p>
            </TrackedAnchor>
          </div>
        </div>
      </section>

      {/* Radix Core Section - Deep Blue Theme */}
      <section id="radix-core" className="py-20 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-primary-3">Radix Core</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              GPU scheduling that actually optimizes for memory, compute, and power—not just availability.
            </p>
          </div>

          {/* Key Result */}
          <div className="bg-primary-3 text-white rounded-2xl p-8 text-center mb-12 border-2 border-primary-3">
            <p className="text-3xl font-bold mb-2">Up to 21.4% throughput improvement</p>
            <p className="text-xl text-gray-200">over industry-standard FIFO scheduling</p>
            <p className="text-lg text-white/70 mt-4">Save roughly $250,000/year with 100 GPUs, or get your jobs to production quicker in cloud </p>
          </div>

          {/* Four Pillars */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-primary-1">
              <h3 className="text-lg font-bold text-primary-3 mb-3">Light</h3>
              <p className="text-gray-600">Install Radix agents on Kubernetes clusters. No stack changes. No changes to how you initiate training jobs.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-primary-1">
              <h3 className="text-lg font-bold text-primary-3 mb-3">Demonstrable</h3>
              <p className="text-gray-600">Leadership-ready dashboard reports showing Radix performance compared to your existing scheduler.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-primary-1">
              <h3 className="text-lg font-bold text-primary-3 mb-3">Adaptive</h3>
              <p className="text-gray-600">Radix leverages continual scheduling refinement AI to ensure the best results over time.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-primary-1">
              <h3 className="text-lg font-bold text-primary-3 mb-3">Secure</h3>
              <p className="text-gray-600">Signed images/charts, SLSA Level 3 attestations, read-only file systems, non-root execution.</p>
            </div>
          </div>

          {/* How It Works */}
          <div className="bg-white border-2 border-primary-2 rounded-2xl p-8 shadow-lg mb-12">
            <h3 className="text-2xl font-bold mb-6 text-primary-3">How Radix Core Works</h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary-3 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">1</div>
                <p className="text-gray-600">Install the Helm chart</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary-3 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">2</div>
                <p className="text-gray-600">Choose zero egress or API mode</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary-3 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">3</div>
                <p className="text-gray-600">Port-forward the service</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary-3 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">4</div>
                <p className="text-gray-600">Get GPU insights in 60 seconds</p>
              </div>
            </div>
            <p className="text-center text-gray-500 mt-6">Works with Kubernetes, Slurm, and Ray. Your data scientists submit jobs exactly as they do today.</p>
          </div>

          {/* Core Trial CTA */}
          <div className="bg-primary-3 rounded-2xl p-8 text-center text-white border-2 border-primary-3">
            <h3 className="text-2xl font-bold mb-4">Try Radix Core Free for 14 Days</h3>
            <p className="text-lg text-white/80 mb-6 max-w-2xl mx-auto">
              Full access to Radix Core. See precisely what throughput gains are possible. Run in shadow mode alongside your existing scheduler for zero-risk proof.
            </p>
            <TrackedCTALink
              href="/waitlist"
              trackingName="Join Waitlist"
              trackingLocation="Product - Core Section"
              className="inline-block px-10 py-4 bg-white text-primary-3 rounded-full font-bold hover:bg-gray-100 transition-all text-lg shadow-lg hover:scale-105 transform"
            >
              Join Waitlist
            </TrackedCTALink>
          </div>
        </div>
      </section>

      {/* Radix Studio Section - Cyan/Accent Theme */}
      <section id="radix-studio" className="py-20 bg-primary-4">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-pop-light">Radix Studio</h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              The control plane for LLM operations. Governance, cost control, and multi-model orchestration.
            </p>
          </div>

          {/* Four Pillars */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-secondary-4">
              <h3 className="text-lg font-bold text-pop-dark mb-3">Reusable</h3>
              <p className="text-gray-600">Chain LLM calls, RAG queries, and tool integrations into production-ready workflows with Multi-Model Registry.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-secondary-4">
              <h3 className="text-lg font-bold text-pop-dark mb-3">Governed</h3>
              <p className="text-gray-600">Enforce compliance policies, content filtering, and budget controls at every step of your AI pipeline.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-secondary-4">
              <h3 className="text-lg font-bold text-pop-dark mb-3">Transparent</h3>
              <p className="text-gray-600">Real-time visibility into each pipeline step with full execution traces and audit logs.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-secondary-4">
              <h3 className="text-lg font-bold text-pop-dark mb-3">Secure</h3>
              <p className="text-gray-600">Multi-tenant architecture for complete data isolation. Per-tenant policies and access controls.</p>
            </div>
          </div>

          {/* What Studio Provides */}
          <div className="bg-white border-2 border-secondary-4 rounded-2xl p-8 shadow-xl mb-12">
            <h3 className="text-2xl font-bold mb-6 text-pop-dark">What Radix Studio Provides</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-100 rounded-xl p-6 border border-secondary-4">
                <h4 className="font-bold mb-3 text-pop-dark">Pipeline Orchestration</h4>
                <p className="text-gray-600">Build your own reusable multi-step AI workflows or cook with our recipes. Run LLM calls, RAG retrieval, tool execution, and post-processing reliably with full execution traces.</p>
              </div>
              <div className="bg-gray-100 rounded-xl p-6 border border-secondary-4">
                <h4 className="font-bold mb-3 text-pop-dark">Multi-Model Registry</h4>
                <p className="text-gray-600">Register HTTP endpoints, container workloads, and external clusters. Bring Your Own GPU (BYOG) via secure Docker agent.</p>
              </div>
              <div className="bg-gray-100 rounded-xl p-6 border border-secondary-4">
                <h4 className="font-bold mb-3 text-pop-dark">Governance & Audit</h4>
                <p className="text-gray-600">Create and enforce policies for content safety, team fairness, and cluster health all with comprehensive audit logs for compliance.</p>
              </div>
              <div className="bg-gray-100 rounded-xl p-6 border border-secondary-4">
                <h4 className="font-bold mb-3 text-pop-dark">Cost Control</h4>
                <p className="text-gray-600">Performance vs cost knobs, rate limiting, usage caps, and predictable per-execution pricing tiers.</p>
              </div>
            </div>
          </div>

          {/* Studio Trial CTA */}
          <div className="bg-pop-light rounded-2xl p-8 text-center text-primary-4">
            <h3 className="text-2xl font-bold mb-4">Try Radix Studio Free</h3>
            <p className="text-lg text-primary-4/80 mb-6 max-w-2xl mx-auto">
              Full access to Radix Studio Team tier. Build pipelines, connect models, and see governance in action.
            </p>
            <TrackedCTALink
              href="/waitlist"
              trackingName="Join Waitlist"
              trackingLocation="Product - Studio Section"
              className="inline-block px-10 py-4 bg-primary-4 text-white rounded-full font-bold hover:bg-primary-3 transition-all text-lg shadow-lg hover:scale-105 transform"
            >
              Join Waitlist
            </TrackedCTALink>
          </div>
        </div>
      </section>

      {/* Choose Your Path */}
      <section className="py-20 bg-gradient-to-b from-gray-200 to-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4 text-primary-3">Choose Your Path</h2>
          <p className="text-xl text-center text-gray-600 mb-12">Start with what you need. Expand when you're ready.</p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Core Only - Deep Blue */}
            <div className="bg-white border-2 border-primary-3 rounded-2xl p-8 shadow-xl">
              <h3 className="text-xl font-bold mb-4 text-primary-3">Radix Core</h3>
              <p className="text-gray-600 mb-6">
                You're training models on GPUs and want more throughput plus better observability. Deterministic scheduling improvements without changing workflows.
              </p>
              <p className="text-2xl font-bold text-primary-3 mb-2">$28/GPU/mo</p>
              <p className="text-sm text-gray-500 mb-6">Up to 400 GPUs</p>
              <TrackedCTALink href="/waitlist" trackingName="Join Waitlist" trackingLocation="Product - Choose Path" className="block text-center px-6 py-3 bg-primary-3 text-white rounded-full font-semibold hover:bg-primary-4 transition-colors">
                Join Waitlist
              </TrackedCTALink>
            </div>

            {/* Studio Only - Cyan */}
            <div className="bg-white border-2 border-pop-light rounded-2xl p-8 shadow-xl">
              <h3 className="text-xl font-bold mb-4 text-pop-dark">Radix Studio</h3>
              <p className="text-gray-600 mb-6">
                You're running LLM applications in production and need control over models, pipelines, costs, and governance. A control plane, not just API wrappers.
              </p>
              <p className="text-2xl font-bold text-pop-dark mb-2">$29/mo</p>
              <p className="text-sm text-gray-500 mb-6">Team tier: 1 user, 3 models</p>
              <TrackedCTALink href="/waitlist" trackingName="Join Waitlist" trackingLocation="Product - Choose Path" className="block text-center px-6 py-3 bg-pop-light text-primary-4 rounded-full font-semibold hover:bg-primary-2 hover:text-white transition-colors">
                Join Waitlist
              </TrackedCTALink>
            </div>

            {/* Platform Bundle - Combined */}
            <div className="bg-gradient-to-br from-primary-3 to-primary-4 text-white rounded-2xl p-8 shadow-xl border-2 border-primary-2">
              <div className="flex items-center justify-between mb-4">
              </div>
              <h3 className="text-xl font-bold mb-4">Radix Platform</h3>
              <p className="text-white/80 mb-6">
                Full AI operations coverage. Training optimization plus inference governance. One platform, complete lifecycle control.
              </p>
              <p className="text-2xl font-bold text-pop-light mb-2">Core + Studio</p>
              <p className="text-sm text-white/70 mb-6">Bundle pricing available</p>
              <TrackedCTALink href="/contact" trackingName="Contact Sales" trackingLocation="Product - Platform Bundle" className="block text-center px-6 py-3 bg-pop-light text-primary-4 rounded-full font-bold hover:bg-white transition-colors">
                Contact Sales
              </TrackedCTALink>
            </div>
          </div>

          {/* Final CTA */}
          <div className="text-center">
            <p className="text-lg text-gray-600 mb-6">Not sure which is right for you?</p>
            <TrackedCTALink
              href="mailto:bpruess@vaultscaler.com"
              trackingName="Talk to Us"
              trackingLocation="Product - Footer"
              className="inline-block px-8 py-4 bg-primary-4 text-white rounded-full font-semibold hover:bg-primary-3 transition-colors text-lg"
            >
              Talk to Us
            </TrackedCTALink>
          </div>
        </div>
      </section>

      <JsonLd data={ld} />
    </>
  );
}
