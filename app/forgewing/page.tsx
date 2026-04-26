import Image from "next/image";
import FAQ from "@/components/FAQ";
import ParallaxAni from "./ParallaxAni";
import aniLandingFull from "./ani-landing-transparent.png";
import aniStraighton from "./ani_incomming.png";
import aniLookingRough from "./ani_looking_rough.png";
import forgePour from "./Forge_pour.png";

export default function ForgewingHome() {
  return (
    <>
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
        [F] Mobile/tablet image wrapper (<800px)
              top offset ....................... -mt-6   (negative = overlap H1)
              image width ...................... w-[105vw] phone / w-[120vw] tablet+
              ↑ bigger = more wing-spread, less negative space
        [G] Mobile/tablet overlay subtitle (inside image wrapper)
              vertical position ................ top-[5%] phone / top-[8%] tablet+
              ↑ smaller = higher (closer to H1)
              horizontal width ................. w-[56%] phone / w-[42%] tablet+
              ↑ bigger = fewer line wraps, but text spreads into wings
              font size ........................ text-base phone / text-lg tablet / text-xl sm+
        [H] Button top margin .................. mt-10
        ============================================================ */}
    <section className="relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 85% 10%, rgba(232,115,42,0.08) 0%, transparent 55%)",
        }}
      />

      <ParallaxAni src={aniLandingFull} />

      {/* [A] section padding */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 lg:pt-16 pb-16 sm:pb-24 lg:pb-32">
        {/* [B] hero block min-height */}
        <div className="flex flex-col justify-start items-center text-center min-[800px]:items-start min-[800px]:text-left min-h-[30vh] min-[800px]:min-h-[45vh] min-[800px]:max-w-xl">
          {/* [C][D] H1 margin + size */}
          <h1
            className="mt-6 lg:mt-10 text-6xl sm:text-7xl lg:text-8xl leading-[1.02] text-[#E8732A]"
            style={{ fontFamily: "var(--font-dm-serif), serif" }}
          >
            Forgewing
          </h1>

          {/* [E] DESKTOP-ONLY subtitle (≥800px) */}
          <p className="hidden min-[800px]:block mt-6 text-xl sm:text-2xl text-[#1E3340] leading-snug max-w-md [text-wrap:balance]">
            Full-lifecycle agentic engineering with compounding operational intelligence. Built for people who deliver the vision.
          </p>

          {/* [F] MOBILE/TABLET image wrapper (<800px) — overlay container */}
          <div className="relative min-[800px]:hidden -mt-0 w-[140vw] min-[500px]:w-[120vw] max-w-none">
            <Image
              src={aniLandingFull}
              alt="Ani — Forgewing's winged anvil mascot"
              priority
              className="w-full h-auto"
              sizes="(min-width: 500px) 120vw, 105vw"
            />
            {/* [G] overlay subtitle: top-% / width-% / font-size all step at 500px */}
            <p className="absolute top-[5%] min-[500px]:top-[8%] left-1/2 -translate-x-1/2 w-[56%] min-[500px]:w-[42%] text-center text-[#1E3340] text-base min-[500px]:text-lg sm:text-xl leading-snug [text-wrap:balance]">
              Full-lifecycle agentic engineering with compounding operational intelligence. Built for people who deliver the vision.
            </p>
          </div>

          {/* [H] button margin */}
          <div className="mt-10">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-full bg-[#E8732A] px-8 py-3.5 text-base font-semibold text-white transition-colors hover:bg-[#d0651e] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E8732A] focus-visible:ring-offset-2"
            >
              Get Forgewing
            </button>
          </div>
        </div>
      </div>
    </section>

    <section className="relative bg-[#D8E2EA] overflow-hidden">
      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-32">
        <h2
          className="text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-[#1E3340]"
          style={{ fontFamily: "var(--font-dm-serif), serif" }}
        >
          Let your vision take flight
        </h2>
        <p className="mt-10 text-xl sm:text-2xl text-[#5A7A8A] leading-snug">
          What&rsquo;s between you and your novel software in production? Time, money, other priorities, scalability, the list goes on.
        </p>
        <figure className="my-14 sm:my-16 flex flex-col items-center">
          <Image
            src={aniStraighton}
            alt="Ani, ready for the mission"
            className="max-h-[420px] w-auto"
            sizes="420px"
          />
          <figcaption className="mt-6 text-center text-base sm:text-lg text-[#5A7A8A] leading-tight">
            <span
              className="block text-[#1E3340] text-3xl sm:text-4xl leading-tight mb-2"
              style={{ fontFamily: "var(--font-dm-serif), serif" }}
            >
              Meet Ani
            </span>
            <span className="block">Your very own winged anvil</span>
            <span className="block">Solid and quick</span>
            <span className="block">Seriousness with levity</span>
          </figcaption>
        </figure>
        <p className="text-xl sm:text-2xl text-[#5A7A8A] leading-snug">
          Forgewing brings the technical acumen to turn your vision into reality.
        </p>
      </div>
    </section>

    <section className="relative bg-black overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-32">
        <div className="flex flex-col sm:flex-row sm:items-end gap-5 sm:gap-8">
          <Image
            src={forgePour}
            alt="Molten metal pour"
            className="w-[110px] sm:w-[130px] lg:w-[150px] h-auto scale-x-[-1] flex-shrink-0"
            sizes="150px"
          />
          <h2
            className="text-5xl sm:text-6xl lg:text-8xl leading-[0.95] text-[#E8732A]"
            style={{ fontFamily: "var(--font-dm-serif), serif" }}
          >
            Hard core<br />engineering
          </h2>
        </div>
        <p className="mt-10 sm:mt-12 text-lg sm:text-xl text-white/85 leading-relaxed max-w-2xl">
          Every system designed from first principles. No templates, no boilerplate &mdash; real AWS infrastructure across 30+ services, your code in your GitHub, production-grade from the first deploy.
        </p>
        <p className="mt-4 text-sm italic text-white/45 leading-relaxed max-w-2xl">
          Struck hot, cooled right.
        </p>
        <div className="mt-10 flex flex-wrap gap-3 sm:gap-4">
          {[
            "First principles design",
            "30+ AWS services",
            "Your GitHub, your code",
            "Bedrock inference",
            "Recursive learning",
            "CI/CD built in",
          ].map((item) => (
            <div
              key={item}
              className="rounded-full border border-[#E8D5B5]/25 bg-white/5 px-5 py-2.5 text-sm sm:text-base text-[#E8D5B5]"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="relative bg-[#F4F1EC] overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-32">
        <h2
          className="text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-[#1E3340]"
          style={{ fontFamily: "var(--font-dm-serif), serif" }}
        >
          On a Mission
        </h2>
        <p className="mt-6 text-xl sm:text-2xl text-[#5A7A8A] leading-snug max-w-2xl">
          You describe what to build in plain language. Forgewing handles everything else.
        </p>

        <ol className="mt-16 flex flex-col lg:flex-row gap-10 lg:gap-0">
          {[
            {
              step: "1",
              title: "Describe",
              desc: "Write a mission brief. What the product does, who it serves, what it needs to handle.",
            },
            {
              step: "2",
              title: "Design",
              desc: "Forgewing designs the architecture from first principles. No templates. Real systems for what you need.",
            },
            {
              step: "3",
              title: "Build",
              desc: "Coordinated agent teams handle code generation, dependency ordering, and testing.",
            },
            {
              step: "4",
              title: "Deploy",
              desc: "Real AWS infrastructure with Terraform, circuit breakers, encryption, and automatic rollback.",
            },
            {
              step: "5",
              title: "Operate",
              desc: "Continuous monitoring, incident response, and intelligence that improves while you sleep.",
            },
          ].map((item, idx, arr) => {
            const isLast = idx === arr.length - 1;
            return (
              <li
                key={item.step}
                className="relative flex lg:flex-col gap-5 lg:gap-0 lg:flex-1 lg:pr-6"
              >
                {!isLast && (
                  <span
                    aria-hidden
                    className="lg:hidden absolute left-[1.125rem] top-16 bottom-[-2.5rem] w-px bg-[#E8732A]/30"
                  />
                )}
                <div className="flex-shrink-0 lg:flex lg:items-center lg:gap-4">
                  <div
                    className="text-6xl lg:text-7xl leading-none text-[#E8732A] w-12 lg:w-auto"
                    style={{ fontFamily: "var(--font-dm-serif), serif" }}
                  >
                    {item.step}
                  </div>
                  {!isLast && (
                    <span
                      aria-hidden
                      className="hidden lg:block flex-1 h-px bg-[#E8732A]/30"
                    />
                  )}
                </div>
                <div className="flex-1 lg:mt-6">
                  <h3
                    className="text-2xl lg:text-3xl text-[#1E3340] leading-tight"
                    style={{ fontFamily: "var(--font-dm-serif), serif" }}
                  >
                    {item.title}
                  </h3>
                  <p className="mt-3 text-base text-[#5A7A8A] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>

    <section className="relative bg-[#1E3340] overflow-hidden">
      <div className="relative flex flex-col lg:flex-row lg:items-stretch">
        <div className="lg:w-[40%] flex items-end justify-center lg:justify-end pt-20 sm:pt-24 lg:pt-32 lg:pr-12 lg:pb-0">
          <Image
            src={aniLookingRough}
            alt="Ani keeping watch"
            className="w-[220px] sm:w-[300px] lg:w-full max-w-[420px] h-auto"
            sizes="(min-width: 1024px) 420px, 300px"
          />
        </div>
        <div className="lg:w-[60%] px-4 sm:px-6 lg:pl-12 lg:pr-8 xl:pr-16 py-12 sm:py-16 lg:py-32 max-w-3xl">
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-[#E8D5B5]"
            style={{ fontFamily: "var(--font-dm-serif), serif" }}
          >
            Night Owl
          </h2>
          <p className="mt-6 text-lg sm:text-xl text-white/70 leading-relaxed max-w-md">
            The ops shift that never sleeps.
          </p>
          <ul className="mt-10 space-y-5 text-lg sm:text-xl text-white/85 leading-relaxed">
            <li>24/7 production monitoring. Problems solved before you wake up.</li>
            <li>Around-the-clock anomaly detection, pattern identification, and degradation trend analysis.</li>
            <li>Earned autonomy decides what Forgewing resolves on the spot versus what it flags for your approval — trust built through demonstrated competence, not assumed.</li>
          </ul>
          <p className="mt-10 text-sm italic text-white/55 leading-relaxed">
            <span
              className="not-italic text-[#E8D5B5]"
              style={{ fontFamily: "var(--font-dm-serif), serif" }}
            >
              Eyes open.
            </span>{" "}
            Ani doesn&rsquo;t sleep. Neither does production.
          </p>
        </div>
      </div>
    </section>

    <section className="relative bg-[#234D70] overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-32">
        <h2
          className="text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-[#E8732A]"
          style={{ fontFamily: "var(--font-dm-serif), serif" }}
        >
          What Forgewing Can Build
        </h2>
        <p className="mt-6 text-xl sm:text-2xl text-white/75 leading-snug max-w-2xl">
          Full stack. Frontend and backend. If you can describe the system, Forgewing can build it.
        </p>

        <div className="mt-14 flex flex-wrap gap-3 sm:gap-4">
          {[
            "Web applications & APIs",
            "SaaS platforms",
            "ML training & inference pipelines",
            "AI-powered applications",
            "Chat agents & conversational AI",
            "Data pipelines & ETL",
            "IoT data platforms",
            "Workflow automation",
            "Internal tools & dashboards",
            "Fraud detection systems",
            "Recommendation engines",
          ].map((item) => (
            <div
              key={item}
              className="rounded-full border border-[#E8D5B5]/25 bg-white/5 px-5 py-2.5 text-sm sm:text-base text-[#E8D5B5]"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="relative bg-[#F4F1EC] overflow-hidden">
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-32">
        <h2
          className="text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-[#1E3340]"
          style={{ fontFamily: "var(--font-dm-serif), serif" }}
        >
          Frequently Asked Questions
        </h2>
        <p className="mt-6 mb-12 text-xl sm:text-2xl text-[#5A7A8A] leading-snug max-w-2xl">
          Everything you need to know about working with Forgewing.
        </p>

        <FAQ
          items={[
            {
              question: "Does Forgewing replace my engineering team?",
              answer:
                "For startups without a team, Forgewing is the team. For companies with engineers, Forgewing handles execution so your best people focus on the decisions only they can make. It doesn\u2019t replace judgment. It makes sure judgment translates into shipped, running software.",
            },
            {
              question: "How is Forgewing different from Cursor, Copilot, Kiro, or Devin?",
              answer:
                "Those tools help you write code faster. Forgewing is the engineer. It designs architecture from a mission brief, writes the code, deploys to real AWS infrastructure, monitors 24/7, and fixes problems when they happen. When Copilot\u2019s code breaks at 2 AM, you\u2019re on your own. When Forgewing\u2019s system needs attention, the ops team is already working the problem.",
            },
            {
              question: "What is a Mission Brief?",
              answer:
                "A mission brief is how you tell Forgewing what to build, in plain language. What the product does, who it serves, what it needs to handle. Forgewing designs the architecture from first principles, choosing from 30+ AWS services across compute, data, streaming, ML, networking, and more. No templates, no boilerplate. Real systems designed for what you actually need.",
            },
            {
              question: "What does \u201cEarned Autonomy\u201d mean?",
              answer:
                "Forgewing starts in proposal mode. It recommends and you approve. As it proves reliability, it earns greater autonomy. Some actions it can never take without you, like deleting infrastructure or modifying authentication. This isn\u2019t a system you have to watch nervously. It\u2019s a system that proves it deserves more responsibility over time, like onboarding a new hire.",
            },
            {
              question: "How does Forgewing handle deployments?",
              answer:
                "Forgewing deploys to real production AWS infrastructure managed by Terraform. Not a sandbox. Not a preview link. Real infrastructure with circuit breakers, automatic rollback on failed deployments, encryption in transit and at rest, and private networking. The kind of infrastructure a senior DevOps engineer would set up.",
            },
            {
              question: "Can Forgewing work with my existing codebase?",
              answer:
                "Yes. Forgewing handles both greenfield projects and existing codebases. For existing systems, Forgewing maps your architecture and establishes a baseline before making any changes. It understands your system before it touches it.",
            },
            {
              question: "What if I already use AI coding tools?",
              answer:
                "Keep them. Your developers can use Cursor, Copilot, Kiro, or whatever they prefer for day-to-day coding. Forgewing operates at a different level: owning the architecture, deployment, operations, and incident response. Think of it as the system that makes sure all that code actually ships reliably and stays running.",
            },
            {
              question: "Who owns the code Forgewing creates?",
              answer:
                "You do. 100% of the IP, 100% of the rights. No proprietary runtime, no vendor SDK woven into your output, no phone-home dependencies. The code Forgewing writes is standard, clean, production-grade code that any engineer can read, maintain, and extend without Forgewing.",
            },
            {
              question: "Can I try Forgewing before committing?",
              answer:
                "Yes. Join the waitlist and when your spot opens, you\u2019ll get a free 14-day trial with full access. No credit card required to start. Experience the full pipeline from mission brief to build, deploy, and operate, then decide with confidence.",
            },
          ]}
        />
      </div>
    </section>

    <section className="relative bg-[#1E3340] overflow-hidden">
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-32 text-center">
        <h2
          className="text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-[#E8732A]"
          style={{ fontFamily: "var(--font-dm-serif), serif" }}
        >
          Ready to build?
        </h2>
        <p className="mt-6 text-xl sm:text-2xl text-white/75 leading-snug max-w-2xl mx-auto">
          Join the waitlist. When your spot opens, you get a 14-day trial with full access. No credit card to start.
        </p>
        <div className="mt-12">
          <a
            href="/waitlist"
            className="inline-flex items-center justify-center rounded-full bg-[#E8732A] px-8 py-3.5 text-base font-semibold text-white transition-colors hover:bg-[#d0651e] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E8732A] focus-visible:ring-offset-2"
          >
            Join the waitlist
          </a>
        </div>
      </div>
    </section>
    </>
  );
}
