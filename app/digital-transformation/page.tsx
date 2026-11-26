import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: { absolute: "Digital Transformation Consulting | Turbo Bytes" },
  description: "End-to-end digital transformation for mid-market firms across India, Middle East and APAC. From diagnostic and custom build to running systems and hand over.",
  alternates: { canonical: "/digital-transformation" },
  openGraph: {
    title: { absolute: "Digital Transformation Consulting | Turbo Bytes" },
    description: "End-to-end digital transformation for mid-market firms across India, Middle East and APAC. From diagnostic and custom build to running systems and hand over.",
    url: "https://turbobytesconsulting.com/digital-transformation",
    images: [{ url: "/img/og-default.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image" as const,
    title: { absolute: "Digital Transformation Consulting | Turbo Bytes" },
    description: "End-to-end digital transformation for mid-market firms across India, Middle East and APAC. From diagnostic and custom build to running systems and hand over.",
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
  description: "End-to-end digital transformation consulting for mid-market enterprises across India, the Middle East, and Asia-Pacific. From operational diagnostic to bespoke build, operational management, and complete handover.",
  areaServed: ["IN", "AE", "SA", "SG", "AU"],
  serviceType: "Digital Transformation and Technology Modernisation Consulting"
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://turbobytesconsulting.com" },
    { "@type": "ListItem", position: 2, name: "Digital Transformation", item: "https://turbobytesconsulting.com/digital-transformation" }
  ]
};

const faqs = [
  {
    question: "What makes TBC's digital transformation approach different from big IT consultancies?",
    answer: "Most traditional IT consultancies deliver multi-hundred-page strategy slide decks and leave execution to third-party sub-contractors. We sit with the managing director and frontline staff, diagnose the costliest bottlenecks, build the exact software and automations needed, run the systems in production, and hand over full source code ownership."
  },
  {
    question: "Do we have to replace our existing ERP or accounting system like Tally?",
    answer: "No. Replacing a stable accounting system is disruptive and unnecessary. We build modern workflow, approval, and mobile data capture layers that sit above your existing ERP or Tally, synchronising data bi-directionally without disrupting daily financial operations."
  },
  {
    question: "How long does an end-to-end transformation engagement take?",
    answer: "Our diagnostic phase takes two to three weeks. We deliver initial production automation wins within six to eight weeks. Full multi-department modernisations are delivered in iterative quarterly phases, ensuring commercial value is realised early."
  },
  {
    question: "Who owns the software and intellectual property created during the engagement?",
    answer: "You do. From day one, all repositories, database schemas, custom automation scripts, and intellectual property sit in your accounts. Upon handover, your team receives complete ownership, architectural runbooks, and staff training."
  },
  {
    question: "What is your real-world delivery benchmark for operational leverage?",
    answer: "In pilot engagements we have taken work that needed a 40-person technology team and run it with 4 people plus machines. We achieve this by eliminating redundant data entry, connecting fragmented handoffs, and deploying targeted automation."
  },
  {
    question: "What geographical regions do you support?",
    answer: "We support mid-market enterprises, industrial manufacturers, and high-growth organisations across India, the United Arab Emirates, Saudi Arabia, Singapore, and Australia."
  }
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(f => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: f.answer
    }
  }))
};

export default function DigitalTransformationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

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
            <hr className="gold-rule mb-6" />
            <h1 className="font-display font-bold text-[clamp(32px,4.5vw,54px)] text-white leading-[1.1] mb-6 text-balance">
              Digital transformation: from diagnostic to running systems and trained teams.
            </h1>
            <p className="text-[clamp(17px,1.2vw,20px)] text-white/80 leading-relaxed text-pretty mb-8">
              Digital transformation consulting India, Middle East, and Asia-Pacific leadership teams partner with to fix operational bottlenecks. We do not write advisory slide decks and walk away. We sit with your team, measure what processes cost, build software for your exact operational needs, run the systems, and hand over full ownership.
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

      {/* ── 40-TO-4 PROOF POINT STAT BLOCK ── */}
      <section className="bg-white py-s6 border-b border-light-grey">
        <div className="container-tbc">
          <div className="max-w-4xl mx-auto bg-ivory border-l-4 border-forest p-8 rounded-r-[8px]">
            <span className="font-mono text-[14px] font-bold text-forest uppercase tracking-wider block mb-2">
              Operational Leverage In Practice
            </span>
            <p className="font-display font-bold text-[clamp(20px,2.2vw,28px)] text-ink leading-[1.3] mb-4 text-balance">
              In pilot engagements we have taken work that needed a 40-person technology team and run it with 4 people plus machines.
            </p>
            <p className="text-body text-mid-grey leading-relaxed text-pretty">
              We never inflate outcomes or make unsubstantiated claims. By identifying high-friction manual handoffs, eliminating double data entry between departments, and deploying specialized automation layers, we deliver radical workforce efficiency without disrupting existing business stability.
            </p>
          </div>
        </div>
      </section>

      {/* ── THE 5 PHASES (WHAT CLIENT GETS) ── */}
      <section className="bg-ivory py-s6 md:py-s7 border-b border-light-grey">
        <div className="container-tbc">
          <hr className="gold-rule mb-6" />
          <h2 className="font-display font-bold text-[clamp(26px,2.5vw,36px)] text-ink leading-[1.2] mb-4">
            The five phases of an end-to-end engagement.
          </h2>
          <p className="text-body text-mid-grey leading-relaxed max-w-2xl mb-12">
            Every phase produces tangible, operational deliverables. No theoretical models or unresolved questions.
          </p>

          <div className="space-y-8 max-w-4xl mx-auto">
            {[
              {
                phase: "Phase 01",
                name: "Diagnose",
                lead: "We sit down with the managing director and department leaders to observe how work actually moves through your business.",
                deliverables: [
                  "Comprehensive visual process and handoff map",
                  "Quantified cost-of-delay and bottleneck calculations",
                  "Identification of spreadsheet gaps and duplicate data entry",
                  "Prioritised transformation roadmap ranked by commercial ROI"
                ]
              },
              {
                phase: "Phase 02",
                name: "Design",
                lead: "We engineer the target operational state and technical architecture before a single line of production code is written.",
                deliverables: [
                  "Target systems architecture and data flow specifications",
                  "Interactive UI wireframes designed for shop floor and desk users",
                  "Integration blueprints for Tally, ERPs, CRM, and communication tools",
                  "Security, access control, and compliance governance model"
                ]
              },
              {
                phase: "Phase 03",
                name: "Build",
                lead: "We develop custom software, automation pipelines, and dedicated intelligence tools built around your exact operational needs.",
                deliverables: [
                  "Bespoke software applications delivered in stage-gated milestones",
                  "Bi-directional API connectors linking accounting and floor systems",
                  "Automated notification triggers, approval chains, and document generators",
                  "Continuous sprint demos with your functional stakeholders"
                ]
              },
              {
                phase: "Phase 04",
                name: "Run",
                lead: "We deploy the systems to production, monitor live telemetry, and manage early operations alongside your staff.",
                deliverables: [
                  "Coordinated production cutover with zero downtime",
                  "Real-time error logging, latency monitoring, and telemetry dashboards",
                  "Dedicated SLA support covering bug fixes and minor adjustments",
                  "Continuous performance tuning based on real operational feedback"
                ]
              },
              {
                phase: "Phase 05",
                name: "Hand Over",
                lead: "We train your internal team and hand over complete operational control and intellectual property.",
                deliverables: [
                  "Complete transfer of source code repositories in your accounts",
                  "Comprehensive technical documentation and operational runbooks",
                  "Role-based staff training sessions and video documentation",
                  "Final handover sign-off with optional ongoing maintenance agreements"
                ]
              }
            ].map((p, idx) => (
              <div key={idx} className="bg-white border border-light-grey rounded-[8px] p-8 shadow-sm">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 pb-4 border-b border-light-grey">
                  <span className="font-mono text-[15px] font-bold text-forest">
                    {p.phase}
                  </span>
                  <h3 className="font-display font-bold text-[22px] text-ink">
                    {p.name}
                  </h3>
                </div>
                <p className="text-body text-mid-grey leading-relaxed mb-6">
                  {p.lead}
                </p>
                <div>
                  <h4 className="text-[14px] font-semibold text-ink mb-3">
                    What your team receives:
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {p.deliverables.map((item, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2.5 text-[14px] text-ink font-medium">
                        <span className="mt-[5px] flex-shrink-0 w-1.5 h-1.5 rounded-full bg-forest" aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONNECTED SERVICES ── */}
      <section className="bg-white py-s6 border-b border-light-grey">
        <div className="container-tbc">
          <hr className="gold-rule mb-6" />
          <h2 className="font-display font-bold text-[clamp(26px,2.5vw,36px)] text-ink leading-[1.2] mb-4">
            Transformation capabilities.
          </h2>
          <p className="text-body text-mid-grey leading-relaxed max-w-2xl mb-12">
            Digital transformation combines our core consulting practices into one unified engagement.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-ivory border border-light-grey rounded-[8px] p-8 flex flex-col justify-between">
              <div>
                <h3 className="font-display font-bold text-[20px] text-ink mb-3">
                  Technology Consulting
                </h3>
                <p className="text-body text-mid-grey leading-relaxed mb-6">
                  Independent diagnostic audits, process mapping, and systems architecture strategy before capital expenditure.
                </p>
              </div>
              <Link href="/services/technology-consulting" className="text-[15px] font-semibold text-royal hover:underline">
                Explore Consulting &rarr;
              </Link>
            </div>

            <div className="bg-ivory border border-light-grey rounded-[8px] p-8 flex flex-col justify-between">
              <div>
                <h3 className="font-display font-bold text-[20px] text-ink mb-3">
                  Custom Software Development
                </h3>
                <p className="text-body text-mid-grey leading-relaxed mb-6">
                  Software built around how your company works: workflows, approvals, portals, and bi-directional ERP integrations.
                </p>
              </div>
              <Link href="/services/custom-software-development" className="text-[15px] font-semibold text-royal hover:underline">
                Explore Custom Software &rarr;
              </Link>
            </div>

            <div className="bg-ivory border border-light-grey rounded-[8px] p-8 flex flex-col justify-between">
              <div>
                <h3 className="font-display font-bold text-[20px] text-ink mb-3">
                  Business Process Automation
                </h3>
                <p className="text-body text-mid-grey leading-relaxed mb-6">
                  Eliminating manual data transfer, paper approvals, and repetitive cross-department tasks.
                </p>
              </div>
              <Link href="/services/business-automation" className="text-[15px] font-semibold text-royal hover:underline">
                Explore Automation &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQS ── */}
      <section className="bg-ivory py-s6 border-b border-light-grey">
        <div className="container-tbc max-w-4xl">
          <hr className="gold-rule mb-6" />
          <h2 className="font-display font-bold text-[clamp(26px,2.5vw,36px)] text-ink leading-[1.2] mb-4">
            Frequently asked questions.
          </h2>
          <p className="text-body text-mid-grey leading-relaxed max-w-2xl mb-12">
            Clear answers about engagement scope, governance, technology ownership, and timelines.
          </p>

          <div className="space-y-4">
            {faqs.map((f, i) => (
              <details key={i} className="group bg-white border border-light-grey rounded-[8px] p-6 open:shadow-card transition-all">
                <summary className="font-display font-bold text-[18px] text-ink cursor-pointer list-none flex items-center justify-between">
                  <span>{f.question}</span>
                  <span className="text-mid-grey text-[20px] transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="text-body text-mid-grey leading-relaxed mt-4 pt-4 border-t border-light-grey text-pretty">
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
          <hr className="gold-rule gold-rule--center mb-8" />
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