import type { Metadata } from "next";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Join the Radix Waitlist",
  description:
    "Be first in line when Radix launches. Get early access to GPU scheduling optimization and LLM governance.",
  alternates: { canonical: `${SITE.url}/waitlist` },
  keywords: [...SITE.keywords, "waitlist", "early access", "beta"],
  openGraph: {
    title: "Join the Radix Waitlist",
    description:
      "Be first in line when Radix launches. Get early access to GPU scheduling optimization and LLM governance.",
    url: `${SITE.url}/waitlist`,
    type: "website",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Radix Waitlist" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Join the Radix Waitlist",
    description:
      "Be first in line when Radix launches. Get early access to GPU scheduling optimization and LLM governance.",
    images: ["/og.jpg"],
  },
};

export default function WaitlistLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
