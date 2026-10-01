// Route: /takes — the product page. Every statement here must be true of the app as it is; no
// download until a verified release exists (TAKES.downloadAvailable).
import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { SITE, TAKES } from "@/lib/site";
import { TakesPage, TakesSubnav, Shot, Availability } from "@/components/TakesChrome";

const DESC =
  "Takes is a writing workspace built around speaking. Say a thought and keep it as a take — the words and the recording. Arrange takes into a manuscript, and come back to your work where you left it. Transcription happens on your Mac.";

export const metadata: Metadata = {
  title: "Takes — a writing workspace built around speaking",
  description: DESC,
  alternates: { canonical: `${SITE.url}/takes/` },
  openGraph: { title: "Takes — a writing workspace built around speaking", description: DESC, url: `${SITE.url}/takes/`, type: "website", images: ["/takes/writing.jpg"] },
  twitter: { card: "summary_large_image", title: "Takes — a writing workspace built around speaking", description: DESC, images: ["/takes/writing.jpg"] },
};

const STEPS = [
  {
    n: "1",
    title: "Speak",
    body: "Choose Record, or press Space, and say the thought as it comes. Takes shows “Starting microphone…” until it is really recording, then a running clock and a level meter. The words appear a moment after each pause, and the recording is saved as you go, about once a second.",
  },
  {
    n: "2",
    title: "Keep your takes",
    body: "Every take is kept: the words as they were recognised, each correction you type as a new version, and the original recording. When recognition gets a word wrong, play the take back and hear what you said. Nothing is thrown away for being quiet, short or unrecognised.",
  },
  {
    n: "3",
    title: "Arrange a manuscript",
    body: "Send the takes you want into the manuscript beside them, put them in order, and add chapter and section headings. Change the wording in the manuscript without touching the take it came from. Export the manuscript as plain Markdown.",
  },
  {
    n: "4",
    title: "Return to your work",
    body: "Takes opens where you left off: the last project, ready to write. Each book, essay or article is its own project in the Library, with a history of earlier versions you can go back to.",
  },
];

const LIMITS = [
  "Transcription is recognition, not a guarantee. Names, quiet speech and noisy rooms produce mistakes; that is why the recording is always kept.",
  "It is not hands-free. You speak to write, and use the keyboard and pointer to correct, arrange and export.",
  "English only, for now.",
  "Nothing said before recording has started can be captured. After Record, wait for the clock.",
  "Takes saves as it goes, but no software can promise zero loss: a sudden power cut can lose the last few seconds. Keep your own backups, such as Time Machine.",
];

export default function TakesProductPage() {
  const appLD = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Takes",
    applicationCategory: "ProductivityApplication",
    operatingSystem: "macOS 13 or later (Apple silicon)",
    description: DESC,
    url: `${SITE.url}/takes/`,
    publisher: { "@type": "Organization", name: SITE.name, url: `${SITE.url}/` },
  };
  return (
    <TakesPage>
      <JsonLd data={appLD} />
      <TakesSubnav current="/takes/" />
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        <header className="pt-14 sm:pt-20 pb-6 max-w-3xl">
          <p className="text-[15px] tracking-[0.18em] uppercase text-paper-soft">Takes</p>
          <h1 className="mt-5 text-[2.4rem] sm:text-[3.4rem] leading-[1.08] font-normal tracking-[-0.01em]">
            {TAKES.headline}
          </h1>
          <p className="mt-6 text-[1.25rem] sm:text-[1.4rem] leading-relaxed text-paper-soft">
            Say a thought out loud and Takes keeps it: the words, and the recording they came from. Gather the takes you want into a
            manuscript, arrange them, and come back tomorrow to where you left off.
          </p>
          <div className="mt-8 max-w-xl">
            <Availability status={TAKES.previewStatus} platforms={TAKES.platforms} />
          </div>
        </header>

        <Shot
          src="/takes/writing.jpg"
          priority
          alt="The Takes window. On the left, a column of spoken takes with one selected; on the right, the manuscript with a chapter heading, a section heading and paragraphs arranged from the takes."
          caption="Your takes on the left, as you said them; the manuscript on the right, as you arrange it. (Example writing.)"
        />

        <section aria-labelledby="how" className="py-10">
          <h2 id="how" className="text-[1.9rem] sm:text-[2.3rem] font-normal">How it works</h2>
          <ol className="mt-8 grid gap-10 sm:grid-cols-2">
            {STEPS.map((s) => (
              <li key={s.n} className="border-t border-paper-rule pt-5">
                <p className="text-[15px] text-paper-soft" aria-hidden="true">{s.n}</p>
                <h3 className="mt-1 text-[1.45rem] font-medium">{s.title}</h3>
                <p className="mt-3 text-[1.1rem] leading-relaxed text-paper-soft">{s.body}</p>
              </li>
            ))}
          </ol>
        </section>

        <Shot
          src="/takes/recording.jpg"
          alt="Takes while recording: a red Stop button, “Recording 0:03” with a level meter in the top bar, and the new take appearing at the bottom of the takes column."
          caption="While you speak: Stop, the capture clock and the input level — taken from the recording itself. (Example writing.)"
        />

        <section aria-labelledby="private" className="py-10 grid gap-8 sm:grid-cols-[1fr_1.2fr] items-start">
          <h2 id="private" className="text-[1.9rem] sm:text-[2.3rem] font-normal">Private by design</h2>
          <div className="text-[1.1rem] leading-relaxed text-paper-soft space-y-4">
            <p>
              Your recordings and your writing stay on your Mac. The speech recognition runs on your Mac too, so what you say is
              never sent anywhere to be transcribed. There is no account and no analytics in the app.
            </p>
            <p>
              Takes connects to the internet only to check for and download updates, and it asks before checking automatically.
              {" "}<Link href="/takes/privacy/">What goes where, in detail</Link>.
            </p>
          </div>
        </section>

        <Shot
          src="/takes/library.jpg"
          width={1600}
          height={625}
          alt="The Takes Library: two projects, “Tide Tables” (open, edited today, ten takes, five paragraphs in the manuscript) and “Letters from the Island”, each with Open, Rename and Archive."
          caption="The Library: each book, essay or article is its own project. (Example writing.)"
        />

        <section aria-labelledby="honest" className="py-10">
          <h2 id="honest" className="text-[1.9rem] sm:text-[2.3rem] font-normal">What to expect</h2>
          <ul className="mt-6 space-y-4 text-[1.1rem] leading-relaxed text-paper-soft list-disc pl-6 max-w-3xl">
            {LIMITS.map((l) => <li key={l}>{l}</li>)}
          </ul>
        </section>

        <section aria-labelledby="systems" className="py-10 border-t border-paper-rule">
          <h2 id="systems" className="text-[1.6rem] font-normal">Supported systems</h2>
          <p className="mt-4 text-[1.1rem] leading-relaxed text-paper-soft max-w-3xl">
            {TAKES.platforms}. {TAKES.notSupported} About 600 MB of disk space for the app and its speech model, plus room for your
            recordings (about 4 MB per minute of speaking: the original recording, and the copy used for transcription).
          </p>
          <p className="mt-6 text-[1.1rem] leading-relaxed text-paper-soft max-w-3xl">
            See the <Link href="/takes/release-notes/">release notes</Link>, get <Link href="/takes/support/">support</Link>, or write to{" "}
            <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.
          </p>
        </section>
        <div className="pb-20" />
      </div>
    </TakesPage>
  );
}
