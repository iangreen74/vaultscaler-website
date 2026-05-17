import Image from "next/image";
import ForgewingFAQ from "./ForgewingFAQ";
import { TrackedCTALink } from "@/components/TrackedLink";
import ParallaxAni from "./ParallaxAni";
import ForgewingEngagementTracking from "./ForgewingEngagementTracking";
import JsonLd from "@/components/JsonLd";
import { SITE } from "@/lib/site";
import aniLandingFull from "./ani-landing-transparent.png";
import aniLookingRough from "./ani_looking_rough.png";
import appScreenshot from "./app_screenshot.png";

export default function ForgewingHome() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE.url}/` },
      { "@type": "ListItem", position: 2, name: "Forgewing", item: `${SITE.url}/forgewing/` },
    ],
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Forgewing",
    applicationCategory: "DeveloperApplication",
    operatingSystem: "Web, AWS",
    description:
      "Forgewing is the Product Delivery Engine. Point it at your repo or hand it a brief — it designs the architecture, returns real pull requests, deploys to your AWS account, and operates the system after launch.",
    url: `${SITE.url}/forgewing/`,
    author: { "@type": "Organization", name: "VaultScaler", url: `${SITE.url}/` },
    brand: { "@type": "Brand", name: "Forgewing" },
    image: `${SITE.url}/og/forgewing.png`,
    featureList: [
      "Brief-to-production engineering",
      "Real pull requests against your repo",
      "Customer-owned AWS deployments",
      "24/7 operations and incident response",
      "Operational-memory graph",
    ],
  };

  const faqItems = [
            {
              question: "Who is Forgewing built for?",
              answer:
                "Small teams shipping close to their customers. The founder or PM who hears the pain firsthand and writes the brief in plain English. The engineer who keeps review and merge authority over what lands. Forgewing fits between the two — and covers whichever half you're missing.",
            },
            {
              question: "What does Forgewing actually deliver?",
              answer:
                "Real software, running in production, on AWS infrastructure you own. Not a prototype. Not a Figma. Not a notebook. Code in your GitHub. Infrastructure in your AWS account. CI/CD already wired up. Forgewing operates the system after launch.",
            },
            {
              question: "Who owns the code?",
              answer:
                "You do. One hundred percent. No proprietary runtime. No vendor SDK woven through the output. No phone-home dependencies. If you stop using Forgewing tomorrow, the code keeps running and any engineer can read it, extend it, or rewrite it.",
            },
            {
              question: "Can Forgewing work with my existing codebase or pilot?",
              answer:
                "Yes. Point Forgewing at your repo. It reads what you have, drafts a brief from it, and starts working with the code already in place. No rewrite, no migration, no re-platforming. Pilots welcome.",
            },
            {
              question: "Isn\u2019t this just another AI vibe coding tool?",
              answer:
                "Vibe tools are an LLM with a chat box. Forgewing is an LLM wrapped in process, CI/CD, persistent memory, and the knowledge of every release it has run. That\u2019s why vibe tools build a prototype on their platform, and Forgewing builds a production system on yours \u2014 code in your GitHub, infrastructure in your AWS, and a watch crew that stays with it after launch.",
            },
            {
              question: "Where do other tools stop?",
              answer:
                "Most tools in this space help you start. They write a function. They ship a prototype. They get you to a demo. That\u2019s the easy half. Forgewing is built for the other half \u2014 taking what you started across the gap to production, and keeping it there. Stable. Secure. Watched through the night.",
            },
            {
              question: "What happens when something breaks?",
              answer:
                "Forgewing\u2019s watch crew handles it around the clock \u2014 diagnose, patch, roll back, verify. Patches are written with full knowledge of what the system is supposed to do, so what lands in your queue is a PR ready for review, not a tidal wave of alerts.",
            },
            {
              question: "Can I try Forgewing before committing?",
              answer:
                "Yes. A free trial will be available — take a real brief through to production before committing.",
            },
            {
              question: "What if I already have engineers?",
              answer:
                "Keep them. Your team can use whatever IDE they want. Forgewing works at a different level: owning architecture, deployment, operations, and incident response. If your engineers\u2019 time is worth more than the work Forgewing handles, this is leverage, not replacement.",
            },
          ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((it) => ({
      "@type": "Question",
      name: it.question,
      acceptedAnswer: { "@type": "Answer", text: it.answer },
    })),
  };

  return (
    <>
    <JsonLd data={breadcrumbSchema} />
    <JsonLd data={softwareSchema} />
    <JsonLd data={faqSchema} />
    <ForgewingEngagementTracking />
    {/* ============================================================
        HERO SECTION — positioning knobs cheat sheet
        ============================================================
        Breakpoints: <500px phone | 500-799px tablet | ≥800px desktop
        Desktop (≥800px) layout: H1 + subtitle + button stacked left,
          parallax Ani sits absolute behind on the right.
        Mobile/Tablet (<800px) layout: H1 centered, then oversized
          mascot image with subtitle OVERLAID on top of the image.

        KNOBS ↓
        --------------------------------------------------------------
        [A] Section vertical padding ........... pt-8/12/16  pb-16/24/32
        [B] Hero block min-height .............. min-h-[30vh] / [45vh]
        [C] H1 top margin ...................... mt-6 lg:mt-10
        [D] H1 font size ....................... text-6xl/7xl/8xl
        [E] Desktop subtitle (≥800px) — separate <p>, hidden below 800px
              top margin ....................... mt-6
              font size ........................ text-xl sm:text-2xl
              max width ........................ max-w-md
        [F] Mobile/tablet image wrapper (<800px) — INDEPENDENT from desktop
              top offset ....................... -mt-6   (negative = overlap H1)
              image width ...................... w-[105vw] phone / w-[120vw] tablet+
              ↑ bigger = more wing-spread, less negative space
        [F2] Desktop ParallaxAni vertical position (≥800px) — INDEPENDENT from mobile
              startY prop ...................... "-26%"  (negative = starts higher / more clipped at top)
              endY prop ........................ "20%"   (where Ani drifts to as user scrolls)
              ↑ both passed as props on <ParallaxAni> at line 53
        [G] Mobile/tablet overlay subtitle (inside image wrapper)
              vertical position ................ top-[5%] phone / top-[8%] tablet+
              ↑ smaller = higher (closer to H1)
              horizontal width ................. w-[56%] phone / w-[42%] tablet+
              ↑ bigger = fewer line wraps, but text spreads into wings
              font size ........................ text-base phone / text-lg tablet / text-xl sm+
        [H] Button vertical spacing (top margin of button wrapper)
              mobile (<800px) .................. mt-10                  (on wrapper div)
              desktop (≥800px) ................. min-[800px]:mt-10
              ↑ tweak independently. Tailwind scale: mt-4=16px,
                mt-6=24px, mt-8=32px, mt-10=40px, mt-12=48px,
                mt-14=56px, mt-16=64px, or mt-[52px] for arbitrary.
        ============================================================ */}
    <section className="relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 85% 10%, rgba(232,115,42,0.08) 0%, transparent 55%)",
        }}
      />

      {/* [F2] Desktop Ani vertical position — startY/endY (negative = higher) */}
      <ParallaxAni src={aniLandingFull} startY="-26%" endY="20%" />

      {/* [A] section padding */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 lg:pt-16 pb-16 sm:pb-24 lg:pb-32">
        {/* [B] hero block min-height */}
        <div className="flex flex-col justify-start items-center text-center min-[800px]:items-start min-[800px]:text-left min-h-[30vh] min-[800px]:min-h-[45vh] min-[800px]:max-w-xl">
          {/* [C][D] H1 margin + size */}
          <h1
            className="mt-3 text-6xl sm:text-7xl lg:text-8xl leading-[1.02] text-[#E8732A]"
            style={{ fontFamily: "var(--font-dm-serif), serif" }}
          >
            Forgewing
          </h1>

          {/* sub-attribution — desktop only, sits between H1 and tagline */}
          <p className="hidden min-[800px]:block mt-2 text-xl sm:text-2xl text-[#1E3340] leading-snug max-w-md [text-wrap:balance]">
            Product Delivery Engine
          </p>

          {/* [E] DESKTOP-ONLY subtitle (≥800px) */}
          <p className="hidden min-[800px]:block mt-2 text-sm italic text-[#5A7A8A]">
            by VaultScaler
          </p>

          {/* [F] MOBILE/TABLET image wrapper (<800px) — overlay container */}
          <div className="relative min-[800px]:hidden -mt-12 w-[140vw] min-[500px]:w-[120vw] max-w-none">
            <Image
              src={aniLandingFull}
              alt="Ani — Forgewing's winged anvil mascot"
              priority
              className="w-full h-auto"
              sizes="(min-width: 00px) 120vw, 105vw"
            />
            {/* [G] overlay subtitle: top-% / width-% / font-size all step at 500px */}
            <p className="absolute top-[15%] min-[500px]:top-[8%] left-1/2 -translate-x-1/2 w-[56%] min-[500px]:w-[42%] text-center text-[#1E3340] text-base min-[500px]:text-lg sm:text-xl leading-snug [text-wrap:balance]">
            Product Delivery Engine
            <span className="block mt-1 text-xs min-[500px]:text-sm italic text-[#5A7A8A]">
              by VaultScaler
            </span>
            </p>
          </div>

          {/* [H] button vertical spacing — mt-10 = mobile, min-[800px]:mt-10 = desktop */}
          <div className="mt-10 min-[800px]:mt-10 flex flex-col items-center min-[800px]:items-start gap-3">
            <TrackedCTALink
              href="/waitlist/"
              trackingName="Reserve Onboarding Spot"
              trackingLocation="Forgewing Hero"
              className="inline-flex items-center justify-center rounded-full bg-[#E8732A] px-8 py-3.5 text-base font-semibold text-white transition-colors hover:bg-[#d0651e] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E8732A] focus-visible:ring-offset-2"
            >
              Reserve an onboarding spot
            </TrackedCTALink>

          </div>
        </div>
      </div>
    </section>

    {/* §2 — The vision is the easy part — Parchment */}
    <section className="relative bg-[#F4F1EC] overflow-hidden">
      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-16">
        <h2
          className="text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-[#1E3340]"
          style={{ fontFamily: "var(--font-dm-serif), serif" }}
        >
          AI made coding faster.<br />The delivery gap remains
        </h2>
        <div className="mt-6 space-y-5 text-base font-light text-[#5A7A8A] leading-relaxed">
          <p>
            Elite teams ship changes in under a day. Typical teams take a month. Code generation got cheap, but the 30x delivery gap remained.
          </p>
          <p>
            AI made writing code faster. It didn&rsquo;t solve translating requirements or wrangling stories. It didn&rsquo;t shrink the 68&ndash;84% of a developer&rsquo;s week spent on documentation, clarification, testing, and ops. It didn&rsquo;t close the gap between product and engineering. It didn&rsquo;t make anything production-ready.
          </p>
          <p>
            Billions are flowing into AI code generation. None of it is aimed at delivery. Forgewing was built for that gap &mdash; for the product-and-engineering team accountable to ship.
          </p>
        </div>
      </div>
    </section>

    {/* §2.5 — The Solution — Cream */}
    <section className="relative bg-[#E8D5B5] overflow-hidden">
      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-16">
        <h2
          className="text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-[#1E3340]"
          style={{ fontFamily: "var(--font-dm-serif), serif" }}
        >
          Closing the gap
        </h2>
        <div className="mt-6 space-y-5 text-base font-light text-[#1E3340]/80 leading-relaxed">
          <p>
            Magic happens when product and engineering collaborate in the same space &mdash; one that holds complete knowledge of the code and the requirements it was built for. No translation loss. No extra motion.
          </p>
          <p>
            Point Forgewing at your repo or hand it a brief. It returns real pull requests &mdash; not prototypes, not snippets. Engineering keeps review and merge authority. Nothing ships without a human hand on the lever.
          </p>
          <p>
            Production-ready infrastructure deploys to your AWS account, not ours. Product and engineering work from one source of truth, with memory that compounds every release.
          </p>
        </div>
        <figure className="mt-12 flex flex-row items-center justify-center gap-6 sm:gap-10">
          <Image
            src={aniLookingRough}
            alt="Ani, your winged anvil"
            className="w-[110px] h-auto"
            sizes="110px"
          />
          <figcaption className="text-left text-sm italic text-[#5A7A8A] leading-relaxed">
            <span
              className="block not-italic text-[#1E3340] text-base mb-1"
              style={{ fontFamily: "var(--font-dm-serif), serif" }}
            >
              Meet Ani
            </span>
            <span className="block">Your very own winged anvil.</span>
            <span className="block">Solid and quick.</span>
            <span className="block">Seriousness with levity.</span>
          </figcaption>
        </figure>
      </div>
    </section>

    {/* §2.6 — Team Shape — Forge Dark */}
    <section className="relative bg-[#1E3340] overflow-hidden">
      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 lg:py-16">
        <h2
          className="text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-[#E8D5B5]"
          style={{ fontFamily: "var(--font-dm-serif), serif" }}
        >
          The right team size is small.
        </h2>
        <div className="mt-10 space-y-5 text-base font-light text-white/85 leading-relaxed">
          <p>
            Forgewing was built for teams of 1 to 3 people. Product, engineering, and UX leadership roles bring the domain expertise, creativity, and discernment. The team stays close to the customer and keeps the authority to move.
          </p>
          <p>
            Forgewing takes the communication, documentation, and process overhead. It takes the bulk of the technical design and delivery AI is now capable of. The work that scales with team size stops scaling.
          </p>
          <p>
            A small Forgewing team ships like a team three times its size, and it ships better, because the people deciding are the same people closest to the customer.
          </p>
        </div>
        <p
          className="mt-12 text-3xl sm:text-4xl text-[#E8D5B5] leading-tight"
          style={{ fontFamily: "var(--font-dm-serif), serif" }}
        >
          Get your teams working on the product, not in the weeds.
        </p>
      </div>
    </section>

    {/* §3 — Step Into the Workshop — VS Navy */}
    <section className="relative bg-[#234D70] overflow-hidden">
      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-16">
        <h2
          className="text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-[#E8D5B5]"
          style={{ fontFamily: "var(--font-dm-serif), serif" }}
        >
          Step into the workshop
        </h2>

        <div className="mt-10 space-y-5 text-base font-light text-white/85 leading-relaxed">
          <p>
            Bring a vision. Bring a repo. Bring a pilot you&rsquo;ve already shipped and need to make real. Forgewing reads what you have, meets you where you are, and turns it into a working brief.
          </p>
          <p>
            Forgewing is the workshop where you refine the brief. Ask a question. Change your mind. Every decision, refusal, and reversal is captured. No wasted effort updating stories or documentation. It&rsquo;s all there and current.
          </p>
          <p>
            When you say go, Forgewing designs the architecture, plans the build, and ships real pull requests against your repo. Every line traces back to the brief. Engineering keeps review and merge authority. Forgewing proposes; your team merges.
          </p>
        </div>

        <figure className="mt-12">
          <div className="rounded-xl overflow-hidden border border-[#E8D5B5]/20 shadow-2xl bg-[#1E3340]">
            <Image
              src={appScreenshot}
              alt="The Forgewing brief workspace — chat refining the brief on the left, build and plan status on the right"
              className="w-full h-auto"
              sizes="(max-width: 768px) 100vw, 768px"
            />
          </div>
        </figure>
      </div>
    </section>

    {/* §4 — Purpose-built engineering — Forge Dark */}
    <section className="relative bg-[#1E3340] overflow-hidden">
      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14 lg:pt-16 pb-20 sm:pb-28 lg:pb-32">
        <h2
          className="text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-[#E8732A]"
          style={{ fontFamily: "var(--font-dm-serif), serif" }}
        >
          Engineering purpose-built for stability, security, and scalability.
        </h2>

        <div className="mt-10 space-y-5 text-base font-light text-white/85 leading-relaxed">
          <p>
            No templates. No starter kits. No boilerplate that someone else&rsquo;s product wore first. Architecture is designed specifically for your application and built for production from the start.
          </p>
          <p>
            Code lands in your GitHub. An ephemeral test environment is spun up for every release. Infrastructure runs in your AWS. Inference runs through Bedrock, which doesn&rsquo;t keep your data. CI/CD ships every change with circuit breakers and rollback already wired in.
          </p>
          <p>
            Your source stays yours. Forgewing learns the shape of it and works from that.
          </p>
        </div>

        <div
          className="mt-14 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-x-12 sm:gap-y-3 text-3xl sm:text-4xl text-[#E8D5B5] leading-tight"
          style={{ fontFamily: "var(--font-dm-serif), serif" }}
        >
          <span>Your architecture.</span>
          <span>Your code.</span>
          <span>Your AWS.</span>
        </div>
      </div>
    </section>

    {/* §5 — Mission in Flight — Parchment */}
    <section className="relative bg-[#F4F1EC] overflow-hidden">
      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:pt-16 lg:pb-32">
        <h2
          className="text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-[#1E3340]"
          style={{ fontFamily: "var(--font-dm-serif), serif" }}
        >
          Product and engineering, shipping together.
        </h2>
        <p className="mt-6 text-lg sm:text-xl text-[#5A7A8A] leading-snug">
          Point Forgewing at your repo or hand it a brief. Real pull requests come back.
        </p>

        <ol className="mt-16 flex flex-col gap-10">
          {[
            {
              step: "0",
              title: "Discover",
              note: "If starting from an existing codebase",
              desc: "Forgewing ingests your existing codebase and drafts a brief grounded in what's already there.",
            },
            {
              step: "1",
              title: "Define",
              desc: "Define a new feature, a bug fix, or start a new system from scratch. Product intent, users, constraints, expected outcomes. Captured once, reused everywhere.",
            },
            {
              step: "2",
              title: "Design",
              desc: "Forgewing picks the architecture from your requirements. Right-sized. Defensible.",
            },
            {
              step: "3",
              title: "Build",
              desc: "Agent teams produce real pull requests. Engineering keeps review and merge authority.",
            },
            {
              step: "4",
              title: "Deploy",
              desc: "Deployed to staging in your AWS account. Promote to production on your call. Rollback included.",
            },
            {
              step: "5",
              title: "Operate",
              desc: "Continuous operation, monitoring, and repair. Every decision and incident enters the memory graph.",
            },
          ].map((item, idx, arr) => {
            const isLast = idx === arr.length - 1;
            return (
              <li
                key={item.step}
                className="relative flex gap-5"
              >
                {!isLast && (
                  <span
                    aria-hidden
                    className="absolute left-[1.125rem] top-16 bottom-[-2.5rem] w-px bg-[#E8732A]/30"
                  />
                )}
                <div className="flex-shrink-0">
                  <div
                    className="text-6xl leading-none text-[#E8732A] w-12"
                    style={{ fontFamily: "var(--font-dm-serif), serif" }}
                  >
                    {item.step}
                  </div>
                </div>
                <div className="flex-1">
                  <h3
                    className="text-2xl sm:text-3xl text-[#1E3340] leading-tight"
                    style={{ fontFamily: "var(--font-dm-serif), serif" }}
                  >
                    {item.title}
                  </h3>
                  {item.note && (
                    <p className="mt-1 text-sm italic text-[#5A7A8A] tracking-wide">
                      ({item.note})
                    </p>
                  )}
                  <p className="mt-3 text-base font-light text-[#5A7A8A] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>

    {/* §6 — Shipping is half the job — Forge Dark */}
    <section className="relative bg-[#1E3340] overflow-hidden">
      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 lg:py-16">
        <h2
          className="text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-[#E8D5B5]"
          style={{ fontFamily: "var(--font-dm-serif), serif" }}
        >
          Shipping is half the job.
        </h2>
        <div className="mt-10 space-y-5 text-base font-light text-white/85 leading-relaxed">
          <p>Your engineers should be building what&rsquo;s next. Not babysitting what shipped last quarter.</p>
          <p>
            Forgewing handles monitoring, incident response, rollback &mdash; around the clock, in your AWS account. Patches get written with the knowledge of what the system is supposed to do. Your team gets a PR ready for approval instead of a tidal wave of monitoring alerts to cull through.
          </p>
          <p>
            The controls that should never auto-fire stay yours: deleting infrastructure, changing authentication, changing security config.
          </p>
        </div>
      </div>
    </section>

    {/* §8 — You stay in control — Cream */}
    <section className="relative bg-[#E8D5B5] overflow-hidden">
      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 lg:py-16">
        <h2
          className="text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-[#1E3340]"
          style={{ fontFamily: "var(--font-dm-serif), serif" }}
        >
          You stay in control
        </h2>
        <p className="mt-6 text-lg sm:text-xl text-[#1E3340]/70 leading-snug">
          Forgewing proposes. You approve. Some doors stay locked, no matter what.
        </p>
        <div className="mt-10 space-y-5 text-base font-light text-[#1E3340]/80 leading-relaxed">
          <p>
            Engineering keeps merge authority over every line of code that lands. Nothing ships to your production without a human hand on the lever.
          </p>
          <p>
            Some doors stay locked. Forgewing will not delete infrastructure, change authentication, or alter security configuration. Not after a month. Not after a year. Not after any amount of trust. Those decisions are yours, permanently.
          </p>
        </div>
      </div>
    </section>


    {/* §11 — FAQ — Parchment */}
    <section className="relative bg-[#F4F1EC] overflow-hidden">
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 lg:py-16">
        <h2
          className="text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-[#1E3340]"
          style={{ fontFamily: "var(--font-dm-serif), serif" }}
        >
          Frequently Asked Questions
        </h2>
        <p className="mt-6 mb-12 text-lg sm:text-xl text-[#5A7A8A] leading-snug max-w-2xl">
          Everything you need to know about working with Forgewing.
        </p>

        <ForgewingFAQ items={faqItems} />
      </div>
    </section>

    {/* §12 — Reserve an onboarding spot — Forge Dark */}
    <section className="relative bg-[#1E3340] overflow-hidden">
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 lg:py-16 text-center">

        <h2
          className="mt-3 text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-[#E8732A]"
          style={{ fontFamily: "var(--font-dm-serif), serif" }}
        >
          First cohorts launch June 2026
        </h2>

        <p className="mt-8 text-base font-light text-white/80 leading-relaxed max-w-2xl mx-auto">
          Free trial. One product surface. Point us at a repo or hand us a brief. We&rsquo;ll do the rest.
        </p>
        <div className="mt-10">
          <TrackedCTALink
            href="/waitlist/"
            trackingName="Reserve Onboarding Spot"
            trackingLocation="Forgewing Final CTA"
            className="inline-flex items-center justify-center rounded-full bg-[#E8732A] px-8 py-3.5 text-base font-semibold text-white transition-colors hover:bg-[#d0651e] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E8732A] focus-visible:ring-offset-2"
          >
            Reserve an onboarding spot
          </TrackedCTALink>
        </div>
        <p className="mt-12 text-sm italic text-white/55 leading-relaxed">
          <span
            className="not-italic text-[#E8D5B5] text-base"
            style={{ fontFamily: "var(--font-dm-serif), serif" }}
          >
            Built in Las Vegas
          </span>{" "}
          by Ian Green and Ben Pruess.
        </p>
      </div>
    </section>
    </>
  );
}
