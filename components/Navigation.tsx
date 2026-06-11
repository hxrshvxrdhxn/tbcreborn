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
          <ul className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`font-display font-medium text-sm tracking-wide transition-colors duration-150 ${
                    pathname.startsWith(link.href)
                      ? "text-gold"
                      : "text-white hover:text-gold"
                  }`}
                >
                  {link.label}
                </Link>
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
