import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: { absolute: "Answer Engine Optimisation (AEO) | Turbo Bytes" },
  description: "Optimise your digital content for featured snippets, People Also Ask, and voice assistants. Clear 40-60 word answers backed by structured data.",
  alternates: { canonical: "/services/answer-engine-optimisation" },
  openGraph: {
    title: { absolute: "Answer Engine Optimisation (AEO) | Turbo Bytes" },
    description: "Optimise your digital content for featured snippets, People Also Ask, and voice assistants. Clear 40-60 word answers backed by structured data.",
    url: "https://turbobytesconsulting.com/services/answer-engine-optimisation",
    images: [{ url: "/img/og-default.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image" as const,
    title: { absolute: "Answer Engine Optimisation (AEO) | Turbo Bytes" },
    description: "Optimise your digital content for featured snippets, People Also Ask, and voice assistants. Clear 40-60 word answers backed by structured data.",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Answer Engine Optimisation Services",
  provider: {
    "@id": "https://turbobytesconsulting.com/#organization",
  },
  url: "https://turbobytesconsulting.com/services/answer-engine-optimisation",
  description: "Answer engine optimisation consulting to capture featured snippets, People Also Ask placements, and voice search answers for growing businesses worldwide.",
  areaServed: ["Worldwide", "IN", "GB", "US", "AE", "SA", "SG", "AU"],
  serviceType: "Answer Engine Optimisation Consulting"
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://turbobytesconsulting.com" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://turbobytesconsulting.com/services" },
    { "@type": "ListItem", position: 3, name: "Answer Engine Optimisation", item: "https://turbobytesconsulting.com/services/answer-engine-optimisation" }
  ]
};

const faqs = [
  {
    question: "What is the core principle of Answer Engine Optimisation (AEO)?",
    answer: "AEO structures web content so search engines and voice assistants can immediately extract direct answers to specific user questions. This is accomplished by phrasing headings as natural questions, placing a direct 40 to 60-word synthesized answer immediately below the heading, and corroborating it with structured FAQPage and HowTo schema."
  },
  {
    question: "How does AEO help B2B and industrial companies?",
    answer: "B2B buyers, procurement leads, and technical directors search with complex, highly specific questions regarding specifications, compliance, lead times, and process trade-offs. Winning the featured snippet or People Also Ask answer establishes your company as the category authority before the buyer ever clicks a competitors link."
  },
  {
    question: "Does AEO replace traditional search engine optimisation?",
    answer: "No. AEO builds directly upon technical SEO. A website must have clean crawlability, indexation, and domain authority for Google or Bing to elevate its content into answer boxes or featured snippets."
  },
  {
    question: "How do you identify which questions to target?",
    answer: "We analyze actual buyer queries from Google Search Console, sales team call logs, customer service inquiries, and conversational data from search engines to identify high-intent questions prospective clients ask during their evaluation phase."
  },
  {
    question: "How does AEO connect with Generative Engine Optimisation (GEO)?",
    answer: "The same structured, answer-first content that search engines use to populate featured snippets is heavily favoured by generative AI assistants like ChatGPT and Perplexity when synthesizing answers to user prompts."
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

export default function AeoServicePage() {
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
              <li className="text-white font-medium">AEO</li>
            </ol>
          </nav>

          <div className="max-w-3xl">
            <hr className="gold-rule mb-6" />
            <h1 className="font-display font-bold text-[clamp(32px,4.5vw,54px)] text-white leading-[1.1] mb-6 text-balance">
              Answer Engine Optimisation: winning the direct answer.
            </h1>
            <p className="text-[clamp(17px,1.2vw,20px)] text-white/80 leading-relaxed text-pretty mb-8">
              Answer engine optimisation AEO transforms how search engines present your enterprise expertise. We re-architect your technical knowledge into answer-first content blocks engineered to secure featured snippets, People Also Ask carousels, and voice search recommendations across Google and Bing.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link href="/free-ai-visibility-check" className="btn-gold min-h-[48px] px-8 text-[16px]">
                Free answer readiness check
              </Link>
              <Link href="/services/aeo-seo-geo" className="btn-ghost-white min-h-[48px] px-6 text-[16px]">
                View all search pillars
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── ANATOMY OF A DIRECT ANSWER ── */}
      <section className="bg-white py-s6 border-b border-light-grey">
        <div className="container-tbc">
          <hr className="gold-rule mb-6" />
          <h2 className="font-display font-bold text-[clamp(26px,2.5vw,36px)] text-ink leading-[1.2] mb-4">
            The anatomy of a high-converting answer box.
          </h2>
          <p className="text-body text-mid-grey leading-relaxed max-w-2xl mb-8">
            How we structure your knowledge assets to win position zero on search engine result pages.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-ivory border border-light-grey rounded-[8px] p-6">
              <span className="font-mono text-[18px] font-bold text-forest mb-2 block">01</span>
              <h3 className="font-display font-bold text-[18px] text-ink mb-2">Natural question headings</h3>
              <p className="text-body text-mid-grey text-[15px] leading-relaxed">
                H2 and H3 headings drafted exactly as prospective buyers formulate their technical queries in voice and text search.
              </p>
            </div>

            <div className="bg-ivory border border-light-grey rounded-[8px] p-6">
              <span className="font-mono text-[18px] font-bold text-forest mb-2 block">02</span>
              <h3 className="font-display font-bold text-[18px] text-ink mb-2">40-60 word direct answers</h3>
              <p className="text-body text-mid-grey text-[15px] leading-relaxed">
                A tight, factual summary placed directly beneath the heading that search engine extraction algorithms can lift intact.
              </p>
            </div>

            <div className="bg-ivory border border-light-grey rounded-[8px] p-6">
              <span className="font-mono text-[18px] font-bold text-forest mb-2 block">03</span>
              <h3 className="font-display font-bold text-[18px] text-ink mb-2">Machine-readable schema</h3>
              <p className="text-body text-mid-grey text-[15px] leading-relaxed">
                Comprehensive FAQPage and HowTo JSON-LD structured data that confirms question-answer boundaries to search crawlers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONNECTED SERVICES ── */}
      <section className="bg-ivory py-s6 border-b border-light-grey">
        <div className="container-tbc">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white border border-light-grey rounded-[8px] p-8 flex flex-col justify-between">
              <div>
                <h3 className="font-display font-bold text-[20px] text-ink mb-2">
                  Technical SEO Foundation
                </h3>
                <p className="text-body text-mid-grey leading-relaxed mb-6">
                  Ensure search engine crawlers can index your pages without crawl barriers or Core Web Vitals performance delays.
                </p>
              </div>
              <Link href="/services/seo" className="text-[15px] font-semibold text-royal hover:underline">
                Explore Technical SEO &rarr;
              </Link>
            </div>

            <div className="bg-white border border-light-grey rounded-[8px] p-8 flex flex-col justify-between">
              <div>
                <h3 className="font-display font-bold text-[20px] text-ink mb-2">
                  Generative Engine Optimisation (GEO)
                </h3>
                <p className="text-body text-mid-grey leading-relaxed mb-6">
                  Position your business to be recommended directly by conversational AI assistants like ChatGPT and Perplexity.
                </p>
              </div>
              <Link href="/services/generative-engine-optimisation" className="text-[15px] font-semibold text-royal hover:underline">
                Explore Generative Engine Optimisation &rarr;
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
            Questions about Answer Engine Optimisation.
          </h2>
          <p className="text-body text-mid-grey leading-relaxed max-w-2xl mb-8">
            How AEO fits into your digital marketing and search visibility strategy.
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
            Find out if your content qualifies for answer boxes.
          </h2>
          <p className="text-body text-white/80 mb-10 text-pretty max-w-2xl mx-auto">
            Request our free visibility check to see how your site performs in featured snippets and conversational answers.
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