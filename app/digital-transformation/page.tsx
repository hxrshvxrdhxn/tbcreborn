import type { Metadata } from "next";
import Link from "next/link";
import FivePhaseFlowDiagram from "@/components/FivePhaseFlowDiagram";
import BeforeAfterComparison from "@/components/BeforeAfterComparison";
import YouTubeLite from "@/components/YouTubeLite";
import { getVideoById } from "@/lib/videos";

export const metadata: Metadata = {
  title: { absolute: "Digital Transformation Consulting | Turbo Bytes" },
  description: "End-to-end digital transformation for mid-market firms. From diagnostic and custom build to running systems and hand over.",
  alternates: { canonical: "/digital-transformation" },
  openGraph: {
    title: { absolute: "Digital Transformation Consulting | Turbo Bytes" },
    description: "End-to-end digital transformation for mid-market firms. From diagnostic and custom build to running systems and hand over.",
    url: "https://turbobytesconsulting.com/digital-transformation",
    images: [{ url: "/img/og-default.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image" as const,
    title: { absolute: "Digital Transformation Consulting | Turbo Bytes" },
    description: "End-to-end digital transformation for mid-market firms. From diagnostic and custom build to running systems and hand over.",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Digital Transformation Consulting",
  provider: {
    "@id": "https://turbobytesconsulting.com/#organization",
  },
  url: "https://turbobytesconsulting.com/digital-transformation",
  description: "End-to-end digital transformation consulting for mid-market enterprises. From operational diagnostic to bespoke build, operational management, and complete handover.",
  areaServed: ["Worldwide", "IN", "GB", "US", "AE", "SA", "SG", "AU"],
  serviceType: "Digital Transformation and Technology Modernisation Consulting",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://turbobytesconsulting.com" },
    { "@type": "ListItem", position: 2, name: "Digital Transformation", item: "https://turbobytesconsulting.com/digital-transformation" },
  ],
};

const faqs = [
  {
    question: "What makes TBC's digital transformation approach different from big IT consultancies?",
    answer: "Most traditional IT consultancies deliver multi-hundred-page strategy slide decks and leave execution to third-party sub-contractors. We sit with the managing director and frontline staff, diagnose the costliest bottlenecks, build the exact software and automations needed, run the systems in production, and hand over full source code ownership.",
  },
  {
    question: "Do we have to replace our existing ERP or accounting system like Tally?",
    answer: "No. Replacing a stable accounting system is disruptive and unnecessary. We build modern workflow, approval, and mobile data capture layers that sit above your existing ERP or Tally, synchronising data bi-directionally without disrupting daily financial operations.",
  },
  {
    question: "How long does an end-to-end transformation engagement take?",
    answer: "Our diagnostic phase takes two to three weeks. We deliver initial production automation wins within six to eight weeks. Full multi-department modernisations are delivered in iterative quarterly phases, ensuring commercial value is realised early.",
  },
  {
    question: "Who owns the software and intellectual property created during the engagement?",
    answer: "You do. From day one, all repositories, database schemas, custom automation scripts, and intellectual property sit in your accounts. Upon handover, your team receives complete ownership, architectural runbooks, and staff training.",
  },
  {
    question: "What is your real-world delivery benchmark for operational leverage?",
    answer: "In pilot engagements we have taken work that needed a 40-person technology team and run it with 4 people plus machines. We achieve this by eliminating redundant data entry, connecting fragmented handoffs, and deploying targeted automation.",
  },
  {
    question: "What geographical regions do you support?",
    answer: "We support mid-market enterprises, industrial manufacturers, and high-growth organisations worldwide, including clients in India, the Middle East, Asia-Pacific, the UK and the US.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: f.answer,
    },
  })),
};

export default function DigitalTransformationPage() {
  const video = getVideoById("Kqyajyw2YnI");
  const shortVid = getVideoById("7QUDMIqvXs4");

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* ── HERO ── */}
      <section className="bg-forest pt-s7 pb-s6 relative overflow-hidden">
        <div className="container-tbc relative z-10">
          <nav aria-label="Breadcrumbs" className="mb-6">
            <ol className="flex items-center gap-2 text-[14px] text-white/60">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li>/</li>
              <li className="text-white font-medium">Digital Transformation</li>
            </ol>
          </nav>

          <div className="max-w-3xl">
            <h1 className="font-display font-bold text-[clamp(32px,4.5vw,54px)] text-white leading-[1.1] mb-6 text-balance">
              Digital transformation: from diagnostic to running systems and trained teams.
            </h1>
            <p className="text-[clamp(17px,1.2vw,20px)] text-white/80 leading-relaxed text-pretty mb-8">
              We do not write advisory slide decks and walk away. We sit with your team, measure process friction, engineer purpose-built software, run systems in production, and hand over full IP ownership.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link href="/book-consultation" className="btn-gold min-h-[48px] px-8 text-[16px]">
                Book a transformation consultation
              </Link>
              <Link href="/services/technology-consulting" className="btn-ghost-white min-h-[48px] px-6 text-[16px]">
                Explore technology consulting
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── 40-TO-4 PROOF POINT STAT BLOCK (Sits here only, per owner rules) ── */}
      <section className="bg-white py-s6 border-b border-light-grey">
        <div className="container-tbc">
          <div className="max-w-4xl mx-auto bg-ivory border-l-4 border-[#167A4E] p-6 sm:p-8 rounded-r-[8px] shadow-sm">
            <span className="font-mono text-[13px] font-semibold text-[#167A4E] block mb-2">
              Operational Leverage In Practice
            </span>
            <p className="font-display font-bold text-[clamp(20px,2.2vw,28px)] text-ink leading-[1.3] mb-3 text-balance">
              In pilot engagements we have taken work that needed a 40-person technology team and run it with 4 people plus machines.
            </p>
            <p className="text-[15px] text-mid-grey leading-relaxed text-pretty">
              By eliminating double data entry, connecting fragmented handoffs, and deploying custom software layers, we deliver radical workforce efficiency without operational disruption.
            </p>
          </div>
        </div>
      </section>

      {/* ── MAIN VISUAL: FIVE-PHASE FLOW DIAGRAM ── */}
      <section className="bg-ivory py-s7 border-b border-light-grey">
        <div className="container-tbc">
          <FivePhaseFlowDiagram />
        </div>
      </section>

      {/* ── BEFORE / AFTER CONTRAST ── */}
      <section className="bg-white py-s7 border-b border-light-grey">
        <div className="container-tbc">
          <BeforeAfterComparison
            title="Traditional IT Projects vs TBC Transformation"
            subtitle="The difference between multi-year slide deck consulting and pragmatic agile delivery."
            beforeTitle="Traditional IT Consultancies"
            beforeItems={[
              "Deliver hundreds of strategy slides without building the software or API connectors.",
              "Force complete ERP replacements that disrupt billing and delay client deliveries.",
              "Bill by person-hours with shifting teams and intellectual property held by the vendor.",
            ]}
            afterTitle="With Turbo Bytes Consulting"
            afterItems={[
              "End-to-end delivery: we diagnose, engineer, deploy, and maintain the production systems.",
              "Modern workflow layers that wrap and sync with existing ERP and Tally installations.",
              "Fixed-phase milestones with 100% intellectual property and source code owned by you.",
            ]}
          />
        </div>
      </section>

      {/* ── RELEVANT VIDEO & SHORT ── */}
      <section className="bg-ivory py-s7 border-b border-light-grey">
        <div className="container-tbc max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-8 items-center">
            {video && (
              <div className="bg-white p-4 rounded-[12px] border border-light-grey shadow-sm">
                <div className="mb-3">
                  <h3 className="font-display font-semibold text-[18px] text-ink">{video.title}</h3>
                  <p className="text-[13px] text-mid-grey">{video.description}</p>
                </div>
                <YouTubeLite id={video.id} title={video.title} />
              </div>
            )}
            {shortVid && (
              <div className="bg-white p-4 rounded-[12px] border border-light-grey shadow-sm flex flex-col items-center">
                <div className="w-full mb-3 text-center">
                  <span className="text-[12px] font-semibold text-[#167A4E] block">Watch Short</span>
                  <h4 className="font-display font-semibold text-[15px] text-ink leading-tight">{shortVid.title}</h4>
                </div>
                <div className="w-[180px]">
                  <YouTubeLite id={shortVid.id} title={shortVid.title} isShort />
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── CORE CAPABILITIES ── */}
      <section className="bg-white py-s7 border-b border-light-grey">
        <div className="container-tbc">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h2 className="font-display font-semibold text-[24px] text-ink mb-2">
              Transformation Practices
            </h2>
            <p className="text-[15px] text-mid-grey">
              Digital transformation unites our primary disciplines into one accountable partnership.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-ivory border border-light-grey rounded-[8px] p-6 flex flex-col justify-between hover:border-[#167A4E]/50 transition-colors">
              <div>
                <h3 className="font-display font-semibold text-[18px] text-ink mb-2">
                  Technology Strategy & Diagnostic
                </h3>
                <p className="text-[14px] text-mid-grey leading-relaxed mb-4">
                  Process mapping and build-or-buy roadmaps before capital expenditure.
                </p>
              </div>
              <Link href="/services/technology-consulting" className="text-[14px] font-semibold text-[#167A4E] hover:underline">
                Explore Consulting &rarr;
              </Link>
            </div>

            <div className="bg-ivory border border-light-grey rounded-[8px] p-6 flex flex-col justify-between hover:border-[#167A4E]/50 transition-colors">
              <div>
                <h3 className="font-display font-semibold text-[18px] text-ink mb-2">
                  Custom Software Development
                </h3>
                <p className="text-[14px] text-mid-grey leading-relaxed mb-4">
                  Purpose-built applications, portals, and bi-directional ERP connectors.
                </p>
              </div>
              <Link href="/services/custom-software-development" className="text-[14px] font-semibold text-[#167A4E] hover:underline">
                Explore Custom Software &rarr;
              </Link>
            </div>

            <div className="bg-ivory border border-light-grey rounded-[8px] p-6 flex flex-col justify-between hover:border-[#167A4E]/50 transition-colors">
              <div>
                <h3 className="font-display font-semibold text-[18px] text-ink mb-2">
                  Process Automation
                </h3>
                <p className="text-[14px] text-mid-grey leading-relaxed mb-4">
                  Eliminating manual data transfer, paper approvals, and department handoff delays.
                </p>
              </div>
              <Link href="/services/business-automation" className="text-[14px] font-semibold text-[#167A4E] hover:underline">
                Explore Automation &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQS (Preserved Accordions & Schema) ── */}
      <section className="bg-ivory py-s7 border-b border-light-grey">
        <div className="container-tbc max-w-4xl">
          <div className="text-center mb-8">
            <h2 className="font-display font-semibold text-[clamp(24px,2.8vw,32px)] text-ink mb-2">
              Frequently Asked Questions
            </h2>
            <p className="text-[15px] text-mid-grey">
              Clear answers about scope, governance, technology ownership, and timelines.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((f, i) => (
              <details key={i} className="group bg-white border border-light-grey rounded-[8px] p-5 [&_summary::-webkit-details-marker]:hidden">
                <summary className="font-display font-semibold text-[17px] text-ink cursor-pointer list-none flex items-center justify-between select-none">
                  <span>{f.question}</span>
                  <span className="text-[#167A4E] text-[18px] transition-transform group-open:rotate-180">↓</span>
                </summary>
                <p className="text-[14px] text-mid-grey leading-relaxed mt-3 pt-3 border-t border-light-grey/80 text-pretty">
                  {f.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-royal py-s7 text-center">
        <div className="container-tbc">
          <h2 className="font-display font-bold text-[clamp(24px,3vw,36px)] text-white leading-[1.2] mb-4 text-balance">
            Talk to our partners about modernising your operations.
          </h2>
          <p className="text-body text-white/80 mb-10 text-pretty max-w-2xl mx-auto">
            Book a 30-minute scoping call. We will review your current systems, calculate where manual processes cost the most, and outline a realistic transformation path.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/book-consultation" className="btn-gold min-h-[48px] px-8 text-[16px]">
              Book a consultation
            </Link>
            <Link href="/free-ai-visibility-check" className="btn-ghost-white min-h-[48px] px-8 text-[16px]">
              Free AI visibility check
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
