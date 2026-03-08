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
   MAIN DECK — Slides 1-11
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

        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary-2 mb-10">
          The Engineering Intelligence Company
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-6 sm:gap-12 mb-10">
          <div>
            <p className="text-lg font-bold text-lev-bold">Lev</p>
            <p className="text-sm text-gray-500">Agentic Engineering System</p>
          </div>
          <div>
            <p className="text-lg font-bold text-primary-3">Radix Core</p>
            <p className="text-sm text-gray-500">GPU Training Optimizer</p>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-6 mt-6">
          <p className="text-gray-700 text-sm">
            Ian Green, CEO&ensp;|&ensp;Ben Pruess, President
          </p>
          <p className="text-gray-400 text-xs mt-1">Founded 2025&ensp;&middot;&ensp;Las Vegas, NV</p>
        </div>
      </div>
    ),
    notes:
      "Clean open. Don\u2019t oversell on the title slide. Let the story do the work. Two products, one thesis: intelligence applied to the most expensive bottlenecks in building and running AI software.",
  },

  /* ── Slide 2 — The $7B Gap ── */
  {
    title: "The $7B Gap",
    variant: "dark",
    content: (
      <div className="py-4">
        <h3 className="text-2xl sm:text-3xl font-bold text-white leading-snug mb-10">
          AI Promised 10x Engineering.
          <br />
          It Delivered Code Nobody Owns.
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-lg sm:max-w-xl mx-auto mb-10">
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

        <p className="text-gray-400 text-lg italic">
          The tools generate code. Then they walk away.
        </p>
      </div>
    ),
    notes:
      "$7.4B: Mordor Intelligence, AI Code Tools Market 2025. 58% success rate: SWE-bench Verified, mid-2025. 24% scaled to production: McKinsey, 2025. The gap: tools produce code, but nobody owns architecture, deployment, or ops. Teams spend weeks hardening \u201C80% done\u201D demos into shippable products. Engineering velocity declined at many orgs despite tool adoption.",
  },

  /* ── Slide 3 — Why This Happens ── */
  {
    title: "The Lifecycle Gap",
    content: (
      <div className="py-4">
        <div className="overflow-x-auto mb-10">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="text-left py-3 pr-6 font-semibold text-gray-800">What AI Tools Do</th>
                <th className="text-left py-3 font-semibold text-gray-800">What Shipping Software Requires</th>
              </tr>
            </thead>
            <tbody className="text-gray-600">
              <tr className="border-b border-gray-100">
                <td className="py-3 pr-6">Generate code from prompts</td>
                <td className="py-3">Architectural decisions with reasoning</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-3 pr-6">Work in sandbox environments</td>
                <td className="py-3">Deploy to real infrastructure</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-3 pr-6">Forget context between sessions</td>
                <td className="py-3">Maintain institutional memory</td>
              </tr>
              <tr>
                <td className="py-3 pr-6">Produce output, hope it works</td>
                <td className="py-3">Own production reliability</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-primary-3 font-bold text-lg">
          Every tool on the market solves one slice. Nobody owns the outcome.
        </p>
      </div>
    ),
    notes:
      "Cursor ($29.3B valuation): editor. No deploy, no ops. Replit ($9B valuation): builds and hosts. You don\u2019t own the infra. Devin ($10.2B valuation): autonomous agent. Black box. No SRE. Copilot (42% market share): autocomplete. Not agentic. Lovable ($6.6B): prototypes. Not production systems. The competitive landscape has $55B+ in combined valuations across tools that each stop at \u201Ccode generated.\u201D The lifecycle after that \u2014 architecture rationale, deployment, incident response \u2014 is unaddressed.",
  },

  /* ── Slide 4 — Introducing Lev ── */
  {
    title: "Lev: A Senior Engineering Team at a Fraction of the Cost",
    content: (
      <div className="py-4">
        <p className="text-gray-500 font-semibold text-sm uppercase tracking-widest mb-6">
          Agentic Engineering System &mdash; not a code assistant, not an app builder.
        </p>

        <div className="flex flex-wrap items-center gap-3 mb-10">
          {["Architecture", "Build", "Deploy", "Operate"].map((step, idx) => (
            <div key={step} className="flex items-center gap-3">
              <span className="bg-primary-3 text-white text-sm font-bold px-4 py-2 rounded-lg">{step}</span>
              {idx < 3 && <span className="text-gray-300 text-xl">&rarr;</span>}
            </div>
          ))}
        </div>

        <p className="text-gray-600 mb-8">
          One integrated system. One flat price. You own everything.
        </p>

        <div className="grid sm:grid-cols-3 gap-6">
          <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
            <div className="w-8 h-8 bg-lev-bold/15 rounded-lg flex items-center justify-center mb-3">
              <span className="text-lev-bold font-bold text-sm">1</span>
            </div>
            <h4 className="font-bold text-gray-800 mb-2">Golden Spec</h4>
            <p className="text-gray-500 text-sm">Living blueprint before code. Every decision captured with reasoning.</p>
          </div>
          <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
            <div className="w-8 h-8 bg-lev-bold/15 rounded-lg flex items-center justify-center mb-3">
              <span className="text-lev-bold font-bold text-sm">2</span>
            </div>
            <h4 className="font-bold text-gray-800 mb-2">Integrated SRE</h4>
            <p className="text-gray-500 text-sm">Production support with full architectural context.</p>
          </div>
          <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
            <div className="w-8 h-8 bg-lev-bold/15 rounded-lg flex items-center justify-center mb-3">
              <span className="text-lev-bold font-bold text-sm">3</span>
            </div>
            <h4 className="font-bold text-gray-800 mb-2">100% Code Ownership</h4>
            <p className="text-gray-500 text-sm">No proprietary runtime. No platform lock-in. Your infra decisions.</p>
          </div>
        </div>
      </div>
    ),
    notes:
      "Golden Spec is the core IP. It solves \u201Ccontext amnesia\u201D \u2014 the #1 failure mode of agentic coding. The spec progressively hardens so working code is never rewritten by an overeager agent. SRE with context: When an incident fires, Lev knows WHY the architecture was designed that way, not just what the code does. This is the difference between \u201Crestart the pod\u201D and \u201Cthis service was separated from the monolith in Sprint 3 because of memory pressure under concurrent load \u2014 the fix is X.\u201D BYOK model: Users bring their own LLM API keys. Multi-LLM routing selects optimal models per task. No model lock-in. Supports greenfield and existing codebases.",
  },

  /* ── Slide 6 — The Wedge ── */
  {
    title: "2\u201310 Person Teams Building the Next Unicorns",
    content: (
      <div className="py-4">
        <p className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-6">
          The hiring math &mdash; minimum viable dev team
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
                <td className="py-3 pr-4 font-medium text-gray-700">Full team cost</td>
                <td className="py-3 px-4">$500K&ndash;$850K/yr</td>
                <td className="py-3 px-4">$120K&ndash;$300K/yr</td>
                <td className="py-3 px-4 font-bold text-lev-bold">$18K/yr</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-3 pr-4 font-medium text-gray-700">Time to productivity</td>
                <td className="py-3 px-4">1&ndash;2 months</td>
                <td className="py-3 px-4">5&ndash;8 months</td>
                <td className="py-3 px-4 font-bold text-lev-bold">Days</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-3 pr-4 font-medium text-gray-700">You own architecture</td>
                <td className="py-3 px-4">Yes</td>
                <td className="py-3 px-4">Varies</td>
                <td className="py-3 px-4 font-bold text-lev-bold">Yes</td>
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
            Lev at $1,499/mo per project = 2&ndash;4% the cost of an onshore team.
          </p>
          <p className="text-gray-600 text-sm">
            6&ndash;15% the cost of offshore &mdash; and offshore doesn&rsquo;t include deployment, SRE, or architectural reasoning.
          </p>
        </div>

        <p className="text-gray-700 font-semibold">
          These teams need to focus on product, not hiring.
        </p>
      </div>
    ),
    notes:
      "Full team cost breakdown (onshore, US, fully loaded): Senior engineer: $200K\u2013$350K/yr. DevOps/SRE: $150K\u2013$250K/yr. QA/Testing: $100K\u2013$150K/yr. Architecture/Tech Lead: additional $250K+ if separate. Total minimum viable team: $500K\u2013$850K/yr before tools, infra, or management overhead. Offshore cost breakdown: India: $18\u201340/hr ($40K\u2013$85K/yr per dev). Eastern Europe: $50\u201390/hr ($100K\u2013$190K/yr per dev). Latin America: $45\u201385/hr ($95K\u2013$180K/yr per dev). Key risk: Average offshore team reaches only 85% productivity at 4.6 months; full parity at 7\u20138 months (DistantJob, 2026). The wedge is deliberate. Small teams building novel products are underserved by every competitor. Y Combinator startups: 80%+ adoption of AI coding tools. These are our buyers.",
  },

  /* ── Slide 7 — Market ── */
  {
    title: "$7.4B Today. $24B by 2030.",
    content: (
      <div className="py-4">
        <p className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-6">
          AI Code Tools Market
        </p>

        <div className="overflow-x-auto mb-10">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="text-left py-3 pr-4 font-semibold text-gray-800">Segment</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-800">2025</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-800">2030</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-800">CAGR</th>
              </tr>
            </thead>
            <tbody className="text-gray-600">
              <tr className="border-b border-gray-100">
                <td className="py-3 pr-4 font-medium text-gray-700">AI Code Tools (broad)</td>
                <td className="py-3 px-4">$7.4B</td>
                <td className="py-3 px-4">$24.0B</td>
                <td className="py-3 px-4">26.6%</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-3 pr-4 font-medium text-gray-700">Agentic Coding Platforms</td>
                <td className="py-3 px-4">&lt;$1B</td>
                <td className="py-3 px-4 italic text-gray-500">Fastest growth</td>
                <td className="py-3 px-4">&mdash;</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-medium text-gray-700">AI-Assisted DevOps/SRE</td>
                <td className="py-3 px-4">&mdash;</td>
                <td className="py-3 px-4">$4&ndash;6B (2028)</td>
                <td className="py-3 px-4">&mdash;</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-4">
          Lev&rsquo;s Addressable Market
        </p>

        <div className="grid sm:grid-cols-3 gap-4">
          <div className="bg-gray-50 rounded-xl p-5 border border-gray-200 text-center">
            <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">TAM</p>
            <p className="text-2xl font-bold text-gray-800">$7.4B</p>
            <p className="text-xs text-gray-500 mt-1">AI code tools market (2025)</p>
          </div>
          <div className="bg-gray-50 rounded-xl p-5 border border-gray-200 text-center">
            <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">SAM</p>
            <p className="text-2xl font-bold text-gray-800">$1.1&ndash;1.5B</p>
            <p className="text-xs text-gray-500 mt-1">Small-to-mid teams, lifecycle mgmt</p>
          </div>
          <div className="bg-gray-50 rounded-xl p-5 border border-gray-200 text-center">
            <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">Beachhead</p>
            <p className="text-2xl font-bold text-gray-800">Seed&ndash;B</p>
            <p className="text-xs text-gray-500 mt-1">Funded startups, 2&ndash;10 person teams</p>
          </div>
        </div>
      </div>
    ),
    notes:
      "TAM sources: Mordor Intelligence ($7.4B/2025, 26.6% CAGR to $24B/2030); Grand View Research ($6.1B/2024, 27.1% CAGR); Market Research Future ($5.0B/2025, 32.3% CAGR to $81.1B/2035). The agentic subsegment (<$1B in 2025) is where the growth is. Copilot-style autocomplete is commoditizing. Lifecycle management is the next layer. 85% of developers use AI coding tools (end of 2025). Adoption isn\u2019t the question. The question is which tools move from \u201Ccode generation\u201D to \u201Csoftware delivery.\u201D SAM estimate: 15\u201320% of TAM is conservative based on enterprise vs. SMB splits in analyst reports.",
  },

  /* ── Slide 8 — Competitive Landscape ── */
  {
    title: "$55B+ in Valuations. Nobody Owns the Lifecycle.",
    content: (
      <div className="py-4">
        <div className="overflow-x-auto mb-8">
          <table className="w-full text-xs sm:text-sm">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="text-left py-3 pr-3 font-semibold text-gray-800"></th>
                <th className="text-left py-3 px-2 font-semibold text-lev-bold">Lev</th>
                <th className="text-left py-3 px-2 font-semibold text-gray-800">Cursor</th>
                <th className="text-left py-3 px-2 font-semibold text-gray-800">Replit</th>
                <th className="text-left py-3 px-2 font-semibold text-gray-800">Devin</th>
                <th className="text-left py-3 px-2 font-semibold text-gray-800">Copilot</th>
              </tr>
            </thead>
            <tbody className="text-gray-600">
              {[
                ["Valuation", "Early", "$29.3B", "$9B", "$10.2B", "Microsoft"],
                ["ARR", "Early", "$1B+", "$265M", "~$150M", "N/A"],
                ["Architecture/Spec", "Golden Spec", "No", "No", "Partial", "No"],
                ["Deployment", "Yes", "No", "Locked", "Partial", "No"],
                ["SRE / Ops", "Yes", "No", "No", "No", "No"],
                ["Code Ownership", "100%", "100%", "Partial", "Unclear", "100%"],
                ["You Choose Infra", "Yes", "N/A", "No", "No", "N/A"],
                ["Flat Pricing", "Yes", "No", "No", "No", "No"],
              ].map(([label, lev, cursor, replit, devin, copilot], idx) => (
                <tr key={idx} className="border-b border-gray-100">
                  <td className="py-2.5 pr-3 font-medium text-gray-700">{label}</td>
                  <td className="py-2.5 px-2 font-semibold text-lev-bold">{lev}</td>
                  <td className="py-2.5 px-2">{cursor}</td>
                  <td className="py-2.5 px-2">{replit}</td>
                  <td className="py-2.5 px-2">{devin}</td>
                  <td className="py-2.5 px-2">{copilot}</td>
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
      "Revenue multiples in this space: 18x\u201368x ARR. Cursor at ~29x, Replit at ~34x, Cognition/Devin at ~68x, Lovable at ~22x, Bolt at ~18x. Market rewards growth rate above all. Cursor: $0 \u2192 $1B ARR in ~18 months. Fastest-growing dev tool ever. But it\u2019s an editor \u2014 no lifecycle. Replit: 1,556% YoY growth. $265M ARR. But locked infra, usage-based billing creep ($100\u2013300/mo on top of base for heavy users), no SRE. Devin/Cognition: Most autonomous agent. $696M raised, <$20M burned (extremely capital efficient). But black box, no spec methodology, no SRE. Lovable: $300M ARR (Jan 2026), $6.6B valuation. Beautiful prototypes. Not production systems.",
  },

  /* ── Slide 9 — Business Model ── */
  {
    title: "Flat, Predictable, Compounding",
    content: (
      <div className="py-4">
        <div className="grid sm:grid-cols-2 gap-8 mb-8">
          {/* Lev pricing */}
          <div>
            <p className="text-sm font-semibold text-lev-bold uppercase tracking-widest mb-4">Lev</p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="text-left py-2 pr-4 font-semibold text-gray-800">Plan</th>
                    <th className="text-left py-2 px-4 font-semibold text-gray-800">Price</th>
                    <th className="text-left py-2 font-semibold text-gray-800">Model</th>
                  </tr>
                </thead>
                <tbody className="text-gray-600">
                  <tr className="border-b border-gray-100">
                    <td className="py-2 pr-4">Startup</td>
                    <td className="py-2 px-4 font-semibold text-gray-800">$1,499/mo</td>
                    <td className="py-2">Flat per-project</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4">Enterprise</td>
                    <td className="py-2 px-4 font-semibold text-gray-800">Custom</td>
                    <td className="py-2">Single-tenant, SSO/SAML</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Radix pricing */}
          <div>
            <p className="text-sm font-semibold text-primary-3 uppercase tracking-widest mb-4">Radix Core</p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="text-left py-2 pr-4 font-semibold text-gray-800">Plan</th>
                    <th className="text-left py-2 px-4 font-semibold text-gray-800">Price</th>
                    <th className="text-left py-2 font-semibold text-gray-800">Model</th>
                  </tr>
                </thead>
                <tbody className="text-gray-600">
                  <tr className="border-b border-gray-100">
                    <td className="py-2 pr-4">Core</td>
                    <td className="py-2 px-4 font-semibold text-gray-800">$45/GPU/mo</td>
                    <td className="py-2">Per-GPU</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4">Hyperscale</td>
                    <td className="py-2 px-4 font-semibold text-gray-800">Custom</td>
                    <td className="py-2">1,000+ GPUs</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <p className="text-primary-3 font-bold text-lg">
          Revenue compounds with each project and each GPU cluster.
        </p>
      </div>
    ),
    notes:
      "Why flat pricing wins: Replit: usage-based. Heavy users pay $100\u2013300/mo on top of base. Unpredictable. Cursor: $20\u201340/mo + usage credits. Runs out mid-sprint. Lev: One price. No surprises. Unit economics sketch (Lev): BYOK model means the customer pays their own LLM API costs directly. VaultScaler\u2019s marginal cost per project is primarily compute for the orchestration layer and SRE monitoring \u2014 not LLM inference. This should yield strong gross margins once scale is reached. Radix Core payback math: 1,000-GPU cluster at $45/GPU/mo = $540K/yr. At 21% throughput improvement on a cluster worth $10M+ in hardware, estimated savings ~$2.5M. Payback: ~2.5 months. Revenue multiples in this market: 18\u201368x ARR.",
  },

  /* ── Slide 10 — Team ── */
  {
    title: "Built by Operators, Not Tourists",
    content: (
      <div className="py-4">
        <div className="grid sm:grid-cols-2 gap-8 mb-10">
          <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
            <p className="font-bold text-gray-800 text-lg mb-1">Ian Green</p>
            <p className="text-sm text-lev-bold font-semibold mb-3">CEO</p>
            <p className="text-gray-600 text-sm leading-relaxed">
              AI platform engineer. Designed and built the systems that became both Lev and Radix Core. Deep technical background in agentic systems and GPU optimization.
            </p>
          </div>
          <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
            <p className="font-bold text-gray-800 text-lg mb-1">Ben Pruess</p>
            <p className="text-sm text-lev-bold font-semibold mb-3">President</p>
            <p className="text-gray-600 text-sm leading-relaxed">
              20-year healthcare technology leader. Operational expertise in regulated, high-stakes environments. Knows how to scale products in industries where &ldquo;move fast and break things&rdquo; gets people hurt.
            </p>
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
      "The \u201Cnecessity\u201D narrative is the team story too. This isn\u2019t a team that surveyed the AI tools market and decided to build another one. They were building something genuinely hard (Radix Core), hit the wall with existing tools, and built the tool they needed. Ben\u2019s healthcare background matters: healthcare is a regulated industry where software failures have real consequences. That mindset \u2014 reliability, auditability, governance \u2014 is baked into Lev\u2019s design.",
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
                <td className="py-3">Core platform, Golden Spec depth, SRE capabilities</td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="py-3 pr-4 font-medium text-white">Go-to-Market</td>
                <td className="py-3">Startup community presence, trial infrastructure</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-medium text-white">Radix Core</td>
                <td className="py-3">Independent benchmark validation, academic pilots</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-sm font-semibold text-lev-bold uppercase tracking-widest mb-4">
          Milestones This Capital Unlocks
        </p>

        <ul className="space-y-3 text-white">
          <li className="flex items-start gap-3">
            <span className="text-gray-500 mt-0.5">&#x25CB;</span>
            <span>First 50 paying Lev projects</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-gray-500 mt-0.5">&#x25CB;</span>
            <span>Independent Radix Core benchmark validation</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-gray-500 mt-0.5">&#x25CB;</span>
            <span>Enterprise Lev deployment with first design partner</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-gray-500 mt-0.5">&#x25CB;</span>
            <span className="font-bold">$1M ARR</span>
          </li>
        </ul>
      </div>
    ),
    notes:
      "The unit math to $1M ARR: $1M ARR \u00F7 $1,499/mo = ~56 paying Lev projects. Ramp assumption: Months 1\u20133 founder-led sales, 2\u20133 new projects/mo. Months 4\u20138 word-of-mouth + community, 5\u20137 new projects/mo. Months 9\u201312+ compounding, 7\u201310 new projects/mo. At ~10% monthly churn (high for early-stage), net adds of ~4\u20136/mo still reach 50\u201360 active projects by month 12\u201315. Why $285K is enough: Product already exists \u2014 we built it for ourselves and have been shipping with it. This isn\u2019t R&D capital. It\u2019s go-to-market capital. BYOK model means near-zero marginal cost per project. $285K at lean founder salaries = 12\u201318 months of runway. Comparable: Bolt.new reached $4M ARR in 4 weeks with a $20/mo product. Lev\u2019s price point means fewer customers needed \u2014 56 projects, not 22,000 subscribers. Revenue multiple context: Companies in this space trade at 18\u201368x ARR. At $1M ARR and even the low end (18x), implied valuation = $18M. Meaningful return on a $285K entry. Competitive timing: Cursor went $0 \u2192 $1B ARR in 18 months. The window for lifecycle-management positioning is open now.",
  },
];

/* ════════════════════════════════════════════════════════
   APPENDIX — Addendums A-G
   ════════════════════════════════════════════════════════ */

const appendix: Slide[] = [
  /* ── Addendum — Origin Story ── */
  {
    title: "We Didn\u2019t Set Out to Build a Dev Tool.",
    content: (
      <div className="py-4">
        <p className="text-gray-600 text-lg leading-relaxed mb-8">
          We were building <span className="font-semibold text-primary-3">Radix Core</span> &mdash; a control-theoretic GPU training optimizer. Novel problem. Hard engineering.
        </p>
        <p className="text-gray-600 text-lg leading-relaxed mb-8">
          We used every agentic coding tool on the market.
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

        <p className="text-gray-600 text-lg leading-relaxed mb-2">
          We hit the boundary where off-the-shelf LLMs couldn&rsquo;t handle the complexity. So we built the system we needed.
        </p>
        <p className="text-primary-3 font-bold text-xl">
          That system became Lev.
        </p>
      </div>
    ),
    notes:
      "This is the Slack narrative. Slack was built as an internal tool for a game studio (Tiny Speck / Glitch). The game failed. The communication tool became a $27B company. Our version: We were building a genuinely novel product (Radix Core \u2014 FEP/MIMO control-theoretic GPU scheduling). Existing AI tools couldn\u2019t handle the architectural complexity. We built Lev to solve our own problem. We\u2019ve been dogfooding it ever since. Key credibility signal: We\u2019re not theorizing about what engineering teams need. We ARE the engineering team. We built Lev because nothing else could ship our product.",
  },

  /* ── Addendum — Radix Core ── */
  {
    title: "The Original Product: GPU Training Optimization",
    content: (
      <div className="py-4">
        <p className="text-gray-600 text-lg leading-relaxed mb-8">
          <span className="font-semibold text-gray-800">Problem:</span> Tensor cores are idle 94.8&ndash;97% of training time. Even at &ldquo;95% GPU utilization,&rdquo; the units doing actual AI math are active &lt;5.2% of the time.
        </p>
        <p className="text-gray-600 text-lg leading-relaxed mb-8">
          <span className="font-semibold text-gray-800">Solution:</span> Radix Core &mdash; closed-loop, control-theoretic scheduling that dynamically balances memory, compute, and power across GPU workloads.
        </p>

        <div className="overflow-x-auto mb-8">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="text-left py-3 pr-4 font-semibold text-gray-800">Metric</th>
                <th className="text-left py-3 font-semibold text-gray-800">Value</th>
              </tr>
            </thead>
            <tbody className="text-gray-600">
              <tr className="border-b border-gray-100">
                <td className="py-2.5 pr-4 font-medium text-gray-700">Throughput Improvement</td>
                <td className="py-2.5">Up to 21% (internal benchmarks)</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-2.5 pr-4 font-medium text-gray-700">Deployment</td>
                <td className="py-2.5">60-second Helm chart</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-2.5 pr-4 font-medium text-gray-700">Code Changes Required</td>
                <td className="py-2.5">Zero</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-2.5 pr-4 font-medium text-gray-700">Security</td>
                <td className="py-2.5">Air-gapped capable, SLSA Level 3</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-4 font-medium text-gray-700">Pricing</td>
                <td className="py-2.5">$30&ndash;45/GPU/month</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-primary-3 font-bold text-lg italic">
          If Lev can build a MIMO/FEP control-theoretic GPU scheduler, it can build your SaaS product.
        </p>
      </div>
    ),
    notes:
      "This is the second revenue line and the proof that VaultScaler is a platform company, not a single-product bet. Also serves as the dogfooding proof point: Lev built Radix Core. We eat our own cooking daily. GPU utilization data is well-sourced: Giordano et al. (IEEE DATE 2024) \u2014 tensor cores idle 94.8\u201397% of training time. Li et al. (NERSC/ISC 2023) \u2014 50% of GPU jobs use \u226425% of allocated GPU memory. NVIDIA validated the GPU orchestration category by acquiring Run:ai for $700M (Dec 2024) and SchedMD/Slurm (Dec 2025). NVIDIA now owns both dominant schedulers but does NOT do closed-loop runtime optimization. That\u2019s the gap Radix Core fills. Direct competitor: XPerf Inc. (ex-Intel Gaudi engineers, $2M raised, emerged Nov 2025, similar ~20% improvement claims). Very early. Worth monitoring.",
  },

  /* ── Addendum B — Go-to-Market ── */
  {
    title: "Land with Lev. Expand with Radix Core.",
    content: (
      <div className="py-4">
        <div className="space-y-8">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="bg-primary-3 text-white text-xs font-bold px-3 py-1 rounded-full">Phase 1</span>
              <span className="font-semibold text-gray-800">Lev for Startups (Now)</span>
            </div>
            <ul className="space-y-1.5 text-gray-600 text-sm ml-16">
              <li>Target funded startups (Seed &rarr; Series B), 2&ndash;10 person teams</li>
              <li>Channel: YC community, indie hacker networks, founder communities</li>
              <li>Motion: Product-led with 14-day free trial</li>
              <li>Win condition: Team ships production software in first month</li>
            </ul>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="bg-primary-3 text-white text-xs font-bold px-3 py-1 rounded-full">Phase 2</span>
              <span className="font-semibold text-gray-800">Lev for Enterprise (6&ndash;12 months)</span>
            </div>
            <ul className="space-y-1.5 text-gray-600 text-sm ml-16">
              <li>Single-tenant deployment, SSO/SAML, governance controls</li>
              <li>Channel: Direct sales to engineering leaders</li>
              <li>Win condition: Multi-project expansion within accounts</li>
            </ul>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="bg-primary-3 text-white text-xs font-bold px-3 py-1 rounded-full">Phase 3</span>
              <span className="font-semibold text-gray-800">Radix Core (Parallel track)</span>
            </div>
            <ul className="space-y-1.5 text-gray-600 text-sm ml-16">
              <li>Academic beachhead: ~400 US labs, ~32K GPUs</li>
              <li>Government/national labs: security-first positioning (air-gapped, SLSA L3)</li>
              <li>Expand to commercial GPU operators</li>
            </ul>
          </div>
        </div>
      </div>
    ),
    notes:
      "Lev GTM is bottom-up, product-led. The buyer is a technical founder or engineering lead at a small team who\u2019s already frustrated with Replit/Cursor limitations. The 14-day trial is critical. The Golden Spec experience is the conversion moment \u2014 when a team sees their architecture captured and hardened before code is written, the value is immediately obvious. Radix Core GTM is top-down, enterprise sales. The buyer is an infrastructure director or HPC operations manager. Cross-sell: Lev customers who scale into ML/AI training become Radix Core prospects. Radix Core customers who need custom tooling become Lev prospects. The flywheel connects both products.",
  },

  /* ── Addendum C — Financial Comparables ── */
  {
    title: "Financial Comparables",
    content: (
      <div className="py-4">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
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
                ["Cursor (Anysphere)", "$1B+", "$29.3B", "~29x", "$3.3B", "2022"],
                ["Replit", "$265M", "$9B", "~34x", "$650M+", "2016"],
                ["Cognition (Devin)", "~$150M", "$10.2B", "~68x", "$696M", "2023"],
                ["Lovable", "$300M", "$6.6B", "~22x", "$530M", "2023"],
                ["Bolt.new", "$40M", "$700M", "~18x", "$105M", "2024"],
                ["Blitzy", "N/A", "N/A", "N/A", "$4.4M", "2024"],
                ["GitHub Copilot", "N/A", "(Microsoft)", "N/A", "N/A", "2021"],
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

  /* ── Addendum E — GPU Market Context ── */
  {
    title: "GPU Market Context (Radix Core)",
    content: (
      <div className="py-4">
        <div className="overflow-x-auto mb-8">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="text-left py-3 pr-4 font-semibold text-gray-800">Metric</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-800">Value</th>
                <th className="text-left py-3 font-semibold text-gray-800">Source</th>
              </tr>
            </thead>
            <tbody className="text-gray-600">
              {[
                ["AI infra hardware spend, Q2 2025", "$82B (single quarter)", "IDC"],
                ["Total AI spending, 2026", "$2.52 trillion", "Gartner"],
                ["GPU lead times", "36\u201352 weeks", "BCD Video"],
                ["Tensor core utilization during training", "<5.2%", "Giordano et al., IEEE DATE 2024"],
                ["GPU jobs using \u226425% allocated memory", "50%", "Li et al., NERSC/ISC 2023"],
                ["NVIDIA Run:ai acquisition", "$700M", "NVIDIA (Dec 2024)"],
                ["NVIDIA SchedMD/Slurm acquisition", "Undisclosed", "NVIDIA (Dec 2025)"],
              ].map(([metric, value, source], idx) => (
                <tr key={idx} className="border-b border-gray-100">
                  <td className="py-2.5 pr-4 font-medium text-gray-700">{metric}</td>
                  <td className="py-2.5 px-4">{value}</td>
                  <td className="py-2.5 text-gray-400 text-xs">{source}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="bg-primary-3/5 rounded-xl p-6 border border-primary-3/15">
          <p className="text-primary-3 font-bold">
            Compute demand doubles every 6 months. GPU lead times are 36&ndash;52 weeks. You cannot buy your way out of the compute gap. You must optimize what you have.
          </p>
        </div>
      </div>
    ),
  },

  /* ── Addendum F — Competitive Matrix (Full) ── */
  {
    title: "Competitive Matrix (Full)",
    content: (
      <div className="py-4">
        <div className="overflow-x-auto">
          <table className="w-full text-xs">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="text-left py-3 pr-2 font-semibold text-gray-800">Capability</th>
                <th className="text-left py-3 px-1.5 font-semibold text-lev-bold">Lev</th>
                <th className="text-left py-3 px-1.5 font-semibold text-gray-700">Cursor</th>
                <th className="text-left py-3 px-1.5 font-semibold text-gray-700">Replit</th>
                <th className="text-left py-3 px-1.5 font-semibold text-gray-700">Devin</th>
                <th className="text-left py-3 px-1.5 font-semibold text-gray-700">Copilot</th>
                <th className="text-left py-3 px-1.5 font-semibold text-gray-700">Lovable</th>
                <th className="text-left py-3 px-1.5 font-semibold text-gray-700">Bolt</th>
                <th className="text-left py-3 px-1.5 font-semibold text-gray-700">Blitzy</th>
                <th className="text-left py-3 px-1.5 font-semibold text-gray-700">Codex</th>
              </tr>
            </thead>
            <tbody className="text-gray-600">
              {[
                ["Code Generation", "Yes", "Yes", "Yes", "Yes", "Yes", "Yes", "Yes", "Yes", "Yes"],
                ["Architecture/Spec", "Golden Spec", "No", "No", "Partial", "No", "No", "No", "Partial", "No"],
                ["Deployment", "Yes", "No", "Locked", "Partial", "No", "Locked", "Locked", "No", "No"],
                ["SRE / Ops", "Yes", "No", "No", "No", "No", "No", "No", "No", "No"],
                ["Code Ownership", "100%", "100%", "Partial", "Unclear", "100%", "Partial", "Partial", "Yes", "100%"],
                ["Infra Decisions", "User", "N/A", "Replit", "Agent", "N/A", "Lovable", "StackBlitz", "User", "N/A"],
                ["BYOK / Model Choice", "Yes", "Partial", "No", "No", "No", "No", "No", "No", "No"],
                ["Small Team Focus", "Primary", "Yes", "Yes", "No", "Yes", "Yes", "Yes", "No", "Yes"],
                ["Enterprise Ready", "Yes", "Yes", "Growing", "Yes", "Yes", "No", "No", "Yes", "Yes"],
                ["Flat Pricing", "Yes", "No", "No", "No", "No", "No", "No", "Yes", "No"],
              ].map(([label, ...vals], idx) => (
                <tr key={idx} className="border-b border-gray-100">
                  <td className="py-2 pr-2 font-medium text-gray-700 whitespace-nowrap">{label}</td>
                  <td className="py-2 px-1.5 font-semibold text-lev-bold">{vals[0]}</td>
                  {vals.slice(1).map((v, vi) => (
                    <td key={vi} className="py-2 px-1.5">{v}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
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
            <li>Cursor $29.3B valuation &mdash; CNBC, Nov 2025</li>
            <li>Cursor $500M+ ARR &mdash; TechCrunch, Jun 2025</li>
            <li>Replit $9B valuation &mdash; Bloomberg, Jan 2026</li>
            <li>Replit revenue &mdash; Sacra</li>
            <li>Cognition $10.2B valuation &mdash; TechCrunch, Sep 2025</li>
            <li>Cognition revenue &mdash; Sacra</li>
            <li>Lovable $6.6B valuation &mdash; TechCrunch, Dec 2025</li>
            <li>Lovable revenue &mdash; Sacra</li>
            <li>Bolt.new &mdash; Sacra</li>
            <li>Blitzy funding &mdash; PRNewswire</li>
            <li>GitHub Copilot 20M users &mdash; TechCrunch, Jul 2025</li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold text-gray-800 uppercase tracking-widest mb-3">GPU / Radix Core Data</p>
          <ul className="space-y-1.5 text-gray-600 text-sm">
            <li>Giordano et al., IEEE DATE 2024 &mdash; GPU utilization in ML training</li>
            <li>Li et al., arXiv:2301.05145, ISC 2023 &mdash; NERSC Perlmutter study</li>
            <li>NVIDIA Run:ai acquisition &mdash; TechCrunch</li>
            <li>NVIDIA SchedMD/Slurm acquisition &mdash; NVIDIA Blog</li>
            <li>BCD Video &mdash; GPU supply chain analysis, 2025</li>
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
  "Gap",
  "Product",
  "Beachhead",
  "Market",
  "Competition",
  "Pricing",
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
  useState(() => {
    if (typeof window !== "undefined" && sessionStorage.getItem("deck_unlocked") === "1") {
      setUnlocked(true);
    }
  });

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
          className={`relative rounded-2xl p-8 sm:p-12 border ${
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
              className={`flex-shrink-0 text-xs px-3 py-1.5 rounded-full transition-all whitespace-nowrap ${
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
                {i < 10 ? i + 1 : ""}
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
      <div ref={(el) => { sectionRefs.current[10] = el; }}>
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
