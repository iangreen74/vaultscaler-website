"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { PRODUCTS, type ProductTag } from "@/lib/site";
import { trackNavClick } from "@/lib/analytics";
import aniMascot from "./Forgewing-Ani-Mascot-Transparent.png";

// Forgewing keeps its own header (the global Navigation hides itself on /forgewing).
// This replicates the global Products dropdown's behavior + data source (PRODUCTS),
// restyled to match Forgewing's parchment/forge palette.

function Badge({ tag }: { tag: ProductTag }) {
  const available = tag === "Available now";
  return (
    <span
      className={`inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wide px-2 py-0.5 rounded-full ${
        available ? "bg-[#E8732A]/15 text-[#1E3340]" : "bg-[#1E3340]/[0.06] text-[#5A7A8A]"
      }`}
    >
      <span className={`w-1.5 h-1.5 rounded-full ${available ? "bg-[#E8732A]" : "bg-[#5A7A8A]/60"}`} />
      {tag}
    </span>
  );
}

export default function ForgewingHeader() {
  const pathname = usePathname();
  const [productsOpen, setProductsOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/forgewing/" ? !!pathname?.startsWith("/forgewing") : pathname === href;

  return (
    <header className="sticky top-0 z-40 border-b border-[#E0DCD6] bg-white/85 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-14 sm:h-16 flex items-center justify-between gap-4">
        {/* Left — brand */}
        <div className="flex items-baseline gap-2.5 min-w-0">
          <Link href="/forgewing/" aria-label="Forgewing home" className="flex items-baseline gap-2.5">
            <Image
              src={aniMascot}
              alt=""
              width={36}
              height={36}
              priority
              className="h-7 sm:h-8 w-auto self-center"
            />
            <span
              className="text-xl sm:text-2xl leading-none text-[#E8732A]"
              style={{ fontFamily: "var(--font-dm-serif), serif" }}
            >
              Forgewing
            </span>
          </Link>
          <Link
            href="/"
            onClick={() => trackNavClick("Forgewing Header — VaultScaler home")}
            aria-label="VaultScaler home"
            className="hidden sm:inline text-xs text-[#5A7A8A] leading-none no-underline hover:text-[#1E3340] transition-colors"
          >
            by VaultScaler
          </Link>
        </div>

        {/* Right — desktop nav */}
        <div className="hidden md:flex items-center gap-7">
          {/* Products dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setProductsOpen(true)}
            onMouseLeave={() => setProductsOpen(false)}
          >
            <button
              type="button"
              className="flex items-center gap-1 text-sm text-[#1E3340] hover:text-[#E8732A] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E8732A] focus-visible:ring-offset-2 rounded"
              aria-expanded={productsOpen}
              aria-haspopup="true"
              onClick={() => setProductsOpen((v) => !v)}
              onFocus={() => setProductsOpen(true)}
            >
              Products
              <svg
                className={`w-4 h-4 transition-transform ${productsOpen ? "rotate-180" : ""}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {productsOpen && (
              <div className="absolute right-0 top-full pt-2 w-64">
                <div className="bg-white rounded-xl shadow-lg border border-[#E0DCD6] py-2">
                  {PRODUCTS.map((p) => (
                    <Link
                      key={p.href}
                      href={p.href}
                      aria-current={isActive(p.href) ? "page" : undefined}
                      onClick={() => {
                        trackNavClick(p.name);
                        setProductsOpen(false);
                      }}
                      className={`flex items-center justify-between gap-3 px-4 py-2.5 transition-colors hover:bg-[#F4F1EC] ${
                        isActive(p.href) ? "bg-[#F4F1EC]" : ""
                      }`}
                    >
                      <span
                        className={`text-sm font-medium ${
                          isActive(p.href) ? "text-[#E8732A]" : "text-[#1E3340]"
                        }`}
                      >
                        {p.name}
                      </span>
                      <Badge tag={p.tag} />
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Link
            href="/contact/"
            onClick={() => trackNavClick("Forgewing Header — Contact")}
            className="text-sm text-[#1E3340] hover:text-[#E8732A] transition-colors"
          >
            Contact
          </Link>

          <Link
            href="/contact/"
            onClick={() => trackNavClick("Forgewing Header — Request a demo")}
            className="inline-flex items-center rounded-full bg-[#E8732A] px-4 py-2 text-xs sm:text-sm font-semibold text-white transition-colors hover:bg-[#d0651e] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E8732A] focus-visible:ring-offset-2 whitespace-nowrap"
          >
            Request a demo
          </Link>
        </div>

        {/* Right — mobile controls */}
        <div className="flex md:hidden items-center gap-2">
          <Link
            href="/contact/"
            onClick={() => trackNavClick("Forgewing Header — Request a demo")}
            className="inline-flex items-center rounded-full bg-[#E8732A] px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-[#d0651e] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E8732A] focus-visible:ring-offset-2 whitespace-nowrap"
          >
            Request a demo
          </Link>
          <button
            type="button"
            className="p-2 -mr-2 rounded-md text-[#1E3340] hover:bg-[#1E3340]/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E8732A]"
            onClick={() => setMobileOpen((v) => !v)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-[#E0DCD6]">
          <div className="px-4 py-3 space-y-1">
            <p className="px-3 pt-2 pb-1 text-xs font-semibold uppercase tracking-wide text-[#5A7A8A]">
              Products
            </p>
            {PRODUCTS.map((p) => (
              <Link
                key={p.href}
                href={p.href}
                aria-current={isActive(p.href) ? "page" : undefined}
                onClick={() => {
                  trackNavClick(p.name);
                  setMobileOpen(false);
                }}
                className="flex items-center justify-between gap-3 px-3 py-3 rounded-md text-base font-medium text-[#1E3340] hover:bg-[#F4F1EC]"
              >
                <span className={isActive(p.href) ? "text-[#E8732A]" : ""}>{p.name}</span>
                <Badge tag={p.tag} />
              </Link>
            ))}
            <Link
              href="/contact/"
              onClick={() => {
                trackNavClick("Forgewing Header — Contact");
                setMobileOpen(false);
              }}
              className="block px-3 py-3 mt-1 rounded-md text-base font-medium text-[#1E3340] hover:bg-[#F4F1EC] border-t border-[#E0DCD6]"
            >
              Contact
            </Link>
            <Link
              href="/"
              onClick={() => {
                trackNavClick("Forgewing Header — VaultScaler home");
                setMobileOpen(false);
              }}
              className="block px-3 py-3 rounded-md text-base font-medium text-[#5A7A8A] hover:bg-[#F4F1EC]"
            >
              VaultScaler home
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
