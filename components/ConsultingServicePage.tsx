import Link from "next/link";
import Reveal from "@/components/Reveal";
import type { ConsultingService } from "@/lib/offerings";
import { consultingLinks } from "@/lib/offerings";

const SITE = "https://turbobytesconsulting.com";

// Editorial two-column layout: the heading sits in a left rail, the content on the right.
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
        areaServed: "IN",
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

      <section className="relative bg-forest overflow-hidden min-h-[380px] flex items-center">
        <div className="container-tbc py-s6 relative z-10">
          <h1 className="font-display font-semibold text-[clamp(32px,4.5vw,52px)] text-white leading-[1.08] tracking-[-0.02em] max-w-3xl mb-6 text-balance">
            {s.title}
          </h1>
          <p className="text-[19px] text-white/80 leading-relaxed max-w-2xl mb-8 text-pretty">{s.lead}</p>
          <Link href="/book-consultation" className="btn-primary">Discuss your situation</Link>
        </div>
      </section>

      {[
        {
          heading: "What it covers",
          body: (
            <ul className="divide-y divide-light-grey border-y border-light-grey">
              {s.covers.map((c) => (
                <li key={c} className="py-4 text-[17px] text-ink leading-snug">{c}</li>
              ))}
            </ul>
          ),
        },
        {
          heading: "How it runs",
          body: (
            <ol className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-8">
              {s.process.map((p, i) => (
                <li key={p.title} className="flex gap-4">
                  <span className="flex-none w-9 h-9 rounded-full border border-royal text-royal font-semibold text-[15px] grid place-items-center" aria-hidden="true">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-display font-semibold text-[18px] text-ink mb-1">{p.title}</h3>
                    <p className="text-[16px] text-mid-grey leading-relaxed">{p.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          ),
        },
        {
          heading: "What you receive",
          body: (
            <ul className="space-y-3">
              {s.deliverables.map((d) => (
                <li key={d} className="flex gap-3 text-[17px] text-ink">
                  <span className="mt-[9px] w-2 h-2 rounded-full bg-royal flex-none" aria-hidden="true" />
                  {d}
                </li>
              ))}
            </ul>
          ),
        },
        {
          heading: "Questions",
          body: (
            <div className="space-y-8">
              {s.faqs.map((f) => (
                <div key={f.q}>
                  <h3 className="font-display font-semibold text-[18px] text-ink mb-2">{f.q}</h3>
                  <p className="text-[16px] text-mid-grey leading-relaxed measure-68">{f.a}</p>
                </div>
              ))}
            </div>
          ),
        },
      ].map((row, i) => (
        <section key={row.heading} className={`${i % 2 ? "bg-white" : "bg-ivory"} py-s6 border-b border-light-grey`}>
          <div className="container-tbc grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8 lg:gap-16">
            <Reveal>
              <h2 className="font-display font-semibold text-[clamp(24px,2.6vw,30px)] text-ink leading-tight tracking-[-0.015em]">{row.heading}</h2>
            </Reveal>
            <Reveal delay={0.05}>{row.body}</Reveal>
          </div>
        </section>
      ))}

      {relevantProducts.length > 0 && (
        <section className="bg-ivory py-s6 border-b border-light-grey">
          <div className="container-tbc">
            <h2 className="font-display font-semibold text-[22px] text-ink mb-2">
              Software products built for this practice
            </h2>
            <p className="text-[15px] text-mid-grey max-w-2xl mb-6">
              In addition to bespoke advisory, we build and run dedicated software products designed around these operational workflows.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relevantProducts.map((p) => (
                <Link key={p.href} href={p.href} className="group block bg-white p-6 rounded-[8px] border border-light-grey hover:border-royal hover:shadow-sm transition-all">
                  <span className="font-display font-semibold text-[17px] text-ink group-hover:text-royal transition-colors block mb-1">{p.title} →</span>
                  <p className="text-[14px] text-mid-grey leading-relaxed">{p.blurb}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="bg-white py-s6">
        <div className="container-tbc">
          <h2 className="font-display font-semibold text-[22px] text-ink mb-6">Other consulting work</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {others.map((o) => (
              <Link key={o.href} href={o.href} className="group block border-t-2 border-royal pt-4">
                <span className="font-display font-semibold text-[17px] text-ink group-hover:text-royal transition-colors">{o.title} →</span>
                <p className="text-[15px] text-mid-grey mt-2 leading-relaxed">{o.blurb}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-royal py-s6 text-center">
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
