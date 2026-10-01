// Route: /takes/support — practical answers, and the one verified way to reach us.
import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/site";
import { TakesPage, TakesSubnav } from "@/components/TakesChrome";

export const metadata: Metadata = {
  title: "Takes — support",
  description: "Help with Takes: microphone permission, where your writing is kept, backups, recognition mistakes, updates and uninstalling.",
  alternates: { canonical: `${SITE.url}/takes/support/` },
};

const QA: { q: string; a: React.ReactNode }[] = [
  {
    q: "Takes can’t hear me",
    a: (
      <>
        The first recording asks for permission to use the microphone. If you declined, open System Settings → Privacy &amp; Security →
        Microphone and turn on Takes. Takes uses the input chosen in System Settings → Sound → Input. While recording, the level
        meter beside the clock should move when you speak; every take can be played back to check what was captured.
      </>
    ),
  },
  {
    q: "Where is my writing kept?",
    a: (
      <>
        On your Mac, in <code>~/Library/Application Support/Takes/Writing</code>: one folder per project, with your takes as plain text
        and JSON files and your recordings beside them. The Library shows the folder and can open it in Finder.
      </>
    ),
  },
  {
    q: "How do I back it up?",
    a: (
      <>
        Takes saves as you go and keeps a history inside each project, but that is not a backup: it lives on the same Mac. Use Time
        Machine, or copy the Writing folder somewhere else from time to time. Takes does not upload your writing anywhere.
      </>
    ),
  },
  {
    q: "The words came out wrong",
    a: (
      <>
        Select the take and choose Play to hear the original recording. Choose Transcribe again to recognise it afresh, or Edit to
        correct the words yourself — your correction becomes a new version, and the original transcription is kept.
      </>
    ),
  },
  {
    q: "A recording was interrupted",
    a: (
      <>
        If Takes or your Mac stops during a recording, what had been saved (all but about the last second) is recovered the next time
        Takes opens, marked as an interrupted recording. Play it, and choose Transcribe again for the words.
      </>
    ),
  },
  {
    q: "Updates",
    a: (
      <>
        Choose Takes → Check for Updates. An update installs when you quit Takes, and waits if you are recording, saving, or have a
        correction open. Updates are signed; Takes refuses one that isn’t. See the <Link href="/takes/release-notes/">release notes</Link>.
      </>
    ),
  },
  {
    q: "Uninstalling",
    a: (
      <>
        Quit Takes and drag it from Applications to the Trash. Your writing stays in <code>~/Library/Application Support/Takes</code>{" "}
        until you remove it yourself.
      </>
    ),
  },
  {
    q: "Reporting a problem",
    a: (
      <>
        Write to <a href={`mailto:${SITE.email}`}>{SITE.email}</a> with what happened and your version of Takes (Takes → About Takes). If
        asked, the log in <code>~/Library/Logs/Takes</code> helps: it records timings, errors, and the names of project folders —
        not the words you have written or spoken. Please don’t send your writing or recordings unless you choose to.
      </>
    ),
  },
];

export default function Support() {
  return (
    <TakesPage>
      <TakesSubnav current="/takes/support/" />
      <div className="max-w-3xl mx-auto px-5 sm:px-8 pt-14 pb-20">
        <h1 className="text-[2.3rem] sm:text-[2.8rem] font-normal leading-tight">Support</h1>
        <p className="mt-5 text-[1.2rem] leading-relaxed text-paper-soft">
          Questions, problems and suggestions: write to <a href={`mailto:${SITE.email}`}>{SITE.email}</a>. A person reads every message.
        </p>
        <div className="mt-10 divide-y divide-paper-rule border-y border-paper-rule">
          {QA.map((x) => (
            <section key={x.q} className="py-6">
              <h2 className="text-[1.35rem] font-medium">{x.q}</h2>
              <p className="mt-2 text-[1.1rem] leading-relaxed text-paper-soft">{x.a}</p>
            </section>
          ))}
        </div>
      </div>
    </TakesPage>
  );
}
