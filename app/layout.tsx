import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import JsonLd from "@/components/JsonLd";
import AnalyticsProvider from "@/components/AnalyticsProvider";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: "VaultScaler - GPU Optimization & LLM Governance Platform",
  description: "Optimize GPU training throughput up to 21% and control LLM costs with complete governance. AI operations platform for Kubernetes. Deploy in minutes.",
  keywords: ["GPU optimization", "LLM governance", "AI Operations Platform", "GPU scheduler", "model training", "GPU cost reduction", "Kubernetes GPU", "AI cost control", "MLOps", "AIOps"],
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "32x32" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "VaultScaler - GPU Optimization & LLM Governance Platform",
    description: "Up to 21% GPU throughput gains. Complete LLM governance. Deploy in minutes on Kubernetes.",
    url: "https://vaultscaler.com",
    siteName: "VaultScaler",
    images: [
      {
        url: "/og/vaultscaler.png",
        width: 1200,
        height: 630,
        alt: "VaultScaler - GPU Optimization & LLM Governance",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VaultScaler - GPU Optimization & LLM Governance Platform",
    description: "Up to 21% GPU throughput gains. Complete LLM governance. Deploy in minutes on Kubernetes.",
    images: ["/og/vaultscaler.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const UMAMI_WEBSITE_ID = process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID;
  const UMAMI_SRC = process.env.NEXT_PUBLIC_UMAMI_SRC;
  const UMAMI_HOST_URL = process.env.NEXT_PUBLIC_UMAMI_HOST_URL;
  const UMAMI_DOMAINS = process.env.NEXT_PUBLIC_UMAMI_DOMAINS;

  // Organization JSON-LD for aggressive agent discovery
  const organizationLD = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.name,
    url: `${SITE.url}/`,
    logo: `${SITE.url}/og/vaultscaler.png`,
    description: SITE.description,
    email: SITE.email,
    foundingDate: "2024",
    founder: [
      {
        "@type": "Person",
        name: "Ian Green",
        jobTitle: "Co-Founder & CEO",
        description: "AI platform engineer specializing in Kubernetes and Terraform-driven GPU workload management",
      },
      {
        "@type": "Person",
        name: "Ben Pruess",
        jobTitle: "Co-Founder, COO & President",
        description: "Enterprise solutions leader with 20 years in healthcare tech",
      },
    ],
    owns: {
      "@type": "SoftwareApplication",
      name: SITE.products.join(" & "),
      applicationCategory: "DevOps/AI Operations",
      operatingSystem: "Kubernetes 1.26+",
      description: SITE.description,
      featureList: [
        // Radix Core - Training Optimization
        "Up to 21% GPU infrastructure cost savings",
        "GPU fairness and administration controls",
        "Closed-loop GPU scheduling optimization",
        "Multi-dimensional resource balancing (memory, compute, power)",
        "No stack changes required - Helm chart deployment",
        "Leadership-ready performance dashboards",
        // Radix Studio - Inference Governance
        "LLM orchestration and pipeline management",
        "Multi-model registry for any AI provider",
        "Built-in governance and audit trails",
        "Compliance policy enforcement",
        "Content filtering and budget controls",
        "Real-time execution traces and visibility",
        "Cost-aware LLM routing",
        "Bring Your Own GPU (BYOG) support",
        "Solve LLM vendor lock-in",
      ],
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        description: "14-day full trial, no credit card required",
      },
    },
    keywords: SITE.keywords.join(", "),
    sameAs: [
      "https://github.com/iangreen74",
    ],
  };

  return (
    <html lang="en">
      <head>
        <JsonLd data={organizationLD} />
      </head>
      <body className="antialiased">
        {/* Skip to main content link for keyboard accessibility (WCAG 2.4.1) */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary-1 focus:text-white focus:rounded focus:outline-none focus:ring-2 focus:ring-white"
        >
          Skip to main content
        </a>
        {UMAMI_WEBSITE_ID && UMAMI_SRC ? (
          <Script
            defer
            src={UMAMI_SRC}
            data-website-id={UMAMI_WEBSITE_ID}
            data-do-not-track="true"
            data-exclude-search="true"
            data-exclude-hash="true"
            {...(UMAMI_HOST_URL ? { "data-host-url": UMAMI_HOST_URL } : {})}
            {...(UMAMI_DOMAINS ? { "data-domains": UMAMI_DOMAINS } : {})}
          />
        ) : null}
        <Navigation />
        <AnalyticsProvider />
        <main id="main-content" className="pt-16">
          {children}
        </main>
        <footer className="bg-primary-3 text-white py-8 mt-20" role="contentinfo">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center text-sm text-gray-300">
              <p>&copy; 2026 VaultScaler. All rights reserved.</p>
              <p className="mt-2">
                <Link href="/privacy/" className="hover:text-white transition-colors">Privacy Policy</Link>
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
