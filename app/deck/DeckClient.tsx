"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { QRCodeSVG } from "qrcode.react";

const PASSCODE = "7412";

type Slide = {
  title: string;
  content: React.ReactNode;
  notes?: string;
  variant?: "dark";
};

/* ════════════════════════════════════════════════════════
   MAIN DECK — Slides 1-10
   ════════════════════════════════════════════════════════ */

const slides: Slide[] = [
  /* ── Slide 1 — Title ── */
  {
    title: "VaultScaler",
    content: (
      <div className="text-center py-8">
        {/* Logo + wordmark */}
        <div className="flex items-center justify-center gap-4 mb-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/brand/vaultscaler-icon-v1.0/svg/vaultscaler-icon-primary.svg"
            alt=""
            className="w-12 h-12"
          />
          <span className="text-3xl sm:text-4xl font-bold text-primary-3 tracking-tight">
            VaultScaler
          </span>
        </div>

        <p className="text-5xl sm:text-6xl font-bold text-lev-bold mt-8 mb-2">
          Lev
        </p>
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary-2 mb-4">
          The product leader&apos;s<br />
          engineering team.
        </p>

        <div className="border-t border-gray-200 pt-6 mt-6">
          <p className="text-gray-700 text-sm">
            Ian Green, CEO&ensp;|&ensp;Ben Pruess, President
          </p>
          <p className="text-gray-400 text-xs mt-1">Founded 2025&ensp;&middot;&ensp;Las Vegas, NV</p>
        </div>
      </div>
    ),
    notes:
      "THESIS: $7.4B has been spent on AI code tools (Mordor Intelligence, 2025), all targeting developers. The product visionary, the person with domain expertise who needs production-grade software, has no platform built for them. Lev is the first to address that buyer with full lifecycle coverage: specification through ongoing operations.",
  },

  /* ── Slide 2 — The Problem ── */
  {
    title: "The $7B Blind Spot",
    variant: "dark",
    content: (
      <div className="py-4">
        <h3 className="text-2xl sm:text-3xl font-bold text-white leading-snug mb-8">
          $7.4B Making Developers Faster.<br />
          Nothing Built for the Person with the Vision.
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-lg sm:max-w-xl mx-auto mb-8">
          <div className="bg-white/10 rounded-xl p-6 text-center">
            <p className="text-3xl sm:text-4xl font-extrabold text-lev-bold">$7.4B</p>
            <p className="text-gray-300 text-sm mt-2">
              spent on AI code tools in 2025 &mdash; all built for developers
            </p>
          </div>
          <div className="bg-white/10 rounded-xl p-6 text-center">
            <p className="text-3xl sm:text-4xl font-extrabold text-lev-bold">0</p>
            <p className="text-gray-300 text-sm mt-2">
              platforms for product leaders who own the vision and outcome
            </p>
          </div>
        </div>

        <div className="overflow-x-auto mb-8">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/20">
                <th className="text-left py-2.5 pr-6 font-semibold text-gray-400">What Product Leaders Need</th>
                <th className="text-left py-2.5 font-semibold text-gray-400">What the Market Built</th>
              </tr>
            </thead>
            <tbody className="text-gray-300">
              <tr className="border-b border-white/10">
                <td className="py-2.5 pr-6">Describe a product vision, get production-grade software</td>
                <td className="py-2.5">Code generation from technical prompts</td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="py-2.5 pr-6">A platform that remembers every decision</td>
                <td className="py-2.5">Context that evaporates between sessions</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-6">Deployed, operated, and reliable in production</td>
                <td className="py-2.5">Great looking prototypes that don&apos;t work in production</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-lev-bold font-bold text-lg">
          Tools were built for developers or prototypers. Nobody built for the product visionary that needs to deliver.
        </p>
      </div>
    ),
    notes:
      "SOURCE: $7.4B figure from Mordor Intelligence, AI Code Tools Market 2025. PRODUCTION GAP: AI coding agents achieve a 58% success rate on standardized benchmarks (SWE-bench Verified, mid-2025), but only 24% reach production at scale (McKinsey, 2025). The failure point is not code quality; it is that no tool handles the full lifecycle from specification through ongoing operations. COMBINED COMPETITOR VALUATIONS: Factory, Replit, Devin, Lovable, and Cursor represent $55B+ combined, all targeting technical users.",
  },

  /* ── Slide 3 — Why Now ── */
  {
    title: "The Window Is Open Right Now",
    content: (
      <div className="py-4">
        <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 mb-6">
          <p className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-3">The Shift</p>
          <p className="text-gray-700 text-base leading-relaxed">
            AI is solving the science of engineering. Code generation, deployment, infrastructure are all being abstracted, but <span className="font-bold text-gray-900">engineering capacity is still the bottleneck.</span> The tools haven't move up stream to put power in the hands of product visionaries. Until now.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 mb-8">
          <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
            <p className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-3">Market Proof</p>
            <ul className="space-y-3 text-gray-600 text-sm">
              <li className="flex items-start gap-3">
                <span className="text-primary-3 font-bold mt-0.5">&rarr;</span>
                <span>$55B+ in combined valuations across tools that stop at &ldquo;code generated&rdquo; &mdash; all built for developers</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary-3 font-bold mt-0.5">&rarr;</span>
                <span>85% of developers now use AI coding tools (GitHub, 2025) &mdash; code generation is commoditizing</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary-3 font-bold mt-0.5">&rarr;</span>
                <span>Only 24% of AI agents reach production (McKinsey, 2025) &mdash; the last mile is wide open</span>
              </li>
            </ul>
          </div>
          <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
            <p className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-3">Where It&rsquo;s Heading</p>
            <ul className="space-y-3 text-gray-600 text-sm">
              <li className="flex items-start gap-3">
                <span className="text-primary-3 font-bold mt-0.5">&rarr;</span>
                <span>The last decade built tools for developers. The next decade builds tools for product visionaries.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary-3 font-bold mt-0.5">&rarr;</span>
                <span>Factory (Sequoia-backed) at EY proves enterprise demand for full-lifecycle platforms</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary-3 font-bold mt-0.5">&rarr;</span>
                <span>Claude Code commits grew 1,200% in 6 months &mdash; engineering abstraction is accelerating</span>
              </li>
            </ul>
          </div>
        </div>

        <p className="text-primary-3 font-bold text-lg">
          Engineering is being solved. The product visionary is the next buyer. <span className="text-lev-bold">Enter Lev.</span>
        </p>
      </div>
    ),
    notes:
      "TIMING ESTIMATE: First-mover advantage for the product-visionary buyer is approximately 12–18 months before incumbents pivot their positioning. Cursor, Devin, and Lovable are scaling fast but deepening their developer focus, not broadening to product leaders. FACTORY CONTEXT: Sequoia-backed, deployed at EY and Wipro. Proved enterprise demand for full-lifecycle platforms, but targets large existing engineering organizations, not non-technical buyers. This validates the category without competing for Lev's buyer. SOURCE NOTES: 85% developer AI adoption from GitHub 2025 survey. 24% production success rate from McKinsey 2025. Claude Code commit growth (1,200% in 6 months) from Anthropic public data.",
  },

  /* ── Slide 4 — Product: Lev ── */
  {
    title: "Lev: From Vision to Production",
    content: (
      <div className="py-4">
        <p className="text-gray-600 mb-8">
          You bring the product expertise. Lev handles the engineering.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          {["Mission Brief", "Architecture", "Build", "Deploy", "Operate"].map((step, idx) => (
            <div key={step} className="flex items-center gap-3">
              <span className="bg-primary-3 text-white text-sm font-bold px-4 py-2 rounded-lg">{step}</span>
              {idx < 4 && <span className="text-gray-300 text-xl">&rarr;</span>}
            </div>
          ))}
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
            <h4 className="font-bold text-gray-800 mb-2">Define the Mission</h4>
            <p className="text-gray-500 text-sm">Describe what you want in plain language. Lev co-creates a mission brief, understands your intent, then builds it end to end. No architecture degree required.</p>
          </div>
          <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
            <h4 className="font-bold text-gray-800 mb-2">Ship Your Roadmap</h4>
            <p className="text-gray-500 text-sm">Go from 3 features a quarter to 10 without adding headcount. Your roadmap doesn&rsquo;t need to be rationed.</p>
          </div>
          <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
            <h4 className="font-bold text-gray-800 mb-2">24/7 Operations</h4>
            <p className="text-gray-500 text-sm">Autonomous incident diagnosis, response, verification. Rollback if necessary. No on-call rotation needed.</p>
          </div>
        </div>
      </div>
    ),
    notes:
      "OPERATIONAL ADVANTAGE: Because Lev builds the system, it retains full architectural context during operations. When an incident occurs, it does not need to reverse-engineer the codebase. It already knows the design intent, dependencies, and deployment topology. This is a structural advantage no bolt-on monitoring tool can replicate. INFRASTRUCTURE MODEL: Deploys to the customer's own AWS account. Code is fully auditable and portable. No vendor lock-in. This is a key trust signal for enterprise IT stakeholders evaluating the platform. COMPETITIVE GAP: No competitor covers all five lifecycle stages. Cursor and Devin stop at code. Lovable stops at prototype. Factory is additive to existing engineering teams but does not own the lifecycle.",
  },

  /* ── Slide 5 — Early Traction ── */
  {
    title: "Already in Motion",
    content: (
      <div className="py-4">
        <p className="text-gray-600 mb-8">
          Launching April 2026. Product built. Pipeline forming.
        </p>

        <div className="grid sm:grid-cols-3 gap-6 mb-10">
          <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 text-center">
            <p className="text-4xl font-extrabold text-primary-3">2</p>
            <p className="text-gray-600 text-sm mt-2 font-medium">Potential design partners</p>
            <p className="text-gray-400 text-xs mt-1">Production Co-development</p>
          </div>
          <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 text-center">
            <p className="text-4xl font-extrabold text-primary-3">28</p>
            <p className="text-gray-600 text-sm mt-2 font-medium">Waitlist signups</p>
            <p className="text-gray-400 text-xs mt-1">Organic, pre-launch</p>
          </div>
          <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 text-center">
            <p className="text-4xl font-extrabold text-primary-3">1</p>
            <p className="text-gray-600 text-sm mt-2 font-medium">Dev firm expressing interest</p>
            <p className="text-gray-400 text-xs mt-1">Potential channel partner</p>
          </div>
        </div>

        <div className="bg-primary-3/5 rounded-xl p-6 border border-primary-3/15">
          <p className="font-semibold text-gray-800 mb-3">What we&rsquo;ve already built:</p>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li className="flex items-start gap-3">
              <span className="text-primary-3 font-bold mt-0.5">&#x2713;</span>
              <span>Full lifecycle platform: spec &rarr; build &rarr; deploy &rarr; operate</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary-3 font-bold mt-0.5">&#x2713;</span>
              <span>Comprehensive memory that never forgets and learns from every interaction</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary-3 font-bold mt-0.5">&#x2713;</span>
              <span>Dogfooded building and supporting our own products</span>
            </li>

          </ul>
        </div>
      </div>
    ),
    notes:
      "DESIGN PARTNER MODEL: Both partners will co-develop in production at launch, providing direct feedback on real-world workflows. Goal is to validate the spec-to-operate loop end-to-end before opening PLG self-serve. CHANNEL OPPORTUNITY: The development firm expressing interest sees Lev as a way to scale their own delivery capacity without hiring, a potential reseller/white-label motion that could accelerate distribution beyond direct PLG. WAITLIST QUALITY: All 28 signups are organic and pre-marketing. No paid acquisition has been run. DOGFOODING CONTEXT: Lev was originally built to solve the founding team's own engineering challenges while building Radix Core (a control-theoretic GPU training optimizer). The founders are daily active users of the platform.",
  },

  /* ── Slide 6 — Market ── */
  {
    title: "Market Opportunity",
    content: (
      <div className="py-4">
        <p className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-8">
          Lev&rsquo;s Addressable Market
        </p>

        <div className="space-y-5">
          {/* TAM */}
          <div>
            <div className="flex items-baseline justify-between mb-1.5">
              <span className="text-sm font-semibold text-gray-800">TAM</span>
              <span className="text-sm font-bold text-gray-800">$7.4B</span>
            </div>
            <div className="w-full h-7 bg-gray-100 rounded-full overflow-hidden">
              <div className="h-full rounded-full bg-gray-300" style={{ width: "100%" }} />
            </div>
            <p className="text-xs text-gray-500 mt-1">AI code tools market (2025) &mdash; 26.6% CAGR to $24B by 2030</p>
          </div>

          {/* SAM */}
          <div>
            <div className="flex items-baseline justify-between mb-1.5">
              <span className="text-sm font-semibold text-gray-800">SAM</span>
              <span className="text-sm font-bold text-gray-800">$1.3B</span>
            </div>
            <div className="w-full h-7 bg-gray-100 rounded-full overflow-hidden">
              <div className="h-full rounded-full bg-primary-3/50" style={{ width: "17.5%" }} />
            </div>
            <p className="text-xs text-gray-500 mt-1">Small-to-mid teams needing lifecycle management</p>
          </div>

          {/* SOM */}
          <div>
            <div className="flex items-baseline justify-between mb-1.5">
              <span className="text-sm font-semibold text-gray-800">SOM</span>
              <span className="text-sm font-bold text-lev-bold">$6&ndash;10M</span>
            </div>
            <div className="w-full h-7 bg-gray-100 rounded-full overflow-hidden">
              <div className="h-full rounded-full bg-primary-3" style={{ width: "1%" }} />
            </div>
            <p className="text-xs text-gray-500 mt-1">~0.5&ndash;0.8% SAM penetration by Year 3</p>
          </div>
        </div>

      </div>
    ),
    notes:
      "SOURCES: Mordor Intelligence, Grand View Research, Market Research Future. SUBSEGMENTS: Agentic Coding Platforms under $1B (2025), fastest-growing subsegment. AI-Assisted DevOps/SRE projected at $4–6B by 2028. SAM METHODOLOGY: ~17.5% of TAM scoped to small-to-mid teams (2–50 developers) needing lifecycle management. Roughly 50,000–100,000 teams globally at $18–24K blended ACV. BOTTOMS-UP 3-YEAR MODEL (assumes 5% monthly churn, conservative for SMB SaaS): Year 1: convert waitlist and design partners (months 1–3), organic PLG growth (months 4–9), first Pro upsells (months 10–12). Year 2: 500+ accounts, NRR >110%. Seed capital funds 2–3 engineers + marketing. Enterprise tier ($1,999/mo) lands first multi-project deals. Year 3: ~0.3–0.4% SAM penetration, NRR >115%. CONSERVATIVE ASSUMPTIONS: Thin seed ($385K), founder-dependent pipeline until follow-on capital, PLG flywheel takes 6–9 months to generate meaningful organic volume.",
  },

  /* ── Slide 6 — Competitive Landscape ── */
  {
    title: "The Competition is Targeting Developers or Prototypers",
    content: (
      <div className="py-4">
        <div className="overflow-x-auto mb-8">
          <table className="w-full text-xs sm:text-sm min-w-[600px]">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="text-left py-3 pr-3 font-semibold text-gray-800"></th>
                <th className="text-left py-3 px-2 font-semibold text-lev-bold">Lev</th>
                <th className="text-left py-3 px-2 font-semibold text-gray-800">Cursor</th>
                <th className="text-left py-3 px-2 font-semibold text-gray-800">Lovable</th>
                <th className="text-left py-3 px-2 font-semibold text-gray-800">Devin</th>
                <th className="text-left py-3 px-2 font-semibold text-gray-800">Factory</th>
                <th className="text-left py-3 px-2 font-semibold text-gray-800">Kiro</th>
              </tr>
            </thead>
            <tbody className="text-gray-600">
              {[
                ["User", "Product teams", "Developers", "Anyone (prototypes)", "Developers", "Enterprise eng", "Developers"],
                ["Spec \u2192 Architecture", "Mission Brief", "No", "No", "No", "No", "Partial"],
                ["Production deploy", "Managed", "No", "No", "Partial", "Partial", "No"],
                ["Ops / SRE", "Built-in", "No", "No", "No", "No", "No"],
                ["Pricing", "Flat", "Usage creep", "Usage creep", "Per ACU", "Enterprise", "Usage tiers"],
              ].map(([label, lev, cursor, lovable, devin, factory, kiro], idx) => (
                <tr key={idx} className="border-b border-gray-100">
                  <td className="py-2.5 pr-3 font-medium text-gray-700">{label}</td>
                  <td className="py-2.5 px-2 font-semibold text-lev-bold">{lev}</td>
                  <td className="py-2.5 px-2">{cursor}</td>
                  <td className="py-2.5 px-2">{lovable}</td>
                  <td className="py-2.5 px-2">{devin}</td>
                  <td className="py-2.5 px-2">{factory}</td>
                  <td className="py-2.5 px-2">{kiro}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-primary-3 font-bold text-lg">
          $4B+ in ARR across these five players. Lev is the only platform where product visionaries own the full lifecycle: spec &rarr; build &rarr; deploy &rarr; operate.
        </p>
      </div>
    ),
    notes:
      "CURSOR: $2B+ ARR (Mar 2026), $29B+ valuation. Fastest-scaling SaaS product in history, but purely a code editor. No specification, deployment, or operations layer. LOVABLE: $400M ARR, $6.6B valuation, 146 employees. Independent reviews consistently note output is not production-ready. Enterprise use (Zendesk, McKinsey) limited to demos and internal tools. DEVIN (Cognition): ~$155M ARR, $10.2B valuation. Acquired Windsurf (Jul 2025). 67% PR merge rate. Struggles with ambiguous requirements and has no structured specification methodology. FACTORY: $70M raised, $300M valuation (Sequoia, NEA, NVIDIA). Deployed at EY, Wipro, MongoDB. Additive to large existing engineering organizations. No lifecycle ownership, does not target non-technical buyers. KIRO: AWS-backed. Spec-driven approach similar to Mission Brief, but remains a developer IDE. No managed deployment, no operations, no non-technical user support. Revenue multiples in this space range from 15x to 66x ARR (see Financial Comparables appendix).",
  },

  /* ── Slide 7 — Business Model ── */
  {
    title: "Flat, Predictable Pricing",
    content: (
      <div className="py-4">
        <div className="grid gap-6 mb-8">
          <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
            <p className="text-sm font-semibold text-lev-bold uppercase tracking-widest mb-4">Lev</p>
            <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-2 pr-4 font-semibold text-gray-800">Plan</th>
                  <th className="text-left py-2 px-4 font-semibold text-gray-800">Price</th>
                  <th className="text-left py-2 font-semibold text-gray-800">Details</th>
                </tr>
              </thead>
              <tbody className="text-gray-600">
                <tr className="border-b border-gray-100">
                  <td className="py-2 pr-4">Starter</td>
                  <td className="py-2 px-4 font-semibold text-gray-800">$149/mo</td>
                  <td className="py-2">50 agent-hours</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-2 pr-4 font-semibold text-lev-bold">Pro</td>
                  <td className="py-2 px-4 font-semibold text-lev-bold">$499/mo</td>
                  <td className="py-2">200 agent-hours</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4">Enterprise</td>
                  <td className="py-2 px-4 font-semibold text-gray-800">$1,999/mo</td>
                  <td className="py-2">1,000 agent-hours, SSO, SLA</td>
                </tr>
              </tbody>
            </table>
            </div>
          </div>
        </div>

        <div className="bg-primary-3/5 rounded-xl p-6 border border-primary-3/15">
          <p className="text-gray-500 text-sm">
            Top-up credits available at <span className="font-semibold text-lev-bold">20%</span> discount from plan rate.
          </p>
        </div>

      </div>
    ),
    notes:
      "EFFECTIVE HOURLY RATES: Starter $2.98/hr, Pro $2.50/hr, Enterprise $2.00/hr. Top-up rates (20% discount): Starter $2.38/hr, Pro $2.00/hr, Enterprise $1.60/hr. BLENDED ACV: Starter $1,788/yr, Pro $5,988/yr, Enterprise $23,988/yr. Pro is expected to be the center of gravity at steady state. COMPETITIVE PRICING: Replit uses usage-based pricing with unpredictable bills. Factory charges $80/mo base plus custom enterprise pricing. Lev's single metric (agent-hours) eliminates variable cost surprises. COST VS. HIRING: A senior engineer costs $12,000–$20,000/month fully loaded. A junior hire requiring management costs $6,000–$8,000/month. Lev Pro at $499/mo is roughly 3% of a senior engineer's cost, with no onboarding, benefits, or management overhead.",
  },

  /* ── Slide 8 — Customer ── */
  {
    title: "For Product Visionaries Who Can\u2019t Wait",
    content: (
      <div className="py-4">
        <p className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-6">
          The founder with the $80K quote. The product VP with 5 approved roadmap items out of 20. They couldn&rsquo;t build before. Now they can.
        </p>

        <div className="overflow-x-auto mb-8">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="text-left py-3 pr-4 font-semibold text-gray-800"></th>
                <th className="text-left py-3 px-4 font-semibold text-gray-800">US Onshore</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-800">Offshore</th>
                <th className="text-left py-3 px-4 font-semibold text-lev-bold">Lev</th>
              </tr>
            </thead>
            <tbody className="text-gray-600">
              <tr className="border-b border-gray-100">
                <td className="py-3 pr-4 font-medium text-gray-700">Annual cost</td>
                <td className="py-3 px-4">$500K&ndash;$850K</td>
                <td className="py-3 px-4">$120K&ndash;$300K</td>
                <td className="py-3 px-4 font-bold text-lev-bold">$6K (Pro)</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-3 pr-4 font-medium text-gray-700">Time to productivity</td>
                <td className="py-3 px-4">1&ndash;2 months</td>
                <td className="py-3 px-4">5&ndash;8 months</td>
                <td className="py-3 px-4 font-bold text-lev-bold">Days</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-3 pr-4 font-medium text-gray-700">Deploy + Ops included</td>
                <td className="py-3 px-4">No</td>
                <td className="py-3 px-4">No</td>
                <td className="py-3 px-4 font-bold text-lev-bold">Yes</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-medium text-gray-700">Ramp risk</td>
                <td className="py-3 px-4">Low</td>
                <td className="py-3 px-4">High</td>
                <td className="py-3 px-4 font-bold text-lev-bold">None</td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    ),
    notes:
      "ONSHORE COST BREAKDOWN: Senior engineer $200K–$350K/yr. DevOps/SRE $150K–$250K/yr. QA/Testing $100K–$150K/yr. Architecture/Tech Lead $250K+ if separate role. Total does not include tools, infrastructure, or management overhead. OFFSHORE BREAKDOWN BY REGION: India $18–40/hr ($40K–$85K/yr per dev). Eastern Europe $50–90/hr ($100K–$190K/yr per dev). Latin America $45–85/hr ($95K–$180K/yr per dev). OFFSHORE RAMP RISK: Average offshore team reaches 85% productivity at 4.6 months; full parity at 7–8 months (DistantJob, 2026). TARGET BUYER: Small teams building novel products, underserved by every competitor. 80%+ of Y Combinator startups already use AI coding tools (GitHub, 2025). These teams have validated the category; Lev expands it to the product leader.",
  },

  /* ── Slide 9 — Team ── */
  {
    title: "Built by Operators, Not Tourists",
    content: (
      <div className="py-4">
        <div className="grid md:grid-cols-2 gap-8 mb-10">
          <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 flex flex-col sm:flex-row gap-5">
            <img src="/founders/ian.jpg" alt="Ian Green" className="w-20 h-20 rounded-full object-cover shrink-0" />
            <div>
              <p className="font-bold text-gray-800 text-lg mb-1">Ian Green</p>
              <p className="text-sm text-lev-bold font-semibold mb-3">CEO</p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Former New Zealand Defense Force, focused on defensive cyber operations. AI platform engineer. Deep technical background in systems engineering and Dev/Ops.
              </p>
            </div>
          </div>
          <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 flex flex-col sm:flex-row gap-5">
            <img src="/founders/ben.jpg" alt="Ben Pruess" className="w-20 h-20 rounded-full object-cover shrink-0" />
            <div>
              <p className="font-bold text-gray-800 text-lg mb-1">Ben Pruess</p>
              <p className="text-sm text-lev-bold font-semibold mb-3">President</p>
              <p className="text-gray-600 text-sm leading-relaxed">
                20-year healthcare technology leader. Operational expertise in regulated environments. Knows how to drive organizational adoption for new technology and business practices.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-primary-3/5 rounded-xl p-6 border border-primary-3/15">
          <p className="font-semibold text-gray-800 mb-3">Why this team:</p>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li className="flex items-start gap-3">
              <span className="text-primary-3 font-bold mt-0.5">&#x2713;</span>
              <span>We built Lev because we needed it. Not because we saw a market report.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary-3 font-bold mt-0.5">&#x2713;</span>
              <span>Technical depth (Ian) + operational scale (Ben) = build it right AND sell it.</span>
            </li>
          </ul>
        </div>
      </div>
    ),
    notes:
      "ORIGIN STORY: The team was building Radix Core, a control-theoretic GPU training optimizer. Existing AI tools could not handle the architectural complexity. They built the system they needed; that system became Lev. They are the target user, not market observers. WHY HEALTHCARE BACKGROUND MATTERS: Ben spent 20 years in healthcare technology, a regulated industry where software failures have real consequences. That mindset (reliability, auditability, governance) is foundational to Lev's architecture. It also means he knows how to drive organizational adoption of new technology in risk-averse environments. COMPLEMENTARY SKILL SET: Ian owns the technical architecture (AI systems, infrastructure, DevOps). Ben owns go-to-market and operational scale. Both skills are required to build the product and sell it.",
  },

  /* ── Slide 10 — The Ask ── */
  {
    title: "Raising $385,000 to Own the Product Visionary\u2019s Platform",
    variant: "dark",
    content: (
      <div className="py-4">

        <p className="text-sm font-semibold text-lev-bold uppercase tracking-widest mb-6">
          Use of Funds
        </p>

        <div className="overflow-x-auto mb-10">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/20">
                <th className="text-left py-3 pr-4 font-semibold text-white">Priority</th>
                <th className="text-left py-3 font-semibold text-white">Allocation</th>
              </tr>
            </thead>
            <tbody className="text-gray-300">
              <tr className="border-b border-white/10">
                <td className="py-3 pr-4 font-medium text-white">Engineering</td>
                <td className="py-3">Production hardening with design partners. Autonomous 24/7 ops agent.</td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="py-3 pr-4 font-medium text-white">Go-to-Market</td>
                <td className="py-3">Product-led free tier and founder-led sales to first 10 customer conversions</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-gray-300 text-base mb-8">
          SAFE &mdash; $4M post-money cap
        </p>

        <p className="text-sm font-semibold text-lev-bold uppercase tracking-widest mb-5">
          What $385K Unlocks
        </p>

        <div className="space-y-5 mb-6">
          <div className="flex items-start gap-4">
            <span className="flex-shrink-0 text-lev-bold text-xs font-bold px-2.5 py-1 rounded-full border border-lev-bold/30 mt-1">Year 1</span>
            <div>
              <p className="text-white font-bold text-base">$200&ndash;300K ARR &mdash; market fit proven</p>
              <p className="text-gray-400 text-sm mt-0.5">50&ndash;100 Starter &middot; 10&ndash;20 Pro conversions &middot; PLG flywheel seeded</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <span className="flex-shrink-0 text-lev-bold text-xs font-bold px-2.5 py-1 rounded-full border border-lev-bold/30 mt-1">Year 3</span>
            <div>
              <p className="text-white font-bold text-base">$3&ndash;5M ARR with Series A capital</p>
              <p className="text-gray-400 text-sm mt-0.5">1,000+ accounts &middot; 150+ Pro &middot; 20+ Enterprise &middot; NRR &gt;115%</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <span className="flex-shrink-0 text-lev-bold text-xs font-bold px-2.5 py-1 rounded-full border border-lev-bold/30 mt-1">Year 5</span>
            <div>
              <p className="text-white font-bold text-lg">$40&ndash;70M ARR &mdash; platform standard</p>
              <p className="text-gray-400 text-sm mt-0.5">1.5&ndash;3% SAM penetration as market grows to $2.5B+</p>
            </div>
          </div>
        </div>
      </div>
    ),
    notes:
      "WHY $385K IS SUFFICIENT: The product already exists. This is go-to-market capital, not R&D. At lean founder salaries, $385K provides 12–18 months of runway. YEAR 1 MATH: 2 design partners already signed, 28 on waitlist, launching April 2026. Months 1–3: convert waitlist and design partners. Months 4–9: organic PLG growth. Months 10–12: first Pro upsells. Proves market fit and positions a $1.5–2M seed round. YEAR 3 ASSUMPTIONS: Series A capital ($3–5M) funds 2–3 engineers + marketing to scale past founder-led sales. Enterprise tier lands first multi-project deals. YEAR 5 SAM MATH: Market grows at 26% CAGR. Current $1.3B SAM reaches ~$2.5B by Year 5. 1.5–3% penetration at that point = $40–70M ARR. RETURN CONTEXT: Companies in this space trade at 18–68x ARR (see Financial Comparables appendix). At $300K ARR with strong growth, implied next-round valuation is $10–15M, a meaningful return on a $385K entry at a $4M cap. WHY A SAFE AT $4M POST-MONEY CAP: A SAFE (Simple Agreement for Future Equity). At $4M post-money, a $385K investment buys ~9.6% ownership on a fully-diluted basis. If the seed round prices at $10–15M (implied by $300K ARR + strong growth), SAFE holders convert at the $4M cap — 2.5–3.75x markup on paper at conversion.",
  },
];

/* ════════════════════════════════════════════════════════
   APPENDIX — Addendums A-G
   ════════════════════════════════════════════════════════ */

const appendix: Slide[] = [
  /* ── Addendum — Origin Story ── */
  {
    title: "Founder Story. Dogfooding Lev.",
    content: (
      <div className="py-4">
        <p className="text-gray-600 text-sm leading-relaxed mb-8">
          We were building <span className="font-semibold text-primary-3">Radix Core</span> &mdash; a control-theoretic GPU training optimizer. Novel problem. Hard engineering.
        </p>

        <div className="bg-gray-50 rounded-xl p-6 mb-8 border border-gray-200">
          <p className="font-semibold text-gray-800 mb-4">What broke:</p>
          <ul className="space-y-3 text-gray-600">
            <li className="flex items-start gap-3">
              <span className="text-red-400 mt-0.5">&times;</span>
              <span>Agents &ldquo;forgot&rdquo; working code and rewrote it</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-400 mt-0.5">&times;</span>
              <span>AI was &ldquo;helpful&rdquo; &mdash; adding features nobody asked for</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-400 mt-0.5">&times;</span>
              <span>Context evaporated between sessions</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-400 mt-0.5">&times;</span>
              <span>No tool could deploy or operate what it built</span>
            </li>
          </ul>
        </div>

        <p className="text-gray-600 text-sm leading-relaxed mb-2">
          We hit the boundary where off-the-shelf LLMs couldn&rsquo;t handle the complexity. So we built the system we needed.
        </p>
        <p className="text-primary-3 font-bold text-base">
          That system became Lev.
        </p>
      </div>
    ),
    notes:
      "RADIX CORE CONTEXT: FEP/MIMO control-theoretic GPU scheduling, a genuinely novel engineering problem that stressed every AI coding tool available. The complexity was architectural, not just code volume. PRECEDENT: Slack followed a similar path: built as an internal communication tool for Tiny Speck (the game studio behind Glitch). The game was discontinued; the internal tool became a $27B company. The pattern: tools built out of necessity for the builder's own workflow tend to have stronger product-market fit than tools designed speculatively for an external market.",
  },

  
  /* ── Addendum C — Financial Comparables ── */
  {
    title: "Financial Comparables",
    content: (
      <div className="py-4">
        <div className="overflow-x-auto">
          <table className="w-full text-sm min-w-[540px]">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="text-left py-3 pr-3 font-semibold text-gray-800">Company</th>
                <th className="text-left py-3 px-3 font-semibold text-gray-800">ARR</th>
                <th className="text-left py-3 px-3 font-semibold text-gray-800">Valuation</th>
                <th className="text-left py-3 px-3 font-semibold text-gray-800">Multiple</th>
                <th className="text-left py-3 px-3 font-semibold text-gray-800">Funding</th>
                <th className="text-left py-3 px-3 font-semibold text-gray-800">Founded</th>
              </tr>
            </thead>
            <tbody className="text-gray-600">
              {[
                ["Cursor", "$2B+", "$29B+", "~15x", "$2.3B", "2022"],
                ["Cognition (Devin)", "~$155M", "$10.2B", "~66x", "$696M", "2023"],
                ["Lovable", "$400M", "$6.6B", "~17x", "$530M", "2023"],
                ["Factory", "N/A", "$300M", "N/A", "$70M", "2023"],
                ["Bolt.new", "$40M", "$700M", "~18x", "$105M", "2024"],
                ["Blitzy", "N/A", "N/A", "N/A", "$4.4M", "2024"],
              ].map(([company, arr, val, mult, fund, year], idx) => (
                <tr key={idx} className="border-b border-gray-100">
                  <td className="py-2.5 pr-3 font-medium text-gray-700">{company}</td>
                  <td className="py-2.5 px-3">{arr}</td>
                  <td className="py-2.5 px-3">{val}</td>
                  <td className="py-2.5 px-3">{mult}</td>
                  <td className="py-2.5 px-3">{fund}</td>
                  <td className="py-2.5 px-3">{year}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-gray-400 text-xs mt-4 italic">
          Sources: CNBC, TechCrunch, Bloomberg, Sacra, Crunchbase
        </p>
      </div>
    ),
  },

  
  /* ── Addendum G — Sources ── */
  {
    title: "Sources",
    content: (
      <div className="py-4 space-y-8">
        <div>
          <p className="text-sm font-semibold text-gray-800 uppercase tracking-widest mb-3">Market Data</p>
          <ul className="space-y-1.5 text-gray-600 text-sm">
            <li>Mordor Intelligence &mdash; AI Code Tools Market, 2025</li>
            <li>Grand View Research &mdash; AI Code Tools Market Report</li>
            <li>Market Research Future &mdash; Generative AI in Coding Market</li>
            <li>McKinsey &mdash; AI agent scaling survey, 2025</li>
            <li>SWE-bench Verified &mdash; Agentic coding benchmarks, mid-2025</li>
            <li>IDC &mdash; AI Infrastructure Tracker, November 2025</li>
            <li>Gartner &mdash; Worldwide AI Spending, January 2026</li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold text-gray-800 uppercase tracking-widest mb-3">Competitor Financials</p>
          <ul className="space-y-1.5 text-gray-600 text-sm">
            <li>Cursor $2B+ ARR, $29B+ valuation &mdash; Bloomberg &amp; TechCrunch, Mar 2026</li>
            <li>Cursor $2.3B Series D &mdash; CNBC, Nov 2025</li>
            <li>Cognition $10.2B valuation &mdash; TechCrunch, Sep 2025</li>
            <li>Cognition Windsurf acquisition &mdash; TechCrunch, Jul 2025</li>
            <li>Cognition revenue &mdash; Sacra, Contrary Research</li>
            <li>Lovable $400M ARR &mdash; TechCrunch, Mar 2026</li>
            <li>Lovable $6.6B valuation &mdash; TechCrunch, Dec 2025</li>
            <li>Factory $50M Series B at $300M &mdash; BusinessWire, Sep 2025</li>
            <li>Factory Wipro partnership &mdash; Wipro, Jan 2026</li>
            <li>Kiro launch &mdash; TechCrunch, Dec 2025</li>
            <li>Bolt.new &mdash; Sacra</li>
            <li>Blitzy funding &mdash; PRNewswire, Sep 2024</li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold text-gray-800 uppercase tracking-widest mb-3">Dev Team Cost Data</p>
          <ul className="space-y-1.5 text-gray-600 text-sm">
            <li>DistantJob &mdash; Offshore vs Nearshore vs Onshore Rates, 2026</li>
            <li>Second Talent &mdash; Offshore Developer Rate Card, 2026</li>
            <li>Qubit Labs &mdash; Offshore Development Rates Guide, 2026</li>
          </ul>
        </div>
      </div>
    ),
  },
];

/* ════════════════════════════════════════════════════════
   NAV LABELS
   ════════════════════════════════════════════════════════ */

const NAV_LABELS = [
  "Title",
  "Problem",
  "Why Now",
  "Product",
  "Traction",
  "Market",
  "Competition",
  "Pricing",
  "Customer",
  "Founders",
  "Ask",
  "Appendix",
] as const;

/* ════════════════════════════════════════════════════════
   COMPONENT
   ════════════════════════════════════════════════════════ */

export default function DeckClient() {
  const [unlocked, setUnlocked] = useState(false);
  const [pin, setPin] = useState(["", "", "", ""]);
  const [error, setError] = useState(false);
  const [showNotes, setShowNotes] = useState(false);
  const [showQrModal, setShowQrModal] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const carouselRef = useRef<HTMLDivElement>(null);
  const navItemRefs = useRef<(HTMLButtonElement | null)[]>([]);

  function handleDigit(index: number, value: string) {
    if (!/^\d?$/.test(value)) return;
    const next = [...pin];
    next[index] = value;
    setPin(next);
    setError(false);

    if (value && index < 3) {
      inputRefs.current[index + 1]?.focus();
    }

    // Auto-submit when all 4 digits entered
    if (value && index === 3) {
      const code = next.join("");
      if (code === PASSCODE) {
        sessionStorage.setItem("deck_unlocked", "1");
        setUnlocked(true);
      } else {
        setError(true);
        setPin(["", "", "", ""]);
        setTimeout(() => inputRefs.current[0]?.focus(), 150);
      }
    }
  }

  function handleKeyDown(index: number, e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Backspace" && !pin[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  }

  // Check sessionStorage on mount
  useEffect(() => {
    if (typeof window !== "undefined" && sessionStorage.getItem("deck_unlocked") === "1") {
      setUnlocked(true);
    }
  }, []);

  // Scroll-spy: detect which section is in view
  useEffect(() => {
    if (!unlocked) return;

    let observer: IntersectionObserver | null = null;

    const timer = setTimeout(() => {
      // Track which sections are currently visible
      const visibleSet = new Set<number>();

      // Account for sticky headers: nav (64px) + mobile carousel (~44px) = ~108px
      const topClip = window.innerWidth >= 1024 ? 80 : 120;

      observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            const idx = sectionRefs.current.findIndex((r) => r === entry.target);
            if (idx === -1) continue;
            if (entry.isIntersecting) {
              visibleSet.add(idx);
            } else {
              visibleSet.delete(idx);
            }
          }
          // Activate the lowest-indexed (topmost) visible section
          if (visibleSet.size > 0) {
            setActiveIndex(Math.min(...visibleSet));
          }
        },
        {
          rootMargin: `-${topClip}px 0px -40% 0px`,
          threshold: 0,
        }
      );

      sectionRefs.current.forEach((ref) => {
        if (ref) observer!.observe(ref);
      });
    }, 150);

    return () => {
      clearTimeout(timer);
      observer?.disconnect();
    };
  }, [unlocked]);

  // Auto-scroll carousel to keep active item centered
  useEffect(() => {
    const carousel = carouselRef.current;
    const activeItem = navItemRefs.current[activeIndex];
    if (!carousel || !activeItem) return;

    const scrollLeft =
      activeItem.offsetLeft -
      carousel.offsetWidth / 2 +
      activeItem.offsetWidth / 2;

    carousel.scrollTo({ left: scrollLeft, behavior: "smooth" });
  }, [activeIndex]);

  const scrollToSection = useCallback((index: number) => {
    const el = sectionRefs.current[index];
    if (!el) return;
    // nav (64) + mobile carousel (~40) + gap
    const offset = window.innerWidth >= 1024 ? 80 : 120;
    const y = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top: y, behavior: "smooth" });
  }, []);

  if (!unlocked) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center px-4">
          <p className="text-4xl font-bold text-gray-500 mb-2 tracking-tight">VaultScaler</p>
          <p className="text-gray-400 text-sm mb-10">Enter passcode to continue</p>

          <div className="flex gap-3 justify-center mb-6">
            {pin.map((digit, i) => (
              <input
                key={i}
                ref={(el) => { inputRefs.current[i] = el; }}
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={digit}
                onChange={(e) => handleDigit(i, e.target.value)}
                onKeyDown={(e) => handleKeyDown(i, e)}
                className={`w-14 h-16 text-center text-2xl font-bold rounded-xl bg-white border-2 text-gray-800 outline-none transition-colors focus:border-lev-bold ${
                  error ? "border-red-400 animate-shake" : "border-gray-300"
                }`}
                autoFocus={i === 0}
              />
            ))}
          </div>

          {error && (
            <p className="text-red-500 text-sm">Incorrect passcode. Try again.</p>
          )}
        </div>
      </section>
    );
  }

  function renderSlide(s: Slide, i: number, showDivider: boolean, label: string, isAppendix?: boolean) {
    return (
      <div key={`${label}-${i}`} className="mb-20">
        {/* Slide divider */}
        {showDivider && (
          <div className="flex items-center gap-4 mb-10">
            <div className={`flex-1 h-px bg-gradient-to-r from-transparent ${isAppendix ? "via-gray-500" : "via-gray-300"} to-transparent`} />
            <span className="text-xs font-medium tracking-widest uppercase text-gray-400">
              {label}
            </span>
            <div className={`flex-1 h-px bg-gradient-to-r from-transparent ${isAppendix ? "via-gray-500" : "via-gray-300"} to-transparent`} />
          </div>
        )}

        {/* Slide header */}
        <div className="mb-8">
          <h2 className={`text-3xl sm:text-4xl font-bold tracking-tight ${isAppendix ? "text-white" : "text-gray-800"}`}>
            {s.title}
          </h2>
        </div>

        {/* Slide body */}
        <div
          className={`relative rounded-2xl p-8 sm:p-12 border text-lg sm:text-xl ${
            s.variant === "dark"
              ? "bg-gray-800 border-gray-700"
              : "bg-white border-gray-200"
          }`}
        >
          {s.content}

          {/* Invisible notes toggle — bottom-right corner */}
          {s.notes && (
            <button
              onClick={() => setShowNotes((v) => !v)}
              className="absolute bottom-0 right-0 w-16 h-16"
              aria-label="Toggle supporting detail"
            />
          )}
        </div>

        {/* Notes */}
        {showNotes && s.notes && (
          <div className={`mt-4 rounded-xl p-6 border ${isAppendix ? "bg-gray-600/80 border-gray-500" : "bg-gray-200/80 border-gray-300"}`}>
            <p className={`text-xs font-semibold uppercase tracking-widest mb-2 ${isAppendix ? "text-gray-400" : "text-gray-500"}`}>Supporting Detail</p>
            <p className={`text-sm leading-relaxed ${isAppendix ? "text-gray-300" : "text-gray-600"}`}>{s.notes}</p>
          </div>
        )}
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-gray-100 lg:pl-52">
      {/* Mobile carousel nav — below site nav, hidden on lg+ */}
      <div className="lg:hidden sticky top-16 z-[19] bg-gray-600/95 backdrop-blur border-b border-gray-500/50">
        <div
          ref={carouselRef}
          className="flex gap-1.5 overflow-x-auto scrollbar-hide px-3 py-2"
        >
          {/* QR thumbnail — leftmost in mobile carousel */}
          <button
            onClick={() => setShowQrModal(true)}
            className="flex-shrink-0 flex items-center justify-center px-2"
            title="Scan QR code to open deck"
          >
            <QRCodeSVG
              value="https://vaultscaler.com/deck/"
              size={22}
              bgColor="transparent"
              fgColor="#ffffff"
              level="M"
            />
          </button>
          {NAV_LABELS.map((label, i) => (
            <button
              key={label}
              ref={(el) => { navItemRefs.current[i] = el; }}
              onClick={() => scrollToSection(i)}
              className={`flex-shrink-0 text-sm px-4 py-2 rounded-full transition-all whitespace-nowrap ${
                activeIndex === i
                  ? "bg-white text-gray-900 font-semibold shadow-sm"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Desktop sidebar — fixed left, hidden below lg */}
      <nav className="hidden lg:flex lg:flex-col lg:fixed lg:left-0 lg:top-16 lg:w-52 lg:h-[calc(100vh-4rem)] lg:bg-gray-100 lg:border-r lg:border-gray-200 lg:z-10">
        {/* QR thumbnail — top of sidebar */}
        <div className="pt-6 px-4 flex justify-center">
          <button
            onClick={() => setShowQrModal(true)}
            className="opacity-60 hover:opacity-100 transition-opacity"
            title="Scan QR code to open deck"
          >
            <QRCodeSVG
              value="https://vaultscaler.com/deck/"
              size={36}
              bgColor="transparent"
              fgColor="#6b7280"
              level="M"
            />
          </button>
        </div>
        <div className="pt-4 pb-8 px-4 space-y-0.5 overflow-y-auto flex-1">
          {NAV_LABELS.map((label, i) => (
            <button
              key={label}
              onClick={() => scrollToSection(i)}
              className={`w-full text-left text-sm px-3 py-2.5 rounded-lg transition-all ${
                activeIndex === i
                  ? "bg-primary-3 text-white font-semibold shadow-sm"
                  : "text-gray-500 hover:text-gray-800 hover:bg-gray-200/70"
              }`}
            >
              <span className={`inline-block w-6 text-xs tabular-nums ${activeIndex === i ? "text-primary-1" : "text-gray-400"}`}>
                {i < slides.length ? i + 1 : ""}
              </span>
              {label}
            </button>
          ))}
        </div>
      </nav>

      {/* Main deck slides */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {slides.map((s, i) => (
          <div key={`section-${i}`} ref={(el) => { sectionRefs.current[i] = el; }}>
            {renderSlide(s, i, i > 0, String(i + 1).padStart(2, "0"))}
          </div>
        ))}
      </div>

      {/* ── Appendix section ── */}
      <div ref={(el) => { sectionRefs.current[slides.length] = el; }}>
        <div className="bg-gray-700 border-y border-gray-600">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-[0.3em] mb-2">
              Appendix
            </p>
            <p className="text-2xl sm:text-3xl font-bold text-white">
              Supporting Materials
            </p>
          </div>
        </div>

        <div className="bg-gray-700">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            {appendix.map((s, i) =>
              renderSlide(
                s,
                i,
                i > 0,
                String.fromCharCode(65 + i),
                true
              )
            )}
          </div>
        </div>
      </div>

      {/* QR Code Modal */}
      {showQrModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
          onClick={() => setShowQrModal(false)}
        >
          <div
            className="bg-white rounded-2xl p-8 flex flex-col items-center gap-4"
            onClick={(e) => e.stopPropagation()}
          >
            <QRCodeSVG
              value="https://vaultscaler.com/deck/"
              size={256}
              bgColor="#ffffff"
              fgColor="#000000"
              level="M"
            />
            <p className="text-sm text-gray-500">Scan to open this deck</p>
            <button
              onClick={() => setShowQrModal(false)}
              className="text-xs text-gray-400 hover:text-gray-600 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
