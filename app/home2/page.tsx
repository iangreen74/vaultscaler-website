import Link from 'next/link';

export default function Home2() {
  return (
    <>
      {/* Hero - Radix Banner */}
      <section className="relative min-h-[85vh] flex items-center justify-center bg-gradient-to-br from-vs-blue-7 via-vs-blue-6 to-vs-blue-5 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/4 -right-1/4 w-[60%] h-[60%] rounded-full bg-accent/10 blur-3xl" />
          <div className="absolute -bottom-1/4 -left-1/4 w-[50%] h-[50%] rounded-full bg-vs-blue-4/20 blur-3xl" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Radix Brand */}
          <h2 className="text-6xl sm:text-7xl md:text-8xl font-bold text-accent mb-4 tracking-tight">
            Radix
          </h2>

          {/* Main Tagline */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight">
            Good In<span className="text-accent">.</span> Good Out<span className="text-accent">.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-stone-cream-2 max-w-2xl mx-auto mb-10 leading-relaxed">
            AI Ops for those who refuse to waste compute or compromise on quality
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/pricing"
              className="px-10 py-5 bg-accent text-vs-blue-7 rounded-full font-bold hover:bg-white transition-all text-xl shadow-2xl hover:shadow-accent/50 hover:scale-105 transform"
            >
              Start Free Trial
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 bg-transparent border-2 border-white/30 text-white rounded-full font-semibold hover:bg-white/10 transition-colors text-lg"
            >
              Learn More
            </Link>
          </div>

          {/* Stats bar */}
          <div className="mt-16 flex flex-col sm:flex-row justify-center items-center gap-8 sm:gap-12 text-stone-cream-3">
            <div className="text-center">
              <p className="text-3xl font-bold text-accent">21.4%</p>
              <p className="text-sm">Reduced Training Cost</p>
            </div>
            <div className="hidden sm:block w-px h-12 bg-vs-blue-4" />
            <div className="text-center">
              <p className="text-3xl font-bold text-accent">Cluster</p>
              <p className="text-sm">Visibility & Governance</p>
            </div>
            <div className="hidden sm:block w-px h-12 bg-vs-blue-4" />
            <div className="text-center">
              <p className="text-3xl font-bold text-accent">LLM</p>
              <p className="text-sm">Cost Optimization</p>
            </div>
          </div>
        </div>
      </section>

      {/* AI Operations Are Broken - Warm cream */}
      <section className="py-20 bg-stone-cream-1">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-vs-blue-6">The AI Operations Bottleneck</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-stone-cream-3">
              <h3 className="font-bold text-xl mb-3 text-vs-blue-5">Wasted GPU Capacity</h3>
              <p className="text-stone-cream-6 leading-relaxed">
                Reclaim idle GPU capacity to unlock your time to market. Fully utilize your investment if you're on-prem.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-stone-cream-3">
              <h3 className="font-bold text-xl mb-3 text-vs-blue-5">Pilot Purgatory</h3>
              <p className="text-stone-cream-6 leading-relaxed">
                Turn promising demos into durable systems with Radix MLOps foundations with pre-built pipelines and recipes.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-stone-cream-3">
              <h3 className="font-bold text-xl mb-3 text-vs-blue-5">Governance Anxiety</h3>
              <p className="text-stone-cream-6 leading-relaxed">
                Fill data and AI governance gaps, compliance requirements, and risk concerns that stop projects cold.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Radix Platform - Vibrant cyan/teal */}
      <section className="py-20 bg-gradient-to-r from-accent to-vs-blue-3">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4 text-stone-cream-1">The Radix Platform</h2>
          <p className="text-xl text-center text-vs-blue-7 mb-12">Two products. One mission: efficient, governed AI operations.</p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Radix Core */}
            <div className="bg-white border-2 border-stone-cream-3 rounded-2xl p-8 shadow-xl shadow-vs-blue-7/50">
              <h3 className="text-2xl font-bold mb-3 text-vs-blue-6">Radix Core</h3>
              <p className="text-lg text-stone-cream-6 mb-6 leading-relaxed">
                Full cluster visibility and maintainance. GPU scheduling to reduce costs and reclaim idle capacity on your existing infrastructure.
              </p>
              <ul className="space-y-2 text-stone-cream-6">
                <li className="flex items-start">
                  <span className="text-vs-blue-4 mr-2">•</span>
                  <span>Deploy to Kubernetes. No stack cahnges</span>
                </li>
                <li className="flex items-start">
                  <span className="text-vs-blue-4 mr-2">•</span>
                  <span>Closed-loop control for memory, compute, and power</span>
                </li>
                <li className="flex items-start">
                  <span className="text-vs-blue-4 mr-2">•</span>
                  <span>Manage your GPU cluster by policy for fairness and sustainability</span>
                </li>
                <li className="flex items-start">
                  <span className="text-vs-blue-4 mr-2">•</span>
                  <span>Deterministic proof of performance gains</span>
                </li>
              </ul>
            </div>

            {/* Radix Studio */}
            <div className="bg-white border-2 border-stone-cream-3 rounded-2xl p-8 shadow-xl shadow-vs-blue-7/50">
              <h3 className="text-2xl font-bold mb-3 text-vs-blue-6">Radix Studio</h3>
              <p className="text-lg text-stone-cream-6 mb-6 leading-relaxed">
                LLM inference optimization and governance. Build quality into your pipeline and keep models governed in production.
              </p>
              <ul className="space-y-2 text-stone-cream-6">
                <li className="flex items-start">
                  <span className="text-vs-blue-4 mr-2">•</span>
                  <span>Build reusable multi-step AI workflows (LLM calls, RAG, tools)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-vs-blue-4 mr-2">•</span>
                  <span>Solve LLM vendor lock-in across all your apps</span>
                </li>
                <li className="flex items-start">
                  <span className="text-vs-blue-4 mr-2">•</span>
                  <span>Bring Your Own GPU (BYOG) via secure agent</span>
                </li>
                <li className="flex items-start">
                  <span className="text-vs-blue-4 mr-2">•</span>
                  <span>Implement trust with compliance guardrails</span>
                </li>
                <li className="flex items-start">
                  <span className="text-vs-blue-4 mr-2">•</span>
                  <span>Predictable per-execution pricing</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Trust and Security - Rich warm neutral */}
      <section className="py-20 bg-gradient-to-b from-stone-cream-2 to-stone-cream-1">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8 text-vs-blue-6">Trust and Security Built In</h2>
          <p className="text-xl text-stone-cream-6 mb-8 leading-relaxed">
            The Radix Platform is built for Enterprise AI Infrastructure. Radix Core supports air-gapped deployment with zero egress, and Radix Studio brings the same security-first approach to SaaS inference operations. All components use cryptographically signed artifacts.
          </p>
          <p className="text-lg text-stone-cream-5 mb-10">
            All Radix Core performance results are validated and reproducible with statistical rigor to ensure you have accurate performance data. <Link href="/security" className="text-vs-blue-3 underline hover:text-vs-blue-4">Learn more about our security posture</Link>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/pricing"
              className="inline-block px-10 py-4 bg-vs-blue-5 text-white rounded-full font-bold hover:bg-vs-blue-4 transition-colors text-lg shadow-lg hover:shadow-xl"
            >
              Get Radix
            </Link>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-vs-blue-7 text-stone-cream-1 rounded-full font-semibold hover:bg-vs-blue-6 transition-colors text-lg"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

    </>
  );
}
