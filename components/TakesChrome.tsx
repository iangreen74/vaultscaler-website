// Shared pieces for the Takes pages: the paper ground, a small sub-navigation, and a figure with
// an honest caption. Screenshots are of the real app, with synthetic example writing only.
import Link from "next/link";
import Image from "next/image";

export function TakesPage({ children }: { children: React.ReactNode }) {
  return <div className="takes-page bg-paper text-paper-ink font-takes">{children}</div>;
}

const SUB = [
  { href: "/takes/", label: "Takes" },
  { href: "/takes/release-notes/", label: "Release notes" },
  { href: "/takes/support/", label: "Support" },
  { href: "/takes/privacy/", label: "Privacy" },
];

export function TakesSubnav({ current }: { current: string }) {
  return (
    <nav aria-label="Takes" className="border-b border-paper-rule">
      <ul className="max-w-5xl mx-auto px-5 sm:px-8 flex flex-wrap gap-x-7 gap-y-2 py-4 text-[15px]">
        {SUB.map((l) => (
          <li key={l.href}>
            <Link
              href={l.href}
              aria-current={l.href === current ? "page" : undefined}
              className={l.href === current ? "text-paper-ink font-semibold no-underline" : "text-paper-soft no-underline hover:underline"}
              style={{ textDecoration: l.href === current ? "none" : undefined }}
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export function Shot({ src, alt, caption, width = 1600, height = 974, priority = false }: { src: string; alt: string; caption: string; width?: number; height?: number; priority?: boolean }) {
  return (
    <figure className="my-10">
      <div className="rounded-xl overflow-hidden border border-paper-rule shadow-[0_18px_50px_-24px_rgba(20,19,17,0.35)]">
        <Image src={src} alt={alt} width={width} height={height} priority={priority} className="w-full h-auto" sizes="(min-width: 1024px) 960px, 100vw" />
      </div>
      <figcaption className="mt-3 text-[15px] italic text-paper-soft">{caption}</figcaption>
    </figure>
  );
}

// Where a download will go once a verified release exists. Until then: a plain statement, no button.
export function Availability({ status, platforms }: { status: string; platforms: string }) {
  return (
    <div className="rounded-lg border border-paper-rule bg-paper-deep px-5 py-4 text-[16px] leading-relaxed" role="status">
      <p className="font-semibold">Not available to download yet.</p>
      <p className="text-paper-soft">{status.replace(/\s*It is not available to download yet\.?/, "")} It will run on {platforms}.</p>
    </div>
  );
}
