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
          The engineering team that never sleeps,<br />
          never forgets,<br />
          and never stops improving.
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
      "Clean open. Lead with Lev as the company story. Radix Core is the origin, the hard problem that proved we needed Lev. Don\u2019t split focus. One product, one thesis: the lifecycle layer that every other tool skips.",
  },

  /* ── Slide 2 — The Problem ── */
  {
    title: "The $7B Blind Spot",
    variant: "dark",
    content: (
      <div className="py-4">
        <h3 className="text-2xl sm:text-3xl font-bold text-white leading-snug mb-8">
          10x Engineering Was Promised.

        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-lg sm:max-w-xl mx-auto mb-8">
          <div className="bg-white/10 rounded-xl p-6 text-center">
            <p className="text-3xl sm:text-4xl font-extrabold text-lev-bold">$7.4B</p>
            <p className="text-gray-300 text-sm mt-2">
              spent on AI code tools in 2025
            </p>
          </div>
          <div className="bg-white/10 rounded-xl p-6 text-center">
            <p className="text-3xl sm:text-4xl font-extrabold text-lev-bold">58%</p>
            <p className="text-gray-300 text-sm mt-2">
              best agentic success rate on SWE-bench
            </p>
          </div>
        </div>

        <div className="overflow-x-auto mb-8">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/20">
                <th className="text-left py-2.5 pr-6 font-semibold text-gray-400">What AI Tools Do</th>
                <th className="text-left py-2.5 font-semibold text-gray-400">What Shipping Requires</th>
              </tr>
            </thead>
            <tbody className="text-gray-300">
              <tr className="border-b border-white/10">
                <td className="py-2.5 pr-6">Generate code from prompts</td>
                <td className="py-2.5">Architectural decisions with reasoning</td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="py-2.5 pr-6">Forget context between sessions</td>
                <td className="py-2.5">Maintain institutional memory</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-6">Produce output, hope it works</td>
                <td className="py-2.5">Own production reliability</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-lev-bold font-bold text-lg">
          Every tool on the market solves one slice. Nobody owns the outcome.
        </p>
      </div>
    ),
    notes:
      "$7.4B: Mordor Intelligence, AI Code Tools Market 2025. 58% success rate: SWE-bench Verified, mid-2025. 24% scaled to production: McKinsey, 2025. The gap: tools produce code, but nobody owns architecture, deployment, or ops. Teams spend weeks hardening \u201C80% done\u201D demos into shippable products. Engineering velocity declined at many orgs despite tool adoption. Factory (Sequoia-backed): agent Droids, 5,000+ EY engineers. Additive to existing orgs, no lifecycle. Replit ($9B valuation): builds and hosts. You don\u2019t own the infra. Devin ($10.2B valuation): autonomous agent. Black box. No SRE. $55B+ in combined valuations across tools that each stop at \u201Ccode generated.\u201D",
  },

  /* ── Slide 3 — Why Now ── */
  {
    title: "The Window Is Open Right Now",
    content: (
      <div className="py-4">
        <div className="grid sm:grid-cols-2 gap-6 mb-8">
          <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
            <p className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-3">Market Shift</p>
            <ul className="space-y-3 text-gray-600 text-sm">
              <li className="flex items-start gap-3">
                <span className="text-primary-3 font-bold mt-0.5">&rarr;</span>
                <span>Factory (Sequoia-backed) deploys agentic Droids to 5,000+ EY engineers &mdash; enterprise demand for full SDLC agents is proven</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary-3 font-bold mt-0.5">&rarr;</span>
                <span>85% of developers now use AI coding tools (GitHub, 2025)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary-3 font-bold mt-0.5">&rarr;</span>
                <span>Autocomplete is commoditizing &mdash; lifecycle management is the next layer</span>
              </li>
            </ul>
          </div>
          <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
            <p className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-3">Validation Signals</p>
            <ul className="space-y-3 text-gray-600 text-sm">
              <li className="flex items-start gap-3">
                <span className="text-primary-3 font-bold mt-0.5">&rarr;</span>
                <span>Claude Code GitHub commits grew 1,200% in 6 months &mdash; agentic coding adoption is exploding</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary-3 font-bold mt-0.5">&rarr;</span>
                <span>$55B+ in combined valuations across tools that stop at &ldquo;code generated&rdquo;</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary-3 font-bold mt-0.5">&rarr;</span>
                <span>Only 24% of AI agents reach production (McKinsey, 2025)</span>
              </li>
            </ul>
          </div>
        </div>

        <p className="text-primary-3 font-bold text-lg">
          The market proved the demand. Nobody has claimed the lifecycle layer. That&rsquo;s our opening.
        </p>
      </div>
    ),
    notes:
      "This is the timing slide. Factory proved enterprises will pay for agentic dev at massive scale, with 5,000+ engineers at EY. But every incumbent stopped at code generation or workflow augmentation. The lifecycle gap (spec \u2192 build \u2192 deploy \u2192 operate) is wide open. Claude Code GitHub commits grew 1,200% in six months, showing agentic coding adoption is exploding. McKinsey data shows 76% of AI agents fail to reach production, and that\u2019s the exact gap Lev fills. Window is time-limited: incumbents will eventually expand into lifecycle management. First-mover with a working product has 12 to 18 months of positioning advantage.",
  },

  /* ── Slide 4 — Product: Lev ── */
  {
    title: "Lev: Your Engineering Team On Demand",
    content: (
      <div className="py-4">
        <p className="text-gray-600 mb-8">
          Your vision. Launced and supported in production.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          {["Mission Brief", "Architecture", "Build", "Deploy", "Operate"].map((step, idx) => (
            <div key={step} className="flex items-center gap-3">
              <span className="bg-primary-3 text-white text-sm font-bold px-4 py-2 rounded-lg">{step}</span>
              {idx < 4 && <span className="text-gray-300 text-xl">&rarr;</span>}
            </div>
          ))}
        </div>

        <p className="text-gray-600 mb-8">
          Describe what to build. Get production software.
        </p>

        <div className="grid sm:grid-cols-3 gap-6">
          <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
            <h4 className="font-bold text-gray-800 mb-2">Define the Mission</h4>
            <p className="text-gray-500 text-sm">Lev co-creates a mission brief with you. It deeply understands your intent and ideal end state, then builds it end to end.</p>
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
      "Product slide reframed for buyer (product leaders, not devs). Card 1: Mission Brief to Production \u2014 maps to speed/velocity pain across all personas. Full lifecycle, no handoffs. Card 2: 24/7 Ops Intelligence \u2014 addresses #1 evaluation skepticism: 'what happens when it breaks?' Autonomous incident response with full architectural context. Card 3: Your Code, Your Infra \u2014 trust signals for both ICP CEOs and enterprise IT 'resistors.' Deploys to customer AWS, auditable, no lock-in. Arms the product champion with the story they\u2019d tell their CTO.",
  },

  /* ── Slide 5 — Market ── */
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
      "AI Code Tools Market: AI Code Tools (broad) at $7.4B (2025) growing to $24B (2030), 26.6% CAGR. Agentic Coding Platforms under $1B (2025), fastest-growing subsegment. AI-Assisted DevOps/SRE at $4 to $6B by 2028. Sources: Mordor Intelligence, Grand View Research, Market Research Future. 85% of developers already use AI coding tools. The question isn\u2019t adoption, it\u2019s which tools move from code generation to software delivery. AI autocomplete is commoditizing; lifecycle management is the next layer. SAM estimate (15 to 20% of TAM) is conservative based on enterprise vs. SMB analyst splits, roughly 50,000 to 100,000 teams globally with 2 to 50 developers at $18 to $24K ACV.\n\nBottoms-Up 3-Year Model (5% monthly churn, conservative SMB SaaS standard): Year 1 (PMF hunt, $385K seed) at roughly $935K ARR, around 52 customers, roughly $18K ACV. No revenue months 1 through 3. Ramp: 10 new customers Q2, 20 Q3, 30 Q4. Proving conversion via PLG + founder-led outbound. Year 2 (Series A $3 to $5M, early scale) at $2.5 to $3.5M ARR, around 165 customers, roughly $19K blended ACV, NRR >110%. Capital funds 3 to 5 more engineers + marketing. Enterprise tier ($1,999/mo) lands multi-project deals. Year 3 (growth on Series A runway) at $6 to $10M ARR, 250 to 350 customers, roughly $20K blended ACV, roughly 0.5 to 0.8% SAM penetration. Credible Series B territory. Conservative factors: no revenue today, thin seed ($385K), founder-dependent pipeline until Series A, PLG flywheel takes 6 to 9 months. The bridge: 0.5 to 0.8% of $1.3B SAM in 3 years. Market grows 26%/yr, and by Year 5 SAM is $2.5B+ and 1.5 to 3% penetration = $40 to $70M ARR vision.",
  },

  /* ── Slide 6 — Competitive Landscape ── */
  {
    title: "Nobody Owns the Lifecycle.",
    content: (
      <div className="py-4">
        <div className="overflow-x-auto mb-8">
          <table className="w-full text-xs sm:text-sm min-w-[480px]">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="text-left py-3 pr-3 font-semibold text-gray-800"></th>
                <th className="text-left py-3 px-2 font-semibold text-lev-bold">Lev</th>
                <th className="text-left py-3 px-2 font-semibold text-gray-800">Factory</th>
                <th className="text-left py-3 px-2 font-semibold text-gray-800">Replit</th>
                <th className="text-left py-3 px-2 font-semibold text-gray-800">Devin</th>
              </tr>
            </thead>
            <tbody className="text-gray-600">
              {[
                ["Architecture/Spec", "Mission Brief", "No", "No", "Partial"],
                ["Deployment", "Yes", "Partial", "Locked", "Partial"],
                ["SRE / Ops", "Yes", "No", "No", "No"],
                ["Code Ownership", "Yes", "Yes", "Partial", "Yes"],
              ].map(([label, lev, factory, replit, devin], idx) => (
                <tr key={idx} className="border-b border-gray-100">
                  <td className="py-2.5 pr-3 font-medium text-gray-700">{label}</td>
                  <td className="py-2.5 px-2 font-semibold text-lev-bold">{lev}</td>
                  <td className="py-2.5 px-2">{factory}</td>
                  <td className="py-2.5 px-2">{replit}</td>
                  <td className="py-2.5 px-2">{devin}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-primary-3 font-bold text-lg">
          Lev is the only platform that spans spec &rarr; build &rarr; deploy &rarr; operate with full code ownership.
        </p>
      </div>
    ),
    notes:
      "Revenue multiples in this space: 18x to 68x ARR. Replit at roughly 34x, Cognition/Devin at roughly 68x, Lovable at roughly 22x, Bolt at roughly 18x. Market rewards growth rate above all. Factory: Sequoia/Lux-backed, deployed to 5,000+ EY engineers. Workflow-integrated Droids, but additive to existing large eng orgs, no lifecycle. Replit: 1,556% YoY growth. $265M ARR. But locked infra, usage-based billing creep ($100 to $300/mo on top of base for heavy users), no SRE. Devin/Cognition: Most autonomous agent. $696M raised, <$20M burned (extremely capital efficient). But black box, no spec methodology, no SRE. Lovable: $300M ARR (Jan 2026), $6.6B valuation. Beautiful prototypes. Not production systems.",
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
                  <th className="text-left py-2 font-semibold text-gray-800">What You Get</th>
                </tr>
              </thead>
              <tbody className="text-gray-600">
                <tr className="border-b border-gray-100">
                  <td className="py-2 pr-4">Starter</td>
                  <td className="py-2 px-4 font-semibold text-gray-800">$99/mo</td>
                  <td className="py-2">1 product, 5 builds/mo, 50 agent-hours, core intelligence</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-2 pr-4 font-semibold text-lev-bold">Pro</td>
                  <td className="py-2 px-4 font-semibold text-lev-bold">$499/mo</td>
                  <td className="py-2">5 products, 25 builds/mo, 200 agent-hours, full intelligence</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4">Enterprise</td>
                  <td className="py-2 px-4 font-semibold text-gray-800">$1,999/mo</td>
                  <td className="py-2">Unlimited products &amp; builds, priority agent swarms, SSO, SLA</td>
                </tr>
              </tbody>
            </table>
            </div>
          </div>
        </div>

        <div className="bg-primary-3/5 rounded-xl p-6 border border-primary-3/15">
          <p className="text-primary-3 font-bold text-lg mb-1">
            A senior engineer costs $12K&ndash;20K/mo. Lev Pro is 3% of that.
          </p>
          <p className="text-gray-500 text-sm">
            No onboarding. No health insurance. No manager. Sign up, enter your card, start building.
          </p>
        </div>

      </div>
    ),
    notes:
      "Three tiers, all flat. Starter ($99/mo) is the PLG entry point with low friction, credit card signup, single product. Pro ($499/mo) is the core revenue tier with 5 products, full intelligence cycle, 200 agent-hours. This is the tier that drives ACV. Enterprise ($1,999/mo) is for multi-project teams needing SSO/SAML and SLAs. Why this pricing wins: Replit is usage-based, heavy users pay $100 to $300/mo on top of base. Unpredictable. Factory: $80/mo base + custom enterprise. Lev: transparent tiers, no usage surprises. Comparison: a single senior engineer costs $12,000 to $20,000/month fully loaded. A junior hire who still needs management costs $6,000 to $8,000. Lev Pro at $499/mo is 3% of a senior engineer and doesn\u2019t need onboarding, health insurance, or a manager. Blended ACV model: Starter $1,188/yr, Pro $5,988/yr, Enterprise $23,988/yr. At steady state, Pro is the center of gravity. Revenue multiples in this market: 18 to 68x ARR.",
  },

  /* ── Slide 8 — Customer ── */
  {
    title: "For Teams Building the Next Unicorns",
    content: (
      <div className="py-4">
        <p className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-6">
          Delivering novel products to small teams with minimal runway.
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

        <div className="bg-primary-3/5 rounded-xl p-6 border border-primary-3/15 mb-6">
          <p className="text-primary-3 font-bold text-lg mb-1">
            Full-team output for the cost of a fractional engineer. Shipping in days, not months.
          </p>
        </div>
      </div>
    ),
    notes:
      "Full team cost breakdown (onshore, US, fully loaded): Senior engineer: $200K\u2013$350K/yr. DevOps/SRE: $150K\u2013$250K/yr. QA/Testing: $100K\u2013$150K/yr. Architecture/Tech Lead: additional $250K+ if separate. Total minimum viable team: $500K\u2013$850K/yr before tools, infra, or management overhead. Offshore cost breakdown: India: $18\u201340/hr ($40K\u2013$85K/yr per dev). Eastern Europe: $50\u201390/hr ($100K\u2013$190K/yr per dev). Latin America: $45\u201385/hr ($95K\u2013$180K/yr per dev). Key risk: Average offshore team reaches only 85% productivity at 4.6 months; full parity at 7\u20138 months (DistantJob, 2026). The wedge is deliberate. Small teams building novel products are underserved by every competitor. Y Combinator startups: 80%+ adoption of AI coding tools. These are our buyers.",
  },

  /* ── Slide 9 — Team ── */
  {
    title: "Built by Operators, Not Tourists",
    content: (
      <div className="py-4">
        <div className="grid sm:grid-cols-2 gap-8 mb-10">
          <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 flex gap-5">
            <img src="/founders/ian.jpg" alt="Ian Green" className="w-20 h-20 rounded-full object-cover shrink-0" />
            <div>
              <p className="font-bold text-gray-800 text-lg mb-1">Ian Green</p>
              <p className="text-sm text-lev-bold font-semibold mb-3">CEO</p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Former New Zealand Defense Force, focused on defensive cyber operations. AI platform engineer. Deep technical background in systems engineering and Dev/Ops.
              </p>
            </div>
          </div>
          <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 flex gap-5">
            <img src="/founders/ben.jpg" alt="Ben Pruess" className="w-20 h-20 rounded-full object-cover shrink-0" />
            <div>
              <p className="font-bold text-gray-800 text-lg mb-1">Ben Pruess</p>
              <p className="text-sm text-lev-bold font-semibold mb-3">President</p>
              <p className="text-gray-600 text-sm leading-relaxed">
                20-year healthcare technology leader. Operational expertise in regulated, high-stakes environments. Knows how to scale products in industries where &ldquo;move fast and break things&rdquo; gets people hurt.
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
              <span>We&rsquo;ve been shipping production software with Lev since day one.</span>
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
      "The \u201Cnecessity\u201D narrative is the team story too. This isn\u2019t a team that surveyed the AI tools market and decided to build another one. They were building something genuinely hard (Radix Core), hit the wall with existing tools, and built the tool they needed. Ben\u2019s healthcare background matters: healthcare is a regulated industry where software failures have real consequences. That mindset of reliability, auditability, and governance is baked into Lev\u2019s design.",
  },

  /* ── Slide 10 — Vision ── */
  {
    title: "The Path to $40M+ ARR",
    content: (
      <div className="py-4">
        <div className="space-y-6 mb-10">
          <div className="flex items-start gap-6">
            <span className="flex-shrink-0 bg-primary-3/15 text-primary-3 text-xs font-bold px-3 py-1 rounded-full mt-0.5">Year 1</span>
            <div>
              <p className="font-bold text-gray-800">Product-market fit with startups</p>
              <p className="text-gray-500 text-sm">500+ Starter accounts &middot; 100+ Pro conversions &middot; ~$1M ARR &middot; PLG flywheel proven</p>
            </div>
          </div>
          <div className="flex items-start gap-6">
            <span className="flex-shrink-0 bg-primary-3/15 text-primary-3 text-xs font-bold px-3 py-1 rounded-full mt-0.5">Year 3</span>
            <div>
              <p className="font-bold text-gray-800">Enterprise expansion</p>
              <p className="text-gray-500 text-sm">2,000+ accounts &middot; 300+ Pro &middot; 50+ Enterprise &middot; $6&ndash;10M ARR &middot; NRR &gt;120%</p>
            </div>
          </div>
          <div className="flex items-start gap-6">
            <span className="flex-shrink-0 bg-primary-3/15 text-primary-3 text-xs font-bold px-3 py-1 rounded-full mt-0.5">Year 5</span>
            <div>
              <p className="font-bold text-gray-800">Platform standard for AI-native teams</p>
              <p className="text-gray-500 text-sm">1.5&ndash;3% SAM penetration &middot; $40&ndash;70M ARR &middot; Radix Core cross-sell at scale</p>
            </div>
          </div>
        </div>

        <div className="bg-primary-3/5 rounded-xl p-6 border border-primary-3/15">
          <p className="text-primary-3 font-bold text-lg">
            Lower price &rarr; higher volume &rarr; faster intelligence compounding. Every product Lev operates makes it smarter about all products.
          </p>
        </div>
      </div>
    ),
    notes:
      "This is the destination slide. Investors buy the destination, not the vehicle. Year 1 math: PLG funnel with 500+ Starter accounts ($99/mo), 100+ convert to Pro ($499/mo). Blended roughly $1M ARR. Months 1 through 3 zero revenue (build pipeline), ramp Q2 through Q4. Year 3: 2,000+ total accounts, 300+ Pro, 50+ Enterprise. Blended ACV rises as Pro/Enterprise mix grows. $6 to $10M ARR. NRR >120% driven by Starter to Pro to Enterprise upsell. Year 5: SAM grows 26%/yr to roughly $2.5B; 1.5 to 3% penetration = $40 to $70M ARR. The intelligence compounding story is critical: Lev runs a continuous 7-layer intelligence cycle. Every product it operates makes it smarter about all products. Lower price point means more products on-platform means faster compounding. This is a network effect, not just a pricing strategy. Revenue multiples in this space (18 to 68x) mean $40M ARR at even the low end = $720M implied valuation. Radix Core cross-sell becomes material in Year 3+ as customers scale into ML/AI workloads.",
  },

  /* ── Slide 11 — The Ask ── */
  {
    title: "Raising $385,000 to Capture the Lifecycle Layer",
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

        <p className="text-gray-300 text-sm mb-8">
          SAFE &mdash; $4M post-money cap
        </p>

        <p className="text-sm font-semibold text-lev-bold uppercase tracking-widest mb-4">
          Milestones This Capital Unlocks
        </p>

        <ul className="space-y-3 text-white text-sm">
          <li className="flex items-start gap-3">
            <span className="text-gray-500 mt-0.5">&#x25CB;</span>
            <span>500+ Starter accounts, 100+ Pro conversions</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-gray-500 mt-0.5">&#x25CB;</span>
            <span>First enterprise Lev deployment</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-gray-500 mt-0.5">&#x25CB;</span>
            <span className="font-bold">$1M ARR</span>
          </li>
        </ul>
      </div>
    ),
    notes:
      "The unit math to $1M ARR with new pricing: PLG funnel with 500+ Starter ($99/mo = $59K ARR), 100+ Pro ($499/mo = $599K ARR), handful of Enterprise ($1,999/mo). Blended roughly $1M ARR. Bottoms-up ramp: Months 1 through 3 zero revenue (build PLG pipeline), months 4 through 6 first Starter signups, months 7 through 9 Pro conversions accelerate, months 10 through 12 Enterprise lands. Lower price point = faster top-of-funnel, self-serve onboarding, credit card signup. Why $385K is enough: Product already exists. We built it for ourselves and have been shipping with it. This isn\u2019t R&D capital. It\u2019s go-to-market capital. $385K at lean founder salaries = 12 to 18 months of runway. The PLG motion means lower CAC than the previous founder-led outbound model. Revenue multiple context: Companies in this space trade at 18 to 68x ARR. At $1M ARR and even the low end (18x), implied valuation = $18M. Meaningful return on a $385K entry.",
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
      "This is the Slack narrative. Slack was built as an internal tool for a game studio (Tiny Speck / Glitch). The game failed. The communication tool became a $27B company. Our version: We were building a genuinely novel product, Radix Core with FEP/MIMO control-theoretic GPU scheduling. Existing AI tools couldn\u2019t handle the architectural complexity. We built Lev to solve our own problem. We\u2019ve been dogfooding it ever since. Key credibility signal: We\u2019re not theorizing about what engineering teams need. We ARE the engineering team. We built Lev because nothing else could ship our product.",
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
                ["Factory", "N/A", "Seed", "N/A", "$5M", "2023"],
                ["Replit", "$265M", "$9B", "~34x", "$650M+", "2016"],
                ["Cognition (Devin)", "~$150M", "$10.2B", "~68x", "$696M", "2023"],
                ["Lovable", "$300M", "$6.6B", "~22x", "$530M", "2023"],
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
            <li>Factory $5M seed round &mdash; TechCrunch, Nov 2023</li>
            <li>Factory EY deployment (5,000+ engineers) &mdash; Factory.ai</li>
            <li>Replit $9B valuation &mdash; Bloomberg, Jan 2026</li>
            <li>Replit revenue &mdash; Sacra</li>
            <li>Cognition $10.2B valuation &mdash; TechCrunch, Sep 2025</li>
            <li>Cognition revenue &mdash; Sacra</li>
            <li>Lovable $6.6B valuation &mdash; TechCrunch, Dec 2025</li>
            <li>Lovable revenue &mdash; Sacra</li>
            <li>Bolt.new &mdash; Sacra</li>
            <li>Blitzy funding &mdash; PRNewswire</li>
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
  "Market",
  "Competition",
  "Pricing",
  "Customer",
  "Founders",
  "Vision",
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
            <span className={`text-xs font-medium tracking-widest uppercase ${isAppendix ? "text-gray-400" : "text-gray-400"}`}>
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
              aria-label="Toggle speaker notes"
            />
          )}
        </div>

        {/* Notes */}
        {showNotes && s.notes && (
          <div className={`mt-4 rounded-xl p-6 border ${isAppendix ? "bg-gray-600/80 border-gray-500" : "bg-gray-200/80 border-gray-300"}`}>
            <p className={`text-xs font-semibold uppercase tracking-widest mb-2 ${isAppendix ? "text-gray-400" : "text-gray-500"}`}>Speaker Notes</p>
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
                {i < 11 ? i + 1 : ""}
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
      <div ref={(el) => { sectionRefs.current[11] = el; }}>
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
                `A${String.fromCharCode(65 + i)}`,
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
