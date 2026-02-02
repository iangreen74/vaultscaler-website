// Route: /solutions/research
import type { Metadata } from 'next';
import { TrackedCTALink } from '@/components/TrackedLink';
import { SITE } from '@/lib/site';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Research-Grade AI Infrastructure | VaultScaler',
  description: 'AI infrastructure built for university labs and corporate R&D. Reproducible experiments, publication-ready logs, compute tracking, and multi-PI collaboration.',
  alternates: {
    canonical: `${SITE.url}/solutions/research`,
  },
  keywords: [
    ...SITE.keywords,
    'research computing',
    'academic AI infrastructure',
    'reproducible ML',
    'university GPU cluster',
    'research lab AI',
    'multi-PI collaboration',
    'scientific computing',
  ],
  openGraph: {
    title: 'Research-Grade AI Infrastructure | VaultScaler',
    description: 'AI infrastructure built for university labs and corporate R&D. Reproducible experiments, publication-ready logs, and multi-PI collaboration.',
    type: 'website',
    url: `${SITE.url}/solutions/research`,
    images: [{ url: '/og.jpg', width: 1200, height: 630, alt: 'VaultScaler Research Solutions' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Research-Grade AI Infrastructure | VaultScaler',
    description: 'AI infrastructure built for university labs and corporate R&D. Reproducible experiments, publication-ready logs, and multi-PI collaboration.',
    images: ['/og.jpg'],
  },
};

export default function ResearchPage() {
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Research-Grade AI Infrastructure",
    "description": metadata.description,
    "url": `${SITE.url}/solutions/research`,
    "provider": {
      "@type": "Organization",
      "name": "VaultScaler",
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
        "name": "Solutions",
        "item": `${SITE.url}/solutions`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Research Labs",
        "item": `${SITE.url}/solutions/research`
      }
    ]
  };

  return (
    <>
      <JsonLd data={webPageSchema} />
      <JsonLd data={breadcrumbSchema} />

      {/* Hero Section */}
      <section className="relative min-h-[clamp(500px,70vh,900px)] flex items-center justify-center bg-gradient-to-br from-primary-4 via-primary-3 to-primary-3 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/4 -right-1/4 w-[60%] h-[60%] rounded-full bg-pop-light/10 blur-3xl" />
          <div className="absolute -bottom-1/4 -left-1/4 w-[50%] h-[50%] rounded-full bg-pop-dark/30 blur-3xl" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Main Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
            Run more experiments.<br className="hidden sm:block" /> Hit every deadline.
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-10 leading-relaxed">
            Train 21% faster, prioritize urgent work, and prove every result with automatic provenance. Radix gives research labs the infrastructure to publish faster without waiting for more compute.
          </p>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-primary-3">
            Research Labs Are Stuck Waiting
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Slow training, cluster management chaos, and missing provenance records are killing research velocity.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Training Velocity Problem */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-pop-light rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-xl mb-3 text-primary-3">Experiments Are Too Slow</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Training jobs take days. Students wait in queue. You need to run more experiments to hit the conference deadline, but your GPUs are already at capacity. Asking for more infrastructure takes months and isn't guaranteed.
              </p>
              <p className="text-primary-3 font-semibold">
                Slow iterations mean missed deadlines and fewer experiments.
              </p>
            </div>

            {/* Cluster Management Problem */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-pop-light rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <h3 className="font-bold text-xl mb-3 text-primary-3">Cluster Management is Manual Chaos</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                You have 20 students, but two models need to finish for a conference next week. There's no way to prioritize urgent work. When reviewers ask how you trained a model, you scramble through notes trying to reconstruct seeds and hyperparameters.
              </p>
              <p className="text-primary-3 font-semibold">
                Without fair-share management and provenance, research grinds to a halt.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pillar 1: Training Throughput */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm text-pop-dark font-semibold uppercase tracking-wide mb-3">Radix Core</p>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-primary-3">
                Run More Experiments Without New GPUs
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Radix Core optimizes your existing GPUs to train up to 21% faster. More throughput means more experiments, less waiting, and hitting conference deadlines without begging for infrastructure budget. Increase your effective compute capacity without adding hardware.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-pop-light rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-primary-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-gray-700">Up to 21% faster training on existing infrastructure</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-pop-light rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-primary-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-gray-700">Run more experiments per week without new hardware</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-pop-light rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-primary-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-gray-700">Hit conference deadlines with faster iteration cycles</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-pop-light rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-primary-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-gray-700">No stack changes—deploy in hours, not months</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-primary-3 to-primary-4 rounded-2xl p-8 text-white">
              <p className="text-pop-light text-sm font-medium mb-4 uppercase tracking-wide">Research Impact</p>
              <div className="space-y-6">
                <div>
                  <p className="text-white/80 mb-2">Experiments per week</p>
                  <div className="flex items-end gap-2">
                    <div className="text-4xl font-bold text-white">12</div>
                    <div className="text-xl text-white/60 mb-1">→</div>
                    <div className="text-4xl font-bold text-pop-light">15</div>
                  </div>
                </div>
                <div>
                  <p className="text-white/80 mb-2">Days to deadline</p>
                  <div className="flex items-center gap-3">
                    <div className="flex-1">
                      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full bg-pop-light rounded-full" style={{ width: '65%' }} />
                      </div>
                    </div>
                    <span className="font-bold text-pop-light whitespace-nowrap">7 days</span>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pillar 2: Reproducible Experiments */}
      <section className="py-20 bg-primary-4">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <div className="font-mono text-sm text-white/90 space-y-2">
                  <p className="text-pop-light"># Reproduce experiment from 6 months ago</p>
                  <p>$ radix reproduce exp-2024-08-15-llama-ft</p>
                  <p className="text-white/60 mt-4">Restoring environment...</p>
                  <p className="text-white/60">- PyTorch 2.1.0</p>
                  <p className="text-white/60">- CUDA 12.1</p>
                  <p className="text-white/60">- Dataset: arxiv-abstracts-v3</p>
                  <p className="text-white/60">- Random seed: 42</p>
                  <p className="text-white/60">- Hyperparameters: config-2024-08-15.yaml</p>
                  <p className="text-pop-light mt-4">Environment restored. Ready to train.</p>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-sm text-pop-light font-medium mb-2 tracking-wide uppercase">Reproducible Experiments</p>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">
                One-Click Reproduction of Any Historical Run
              </h2>
              <p className="text-lg text-white/80 mb-6 leading-relaxed">
                Every experiment captures the complete context: code version, data snapshot, environment, hyperparameters, and random seeds. Return to any point in your research timeline and reproduce results exactly.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-pop-light rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-primary-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-white/90">Complete environment capture for every training run</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-pop-light rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-primary-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-white/90">Git commit, container hash, and dependency lock files</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-pop-light rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-primary-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-white/90">Searchable experiment history with metadata filtering</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pillar 3: Publication-Ready Logs */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm text-pop-dark font-medium mb-2 tracking-wide uppercase">Publication-Ready Logs</p>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-primary-3">
                Exportable Provenance for Papers
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                When reviewers ask for training details or collaborators need to verify results, export complete provenance records. Immutable audit trails provide the evidence your research needs to stand up to scrutiny.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-pop-light rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-primary-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-gray-700">Immutable, timestamped audit trails</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-pop-light rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-primary-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-gray-700">Export to BibTeX, JSON, or supplementary material format</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-pop-light rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-primary-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-gray-700">Shareable experiment links for collaborators and reviewers</span>
                </li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
              <h4 className="font-bold text-primary-3 mb-4">Experiment Provenance Export</h4>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between py-2 border-b border-gray-200">
                  <span className="text-gray-600">Experiment ID</span>
                  <span className="font-mono text-gray-900">exp-llama3-ft-2024-aug</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-200">
                  <span className="text-gray-600">Training Duration</span>
                  <span className="text-gray-900">47h 23m</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-200">
                  <span className="text-gray-600">GPU Hours</span>
                  <span className="text-gray-900">378.4 (8x A100)</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-200">
                  <span className="text-gray-600">Code Commit</span>
                  <span className="font-mono text-gray-900">a3f7c2d</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-200">
                  <span className="text-gray-600">Dataset Hash</span>
                  <span className="font-mono text-gray-900">sha256:8f4a...</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-gray-600">Final Accuracy</span>
                  <span className="text-pop-dark font-semibold">94.7%</span>
                </div>
              </div>
              <button className="w-full mt-6 px-4 py-2 bg-primary-3 text-white rounded-lg font-medium hover:bg-primary-4 transition-colors">
                Export for Publication
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Pillar 4: Multi-PI Collaboration */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
                <h4 className="font-bold text-primary-3 mb-6">Shared GPU Pool: ML Research Cluster</h4>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary-3 rounded-full flex items-center justify-center text-white font-bold text-sm">CL</div>
                      <div>
                        <p className="font-medium text-gray-900">Chen Lab</p>
                        <p className="text-sm text-gray-500">NLP Research</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-primary-3">32 GPUs</p>
                      <p className="text-sm text-gray-500">Active</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-pop-dark rounded-full flex items-center justify-center text-white font-bold text-sm">PG</div>
                      <div>
                        <p className="font-medium text-gray-900">Patel Group</p>
                        <p className="text-sm text-gray-500">Computer Vision</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-pop-dark">24 GPUs</p>
                      <p className="text-sm text-gray-500">Queued</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-secondary-5 rounded-full flex items-center justify-center text-white font-bold text-sm">RL</div>
                      <div>
                        <p className="font-medium text-gray-900">Roberts Lab</p>
                        <p className="text-sm text-gray-500">Reinforcement Learning</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-secondary-6">16 GPUs</p>
                      <p className="text-sm text-gray-500">Scheduled</p>
                    </div>
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-gray-200">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Total Cluster Capacity</span>
                    <span className="font-semibold text-gray-900">128 A100 GPUs</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-sm text-pop-dark font-medium mb-2 tracking-wide uppercase">GPU Fair Share</p>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-primary-3">
                Prioritize What Matters for Deadlines
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                You have 20 students competing for GPUs, but two models must finish for a conference next week. Radix lets PIs reprioritize urgent work with a single command. Fair-share scheduling ensures everyone gets their allocation, but deadlines get priority when it counts.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-pop-light rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-primary-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-gray-700">Instantly reprioritize jobs for conference deadlines</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-pop-light rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-primary-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-gray-700">Fair-share scheduling so no researcher gets starved</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-pop-light rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-primary-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-gray-700">PI-level controls for managing lab activity</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Radix Studio Academic Section */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-primary-3">
              Built for Academic Rigor
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Everything research labs need: experiment tracking, proof of execution for publications, usage reporting, and multi-PI collaboration. Bundle Radix Core + Studio Academic for complete AI lifecycle management.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
              <div className="w-12 h-12 bg-pop-light/20 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-pop-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2 text-primary-3">Experiment Tracking</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Complete provenance tracking for every experiment. Know exactly what ran, when, and with what parameters.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
              <div className="w-12 h-12 bg-pop-light/20 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-pop-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2 text-primary-3">Proof of Execution</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Publication-ready execution logs. Reviewers can verify your results with cryptographic proof.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
              <div className="w-12 h-12 bg-pop-light/20 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-pop-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2 text-primary-3">Multi-PI Collaboration</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Share resources across labs. Fair-share allocation. Cross-lab collaboration without overhead.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Academic Pricing Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-primary-3">
              Academic Pricing
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              33% academic discount for university labs and research institutions. PI-level usage tracking and billing.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Radix Core Academic */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border-2 border-primary-1">
              <h3 className="text-2xl font-bold mb-3 text-primary-3">Radix Core</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                GPU training optimization for research clusters. Fair-share scheduling across PIs.
              </p>
              <div className="mb-6">
                <p className="text-3xl font-bold text-primary-3">$19<span className="text-xl font-normal text-gray-600">/GPU/mo</span></p>
                <p className="text-sm text-gray-500 mt-1">Academic pricing (33% discount)</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2 text-sm">
                  <svg className="w-5 h-5 text-primary-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Up to 21% training throughput improvement</span>
                </li>

                <li className="flex items-start gap-2 text-sm">
                  <svg className="w-5 h-5 text-primary-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Detailed usage tracking and reporting</span>
                </li>
              </ul>
              <TrackedCTALink
                href="/waitlist"
                trackingName="Get Core"
                trackingLocation="Research Pricing"
                className="block text-center px-6 py-3 bg-primary-3 text-white rounded-full font-semibold hover:bg-primary-4 transition-colors"
              >
                Get Core
              </TrackedCTALink>
            </div>

            {/* Radix Studio Academic */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border-2 border-primary-1">
              <h3 className="text-2xl font-bold mb-3 text-primary-3">Radix Studio Academic</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Experiment tracking, reproducibility, and publication-ready provenance logs.
              </p>
              <div className="mb-6">
                <p className="text-3xl font-bold text-primary-3">$19<span className="text-xl font-normal text-gray-600">/mo</span></p>
                <p className="text-sm text-gray-500 mt-1">Academic pricing (33% discount)</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2 text-sm">
                  <svg className="w-5 h-5 text-primary-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Complete experiment provenance</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <svg className="w-5 h-5 text-primary-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Publication-ready execution logs</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <svg className="w-5 h-5 text-primary-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Multi-PI fair-share scheduling</span>
                </li>
              </ul>
              <TrackedCTALink
                href="/waitlist"
                trackingName="Get Studio"
                trackingLocation="Research Pricing"
                className="block text-center px-6 py-3 bg-primary-3 text-white rounded-full font-semibold hover:bg-primary-4 transition-colors"
              >
                Get Studio
              </TrackedCTALink>
            </div>

            {/* Academic Platform Bundle */}
            <div className="bg-gradient-to-br from-primary-3 to-primary-4 text-white rounded-2xl p-8 shadow-lg border-2 border-primary-2 relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="bg-pop-light text-primary-4 px-4 py-1 rounded-full text-sm font-bold">RECOMMENDED</span>
              </div>
              <h3 className="text-2xl font-bold mb-3">Academic Platform</h3>
              <p className="text-white/90 mb-6 leading-relaxed">
                Complete research AI infrastructure. Training optimization plus experiment management.
              </p>
              <div className="mb-6">
                <p className="text-3xl font-bold text-pop-light">Core + Studio</p>
                <p className="text-sm text-white/70 mt-1">$30/user/mo academic bundle</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2 text-sm">
                  <svg className="w-5 h-5 text-pop-light flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-white/90">Full AI lifecycle management</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <svg className="w-5 h-5 text-pop-light flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-white/90">Bundle discount on combined pricing</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <svg className="w-5 h-5 text-pop-light flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-white/90">Priority support for grant-funded labs</span>
                </li>
              </ul>
              <TrackedCTALink
                href="/waitlist"
                trackingName="Get Both"
                trackingLocation="Research Pricing"
                className="block text-center px-6 py-3 bg-pop-light text-primary-4 rounded-full font-bold hover:bg-white transition-colors"
              >
                Get Both
              </TrackedCTALink>
            </div>
          </div>


        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary-4 via-primary-3 to-primary-3">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Publish Faster?
          </h2>
          <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
            Join university labs and research institutions who are running more experiments, publishing faster, and proving every result. Your work will be remembered and reproducible.
          </p>
          <TrackedCTALink
            href="/waitlist"
            trackingName="Start Free Trial"
            trackingLocation="Research Final CTA"
            className="inline-block px-10 py-5 bg-pop-light text-primary-4 rounded-full font-bold hover:bg-white transition-all text-xl shadow-2xl hover:shadow-pop-light/50 hover:scale-105 transform focus:outline-none focus:ring-4 focus:ring-pop-light/50"
          >
            Start Free Trial
          </TrackedCTALink>
          <p className="text-white/60 mt-6 text-sm">
            14-day full trial. Academic pricing available. Priority support for labs with active grants.
          </p>
        </div>
      </section>
    </>
  );
}
