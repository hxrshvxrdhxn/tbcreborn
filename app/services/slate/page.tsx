import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import SectionInk from "@/components/SectionInk";

export const metadata: Metadata = {
  title: "Slate — AI Executive Assistant",
  description:
    "Slate is an AI-powered executive assistant for founders and senior leaders. Calendar, email, research, decisions — intelligently managed.",
  alternates: {
    canonical: "/services/slate",
  },
  openGraph: {
    title: "Slate — AI Executive Assistant",
    description:
      "Slate is an AI-powered executive assistant for founders and senior leaders. Calendar, email, research, decisions — intelligently managed.",
    url: "https://turbobytesconsulting.com/services/slate",
    images: [{ url: "/img/og-default.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image" as const,
    title: "Slate — AI Executive Assistant",
    description:
      "Slate is an AI-powered executive assistant for founders and senior leaders. Calendar, email, research, decisions — intelligently managed.",
  },
};

const slateCapabilities = [
  "Intelligent calendar management, conflict resolution, and scheduling across all time zones.",
  "Email drafting, inbox triage, priority classification, and response management.",
  "Meeting preparation: agenda design, participant research, and pre-meeting briefing documents.",
  "Action item capture, follow-up management, and accountability tracking.",
  "Continuous research: market developments, competitor moves, industry signals, and news digests.",
  "Document drafting and review: proposals, reports, presentations, and board materials.",
  "Decision support: structured analysis, scenario mapping, and data-backed framing.",
  "Daily and weekly priority briefings calibrated to the executive's role and focus areas.",
  "Deep integration: Gmail, Outlook, Slack, Notion, HubSpot, Asana, Trello, and more.",
  "Learns communication style, preferences, and decision patterns — improving continuously.",
];

const audienceCards = [
  {
    title: "Founders",
    description:
      "Building a company demands constant context-switching. Slate handles the operational overhead so founders can stay focused on the decisions that compound.",
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  {
    title: "CEOs & MDs",
    description:
      "The higher the seat, the higher the cost of distraction. Slate filters, prioritises, and prepares — so every hour you invest is at full leverage.",
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
  },
  {
    title: "Senior Partners",
    description:
      "Client relationships, firm obligations, and market intelligence require constant synthesis. Slate keeps you ahead of every thread without losing any of them.",
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Slate — AI Executive Assistant",
  "description":
    "Beyond scheduling. Beyond email. A second intelligence for founders, CEOs and senior partners operating at decision speed.",
  "provider": {
    "@type": "Organization",
    "name": "Turbo Bytes Consulting",
    "url": "https://turbobytesconsulting.com",
  },
  "serviceType": "AI Executive Assistant",
  "url": "https://turbobytesconsulting.com/services/slate",
  "areaServed": "Worldwide",
  "availableChannel": {
    "@type": "ServiceChannel",
    "serviceUrl": "https://turbobytesconsulting.com/book-consultation",
  },
};

export default function SlatePage() {
  return (
    <>
      <Script
        id="slate-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── Breadcrumb ── */}
      <nav aria-label="Breadcrumb" className="bg-ivory border-b border-light-grey">
        <div className="container-tbc py-3">
          <ol className="flex items-center gap-2 font-display text-[13px] uppercase tracking-widest text-mid-grey">
            <li>
              <Link href="/" className="hover:text-ink transition-colors">Home</Link>
            </li>
            <li aria-hidden="true" className="text-light-grey select-none">/</li>
            <li>
              <Link href="/services" className="hover:text-ink transition-colors">Services</Link>
            </li>
            <li aria-hidden="true" className="text-light-grey select-none">/</li>
            <li className="text-ink font-bold" aria-current="page">Slate AI Assistant</li>
          </ol>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section className="relative bg-ink overflow-hidden min-h-[400px] flex items-center border-b border-light-grey" aria-labelledby="slate-hero-heading">
        {/* Full-bleed background image band */}
        <div className="absolute inset-0 z-0">
          <Image src="/img/hero-service-slate.png" alt="" fill className="object-cover object-center opacity-40 mix-blend-screen" priority aria-hidden="true" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-transparent" />
        </div>

        <div className="container-tbc py-s6 relative z-10">
          <Reveal>
            <p className="font-display font-bold text-gold text-sm tracking-widest uppercase mb-4">
              Practice 05
            </p>
            <hr className="gold-rule mb-6" />
            <h1
              id="slate-hero-heading"
              className="font-display font-bold text-[clamp(32px,4.5vw,52px)] text-white leading-[1.1] tracking-[-0.5px] max-w-4xl mb-6 text-balance"
            >
              Slate — AI Executive Assistant
            </h1>
            <p
              className="text-body text-white/70 leading-relaxed max-w-3xl mb-8 text-pretty"
            >
              Beyond scheduling. Beyond email. A second intelligence for the
              people who lead.
            </p>
            <div className="inline-flex flex-wrap items-center gap-3 bg-white/10 backdrop-blur border border-white/20 rounded px-4 py-3 shadow-sm">
              <span className="w-2.5 h-2.5 rounded-full bg-gold flex-shrink-0" aria-hidden="true" />
              <span className="font-display font-semibold text-caption text-white uppercase tracking-widest">
                Setup: 48 hours · Full calibration: 2–4 weeks
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── What Slate Does ── */}
      <section className="bg-ivory py-s7 border-b border-light-grey" aria-labelledby="what-slate-does-heading">
        <div className="container-tbc">
          <Reveal>
            <span className="eyebrow">What Slate Does</span>
            <h2
              id="what-slate-does-heading"
              className="font-display font-bold text-[clamp(28px,3vw,36px)] text-ink leading-[1.2] mb-12 max-w-2xl"
            >
              Intelligence support for leaders who move at decision speed.
            </h2>
            <hr className="gold-rule mb-8" />
          </Reveal>

          <ul
            className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6"
            style={{ maxWidth: "960px" }}
          >
            {slateCapabilities.map((item, index) => (
              <Reveal key={index} delay={index * 30}>
                <li className="flex items-start gap-4">
                  <span
                    className="flex-shrink-0 mt-1 w-6 h-6 rounded-full bg-gold/15 text-gold flex items-center justify-center font-display font-bold text-[11px]"
                    aria-hidden="true"
                  >
                    {index + 1}
                  </span>
                  <span className="font-sans text-[15px] text-ink leading-relaxed">
                    {item}
                  </span>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Who Is Slate For ── */}
      <section className="bg-white py-s7 border-b border-light-grey" aria-labelledby="who-slate-for-heading">
        <div className="container-tbc">
          <div className="text-center max-w-2xl mx-auto mb-s6">
            <Reveal>
              <span className="eyebrow">Who Is Slate For</span>
              <h2
                id="who-slate-for-heading"
                className="font-display font-bold text-[clamp(28px,3vw,36px)] text-ink leading-[1.2] mb-6"
              >
                Built for the leaders whose time has the highest leverage.
              </h2>
              <hr className="gold-rule gold-rule--center" />
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {audienceCards.map((card, i) => (
              <Reveal key={card.title} delay={i * 50}>
                <article
                  className="bg-ivory border border-light-grey rounded p-8 shadow-card hover:shadow-card-hover transition-shadow duration-300 h-full"
                >
                  <div className="text-gold mb-5" aria-hidden="true">
                    {card.icon}
                  </div>
                  <hr className="gold-rule mb-5" />
                  <h3 className="font-display font-bold text-[20px] text-ink mb-4 leading-snug">
                    {card.title}
                  </h3>
                  <p className="text-body text-mid-grey">
                    {card.description}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Band ── */}
      <SectionInk className="text-center" aria-labelledby="slate-cta-heading">
        <div className="container-tbc">
          <Reveal>
            <h2
              id="slate-cta-heading"
              className="font-display font-bold text-[clamp(26px,3.5vw,40px)] text-white leading-[1.2] mb-4 text-balance"
            >
              Ready to add a second intelligence to your leadership?
            </h2>
            <p className="text-body text-white/70 mb-10 text-pretty max-w-2xl mx-auto">
              Slate onboards in 48 hours. The first week of calibration is on us.
            </p>
            <Link href="/book-consultation" className="btn-gold">
              Request a Slate Consultation
            </Link>
          </Reveal>
        </div>
      </SectionInk>
    </>
  );
}
