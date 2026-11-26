import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import SectionInk from "@/components/SectionInk";
import CallProcess from "@/components/CallProcess";
import YouTubeLite from "@/components/YouTubeLite";
import MethodFlowDiagram from "@/components/MethodFlowDiagram";
import BeforeAfterComparison from "@/components/BeforeAfterComparison";
import { getVideoById } from "@/lib/videos";

export const metadata: Metadata = {
  title: { absolute: "Consulting Services & Solutions | Turbo Bytes Consulting" },
  description:
    "Technology consulting, process automation, custom software development, digital transformation, and AEO/SEO/GEO visibility for mid-market and enterprise firms.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: { absolute: "Consulting Services & Solutions | Turbo Bytes Consulting" },
    description:
      "Technology consulting, process automation, custom software development, digital transformation, and AEO/SEO/GEO visibility for mid-market and enterprise firms.",
    url: "https://turbobytesconsulting.com/services",
    images: [{ url: "/img/og-default.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image" as const,
    title: { absolute: "Consulting Services & Solutions | Turbo Bytes Consulting" },
    description:
      "Technology consulting, process automation, custom software development, digital transformation, and AEO/SEO/GEO visibility.",
  },
};

const servicePillars = [
  {
    number: "01",
    heading: "Technology Consulting & Process Automation",
    lead: "We sit with the MD and team, map the workflows that cost the most, and eliminate operational bottlenecks through disciplined automation.",
    items: [
      { title: "Business process automation", href: "/services/business-automation", blurb: "Automate manual entry, approvals, and handoffs between teams and systems." },
      { title: "Technology strategy & advisory", href: "/services/technology-consulting", blurb: "Independent roadmaps, build-or-buy decisions, and systems evaluation." },
      { title: "Technology and systems audit", href: "/services/technology-audit", blurb: "Code quality, data flows, security access, and cloud cost optimisation." },
      { title: "AI readiness assessment", href: "/services/ai-readiness-assessment", blurb: "Find where machine intelligence delivers genuine operational ROI." },
      { title: "Business diagnostic", href: "/services/business-diagnostic", blurb: "Structured operational reviews that uncover decision bottlenecks." },
    ],
  },
  {
    number: "02",
    heading: "Custom Software for Any Specific Need",
    lead: "We build what the process needs, not a template. Purpose-engineered software architectures that fit your exact business logic.",
    items: [
      { title: "Custom software development", href: "/services/custom-software-development", blurb: "Dedicated internal web platforms, mobile dispatch tools, and tailored systems." },
      { title: "Custom LLM & on-premise AI", href: "/services/custom-llm", blurb: "Private models trained on company documents with zero data leakage." },
      { title: "AI capability building", href: "/services/ai-training", blurb: "Workforce training programmes that teach teams to apply AI in daily operations." },
      { title: "AI applications & agents", href: "/services/ai-applications", blurb: "Document processing, intelligent triage, and human-supervised operational agents." },
    ],
  },
  {
    number: "03",
    heading: "AEO, SEO & GEO Readiness",
    lead: "Ensure your company is found, cited, and recommended across classical search engines, voice assistants, and generative AI models.",
    items: [
      { title: "AEO, SEO & GEO readiness", href: "/services/aeo-seo-geo", blurb: "Being named and cited by Google, ChatGPT, Gemini, Perplexity and Copilot." },
      { title: "Search Engine Optimisation (SEO)", href: "/services/seo", blurb: "Technical crawl health, entity structure, and authoritative search rankings." },
      { title: "Answer Engine Optimisation (AEO)", href: "/services/answer-engine-optimisation", blurb: "Answer-first architecture for featured snippets and voice search." },
      { title: "Generative Engine Optimisation (GEO)", href: "/services/generative-engine-optimisation", blurb: "Entity citations and knowledge base trust so LLMs recommend your firm." },
      { title: "Free AI visibility check", href: "/free-ai-visibility-check", blurb: "Audit your company's visibility across major AI assistants." },
    ],
  },
  {
    number: "04",
    heading: "Digital Transformation",
    lead: "End-to-end transformation from diagnostic to running systems and trained teams. Five disciplined phases with clear deliverables.",
    items: [
      { title: "Full digital transformation programme", href: "/digital-transformation", blurb: "Diagnose, Design, Build, Run, and Hand over with ongoing SLA maintenance." },
    ],
  },
  {
    number: "05",
    heading: "Software Products",
    lead: "Products are proof that we ship. Alongside advisory, we build and run dedicated software platforms for commercial operations.",
    items: [
      { title: "Distil", href: "/products/distil", blurb: "Complex proposal engine assembling verified quotes for engineering firms." },
      { title: "Sunscout", href: "/products/sunscout", blurb: "Commercial and industrial rooftop solar prospecting and sizing." },
      { title: "Meridian", href: "/products/meridian", blurb: "All-in-one operating platform with private company brain." },
      { title: "All software products", href: "/products", blurb: "Explore the full product suite: Cadence, Assay, Steward, Compass, Relay, Rapport." },
    ],
  },
];

const faqs = [
  {
    q: "How does Turbo Bytes Consulting engage with new clients?",
    a: "We start with a focused discovery conversation to understand your business objectives and operational bottlenecks. For clients requiring thorough evaluation, we conduct an initial Business Diagnostic or Technology Audit before proposing an implementation roadmap.",
  },
  {
    q: "Can we engage you for custom software without a full transformation programme?",
    a: "Yes. Many clients engage us to build one high-impact operational system, such as a quotation engine, dispatch board, or custom integration. We scope each project in fixed phases.",
  },
  {
    q: "What makes your consulting approach different from traditional agencies?",
    a: "We fix the process first, then we build the software. In pilot engagements we have taken work that needed a 40-person technology team and run it with 4 people plus machines. We do not deliver slide decks and leave; we build, deploy, and maintain the software ourselves.",
  },
  {
    q: "Do you guarantee search engine rankings or AI mentions?",
    a: "No. Search algorithms and generative AI models evolve continuously. We guarantee rigorous technical execution, entity trust architecture, and answer-first content, tracking progress through transparent metrics rather than false ranking guarantees.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": "https://turbobytesconsulting.com/services#webpage",
      url: "https://turbobytesconsulting.com/services",
      name: "Consulting Services and Technology Capabilities | Turbo Bytes Consulting",
      description: "Technology consulting, process automation, custom software development, digital transformation, and AEO/SEO/GEO visibility.",
      publisher: { "@id": "https://turbobytesconsulting.com/#organization" },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://turbobytesconsulting.com" },
        { "@type": "ListItem", position: 2, name: "Services", item: "https://turbobytesconsulting.com/services" },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};

export default function ServicesPage() {
  const serviceVideo = getVideoById("Kqyajyw2YnI");

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* ── PAGE HERO ── */}
      <section className="relative bg-forest overflow-hidden min-h-[380px] flex items-center border-b border-light-grey">
        <div className="container-tbc py-s6 relative z-10">
          <h1 className="font-display font-bold text-[clamp(32px,4.5vw,52px)] text-white leading-[1.1] tracking-[-0.5px] max-w-3xl mb-6 text-balance">
            How we work with you.
          </h1>
          <p className="text-body text-white/75 leading-relaxed max-w-2xl text-pretty">
            Five core offers: technology consulting and process automation, custom software engineered for your process, search and AI visibility (AEO/SEO/GEO), full digital transformation, and dedicated software products.
          </p>
        </div>
      </section>

      {/* ── METHOD FLOW DIAGRAM AT TOP ── */}
      <section className="bg-ivory py-s7 border-b border-light-grey">
        <div className="container-tbc">
          <MethodFlowDiagram
            title="The Engineering Method"
            subtitle="Four disciplined stages connecting diagnosis directly to deployed software."
          />
        </div>
      </section>

      {/* ── BEFORE / AFTER CONTRAST ── */}
      <section className="bg-white py-s7 border-b border-light-grey">
        <div className="container-tbc">
          <BeforeAfterComparison
            title="Operational Delivery: Today vs With TBC"
            subtitle="Why founder-led firms move away from fragmented spreadsheets and opaque agency advice."
            beforeTitle="Today (Common friction)"
            beforeItems={[
              "Spreadsheets and WhatsApp groups hold critical order, dispatch, and quote data.",
              "Off-the-shelf software charges rising per-seat fees while forcing process compromises.",
              "Consultants leave slide decks without engineering the actual software or integrations.",
            ]}
            afterTitle="With TBC (Engineered resolution)"
            afterItems={[
              "Single verified operational software engineered directly for your business logic.",
              "Zero per-seat taxes: full code ownership with direct database control.",
              "Advice and software delivery from the same senior engineering team.",
            ]}
          />
        </div>
      </section>

      {/* ── RELEVANT VIDEO ── */}
      {serviceVideo && (
        <section className="bg-ivory py-s7 border-b border-light-grey">
          <div className="container-tbc max-w-4xl">
            <div className="text-center max-w-2xl mx-auto mb-8">
              <h2 className="font-display font-semibold text-[clamp(22px,2.6vw,30px)] text-ink mb-2">
                {serviceVideo.title}
              </h2>
              <p className="text-[15px] text-mid-grey">
                {serviceVideo.description || "A practical walkthrough on identifying where software and automation deliver genuine ROI."}
              </p>
            </div>
            <div className="bg-white p-4 rounded-[12px] border border-light-grey shadow-sm">
              <YouTubeLite id={serviceVideo.id} title={serviceVideo.title} />
            </div>
          </div>
        </section>
      )}

      {/* ── 5 OFFER PILLARS (Clean Cards + Folded Detail) ── */}
      <section className="bg-white py-s7 border-b border-light-grey">
        <div className="container-tbc">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="font-display font-semibold text-[clamp(26px,3vw,36px)] text-ink mb-3">
              Five Practice Areas
            </h2>
            <p className="text-[16px] text-mid-grey">
              Engage for a single targeted operational fix, or partner for complete systems transformation.
            </p>
          </div>

          <div className="space-y-6">
            {servicePillars.map((p) => (
              <div
                key={p.heading}
                className="bg-ivory border border-light-grey rounded-[8px] p-6 lg:p-8 transition-colors hover:border-[#167A4E]/40"
              >
                <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-6 items-start">
                  <div>
                    <span className="font-mono font-bold text-[#167A4E] text-[15px] block mb-1">{p.number}</span>
                    <h3 className="font-display font-semibold text-[22px] text-ink leading-snug mb-2">{p.heading}</h3>
                    <p className="text-[14px] text-mid-grey leading-relaxed">{p.lead}</p>
                  </div>

                  <div>
                    {/* Primary visible service items (first 2) */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
                      {p.items.slice(0, 2).map((it) => (
                        <Link
                          key={it.href}
                          href={it.href}
                          className="group block bg-white p-4 rounded border border-light-grey hover:border-[#167A4E] transition-colors"
                        >
                          <span className="font-display font-semibold text-[16px] text-ink group-hover:text-[#167A4E] flex items-center justify-between">
                            <span>{it.title}</span>
                            <span className="text-[#167A4E] transition-transform group-hover:translate-x-0.5">→</span>
                          </span>
                          <span className="block text-[13px] text-mid-grey leading-snug mt-1">{it.blurb}</span>
                        </Link>
                      ))}
                    </div>

                    {/* Folded accordion for remaining sub-services */}
                    {p.items.length > 2 && (
                      <details className="group [&_summary::-webkit-details-marker]:hidden">
                        <summary className="cursor-pointer text-[14px] font-semibold text-[#167A4E] hover:underline flex items-center gap-1.5 py-1 select-none">
                          <span>View all {p.items.length} services in {p.heading}</span>
                          <span className="group-open:rotate-180 transition-transform">↓</span>
                        </summary>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3 pt-3 border-t border-light-grey/80">
                          {p.items.slice(2).map((it) => (
                            <Link
                              key={it.href}
                              href={it.href}
                              className="group block bg-white p-4 rounded border border-light-grey hover:border-[#167A4E] transition-colors"
                            >
                              <span className="font-display font-semibold text-[16px] text-ink group-hover:text-[#167A4E] flex items-center justify-between">
                                <span>{it.title}</span>
                                <span className="text-[#167A4E] transition-transform group-hover:translate-x-0.5">→</span>
                              </span>
                              <span className="block text-[13px] text-mid-grey leading-snug mt-1">{it.blurb}</span>
                            </Link>
                          ))}
                        </div>
                      </details>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
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
              We do not hand over a strategy deck and leave. Where the answer needs building, we build it, train your team on it, and stay until it works.
            </p>
          </Reveal>
        </div>
      </SectionInk>

      {/* ── FAQS (Preserved Accordions & Schema) ── */}
      <section className="bg-white py-s7 border-b border-light-grey" aria-labelledby="faq-heading">
        <div className="container-tbc max-w-3xl">
          <div className="text-center mb-10">
            <h2 id="faq-heading" className="font-display font-bold text-[clamp(26px,3vw,34px)] text-ink leading-[1.2] mb-4">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((f) => (
              <details key={f.q} className="group border border-light-grey rounded-[8px] bg-ivory/50 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between cursor-pointer p-6 font-display font-bold text-ink text-[17px] hover:bg-ivory select-none rounded transition-colors">
                  <span>{f.q}</span>
                  <span className="text-royal group-open:rotate-180 transition-transform duration-300">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                  </span>
                </summary>
                <div className="p-6 pt-0 font-sans text-[15px] text-mid-grey leading-relaxed bg-ivory/50 rounded-b">
                  {f.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CallProcess />

      {/* ── CTA BAND ── */}
      <section className="bg-royal py-s7 text-center">
        <div className="container-tbc">
          <h2 className="font-display font-bold text-[clamp(24px,3vw,36px)] text-white leading-[1.2] mb-4 text-balance">
            Don&apos;t know where to start? Let&apos;s talk about your business.
          </h2>
          <p className="text-body text-white/80 mb-10 text-pretty max-w-2xl mx-auto">
            Book a 30-minute consultation. We will respond within one business day.
          </p>
          <Link href="/book-consultation" className="btn-gold min-h-[48px] px-8 text-[16px]">
            Book a consultation
          </Link>
          <div className="flex flex-wrap items-center justify-center gap-6 text-[14px] text-white/80 mt-6">
            <span className="inline-flex items-center gap-1.5"><svg className="w-4 h-4 text-gold flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>30-minute scoping call</span>
            <span className="inline-flex items-center gap-1.5"><svg className="w-4 h-4 text-gold flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>Confidential & NDA-backed</span>
            <span className="inline-flex items-center gap-1.5"><svg className="w-4 h-4 text-gold flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>Response within 1 business day</span>
          </div>
        </div>
      </section>
    </>
  );
}
