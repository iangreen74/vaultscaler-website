// Route: /product
import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { SITE } from "@/lib/site";
import { TrackedCTALink, TrackedAnchor } from "@/components/TrackedLink";

export const metadata: Metadata = {
  title: "Radix Platform - GPU Training & LLM Governance | VaultScaler",
  description:
    "Complete AI operations platform. Radix Core: up to 21% GPU throughput gains with zero code changes. Radix Studio: LLM orchestration, governance & cost control. Deploy in minutes.",
  alternates: { canonical: `${SITE.url}/product` },
  keywords: SITE.keywords,
  openGraph: {
    title: 'Radix Platform - GPU Training & LLM Governance | VaultScaler',
    description: 'Complete AI operations. Radix Core: 21% GPU gains. Radix Studio: LLM governance & orchestration.',
    url: `${SITE.url}/product`,
    type: 'website',
    images: [{ url: '/og.jpg', width: 1200, height: 630, alt: 'Radix Platform' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Radix Platform - GPU Training & LLM Governance | VaultScaler',
    description: 'Complete AI operations. Radix Core: 21% GPU gains. Radix Studio: LLM governance & orchestration.',
    images: ['/og.jpg'],
  },
};

export default function Page() {
  const ld = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: SITE.products[0],
    applicationCategory: "DevOps/Monitoring",
    operatingSystem: "Kubernetes 1.26+",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    author: { "@type": "Organization", name: "VaultScaler" },
    url: `${SITE.url}/product`,
    description: metadata.description,
    releaseNotes: "General Availability March 2, 2026.",
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
        "name": "Product",
        "item": `${SITE.url}/product`
      }
    ]
  };

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
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
            <p className="text-center text-gray-500 mt-6">Works with Kubernetes and Slurm. Your team's workflow stays the same.</p>
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

          {/* Key Insight */}
          <div className="bg-pop-light text-primary-4 rounded-2xl p-8 text-center mb-12 border-2 border-pop-light">
            <p className="text-3xl font-bold mb-2">88% of AI pilots never reach production</p>
            <p className="text-xl text-primary-4/80">The models work. The infrastructure doesn't.</p>
            <p className="text-lg text-primary-4/70 mt-4">Missing pipelines. No governance. Runaway costs. No drift detection. Radix Studio fills these gaps from day one.</p>
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

          {/* Why Radix - Differentiation */}
          <div className="bg-white/10 backdrop-blur rounded-2xl p-8 mb-12 border border-white/20">
            <h3 className="text-2xl font-bold mb-6 text-white text-center">Why Radix Over Cloud-Locked Platforms?</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-pop-light text-primary-4 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <h4 className="font-bold text-pop-light mb-2">Multi-Cloud Freedom</h4>
                <p className="text-white/70 text-sm">Bring your own infrastructure. No vendor lock-in. Run anywhere.</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-pop-light text-primary-4 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                </div>
                <h4 className="font-bold text-pop-light mb-2">Governance Built-In</h4>
                <p className="text-white/70 text-sm">Compliance, audit logs, and policies from day one—not bolted on later.</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-pop-light text-primary-4 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <h4 className="font-bold text-pop-light mb-2">No Surprise Bills</h4>
                <p className="text-white/70 text-sm">Predictable pricing with cost controls and usage caps you define.</p>
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
          <h2 className="text-4xl font-bold text-center mb-4 text-primary-3">Build Your Stack</h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Core Only - Deep Blue */}
            <div className="bg-white border-2 border-primary-3 rounded-2xl p-8 shadow-xl">
              <h3 className="text-xl font-bold mb-4 text-primary-3">Radix Core</h3>
              <p className="text-gray-600 mb-6">
                You're training models on GPUs and want more throughput plus better observability. Deterministic scheduling improvements without changing workflows.
              </p>
              <p className="text-2xl font-bold text-primary-3 mb-2">$45/GPU/mo</p>
              <p className="text-sm text-gray-500 mb-6">Corporate pricing ($30 academic)</p>
              <TrackedCTALink href="/waitlist" trackingName="Join Waitlist" trackingLocation="Product - Choose Path" className="block text-center px-6 py-3 bg-primary-3 text-white rounded-full font-semibold hover:bg-primary-4 transition-colors">
                Join Waitlist
              </TrackedCTALink>
            </div>

            {/* Studio - Deep Blue */}
            <div className="bg-white border-2 border-primary-3 rounded-2xl p-8 shadow-xl">
              <h3 className="text-xl font-bold mb-4 text-primary-3">Radix Studio</h3>
              <p className="text-gray-600 mb-6">
                You're running LLM applications in production and need control over models, pipelines, costs, and governance. A control plane, not just API wrappers.
              </p>
              <p className="text-2xl font-bold text-primary-3 mb-2">$45/user/mo</p>
              <p className="text-sm text-gray-500 mb-6">Corporate pricing ($30 academic)</p>
              <TrackedCTALink href="/waitlist" trackingName="Join Waitlist" trackingLocation="Product - Choose Path" className="block text-center px-6 py-3 bg-primary-3 text-white rounded-full font-semibold hover:bg-primary-4 transition-colors">
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
