// Route: /takes/release-notes — what is in each release, and what is known not to work. The first
// preview is described as in preparation until a verified release is published.
import type { Metadata } from "next";
import Link from "next/link";
import { SITE, TAKES } from "@/lib/site";
import { TakesPage, TakesSubnav } from "@/components/TakesChrome";

export const metadata: Metadata = {
  title: "Takes — release notes",
  description: "What is in each release of Takes, what it runs on, and what is known not to work yet.",
  alternates: { canonical: `${SITE.url}/takes/release-notes/` },
};

const NEW = [
  "Speak to write: Record (or Space) from anywhere; the words appear after each pause.",
  "Every recording is kept. The original audio is saved about once a second while you speak, and a take is never set aside because it was quiet, short, or no words were recognised.",
  "Play any take’s original recording, and transcribe it again from that recording.",
  "If a recording is interrupted (a crash, or the Mac shutting down), what was saved is recovered the next time Takes opens, and marked as interrupted.",
  "Clear warnings if the microphone stops delivering sound, or the recording can’t be saved.",
  "Projects in a Library, a history of earlier versions, and a manuscript you arrange from your takes, with chapter and section headings.",
  "Correct wording with visible Save and Cancel; delete a paragraph from the manuscript with Undo.",
  "Export the manuscript as Markdown.",
  "Check for Updates, with signed updates that install when you quit, never in the middle of a recording or an unsaved change.",
];

const KNOWN = [
  "The first time Takes opens, and after each update, the speech engine takes up to a minute to get ready. You can record straight away; the words appear when it is ready.",
  "Anything said before the recording clock starts is not captured. The first recording asks for microphone permission.",
  "English only. Recognition makes mistakes with names, quiet speech and noise; the recording is kept so you can check.",
  "Mac with Apple silicon only. Intel Macs, Windows and Linux are not supported.",
];

export default function ReleaseNotes() {
  return (
    <TakesPage>
      <TakesSubnav current="/takes/release-notes/" />
      <div className="max-w-3xl mx-auto px-5 sm:px-8 pt-14 pb-20">
        <h1 className="text-[2.3rem] sm:text-[2.8rem] font-normal leading-tight">Release notes</h1>

        <section aria-labelledby="preview" className="mt-10">
          <h2 id="preview" className="text-[1.6rem] font-normal">Takes 0.4 — first Mac preview</h2>
          <p className="mt-2 text-[1rem] italic text-paper-soft">In preparation. {TAKES.previewStatus}</p>
          <h3 className="mt-8 text-[1.2rem] font-medium">In this preview</h3>
          <ul className="mt-3 space-y-3 list-disc pl-6 text-[1.1rem] leading-relaxed text-paper-soft">
            {NEW.map((x) => <li key={x}>{x}</li>)}
          </ul>
          <h3 className="mt-8 text-[1.2rem] font-medium">Known limitations</h3>
          <ul className="mt-3 space-y-3 list-disc pl-6 text-[1.1rem] leading-relaxed text-paper-soft">
            {KNOWN.map((x) => <li key={x}>{x}</li>)}
          </ul>
          <h3 className="mt-8 text-[1.2rem] font-medium">Your writing across versions</h3>
          <p className="mt-3 text-[1.1rem] leading-relaxed text-paper-soft">
            Updates never move or rewrite your writing. Versions of Takes read what earlier and later versions wrote; a newer
            version may keep extra information that an older one ignores. See <Link href="/takes/support/">Support</Link> for
            where your writing is kept and how to back it up.
          </p>
        </section>
      </div>
    </TakesPage>
  );
}
