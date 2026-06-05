import Image from "next/image";
import ForgewingFAQ from "./ForgewingFAQ";
import { TrackedCTALink } from "@/components/TrackedLink";
import ParallaxAni from "./ParallaxAni";
import ForgewingEngagementTracking from "./ForgewingEngagementTracking";
import JsonLd from "@/components/JsonLd";
import { SITE } from "@/lib/site";
import aniLandingFull from "./ani-landing-transparent.png";
import aniLookingRough from "./ani_looking_rough.png";

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
    applicationCategory: "BusinessApplication",
    applicationSubCategory: "Sovereign Research Assistant",
    operatingSystem: "Cloud (customer-owned AWS)",
    description:
      "Forgewing is a sovereign research assistant. Ask questions of your own documents and get grounded, cited answers, then generate reports written to your own storage. It runs entirely inside your own AWS account, so your data never leaves your control.",
    url: `${SITE.url}/forgewing/`,
    author: { "@type": "Organization", name: "VaultScaler", url: `${SITE.url}/` },
    brand: { "@type": "Brand", name: "Forgewing" },
    image: `${SITE.url}/og/forgewing.png`,
    featureList: [
      "Grounded, cited answers over your own documents",
      "Refuses off-corpus questions rather than fabricating",
      "Report generation written to your own storage",
      "Deploys entirely into your own AWS account",
      "No credentials retained after setup",
    ],
  };

  const faqItems = [
    {
      question: "What does Forgewing actually do?",
      answer:
        "Forgewing answers questions over your own documents and cites its sources, and it turns those findings into grounded, cited reports. That's the scope: read and report. It does not modify your files or run long-running jobs.",
    },
    {
      question: "Where does my data go?",
      answer:
        "Nowhere it isn't already. Forgewing deploys entirely into your own AWS account and works against your document corpus in place. Reports are written to your own storage, never to ours. After setup we hold no credentials.",
    },
    {
      question: "Will it make things up?",
      answer:
        "No. Forgewing answers from your documents and cites where each answer comes from. Off-corpus questions return nothing rather than a guess — it will not fabricate to fill a gap.",
    },
    {
      question: "How do I know what it's allowed to do?",
      answer:
        "Forgewing ships with an Agent Passport that declares its data boundary as your document corpus and its authority as read and report generation — enforced against the permissions actually deployed, and verifiable against the live deployment.",
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

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at 85% 10%, rgba(232,115,42,0.08) 0%, transparent 55%)",
          }}
        />

        <ParallaxAni src={aniLandingFull} startY="-26%" endY="20%" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 lg:pt-16 pb-16 sm:pb-24 lg:pb-32">
          <div className="flex flex-col justify-start items-center text-center min-[800px]:items-start min-[800px]:text-left min-h-[30vh] min-[800px]:min-h-[45vh] min-[800px]:max-w-xl">
            <h1
              className="mt-3 text-6xl sm:text-7xl lg:text-8xl leading-[1.02] text-[#E8732A]"
              style={{ fontFamily: "var(--font-dm-serif), serif" }}
            >
              Forgewing
            </h1>

            {/* sub-attribution — desktop only */}
            <p className="hidden min-[800px]:block mt-2 text-xl sm:text-2xl text-[#1E3340] leading-snug max-w-md [text-wrap:balance]">
              Sovereign Research Assistant
            </p>
            <p className="hidden min-[800px]:block mt-2 text-sm italic text-[#5A7A8A]">
              by VaultScaler
            </p>

            {/* MOBILE/TABLET image wrapper (<800px) — overlay container */}
            <div className="relative min-[800px]:hidden -mt-12 w-[140vw] min-[500px]:w-[120vw] max-w-none">
              <Image
                src={aniLandingFull}
                alt="Ani — Forgewing's winged anvil mascot"
                priority
                className="w-full h-auto"
                sizes="(min-width: 00px) 120vw, 105vw"
              />
              <p className="absolute top-[15%] min-[500px]:top-[8%] left-1/2 -translate-x-1/2 w-[56%] min-[500px]:w-[42%] text-center text-[#1E3340] text-base min-[500px]:text-lg sm:text-xl leading-snug [text-wrap:balance]">
                Sovereign Research Assistant
                <span className="block mt-1 text-xs min-[500px]:text-sm italic text-[#5A7A8A]">
                  by VaultScaler
                </span>
              </p>
            </div>

            <p className="mt-8 min-[800px]:mt-6 text-lg sm:text-xl text-[#5A7A8A] leading-snug max-w-md [text-wrap:balance]">
              Ask and act on your own documents — inside your own cloud.
            </p>

            <div className="mt-8 flex flex-col items-center min-[800px]:items-start gap-3 sm:flex-row sm:items-center">
              <TrackedCTALink
                href="/contact/"
                trackingName="Request a live demo"
                trackingLocation="Forgewing Hero"
                className="inline-flex items-center justify-center rounded-full bg-[#E8732A] px-8 py-3.5 text-base font-semibold text-white transition-colors hover:bg-[#d0651e] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E8732A] focus-visible:ring-offset-2"
              >
                Request a live demo
              </TrackedCTALink>
              <TrackedCTALink
                href="/waitlist/"
                trackingName="Join the waitlist"
                trackingLocation="Forgewing Hero"
                className="inline-flex items-center justify-center rounded-full border border-[#234D70]/30 px-8 py-3.5 text-base font-semibold text-[#234D70] transition-colors hover:bg-[#234D70]/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#234D70] focus-visible:ring-offset-2"
              >
                Join the waitlist
              </TrackedCTALink>
            </div>
            <p className="mt-3 text-sm italic text-[#5A7A8A]">
              We can deploy it in front of you.
            </p>
          </div>
        </div>
      </section>

      {/* §1 — Grounded, cited answers — Parchment */}
      <section className="relative bg-[#F4F1EC] overflow-hidden">
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-16">
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-[#1E3340]"
            style={{ fontFamily: "var(--font-dm-serif), serif" }}
          >
            Grounded, cited answers
          </h2>
          <div className="mt-6 space-y-5 text-base font-light text-[#5A7A8A] leading-relaxed">
            <p>
              Forgewing answers questions over your own documents and cites its sources. Every answer
              traces back to where it came from, so you can check it rather than take it on faith.
            </p>
            <p>
              Off-corpus questions return nothing rather than a guess &mdash; it will not fabricate.
              When the answer isn&rsquo;t in your documents, Forgewing says so instead of inventing one.
            </p>
          </div>
        </div>
      </section>

      {/* §2 — Reports, generated in place — Cream */}
      <section className="relative bg-[#E8D5B5] overflow-hidden">
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-16">
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-[#1E3340]"
            style={{ fontFamily: "var(--font-dm-serif), serif" }}
          >
            Reports, generated in place
          </h2>
          <div className="mt-6 space-y-5 text-base font-light text-[#1E3340]/80 leading-relaxed">
            <p>
              Turn findings into grounded, cited reports written to your own storage &mdash; never to
              ours. The output lands where the rest of your work already lives.
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

      {/* §3 — Deployed in your cloud, zero keys retained — Forge Dark */}
      <section className="relative bg-[#1E3340] overflow-hidden">
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 lg:py-16">
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-[#E8D5B5]"
            style={{ fontFamily: "var(--font-dm-serif), serif" }}
          >
            Deployed in your cloud, zero keys retained
          </h2>
          <div className="mt-10 space-y-5 text-base font-light text-white/85 leading-relaxed">
            <p>
              Forgewing deploys entirely into your own AWS account. Your documents stay where they are,
              and the work happens next to them.
            </p>
            <p>
              After setup we hold no credentials, and it tears down to nothing when you&rsquo;re done.
              Nothing lingers in our hands.
            </p>
          </div>
          <div
            className="mt-14 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-x-12 sm:gap-y-3 text-3xl sm:text-4xl text-[#E8D5B5] leading-tight"
            style={{ fontFamily: "var(--font-dm-serif), serif" }}
          >
            <span>Your documents.</span>
            <span>Your cloud.</span>
            <span>Your control.</span>
          </div>
        </div>
      </section>

      {/* §4 — Agent Passport callout — VS Navy */}
      <section className="relative bg-[#234D70] overflow-hidden">
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-16">
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-[#E8D5B5]"
            style={{ fontFamily: "var(--font-dm-serif), serif" }}
          >
            What it&rsquo;s allowed to do, in writing
          </h2>
          <div className="mt-10 space-y-5 text-base font-light text-white/85 leading-relaxed">
            <p>
              Forgewing&rsquo;s Agent Passport declares its data boundary as your document corpus and
              its authority as read and report generation &mdash; enforced against the permissions
              actually deployed.
            </p>
            <p>
              You don&rsquo;t have to take our word for the boundary. You can inspect it, diff it, and
              verify it against the live deployment.
            </p>
          </div>
        </div>
      </section>

      {/* §5 — FAQ — Parchment */}
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

      {/* §6 — CTA — Forge Dark */}
      <section className="relative bg-[#1E3340] overflow-hidden">
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 lg:py-16 text-center">
          <h2
            className="mt-3 text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-[#E8732A]"
            style={{ fontFamily: "var(--font-dm-serif), serif" }}
          >
            See it on your own documents
          </h2>

          <p className="mt-8 text-base font-light text-white/80 leading-relaxed max-w-2xl mx-auto">
            Request a live demo and we can deploy Forgewing in front of you, inside your own cloud.
          </p>
          <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <TrackedCTALink
              href="/contact/"
              trackingName="Request a live demo"
              trackingLocation="Forgewing Final CTA"
              className="inline-flex items-center justify-center rounded-full bg-[#E8732A] px-8 py-3.5 text-base font-semibold text-white transition-colors hover:bg-[#d0651e] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E8732A] focus-visible:ring-offset-2"
            >
              Request a live demo
            </TrackedCTALink>
            <TrackedCTALink
              href="/waitlist/"
              trackingName="Join the waitlist"
              trackingLocation="Forgewing Final CTA"
              className="inline-flex items-center justify-center rounded-full border border-[#E8D5B5]/40 px-8 py-3.5 text-base font-semibold text-[#E8D5B5] transition-colors hover:bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E8D5B5] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1E3340]"
            >
              Join the waitlist
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
