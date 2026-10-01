// Route: /takes/privacy — what the app keeps on the Mac, and every kind of network activity, kept
// separate. Must stay true of the shipped app (docs/RELEASE-READINESS.md in the Takes repository).
import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/site";
import { TakesPage, TakesSubnav } from "@/components/TakesChrome";

export const metadata: Metadata = {
  title: "Takes — privacy",
  description: "Takes records and transcribes on your Mac. What stays on your Mac, and the only times Takes uses the internet: checking for and downloading updates.",
  alternates: { canonical: `${SITE.url}/takes/privacy/` },
};

export default function TakesPrivacy() {
  return (
    <TakesPage>
      <TakesSubnav current="/takes/privacy/" />
      <div className="max-w-3xl mx-auto px-5 sm:px-8 pt-14 pb-20 text-[1.1rem] leading-relaxed">
        <h1 className="text-[2.3rem] sm:text-[2.8rem] font-normal leading-tight">Privacy</h1>

        <section className="mt-10" aria-labelledby="mac">
          <h2 id="mac" className="text-[1.5rem] font-normal">What stays on your Mac</h2>
          <ul className="mt-4 space-y-3 list-disc pl-6 text-paper-soft">
            <li>Your recordings, and your writing: takes, corrections, manuscripts and their history.</li>
            <li>Transcription. The speech recognition model is part of the app and runs on your Mac; what you say is never sent anywhere to be turned into text.</li>
            <li>The app’s own logs, which record timings, errors and the names of project folders — not what you say or write in your takes.</li>
          </ul>
          <p className="mt-4 text-paper-soft">
            Takes has no account, no sign-in, no analytics and no crash reporting. Inside the app, its window talks to a small
            server on your own Mac; that server accepts connections only from your Mac.
          </p>
        </section>

        <section className="mt-10" aria-labelledby="net">
          <h2 id="net" className="text-[1.5rem] font-normal">When Takes uses the internet</h2>
          <dl className="mt-4 space-y-5">
            <div>
              <dt className="font-medium">Checking for updates</dt>
              <dd className="text-paper-soft">
                When you choose Check for Updates — or automatically, only if you agree when Takes asks — Takes downloads a small file
                from vaultscaler.com that lists the latest version. The request carries what any download does: your internet
                address, and the version of Takes and of macOS. Takes sends nothing about you or your writing.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Downloading an update</dt>
              <dd className="text-paper-soft">
                If you accept an update, Takes downloads it from vaultscaler.com and checks its signature before installing it.
              </dd>
            </div>
            <div>
              <dt className="font-medium">Nothing else</dt>
              <dd className="text-paper-soft">
                Takes makes no other connections. (macOS itself checks a newly downloaded app’s signature with Apple the first time
                you open it.) If you use your own backup tools — Time Machine, a cloud drive — they copy your writing according to
                their own settings, not Takes’s.
              </dd>
            </div>
          </dl>
        </section>

        <section className="mt-10" aria-labelledby="site">
          <h2 id="site" className="text-[1.5rem] font-normal">This website, and downloading Takes</h2>
          <p className="mt-4 text-paper-soft">
            vaultscaler.com is served by Amazon Web Services (S3 and CloudFront). Request logging is not turned on for the site, and
            it uses no analytics or tracking scripts. Downloads of Takes and its update files come from the same place. See the{" "}
            <Link href="/privacy/">website privacy notice</Link>.
          </p>
        </section>

        <p className="mt-10 text-paper-soft">
          Questions: <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.
        </p>
      </div>
    </TakesPage>
  );
}
