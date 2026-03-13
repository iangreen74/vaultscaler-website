// Route: /lev
import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import FAQ from "@/components/FAQ";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Lev - AI engineering. Actual delivery.",
  description:
    "Lev is a complete Agentic Engineering System that architects, builds, deploys, and supports your software. Golden Spec methodology prevents churn. Integrated SRE keeps production stable.",
  alternates: { canonical: `${SITE.url}/lev/` },
  keywords: [
    "AI software engineering",
    "AI coding platform",
    "AI development team",
    "automated software delivery",
    "AI SRE",
    "golden spec",
    "agentic coding",
    "Agentic Engineering System",
    "full SDLC automation",
    "production AI coding",
  ],
  openGraph: {
    title: "Lev - AI engineering. Actual delivery.",
    description:
      "The teammate that architects, builds, deploys, and supports your software with a memory that prevents your codebase from churning backward.",
    url: `${SITE.url}/lev/`,
    type: "website",
    images: [{ url: "/og/lev.png", width: 1200, height: 630, alt: "Lev by VaultScaler" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lev - AI engineering. Actual delivery.",
    description:
      "The teammate that architects, builds, deploys, and supports your software with a memory that prevents your codebase from churning backward.",
    images: ["/og/lev.png"],
  },
};

export default function LevPage() {
  const ld = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Lev",
    applicationCategory: "DeveloperApplication",
    operatingSystem: "Cloud",
    author: { "@type": "Organization", name: "VaultScaler" },
    url: `${SITE.url}/lev/`,
    description: metadata.description,
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
      { "@type": "ListItem", position: 2, name: "Lev", item: `${SITE.url}/lev/` },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Does Lev replace my engineering team?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. Lev works with your senior product and technical people to accelerate what they're already capable of delivering. Your people stay in the driver's seat.",
        },
      },
      {
        "@type": "Question",
        name: "How is Lev different from Cursor, Copilot, or Devin?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Those tools generate code and stop. Lev owns the entire lifecycle, from collaborative spec creation through deployment and production support.",
        },
      },
      {
        "@type": "Question",
        name: "What exactly is the Golden Spec?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The Golden Spec is a living blueprint that Lev builds collaboratively with you before writing any code. It captures every requirement, every architectural decision, and the reasoning behind each choice.",
        },
      },
      {
        "@type": "Question",
        name: "Can Lev work with my existing codebase?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Lev handles both greenfield projects and existing codebases through a Golden Spec discovery process.",
        },
      },
    ],
  };
  return (
    <>
      <JsonLd data={ld} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />

      {/* Hero - Lev */}
      <section className="relative min-h-[clamp(600px,90vh,1200px)] flex items-center justify-center bg-gradient-to-br from-primary-4 via-primary-3 to-primary-3 overflow-hidden">
        {/* Plaid pattern on undulating fabric, bottom-right corner */}
        {/* <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute inset-0"
            style={{
              background: `
                repeating-linear-gradient(93deg,
                  transparent 0px, transparent 8px,
                  rgba(226,214,167,0.06) 12px, rgba(226,214,167,0.06) 13px,
                  transparent 15px, transparent 18px,
                  rgba(230,185,7,0.1) 20px, rgba(230,185,7,0.1) 26px,
                  transparent 30px, transparent 33px,
                  rgba(226,214,167,0.06) 35px, rgba(226,214,167,0.06) 36px,
                  transparent 38px, transparent 46px,
                  rgba(255,255,255,0.04) 49px, rgba(255,255,255,0.04) 51px,
                  transparent 53px, transparent 56px,
                  rgba(5,33,82,0.12) 58px, rgba(5,33,82,0.12) 62px,
                  transparent 66px, transparent 69px,
                  rgba(255,255,255,0.04) 71px, rgba(255,255,255,0.04) 72px,
                  transparent 74px, transparent 80px
                ),
                repeating-linear-gradient(3deg,
                  transparent 0px, transparent 8px,
                  rgba(226,214,167,0.06) 12px, rgba(226,214,167,0.06) 13px,
                  transparent 15px, transparent 18px,
                  rgba(230,185,7,0.1) 20px, rgba(230,185,7,0.1) 26px,
                  transparent 30px, transparent 33px,
                  rgba(226,214,167,0.06) 35px, rgba(226,214,167,0.06) 36px,
                  transparent 38px, transparent 46px,
                  rgba(255,255,255,0.04) 49px, rgba(255,255,255,0.04) 51px,
                  transparent 53px, transparent 56px,
                  rgba(5,33,82,0.12) 58px, rgba(5,33,82,0.12) 62px,
                  transparent 66px, transparent 69px,
                  rgba(255,255,255,0.04) 71px, rgba(255,255,255,0.04) 72px,
                  transparent 74px, transparent 80px
                ),
                radial-gradient(ellipse at 80% 70%, rgba(230,185,7,0.06) 0%, transparent 30%),
                radial-gradient(ellipse at 65% 85%, rgba(0,0,0,0.1) 0%, transparent 20%),
                radial-gradient(ellipse at 90% 60%, rgba(255,255,255,0.04) 0%, transparent 25%),
                radial-gradient(ellipse at 75% 95%, rgba(0,0,0,0.08) 0%, transparent 18%),
                radial-gradient(ellipse at 95% 75%, rgba(230,185,7,0.04) 0%, transparent 30%)
              `,
              WebkitMaskImage: 'radial-gradient(200% 90% at 65% 110%, black 0%, black 30%, transparent 70%)',
              maskImage: 'radial-gradient(200% 90% at 65% 110%, black 0%, black 30%, transparent 70%)',
            }}
          />
        </div> */}

        {/* Horizontal graduated lines - bottom left, movement up and to the right, fade lev-light to lev-dark */}
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
          {/* Lev Brand */}
          <p className="text-5xl sm:text-6xl md:text-7xl font-bold text-lev-bold mb-6 tracking-tight">
            Lev
          </p>

          {/* Main Tagline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
            AI engineering. Actual delivery.
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-lev-bold max-w-3xl mx-auto mb-10 leading-relaxed">
            The teammate that architects, builds, deploys, and supports your software with a memory that prevents your codebase from churning backward.
          </p>

          {/* CTA */}
          <a
            href="/waitlist/"
            className="inline-block px-10 py-5 bg-lev-bold text-primary-4 rounded-full font-bold text-xl hover:bg-lev-light transition-all shadow-2xl hover:scale-105 transform focus:outline-none focus:ring-4 focus:ring-lev-bold/50"
          >
            Join the Waitlist
          </a>

        </div>
      </section>

      {/* The Problem - The Broken Promise of AI Development */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-primary-3">
            AI Was Supposed to Change Everything
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Your board saw the headlines. Your team adopted the tools. But the software still ships late, the code still breaks, and nobody can explain why the promised 10x never showed up.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* The Broken Promise */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-lev-bold/15 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 17h8m0 0v-8m0 8l-8-8-4 4-6-6" />
                </svg>
              </div>
              <h3 className="font-bold text-xl mb-3 text-primary-3">The Productivity That Never Arrived</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                You invested in AI copilots. You retooled workflows. Your competitors claim 10x productivity and your board is asking where the ROI is. Here's what nobody says out loud: AI coding tools were built for commodity code, not the differentiated software that defines your business. The more unique your product, the less today's AI tools can help.
              </p>
              <p className="text-primary-3 font-semibold">
                You're not behind. The tools just weren't built for what you're building.
              </p>
            </div>

            {/* The Last Mile */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-lev-bold/15 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-xl mb-3 text-primary-3">The Last Mile Is Where You Live</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                AI can scaffold a proof of concept in hours. But production isn't a demo. Your teams spend weeks wrestling AI-generated code into something stable enough to ship. The "80% done in a day" becomes 80% done for the next three months. The last 20% is where your competitive advantage lives. And it's exactly where today's AI tools abandon you.
              </p>
              <p className="text-primary-3 font-semibold">
                Demos don't ship. Stable, tested production code does.
              </p>
            </div>

            {/* The Orphaned Codebase */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-lev-bold/15 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-xl mb-3 text-primary-3">Code Nobody Owns</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Every line AI writes is a line nobody truly understands. Your senior engineers didn't architect it. Your junior engineers didn't learn from it. When something breaks at 2 AM, the team is debugging code they didn't write and can't reason about. The fix might work, or it might cascade into something worse. Nobody can say for certain, and that uncertainty compounds with every release.
              </p>
              <p className="text-primary-3 font-semibold">
                You can't maintain what you don't understand. And you can't scale what you can't maintain.
              </p>
            </div>

            {/* The Predictability Gap */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-lev-bold/15 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-xl mb-3 text-primary-3">The Predictability You've Lost</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Your board wants timelines. Your CTO wants confidence. Your teams want to stop firefighting. But AI-assisted development has turned your release process into a coin flip. You can't estimate what you can't understand, and you can't support what wasn't built with intention. The result: missed deadlines, blown budgets, and eroding trust between engineering and the rest of the business.
              </p>
              <p className="text-primary-3 font-semibold">
                Every missed commitment chips away at the credibility your team worked years to build.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How Lev Helps */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-primary-3">
            Engineering That Only Moves Forward
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Lev doesn't generate code and hope for the best. It builds collaboratively with you, hardens every decision, and owns the outcome from first commit to production incident.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* The Golden Spec */}
            <div className="bg-gray-50 rounded-2xl p-8 border-l-4 border-lev-bold">
              <div className="w-12 h-12 bg-lev-bold/15 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-lev-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-bold text-xl mb-3 text-primary-3">The Golden Spec</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Before Lev writes a line of code, it builds a Golden Spec with you. A living blueprint that captures every requirement, every decision, and every reason why. Each iteration progressively hardens your spec, so the AI never rewrites what already works. You get institutional knowledge that never walks out the door. You get compounding instead of churn.
              </p>
              <p className="text-lev-dark font-semibold">
                Stop rebuilding. Start compounding.
              </p>
            </div>

            {/* Complete Engineering Team */}
            <div className="bg-gray-50 rounded-2xl p-8 border-l-4 border-lev-bold">
              <div className="w-12 h-12 bg-lev-bold/15 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-lev-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-xl mb-3 text-primary-3">A Complete Engineering Team</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Lev shows up already fluent in your architecture, your decisions, and your reasons why. For startups, it's the senior hire you needed yesterday. For established teams, it's the colleague who's always current and always available.
              </p>
              <p className="text-lev-dark font-semibold">
                One system. Every stage. No gaps between them.
              </p>
            </div>

            {/* SRE */}
            <div className="bg-gray-50 rounded-2xl p-8 border-l-4 border-lev-bold">
              <div className="w-12 h-12 bg-lev-bold/15 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-lev-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <h3 className="font-bold text-xl mb-3 text-primary-3">SRE That Already Knows Your System</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Lev is the proactive on-call engineer who was there when it was built and remembers why. It has full context into every Golden Spec, your telemetry, analytics, and incident history. When something does break, tag <span className="bg-lev-bold/15 text-lev-dark font-mono text-sm px-1.5 py-0.5 rounded">@LEV</span> in any conversation to bring that production intelligence into the loop. The fix won't regress functionality because SRE understands what it's protecting.
              </p>
              <p className="text-lev-dark font-semibold">
                Fixes that fix. Not fixes that create the next incident.
              </p>
            </div>

            {/* Guardrails */}
            <div className="bg-gray-50 rounded-2xl p-8 border-l-4 border-lev-bold">
              <div className="w-12 h-12 bg-lev-bold/15 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-lev-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="font-bold text-xl mb-3 text-primary-3">Automated, With Your Guardrails</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Lev is automated engineering with human judgment at the controls. You decide what gets escalated and when. Want to review every bug fix? You can. Prefer to only hear about changes above a medium blast radius? Set it and trust it. Lev handles the velocity. You keep the oversight. The autonomy is real, but the final call is always yours.
              </p>
              <p className="text-lev-dark font-semibold">
                As hands-on or hands-off as your business needs you to be.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions for Your Team */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-primary-3">
            Built for How You Actually Work
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Whether you're shipping your first product or managing a portfolio of applications, Lev meets you where you are.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Startup Founders */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-lev-bold/15 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-lev-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-bold text-xl mb-3 text-primary-3">Startup</h3>
              <p className="text-gray-600 leading-relaxed mb-5">
                You're racing a runway and building something that doesn't exist yet. Every sprint that churns instead of ships is a sprint you can't afford. Lev gives you a complete engineering team without the six-month hiring cycle. You get to market with software you can actually support once customers show up.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-lev-bold font-bold text-lg leading-tight">&#x2713;</span>
                  <span className="text-gray-700 text-sm">Golden Spec prevents wasting precious cycles rebuilding what already worked</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-lev-bold font-bold text-lg leading-tight">&#x2713;</span>
                  <span className="text-gray-700 text-sm">A teammate from day one that takes you from architecture through production</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-lev-bold font-bold text-lg leading-tight">&#x2713;</span>
                  <span className="text-gray-700 text-sm">SRE means you can promise uptime to customers and actually keep that promise</span>
                </li>
              </ul>
            </div>

            {/* Corporate CIOs */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-lev-bold/15 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-lev-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="font-bold text-xl mb-3 text-primary-3">Enterprise</h3>
              <p className="text-gray-600 leading-relaxed mb-5">
                Lev is the engineer who's been on every project, sat in every architecture review, and remembers every production incident. The institutional memory your organization needs but can't build fast enough. Lev gives you the predictability to make commitments you can keep, and the governance to prove it's working.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-lev-bold font-bold text-lg leading-tight">&#x2713;</span>
                  <span className="text-gray-700 text-sm">Guardrails give you visibility and control without micromanaging your teams</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-lev-bold font-bold text-lg leading-tight">&#x2713;</span>
                  <span className="text-gray-700 text-sm">Golden Spec creates an auditable trail of decisions. No more "why did we build it this way?"</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-lev-bold font-bold text-lg leading-tight">&#x2713;</span>
                  <span className="text-gray-700 text-sm">SRE with full system context means production incidents don't cascade into crises</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* The Lev Advantage */}
      <section className="py-20 bg-primary-4">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-white">
            The Lev Advantage
          </h2>
          <p className="text-lg text-gray-400 text-center mb-6 max-w-3xl mx-auto">
            The agentic coding market has raised $3+ billion in funding (CB Insights, 2025). The best publicly verified benchmark success rate? 58% (SWE-bench Verified, mid-2025). Only 24% of organizations have scaled AI agents to production (McKinsey, 2025). The tools are failing the people who bought them.
          </p>
          <p className="text-lg text-lev-bold text-center mb-14 max-w-3xl mx-auto font-semibold">
            Lev was designed from the ground up to fix what's broken.
          </p>

          {/* What Only Lev Delivers */}
          <p className="text-sm text-lev-bold uppercase tracking-widest mb-6 text-center font-semibold">What only Lev delivers</p>
          <div className="grid md:grid-cols-2 gap-6 mb-14">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-lev-bold/30">
              <h3 className="font-bold text-lg mb-3 text-lev-bold">End-to-End Ownership</h3>
              <p className="text-white/80 text-sm leading-relaxed">
                Every competitor stops at code generation. Lev is the only platform that owns the outcome from first commit through production incident. Dev, deploy, and SRE: unified in one system, not bolted together after the fact.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-lev-bold/30">
              <h3 className="font-bold text-lg mb-3 text-lev-bold">Golden Spec Methodology</h3>
              <p className="text-white/80 text-sm leading-relaxed">
                AI tools suffer from context amnesia. Every session starts from scratch, rewriting code that already worked. The Golden Spec captures every decision, every reason why, and progressively hardens your requirements. No competitor has anything like it.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-lev-bold/30">
              <h3 className="font-bold text-lg mb-3 text-lev-bold">Integrated SRE</h3>
              <p className="text-white/80 text-sm leading-relaxed">
                When AI-generated code breaks at 2 AM, other tools have already moved on. Lev's SRE has full context into your specs, telemetry, and incident history. It resolves issues without regressing functionality because it understands what it's protecting.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-primary-3">
            Frequently Asked Questions
          </h2>

          <FAQ
            items={[
              {
                question: "Does Lev replace my engineering team?",
                answer:
                  "No. Lev is the teammate who handles the execution so your best people can focus on the decisions only they can make. It doesn\u2019t replace judgment. It makes sure judgment is never wasted on code that gets rewritten next sprint.",
              },
              {
                question: "How is Lev different from Cursor, Copilot, or Devin?",
                answer:
                  "Those tools generate code and stop. Lev owns the entire lifecycle, from collaborative spec creation through deployment and production support. When their code breaks at 2 AM, you\u2019re on your own. When Lev\u2019s code needs attention, SRE already has the context to fix it without breaking something else. We\u2019re not a coding assistant. We\u2019re a complete engineering system.",
              },
              {
                question: "What exactly is the Golden Spec?",
                answer:
                  "The Golden Spec is a living blueprint that Lev builds collaboratively with you before writing any code. It captures every requirement, every architectural decision, and the reasoning behind each choice. As your project evolves, the spec is progressively hardened, meaning Lev never rewrites what already works. Past versions and past decisions are preserved, so your product compounds forward instead of churning in circles.",
              },
              {
                question: "How does Lev handle deployments?",
                answer:
                  "Lev manages its own deployments, provisioning and configuring your infrastructure as part of the SDLC, not as an afterthought. Deployment alerts are fully customizable: choose what you\u2019re notified about, from every deployment to only those that affect critical services.",
              },
              {
                question: "Can Lev work with my existing codebase?",
                answer:
                  "Yes. Lev handles both greenfield projects and existing codebases. For existing systems, Lev onboards your codebase through a Golden Spec discovery process, mapping your architecture, documenting decisions, and establishing the baseline before making any changes. This means Lev understands your system before it touches it, which is exactly why fixes don\u2019t cascade.",
              },
              {
                question: "Do I need to bring my own LLM API keys?",
                answer:
                  "Yes. Lev uses a BYOK (Bring Your Own Key) model. You provide your own API keys for the LLM providers you prefer. This keeps you in control of your AI vendor relationships and costs, avoids lock-in, and means you can route to the models that work best for your use case. Lev\u2019s multi-LLM routing automatically selects the optimal model per task from the providers you\u2019ve configured.",
              },
              {
                question: "What if I already use AI coding tools?",
                answer:
                  "Lev isn\u2019t replacing your IDE or your copilot. Your developers can keep using Cursor, Copilot, or whatever tools they prefer for day-to-day coding. Lev operates at a different level: owning the spec, the architecture, the deployment, and production support. Think of it as the system that makes sure all that AI-generated code actually works together, ships reliably, and stays maintainable.",
              },
              {
                question: "Who owns the code Lev creates?",
                answer:
                  "You do. 100% of the IP, 100% of the rights. Lev is completely separate from the code it produces. There\u2019s no proprietary runtime baked in, no vendor SDK woven into your output, and no phone-home dependencies. The code Lev writes is standard, clean, production-grade code that any engineer can read, maintain, and extend without Lev in the picture. Think of it like hiring a contractor to build your house. When the job is done, you own the house. Lev is a tool you use, not a co-owner of what you build.",
              },
              {
                question: "Can I try Lev before committing?",
                answer:
                  "Yes. Join the waitlist and when your spot opens, you\u2019ll get a free 14-day trial with full access. No credit card required. Start with one feature or one service, experience the Golden Spec process, see how SRE works, and decide with confidence. If Lev isn\u2019t the right fit, you walk away having lost nothing.",
              },
            ]}
          />
        </div>
      </section>
    </>
  );
}
