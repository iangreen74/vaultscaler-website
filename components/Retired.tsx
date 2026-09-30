// The consultancy pages are retired: old links land here instead of on an offer that no longer exists.
import Link from "next/link";
import { SITE } from "@/lib/site";

export const retiredMetadata = (_path: string) => ({
  title: "VaultScaler — page retired",
  description: "VaultScaler no longer offers consulting services. It makes software; its first product is Takes.",
  alternates: { canonical: `${SITE.url}/` },
  robots: { index: false, follow: true },
});

export default function Retired() {
  return (
    <section className="min-h-[60vh] flex items-center">
      <div className="max-w-2xl mx-auto px-5 sm:px-8 py-24">
        <p className="eyebrow">Page retired</p>
        <h1 className="mt-6 font-display font-light text-4xl text-bone">VaultScaler no longer offers consulting services.</h1>
        <p className="mt-6 text-muted leading-relaxed">
          VaultScaler now makes software. Its first product is <Link href="/takes/" className="text-bone underline underline-offset-4 hover:text-muted">Takes</Link>,
          a writing workspace for the Mac built around speaking. For anything else, write to{" "}
          <a href={`mailto:${SITE.email}`} className="text-bone underline underline-offset-4 hover:text-muted">{SITE.email}</a>.
        </p>
      </div>
    </section>
  );
}
