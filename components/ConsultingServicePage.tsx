import Link from "next/link";
import type { ConsultingService } from "@/lib/offerings";
import { consultingLinks } from "@/lib/offerings";
import MethodFlowDiagram from "@/components/MethodFlowDiagram";
import BeforeAfterComparison from "@/components/BeforeAfterComparison";

const SITE = "https://turbobytesconsulting.com";

function getRelevantProductsForService(serviceSlug: string) {
  switch (serviceSlug) {
    case "custom-software-development":
      return [
        { title: "Distil", href: "/products/distil", blurb: "Complex engineering proposals assembled from verified data components." },
        { title: "Cadence", href: "/products/cadence", blurb: "Every order from PO to dispatch on a single unified manufacturing board." },
        { title: "Sunscout", href: "/products/sunscout", blurb: "Rooftop solar prospecting and sizing for commercial and industrial EPCs." },
      ];
    case "business-automation":
      return [
        { title: "Steward", href: "/products/steward", blurb: "Installed base, warranty tracking, and AMC service management for equipment makers." },
        { title: "Relay", href: "/products/relay", blurb: "Dealer WhatsApp ordering with tier pricing, credit terms, and schemes applied automatically." },
        { title: "Assay", href: "/products/assay", blurb: "Batch records, lab QC, and Certificate of Analysis digitization without retyping." },
      ];
    case "custom-llm":
    case "ai-training":
    case "ai-applications":
      return [
        { title: "Vantage", href: "/products/vantage", blurb: "Turn years of catalogues, datasheets, and manuals into verifiable cited answers." },
        { title: "Distil", href: "/products/distil", blurb: "Proposal engine powered by verified product specifications and pricing rules." },
        { title: "Rapport", href: "/products/rapport", blurb: "Enquiries, client follow-ups, and document triage for service and technical firms." },
      ];
    case "technology-consulting":
    case "technology-audit":
    case "ai-readiness-assessment":
    case "business-diagnostic":
      return [
        { title: "Compass", href: "/products/compass", blurb: "Project health, team utilisation, and milestone tracking for professional firms." },
        { title: "Vantage", href: "/products/vantage", blurb: "Internal technical documentation search with citations for engineering teams." },
        { title: "Distil", href: "/products/distil", blurb: "Complex proposal generation engine built around strict validation rules." },
      ];
    default:
      return [
        { title: "Distil", href: "/products/distil", blurb: "Complex proposals assembled from verified technical components." },
        { title: "Vantage", href: "/products/vantage", blurb: "Instant answers with exact page citations from your own technical manuals." },
      ];
  }
}

export default function ConsultingServicePage({ s }: { s: ConsultingService }) {
  const url = `${SITE}/services/${s.slug}`;
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: s.title,
        description: s.metaDescription,
        url,
        serviceType: "Consulting",
        areaServed: "Worldwide",
        provider: { "@id": `${SITE}/#organization` },
      },
      {
        "@type": "FAQPage",
        mainEntity: s.faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE },
          { "@type": "ListItem", position: 2, name: "Services", item: `${SITE}/services` },
          { "@type": "ListItem", position: 3, name: s.title, item: url },
        ],
      },
    ],
  };

  const others = consultingLinks.filter((l) => l.href !== `/services/${s.slug}`);
  const relevantProducts = getRelevantProductsForService(s.slug);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* ── BREADCRUMB ── */}
      <nav aria-label="Breadcrumb" className="bg-ivory border-b border-light-grey">
        <div className="container-tbc py-3">
          <ol className="flex items-center gap-2 text-[13px] text-mid-grey">
            <li><Link href="/" className="hover:text-ink transition-colors">Home</Link></li>
            <li aria-hidden="true" className="text-light-grey select-none">/</li>
            <li><Link href="/services" className="hover:text-ink transition-colors">Services</Link></li>
            <li aria-hidden="true" className="text-light-grey select-none">/</li>
            <li className="text-ink font-semibold" aria-current="page">{s.short}</li>
          </ol>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="relative bg-forest overflow-hidden min-h-[380px] flex items-center">
        <div className="container-tbc py-s6 relative z-10">
          <h1 className="font-display font-semibold text-[clamp(32px,4.5vw,52px)] text-white leading-[1.08] tracking-[-0.02em] max-w-3xl mb-6 text-balance">
            {s.title}
          </h1>
          <p className="text-[19px] text-white/80 leading-relaxed max-w-2xl mb-8 text-pretty">{s.lead}</p>
          <Link href="/book-consultation" className="btn-primary">Discuss your situation</Link>
        </div>
      </section>

      {/* ── METHOD FLOW DIAGRAM AT TOP ── */}
      <section className="bg-ivory py-s7 border-b border-light-grey">
        <div className="container-tbc">
          <MethodFlowDiagram
            title="The Advisory & Delivery Method"
            subtitle={`How our ${s.short} engagement moves from diagnostic evaluation to production impact.`}
          />
        </div>
      </section>

      {/* ── BEFORE / AFTER COMPARISON BLOCK ── */}
      <section className="bg-white py-s7 border-b border-light-grey">
        <div className="container-tbc">
          <BeforeAfterComparison
            title={`Operational Shift: ${s.short}`}
            subtitle="The difference between unchecked legacy approaches and disciplined engineering."
            beforeTitle="Typical situation (Before engagement)"
            beforeItems={[
              "Unclear system boundaries and recurring technical friction between departments.",
              "Trial-and-error software purchases that fail to match your actual operating workflows.",
              "Reliance on isolated individuals who hold undocumented operating knowledge.",
            ]}
            afterTitle="With Turbo Bytes Consulting"
            afterItems={[
              "Clear, auditable architecture with fixed milestone roadmaps and transparent costs.",
              "Custom-engineered tools and integrations directly aligned to your business logic.",
              "Documented operating systems, trained staff, and continuous production SLA coverage.",
            ]}
          />
        </div>
      </section>

      {/* ── FOLDED SERVICE DETAILS (What it covers, How it runs, What you receive) ── */}
      <section className="bg-white py-s7 border-b border-light-grey">
        <div className="container-tbc max-w-4xl space-y-6">
          <div className="text-center mb-8">
            <h2 className="font-display font-semibold text-[clamp(24px,2.8vw,32px)] text-ink mb-2">
              Engagement Details & Scope
            </h2>
            <p className="text-[15px] text-mid-grey">
              Everything included in the engagement, structured for transparency and fixed outcomes.
            </p>
          </div>

          {/* 1. What it covers */}
          <details open className="group border border-light-grey rounded-[8px] bg-ivory/40 p-6 [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex items-center justify-between cursor-pointer font-display font-semibold text-[20px] text-ink hover:text-[#167A4E] select-none">
              <span>What it covers ({s.covers.length} areas)</span>
              <span className="text-[#167A4E] text-sm font-sans flex items-center gap-1 group-open:rotate-180 transition-transform">
                ↓
              </span>
            </summary>
            <div className="mt-4 pt-4 border-t border-light-grey">
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {s.covers.map((c) => (
                  <li key={c} className="flex items-start gap-2.5 text-[15px] text-ink">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#167A4E] flex-none mt-2" aria-hidden="true" />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>
          </details>

          {/* 2. How it runs */}
          <details className="group border border-light-grey rounded-[8px] bg-ivory/40 p-6 [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex items-center justify-between cursor-pointer font-display font-semibold text-[20px] text-ink hover:text-[#167A4E] select-none">
              <span>How it runs ({s.process.length} phases)</span>
              <span className="text-[#167A4E] text-sm font-sans flex items-center gap-1 group-open:rotate-180 transition-transform">
                ↓
              </span>
            </summary>
            <div className="mt-4 pt-4 border-t border-light-grey">
              <ol className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {s.process.map((p, i) => (
                  <li key={p.title} className="flex gap-3 bg-white p-4 rounded border border-light-grey">
                    <span className="flex-none w-7 h-7 rounded-full bg-[#0C3D2A] text-white font-mono text-[13px] grid place-items-center">
                      {i + 1}
                    </span>
                    <div>
                      <h4 className="font-display font-semibold text-[16px] text-ink mb-1">{p.title}</h4>
                      <p className="text-[14px] text-mid-grey leading-relaxed">{p.body}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </details>

          {/* 3. What you receive */}
          <details className="group border border-light-grey rounded-[8px] bg-ivory/40 p-6 [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex items-center justify-between cursor-pointer font-display font-semibold text-[20px] text-ink hover:text-[#167A4E] select-none">
              <span>What you receive ({s.deliverables.length} deliverables)</span>
              <span className="text-[#167A4E] text-sm font-sans flex items-center gap-1 group-open:rotate-180 transition-transform">
                ↓
              </span>
            </summary>
            <div className="mt-4 pt-4 border-t border-light-grey">
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {s.deliverables.map((d) => (
                  <li key={d} className="flex items-start gap-2.5 text-[15px] text-ink">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#167A4E] flex-none mt-2" aria-hidden="true" />
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </div>
          </details>
        </div>
      </section>

      {/* ── FAQS (Preserved Accordions) ── */}
      <section className="bg-ivory py-s7 border-b border-light-grey">
        <div className="container-tbc max-w-3xl">
          <div className="text-center mb-8">
            <h2 className="font-display font-semibold text-[clamp(24px,2.8vw,32px)] text-ink mb-2">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-4">
            {s.faqs.map((f) => (
              <details key={f.q} className="group border border-light-grey rounded-[8px] bg-white p-5 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between cursor-pointer font-display font-semibold text-[17px] text-ink hover:text-[#167A4E] select-none">
                  <span>{f.q}</span>
                  <span className="text-[#167A4E] group-open:rotate-180 transition-transform duration-200">↓</span>
                </summary>
                <div className="mt-3 pt-3 border-t border-light-grey text-[15px] text-mid-grey leading-relaxed">
                  {f.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── RELEVANT PRODUCTS ── */}
      {relevantProducts.length > 0 && (
        <section className="bg-white py-s7 border-b border-light-grey">
          <div className="container-tbc">
            <div className="text-center max-w-2xl mx-auto mb-8">
              <h2 className="font-display font-semibold text-[24px] text-ink mb-2">
                Software products built for this practice
              </h2>
              <p className="text-[15px] text-mid-grey">
                In addition to bespoke advisory, we build and run dedicated software products designed around these operational workflows.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relevantProducts.map((p) => (
                <Link key={p.href} href={p.href} className="group block bg-ivory p-6 rounded-[8px] border border-light-grey hover:border-[#167A4E] hover:shadow-sm transition-all">
                  <span className="font-display font-semibold text-[17px] text-ink group-hover:text-[#167A4E] transition-colors block mb-1">{p.title} →</span>
                  <p className="text-[14px] text-mid-grey leading-relaxed">{p.blurb}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── OTHER CONSULTING WORK ── */}
      <section className="bg-ivory py-s7 border-b border-light-grey">
        <div className="container-tbc">
          <h2 className="font-display font-semibold text-[22px] text-ink mb-6 text-center">Other consulting work</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {others.slice(0, 3).map((o) => (
              <Link key={o.href} href={o.href} className="group block bg-white p-5 rounded-[8px] border border-light-grey hover:border-[#167A4E] transition-all">
                <span className="font-display font-semibold text-[16px] text-ink group-hover:text-[#167A4E] transition-colors">{o.title} →</span>
                <p className="text-[14px] text-mid-grey mt-1.5 leading-relaxed">{o.blurb}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-royal py-s7 text-center">
        <div className="container-tbc">
          <h2 className="font-display font-semibold text-[clamp(24px,3vw,34px)] text-white leading-tight mb-4 text-balance">
            Start with a conversation.
          </h2>
          <p className="text-white/80 text-[17px] mb-8 max-w-xl mx-auto">We will respond within one business day.</p>
          <Link href="/book-consultation" className="btn-gold">Request a consultation</Link>
        </div>
      </section>
    </>
  );
}
