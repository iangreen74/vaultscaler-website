// Route: /lev
import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import FAQ from "@/components/FAQ";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Lev - Your On-Demand Engineering Team",
  description:
    "Lev is your on-demand engineering team. Describe what to build and Lev designs, codes, deploys, and operates with earned autonomy that keeps you in control.",
  alternates: { canonical: `${SITE.url}/lev/` },
  keywords: [
    "AI software engineering",
    "AI coding platform",
    "AI development team",
    "automated software delivery",
    "AI SRE",
    "mission brief",
    "earned autonomy",
    "agentic coding",
    "full-stack engineering team",
    "full SDLC automation",
    "production AI coding",
  ],
  openGraph: {
    title: "Lev - Your On-Demand Engineering Team",
    description:
      "Lev is your on-demand engineering team. Describe what to build and Lev designs, codes, deploys, and operates your product.",
    url: `${SITE.url}/lev/`,
    type: "website",
    images: [{ url: "/og/lev.png", width: 1200, height: 630, alt: "Lev by VaultScaler" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lev - Your On-Demand Engineering Team",
    description:
      "Lev is your on-demand engineering team. Describe what to build and Lev designs, codes, deploys, and operates your product.",
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
          text: "For startups without a team, Lev is the team. For companies with engineers, Lev handles execution so your best people focus on the decisions only they can make.",
        },
      },
      {
        "@type": "Question",
        name: "How is Lev different from Cursor, Copilot, or Devin?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Those tools help you write code faster. Lev is the engineer. It designs architecture, writes the code, deploys to production, monitors 24/7, and fixes problems without you managing any of it.",
        },
      },
      {
        "@type": "Question",
        name: "What is a Mission Brief?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A mission brief is how you tell Lev what to build, in plain language. Lev designs the architecture from first principles, then builds and deploys it. No templates, no boilerplate. Just real systems designed for what you actually need.",
        },
      },
      {
        "@type": "Question",
        name: "Can Lev work with my existing codebase?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Lev handles both greenfield projects and existing codebases. For existing systems, Lev maps your architecture and establishes a baseline before making changes.",
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
            Your On-Demand Engineering Team.
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-lev-bold max-w-3xl mx-auto mb-10 leading-relaxed">
            Lev understands your vision, then handles architecture, development, deployment, and operations so you can focus on your business and your customers.
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

      {/* The Problem - Vision to Reality Gap */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-primary-3">
            You Have the Vision. What You Don't Have Is the Bandwidth.
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            You know what your customers need. You can describe the system in detail. But building it means stitching together architecture, code, infrastructure, and ops — and that takes a team you may not have, or one that's already stretched thin.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-lev-bold/15 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="font-bold text-xl mb-3 text-primary-3">The Idea Is the Easy Part</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                You can see the product. You can describe every feature, every workflow, every edge case. But between that clarity and a running system sits months of architecture decisions, infrastructure setup, and deployment work. The vision isn't the bottleneck. The build is.
              </p>
              <p className="text-primary-3 font-semibold">
                You shouldn't need a 10-person team to ship what one person can describe.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-lev-bold/15 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-xl mb-3 text-primary-3">Every Week Costs You</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                While you're hiring, onboarding, and coordinating, your competitors are shipping. Every month between your idea and a live product is a month your customers are waiting — or finding someone else. The gap between vision and reality is where startups lose their edge.
              </p>
              <p className="text-primary-3 font-semibold">
                Speed to market isn't a nice-to-have. It's survival.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-lev-bold/15 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 17h8m0 0v-8m0 8l-8-8-4 4-6-6" />
                </svg>
              </div>
              <h3 className="font-bold text-xl mb-3 text-primary-3">AI Tools Only Get You Halfway</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Copilot and Cursor help write code faster. But code isn't a product. You still need architecture, infrastructure, deployment pipelines, monitoring, and someone on call when things break. Faster code doesn't close the gap between your vision and production.
              </p>
              <p className="text-primary-3 font-semibold">
                Writing code faster doesn't matter if you can't ship it.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-lev-bold/15 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-xl mb-3 text-primary-3">Hiring Takes Too Long</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                The engineers who could build this are expensive, scarce, and take months to hire and onboard. By the time your team is ready, the window may have closed. You need execution capacity now, not next quarter.
              </p>
              <p className="text-primary-3 font-semibold">
                You don't need a bigger team. You need a faster path from vision to product.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How Lev Works - Pipeline */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-primary-3">
            How Lev Works
          </h2>
          <p className="text-lg text-gray-600 text-center mb-14 max-w-3xl mx-auto">
            You describe what to build in plain language. Lev handles everything else.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6 mb-16">
            {[
              { step: "1", title: "Describe", desc: "Write a mission brief. What the product does, who it serves, what it needs to handle." },
              { step: "2", title: "Design", desc: "Lev designs the architecture from first principles. No templates. Real systems for what you need." },
              { step: "3", title: "Build", desc: "Coordinated agent teams handle code generation, dependency ordering, and testing." },
              { step: "4", title: "Deploy", desc: "Real AWS infrastructure with Terraform, circuit breakers, encryption, and automatic rollback." },
              { step: "5", title: "Operate", desc: "Continuous monitoring, incident response, and intelligence that improves while you sleep." },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-12 h-12 bg-lev-bold text-primary-4 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">
                  {item.step}
                </div>
                <h3 className="font-bold text-primary-3 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Three Pillars */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-primary-3">
            What Makes Lev Different
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Every competitor stops at code generation. Lev is the only platform that owns the outcome from your first description through production operations.
          </p>

          <div className="space-y-8">
            {/* Mission Brief → Production — left aligned */}
            <div className="flex flex-col md:flex-row items-start gap-6 bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
              <div className="flex-shrink-0 w-14 h-14 bg-lev-bold/15 rounded-xl flex items-center justify-center">
                <svg className="w-7 h-7 text-lev-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-xl mb-2 text-primary-3">Mission Brief to Production</h3>
                <p className="text-gray-600 leading-relaxed mb-3">
                  Describe what to build in plain language. Lev designs from first principles, codes, and deploys to real AWS infrastructure with Terraform, circuit breakers, and automatic rollback. The kind of infrastructure a senior DevOps engineer would set up, except you didn't hire one.
                </p>
                <p className="text-lev-dark font-semibold">
                  From idea to production. No handoffs. No gaps.
                </p>
              </div>
            </div>

            {/* 24/7 Ops Intelligence — right aligned */}
            <div className="flex flex-col md:flex-row-reverse items-start gap-6 bg-white rounded-2xl p-8 shadow-sm border border-gray-200 md:text-right">
              <div className="flex-shrink-0 w-14 h-14 bg-lev-bold/15 rounded-xl flex items-center justify-center">
                <svg className="w-7 h-7 text-lev-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-xl mb-2 text-primary-3">24/7 Ops Intelligence</h3>
                <p className="text-gray-600 leading-relaxed mb-3">
                  When something breaks, a 4-agent incident team diagnoses, fixes, rolls back, and verifies. It continuously learns patterns so problems get solved before you wake up. No on-call rotation because there's no one to rotate.
                </p>
                <p className="text-lev-dark font-semibold">
                  Problems solved before you wake up.
                </p>
              </div>
            </div>

            {/* Earned Autonomy — left aligned */}
            <div className="flex flex-col md:flex-row items-start gap-6 bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
              <div className="flex-shrink-0 w-14 h-14 bg-lev-bold/15 rounded-xl flex items-center justify-center">
                <svg className="w-7 h-7 text-lev-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-xl mb-2 text-primary-3">Earned Autonomy</h3>
                <p className="text-gray-600 leading-relaxed mb-3">
                  Lev starts by proposing and you approve. As it proves reliability, it earns more autonomy. Destructive actions like deleting infrastructure always require you. Think of it like onboarding a new hire: trust is built through demonstrated competence, not assumed.
                </p>
                <p className="text-lev-dark font-semibold">
                  You stay in control. Lev earns your trust.
                </p>
              </div>
            </div>

            {/* Recursive Self-Improvement — right aligned */}
            <div className="flex flex-col md:flex-row-reverse items-start gap-6 bg-white rounded-2xl p-8 shadow-sm border border-gray-200 md:text-right">
              <div className="flex-shrink-0 w-14 h-14 bg-lev-bold/15 rounded-xl flex items-center justify-center">
                <svg className="w-7 h-7 text-lev-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-xl mb-2 text-primary-3">Smarter Every Day</h3>
                <p className="text-gray-600 leading-relaxed mb-3">
                  Lev is continuously capturing and organizing lessons and auditing its own decisions for accuracy. The longer you work with Lev, the wiser it becomes about your intent and keeping your system healthy. Patterns it learned from one problem become instincts it applies to the next.
                </p>
                <p className="text-lev-dark font-semibold">
                  Your engineering intelligence compounds while you sleep.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Lev Can Build */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-primary-3">
            What Lev Can Build
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Full stack. Frontend and backend. If you can describe the system, Lev can build it.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Web applications & APIs",
              "SaaS platforms",
              "Microservice architectures",
              "ML training & inference pipelines",
              "AI-powered applications",
              "Chat agents & conversational AI",
              "Real-time event processing",
              "Data pipelines & ETL",
              "IoT data platforms",
              "Workflow automation",
              "Event-driven architectures",
              "Internal tools & dashboards",
              "Fraud detection systems",
              "Recommendation engines",
            ].map((item) => (
              <div key={item} className="bg-gray-50 rounded-xl p-4 text-center border border-gray-200 w-[calc(50%-0.5rem)] md:w-[calc(33.333%-0.75rem)] lg:w-[calc(25%-0.75rem)]">
                <p className="text-gray-700 text-sm font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What This Means For You */}
      <section className="py-20 bg-primary-4">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-white">
            What This Means for You
          </h2>
          <p className="text-lg text-gray-400 text-center mb-14 max-w-3xl mx-auto">
            Lev isn't a tool you learn. It's a team member you direct.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-lev-bold/30">
              <h3 className="font-bold text-lg mb-3 text-lev-bold">Stop Being Blocked by Hiring</h3>
              <p className="text-white/80 text-sm leading-relaxed">
                The senior engineer you can't find, can't afford, and can't wait for? Lev replaces that bottleneck. Your ideas become running software on a timeline measured in days, not quarters.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-lev-bold/30">
              <h3 className="font-bold text-lg mb-3 text-lev-bold">"Built Right" and "Built Now"</h3>
              <p className="text-white/80 text-sm leading-relaxed">
                Lev doesn't cut corners to ship fast. It deploys real infrastructure with real security, real monitoring, real rollback capability. Production-grade from day one.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-lev-bold/30">
              <h3 className="font-bold text-lg mb-3 text-lev-bold">An Ops Team You Don't Manage</h3>
              <p className="text-white/80 text-sm leading-relaxed">
                Lev handles operational intelligence, incident response, and proactive monitoring 24/7. When it finds something like a degradation trend or a predicted failure, it tells you in plain language.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-lev-bold/30">
              <h3 className="font-bold text-lg mb-3 text-lev-bold">Intelligence That Compounds</h3>
              <p className="text-white/80 text-sm leading-relaxed">
                Every product Lev operates makes it smarter about all products. A problem it solved on one system becomes a pattern it recognizes instantly on another. You're subscribing to engineering intelligence that improves every minute it runs.
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
                  "For startups without a team, Lev is the team. For companies with engineers, Lev handles execution so your best people focus on the decisions only they can make. It doesn\u2019t replace judgment. It makes sure judgment translates into shipped, running software.",
              },
              {
                question: "How is Lev different from Cursor, Copilot, or Devin?",
                answer:
                  "Those tools help you write code faster. Lev is the engineer. It designs architecture from a mission brief, writes the code, deploys to real AWS infrastructure, monitors 24/7, and fixes problems when they happen. When Copilot\u2019s code breaks at 2 AM, you\u2019re on your own. When Lev\u2019s system needs attention, the ops team is already working the problem.",
              },
              {
                question: "What is a Mission Brief?",
                answer:
                  "A mission brief is how you tell Lev what to build, in plain language. What the product does, who it serves, what it needs to handle. Lev designs the architecture from first principles, choosing from 30+ AWS services across compute, data, streaming, ML, networking, and more. No templates, no boilerplate. Real systems designed for what you actually need.",
              },
              {
                question: "What does \u201cEarned Autonomy\u201d mean?",
                answer:
                  "Lev starts in proposal mode. It recommends and you approve. As it proves reliability, it earns greater autonomy. Some actions it can never take without you, like deleting infrastructure or modifying authentication. This isn\u2019t a system you have to watch nervously. It\u2019s a system that proves it deserves more responsibility over time, like onboarding a new hire.",
              },
              {
                question: "How does Lev handle deployments?",
                answer:
                  "Lev deploys to real production AWS infrastructure managed by Terraform. Not a sandbox. Not a preview link. Real infrastructure with circuit breakers, automatic rollback on failed deployments, encryption in transit and at rest, and private networking. The kind of infrastructure a senior DevOps engineer would set up.",
              },
              {
                question: "Can Lev work with my existing codebase?",
                answer:
                  "Yes. Lev handles both greenfield projects and existing codebases. For existing systems, Lev maps your architecture and establishes a baseline before making any changes. It understands your system before it touches it.",
              },
              {
                question: "What if I already use AI coding tools?",
                answer:
                  "Keep them. Your developers can use Cursor, Copilot, or whatever they prefer for day-to-day coding. Lev operates at a different level: owning the architecture, deployment, operations, and incident response. Think of it as the system that makes sure all that code actually ships reliably and stays running.",
              },
              {
                question: "Who owns the code Lev creates?",
                answer:
                  "You do. 100% of the IP, 100% of the rights. No proprietary runtime, no vendor SDK woven into your output, no phone-home dependencies. The code Lev writes is standard, clean, production-grade code that any engineer can read, maintain, and extend without Lev.",
              },
              {
                question: "Can I try Lev before committing?",
                answer:
                  "Yes. Join the waitlist and when your spot opens, you\u2019ll get a free 14-day trial with full access. No credit card required to start. Experience the full pipeline from mission brief to build, deploy, and operate, then decide with confidence.",
              },
            ]}
          />
        </div>
      </section>
    </>
  );
}
