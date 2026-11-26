import type { Metadata } from "next";
import Link from "next/link";
import PracticeArt from "@/components/PracticeArt";
import Reveal from "@/components/Reveal";
import { aiPractices, products, consultingLinks } from "@/lib/offerings";
import SectionInk from "@/components/SectionInk";
import CallProcess from "@/components/CallProcess";

export const metadata: Metadata = {
  title: { absolute: "AI, Consulting and Products | Turbo Bytes Consulting" },
  description:
    "Custom LLM and on-premise AI, AI capability building, technology consulting and audit, and our own products: Slate, Distil, Vantage and Meridian.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: { absolute: "AI, Consulting and Products | Turbo Bytes Consulting" },
    description:
      "Custom LLM and on-premise AI, AI capability building, technology consulting and audit, and our own products: Slate, Distil, Vantage and Meridian.",
    url: "https://turbobytesconsulting.com/services",
    images: [{ url: "/img/og-default.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image" as const,
    title: { absolute: "AI, Consulting and Products | Turbo Bytes Consulting" },
    description:
      "Custom LLM and on-premise AI, AI capability building, technology consulting and audit, and our own products: Slate, Distil, Vantage and Meridian.",
  },
};

const groups = [
  {
    heading: "AI practice",
    lead: "LLMs and neural networks built into the way your business already works.",
    art: "ai" as const,
    items: aiPractices,
  },
  {
    heading: "Consulting",
    lead: "In-depth, independent work on strategy, systems and operations.",
    art: "consulting" as const,
    items: consultingLinks,
  },
  {
    heading: "Products",
    lead: "Software we build and run ourselves.",
    art: "products" as const,
    items: products,
  },
];

const engineering = [
  { href: "/services/custom-software-development", label: "Custom software" },
  { href: "/services/ai-applications", label: "AI applications" },
  { href: "/services/business-automation", label: "Business automation" },
  { href: "/services/mvp-development", label: "MVP development" },
  { href: "/services/mobile-app-development", label: "Mobile apps" },
  { href: "/services/web-development", label: "Websites and web apps" },
];

export default function ServicesPage() {
  return (
    <>
      {/* ── PAGE HERO ── */}
      <section className="relative bg-forest overflow-hidden min-h-[400px] flex items-center border-b border-light-grey">
        <div className="container-tbc py-s6 relative z-10">
          <hr className="gold-rule mb-6" />
          <h1 className="font-display font-bold text-[clamp(32px,4.5vw,52px)] text-white leading-[1.1] tracking-[-0.5px] max-w-3xl mb-6 text-balance">
            How we work with you.
          </h1>
          <p className="text-body text-white/70 leading-relaxed max-w-2xl text-pretty">
            Three kinds of work: AI built into your operations, consulting
            that goes deep into strategy and systems, and products we build
            and run ourselves.
          </p>
        </div>
      </section>

      {/* ── GROUPS ── */}
      {groups.map((g, gi) => (
        <section key={g.heading} className={`${gi % 2 ? "bg-white" : "bg-ivory"} py-s7 border-b border-light-grey`}>
          <div className="container-tbc grid grid-cols-1 lg:grid-cols-[360px_1fr] gap-10 lg:gap-16">
            <Reveal>
              <h2 className="font-display font-semibold text-[clamp(28px,3vw,38px)] text-ink leading-tight tracking-[-0.02em] mb-3">{g.heading}</h2>
              <p className="text-[17px] text-mid-grey leading-relaxed mb-6">{g.lead}</p>
              <div className="relative aspect-[16/10] rounded overflow-hidden bg-forest">
                <PracticeArt kind={g.art} />
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <ul className="divide-y divide-light-grey border-y border-light-grey">
                {g.items.map((it) => (
                  <li key={it.href}>
                    <Link href={it.href} className="group grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-2 py-6">
                      <span>
                        <span className="block font-display font-semibold text-[20px] text-ink group-hover:text-royal transition-colors">{it.title}</span>
                        <span className="block text-[16px] text-mid-grey leading-relaxed mt-1 measure-68">{it.blurb}</span>
                      </span>
                      <span className="hidden sm:block self-center text-royal text-xl transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>
      ))}

      {/* ── ENGINEERING (delivered as part of the above) ── */}
      <section className="bg-white py-s6 border-b border-light-grey">
        <div className="container-tbc">
          <p className="text-[16px] text-mid-grey max-w-3xl mb-5">
            When the answer is new software, we build it, as part of the work above:
          </p>
          <ul className="flex flex-wrap gap-3">
            {engineering.map((e) => (
              <li key={e.href}>
                <Link
                  href={e.href}
                  className="inline-flex items-center min-h-[44px] px-5 py-2.5 rounded-full border border-light-grey bg-ivory text-[15px] font-medium text-ink hover:border-forest hover:text-forest transition-colors"
                >
                  {e.label} <span aria-hidden="true" className="ml-1.5 text-forest">&rarr;</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── INTEGRATED CAPABILITY BAND (Dark Section) ── */}
      <SectionInk>
        <div className="container-tbc text-center">
          <Reveal>
            <h2 className="font-display font-bold text-[clamp(26px,3vw,36px)] text-white leading-[1.2] mb-4 text-balance">
              Advice and delivery from the same people.
            </h2>
            <p className="text-body text-white/70 max-w-2xl mx-auto text-pretty">
              We do not hand over a strategy deck and leave. Where the answer needs building, we build it, train your team on it and stay until it works.
            </p>
          </Reveal>
        </div>
      </SectionInk>

      <CallProcess />

      {/* ── CTA BAND ── */}
      <section className="bg-royal py-s7 text-center">
        <div className="container-tbc">
          <hr className="gold-rule gold-rule--center mb-8" />
          <h2 className="font-display font-bold text-[clamp(24px,3vw,36px)] text-white leading-[1.2] mb-4 text-balance">
            Don&apos;t know where to start? Let&apos;s talk about your business.
          </h2>
          <p className="text-body text-white/80 mb-10 text-pretty max-w-2xl mx-auto">
            Request a consultation. We will respond within one business day.
          </p>
          <Link href="/book-consultation" className="btn-gold min-h-[48px] px-8 text-[16px]">
            Request a Consultation
          </Link>
          <div className="flex flex-wrap items-center justify-center gap-6 text-[14px] text-white/80 mt-6">
            <span className="inline-flex items-center gap-1.5"><svg className="w-4 h-4 text-gold flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>30-minute scoping call</span>
            <span className="inline-flex items-center gap-1.5"><svg className="w-4 h-4 text-gold flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>Confidential & NDA-backed</span>
            <span className="inline-flex items-center gap-1.5"><svg className="w-4 h-4 text-gold flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>Response within 1 business day</span>
          </div>
          <hr className="gold-rule gold-rule--center mt-10" />
        </div>
      </section>
    </>
  );
}

