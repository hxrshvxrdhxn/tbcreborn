import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: { absolute: "SEO Services India, Middle East & APAC | Turbo Bytes" },
  description: "Technical and entity-driven search engine optimisation for B2B firms. Clean crawl paths, Core Web Vitals, canonical architecture, and structured data.",
  alternates: { canonical: "/services/seo" },
  openGraph: {
    title: { absolute: "SEO Services India, Middle East & APAC | Turbo Bytes" },
    description: "Technical and entity-driven search engine optimisation for B2B firms. Clean crawl paths, Core Web Vitals, canonical architecture, and structured data.",
    url: "https://turbobytesconsulting.com/services/seo",
    images: [{ url: "/img/og-default.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image" as const,
    title: { absolute: "SEO Services India, Middle East & APAC | Turbo Bytes" },
    description: "Technical and entity-driven search engine optimisation for B2B firms. Clean crawl paths, Core Web Vitals, canonical architecture, and structured data.",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Technical and Entity-Driven SEO Services",
  provider: {
    "@id": "https://turbobytesconsulting.com/#organization",
  },
  url: "https://turbobytesconsulting.com/services/seo",
  description: "Enterprise technical SEO, canonical architecture, schema markup, and Core Web Vitals optimisation for B2B companies across India, the Middle East, and Asia-Pacific.",
  areaServed: ["IN", "AE", "SA", "SG", "AU"],
  serviceType: "Search Engine Optimisation Consulting"
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://turbobytesconsulting.com" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://turbobytesconsulting.com/services" },
    { "@type": "ListItem", position: 3, name: "SEO", item: "https://turbobytesconsulting.com/services/seo" }
  ]
};

const faqs = [
  {
    question: "What makes technical SEO different from standard content marketing?",
    answer: "Technical SEO focuses on the underlying infrastructure that search engines use to discover, render, and index your website. This includes crawl budget optimization, server response times, canonical tag configurations, XML sitemaps, JSON-LD structured schemas, and Core Web Vitals performance rather than generic blog writing."
  },
  {
    question: "How long does it take for technical SEO changes to show results?",
    answer: "Technical fixes such as resolving 404 crawl errors, implementing canonical tags, and correcting schema errors are typically reflected in Google Search Console within two to three weeks. Ranking gains and traffic growth for competitive commercial keywords develop over three to six months."
  },
  {
    question: "Do you offer guaranteed keyword rankings on Google?",
    answer: "No. We do not guarantee specific ranking positions. Search engines update their ranking algorithms continuously and operate autonomously. We guarantee strict adherence to Google Search Essentials, clean semantic code, robust server performance, and verifiable monthly reporting."
  },
  {
    question: "Can you fix Core Web Vitals failures on our existing website?",
    answer: "Yes. We diagnose and resolve Largest Contentful Paint (LCP), Interaction to Next Paint (INP), and Cumulative Layout Shift (CLS) bottlenecks by refactoring JavaScript bundles, optimising responsive image delivery, deferring non-critical scripts, and tuning web fonts."
  },
  {
    question: "How does your SEO service support AI visibility (AEO and GEO)?",
    answer: "A solid technical SEO foundation is a prerequisite for both Answer Engine Optimisation (AEO) and Generative Engine Optimisation (GEO). If search engine bots cannot crawl your site cleanly or parse your entity relationships, large language models cannot reliably retrieve or cite your content."
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

export default function SeoServicePage() {
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
              <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
              <li>/</li>
              <li className="text-white font-medium">SEO</li>
            </ol>
          </nav>

          <div className="max-w-3xl">
            <hr className="gold-rule mb-6" />
            <h1 className="font-display font-bold text-[clamp(32px,4.5vw,54px)] text-white leading-[1.1] mb-6 text-balance">
              Technical and entity-driven search engine optimisation.
            </h1>
            <p className="text-[clamp(17px,1.2vw,20px)] text-white/80 leading-relaxed text-pretty mb-8">
              Technical SEO services India, Middle East, and Asia-Pacific businesses rely on to establish sustained organic visibility. We eliminate crawl roadblocks, implement semantic schema graphs, optimize Core Web Vitals, and build topical authority that earns high-intent commercial search traffic.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link href="/free-ai-visibility-check" className="btn-gold min-h-[48px] px-8 text-[16px]">
                Free search & AI audit
              </Link>
              <Link href="/services/aeo-seo-geo" className="btn-ghost-white min-h-[48px] px-6 text-[16px]">
                View AEO & GEO overview
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── CORE CAPABILITIES ── */}
      <section className="bg-white py-s6 border-b border-light-grey">
        <div className="container-tbc">
          <hr className="gold-rule mb-6" />
          <h2 className="font-display font-bold text-[clamp(26px,2.5vw,36px)] text-ink leading-[1.2] mb-4">
            What our technical SEO consulting covers.
          </h2>
          <p className="text-body text-mid-grey leading-relaxed max-w-2xl mb-8">
            We fix the technical and architectural barriers that prevent search engines from understanding and ranking your high-value business pages.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {[
              {
                title: "Crawl & Index Architecture",
                description: "Eliminating crawl traps, managing faceted navigation, fixing redirect chains, and maintaining dynamic XML sitemaps to ensure search bots prioritize your most valuable commercial pages."
              },
              {
                title: "Semantic Entity Schema",
                description: "Deploying comprehensive Schema.org JSON-LD across Organization, Service, Product, FAQPage, and BreadcrumbList schemas to establish unmistakable entity relationships."
              },
              {
                title: "Core Web Vitals Engineering",
                description: "Improving LCP, INP, and CLS scores through server-side optimizations, critical asset inlining, image modernizations (WebP/AVIF), and script execution tuning."
              },
              {
                title: "Canonical & International SEO",
                description: "Ensuring proper canonicalization across regional domains, hreflang implementations for multi-market reach across India, the GCC, and Southeast Asia, and HTTPS security compliance."
              },
              {
                title: "Topical Content Architecture",
                description: "Structuring content clusters that demonstrate deep domain competence around your primary products and services, answering real buyer intents with zero keyword stuffing."
              },
              {
                title: "Search Console Analytics",
                description: "Rigorous monitoring of Google Search Console data: index coverage, query impressions, average position trends, crawl stats, and click-through rate optimization."
              }
            ].map((cap, i) => (
              <div key={i} className="bg-ivory border border-light-grey rounded-[8px] p-6">
                <h3 className="font-display font-bold text-[18px] text-ink mb-3">{cap.title}</h3>
                <p className="text-body text-mid-grey leading-relaxed text-[15px]">{cap.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RELATED SERVICES ── */}
      <section className="bg-ivory py-s6 border-b border-light-grey">
        <div className="container-tbc">
          <hr className="gold-rule mb-6" />
          <h2 className="font-display font-bold text-[clamp(26px,2.5vw,36px)] text-ink leading-[1.2] mb-4">
            Beyond traditional search rankings.
          </h2>
          <p className="text-body text-mid-grey leading-relaxed max-w-2xl mb-8">
            SEO provides the foundation. Pair it with answer engine optimisation and generative AI search.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 max-w-4xl mx-auto">
            <div className="bg-white border border-light-grey rounded-[8px] p-8 flex flex-col justify-between">
              <div>
                <h3 className="font-display font-bold text-[20px] text-ink mb-2">
                  Answer Engine Optimisation (AEO)
                </h3>
                <p className="text-body text-mid-grey leading-relaxed mb-6">
                  Position your pages for featured snippets and People Also Ask boxes with answer-first headers and structured data.
                </p>
              </div>
              <Link href="/services/answer-engine-optimisation" className="text-[15px] font-semibold text-royal hover:underline">
                Explore AEO &rarr;
              </Link>
            </div>

            <div className="bg-white border border-light-grey rounded-[8px] p-8 flex flex-col justify-between">
              <div>
                <h3 className="font-display font-bold text-[20px] text-ink mb-2">
                  Generative Engine Optimisation (GEO)
                </h3>
                <p className="text-body text-mid-grey leading-relaxed mb-6">
                  Ensure ChatGPT, Gemini, and Perplexity cite your brand when buyers ask for vendor recommendations.
                </p>
              </div>
              <Link href="/services/generative-engine-optimisation" className="text-[15px] font-semibold text-royal hover:underline">
                Explore GEO &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQS ── */}
      <section className="bg-white py-s6 border-b border-light-grey">
        <div className="container-tbc max-w-4xl">
          <hr className="gold-rule mb-6" />
          <h2 className="font-display font-bold text-[clamp(26px,2.5vw,36px)] text-ink leading-[1.2] mb-4">
            Questions about our SEO services.
          </h2>
          <p className="text-body text-mid-grey leading-relaxed max-w-2xl mb-8">
            Transparent answers regarding technical implementation, timelines, and deliverables.
          </p>

          <div className="space-y-4 mt-12">
            {faqs.map((f, i) => (
              <details key={i} className="group bg-ivory border border-light-grey rounded-[8px] p-6 open:shadow-card transition-all">
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
            Start with an audit of your technical search health.
          </h2>
          <p className="text-body text-white/80 mb-10 text-pretty max-w-2xl mx-auto">
            Book a consultation or run our free visibility check to identify the technical roadblocks limiting your commercial search visibility.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/free-ai-visibility-check" className="btn-gold min-h-[48px] px-8 text-[16px]">
              Free AI visibility check
            </Link>
            <Link href="/book-consultation" className="btn-ghost-white min-h-[48px] px-8 text-[16px]">
              Book a consultation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}