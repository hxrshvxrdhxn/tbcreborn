import Link from "next/link";
import Image from "next/image";
import { aiPractices, products, consultingLinks } from "@/lib/offerings";
import { socialProfiles } from "@/lib/social";

const SOCIAL_ICONS: Record<string, string> = {
  LinkedIn: "M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z",
  YouTube: "M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8zM9.6 15.6V8.4l6.2 3.6-6.2 3.6z",
  Instagram: "M12 2.16c3.2 0 3.58.01 4.85.07 3.25.15 4.77 1.69 4.92 4.92.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.15 3.23-1.66 4.77-4.92 4.92-1.27.06-1.64.07-4.85.07s-3.58-.01-4.85-.07c-3.26-.15-4.77-1.7-4.92-4.92-.06-1.27-.07-1.64-.07-4.85s.01-3.58.07-4.85C2.38 3.92 3.9 2.38 7.15 2.23 8.42 2.17 8.8 2.16 12 2.16zM12 0C8.74 0 8.33.01 7.05.07 2.7.27.27 2.69.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.2 4.36 2.62 6.78 6.98 6.98 1.28.06 1.69.07 4.95.07s3.67-.01 4.95-.07c4.35-.2 6.78-2.62 6.98-6.98.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.2-4.35-2.62-6.78-6.98-6.98C15.67.01 15.26 0 12 0zm0 5.84a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.41-11.85a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z",
  X: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.259 5.63 5.905-5.63zm-1.161 17.52h1.833L7.084 4.126H5.117z",
  Facebook: "M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.96.93-1.96 1.89v2.25h3.33l-.53 3.49h-2.8V24C19.61 23.1 24 18.1 24 12.07z",
};

const serviceLinks = [
  ...aiPractices.map((l) => ({ href: l.href, label: l.title })),
  ...products.map((l) => ({ href: l.href, label: l.title })),
  ...consultingLinks.map((l) => ({ href: l.href, label: l.title })),
];

const companyLinks = [
  { href: "/services", label: "Services" },
  { href: "/products", label: "Products" },
  { href: "/about", label: "About" },
  { href: "/work", label: "Work" },
  { href: "/blog", label: "Blog" },
  { href: "/how-to", label: "How-To Guides" },
  { href: "/glossary", label: "Glossary" },
  { href: "/integrations", label: "Integrations" },
  { href: "/cost", label: "Cost Guides" },
  { href: "/software-cost-calculator", label: "Cost Calculator" },
  { href: "/compare", label: "Comparisons" },
  { href: "/solutions", label: "Solutions" },
  { href: "/ai-use-cases", label: "AI Use Cases" },
  { href: "/engagement", label: "Engagement" },
  { href: "/contact", label: "Contact" },
  { href: "/brand-guidelines", label: "Brand Guidelines" },
];

const locationLinks = [
  { href: "/industries/manufacturing", label: "Manufacturing" },
  { href: "/industries/distribution", label: "Distribution" },
  { href: "/software-development-company-greater-noida", label: "Greater Noida" },
  { href: "/software-development-company-noida", label: "Noida" },
  { href: "/software-development-company-delhi-ncr", label: "Delhi NCR" },
];

export default function Footer() {
  return (
    <footer className="bg-forest text-white">
      <div className="container-tbc pt-16 pb-28 md:pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">

          {/* Col 1 — Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <Image
                src="/brand/tbc-logo-white.svg"
                alt="Turbo Bytes Consulting"
                width={139}
                height={36}
                className="h-9 w-auto"
                unoptimized
              />
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-4" style={{ maxWidth: "220px" }}>
              Intelligence. Precision. Growth.
            </p>
            <p className="text-white/40 text-xs leading-relaxed" style={{ maxWidth: "220px" }}>
              Process-first software, built, run and maintained.
            </p>
          </div>

          {/* Col 2 — Services */}
          <div>
            <h3 className="font-display font-semibold text-xs tracking-widest uppercase text-gold mb-5">
              Services
            </h3>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/60 text-sm hover:text-gold transition-colors duration-150"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Company */}
          <div>
            <h3 className="font-display font-semibold text-xs tracking-widest uppercase text-gold mb-5">
              Company
            </h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/60 text-sm hover:text-gold transition-colors duration-150"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Industries and locations */}
          <div>
            <h3 className="font-display font-semibold text-xs tracking-widest uppercase text-gold mb-5">
              Who we serve
            </h3>
            <ul className="space-y-3">
              {locationLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/60 text-sm hover:text-gold transition-colors duration-150"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 5 — Contact */}
          <div>
            <h3 className="font-display font-semibold text-xs tracking-widest uppercase text-gold mb-5">
              Contact
            </h3>
            <ul className="space-y-3 text-sm text-white/60">
              <li>
                <a
                  href="tel:+919354784377"
                  className="hover:text-gold transition-colors duration-150"
                >
                  +91 93547 84377
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@turbobytesconsulting.com"
                  className="hover:text-gold transition-colors duration-150"
                >
                  info@turbobytesconsulting.com
                </a>
              </li>
              <li className="text-white/40 text-xs leading-relaxed" style={{ maxWidth: "200px" }}>
                Kasana Tower, Alpha-I Commercial Belt,<br />
                Greater Noida, UP, India
              </li>
              <li>
                <a
                  href="https://wa.me/919354784377"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-white/80 hover:text-white transition-colors duration-150"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social profiles */}
        <div className="mt-12 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="font-display font-semibold text-sm text-white/80">Follow TBC</p>
          <ul className="flex flex-wrap gap-3">
            {socialProfiles.map((s) => (
              <li key={s.name}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`TBC on ${s.name}`}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white/80 hover:bg-white hover:text-forest transition-colors duration-150"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d={SOCIAL_ICONS[s.name]} />
                  </svg>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <p className="text-white/40 text-xs">
            © 2026 Turbo Bytes Consulting. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2 sm:justify-end">
            <Link href="/privacy-policy" className="text-white/60 hover:text-white text-xs whitespace-nowrap transition-colors">
              Privacy Policy
            </Link>
            <Link href="/how-to" className="text-white/60 hover:text-white text-xs whitespace-nowrap transition-colors">
              How-To Guides
            </Link>
            <Link href="/glossary" className="text-white/60 hover:text-white text-xs whitespace-nowrap transition-colors">
              Glossary
            </Link>
            <Link href="/integrations" className="text-white/60 hover:text-white text-xs whitespace-nowrap transition-colors">
              Integrations
            </Link>
            <Link href="/cost" className="text-white/60 hover:text-white text-xs whitespace-nowrap transition-colors">
              Cost Guides
            </Link>
            <Link href="/compare" className="text-white/60 hover:text-white text-xs whitespace-nowrap transition-colors">
              Comparisons
            </Link>
            <Link href="/solutions" className="text-white/60 hover:text-white text-xs whitespace-nowrap transition-colors">
              Solutions
            </Link>
            <Link href="/ai-use-cases" className="text-white/60 hover:text-white text-xs whitespace-nowrap transition-colors">
              AI Use Cases
            </Link>
            <Link href="/terms" className="text-white/60 hover:text-white text-xs whitespace-nowrap transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
