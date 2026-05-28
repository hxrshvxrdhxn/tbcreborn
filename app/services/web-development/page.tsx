import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Website & Web Application Development",
  description:
    "Custom websites and web applications built for performance and conversion. Next.js, mobile-first, SEO-optimised. Turbo Bytes Consulting.",
  alternates: { canonical: "/services/web-development" },
  openGraph: {
    title: "Website & Web Application Development",
    description:
      "Custom websites and web applications built for performance and conversion. Next.js, mobile-first, SEO-optimised. Turbo Bytes Consulting.",
    url: "https://turbobytesconsulting.com/services/web-development",
    images: [{ url: "/og-default.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image" as const,
    title: "Website & Web Application Development",
    description:
      "Custom websites and web applications built for performance and conversion. Next.js, mobile-first, SEO-optimised. Turbo Bytes Consulting.",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Website & Application Development",
  provider: {
    "@type": "Organization",
    name: "Turbo Bytes Consulting",
    url: "https://turbobytesconsulting.com",
  },
  url: "https://turbobytesconsulting.com/services/web-development",
  description:
    "Architecturally sound. Conversion-optimised. Built to perform. Custom business websites, e-commerce, web applications, and post-launch support.",
};

const deliverables = [
  "Custom business websites: corporate, service, portfolio, landing pages, booking platforms",
  "E-commerce builds: Shopify, WooCommerce, or fully bespoke",
  "Web applications: dashboards, client portals, internal tools, SaaS MVPs, business automation tools",
  "Mobile-responsive, Core Web Vitals optimised, and technically SEO-complete on delivery",
  "CMS integration for full editorial control — blog, case studies, team, and media",
  "API integrations: CRM, payment gateways, analytics, email, and third-party platforms",
  "Hosting architecture, domain configuration, SSL, performance tuning, and go-live management",
  "Post-launch support, maintenance, and iterative development retainers available",
];

export default function WebDevelopmentPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {/* ── BREADCRUMB ── */}
      <nav aria-label="Breadcrumb" className="bg-ivory border-b border-light-grey">
        <div className="container-tbc py-3">
          <ol className="flex items-center gap-2 font-sans text-[13px] text-mid-grey">
            <li>
              <Link href="/" className="hover:text-ink transition-colors duration-150">
                Home
              </Link>
            </li>
            <li aria-hidden="true" className="text-light-grey select-none">
              /
            </li>
            <li>
              <Link href="/services" className="hover:text-ink transition-colors duration-150">
                Services
              </Link>
            </li>
            <li aria-hidden="true" className="text-light-grey select-none">
              /
            </li>
            <li className="text-ink font-semibold">
              Website &amp; Application Development
            </li>
          </ol>
        </div>
      </nav>

      {/* ── PAGE HERO ── */}
      <section className="bg-ivory py-16">
        <div className="container-tbc">
          <span className="font-display font-bold text-[13px] text-gold tracking-[1px] uppercase block mb-4">
            Practice 02
          </span>
          <h1 className="font-display font-bold text-[clamp(32px,4.5vw,52px)] text-ink leading-[1.1] tracking-[-0.5px] max-w-3xl mb-5">
            Website &amp; Application Development
          </h1>
          <p className="font-sans text-[18px] text-mid-grey leading-relaxed max-w-2xl mb-8">
            Architecturally sound. Conversion-optimised. Built to perform.
          </p>
          <div className="inline-flex items-center gap-2 bg-white border border-light-grey rounded px-4 py-2 shadow-card">
            <span
              className="w-2 h-2 rounded-full bg-gold flex-shrink-0"
              aria-hidden="true"
            />
            <span className="font-display font-semibold text-[13px] text-ink">
              Sites 2–3 weeks · Applications 4–8 weeks
            </span>
          </div>
        </div>
      </section>

      {/* ── WHAT'S INCLUDED ── */}
      <section className="bg-white py-16">
        <div className="container-tbc">
          <div className="max-w-4xl">
            <span className="eyebrow">WHAT&apos;S INCLUDED</span>
            <hr className="gold-rule mb-6" />
            <h2 className="font-display font-bold text-[clamp(24px,3vw,32px)] text-ink leading-[1.2] mb-10">
              Every layer of your digital presence, built to last.
            </h2>

            <ul className="space-y-5">
              {deliverables.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-4 border-b border-light-grey pb-5 last:border-0 last:pb-0"
                >
                  <span
                    className="mt-[6px] flex-shrink-0 w-2 h-2 rounded-full bg-gold"
                    aria-hidden="true"
                  />
                  <span className="font-sans text-[16px] text-ink leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── WHY THIS MATTERS ── */}
      <section className="bg-ink py-16">
        <div className="container-tbc">
          <div className="max-w-3xl">
            <span className="eyebrow text-gold">WHY THIS MATTERS</span>
            <hr className="gold-rule mb-6" />
            <h2 className="font-display font-bold text-[clamp(24px,3vw,32px)] text-white leading-[1.2] mb-6">
              Your digital presence is your first commercial argument.
            </h2>
            <p className="font-sans text-[17px] text-white/70 leading-relaxed">
              Every commercial relationship begins with a digital touchpoint.
              The quality of that touchpoint — its speed, its clarity, its
              conversion architecture — determines whether a potential client
              becomes a real one. We do not build websites that look good in a
              presentation. We build digital infrastructure that performs
              commercially, scores correctly on search, loads in under two
              seconds, and gives your editorial team full control from day one.
              Architecture decisions made at build time define your ceiling for
              the next three years. We make them deliberately.
            </p>
          </div>
        </div>
      </section>

      {/* ── CTA BAND ── */}
      <section className="bg-royal py-16 text-center">
        <div className="container-tbc">
          <hr className="gold-rule gold-rule--center mb-8" />
          <h2 className="font-display font-bold text-[clamp(22px,3vw,32px)] text-white leading-[1.2] mb-4">
            Ready to build your competitive digital presence?
          </h2>
          <p className="font-sans text-[17px] text-white/80 mb-10">
            Request a consultation. We will respond within one business day.
          </p>
          <Link href="/book-consultation" className="btn-gold">
            Request a Consultation
          </Link>
          <hr className="gold-rule gold-rule--center mt-10" />
        </div>
      </section>
    </>
  );
}
