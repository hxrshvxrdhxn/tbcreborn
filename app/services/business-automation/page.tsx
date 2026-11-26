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
  title: { absolute: "Business Process Automation, CRM & ERP Development | TBC" },
  description: "Custom CRM, ERP modules, approval workflows, dashboards and reliable integrations with Tally and WhatsApp for growing founder-led Indian businesses.",
  alternates: { canonical: "/services/business-automation" },
  openGraph: {
    title: { absolute: "Business Process Automation, CRM & ERP Development | TBC" },
    description: "Custom CRM, ERP modules, approval workflows, dashboards and reliable integrations with Tally and WhatsApp for growing founder-led Indian businesses.",
    url: "https://turbobytesconsulting.com/services/business-automation",
    images: [{ url: "/img/og-default.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image" as const,
    title: { absolute: "Business Process Automation, CRM & ERP Development | TBC" },
    description: "Custom CRM, ERP modules, approval workflows, dashboards and reliable integrations with Tally and WhatsApp for growing founder-led Indian businesses.",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Automate the work that slows your business down",
  provider: {
    "@id": "https://turbobytesconsulting.com/#organization",
  },
  url: "https://turbobytesconsulting.com/services/business-automation",
  description: "Custom CRM, ERP modules, approval workflows, dashboards and integrations with Tally and WhatsApp for growing Indian businesses.",
};

const faqList = [
  {
    q: "Should we use Zoho or HubSpot instead?",
    a: "If your process is standard, yes, and we will say so. We build custom when your process does not fit or licence costs outgrow a one-time build.",
  },
  {
    q: "Can you integrate with Tally?",
    a: "Yes. We sync customers, invoices and payment status between Tally and your operational systems automatically.",
  },
  {
    q: "Can you extend our existing software instead of replacing it?",
    a: "Often that is the best route. We build the missing piece and connect it by API.",
  },
  {
    q: "How do you avoid disrupting operations?",
    a: "New systems run alongside the old process until your team signs off.",
  },
  {
    q: "What does automation cost?",
    a: "Single workflows start small; multi-department systems are phased. Discovery gives a fixed price per phase.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqList.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: f.a,
    },
  })),
};

const automationAreas = [
  {
    title: "Custom CRM & Order Pipeline",
    short: "Leads, accounts, quotations, follow-ups and dealer networks, built around how you sell.",
    detail: "Direct WhatsApp lead capture, quote approvals, tiered discount permissions, and automatic dispatch notifications.",
  },
  {
    title: "ERP & Inventory Modules",
    short: "Purchase, inventory, production planning, dispatch and field service.",
    detail: "Batch tracking, reorder thresholds, vendor purchase orders, and goods receipt notes linked to accounts.",
  },
  {
    title: "Multi-Tier Approval Workflows",
    short: "Purchase, discount, expense and leave approvals with limits and audit trails.",
    detail: "Mobile approval links with instant notifications, preventing purchase orders from stalling in founder inboxes.",
  },
  {
    title: "Leadership Dashboards",
    short: "Live leadership reporting pulled automatically from every system.",
    detail: "Real-time receivables, pipeline health, inventory aging, and production output on one clean screen.",
  },
  {
    title: "Tally & API Integrations",
    short: "Tally, Zoho, HubSpot, Razorpay, GST invoicing and WhatsApp Business API.",
    detail: "Eliminates duplicate manual voucher entries between warehouse dispatch, billing, and accounting.",
  },
  {
    title: "Workflow Engine Automation",
    short: "N8n, Make or custom Python services, whichever is simplest to maintain.",
    detail: "Event-driven webhooks connecting field activities, document generation, and email/WhatsApp dispatch.",
  },
];

export default function BusinessAutomationPage() {
  const shortVid = getVideoById("caeVTTvIeBA");

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* ── BREADCRUMB ── */}
      <nav aria-label="Breadcrumb" className="bg-ivory border-b border-light-grey">
        <div className="container-tbc py-3">
          <ol className="flex items-center gap-2 text-[13px] text-mid-grey">
            <li><Link href="/" className="hover:text-ink transition-colors">Home</Link></li>
            <li aria-hidden="true" className="text-light-grey select-none">/</li>
            <li><Link href="/services" className="hover:text-ink transition-colors">Services</Link></li>
            <li aria-hidden="true" className="text-light-grey select-none">/</li>
            <li className="text-ink font-semibold" aria-current="page">Business Automation</li>
          </ol>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="bg-forest overflow-hidden min-h-[380px] flex items-center border-b border-light-grey">
        <div className="container-tbc py-s6 relative z-10">
          <h1 className="font-display font-bold text-[clamp(32px,4.5vw,52px)] text-white leading-[1.1] tracking-[-0.5px] max-w-4xl mb-6 text-balance">
            Automate the work that slows your business down
          </h1>
          <p className="text-body text-white/70 leading-relaxed max-w-3xl mb-8 text-pretty">
            We replace manual steps, re-keying and chasing with connected systems: custom CRM and ERP modules, approvals, dashboards and integrations with the tools you already use.
          </p>
          <Link href="/book-consultation" className="btn-primary">Audit your automation opportunities</Link>
        </div>
      </section>

      {/* ── METHOD FLOW DIAGRAM ── */}
      <section className="bg-ivory py-s7 border-b border-light-grey">
        <div className="container-tbc">
          <MethodFlowDiagram
            title="The Automation Pipeline"
            subtitle="How we eliminate manual handoffs and bridge fragmented tools into automated flows."
            steps={[
              { number: "01", title: "Process Audit", summary: "Identify every handover, spreadsheet re-entry, and WhatsApp approval bottleneck." },
              { number: "02", title: "Data Architecture", summary: "Design unified schemas and API triggers between accounting, sales, and operations." },
              { number: "03", title: "Workflow Build", summary: "Engineered automation modules and connectors tested against edge cases." },
              { number: "04", title: "Parallel Rollout", summary: "Run alongside legacy workflows until verified, followed by team training and SLA." },
            ]}
          />
        </div>
      </section>

      {/* ── BEFORE / AFTER CONTRAST ── */}
      <section className="bg-white py-s7 border-b border-light-grey">
        <div className="container-tbc">
          <BeforeAfterComparison
            title="Manual Re-entry vs Connected Systems"
            subtitle="The operational transformation when department handoffs happen via automated logic."
            beforeTitle="Today (Fragmented operations)"
            beforeItems={[
              "Sales writes order in WhatsApp; accounts re-types it into Tally; dispatch copies into Excel.",
              "Purchase approvals sit in senior manager inboxes for days, delaying factory production.",
              "Month-end financial and inventory reports take three days to reconcile manually.",
            ]}
            afterTitle="With TBC Process Automation"
            afterItems={[
              "Single entry triggers automatic inventory allocation, Tally voucher sync, and dispatch notice.",
              "One-click mobile approvals with policy limits, instant escalations, and full audit logs.",
              "Live dashboards show cash, orders, and inventory updated instantly without manual compilation.",
            ]}
          />
        </div>
      </section>

      {/* ── AUTOMATION PIPELINE STEP STRIP ── */}
      <section className="bg-ivory py-s7 border-b border-light-grey">
        <div className="container-tbc max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_260px] gap-8 items-center">
            <div>
              <span className="font-mono text-[12px] font-semibold text-[#167A4E] uppercase tracking-wider block mb-2">
                Operational Pipeline
              </span>
              <h2 className="font-display font-semibold text-[clamp(22px,2.6vw,30px)] text-ink mb-3">
                Order to Dispatch Without Manual Chasing
              </h2>
              <p className="text-[15px] text-mid-grey mb-6 text-pretty">
                Every customer enquiry, approval, and warehouse movement triggers the next step automatically.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { num: "01", title: "Enquiry & Quotation", desc: "Instant quote generation with pre-approved price lists and discount limits." },
                  { num: "02", title: "One-Tap Approvals", desc: "Purchase and credit approvals resolved via mobile notifications." },
                  { num: "03", title: "Tally & ERP Sync", desc: "Automated voucher creation with zero duplicate re-typing." },
                  { num: "04", title: "Live Dispatch Board", desc: "Shop floor and logistics teams see real-time status and tracking links." },
                ].map((s) => (
                  <div key={s.num} className="bg-white p-4 rounded border border-light-grey">
                    <span className="font-mono text-[12px] font-bold text-[#167A4E] bg-[#167A4E]/10 px-2 py-0.5 rounded inline-block mb-1.5">{s.num}</span>
                    <h4 className="font-display font-semibold text-[15px] text-ink mb-1">{s.title}</h4>
                    <p className="text-[13px] text-mid-grey leading-relaxed">{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            {shortVid && (
              <div className="bg-white p-4 rounded-[12px] border border-light-grey shadow-sm flex flex-col items-center">
                <div className="w-full mb-3 text-center">
                  <span className="text-[12px] font-semibold text-[#167A4E] block">Watch Short</span>
                  <h4 className="font-display font-semibold text-[14px] text-ink leading-tight">{shortVid.title}</h4>
                </div>
                <div className="w-[180px]">
                  <YouTubeLite id={shortVid.id} title={shortVid.title} isShort />
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── WHAT WE BUILD (Folded Cards) ── */}
      <section className="bg-white py-s7 border-b border-light-grey">
        <div className="container-tbc">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="font-display font-bold text-[clamp(26px,3vw,36px)] text-ink leading-[1.2] mb-3">
              Automation Systems We Build
            </h2>
            <p className="text-[16px] text-mid-grey">
              Targeted modules engineered to integrate seamlessly into your current operational tech stack.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {automationAreas.map((cat) => (
              <div
                key={cat.title}
                className="bg-ivory border border-light-grey rounded-[8px] p-6 shadow-sm hover:border-[#167A4E]/50 transition-colors flex flex-col"
              >
                <h3 className="font-display font-semibold text-[18px] text-ink mb-2">{cat.title}</h3>
                <p className="text-[14px] text-mid-grey leading-relaxed mb-4 flex-1">{cat.short}</p>
                <details className="group [&_summary::-webkit-details-marker]:hidden border-t border-light-grey/80 pt-3">
                  <summary className="cursor-pointer text-[13px] font-semibold text-[#167A4E] hover:underline flex items-center justify-between select-none">
                    <span>Integration specs</span>
                    <span className="group-open:rotate-180 transition-transform">↓</span>
                  </summary>
                  <p className="text-[13px] text-mid-grey mt-2 leading-relaxed bg-white p-2.5 rounded border border-light-grey">
                    {cat.detail}
                  </p>
                </details>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQS ── */}
      <section className="bg-ivory py-s7 border-b border-light-grey" aria-labelledby="faq-heading">
        <div className="container-tbc max-w-3xl">
          <div className="text-center mb-10">
            <h2 id="faq-heading" className="font-display font-bold text-[clamp(26px,3vw,34px)] text-ink leading-[1.2] mb-3">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-4">
            {faqList.map((f) => (
              <details key={f.q} className="group border border-light-grey rounded-[8px] bg-white [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between cursor-pointer p-6 font-display font-semibold text-ink text-[17px] hover:bg-ivory/50 select-none rounded transition-colors">
                  <span>{f.q}</span>
                  <span className="text-[#167A4E] group-open:rotate-180 transition-transform duration-300">
                    ↓
                  </span>
                </summary>
                <div className="p-6 pt-0 font-sans text-[15px] text-mid-grey leading-relaxed bg-white rounded-b border-t border-light-grey/60 mt-1">
                  {f.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CallProcess />

      {/* ── CTA ── */}
      <SectionInk className="text-center">
        <div className="container-tbc">
          <Reveal>
            <h2 className="font-display font-bold text-[clamp(26px,3.5vw,40px)] text-white leading-[1.2] max-w-3xl mx-auto mb-6">
              Tell us where your team re-types data or waits for approvals. We will show you what can be automated first.
            </h2>
            <div className="flex items-center justify-center gap-4 flex-wrap mt-10">
              <Link href="/book-consultation" className="btn-gold px-8 py-4 text-[16px]">
                Book a 30-minute scoping call
              </Link>
              <a href="https://wa.me/919354784377" target="_blank" rel="noopener noreferrer" className="btn-gold bg-transparent border border-gold text-gold hover:bg-gold/10 px-8 py-4 text-[16px]">
                WhatsApp Us
              </a>
            </div>
          </Reveal>
        </div>
      </SectionInk>
    </>
  );
}
