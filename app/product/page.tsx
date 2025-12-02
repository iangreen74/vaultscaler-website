// Route: /product
import JsonLd from "@/components/JsonLd";
import Link from "next/link";
import { SITE } from "@/lib/site";

export const metadata = {
  title: `Radix Platform — ${SITE.product}`,
  description:
    "The Radix Platform optimizes training and inference. Radix Core delivers measurable GPU training throughput improvements. Radix Studio provides LLM orchestration, governance, and cost control.",
  alternates: { canonical: `${SITE.url}/product` },
  keywords: SITE.keywords,
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
      <section className="relative py-20 bg-gradient-to-br from-vs-blue-7 via-vs-blue-6 to-vs-blue-5 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/4 -right-1/4 w-[60%] h-[60%] rounded-full bg-accent/10 blur-3xl" />
          <div className="absolute -bottom-1/4 -left-1/4 w-[50%] h-[50%] rounded-full bg-vs-blue-4/20 blur-3xl" />
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
            <a href="#radix-core" className="bg-white border-2 border-vs-blue-5 rounded-2xl p-8 text-center shadow-xl hover:shadow-2xl hover:border-vs-blue-6 transition-all group">
              <h2 className="text-2xl font-bold mb-2 text-vs-blue-6">Radix Core</h2>
              <p className="text-lg text-gray-600">GPU scheduling optimization</p>
            </a>
            {/* Studio - Cyan/Accent theme */}
            <a href="#radix-studio" className="bg-white border-2 border-accent rounded-2xl p-8 text-center shadow-xl hover:shadow-2xl hover:border-vs-blue-3 transition-all group">
              <h2 className="text-2xl font-bold mb-2 text-accent">Radix Studio</h2>
              <p className="text-lg text-gray-600">LLM governance & control</p>
            </a>
          </div>
        </div>
      </section>

      {/* Radix Core Section - Deep Blue Theme */}
      <section id="radix-core" className="py-20 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-vs-blue-6">Radix Core</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              GPU scheduling that actually optimizes for memory, compute, and power—not just availability.
            </p>
          </div>

          {/* Key Result */}
          <div className="bg-vs-blue-6 text-white rounded-2xl p-8 text-center mb-12 border-2 border-vs-blue-5">
            <p className="text-3xl font-bold mb-2">Up to 21.4% throughput improvement</p>
            <p className="text-xl text-gray-200">over industry-standard FIFO scheduling</p>
            <p className="text-lg text-white/70 mt-4">Save roughly $250,000/year with 100 GPUs, or get your jobs to production quicker in cloud </p>
          </div>

          {/* Four Pillars */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-vs-blue-2">
              <h3 className="text-lg font-bold text-vs-blue-6 mb-3">Light</h3>
              <p className="text-gray-600">Install Radix agents on Kubernetes clusters. No stack changes. No changes to how you initiate training jobs.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-vs-blue-2">
              <h3 className="text-lg font-bold text-vs-blue-6 mb-3">Demonstrable</h3>
              <p className="text-gray-600">Leadership-ready dashboard reports showing Radix performance compared to your existing scheduler.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-vs-blue-2">
              <h3 className="text-lg font-bold text-vs-blue-6 mb-3">Adaptive</h3>
              <p className="text-gray-600">Radix leverages continual scheduling refinement AI to ensure the best results over time.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-vs-blue-2">
              <h3 className="text-lg font-bold text-vs-blue-6 mb-3">Secure</h3>
              <p className="text-gray-600">Signed images/charts, SLSA Level 3 attestations, read-only file systems, non-root execution.</p>
            </div>
          </div>

          {/* How It Works */}
          <div className="bg-white border-2 border-vs-blue-3 rounded-2xl p-8 shadow-lg mb-12">
            <h3 className="text-2xl font-bold mb-6 text-vs-blue-6">How Radix Core Works</h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-vs-blue-6 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">1</div>
                <p className="text-gray-600">Install the Helm chart</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-vs-blue-6 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">2</div>
                <p className="text-gray-600">Choose zero egress or API mode</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-vs-blue-6 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">3</div>
                <p className="text-gray-600">Port-forward the service</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-vs-blue-6 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">4</div>
                <p className="text-gray-600">Get GPU insights in 60 seconds</p>
              </div>
            </div>
            <p className="text-center text-gray-500 mt-6">Works with Kubernetes, Slurm, and Ray. Your data scientists submit jobs exactly as they do today.</p>
          </div>

          {/* Core Trial CTA */}
          <div className="bg-vs-blue-6 rounded-2xl p-8 text-center text-white border-2 border-vs-blue-5">
            <h3 className="text-2xl font-bold mb-4">Try Radix Core Free for 14 Days</h3>
            <p className="text-lg text-white/80 mb-6 max-w-2xl mx-auto">
              Full access to Radix Core. See precisely what throughput gains are possible. Run in shadow mode alongside your existing scheduler for zero-risk proof.
            </p>
            <Link
              href="/pricing"
              className="inline-block px-10 py-4 bg-white text-vs-blue-6 rounded-full font-bold hover:bg-gray-100 transition-all text-lg shadow-lg hover:scale-105 transform"
            >
              Start Core Trial
            </Link>
          </div>
        </div>
      </section>

      {/* Radix Studio Section - Cyan/Accent Theme */}
      <section id="radix-studio" className="py-20 bg-vs-blue-7">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-accent">Radix Studio</h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              The control plane for LLM operations. Governance, cost control, and multi-model orchestration.
            </p>
          </div>

          {/* Four Pillars */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-accent/30">
              <h3 className="text-lg font-bold text-accent mb-3">Reusable</h3>
              <p className="text-gray-600">Chain LLM calls, RAG queries, and tool integrations into production-ready workflows with Multi-Model Registry.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-accent/30">
              <h3 className="text-lg font-bold text-accent mb-3">Governed</h3>
              <p className="text-gray-600">Enforce compliance policies, content filtering, and budget controls at every step of your AI pipeline.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-accent/30">
              <h3 className="text-lg font-bold text-accent mb-3">Transparent</h3>
              <p className="text-gray-600">Real-time visibility into each pipeline step with full execution traces and audit logs.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-accent/30">
              <h3 className="text-lg font-bold text-accent mb-3">Secure</h3>
              <p className="text-gray-600">Multi-tenant architecture for complete data isolation. Per-tenant policies and access controls.</p>
            </div>
          </div>

          {/* What Studio Provides */}
          <div className="bg-white border-2 border-accent rounded-2xl p-8 shadow-xl mb-12">
            <h3 className="text-2xl font-bold mb-6 text-accent">What Radix Studio Provides</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-100 rounded-xl p-6 border border-accent/20">
                <h4 className="font-bold mb-3 text-accent">Pipeline Orchestration</h4>
                <p className="text-gray-600">Build your own reusable multi-step AI workflows or cook with our recipes. Run LLM calls, RAG retrieval, tool execution, and post-processing reliably with full execution traces.</p>
              </div>
              <div className="bg-gray-100 rounded-xl p-6 border border-accent/20">
                <h4 className="font-bold mb-3 text-accent">Multi-Model Registry</h4>
                <p className="text-gray-600">Register HTTP endpoints, container workloads, and external clusters. Bring Your Own GPU (BYOG) via secure Docker agent.</p>
              </div>
              <div className="bg-gray-100 rounded-xl p-6 border border-accent/20">
                <h4 className="font-bold mb-3 text-accent">Governance & Audit</h4>
                <p className="text-gray-600">Create and enforce policies for content safety, team fairness, and cluster health all with comprehensive audit logs for compliance.</p>
              </div>
              <div className="bg-gray-100 rounded-xl p-6 border border-accent/20">
                <h4 className="font-bold mb-3 text-accent">Cost Control</h4>
                <p className="text-gray-600">Performance vs cost knobs, rate limiting, usage caps, and predictable per-execution pricing tiers.</p>
              </div>
            </div>
          </div>

          {/* Studio Trial CTA */}
          <div className="bg-accent rounded-2xl p-8 text-center text-vs-blue-7">
            <h3 className="text-2xl font-bold mb-4">Try Radix Studio Free</h3>
            <p className="text-lg text-vs-blue-7/80 mb-6 max-w-2xl mx-auto">
              Full access to Radix Studio Team tier. Build pipelines, connect models, and see governance in action.
            </p>
            <Link
              href="/pricing"
              className="inline-block px-10 py-4 bg-vs-blue-7 text-white rounded-full font-bold hover:bg-vs-blue-6 transition-all text-lg shadow-lg hover:scale-105 transform"
            >
              Start Studio Trial
            </Link>
          </div>
        </div>
      </section>

      {/* Choose Your Path */}
      <section className="py-20 bg-gradient-to-b from-gray-200 to-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4 text-vs-blue-6">Choose Your Path</h2>
          <p className="text-xl text-center text-gray-600 mb-12">Start with what you need. Expand when you're ready.</p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Core Only - Deep Blue */}
            <div className="bg-white border-2 border-vs-blue-5 rounded-2xl p-8 shadow-xl">
              <h3 className="text-xl font-bold mb-4 text-vs-blue-6">Radix Core</h3>
              <p className="text-gray-600 mb-6">
                You're training models on GPUs and want more throughput plus better observability. Deterministic scheduling improvements without changing workflows.
              </p>
              <p className="text-2xl font-bold text-vs-blue-6 mb-2">$28/GPU/mo</p>
              <p className="text-sm text-gray-500 mb-6">Up to 400 GPUs</p>
              <Link href="/pricing" className="block text-center px-6 py-3 bg-vs-blue-6 text-white rounded-full font-semibold hover:bg-vs-blue-5 transition-colors">
                Get Core
              </Link>
            </div>

            {/* Studio Only - Cyan */}
            <div className="bg-white border-2 border-accent rounded-2xl p-8 shadow-xl">
              <h3 className="text-xl font-bold mb-4 text-accent">Radix Studio</h3>
              <p className="text-gray-600 mb-6">
                You're running LLM applications in production and need control over models, pipelines, costs, and governance. A control plane, not just API wrappers.
              </p>
              <p className="text-2xl font-bold text-accent mb-2">$29/mo</p>
              <p className="text-sm text-gray-500 mb-6">Team tier: 1 user, 3 models</p>
              <Link href="/pricing" className="block text-center px-6 py-3 bg-accent text-vs-blue-7 rounded-full font-semibold hover:bg-vs-blue-3 hover:text-white transition-colors">
                Get Studio
              </Link>
            </div>

            {/* Platform Bundle - Combined */}
            <div className="bg-gradient-to-br from-vs-blue-6 to-vs-blue-7 text-white rounded-2xl p-8 shadow-xl border-2 border-accent">
              <div className="flex items-center justify-between mb-4">
              </div>
              <h3 className="text-xl font-bold mb-4">Radix Platform</h3>
              <p className="text-white/80 mb-6">
                Full AI operations coverage. Training optimization plus inference governance. One platform, complete lifecycle control.
              </p>
              <p className="text-2xl font-bold text-accent mb-2">Core + Studio</p>
              <p className="text-sm text-white/70 mb-6">Bundle pricing available</p>
              <Link href="/contact" className="block text-center px-6 py-3 bg-accent text-vs-blue-7 rounded-full font-bold hover:bg-white transition-colors">
                Contact Sales
              </Link>
            </div>
          </div>

          {/* Final CTA */}
          <div className="text-center">
            <p className="text-lg text-gray-600 mb-6">Not sure which is right for you?</p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-vs-blue-7 text-white rounded-full font-semibold hover:bg-vs-blue-6 transition-colors text-lg"
            >
              Talk to Us
            </Link>
          </div>
        </div>
      </section>

      <JsonLd data={ld} />
    </>
  );
}
