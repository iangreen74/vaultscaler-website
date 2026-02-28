// Route: /ortobahn
import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import FAQ from "@/components/FAQ";
import { SITE } from "@/lib/site";
import { TrackedCTALink } from "@/components/TrackedLink";

export const metadata: Metadata = {
  title: "Ortobahn - Content that runs itself.",
  description:
    "Ortobahn is an autonomous content pipeline. A full team of AI specialists — strategists, writers, editors, analysts — creates, publishes, and refines your content across 5 platforms. Fully autonomous or approval-based. Your call.",
  alternates: { canonical: `${SITE.url}/ortobahn/` },
  keywords: [
    "autonomous content marketing",
    "AI social media management",
    "automated content publishing",
    "AI content pipeline",
    "social media automation",
    "autonomous marketing",
    "AI content team",
    "multi-platform content",
    "content operations",
    "AI brand voice",
  ],
  openGraph: {
    title: "Ortobahn - Content that runs itself.",
    description:
      "A full team of AI specialists creates, publishes, and refines your content across 5 platforms. Fully autonomous or approval-based. Your call.",
    url: `${SITE.url}/ortobahn/`,
    type: "website",
    images: [{ url: "/og/ortobahn.png", width: 1200, height: 630, alt: "Ortobahn by VaultScaler" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ortobahn - Content that runs itself.",
    description:
      "A full team of AI specialists creates, publishes, and refines your content across 5 platforms. Fully autonomous or approval-based. Your call.",
    images: ["/og/ortobahn.png"],
  },
};

export default function OrtoBahnPage() {
  const ld = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Ortobahn",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Cloud",
    offers: [
      {
        "@type": "Offer",
        name: "Trial",
        price: "0",
        priceCurrency: "USD",
        description: "14-day free trial, 1 client, full access",
      },
      {
        "@type": "Offer",
        name: "Ortobahn",
        price: "15",
        priceCurrency: "USD",
        unitText: "per client per month",
      },
      {
        "@type": "Offer",
        name: "Agency",
        price: "0",
        priceCurrency: "USD",
        description: "Custom quoted pricing for 10+ clients",
      },
    ],
    author: { "@type": "Organization", name: "VaultScaler" },
    url: `${SITE.url}/ortobahn/`,
    description: metadata.description,
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
      { "@type": "ListItem", position: 2, name: "Ortobahn", item: `${SITE.url}/ortobahn/` },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Does Ortobahn replace my marketing team?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. Your team sets the brand direction, industry focus, and strategic goals. Ortobahn handles the execution — researching, writing, publishing, and learning from every cycle. Think of it as a content team that never takes a day off, not a replacement for human judgment.",
        },
      },
      {
        "@type": "Question",
        name: "How does Ortobahn learn my brand voice?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ortobahn learns your voice from real engagement data, not a style guide you wrote once. It continuously adjusts tone, format, and timing based on what your audience actually responds to. The more it publishes, the better it gets.",
        },
      },
      {
        "@type": "Question",
        name: "Can I review content before it goes live?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Ortobahn supports fully autonomous publishing or approval-based workflows. In approval mode, every piece of content waits for your thumbs-up before publishing. You can switch between modes anytime.",
        },
      },
      {
        "@type": "Question",
        name: "What platforms does Ortobahn support?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ortobahn publishes to X/Twitter, LinkedIn, and Bluesky for social posts, plus Medium, Substack, and LinkedIn Articles for long-form content. Each piece is tailored to the platform — threads for X, professional tone for LinkedIn, long-form for Substack.",
        },
      },
    ],
  };

  return (
    <>
      <JsonLd data={ld} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />

      {/* Hero */}
      <section className="relative min-h-[clamp(600px,90vh,1200px)] flex items-center justify-center bg-gradient-to-br from-primary-4 via-primary-3 to-primary-3 overflow-hidden">
        {/* Diagonal lines pattern - orchid accent */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute inset-0"
            style={{
              background: `
                repeating-linear-gradient(125deg,
                  transparent 0px,
                  transparent 20px,
                  rgba(200,80,192,0.12) 21px,
                  rgba(200,80,192,0.12) 23px,
                  transparent 24px,
                  transparent 36px,
                  rgba(200,80,192,0.08) 37px,
                  rgba(200,80,192,0.08) 38px,
                  transparent 39px,
                  transparent 52px,
                  rgba(200,80,192,0.15) 53px,
                  rgba(200,80,192,0.15) 56px,
                  transparent 57px,
                  transparent 72px,
                  rgba(200,80,192,0.06) 73px,
                  rgba(200,80,192,0.06) 74px,
                  transparent 75px,
                  transparent 90px
                )
              `,
              WebkitMaskImage: 'radial-gradient(ellipse 130% 110% at 100% 0%, black 0%, black 20%, transparent 60%)',
              maskImage: 'radial-gradient(ellipse 130% 110% at 100% 0%, black 0%, black 20%, transparent 60%)',
            }}
          />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm text-orto-light font-medium mb-4 tracking-wide uppercase">
            A VaultScaler Product
          </p>

          <p className="text-5xl sm:text-6xl md:text-7xl font-bold text-orto-bold mb-6 tracking-tight">
            Ortobahn
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
            Content that runs itself.
          </h1>

          <p className="text-lg md:text-xl text-orto-lighter max-w-3xl mx-auto mb-10 leading-relaxed">
            A full team of AI specialists — strategists, writers, editors, analysts — creates, publishes, and refines your content across 5 platforms. Run it fully autonomous, or require your approval before anything goes live. Your call.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <TrackedCTALink
              href="/waitlist"
              trackingName="Join Waitlist"
              trackingLocation="Ortobahn Hero"
              className="px-10 py-5 bg-orto-bold text-white rounded-full font-bold text-xl hover:bg-orto-light hover:text-primary-4 transition-all shadow-2xl hover:scale-105 transform focus:outline-none focus:ring-4 focus:ring-orto-bold/50"
            >
              Start Free Trial
            </TrackedCTALink>
            <a
              href="#how-it-works"
              className="px-8 py-4 border-2 border-white/30 text-white rounded-full font-semibold hover:bg-white/10 hover:border-white/50 transition-all text-lg"
            >
              See How It Works
            </a>
          </div>
        </div>
      </section>

      {/* The Content Problem */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-primary-3">
            The Content Problem
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Every founder knows they should be posting. Most can&apos;t sustain it. The ones who hire help can&apos;t measure it. The ones who automate it sound like robots.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-orto-lighter rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
                </svg>
              </div>
              <h3 className="font-bold text-xl mb-3 text-primary-3">Consistency Kills Growth</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Most B2B social accounts go dormant within 90 days. Not because the ideas run out. Because the time does. Every week you skip compounds into irrelevance.
              </p>
              <p className="text-orto-dark font-semibold">
                Your audience forgets you faster than you think.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-orto-lighter rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-xl mb-3 text-primary-3">Agencies Burn Cash Blindly</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                The average B2B content retainer costs $3,000–$8,000/month with no feedback loop on what actually drives engagement (HubSpot State of Marketing, 2024). You pay for volume. You hope for results.
              </p>
              <p className="text-orto-dark font-semibold">
                You brief an agency once. They never learn your voice.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-orto-lighter rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="font-bold text-xl mb-3 text-primary-3">Automation Sounds Automated</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Scheduling tools post on time. They don&apos;t learn what resonates. You end up with a feed that&apos;s on-schedule and off-brand. Same template, same tone, same results.
              </p>
              <p className="text-orto-dark font-semibold">
                Ortobahn learns your voice every day. The rest don&apos;t.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Result */}
      <section className="py-16 bg-primary-3">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-3xl sm:text-4xl font-bold text-white mb-4">
            A full team of specialists.<br className="hidden sm:inline" /> Always improving. Always on.
          </p>
          <p className="text-xl text-orto-lighter">
            Strategists, writers, editors, analysts, and a learning engine — working together on every cycle.
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-primary-3">
            How Your Team Works Together
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Four phases run on every publish cycle. Each specialist hands off to the next. No gaps, no manual steps, no handoffs that fall through.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Phase 1 */}
            <div className="bg-gray-50 rounded-2xl p-8 border-l-4 border-orto-bold">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 bg-orto-bold text-white rounded-full flex items-center justify-center text-lg font-bold flex-shrink-0">1</div>
                <h3 className="font-bold text-xl text-primary-3">Your Research Team</h3>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                Trend analysts, performance reviewers, and industry scouts scan your engagement data, monitor what&apos;s happening in your market, and surface what your audience is responding to right now.
              </p>
              <p className="text-orto-dark font-semibold">
                Every cycle starts with fresh intelligence, not a stale content calendar.
              </p>
            </div>

            {/* Phase 2 */}
            <div className="bg-gray-50 rounded-2xl p-8 border-l-4 border-orto-bold">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 bg-orto-bold text-white rounded-full flex items-center justify-center text-lg font-bold flex-shrink-0">2</div>
                <h3 className="font-bold text-xl text-primary-3">Your Strategist</h3>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                Your strategist synthesizes all the research into a content plan — what to say, where to say it, and when. It balances your brand voice, audience behavior, and platform dynamics with deep reasoning.
              </p>
              <p className="text-orto-dark font-semibold">
                Strategy informed by real data, not gut feel.
              </p>
            </div>

            {/* Phase 3 */}
            <div className="bg-gray-50 rounded-2xl p-8 border-l-4 border-orto-bold">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 bg-orto-bold text-white rounded-full flex items-center justify-center text-lg font-bold flex-shrink-0">3</div>
                <h3 className="font-bold text-xl text-primary-3">Your Writers and Editors</h3>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                Writers craft platform-native content — threads for X, articles for LinkedIn, long-form for Substack. Editors review for brand consistency. Your publisher ships it or queues it for your approval.
              </p>
              <p className="text-orto-dark font-semibold">
                Content built for each platform, not copy-pasted across them.
              </p>
            </div>

            {/* Phase 4 */}
            <div className="bg-gray-50 rounded-2xl p-8 border-l-4 border-orto-bold">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 bg-orto-bold text-white rounded-full flex items-center justify-center text-lg font-bold flex-shrink-0">4</div>
                <h3 className="font-bold text-xl text-primary-3">Your Analysts</h3>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                Your analysts measure what landed and what didn&apos;t. Engagement data flows back to the research team before the next cycle. Your voice sharpens. Your timing improves. Performance compounds.
              </p>
              <p className="text-orto-dark font-semibold">
                Every post makes the next one better.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-primary-3">
            What Ortobahn Delivers
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Not just another content tool. A content team that never stops learning.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Multi-Platform Native */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-orto-bold/15 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-orto-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="font-bold text-xl mb-3 text-primary-3">Multi-Platform Native</h3>
              <p className="text-gray-600 leading-relaxed mb-5">
                Content built for each platform, not copy-pasted across them. Ortobahn understands the difference between a LinkedIn article and an X thread.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-orto-bold font-bold text-lg leading-tight">&#x2713;</span>
                  <span className="text-gray-700 text-sm">X/Twitter threads and single posts</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orto-bold font-bold text-lg leading-tight">&#x2713;</span>
                  <span className="text-gray-700 text-sm">LinkedIn articles and updates</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orto-bold font-bold text-lg leading-tight">&#x2713;</span>
                  <span className="text-gray-700 text-sm">Bluesky, Medium, and Substack publishing</span>
                </li>
              </ul>
            </div>

            {/* Learns Your Voice */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-orto-bold/15 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-orto-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="font-bold text-xl mb-3 text-primary-3">Gets Better Every Cycle</h3>
              <p className="text-gray-600 leading-relaxed mb-5">
                Ortobahn continually learns your voice and adjusts to match. Not from a style guide you wrote once — from real engagement data, every cycle.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-orto-bold font-bold text-lg leading-tight">&#x2713;</span>
                  <span className="text-gray-700 text-sm">Voice refinement from real audience response</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orto-bold font-bold text-lg leading-tight">&#x2713;</span>
                  <span className="text-gray-700 text-sm">Automatic strategy adjustment per platform</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orto-bold font-bold text-lg leading-tight">&#x2713;</span>
                  <span className="text-gray-700 text-sm">Cross-client insights sharpen your results faster</span>
                </li>
              </ul>
            </div>

            {/* Control */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-orto-bold/15 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-orto-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="font-bold text-xl mb-3 text-primary-3">You Decide the Level of Control</h3>
              <p className="text-gray-600 leading-relaxed mb-5">
                Ortobahn can run fully autonomous or wait for your approval on every post. Same team, same quality — you just decide how much oversight you want.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-orto-bold font-bold text-lg leading-tight">&#x2713;</span>
                  <span className="text-gray-700 text-sm">Fully autonomous with confidence thresholds</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orto-bold font-bold text-lg leading-tight">&#x2713;</span>
                  <span className="text-gray-700 text-sm">Approval mode: nothing goes live without your sign-off</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orto-bold font-bold text-lg leading-tight">&#x2713;</span>
                  <span className="text-gray-700 text-sm">Switch between modes anytime</span>
                </li>
              </ul>
            </div>

            {/* Self-Healing */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-orto-bold/15 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-orto-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <h3 className="font-bold text-xl mb-3 text-primary-3">Self-Healing Operations</h3>
              <p className="text-gray-600 leading-relaxed mb-5">
                Ortobahn monitors its own systems. Failed publishes retry automatically. API issues are resolved without your intervention. You don&apos;t babysit the pipeline.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-orto-bold font-bold text-lg leading-tight">&#x2713;</span>
                  <span className="text-gray-700 text-sm">Automatic error recovery and retry</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orto-bold font-bold text-lg leading-tight">&#x2713;</span>
                  <span className="text-gray-700 text-sm">Platform API rate-limit management</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orto-bold font-bold text-lg leading-tight">&#x2713;</span>
                  <span className="text-gray-700 text-sm">Self-healing CI/CD pipeline</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 bg-primary-4">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-white">
            Built for Agencies and Operators
          </h2>
          <p className="text-lg text-gray-400 text-center mb-14 max-w-3xl mx-auto">
            Ortobahn runs content for multiple clients simultaneously. Every account is isolated. Every dollar is tracked. Every decision is logged.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-orto-bold/30">
              <h3 className="font-bold text-lg mb-3 text-orto-bold">Multi-Tenant Isolation</h3>
              <p className="text-white/80 text-sm leading-relaxed">
                Each client runs in a fully isolated environment. One client&apos;s data, strategy, and learning never bleeds into another.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-orto-bold/30">
              <h3 className="font-bold text-lg mb-3 text-orto-bold">Cost Transparency</h3>
              <p className="text-white/80 text-sm leading-relaxed">
                Per-client cost tracking down to the individual publish. Know exactly what you spend and what it returns. No opaque billing.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-orto-bold/30">
              <h3 className="font-bold text-lg mb-3 text-orto-bold">Cross-Client Learning</h3>
              <p className="text-white/80 text-sm leading-relaxed">
                Patterns that work for one vertical get anonymized and shared across the network. Every client benefits from aggregate intelligence without exposing individual data.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-orto-bold/30">
              <h3 className="font-bold text-lg mb-3 text-orto-bold">Credential Security</h3>
              <p className="text-white/80 text-sm leading-relaxed">
                OAuth token management with automatic refresh. Platform credentials are encrypted at rest. Ortobahn never stores raw passwords or API secrets in plaintext.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-orto-bold/30">
              <h3 className="font-bold text-lg mb-3 text-orto-bold">Full Audit Trail</h3>
              <p className="text-white/80 text-sm leading-relaxed">
                Every agent decision, every publish, every strategy change is logged. Trace any piece of content back to the intelligence that triggered it.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-orto-bold/30">
              <h3 className="font-bold text-lg mb-3 text-orto-bold">Per-Client Brand Voice</h3>
              <p className="text-white/80 text-sm leading-relaxed">
                Each client gets their own voice profile, industry targeting, news feeds, and cadence settings. No generic templates. Every account is tailored.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-primary-3">
            Ortobahn Pricing
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Predictable per-client pricing. Start with a free 14-day trial.
          </p>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {/* Trial */}
            <div className="bg-gray-50 border-2 border-gray-200 rounded-2xl p-6 flex flex-col">
              <div className="flex-grow">
                <h3 className="text-xl font-bold text-primary-3 mb-3">Trial</h3>
                <p className="text-2xl font-bold text-primary-3 mb-2">Free</p>
                <p className="text-sm text-gray-600 mb-4">14-day trial, 1 client, full access</p>
                <ul className="space-y-2 mb-6 text-sm">
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-orto-bold flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <span className="text-gray-600">All specialists active</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-orto-bold flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <span className="text-gray-600">Multi-platform publishing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-orto-bold flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <span className="text-gray-600">Autonomous or approval mode</span>
                  </li>
                </ul>
              </div>
              <TrackedCTALink
                href="/waitlist"
                trackingName="Join Waitlist"
                trackingLocation="Ortobahn Pricing - Trial"
                className="w-full text-center px-4 py-3 bg-primary-3 text-white text-sm rounded-full font-bold hover:bg-primary-4 transition-all shadow-lg hover:scale-105 transform inline-block"
              >
                Start Free Trial
              </TrackedCTALink>
            </div>

            {/* Ortobahn */}
            <div className="bg-primary-3 rounded-2xl p-6 flex flex-col">
              <div className="flex-grow">
                <h3 className="text-xl font-bold text-white mb-3">Ortobahn</h3>
                <p className="text-2xl font-bold text-white mb-2">$15<span className="text-sm font-normal text-white/70">/client/mo</span></p>
                <p className="text-sm text-white/80 mb-4">Autonomous content pipeline</p>
                <ul className="space-y-2 mb-6 text-sm">
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-white flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <span className="text-white/90">Full 4-phase pipeline</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-white flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <span className="text-white/90">Continuous voice learning</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-white flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <span className="text-white/90">All 5 platforms included</span>
                  </li>
                </ul>
              </div>
              <TrackedCTALink
                href="/waitlist"
                trackingName="Join Waitlist"
                trackingLocation="Ortobahn Pricing - Ortobahn"
                className="inline-block w-full text-center px-4 py-3 bg-white text-primary-3 text-sm rounded-full font-bold hover:bg-gray-100 transition-all"
              >
                Start Free Trial
              </TrackedCTALink>
            </div>

            {/* Agency */}
            <div className="bg-gradient-to-br from-primary-4 to-primary-3 text-white rounded-2xl p-6 border-2 border-orto-bold flex flex-col relative overflow-hidden">
              <div className="absolute top-4 right-4 bg-orto-bold text-white text-xs font-bold px-3 py-1 rounded-full">
                Volume
              </div>
              <div className="flex-grow">
                <h3 className="text-xl font-bold text-white mb-3">Agency</h3>
                <p className="text-2xl font-bold text-white mb-2">Custom</p>
                <p className="text-sm text-white/80 mb-4">10+ clients, volume pricing</p>
                <ul className="space-y-2 mb-6 text-sm">
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-white flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <span className="text-white/90">Multi-tenant management</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-white flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <span className="text-white/90">Cross-client learning</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-white flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <span className="text-white/90">Dedicated onboarding</span>
                  </li>
                </ul>
              </div>
              <TrackedCTALink
                href="/contact/"
                trackingName="Contact Sales"
                trackingLocation="Ortobahn Pricing - Agency"
                className="inline-block w-full text-center px-4 py-3 bg-orto-bold text-white text-sm rounded-full font-bold hover:bg-orto-light hover:text-primary-4 transition-all"
              >
                Contact Sales
              </TrackedCTALink>
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
                question: "Does Ortobahn replace my marketing team?",
                answer:
                  "No. Your team sets the brand direction, industry focus, and strategic goals. Ortobahn handles the execution \u2014 researching, writing, publishing, and learning from every cycle. Think of it as a content team that never takes a day off, not a replacement for human judgment.",
              },
              {
                question: "How does Ortobahn learn my brand voice?",
                answer:
                  "Ortobahn learns your voice from real engagement data, not a style guide you wrote once. It continuously adjusts tone, format, and timing based on what your audience actually responds to. The more it publishes, the better it gets.",
              },
              {
                question: "Can I review content before it goes live?",
                answer:
                  "Yes. Ortobahn supports fully autonomous publishing or approval-based workflows. In approval mode, every piece of content waits for your thumbs-up before publishing. You can switch between modes anytime.",
              },
              {
                question: "What platforms does Ortobahn support?",
                answer:
                  "Ortobahn publishes to X/Twitter, LinkedIn, and Bluesky for social posts, plus Medium, Substack, and LinkedIn Articles for long-form content. Each piece is tailored to the platform \u2014 threads for X, professional tone for LinkedIn, long-form for Substack.",
              },
              {
                question: "How much does it cost to run?",
                answer:
                  "Ortobahn costs $15 per client per month. That includes all platforms, all specialists, and continuous learning. For context, a content agency retainer runs $3,000\u2013$8,000/month for comparable output. Start with a free 14-day trial to see it in action.",
              },
              {
                question: "How is Ortobahn different from Buffer, Hootsuite, or Sprout Social?",
                answer:
                  "Those tools manage your publishing schedule. You still create the content, decide the strategy, and analyze the results. Ortobahn handles the entire content lifecycle \u2014 from trend research through publishing to performance learning \u2014 without requiring you to write, schedule, or review analytics manually.",
              },
              {
                question: "Is my data shared across clients?",
                answer:
                  "Never. Each client runs in a fully isolated environment. The only thing shared across clients is anonymized pattern data \u2014 for example, if a certain posting cadence works well for SaaS companies, that insight is generalized and shared. Your specific content, voice, and engagement data remain private.",
              },
              {
                question: "Can I try Ortobahn before committing?",
                answer:
                  "Yes. Every plan starts with a free 14-day trial with full access. Connect your platforms, set your brand voice, and let Ortobahn run. If it\u2019s not the right fit, you walk away having lost nothing.",
              },
            ]}
          />
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-primary-3">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Stop Writing and Start Shipping?
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Start a free 14-day trial, or talk to us about running Ortobahn across your client portfolio.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <TrackedCTALink
              href="/waitlist"
              trackingName="Join Waitlist"
              trackingLocation="Ortobahn CTA"
              className="px-10 py-5 bg-orto-bold text-white rounded-full font-bold hover:bg-orto-light hover:text-primary-4 transition-all text-xl shadow-lg hover:shadow-xl hover:scale-105 transform focus:outline-none focus:ring-4 focus:ring-orto-bold/50"
            >
              Start Free Trial
            </TrackedCTALink>
            <TrackedCTALink
              href="/contact/"
              trackingName="Contact Sales"
              trackingLocation="Ortobahn CTA"
              className="px-8 py-4 border-2 border-white/30 text-white rounded-full font-semibold hover:bg-white/10 hover:border-white/50 transition-all text-lg"
            >
              Contact Sales
            </TrackedCTALink>
          </div>
        </div>
      </section>
    </>
  );
}
