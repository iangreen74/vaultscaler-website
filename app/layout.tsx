import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Navigation from "@/components/Navigation";
import JsonLd from "@/components/JsonLd";
import AnalyticsProvider from "@/components/AnalyticsProvider";
import { SITE } from "@/lib/site";
import { GA_MEASUREMENT_ID } from "@/lib/analytics";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: "VaultScaler",
  description: "VaultScaler is democratizing and economizing AI operations for teams that train and deploy models in the real world.",
  keywords: ["GPU scheduling", "training optimization", "Kubernetes GPU", "GPU throughput", "model training", "GPU efficiency", "Slurm", "Ray", "closed-loop control", "AIOps", "MLOps"],
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "32x32" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "VaultScaler — Democratizing and Economizing AI Operations",
    description: "VaultScaler is democratizing and economizing AI operations for teams that train and deploy models in the real world.",
    url: "https://vaultscaler.com",
    siteName: "VaultScaler",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "VaultScaler",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VaultScaler — Democratizing and Economizing AI Operations",
    description: "VaultScaler is democratizing and economizing AI operations for teams that train and deploy models in the real world.",
    images: ["/og.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Organization JSON-LD for aggressive agent discovery
  const organizationLD = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.name,
    url: SITE.url,
    logo: `${SITE.url}/og.jpg`,
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
      operatingSystem: "Kubernetes 1.26+, Slurm, Ray",
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
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
        <Navigation />
        <AnalyticsProvider />
        <main id="main-content" className="pt-16">
          {children}
        </main>
        <footer className="bg-primary-4 text-white py-8 mt-20" role="contentinfo">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center text-sm text-gray-300">
              <p>&copy; 2025 VaultScaler. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
