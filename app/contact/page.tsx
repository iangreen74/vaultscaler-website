// Route: /contact — one verified way to reach VaultScaler: email.
import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact — VaultScaler",
  description: "Write to VaultScaler about Takes or anything else.",
  alternates: { canonical: `${SITE.url}/contact/` },
};

export default function Contact() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-2xl mx-auto px-5 sm:px-8">
        <p className="eyebrow">Contact</p>
        <h1 className="mt-6 font-display font-light text-4xl md:text-5xl text-bone">Write to us</h1>
        <p className="mt-6 text-lg text-muted leading-relaxed">
          Questions about Takes, problems, suggestions, or anything else:
        </p>
        <p className="mt-4 text-2xl">
          <a href={`mailto:${SITE.email}`} className="text-bone underline underline-offset-4 hover:text-muted">{SITE.email}</a>
        </p>
        <p className="mt-8 text-muted leading-relaxed">
          A person reads every message. For help with Takes, the <Link href="/takes/support/" className="text-bone underline underline-offset-4 hover:text-muted">support page</Link> may
          answer your question straight away. VaultScaler is based in {SITE.location}.
        </p>
      </div>
    </section>
  );
}
