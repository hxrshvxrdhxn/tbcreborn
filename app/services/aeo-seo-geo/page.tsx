import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: { absolute: "AEO, SEO & GEO Consulting | Turbo Bytes Consulting" },
  description: "Get your business ranked on Google and cited in AI answers across ChatGPT, Gemini and Perplexity. Honest, technical search visibility for B2B firms.",
  alternates: { canonical: "/services/aeo-seo-geo" },
  openGraph: {
    title: { absolute: "AEO, SEO & GEO Consulting | Turbo Bytes Consulting" },
    description: "Get your business ranked on Google and cited in AI answers across ChatGPT, Gemini and Perplexity. Honest, technical search visibility for B2B firms.",
    url: "https://turbobytesconsulting.com/services/aeo-seo-geo",
    images: [{ url: "/img/og-default.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image" as const,
    title: { absolute: "AEO, SEO & GEO Consulting | Turbo Bytes Consulting" },
    description: "Get your business ranked on Google and cited in AI answers across ChatGPT, Gemini and Perplexity. Honest, technical search visibility for B2B firms.",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "AEO, SEO and GEO Consulting",
  provider: {
    "@id": "https://turbobytesconsulting.com/#organization",
  },
  url: "https://turbobytesconsulting.com/services/aeo-seo-geo",
  description: "Search engine optimisation (SEO), answer engine optimisation (AEO) and generative engine optimisation (GEO) for mid-market and enterprise firms across India, the Middle East and Asia-Pacific.",
  areaServed: ["IN", "AE", "SA", "SG", "AU"],
  serviceType: "Digital Search and AI Visibility Consulting"
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://turbobytesconsulting.com" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://turbobytesconsulting.com/services" },
    { "@type": "ListItem", position: 3, name: "AEO, SEO & GEO", item: "https://turbobytesconsulting.com/services/aeo-seo-geo" }
  ]
};

const faqs = [
  {
    question: "What is Generative Engine Optimisation (GEO)?",
    answer: "Generative Engine Optimisation is the practice of structuring your company's digital presence so that large language models—including ChatGPT, Google Gemini, Perplexity, Microsoft Copilot, and Google AI Overviews—cite your brand as an authoritative, trusted recommendation when prospective buyers ask relevant industry questions."
  },
  {
    question: "How is Answer Engine Optimisation (AEO) different from traditional SEO?",
    answer: "Traditional SEO focuses on earning clicks from ten blue links on search engine result pages. AEO focuses on providing the direct, synthesized answer that Google and Bing extract for featured snippets, People Also Ask carousels, and voice search devices, typically formatted as a concise 40 to 60-word definitive answer directly beneath a question heading."
  },
  {
    question: "How do I get my company mentioned by ChatGPT and Perplexity?",
    answer: "AI assistants look for entity consensus across independent, trusted sources. To be cited, a company requires clean schema markup (Organization, Service, FAQ), machine-readable discovery paths like llms.txt, authoritative third-party directory listings and press citations, and answer-first content that directly answers complex technical buyer questions."
  },
  {
    question: "How long does it take to see results from AEO, SEO, and GEO?",
    answer: "Technical crawl and schema improvements take effect within two to four weeks. Organic search rankings and AI model citations typically build progressively over three to six months as search engines recrawl your site, update index records, and generative models refresh their knowledge graphs and retrieval indexes."
  },
  {
    question: "Do you guarantee first-page search rankings or AI mentions?",
    answer: "No. We never guarantee rankings or AI mentions, and no honest consultancy can. Search engines and artificial intelligence models are proprietary systems controlled by third parties. What we guarantee is rigorous technical execution, clean semantic schemas, authoritative answer-first content, and transparent monthly reporting."
  },
  {
    question: "Who is this service designed for?",
    answer: "Our AEO, SEO, and GEO programmes are designed for B2B enterprises, industrial manufacturers, specialised consultancies, healthcare providers, real estate firms, and established direct-to-consumer brands operating across India, the Middle East, and the Asia-Pacific region."
  },
  {
    question: "What proof do you have that this method works?",
    answer: "We use our own website as a transparent, live case study. Across our digital estate, we maintain over 600 fully indexed pages, machine-readable llms.txt integrations, comprehensive Schema.org entity graphs, and structured answer-first technical guides that rank consistently and get cited by generative answer engines."
  },
  {
    question: "What do you require from our team to begin?",
    answer: "We require access to your Google Search Console, analytics properties, and domain technical stakeholders. During our initial visibility audit, we conduct a structured intake call with your commercial leaders to identify the top twenty questions your prospective buyers ask before commissioning work."
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

export default function AeoSeoGeoPage() {
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
              <li className="text-white font-medium">AEO, SEO & GEO</li>
            </ol>
          </nav>

          <div className="max-w-3xl">
            <hr className="gold-rule mb-6" />
            <h1 className="font-display font-bold text-[clamp(32px,4.5vw,54px)] text-white leading-[1.1] mb-6 text-balance">
              AEO, SEO and GEO: making your business findable in search and AI answers.
            </h1>
            <p className="text-[clamp(17px,1.2vw,20px)] text-white/80 leading-relaxed text-pretty mb-8">
              Prospective buyers in India, the Middle East, and Asia-Pacific no longer rely solely on search engines to find enterprise partners. They ask ChatGPT, Perplexity, and Google Gemini for recommendations. Our AEO SEO GEO consulting practice ensures your business is discoverable in traditional search and cited as the authoritative answer in generative artificial intelligence.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link href="/free-ai-visibility-check" className="btn-gold min-h-[48px] px-8 text-[16px]">
                Free AI visibility check
              </Link>
              <Link href="/book-consultation" className="btn-ghost-white min-h-[48px] px-6 text-[16px]">
                Book a consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── THE THREE PILLARS (WHAT EACH IS) ── */}
      <section className="bg-white py-s6 border-b border-light-grey">
        <div className="container-tbc">
          <hr className="gold-rule mb-6" />
          <h2 className="font-display font-bold text-[clamp(26px,2.5vw,36px)] text-ink leading-[1.2] mb-4">
            Understanding SEO, AEO, and GEO.
          </h2>
          <p className="text-body text-mid-grey leading-relaxed max-w-2xl mb-8">
            The search landscape has fragmented into three complementary channels. Winning market share requires mastering all three.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {/* SEO */}
            <div className="bg-ivory border border-light-grey rounded-[8px] p-8 flex flex-col justify-between">
              <div>
                <span className="text-[14px] font-semibold text-forest mb-2 block">Foundational Channel</span>
                <h3 className="font-display font-bold text-[22px] text-ink mb-3">
                  Search Engine Optimisation (SEO)
                </h3>
                <p className="text-body text-mid-grey leading-relaxed mb-6">
                  Ranking in organic search results across Google and Bing. We build clean technical crawl architecture, Core Web Vitals performance, canonical structures, and semantic on-page keyword relevance.
                </p>
              </div>
              <div>
                <Link href="/services/seo" className="text-[15px] font-semibold text-royal hover:underline inline-flex items-center gap-1.5">
                  Explore SEO services &rarr;
                </Link>
              </div>
            </div>

            {/* AEO */}
            <div className="bg-ivory border border-light-grey rounded-[8px] p-8 flex flex-col justify-between">
              <div>
                <span className="text-[14px] font-semibold text-forest mb-2 block">Direct Answers</span>
                <h3 className="font-display font-bold text-[22px] text-ink mb-3">
                  Answer Engine Optimisation (AEO)
                </h3>
                <p className="text-body text-mid-grey leading-relaxed mb-6">
                  Securing featured snippets, People Also Ask carousels, and voice search answers. We structure technical content with explicit 40 to 60-word answers directly beneath question headers.
                </p>
              </div>
              <div>
                <Link href="/services/answer-engine-optimisation" className="text-[15px] font-semibold text-royal hover:underline inline-flex items-center gap-1.5">
                  Explore AEO services &rarr;
                </Link>
              </div>
            </div>

            {/* GEO */}
            <div className="bg-ivory border border-light-grey rounded-[8px] p-8 flex flex-col justify-between">
              <div>
                <span className="text-[14px] font-semibold text-forest mb-2 block">AI Citations</span>
                <h3 className="font-display font-bold text-[22px] text-ink mb-3">
                  Generative Engine Optimisation (GEO)
                </h3>
                <p className="text-body text-mid-grey leading-relaxed mb-6">
                  Being named and cited when prospective clients query ChatGPT, Gemini, Perplexity, Copilot, and Google AI Overviews. We build entity consensus, machine-readable schemas, and llms.txt indexes.
                </p>
              </div>
              <div>
                <Link href="/services/generative-engine-optimisation" className="text-[15px] font-semibold text-royal hover:underline inline-flex items-center gap-1.5">
                  Explore GEO services &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── OUR 5-STEP METHOD ── */}
      <section className="bg-ivory py-s6 border-b border-light-grey">
        <div className="container-tbc">
          <hr className="gold-rule mb-6" />
          <h2 className="font-display font-bold text-[clamp(26px,2.5vw,36px)] text-ink leading-[1.2] mb-4">
            The five-step search and AI visibility framework.
          </h2>
          <p className="text-body text-mid-grey leading-relaxed max-w-2xl mb-8">
            We do not rely on guesswork or black-hat shortcuts. Our systematic methodology builds lasting authority across search engines and AI retrieval systems.
          </p>

          <div className="space-y-6 mt-12 max-w-4xl mx-auto">
            {[
              {
                step: "01",
                title: "Visibility Audit and Baseline AI Testing",
                description: "We audit your technical SEO (crawl budget, index status, canonical integrity, Core Web Vitals) alongside an AI answers test. We query leading AI assistants with the top twenty commercial questions your buyers ask and record who currently gets cited."
              },
              {
                step: "02",
                title: "Entity and Trust Groundwork",
                description: "AI assistants require clear entity consensus to recommend a firm. We deploy rich Schema.org structured data (Organization, Service, FAQPage, BreadcrumbList), align verified business data across directories and Google Business Profile, and establish machine-readable llms.txt discovery routes."
              },
              {
                step: "03",
                title: "Answer-First Content Architecture",
                description: "We re-architect your content around the specific questions your prospective clients ask. Every core page features an authoritative question heading followed by a tight 40 to 60-word direct summary, supported by technical details, specifications, and verifiable evidence."
              },
              {
                step: "04",
                title: "Authoritative Citations and Industry Mentions",
                description: "Large language models evaluate third-party consensus. We curate relevant business directories, industry registries, partner portfolios, and digital PR publications to ensure assistants have independent, corroborated sources that confirm your capabilities."
              },
              {
                step: "05",
                title: "Measurement and Monthly Iteration",
                description: "We track organic impressions, click-through rates, and average search positions in Google Search Console alongside our proprietary AI Answer Share metric across a predefined question set, delivering clear monthly progress reports tied to verified commercial leads."
              }
            ].map((m, idx) => (
              <div key={idx} className="bg-white border border-light-grey rounded-[8px] p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start">
                <span className="font-mono text-[20px] font-bold text-forest bg-forest/10 px-3 py-1 rounded-[4px] flex-shrink-0">
                  {m.step}
                </span>
                <div>
                  <h3 className="font-display font-bold text-[20px] text-ink mb-2">
                    {m.title}
                  </h3>
                  <p className="text-body text-mid-grey leading-relaxed">
                    {m.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HONEST EXPECTATIONS & DISCLAIMER ── */}
      <section className="bg-white py-s6 border-b border-light-grey">
        <div className="container-tbc max-w-4xl">
          <div className="border-l-4 border-forest bg-ivory p-6 md:p-8 rounded-r-[8px]">
            <h2 className="font-display font-bold text-[22px] text-ink mb-3">
              Honest expectations: what results to expect and when.
            </h2>
            <p className="text-body text-mid-grey leading-relaxed mb-4">
              Technical fixes, schema implementations, and crawl optimizations show measurable indexation improvements in two to four weeks. Organic keyword rankings and AI model citations develop progressively over three to six months as retrieval indexes re-crawl your domain and generative models refresh their knowledge graphs.
            </p>
            <p className="text-body text-ink font-medium leading-relaxed">
              <strong>Explicit disclaimer:</strong> We never promise or guarantee specific ranking positions on Google or guaranteed citations in ChatGPT or Gemini. Search engines and AI models are proprietary systems controlled by third parties. What we guarantee is rigorous technical execution, clean semantic architecture, and transparent monthly reporting.
            </p>
          </div>
        </div>
      </section>

      {/* ── WORKED EXAMPLE PROOF ── */}
      <section className="bg-ivory py-s6 border-b border-light-grey">
        <div className="container-tbc">
          <hr className="gold-rule mb-6" />
          <h2 className="font-display font-bold text-[clamp(26px,2.5vw,36px)] text-ink leading-[1.2] mb-4">
            Our own digital estate as a live case study.
          </h2>
          <p className="text-body text-mid-grey leading-relaxed max-w-2xl mb-8">
            We do not make hypothetical claims or invent client testimonials. We apply our exact search and AI visibility framework to our own business every day.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            <div className="bg-white border border-light-grey rounded-[8px] p-6 text-center">
              <span className="font-mono text-[36px] font-bold text-forest block mb-2">600+</span>
              <span className="font-display font-bold text-ink text-[16px] block mb-1">Indexed Pages</span>
              <p className="text-[14px] text-mid-grey">Deep technical crawl architecture with zero index bloat.</p>
            </div>
            <div className="bg-white border border-light-grey rounded-[8px] p-6 text-center">
              <span className="font-mono text-[36px] font-bold text-forest block mb-2">100%</span>
              <span className="font-display font-bold text-ink text-[16px] block mb-1">Structured Schema</span>
              <p className="text-[14px] text-mid-grey">Organization, Service, FAQPage, and BreadcrumbList JSON-LD.</p>
            </div>
            <div className="bg-white border border-light-grey rounded-[8px] p-6 text-center">
              <span className="font-mono text-[36px] font-bold text-forest block mb-2">llms.txt</span>
              <span className="font-display font-bold text-ink text-[16px] block mb-1">Machine Readable</span>
              <p className="text-[14px] text-mid-grey">Structured documentation feeds specifically built for LLM parsers.</p>
            </div>
            <div className="bg-white border border-light-grey rounded-[8px] p-6 text-center">
              <span className="font-mono text-[36px] font-bold text-forest block mb-2">40-60w</span>
              <span className="font-display font-bold text-ink text-[16px] block mb-1">Answer Headers</span>
              <p className="text-[14px] text-mid-grey">Direct concise summaries engineered for featured snippets.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHO THIS IS FOR & ENGAGEMENT SHAPE ── */}
      <section className="bg-white py-s6 border-b border-light-grey">
        <div className="container-tbc">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <hr className="gold-rule mb-6" />
              <h2 className="font-display font-bold text-[clamp(26px,2.5vw,36px)] text-ink leading-[1.2] mb-6">
                Targeted for B2B enterprises and industrial leaders.
              </h2>
              <p className="text-body text-mid-grey leading-relaxed mb-6">
                Our AEO, SEO, and GEO programmes are built specifically for mid-market and enterprise organisations where search and AI queries drive high-value commercial enquiries:
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  "Industrial manufacturers and specialised engineering firms",
                  "B2B service providers, consultancies, and technology companies",
                  "Healthcare providers, specialty clinics, and medical institutions",
                  "Commercial real estate developers and infrastructure operators",
                  "High-consideration direct-to-consumer and export businesses"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-body text-ink font-medium">
                    <span className="mt-[6px] flex-shrink-0 w-2 h-2 rounded-full bg-forest" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-[14px] text-mid-grey">
                Serving enterprise clients across India, the United Arab Emirates, Saudi Arabia, Singapore, and Australia.
              </p>
            </div>

            <div className="bg-ivory border border-light-grey rounded-[8px] p-8">
              <h3 className="font-display font-bold text-[22px] text-ink mb-4">
                Engagement structure.
              </h3>
              <p className="text-body text-mid-grey leading-relaxed mb-6">
                We work in two clear phases. We begin with a comprehensive fixed-scope audit, followed by an ongoing monthly optimisation programme.
              </p>
              <div className="space-y-4 mb-6">
                <div className="border-l-2 border-forest pl-4">
                  <h4 className="font-semibold text-ink text-[16px]">Phase 1: Diagnostic Visibility Audit</h4>
                  <p className="text-[14px] text-mid-grey">A comprehensive 3-week assessment of technical SEO, schema architecture, Core Web Vitals, and an AI answer benchmark test.</p>
                </div>
                <div className="border-l-2 border-forest pl-4">
                  <h4 className="font-semibold text-ink text-[16px]">Phase 2: Monthly Retainer Programme</h4>
                  <p className="text-[14px] text-mid-grey">Ongoing technical implementation, answer-first content creation, schema maintenance, citation development, and monthly reporting.</p>
                </div>
              </div>
              <Link href="/free-ai-visibility-check" className="btn-gold w-full text-center min-h-[44px] text-[15px]">
                Run a free AI visibility check
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
            Questions about AEO, SEO, and GEO.
          </h2>
          <p className="text-body text-mid-grey leading-relaxed max-w-2xl mb-8">
            Straightforward answers about our search and artificial intelligence visibility programmes.
          </p>

          <div className="space-y-4 mt-12">
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

      {/* ── BOTTOM CTA ── */}
      <section className="bg-royal py-s7 text-center">
        <div className="container-tbc">
          <hr className="gold-rule gold-rule--center mb-8" />
          <h2 className="font-display font-bold text-[clamp(24px,3vw,36px)] text-white leading-[1.2] mb-4 text-balance">
            Find out if ChatGPT and Perplexity mention your business.
          </h2>
          <p className="text-body text-white/80 mb-10 text-pretty max-w-2xl mx-auto">
            Submit your company name and website for our complimentary AI visibility check. We will run an audit of your brand presence across major AI assistants and return a diagnostic report.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/free-ai-visibility-check" className="btn-gold min-h-[48px] px-8 text-[16px]">
              Request free AI visibility check
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