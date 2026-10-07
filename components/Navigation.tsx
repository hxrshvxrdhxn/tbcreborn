"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { aiPractices, products, consultingLinks } from "@/lib/offerings";

interface NavLink {
  href: string;
  label: string;
  target?: string;
}

const navLinks: NavLink[] = [
  { href: "/services", label: "Services" },
  { href: "/products", label: "Products" },
  { href: "/about", label: "About" },
  { href: "/work", label: "Work" },
  { href: "/blog", label: "Blog" },
  { href: "/engagement", label: "Engagement" },
  { href: "/how-to", label: "How-To" },
  { href: "/contact", label: "Contact" },
];

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-forest border-b-2 border-gold">
      <div className="container-tbc">
        <nav className="flex items-center justify-between h-16" aria-label="Main navigation">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group" aria-label="Turbo Bytes Consulting — home">
            <Image
              src="/brand/tbc-logo-white.svg"
              alt=""
              width={139}
              height={36}
              className="h-9 w-auto"
              unoptimized
            />
          </Link>

          {/* Desktop nav */}
          <ul className="hidden lg:flex items-center gap-8 h-full">
            {navLinks.map((link) => (
              <li key={link.href} className="relative group h-full flex items-center">
                <Link
                  href={link.href}
                  target={link.target || "_self"}
                  rel={link.target === "_blank" ? "noopener noreferrer" : undefined}
                  className={`font-display font-medium text-sm tracking-wide transition-colors duration-150 py-5 ${
                    pathname.startsWith(link.href)
                      ? "text-gold"
                      : "text-white hover:text-gold"
                  }`}
                >
                  {link.label}
                </Link>
                
                {/* Services Dropdown */}
                {link.label === "Services" && (
                  <div className="absolute top-full left-0 hidden group-hover:block z-50 min-w-[240px] pt-1">
                    <div className="bg-white border border-light-grey rounded-[8px] shadow-lg p-6 grid grid-cols-3 gap-8 w-[720px]">
                      {[
                        { heading: "AI practice", items: aiPractices },
                        { heading: "Products", items: products },
                        { heading: "Consulting", items: consultingLinks },
                      ].map((col) => (
                        <div key={col.heading}>
                          <p className="text-[12px] font-semibold text-mid-grey mb-3">{col.heading}</p>
                          <ul className="flex flex-col gap-1">
                            {col.items.map((it) => (
                              <li key={it.href}>
                                <Link href={it.href} className="block py-1.5 text-[14px] leading-snug text-ink hover:text-royal transition-colors">{it.title}</Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>

          {/* Desktop CTA + mobile menu */}
          <div className="flex items-center gap-4">
            <Link
              href="/book-consultation"
              className="btn-primary hidden sm:inline-flex text-sm py-2.5 px-5"
            >
              Request a Consultation
            </Link>
            <button
              className="lg:hidden text-white p-3 -mr-3"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen(!open)}
            >
              {open ? (
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M6 6l12 12M6 18L18 6" />
                </svg>
              ) : (
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 6h18M3 12h18M3 18h18" />
                </svg>
              )}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-forest border-t border-white/10 menu-enter">
          <div className="container-tbc py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                target={link.target || "_self"}
                rel={link.target === "_blank" ? "noopener noreferrer" : undefined}
                onClick={() => setOpen(false)}
                className={`font-display font-medium text-sm py-3 border-b border-white/10 transition-colors ${
                  pathname.startsWith(link.href) ? "text-gold" : "text-white hover:text-gold"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/book-consultation"
              onClick={() => setOpen(false)}
              className="btn-primary mt-4 text-center"
            >
              Request a Consultation
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
