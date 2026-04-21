import Image from "next/image";
import FAQ from "@/components/FAQ";
import aniLanding from "./ani-landing-transparent-cropped-for-hero.png";
import aniLandingFull from "./ani-landing-transparent.png";
import aniStraighton from "./ani_straighton_transparent.png";
import forgePour from "./Forge_pour.png";

export default function ForgewingHome() {
  return (
    <>
    <section className="relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 85% 10%, rgba(232,115,42,0.08) 0%, transparent 55%)",
        }}
      />

      <div className="pointer-events-none hidden lg:block absolute top-0 right-0 w-[60%] xl:w-[55%] -translate-y-[5%]">
        <div className="translate-x-[10%]">
          <Image
            src={aniLanding}
            alt="Ani — Forgewing's winged anvil mascot"
            priority
            className="w-full h-auto"
            sizes="55vw"
          />
        </div>
        <p className="pointer-events-auto mt-4 ml-auto max-w-sm pr-4 xl:pr-8 text-right text-base text-[#5A7A8A] leading-relaxed">
          <span
            className="text-[#1E3340]"
            style={{ fontFamily: "var(--font-dm-serif), serif" }}
          >
            Meet Ani.
          </span>{" "}
          Your very own winged anvil sidekick. Solid and quick. Seriousness with levity.
        </p>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
        <div className="flex flex-col justify-center items-start text-left min-h-[85vh] lg:min-h-[70vh] max-w-xl">
          <h1
            className="text-6xl sm:text-7xl lg:text-8xl leading-[1.02] text-[#E8732A]"
            style={{ fontFamily: "var(--font-dm-serif), serif" }}
          >
            Forgewing
          </h1>
          <p className="mt-6 text-xl sm:text-2xl text-[#1E3340] leading-snug max-w-md">
            Full-lifecycle agentic engineering system. Built for people with the vision to build something real.
          </p>

          <div className="lg:hidden mt-8 w-full max-w-xs self-end">
            <Image
              src={aniLandingFull}
              alt="Ani — Forgewing's winged anvil mascot"
              priority
              className="w-full h-auto"
              sizes="(max-width: 640px) 80vw, 20rem"
            />
          </div>

          <p className="lg:hidden mt-2 text-base text-[#5A7A8A] leading-relaxed max-w-md">
            <span
              className="text-[#1E3340]"
              style={{ fontFamily: "var(--font-dm-serif), serif" }}
            >
              Meet Ani.
            </span>{" "}
            Your very own winged anvil sidekick. Solid and quick. Seriousness with levity.
          </p>

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
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-10 lg:pt-12 pb-20 sm:pb-28 lg:pb-32">
        <h2
          className="text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-[#1E3340]"
          style={{ fontFamily: "var(--font-dm-serif), serif" }}
        >
          Let your vision take flight
        </h2>
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8 lg:min-h-[60vh]">
          <p className="text-xl sm:text-2xl text-[#5A7A8A] leading-snug">
            What&rsquo;s between you and your novel software in production? Time, money, other priorities, scalability, the list goes on.
          </p>
          <div className="hidden lg:flex items-center justify-center">
            <Image
              src={aniStraighton}
              alt=""
              aria-hidden
              className="max-h-[500px] w-auto"
              sizes="500px"
            />
          </div>
          <p className="text-xl sm:text-2xl text-[#5A7A8A] leading-snug lg:text-right lg:self-end">
            Forgewing brings the technical acumen to turn your vision into reality.
          </p>
        </div>
      </div>
    </section>

    <section className="relative bg-black overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-32">
        <div className="grid lg:grid-cols-[3fr_7fr] gap-6 lg:gap-6 items-center">
          <div className="order-2 lg:order-1 flex justify-center lg:justify-start">
            <Image
              src={forgePour}
              alt="Molten metal pour — Forgewing forging imagery"
              className="w-[150px] lg:w-full max-w-[200px] h-auto scale-x-[-1]"
              sizes="(min-width: 1024px) 200px, 100px"
            />
          </div>
          <div className="order-1 lg:order-2">
            <h2
              className="text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-[#E8732A]"
              style={{ fontFamily: "var(--font-dm-serif), serif" }}
            >
              Hard core engineering
            </h2>
            <p className="mt-6 sm:mt-8 text-lg sm:text-xl text-white/85 leading-relaxed max-w-2xl">
              Every system designed from first principles. No templates, no boilerplate &mdash; real AWS infrastructure across 30+ services, your code in your GitHub, production-grade from the first deploy.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 sm:gap-4">
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
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div className="text-left">
            <h2
              className="text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-[#E8D5B5]"
              style={{ fontFamily: "var(--font-dm-serif), serif" }}
            >
              Night Owl
            </h2>
            <p className="mt-6 text-lg sm:text-xl text-white/70 leading-relaxed max-w-md">
              The ops shift that never sleeps.
            </p>
          </div>
          <ul className="lg:text-right space-y-5 text-lg sm:text-xl text-white/85 leading-relaxed">
            <li>24/7 production monitoring. Problems solved before you wake up.</li>
            <li>Around-the-clock anomaly detection, pattern identification, and degradation trend analysis.</li>
            <li>Earned autonomy decides what Forgewing resolves on the spot versus what it flags for your approval — trust built through demonstrated competence, not assumed.</li>
          </ul>
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
