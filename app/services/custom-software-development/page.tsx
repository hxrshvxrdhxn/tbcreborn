import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import SectionInk from "@/components/SectionInk";
import CallProcess from "@/components/CallProcess";
import MethodFlowDiagram from "@/components/MethodFlowDiagram";
import BeforeAfterComparison from "@/components/BeforeAfterComparison";

export const metadata: Metadata = {
  title: { absolute: "Custom Software Development, Noida | Turbo Bytes Consulting" },
  description: "Custom business software built around how your company works: workflows, approvals, portals and integrations. Fixed-phase delivery from Greater Noida.",
  alternates: { canonical: "/services/custom-software-development" },
  openGraph: {
    title: { absolute: "Custom Software Development, Noida | Turbo Bytes Consulting" },
    description: "Custom business software built around how your company works: workflows, approvals, portals and integrations. Fixed-phase delivery from Greater Noida.",
    url: "https://turbobytesconsulting.com/services/custom-software-development",
    images: [{ url: "/img/og-default.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image" as const,
    title: { absolute: "Custom Software Development, Noida | Turbo Bytes Consulting" },
    description: "Custom business software built around how your company works: workflows, approvals, portals and integrations. Fixed-phase delivery from Greater Noida.",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Custom software built around how your business actually works",
  provider: {
    "@id": "https://turbobytesconsulting.com/#organization",
  },
  url: "https://turbobytesconsulting.com/services/custom-software-development",
  description: "Custom business software built around how your company works: workflows, approvals, portals and integrations. Fixed-phase delivery from Greater Noida.",
};

const faqList = [
  {
    q: "How do you scope and price custom software projects?",
    a: "We scope projects in transparent, fixed phases tied to measurable business milestones. Following an initial diagnostic discovery, we define the exact scope, technical architecture, and timeline for the first release.",
  },
  {
    q: "Do you build web applications, mobile tools, and MVPs?",
    a: "Yes. Whether your operations require an internal cloud portal, a mobile field ordering application, or a focused initial MVP to validate a new operational workflow, we design and deliver custom software to your exact specifications.",
  },
  {
    q: "How long does it take?",
    a: "A focused first phase usually goes live in 6 to 12 weeks. Larger systems are delivered in iterative phases so value arrives early.",
  },
  {
    q: "Do we own the code?",
    a: "Yes. Source code and intellectual property transfer to you, and the repository sits in your account from day one.",
  },
  {
    q: "Can it connect to Tally and our existing tools?",
    a: "Yes. Integration with accounting, CRM, payment and messaging systems is part of most projects.",
  },
  {
    q: "What happens after launch?",
    a: "We offer support agreements covering fixes, security updates and small improvements, or we hand over to your own team with documentation.",
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

const buildCategories = [
  {
    title: "Workflow systems",
    short: "Purchase, sales, service and approval workflows with roles, limits and audit trails.",
    details: "Configurable validation rules, multi-tier approvals, role-based access control, and automated activity logs.",
  },
  {
    title: "Internal tools",
    short: "The admin panels, trackers and calculators your team uses every day.",
    details: "Tailored operational interfaces that eliminate manual re-calculation and standardise daily entries.",
  },
  {
    title: "Client & vendor portals",
    short: "Self-service access to orders, documents, tickets and invoices.",
    details: "Secure external workspaces giving dealers, vendors, and customers real-time visibility without phone calls.",
  },
  {
    title: "Dashboards & reporting",
    short: "Live numbers from every system in one place, for leadership and teams.",
    details: "Automated aggregations pulling from databases, ERP, and accounting to replace manual month-end sheets.",
  },
  {
    title: "System integrations",
    short: "Tally, Zoho, HubSpot, Razorpay, WhatsApp Business, and existing databases.",
    details: "Robust bi-directional synchronization ensuring transactions and master records stay unified.",
  },
  {
    title: "Legacy modernisation",
    short: "Replacing or wrapping ageing desktop software without stopping the business.",
    details: "Cloud-native web and mobile frontends backed by reliable APIs, phased to prevent operational downtime.",
  },
];

export default function CustomSoftwarePage() {
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
            <li className="text-ink font-semibold" aria-current="page">Custom Software</li>
          </ol>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="bg-forest overflow-hidden min-h-[380px] flex items-center border-b border-light-grey">
        <div className="container-tbc py-s6 relative z-10">
          <h1 className="font-display font-bold text-[clamp(32px,4.5vw,52px)] text-white leading-[1.1] tracking-[-0.5px] max-w-4xl mb-6 text-balance">
            Custom software built around how your business actually works
          </h1>
          <p className="text-body text-white/70 leading-relaxed max-w-3xl mb-8 text-pretty">
            When spreadsheets, WhatsApp groups and off-the-shelf tools stop keeping up, we design and build the system your team needs, in fixed phases with a clear price for each.
          </p>
          <Link href="/book-consultation" className="btn-primary">Scope your software project</Link>
        </div>
      </section>

      {/* ── METHOD FLOW DIAGRAM AT TOP ── */}
      <section className="bg-ivory py-s7 border-b border-light-grey">
        <div className="container-tbc">
          <MethodFlowDiagram
            title="Software Delivery Lifecycle"
            subtitle="Predictable, sprint-based engineering designed around fixed milestones and production stability."
            steps={[
              { number: "01", title: "Diagnostic Scope", summary: "Map data flows, user roles, and edge cases to establish a fixed-phase scope." },
              { number: "02", title: "System Architecture", summary: "Design data schemas, API contracts, security permissions, and clean interfaces." },
              { number: "03", title: "Sprint Engineering", summary: "Rapid build sprints with bi-weekly working demonstrations in your test environment." },
              { number: "04", title: "Launch & Support", summary: "Full team training, source IP transfer, and dedicated production SLA coverage." },
            ]}
          />
        </div>
      </section>

      {/* ── BEFORE / AFTER CONTRAST ── */}
      <section className="bg-white py-s7 border-b border-light-grey">
        <div className="container-tbc">
          <BeforeAfterComparison
            title="Spreadsheets vs Purpose-Built Software"
            subtitle="The operational difference when core operations move into engineered software."
            beforeTitle="Today (Excel, WhatsApp & Fragmented SaaS)"
            beforeItems={[
              "Orders, dispatch dates, and quotes live across personal chat threads and unversioned spreadsheets.",
              "Staff re-enter customer data between billing, warehouse, and accounting software.",
              "Founders spend weekends chasing status updates and consolidating numbers by hand.",
            ]}
            afterTitle="With TBC Custom Software"
            afterItems={[
              "Single operational interface built directly around your team's workflow and business logic.",
              "Automated bi-directional sync with Tally, WhatsApp Business, and internal databases.",
              "Real-time operational dashboard with transparent audit trails and zero per-seat licence taxes.",
            ]}
          />
        </div>
      </section>

      {/* ── SOFTWARE ENGINEERING STANDARDS ── */}
      <section className="bg-ivory py-s7 border-b border-light-grey">
        <div className="container-tbc max-w-5xl">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h2 className="font-display font-semibold text-[clamp(22px,2.6vw,30px)] text-ink mb-2">
              Our Software Engineering Standards
            </h2>
            <p className="text-[15px] text-mid-grey">
              Purpose-built applications engineered for high reliability, zero per-seat taxes, and complete data ownership.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { num: "01", title: "Full Code Ownership", desc: "All source code and schemas sit in your own account with full IP rights." },
              { num: "02", title: "Zero Per-Seat Taxes", desc: "Unlimited team members and operators with custom role-based permissions." },
              { num: "03", title: "Resilient Integrations", desc: "Direct connectors for Tally, WhatsApp, databases, and existing ERPs." },
              { num: "04", title: "Dedicated SLA Maintenance", desc: "Long-term production support, bug fixes, and security patches." },
            ].map((item) => (
              <div key={item.num} className="bg-white border border-light-grey rounded-[8px] p-5 shadow-sm flex flex-col justify-between">
                <div>
                  <span className="font-mono text-[13px] font-bold text-[#167A4E] bg-[#167A4E]/10 px-2 py-0.5 rounded inline-block mb-3">
                    {item.num}
                  </span>
                  <h3 className="font-display font-semibold text-[16px] text-ink mb-1.5">{item.title}</h3>
                  <p className="text-[13px] text-mid-grey leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT WE BUILD (Folded Cards) ── */}
      <section className="bg-white py-s7 border-b border-light-grey">
        <div className="container-tbc">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="font-display font-bold text-[clamp(26px,3vw,36px)] text-ink leading-[1.2] mb-3">
              What We Build
            </h2>
            <p className="text-[16px] text-mid-grey">
              Bespoke systems engineered to replace fragile workarounds and manual handoffs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {buildCategories.map((cat) => (
              <div
                key={cat.title}
                className="bg-ivory border border-light-grey rounded-[8px] p-6 shadow-sm hover:border-[#167A4E]/50 transition-colors flex flex-col"
              >
                <h3 className="font-display font-semibold text-[18px] text-ink mb-2">{cat.title}</h3>
                <p className="text-[14px] text-mid-grey leading-relaxed mb-4 flex-1">{cat.short}</p>
                <details className="group [&_summary::-webkit-details-marker]:hidden border-t border-light-grey/80 pt-3">
                  <summary className="cursor-pointer text-[13px] font-semibold text-[#167A4E] hover:underline flex items-center justify-between select-none">
                    <span>Technical scope</span>
                    <span className="group-open:rotate-180 transition-transform">↓</span>
                  </summary>
                  <p className="text-[13px] text-mid-grey mt-2 leading-relaxed bg-white p-2.5 rounded border border-light-grey">
                    {cat.details}
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
              Tell us what your team does in spreadsheets today. We will propose the software that replaces it.
            </h2>
            <div className="flex items-center justify-center gap-4 flex-wrap mt-10">
              <Link href="/book-consultation" className="btn-gold px-8 py-4 text-[16px]">
                Book a 30-minute scoping call
              </Link>
            </div>
          </Reveal>
        </div>
      </SectionInk>
    </>
  );
}
