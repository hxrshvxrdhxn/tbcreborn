import type { Metadata } from "next";
import Link from "next/link";
import WhereBuyersLookDiagram from "@/components/WhereBuyersLookDiagram";
import AeoStepStrip from "@/components/AeoStepStrip";

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
  description: "Search engine optimisation (SEO), answer engine optimisation (AEO) and generative engine optimisation (GEO) for mid-market and enterprise firms worldwide, including clients in India, the Middle East, Asia-Pacific, the UK and the US.",
  areaServed: ["Worldwide", "IN", "GB", "US", "AE", "SA", "SG", "AU"],
  serviceType: "Digital Search and AI Visibility Consulting",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://turbobytesconsulting.com" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://turbobytesconsulting.com/services" },
    { "@type": "ListItem", position: 3, name: "AEO, SEO & GEO", item: "https://turbobytesconsulting.com/services/aeo-seo-geo" },
  ],
};

const faqs = [
  {
    question: "What is Generative Engine Optimisation (GEO)?",
    answer: "Generative Engine Optimisation is the practice of structuring your company's digital presence so that large language models—including ChatGPT, Google Gemini, Perplexity, Microsoft Copilot, and Google AI Overviews—cite your brand as an authoritative, trusted recommendation when prospective buyers ask relevant industry questions.",
  },
  {
    question: "How is Answer Engine Optimisation (AEO) different from traditional SEO?",
    answer: "Traditional SEO focuses on earning clicks from ten blue links on search engine result pages. AEO focuses on providing the direct, synthesized answer that Google and Bing extract for featured snippets, People Also Ask carousels, and voice search devices, typically formatted as a concise 40 to 60-word definitive answer directly beneath a question heading.",
  },
  {
    question: "How do I get my company mentioned by ChatGPT and Perplexity?",
    answer: "AI assistants look for entity consensus across independent, trusted sources. To be cited, a company requires clean schema markup (Organization, Service, FAQ), machine-readable discovery paths like llms.txt, authoritative third-party directory listings and press citations, and answer-first content that directly answers complex technical buyer questions.",
  },
  {
    question: "How long does it take to see results from AEO, SEO, and GEO?",
    answer: "Technical crawl and schema improvements take effect within two to four weeks. Organic search rankings and AI model citations typically build progressively over three to six months as search engines recrawl your site, update index records, and generative models refresh their knowledge graphs and retrieval indexes.",
  },
  {
    question: "Do you guarantee first-page search rankings or AI mentions?",
    answer: "No. We never guarantee rankings or AI mentions, and no honest consultancy can. Search engines and artificial intelligence models are proprietary systems controlled by third parties. What we guarantee is rigorous technical execution, clean semantic schemas, authoritative answer-first content, and transparent monthly reporting.",
  },
  {
    question: "Who is this service designed for?",
    answer: "Our AEO, SEO, and GEO programmes are designed for B2B enterprises, industrial manufacturers, specialised consultancies, healthcare providers, real estate firms, and established direct-to-consumer brands worldwide, including clients in India, the Middle East, Asia-Pacific, the UK and the US.",
  },
  {
    question: "What proof do you have that this method works?",
    answer: "We use our own website as a transparent, live case study. Across our digital estate, we maintain over 600 fully indexed pages, machine-readable llms.txt integrations, comprehensive Schema.org entity graphs, and structured answer-first technical guides that rank consistently and get cited by generative answer engines.",
  },
  {
    question: "What do you require from our team to begin?",
    answer: "We require access to your Google Search Console, analytics properties, and domain technical stakeholders. During our initial visibility audit, we conduct a structured intake call with your commercial leaders to identify the top twenty questions your prospective buyers ask before commissioning work.",
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

export default function AeoSeoGeoPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* ── HERO ── */}
      <section className="bg-forest pt-s7 pb-s7 relative overflow-hidden">
        <div className="container-tbc relative z-10">
          <nav aria-label="Breadcrumbs" className="mb-6">
            <ol className="flex items-center gap-2 text-[14px] text-white/60">
              <li><Link prefetch={false} href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li>/</li>
              <li><Link prefetch={false} href="/services" className="hover:text-white transition-colors">Services</Link></li>
              <li>/</li>
              <li className="text-white font-medium">AEO, SEO &amp; GEO</li>
            </ol>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <h1 className="font-display font-bold text-[clamp(32px,4.5vw,52px)] text-white leading-[1.1] mb-6 text-balance">
                AEO, SEO and GEO: making your business findable in search and AI answers.
              </h1>
              <p className="text-[clamp(16px,1.2vw,19px)] text-white/85 leading-relaxed text-pretty mb-8">
                Commercial buyers worldwide increasingly ask ChatGPT, Gemini, and Perplexity for vendor recommendations. We help your business rank on Google and get cited by AI answer engines.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <Link prefetch={false} href="/free-ai-visibility-check" className="btn-gold min-h-[48px] px-8 text-[16px]">
                  Free AI visibility check
                </Link>
                <Link prefetch={false} href="/book-consultation" className="btn-ghost-white min-h-[48px] px-6 text-[16px]">
                  Book a consultation
                </Link>
              </div>
            </div>

            {/* Right-side visual: Search and AI answer preview card */}
            <div className="lg:col-span-5">
              <div className="bg-white/10 border border-white/20 rounded-[12px] p-6 shadow-xl backdrop-blur-sm text-white">
                <div className="flex items-center gap-2 pb-4 mb-4 border-b border-white/15 text-[13px] text-white/70">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#A7EBC8]" />
                  <span className="font-mono text-[12px] truncate">&quot;Commercial technology partner for manufacturing&quot;</span>
                </div>
                <div className="space-y-3.5">
                  <div className="bg-black/25 rounded-[8px] p-3.5 border border-white/10">
                    <div className="flex items-center justify-between text-[11px] text-white/60 mb-1">
                      <span>Google search</span>
                      <span className="text-[#A7EBC8] font-medium">Rank 1</span>
                    </div>
                    <p className="font-display font-semibold text-[14px] text-white mb-1">Your company name</p>
                    <p className="text-[12px] text-white/70 leading-relaxed">Direct answers, schema-rich structured data, fast mobile pages.</p>
                  </div>
                  <div className="bg-black/25 rounded-[8px] p-3.5 border border-white/10">
                    <div className="flex items-center justify-between text-[11px] text-white/60 mb-1">
                      <span>Perplexity &amp; ChatGPT</span>
                      <span className="text-[#A7EBC8] font-medium">Cited source</span>
                    </div>
                    <p className="font-display font-semibold text-[14px] text-white mb-1">Authoritative citation</p>
                    <p className="text-[12px] text-white/70 leading-relaxed">&quot;Recommended for custom enterprise workflows based on verified registry records.&quot;</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── DIAGRAM: WHERE BUYERS LOOK NOW ── */}
      <section className="bg-white py-s7 border-b border-light-grey">
        <div className="container-tbc">
          <WhereBuyersLookDiagram />
        </div>
      </section>

      {/* ── THREE CHANNELS SUMMARY ── */}
      <section className="bg-ivory py-s7 border-b border-light-grey">
        <div className="container-tbc">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="font-display font-semibold text-[clamp(24px,2.8vw,34px)] text-ink mb-2">
              Three distinct channels.
            </h2>
            <p className="text-[15px] text-mid-grey">
              Winning market share requires mastering traditional search rankings, direct answer summaries, and generative citations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white border border-light-grey rounded-[8px] p-6 shadow-sm flex flex-col justify-between hover:border-[#167A4E]/50 transition-colors">
              <div>
                <span className="text-[12px] font-semibold text-[#167A4E] block mb-1">Channel 1</span>
                <h3 className="font-display font-semibold text-[19px] text-ink mb-2">SEO (Search engines)</h3>
                <p className="text-[14px] text-mid-grey leading-relaxed mb-4">
                  First-page Google rankings through clean technical site health, fast performance, and keyword relevance.
                </p>
              </div>
              <Link prefetch={false} href="/services/seo" className="text-[14px] font-semibold text-[#167A4E] hover:underline inline-flex items-center gap-1">
                Explore SEO services &rarr;
              </Link>
            </div>

            <div className="bg-white border border-light-grey rounded-[8px] p-6 shadow-sm flex flex-col justify-between hover:border-[#167A4E]/50 transition-colors">
              <div>
                <span className="text-[12px] font-semibold text-[#167A4E] block mb-1">Channel 2</span>
                <h3 className="font-display font-semibold text-[19px] text-ink mb-2">AEO (Answer engines)</h3>
                <p className="text-[14px] text-mid-grey leading-relaxed mb-4">
                  Securing featured snippets and direct answers through concise 40 to 60-word summaries.
                </p>
              </div>
              <Link prefetch={false} href="/services/answer-engine-optimisation" className="text-[14px] font-semibold text-[#167A4E] hover:underline inline-flex items-center gap-1">
                Explore AEO services &rarr;
              </Link>
            </div>

            <div className="bg-white border border-light-grey rounded-[8px] p-6 shadow-sm flex flex-col justify-between hover:border-[#167A4E]/50 transition-colors">
              <div>
                <span className="text-[12px] font-semibold text-[#167A4E] block mb-1">Channel 3</span>
                <h3 className="font-display font-semibold text-[19px] text-ink mb-2">GEO (Generative AI)</h3>
                <p className="text-[14px] text-mid-grey leading-relaxed mb-4">
                  Being recommended when clients ask ChatGPT, Gemini, and Perplexity for business solutions.
                </p>
              </div>
              <Link prefetch={false} href="/services/generative-engine-optimisation" className="text-[14px] font-semibold text-[#167A4E] hover:underline inline-flex items-center gap-1">
                Explore GEO services &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── FIVE-STEP METHOD (ANIMATED STEP STRIP) ── */}
      <section className="bg-white py-s7 border-b border-light-grey">
        <div className="container-tbc">
          <AeoStepStrip />
        </div>
      </section>

      {/* ── HONEST EXPECTATIONS ── */}
      <section className="bg-ivory py-s6 border-b border-light-grey">
        <div className="container-tbc max-w-4xl">
          <div className="bg-white border-l-4 border-[#167A4E] p-6 rounded-r-[8px] shadow-sm">
            <h3 className="font-display font-semibold text-[19px] text-ink mb-2">
              Honest expectations: what results to expect and when.
            </h3>
            <p className="text-[14px] text-mid-grey leading-relaxed mb-2">
              Technical crawl fixes and schema show indexation improvements in 2 to 4 weeks. Search rankings and AI model citations develop progressively over 3 to 6 months.
            </p>
            <p className="text-[13px] text-ink font-medium">
              We never promise false ranking guarantees. What we guarantee is rigorous technical execution, clean semantic schemas, and transparent monthly reporting.
            </p>
          </div>
        </div>
      </section>

      {/* ── LIVE PROOF NUMBERS ── */}
      <section className="bg-white py-s7 border-b border-light-grey">
        <div className="container-tbc">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h2 className="font-display font-semibold text-[24px] text-ink mb-2">
              Our own website as live proof.
            </h2>
            <p className="text-[15px] text-mid-grey">
              We apply our exact search and AI visibility framework to our own business every day.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            <div className="bg-ivory border border-light-grey rounded-[8px] p-5 text-center">
              <span className="font-mono text-[32px] font-bold text-[#167A4E] block mb-1">600+</span>
              <span className="font-display font-semibold text-ink text-[15px] block mb-1">Indexed pages</span>
              <p className="text-[13px] text-mid-grey">Clean technical health with fast load speeds.</p>
            </div>
            <div className="bg-ivory border border-light-grey rounded-[8px] p-5 text-center">
              <span className="font-mono text-[32px] font-bold text-[#167A4E] block mb-1">100%</span>
              <span className="font-display font-semibold text-ink text-[15px] block mb-1">Structured schema</span>
              <p className="text-[13px] text-mid-grey">Organization, Service, FAQ, Breadcrumbs.</p>
            </div>
            <div className="bg-ivory border border-light-grey rounded-[8px] p-5 text-center">
              <span className="font-mono text-[32px] font-bold text-[#167A4E] block mb-1">llms.txt</span>
              <span className="font-display font-semibold text-ink text-[15px] block mb-1">Machine feeds</span>
              <p className="text-[13px] text-mid-grey">Direct markdown summaries for AI assistants.</p>
            </div>
            <div className="bg-ivory border border-light-grey rounded-[8px] p-5 text-center">
              <span className="font-mono text-[32px] font-bold text-[#167A4E] block mb-1">40–60w</span>
              <span className="font-display font-semibold text-ink text-[15px] block mb-1">Answer blocks</span>
              <p className="text-[13px] text-mid-grey">Direct concise summaries under every question.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── ENGAGEMENT STRUCTURE (Folded details) ── */}
      <section className="bg-ivory py-s7 border-b border-light-grey">
        <div className="container-tbc max-w-4xl">
          <div className="bg-white border border-light-grey rounded-[8px] p-6 sm:p-8 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-light-grey">
              <div>
                <h3 className="font-display font-semibold text-[22px] text-ink mb-1">How we work together.</h3>
                <p className="text-[14px] text-mid-grey">Two clear phases: diagnostic visibility audit followed by monthly iteration.</p>
              </div>
              <Link prefetch={false} href="/free-ai-visibility-check" className="btn-gold flex-none text-center">
                Run free visibility check
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-ivory p-4 rounded border border-light-grey">
                <span className="text-[12px] font-semibold text-[#167A4E] block mb-1">Phase 1</span>
                <h4 className="font-semibold text-ink text-[16px] mb-1">Diagnostic Visibility Audit (3 weeks)</h4>
                <p className="text-[13px] text-mid-grey leading-relaxed">
                  Technical SEO health, Core Web Vitals, Schema audit, and benchmark AI answer testing across top 20 questions.
                </p>
              </div>
              <div className="bg-ivory p-4 rounded border border-light-grey">
                <span className="text-[12px] font-semibold text-[#167A4E] block mb-1">Phase 2</span>
                <h4 className="font-semibold text-ink text-[16px] mb-1">Monthly Optimisation Retainer</h4>
                <p className="text-[13px] text-mid-grey leading-relaxed">
                  Ongoing schema updates, answer-first content production, registry citations, and monthly Answer Share reports.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQS (Preserved Accordions & Schema) ── */}
      <section className="bg-white py-s7 border-b border-light-grey">
        <div className="container-tbc max-w-4xl">
          <div className="text-center mb-8">
            <h2 className="font-display font-semibold text-[clamp(24px,2.8vw,32px)] text-ink mb-2">
              Common questions about search and AI visibility.
            </h2>
            <p className="text-[15px] text-mid-grey">
              Straightforward answers about our search and artificial intelligence visibility programmes.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((f, i) => (
              <details key={i} className="group bg-ivory/50 border border-light-grey rounded-[8px] p-5 [&_summary::-webkit-details-marker]:hidden">
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

      {/* ── BOTTOM CTA ── */}
      <section className="bg-royal py-s7 text-center">
        <div className="container-tbc">
          <h2 className="font-display font-bold text-[clamp(24px,3vw,36px)] text-white leading-[1.2] mb-4 text-balance">
            Find out if ChatGPT and Perplexity mention your business.
          </h2>
          <p className="text-body text-white/80 mb-10 text-pretty max-w-2xl mx-auto">
            Submit your company name and website for our complimentary AI visibility check. We will run an audit of your brand presence across major AI assistants and return a diagnostic report.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link prefetch={false} href="/free-ai-visibility-check" className="btn-gold min-h-[48px] px-8 text-[16px]">
              Request free AI visibility check
            </Link>
            <Link prefetch={false} href="/book-consultation" className="btn-ghost-white min-h-[48px] px-8 text-[16px]">
              Book a consultation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
