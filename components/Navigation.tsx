"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/work", label: "Work" },
  { href: "/blog", label: "Blog" },
  { href: "/engagement", label: "Engagement" },
  { href: "/contact", label: "Contact" },
];

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-ink border-b-2 border-gold">
      <div className="container-tbc">
        <nav className="flex items-center justify-between h-16" aria-label="Main navigation">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group" aria-label="Turbo Bytes Consulting — home">
            <span
              className="font-display font-bold text-2xl text-white tracking-wider group-hover:text-gold transition-colors duration-150"
              style={{ letterSpacing: "3px" }}
            >
              TBC
            </span>
            <span
              className="hidden sm:block font-display font-semibold text-gold leading-tight"
              style={{ fontSize: "9px", letterSpacing: "0.5px" }}
            >
              TURBO BYTES<br />CONSULTING
            </span>
          </Link>

          {/* Desktop nav */}
          <ul className="hidden lg:flex items-center gap-8 h-full">
            {navLinks.map((link) => (
              <li key={link.href} className="relative group h-full flex items-center">
                <Link
                  href={link.href}
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
                    <ul className="bg-white border border-light-grey rounded-[6px] shadow-lg py-2 flex flex-col">
                      <li>
                        <Link href="/services/custom-llm" className="block px-5 py-2.5 text-[14px] text-ink hover:bg-ivory hover:text-royal transition-colors">
                          Custom LLM & AI
                        </Link>
                      </li>
                      <li>
                        <Link href="/services/ai-training" className="block px-5 py-2.5 text-[14px] text-ink hover:bg-ivory hover:text-royal transition-colors">
                          AI Capability Building
                        </Link>
                      </li>
                      <li>
                        <Link href="/services/web-development" className="block px-5 py-2.5 text-[14px] text-ink hover:bg-ivory hover:text-royal transition-colors">
                          Web & App Development
                        </Link>
                      </li>
                      <li>
                        <Link href="/services/smm" className="block px-5 py-2.5 text-[14px] text-ink hover:bg-ivory hover:text-royal transition-colors">
                          Social Media Management
                        </Link>
                      </li>
                      <li>
                        <Link href="/services/slate" className="block px-5 py-2.5 text-[14px] text-ink hover:bg-ivory hover:text-royal transition-colors">
                          Slate Executive Assistant
                        </Link>
                      </li>
                    </ul>
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
        <div className="lg:hidden bg-ink border-t border-white/10 menu-enter">
          <div className="container-tbc py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
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
