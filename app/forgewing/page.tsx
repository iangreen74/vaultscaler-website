import Image from "next/image";
import FAQ from "@/components/FAQ";
import ParallaxAni from "./ParallaxAni";
import aniLandingFull from "./ani-landing-transparent.png";
import aniStraighton from "./ani_incomming.png";
import aniLookingRough from "./ani_looking_rough.png";
import forgePour from "./Forge_pour_transparent.png";
import appScreenshot from "./app_screenshot.png";
import topo23 from "./topo23.png";
import aniTopDown from "./ani_top_down.png";

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
          {/* eyebrow — small caps, letter-spaced, sits above the wordmark */}
          <p className="mt-6 lg:mt-10 text-xs sm:text-sm font-semibold tracking-[0.22em] uppercase text-[#1E3340]">
            Get your software into production
          </p>
          {/* [C][D] H1 margin + size */}
          <h1
            className="mt-3 text-6xl sm:text-7xl lg:text-8xl leading-[1.02] text-[#E8732A]"
            style={{ fontFamily: "var(--font-dm-serif), serif" }}
          >
            Forgewing
          </h1>

          {/* [E] DESKTOP-ONLY subtitle (≥800px) */}
          <p className="hidden min-[800px]:block mt-6 text-xl sm:text-2xl text-[#1E3340] leading-snug max-w-md [text-wrap:balance]">
            Bring the vision. We bring the rest.
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
              Bring the vision. We bring the rest.
            </p>
          </div>

          {/* [H] button vertical spacing — mt-10 = mobile, min-[800px]:mt-10 = desktop */}
          <div className="mt-10 min-[800px]:mt-10 flex flex-col items-center min-[800px]:items-start gap-3">
            <a
              href="/waitlist"
              className="inline-flex items-center justify-center rounded-full bg-[#E8732A] px-8 py-3.5 text-base font-semibold text-white transition-colors hover:bg-[#d0651e] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E8732A] focus-visible:ring-offset-2"
            >
              Begin your first mission
            </a>
            {/* strapline — category anchor, serif tagline echoing the CTA */}

            <p className="text-sm italic text-[#5A7A8A]">
              21 days. No card. The iron is hot.
            </p>
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
          The vision is the easy part
        </h2>
        <div className="mt-6 space-y-5 text-base font-light text-[#5A7A8A] leading-relaxed">
          <p>
            You see the product. You can describe it down to the seam. You may have already shipped a pilot &mdash; a prototype that demos well but won&rsquo;t stand up to product stress.
          </p>
          <p>
            What you don&rsquo;t have is the capacity to finish it. Not enough time. Not enough team. Not enough money. Sometimes all three at once.
          </p>
          <p>
            The gap between <em>we showed it</em> and <em>it runs in production</em> is the gap Forgewing was built to own.
          </p>
        </div>
        <figure className="my-0 sm:my-0 flex flex-col items-center">
          <Image
            src={aniStraighton}
            alt="Ani, ready for the mission"
            className="max-h-[820px] w-auto"
            sizes="820px"
          />
          <figcaption className="mt-3 text-center text-sm italic text-[#5A7A8A] leading-relaxed">
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

    {/* §3 — Step Into the Workshop — VS Navy */}
    <section className="relative bg-[#234D70] overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-16">
        <div className="max-w-2xl">
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-[#E8D5B5]"
            style={{ fontFamily: "var(--font-dm-serif), serif" }}
          >
            Step into the workshop
          </h2>

        </div>
        <div className="mt-8 grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-start">
          <div className="space-y-5 text-base font-light text-white/85 leading-relaxed">
            <p>
              Bring a vision. Bring a repo. Bring a pilot you&rsquo;ve already shipped and need to make real. Ani reads what you have and meets you where you are.
            </p>
            <p>
              You write what the product does. Who it serves. What it has to handle. In your words &mdash; not in architecture diagrams, not in user stories, not in JIRA tickets you don&rsquo;t have time to write.
            </p>
            <p>
              The brief is a living document. Forgewing is the workshop where you refine it. Ask a question. Push back on a recommendation. Change your mind. Say no to something that sounds clever but isn&rsquo;t right. Ani remembers every decision, every refusal, every <em>we tried that and it didn&rsquo;t work</em>.
            </p>
            <p>
              When you&rsquo;re happy with the brief, Forgewing designs an architecture from thirty-plus AWS services, a build plan, and a deploy path. Every line of code traces back to a decision in the brief. Change the brief, the system changes with it.
            </p>
          </div>
          <figure className="lg:sticky lg:top-24">
            <div className="rounded-xl overflow-hidden border border-[#E8D5B5]/20 shadow-2xl bg-[#1E3340]">
              <Image
                src={appScreenshot}
                alt="The Forgewing brief workspace — chat refining the brief on the left, build and plan status on the right"
                className="w-full h-auto"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
            <figcaption className="mt-5 text-sm italic text-white/55 leading-relaxed text-center">
              <span
                className="not-italic text-[#E8D5B5] text-base"
                style={{ fontFamily: "var(--font-dm-serif), serif" }}
              >
                The brief is the contract.
              </span>{" "}
              Everything Forgewing builds is held to it.
            </figcaption>
          </figure>
        </div>
      </div>
    </section>

    {/* §4 — Forged, not assembled — Forge Dark */}
    <section className="relative bg-[#1E3340] overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14 lg:pt-16 pb-20 sm:pb-28 lg:pb-32">
        <h2
          className="text-5xl sm:text-6xl lg:text-7xl leading-[0.95] text-[#E8732A]"
          style={{ fontFamily: "var(--font-dm-serif), serif" }}
        >
          Forged, not assembled
        </h2>

        {/* Mobile (<lg): image stacks above text, centered.
            Desktop (lg+): image floats right, text wraps around it (square wrap).
            flow-root on the container keeps the float contained so the
            "Your architecture / Your code / Your AWS" block below sits clearly under it. */}
        <div className="mt-12 max-w-4xl lg:[display:flow-root]">
          <Image
            src={forgePour}
            alt="Molten metal pour"
            className="w-[160px] sm:w-[200px] lg:w-[240px] h-auto block mx-auto mb-6 lg:mx-0 lg:mb-4 lg:mr-10 lg:float-left scale-x-[-1]"
            sizes="240px"
          />
          <p className="text-lg sm:text-xl text-[#E8D5B5] leading-snug">
            Engineering purpose built for stability, security, and scalability.
          </p>
          <div className="mt-6 space-y-5 text-base font-light text-white/85 leading-relaxed">
            <p>
              No templates. No starter kits. No boilerplate that someone else&rsquo;s product wore first.
            </p>
            <p>
              Architecture gets decided before a single line of code is written &mdash; services chosen, dependencies ordered, the whole topology fitted to the brief.
            </p>
            <p>
              Code lands in your GitHub. Infrastructure runs in your AWS. Inference runs through Bedrock, which doesn&rsquo;t keep your data. CI/CD ships every change with circuit breakers and rollback already wired in.
            </p>
            <p>
              Your source never leaves your repo. Forgewing learns the shape of it and works from that.
            </p>
          </div>
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
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:pt-16 lg:pb-32">
        <h2
          className="text-4xl sm:text-5xl lg:text-6xl leading-[.6] text-[#1E3340]"
          style={{ fontFamily: "var(--font-dm-serif), serif" }}
        >
          Mission in Flight
        </h2>
        <p className="mt-6 text-lg sm:text-xl text-[#5A7A8A] leading-snug max-w-2xl">
          Wings up. The mission moves.
        </p>

        <ol className="mt-16 flex flex-col lg:flex-row gap-10 lg:gap-0">
          {[
            {
              step: "0",
              title: "Discover",
              note: "if you have a codebase",
              desc: "Point Ani at your repo. No rewrite. No migration. Ani reads what you have and drafts a mission brief to get you in production.",
            },
            {
              step: "1",
              title: "Brief",
              desc: "Refine the brief — or write one from scratch. What the product does. Who it serves. What it has to handle. In your words.",
            },
            {
              step: "2",
              title: "Design",
              desc: "Ani selects the architecture based only on what you need. No short-cuts. No overengineering.",
            },
            {
              step: "3",
              title: "Build",
              desc: "Coordinated agent teams write the code, order the dependencies, run the tests. The forge runs hot.",
            },
            {
              step: "4",
              title: "Deploy",
              desc: "Real AWS infrastructure, in your account. Rollback wired in.",
            },
            {
              step: "5",
              title: "Operate",
              desc: "Around the clock. Problems caught, problems fixed, problems learned. Ani acts within earned trust \u2014 the bigger calls come to you. Every night a sharper edge.",
            },
          ].map((item, idx, arr) => {
            const isLast = idx === arr.length - 1;
            return (
              <li
                key={item.step}
                className="relative flex lg:flex-col gap-5 lg:gap-0 lg:flex-1 lg:pr-5"
              >
                {!isLast && (
                  <span
                    aria-hidden
                    className="lg:hidden absolute left-[1.125rem] top-16 bottom-[-2.5rem] w-px bg-[#E8732A]/30"
                  />
                )}
                <div className="flex-shrink-0 lg:flex lg:items-center lg:gap-3">
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
                    className="text-2xl sm:text-3xl text-[#1E3340] leading-tight"
                    style={{ fontFamily: "var(--font-dm-serif), serif" }}
                  >
                    {item.title}
                  </h3>
                  {item.note && (
                    <p className="mt-1 text-xs italic text-[#5A7A8A] tracking-wide">
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

    {/* §6 — Night Owl — Forge Dark */}
    <section className="relative bg-[#1E3340] overflow-hidden">
      <div className="relative flex flex-col sm:flex-row sm:items-end">
        <div className="sm:w-[65%] px-4 sm:pl-8 xl:pl-16 sm:pr-12 py-12 sm:py-14 max-w-3xl text-left">
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-[#E8D5B5]"
            style={{ fontFamily: "var(--font-dm-serif), serif" }}
          >
            Night Owl
          </h2>
          <p className="mt-6 text-lg sm:text-xl text-white/70 leading-snug max-w-md">
            The watch that doesn&rsquo;t sleep.
          </p>
          <div className="mt-10 space-y-5 text-base font-light text-white/85 leading-relaxed">
            {/* ============================================================
                MOBILE ani-looking-rough (<sm) — float-right, square wrap
                ============================================================
                [NO-M-1] Width ........... width: "Xvw" or "Xpx"
                [NO-M-2] Rotation ........ rotate(Xdeg) inside transform
                [NO-M-3] Scale ........... append " scale(N)" to transform
                [NO-M-4] Mirror H ........ append " scaleX(-1)" to transform
                [NO-M-5] Padding ......... margin: "T R B L"
                                            T = space above (push down)
                                            L = gap from wrapping text
                [NO-M-6] Shape ........... shapeOutside: "margin-box"
                ============================================================ */}
            <div
              className="sm:hidden float-right"
              style={{
                width: "27vw",                                       // [NO-M-1] — size the float box directly (don't use scale)
                // [NO-M-2] rotate only. Avoid scale()/scaleX() here — transforms don't update shape-outside.
                // To mirror or shrink, change [NO-M-1] width or pre-flip the asset.
                transform: "rotate(0deg)",
                transformOrigin: "center center",
                margin: "4rem 0 0 2rem",                                   // [NO-M-5]  T R B L
                // [NO-M-6] silhouette wrap — text hugs the alpha channel of the image
                shapeOutside: `url(${aniLookingRough.src})`,
                shapeMargin: "80px",                                  // [NO-M-7] gap from silhouette (lower = tighter)
              }}
            >
              <Image
                src={aniLookingRough}
                alt=""
                aria-hidden
                className="w-full h-auto"
                sizes="50vw"
              />
            </div>
            <p>Production breaks at 2am. It always does. Ani swoops in.</p>
            <p>
              When something goes wrong, four agents work the problem in concert: a{" "}
              <strong className="font-semibold text-[#E8D5B5]">diagnostician</strong> to find what broke, a{" "}
              <strong className="font-semibold text-[#E8D5B5]">fixer</strong> to write the patch, a{" "}
              <strong className="font-semibold text-[#E8D5B5]">rollback specialist</strong> to back the change out if the fix doesn&rsquo;t hold, and a{" "}
              <strong className="font-semibold text-[#E8D5B5]">health monitor</strong> to make sure the system comes back clean.
            </p>
            <p>Some calls they make on their own. The bigger ones, you make.</p>
            <p>You wake up to a fix, not a fire.</p>
          </div>
          <p className="mt-10 text-sm italic text-white/55 leading-relaxed">
            <span
              className="not-italic text-[#E8D5B5] text-base"
              style={{ fontFamily: "var(--font-dm-serif), serif" }}
            >
              Eyes open.
            </span>{" "}
            Ani doesn&rsquo;t sleep. Neither does production.
          </p>
        </div>
        <div className="hidden sm:flex sm:w-[35%] items-end justify-center sm:justify-start sm:pl-0 sm:pr-8 xl:pr-16">
          <Image
            src={aniLookingRough}
            alt="Ani keeping watch"
            className="sm:w-full max-w-[300px] sm:max-w-[420px] h-auto sm:scale-x-[-1] block"
            sizes="(min-width: 640px) 420px, 300px"
          />
        </div>
      </div>
    </section>

    {/* §7 — Ahead of the line — VS Navy
        ============================================================
        TOPO BG knobs cheat sheet
        ============================================================
        [BG-1] Opacity ........... opacity-50 (0..100, step 5)
        [BG-2] Object fit ........ object-cover | object-contain | object-none
        [BG-3] Object position ... objectPosition: "X% Y%"
                                   X: 0% = left, 50% = center, 100% = right
                                   Y: 0% = top, 50% = center, 100% = bottom
        [BG-4] Scale ............. transform: scale(1.0)  (>1 zooms in, <1 zooms out)
        [BG-5] Offset ............ inset overrides:
                                   top-[Xpx] / left-[Xpx] / right-[Xpx] / bottom-[Xpx]
                                   negative px values bleed past section edges
        [BG-6] Mix blend mode .... mix-blend-overlay | screen | multiply | normal
                                   (compositing against the navy bg)
        [BG-7] Tint .............. parent bg color shows through transparent
                                   pixels — change section bg to retint
        ============================================================ */}
    <section className="relative bg-[#234D70] overflow-hidden">
      {/* [BG] background image layer — absolutely positioned, behind content */}
      <div
        className="absolute inset-0 pointer-events-none opacity-10 mix-blend-normal"
        style={{
          // [BG-5] inset offsets — set to negative to bleed past edges
          top: 0,
          left: 60,
          right: 0,
          bottom: 0,
        }}
      >
        <Image
          src={topo23}
          alt=""
          fill
          aria-hidden
          className="object-cover"
          style={{
            objectPosition: "75% 50%", // [BG-3] X% Y%
            transform: "scale(1.5)",      // [BG-4] zoom factor
          }}
          sizes="100vw"
        />
      </div>

      {/* ============================================================
          ANI TOP-DOWN knobs cheat sheet
          ============================================================
          [TD-1] Anchor ........... change top/left/right/bottom on wrapper.
                                    Use only TWO at a time (e.g. top + left).
                                    Mix vw / vh / % / px freely.
          [TD-2] Width ............ w-[Xvw] / w-[Xpx] — image scales by aspect
          [TD-3] Rotation ......... rotate: "Xdeg"  (negative = counterclockwise)
          [TD-4] Scale ............ append " scale(N)" to transform string
          [TD-5] Translate fine .... translate(Xpx, Ypx) — for sub-pixel nudges
                                    after the anchor lands you in the rough spot
          [TD-6] Opacity .......... opacity-90 / opacity-100
          [TD-7] Mirror H ......... add "scaleX(-1)" to transform
          [TD-8] Visible breakpoint hidden / sm:block / lg:block etc.
          [TD-9] Z-order .......... z-0 sits behind text, z-20 in front.
                                    Default z-10 = above topo, behind text.
          ============================================================ */}
      {/* DESKTOP/TABLET ani (sm+) — absolute positioned, no text wrap */}
      <div
        className="hidden sm:block absolute pointer-events-none z-10"
        style={{
          // [TD-1] anchor — pick two of: top / left / right / bottom
          top: "50%",
          left: "30vw",
          // [TD-2] width — image height auto-scales
          width: "20vw",
          // [TD-3]+[TD-4]+[TD-5]+[TD-7] composed transform.
          // Order matters: translate (centers on anchor) → rotate → scale → mirror
          transform: "translate(-50%, -50%) rotate(300deg) scale(.6)",
          transformOrigin: "center center",
        }}
      >
        <Image
          src={aniTopDown}
          alt=""
          aria-hidden
          className="w-full h-auto opacity-90"
          sizes="40vw"
        />
      </div>

      {/* mobile: max-w-3xl centered. sm+: text column anchored to 40vw, extending right */}
      <div className="relative max-w-3xl mx-auto sm:max-w-none sm:mx-0 sm:ml-[40vw] sm:mr-0 px-4 sm:pr-6 lg:pr-8 py-10 sm:py-16 lg:py-16">
        <h2
          className="text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-[#E8D5B5]"
          style={{ fontFamily: "var(--font-dm-serif), serif" }}
        >
          Ahead of the line
        </h2>
        <p className="mt-6 text-lg sm:text-xl text-white/80 leading-snug">
          Made for forward deployments. Speed without the sprint queue.
        </p>
        <div className="mt-10 space-y-5 text-base font-light text-white/85 leading-relaxed">
          {/* ============================================================
              MOBILE ani (<sm) — float-right, square text wrap
              ============================================================
              [TD-M-1] Width ........... width: "Xvw" or "Xpx"
              [TD-M-2] Rotation ........ rotate(Xdeg) inside transform
              [TD-M-3] Scale ........... append " scale(N)" to transform
              [TD-M-4] Mirror H ........ append " scaleX(-1)" to transform
              [TD-M-5] Padding ......... margin: "T R B L"
                                          T = space above (push down for
                                              "bottom-right" feel)
                                          L = gap from wrapping text
                                          B/R = padding from edges
              [TD-M-6] Shape ........... shapeOutside: "margin-box"
                                          (square wrap — default)
              ============================================================ */}
          <div
            className="sm:hidden float-right"
            style={{
              width: "40vw",                          // [TD-M-1]
              transform: "rotate(60deg) scale(1)",     // [TD-M-2]+[TD-M-3]+[TD-M-4]
              transformOrigin: "center center",
              margin: "0 0 1rem 1rem",                // [TD-M-5]  T R B L
              shapeOutside: "margin-box",             // [TD-M-6]
            }}
          >
            <Image
              src={aniTopDown}
              alt=""
              aria-hidden
              className="w-full h-auto opacity-90"
              sizes="50vw"
            />
          </div>
          <p>
            Startup founders. Tiger teams. Skunkworks. They live on the edge, close to the customer. They know the ground reality.
          </p>
          <p>
            Ani goes with them. The speed and capacity to ship ahead of the line.
          </p>
        </div>
      </div>
    </section>

    {/* §8 — Trust, tempered — Parchment */}
    <section className="relative bg-[#F4F1EC] overflow-hidden">
      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 lg:py-16">
        <h2
          className="text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-[#1E3340]"
          style={{ fontFamily: "var(--font-dm-serif), serif" }}
        >
          Trust, tempered
        </h2>
        <p className="mt-6 text-lg sm:text-xl text-[#5A7A8A] leading-snug">
          Proposal first. Autonomy later. Some doors stay locked.
        </p>
        <div className="mt-10 space-y-5 text-base font-light text-[#1E3340]/80 leading-relaxed">
          <p>Forgewing starts in proposal mode. It recommends. You approve.</p>
          <p>
            As it shows reliable judgment on small things, it earns the room to handle larger things on its own. Four tiers. Always revocable. Always your call.
          </p>
          <p>
            <em>Some doors stay locked.</em> Forgewing will not delete infrastructure, change authentication, or alter security configuration without you. Not at any tier. Not after any amount of trust. Those decisions are yours forever.
          </p>
        </div>
        <p className="mt-10 text-sm italic text-[#5A7A8A] leading-relaxed">
          <span
            className="not-italic text-[#1E3340] text-base"
            style={{ fontFamily: "var(--font-dm-serif), serif" }}
          >
            Trust is earned,
          </span>{" "}
          not assumed.
        </p>
      </div>
    </section>

    {/* §9 — Sharper Every Strike — Forge Dark, essay treatment */}
    <section className="relative bg-[#1E3340] overflow-hidden">
      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 lg:py-16">
        <h2
          className="text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-[#E8732A]"
          style={{ fontFamily: "var(--font-dm-serif), serif" }}
        >
          Sharper Every Strike
        </h2>
        <p className="mt-6 text-lg sm:text-xl text-[#E8D5B5] leading-snug">
          Knowledge that compounds. A system that learns from itself.
        </p>
        <div className="mt-12 space-y-6 text-base font-light text-white/85 leading-relaxed">
          <p>
            Ani is constantly listening and learning. The turns in conversation before a decision is made. The patterns in your traffic. The fingerprint of an incident before it becomes one. The shape of how your customers actually use what you built.
          </p>
          <p>
            Seven layers run continuously &mdash; mapping the codebase, learning the rhythms, clustering the failures, tracing the causes, distilling what&rsquo;s reusable, predicting what comes next, and auditing its own predictions against what really happened.
          </p>
          <p>
            Code generators forget the moment the file is written. Forgewing remembers every mission, every incident, every release. The memory compounds.
          </p>
        </div>
        <p className="mt-14 text-sm italic text-white/55 leading-relaxed">
          <span
            className="not-italic text-[#E8D5B5] text-base"
            style={{ fontFamily: "var(--font-dm-serif), serif" }}
          >
            What the hammer teaches,
          </span>{" "}
          the steel keeps.
        </p>
      </div>
    </section>

    {/* §10 — What Forgewing Can Build — TEMPORARILY HIDDEN, content revisions pending */}
    {/*
    <section className="relative bg-[#234D70] overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 lg:py-16">
        <h2
          className="text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-[#E8732A]"
          style={{ fontFamily: "var(--font-dm-serif), serif" }}
        >
          What Forgewing can build
        </h2>
        <p className="mt-6 text-lg sm:text-xl text-white/80 leading-snug max-w-3xl">
          Frontend, backend, full stack. If you can describe it, Forgewing can take it to production. Four missions, to make it concrete.
        </p>

        <div className="mt-14 grid gap-6 sm:gap-8 sm:grid-cols-2">
          {[
            {
              title: "The First Product",
              desc: "A SaaS MVP for the first paying customer. Auth, billing, the core feature, a dashboard that won\u2019t embarrass you. Forgewing builds it on AWS, ships it to production, and runs it while you start selling.",
            },
            {
              title: "The Internal Tool",
              desc: "Replace the spreadsheet that runs the company. Logins, permissions, an audit trail, a real database behind it. Forgewing builds it, deploys it inside your environment, and keeps it running.",
            },
            {
              title: "The Intelligent Layer",
              desc: "An LLM-powered feature, a recommendation engine, a fraud-detection pipeline. Real ML infrastructure on Bedrock and AWS. Inference, training, and observability included.",
            },
            {
              title: "The Data Pipeline",
              desc: "Ingest from somewhere. Transform. Serve to dashboards or to other systems. Forgewing wires the pipes, runs them, and watches them.",
            },
          ].map((m) => (
            <div
              key={m.title}
              className="rounded-xl border border-[#E8D5B5]/20 bg-white/[0.03] p-7 sm:p-8"
            >
              <h3
                className="text-2xl sm:text-3xl text-[#E8D5B5] leading-tight"
                style={{ fontFamily: "var(--font-dm-serif), serif" }}
              >
                {m.title}
              </h3>
              <p className="mt-4 text-base font-light text-white/80 leading-relaxed">
                {m.desc}
              </p>
            </div>
          ))}
        </div>
        <p
          className="mt-12 text-3xl sm:text-4xl text-[#E8D5B5] leading-tight max-w-3xl"
          style={{ fontFamily: "var(--font-dm-serif), serif" }}
        >
          If you can describe the system, Forgewing can take it to production.
        </p>
      </div>
    </section>
    */}

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

        <FAQ
          items={[
            {
              question: "Do I need to know how to code?",
              answer:
                "No. You need to know what you\u2019re building and who it\u2019s for. Forgewing handles the engineering. If you can write a brief in plain English, you can run a mission.",
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
                "Yes. Point Forgewing at your repo. It reads what you have, drafts a mission brief from it, and starts working with the code already in place. No rewrite, no migration, no re-platforming. Pilots welcome.",
            },
            {
              question: "Isn\u2019t this just another AI vibe coding tool?",
              answer:
                "Vibe tools are an LLM with a chat box. Forgewing is an LLM wrapped in process, CI/CD pipelines, persistent memory, and the organizational knowledge of every mission it has ever run. The AI is one component in a working factory \u2014 not the whole product. That\u2019s why vibe tools build a working prototype on their platform, and Forgewing builds a production system on yours \u2014 and stays with it. Code in your GitHub. Infrastructure in your AWS. CI/CD with rollback wired in. After launch, a four-agent watch crew handles incidents around the clock. They act within the trust they\u2019ve earned. The bigger calls come to you. Every mission makes the system sharper at running your software. Knowledge compounds. Vibe tools forget the moment the file is written.",
            },
            {
              question: "Where do other tools stop?",
              answer:
                "Most tools in this space help you start. They write a function. They ship a prototype. They get you to a demo. That\u2019s the easy half. Forgewing is built for the other half \u2014 taking what you started across the gap to production, and keeping it there. Stable. Secure. Watched through the night.",
            },
            {
              question: "What does \u201cearned trust\u201d actually mean?",
              answer:
                "Forgewing starts in proposal mode \u2014 it recommends, you approve. As it proves it can handle small decisions reliably, it earns room to handle larger ones on its own. Four tiers. Revocable at any time. Some actions \u2014 deleting infrastructure, changing authentication, altering security configuration \u2014 stay locked behind your approval forever, no matter the tier.",
            },
            {
              question: "What happens when something breaks?",
              answer:
                "A four-agent incident team activates: one diagnoses, one fixes, one rolls back if the fix doesn\u2019t hold, one verifies the system is healthy after. You wake up to a postmortem, not a page.",
            },
            {
              question: "Can I try Forgewing before committing?",
              answer:
                "Yes. Your first mission is on us. 21 days, no card. Run a real mission from brief to production. Decide after.",
            },
            {
              question: "What if I already have engineers?",
              answer:
                "Keep them. Your team can use whatever IDE they want. Forgewing works at a different level: owning architecture, deployment, operations, and incident response. If your engineers\u2019 time is worth more than the work Forgewing handles, this is leverage, not replacement.",
            },
          ]}
        />
      </div>
    </section>

    {/* §12 — Begin your first mission — Forge Dark */}
    <section className="relative bg-[#1E3340] overflow-hidden">
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 lg:py-16 text-center">
        <h2
          className="text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-[#E8732A]"
          style={{ fontFamily: "var(--font-dm-serif), serif" }}
        >
          The iron is hot
        </h2>
        <p className="mt-6 text-lg sm:text-xl text-[#E8D5B5] leading-snug max-w-2xl mx-auto">
          First missions are open. 21 days. No card.
        </p>
        <p className="mt-8 text-base font-light text-white/80 leading-relaxed max-w-2xl mx-auto">
          Bring the brief. We&rsquo;ll bring the rest.
        </p>
        <div className="mt-10">
          <a
            href="/waitlist"
            className="inline-flex items-center justify-center rounded-full bg-[#E8732A] px-8 py-3.5 text-base font-semibold text-white transition-colors hover:bg-[#d0651e] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E8732A] focus-visible:ring-offset-2"
          >
            Begin your first mission
          </a>
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
