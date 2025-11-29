// Route: / (Home)
import Link from 'next/link';

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center justify-center bg-gradient-to-b from-slate-50 via-white to-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-slate-200/70 bg-white/80 backdrop-blur-sm p-8 md:p-10 shadow-sm space-y-6 text-center">
            <h1 className="text-2xl md:text-3xl font-medium text-slate-700">
              Democratizing and Economizing AI Operations
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto mb-8 leading-relaxed">
              The Radix Platform combines Radix Core for GPU training and Radix Studio for LLM inference. It helps AI teams waste less GPU, escape pilot purgatory, and keep models governed in production. Proven up to 21.4% more training throughput on existing hardware.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-4">
              <Link
                href="/pricing"
                className="px-10 py-5 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full font-bold hover:from-blue-700 hover:to-blue-800 transition-all text-xl shadow-2xl hover:shadow-blue-500/50 hover:scale-105 transform"
              >
                Start Radix Core Trial
              </Link>
              <Link
                href="/contact"
                className="px-8 py-4 bg-white border-2 border-blue-600 text-blue-600 rounded-full font-semibold hover:bg-blue-50 transition-colors text-lg"
              >
                Join Radix Studio Early Access
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* AI Operations Are Broken */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">The AI Operations Bottleneck</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="font-bold text-xl mb-3">Wasted GPU Capacity</h3>
              <p className="text-gray-700 leading-relaxed">
                40–60% of GPU capacity sits idle during training because schedulers treat GPUs as monolithic resources, ignoring memory, compute, and power imbalances.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="font-bold text-xl mb-3">Pilot Purgatory</h3>
              <p className="text-gray-700 leading-relaxed">
                Most AI pilots never reach production. Teams lack robust MLOps foundations, governance, and integration paths to turn promising demos into durable systems.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="font-bold text-xl mb-3">Governance Anxiety</h3>
              <p className="text-gray-700 leading-relaxed">
                Data and AI governance gaps, compliance requirements, and risk concerns stop projects cold, especially in regulated industries that need auditability and control.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet VaultScaler */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4">Meet VaultScaler</h2>
          <p className="text-xl text-center text-gray-600 max-w-3xl mx-auto mb-12">
            VaultScaler is an AI engineering company building deterministic operations for modern AI workloads. We democratize and economize AI operations for teams that train and deploy models in the real world.
          </p>
        </div>
      </section>

      {/* The Radix Platform */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4">The Radix Platform</h2>
          <p className="text-xl text-center text-gray-600 mb-12">Two products. One mission: efficient, governed AI operations.</p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Radix Core */}
            <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-3">Radix Core</h3>
              <p className="text-lg text-gray-800 mb-6 leading-relaxed">
                Radix Core saves you 21.4% on model training costs on your existing infrastructure.
              </p>
              <div className="bg-blue-600 text-white rounded-xl p-4 mb-6 text-center">
                <p className="text-2xl font-bold">21.4% throughput improvement</p>
                <p className="text-sm mt-1">(p &lt; 0.001 vs FIFO)</p>
              </div>
              <ul className="space-y-2 text-gray-800">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Closed-loop control for memory, compute, and power</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Works with Kubernetes, Slurm, and Ray</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Shadow mode for zero-risk proof</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Air-gapped or API-enabled deployment</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>14-day trial available now</span>
                </li>
              </ul>
            </div>

            {/* Radix Studio */}
            <div className="bg-gray-50 border-2 border-gray-300 rounded-2xl p-8">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-2xl font-bold">Radix Studio</h3>
                <span className="px-3 py-1 bg-yellow-400 text-yellow-900 rounded-full font-semibold text-xs">Coming Soon</span>
              </div>
              <p className="text-lg text-gray-800 mb-6 leading-relaxed">
                Radix Studio optimizes LLM inference. Solve AI vendor lock-in. Build inference quality into your pipeline. Escape pilot purgatory, and keep models governed in production.
              </p>
              <ul className="space-y-2 text-gray-800">
                <li className="flex items-start">
                  <span className="text-gray-600 mr-2">•</span>
                  <span>Build reusable multi-step AI workflows (LLM calls, RAG, tools)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-600 mr-2">•</span>
                  <span>Multi-model registry with external endpoint support</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-600 mr-2">•</span>
                  <span>Bring Your Own GPU (BYOG) via secure agent</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-600 mr-2">•</span>
                  <span>Per-tenant isolation, audit logs, and compliance guardrails</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-600 mr-2">•</span>
                  <span>Predictable per-execution pricing</span>
                </li>
              </ul>
              <div className="mt-6">
                <Link
                  href="/contact"
                  className="inline-block px-6 py-3 bg-black text-white rounded-lg font-semibold hover:bg-gray-800 transition-colors"
                >
                  Join Radix Studio Early Access
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust and Security */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">Trust and Security Built In</h2>
          <p className="text-xl text-gray-700 mb-8 leading-relaxed">
            The Radix Platform is built for Enterprise AI Infrastructure. Radix Core supports air-gapped deployment with zero egress, and Radix Studio brings the same security-first approach to SaaS inference operations. All components use cryptographically signed artifacts.
          </p>
          <p className="text-lg text-gray-600 mb-10">
            All Radix Core performance results are validated and reproducible with statistical rigor to ensure you have accurate performance data. <Link href="/security" className="text-blue-600 underline">Learn more about our security posture</Link>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/pricing"
              className="inline-block px-10 py-4 bg-blue-600 text-white rounded-full font-bold hover:bg-blue-700 transition-colors text-lg shadow-lg hover:shadow-xl"
            >
              Start Radix Core Trial
            </Link>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-black text-white rounded-full font-semibold hover:bg-gray-800 transition-colors text-lg"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* For Partners & Investors */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-2 border-gray-200 rounded-2xl p-10 text-center">
            <h2 className="text-2xl font-bold mb-4">For Partners and Investors</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              VaultScaler is building deterministic AI operations for teams that train and deploy models in the real world. If you're exploring joint go-to-market, platform integration, or strategic investment in AI operations infrastructure, we'd love to talk.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-3 bg-gray-900 text-white rounded-lg font-semibold hover:bg-gray-800 transition-colors"
            >
              Contact VaultScaler
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
