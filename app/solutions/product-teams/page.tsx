// Route: /solutions/product-teams (Product & Engineering Teams Landing Page)
import type { Metadata } from 'next';
import Link from 'next/link';
import { TrackedCTALink } from '@/components/TrackedLink';
import { SITE } from '@/lib/site';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Product & Engineering Teams: Ship Without the Hiring Bottleneck | VaultScaler',
  description: 'Lev is a full-stack engineering team on demand. Describe what to build and Lev designs, codes, deploys, and operates it.',
  alternates: {
    canonical: `${SITE.url}/solutions/product-teams/`,
  },
  keywords: [
    'AI product development',
    'AI coding tools',
    'product engineering platform',
    'full-stack engineering team',
    'agentic coding',
    'AI software delivery',
    'product team productivity',
    'engineering automation',
    'mission brief',
    'earned autonomy',
    'AI SRE',
    'production AI coding',
  ],
  openGraph: {
    title: 'Product & Engineering Teams: Ship Without the Hiring Bottleneck | VaultScaler',
    description: 'Lev is a full-stack engineering team on demand. Describe what to build and Lev designs, codes, deploys, and operates.',
    type: 'website',
    url: `${SITE.url}/solutions/product-teams/`,
    images: [{ url: '/og.jpg', width: 1200, height: 630, alt: 'Product & Engineering Teams Solutions' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Product & Engineering Teams: Ship Without the Hiring Bottleneck | VaultScaler',
    description: 'Lev is a full-stack engineering team on demand. Describe what to build and Lev designs, codes, deploys, and operates.',
    images: ['/og.jpg'],
  },
};

export default function ProductTeamsPage() {
  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Product & Engineering Teams Solutions",
    "description": "Lev is a full-stack engineering team on demand. Describe what to build and Lev designs, codes, deploys, and operates with earned autonomy and 24/7 ops intelligence.",
    "url": `${SITE.url}/solutions/product-teams/`,
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
        "name": "Product & Engineering Teams",
        "item": `${SITE.url}/solutions/product-teams/`
      }
    ]
  };

  return (
    <>
      <JsonLd data={pageSchema} />
      <JsonLd data={breadcrumbSchema} />

      {/* Hero Section */}
      <section className="relative min-h-[clamp(600px,85vh,1000px)] flex items-center justify-center bg-gradient-to-br from-primary-4 via-primary-3 to-primary-3 overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute inset-0"
            style={{
              background: `
                repeating-linear-gradient(-5deg,
                  transparent 0px,
                  transparent 16px,
                  rgba(226,214,167,0.4) 17px,
                  rgba(226,214,167,0.4) 19px,
                  transparent 20px,
                  transparent 24px,
                  rgba(226,214,167,0.35) 25px,
                  rgba(226,214,167,0.35) 26px,
                  transparent 27px,
                  transparent 32px,
                  rgba(226,214,167,0.3) 33px,
                  rgba(226,214,167,0.3) 34px,
                  transparent 35px,
                  transparent 42px,
                  rgba(226,214,167,0.25) 43px,
                  rgba(226,214,167,0.25) 44px,
                  transparent 45px,
                  transparent 54px,
                  rgba(81,77,60,0.2) 55px,
                  rgba(81,77,60,0.2) 56px,
                  transparent 57px,
                  transparent 68px,
                  rgba(81,77,60,0.25) 69px,
                  rgba(81,77,60,0.25) 70px,
                  transparent 71px,
                  transparent 85px,
                  rgba(81,77,60,0.3) 86px,
                  rgba(81,77,60,0.3) 87px,
                  transparent 88px,
                  transparent 105px
                )
              `,
              WebkitMaskImage: 'radial-gradient(ellipse 140% 120% at 0% 100%, black 0%, black 20%, transparent 60%)',
              maskImage: 'radial-gradient(ellipse 140% 120% at 0% 100%, black 0%, black 20%, transparent 60%)',
            }}
          />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Audience tag */}
          <p className="text-base text-lev-bold font-medium mb-6 tracking-wide uppercase">
            For Product Teams, Engineering Leaders, and Startup Founders
          </p>

          {/* Main headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
            Your Team, Unblocked. <br className="hidden sm:inline" />
            Powered by Lev.
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-lev-bold max-w-3xl mx-auto mb-10 leading-relaxed">
            Lev is a full-stack engineering team on demand. Describe what to build and Lev designs, codes, deploys, and operates it. You stay in control. Lev earns your trust.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <TrackedCTALink
              href="/waitlist"
              trackingName="Join Waitlist"
              trackingLocation="Product Teams Hero"
              className="px-10 py-5 bg-lev-bold text-primary-4 rounded-full font-bold text-xl hover:bg-lev-light transition-all shadow-2xl hover:scale-105 transform focus:outline-none focus:ring-4 focus:ring-lev-bold/50"
            >
              Join the Lev Waitlist
            </TrackedCTALink>
            <TrackedCTALink
              href="/contact"
              trackingName="Contact Sales"
              trackingLocation="Product Teams Hero"
              className="px-8 py-4 border-2 border-white/30 text-white rounded-full font-semibold hover:bg-white/10 hover:border-white/50 transition-all text-lg"
            >
              Contact Lev Sales
            </TrackedCTALink>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-primary-3">
            Your Team Is Great. They're Just Stuck.
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Every feature your team ships becomes a maintenance commitment that pulls them away from the next one. The roadmap stalls — not because the team is slow, but because they're doing two jobs at once.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-lev-light/50 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-lev-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="font-bold text-xl mb-3 text-primary-3">Support Purgatory</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Your engineers shipped a great feature last quarter. Now they're spending half their sprint maintaining it — triaging incidents, patching edge cases, babysitting deploys. The backlog grows while the team keeps the lights on for what's already live.
              </p>
              <p className="text-lev-dark font-semibold text-sm">
                Every feature shipped without ops coverage slows down the next one.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-lev-light/50 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-lev-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-xl mb-3 text-primary-3">The Roadmap Keeps Slipping</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Production issues eat into sprint capacity. Deployments need hand-holding. Your best people are debugging last month's release instead of building next month's. Throughput flatlines while the plan keeps getting pushed.
              </p>
              <p className="text-lev-dark font-semibold text-sm">
                Your team isn't slow. They're just doing two jobs.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-lev-light/50 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-lev-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="font-bold text-xl mb-3 text-primary-3">AI Tools Don't Close the Loop</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Copilot, Cursor, and Kiro help your team write code faster. But faster code still needs deployment, monitoring, and incident response. The bottleneck was never writing code — it's everything after. Your team still owns the full lifecycle of everything they ship.
              </p>
              <p className="text-lev-dark font-semibold text-sm">
                Faster code doesn't help if your team is still stuck on ops.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution: Lev */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm text-lev-bold font-semibold mb-3 uppercase tracking-wide">The Solution</p>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-primary-3">
              Lev: A Full-Stack Engineering Team You Subscribe To
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Not a code assistant. Not an app builder. The engineer. You describe what to build. Lev designs, codes, deploys, and operates it.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Mission Brief → Production */}
            <div className="bg-gray-50 rounded-2xl p-8 border-l-4 border-lev-bold">
              <div className="w-12 h-12 bg-lev-bold/15 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-lev-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-bold text-xl mb-3 text-primary-3">Mission Brief to Production</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Describe what to build in plain language. Lev designs from first principles with no templates, then codes and deploys to real AWS infrastructure with Terraform, circuit breakers, and automatic rollback.
              </p>
              <p className="text-lev-dark font-semibold text-sm">
                From description to deployed. No handoffs.
              </p>
            </div>

            {/* 24/7 Ops Intelligence */}
            <div className="bg-gray-50 rounded-2xl p-8 border-l-4 border-lev-bold">
              <div className="w-12 h-12 bg-lev-bold/15 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-lev-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <h3 className="font-bold text-xl mb-3 text-primary-3">24/7 Ops Intelligence</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                When something breaks, a 4-agent incident team diagnoses, fixes, rolls back, and verifies. Lev continuously learns patterns so problems get solved before your customers feel them and before you wake up.
              </p>
              <p className="text-lev-dark font-semibold text-sm">
                An ops team that never sleeps and never forgets.
              </p>
            </div>

            {/* Earned Autonomy */}
            <div className="bg-gray-50 rounded-2xl p-8 border-l-4 border-lev-bold">
              <div className="w-12 h-12 bg-lev-bold/15 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-lev-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="font-bold text-xl mb-3 text-primary-3">Earned Autonomy</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Lev starts by proposing and you approve. As it proves reliability, it earns more autonomy. Destructive actions always require you. Like onboarding a new hire: trust is built through demonstrated competence, not assumed.
              </p>
              <p className="text-lev-dark font-semibold text-sm">
                You stay in control. Lev earns your trust.
              </p>
            </div>
          </div>

          {/* How It Works - Pipeline */}
          <div className="bg-gradient-to-br from-lev-light/20 to-lev-dark/10 rounded-3xl p-8 sm:p-12">
            <h3 className="text-2xl font-bold text-center mb-8 text-primary-3">How Lev Works</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
              {[
                { step: "1", title: "Describe", desc: "Write a mission brief in plain language. What the product does and who it serves" },
                { step: "2", title: "Design", desc: "Lev architects from first principles across 30+ AWS services" },
                { step: "3", title: "Build", desc: "Coordinated agent teams generate code, handle dependencies, and test" },
                { step: "4", title: "Deploy", desc: "Real infrastructure with Terraform, circuit breakers, and rollback" },
                { step: "5", title: "Operate", desc: "Continuous monitoring, incident response, and compounding intelligence" },
              ].map((item) => (
                <div key={item.step} className="text-center">
                  <div className="w-12 h-12 bg-lev-bold text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">{item.step}</div>
                  <h4 className="font-semibold text-primary-3 mb-2">{item.title}</h4>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-primary-3">
            Built for How You Actually Work
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Whether you're shipping your first product or managing a portfolio of applications, Lev meets you where you are.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Startups */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-lev-bold/15 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-lev-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-bold text-xl mb-3 text-primary-3">Startups</h3>
              <p className="text-gray-600 leading-relaxed mb-5">
                You're racing a runway and building something that doesn't exist yet. Every week spent hiring is a week you're not shipping. Lev gives you a complete engineering team without the six-month hiring cycle. Sign up, describe what to build, and get to market with software you can actually support.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-lev-bold font-bold text-lg leading-tight">&#x2713;</span>
                  <span className="text-gray-700 text-sm">Mission brief to production. Ideas become running software in days, not quarters</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-lev-bold font-bold text-lg leading-tight">&#x2713;</span>
                  <span className="text-gray-700 text-sm">24/7 ops intelligence so you can promise uptime and actually keep that promise</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-lev-bold font-bold text-lg leading-tight">&#x2713;</span>
                  <span className="text-gray-700 text-sm">Earned autonomy keeps you in control without drowning in approvals</span>
                </li>
              </ul>
            </div>

            {/* Enterprise */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-lev-bold/15 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-lev-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="font-bold text-xl mb-3 text-primary-3">Enterprise</h3>
              <p className="text-gray-600 leading-relaxed mb-5">
                Your board approved the AI tooling budget. The productivity gains haven't materialized. Lev gives you the predictability to make commitments you can keep, and the governance to prove it's working. Earned autonomy means oversight without micromanagement.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-lev-bold font-bold text-lg leading-tight">&#x2713;</span>
                  <span className="text-gray-700 text-sm">Earned autonomy gives you visibility and control at the level that matters</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-lev-bold font-bold text-lg leading-tight">&#x2713;</span>
                  <span className="text-gray-700 text-sm">Mission briefs create an auditable trail of decisions. No more "why did we build it this way?"</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-lev-bold font-bold text-lg leading-tight">&#x2713;</span>
                  <span className="text-gray-700 text-sm">Single-tenant deployment, SSO, and air-gapped options for regulated industries</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Intelligence Compounding */}
      <section className="py-20 bg-primary-4">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">
            Intelligence That Compounds
          </h2>
          <p className="text-lg text-white/80 mb-4 max-w-2xl mx-auto">
            Every product Lev operates makes it smarter about all products. A problem it solved on one system becomes a pattern it recognizes instantly on another.
          </p>
          <p className="text-lg text-lev-bold font-semibold max-w-2xl mx-auto">
            You're not subscribing to a static tool. You're subscribing to an engineering intelligence that improves every minute it runs.
          </p>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-primary-3">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">
            Ready to Stop Hiring and Start Shipping?
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Join the waitlist for early access. Describe what to build. Let Lev handle the rest.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <TrackedCTALink
              href="/waitlist"
              trackingName="Join Waitlist"
              trackingLocation="Product Teams CTA"
              className="px-10 py-5 bg-lev-bold text-primary-4 rounded-full font-bold hover:bg-lev-light transition-all text-xl shadow-2xl hover:scale-105 transform focus:outline-none focus:ring-4 focus:ring-lev-bold/50"
            >
              Join the Lev Waitlist. 14 Days Free.
            </TrackedCTALink>
            <TrackedCTALink
              href="/contact"
              trackingName="Contact Sales"
              trackingLocation="Product Teams CTA"
              className="px-8 py-4 border-2 border-white/30 text-white rounded-full font-semibold hover:bg-white/10 hover:border-white/50 transition-all text-lg"
            >
              Contact Lev Sales
            </TrackedCTALink>
          </div>
        </div>
      </section>
    </>
  );
}
