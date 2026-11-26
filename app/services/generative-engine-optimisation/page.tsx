import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: { absolute: "Generative Engine Optimisation (GEO) | Turbo Bytes" },
  description: "Position your company to be cited by ChatGPT, Perplexity, Gemini and Copilot. Entity authority, brand mentions, and machine-readable llms.txt.",
  alternates: { canonical: "/services/generative-engine-optimisation" },
  openGraph: {
    title: { absolute: "Generative Engine Optimisation (GEO) | Turbo Bytes" },
    description: "Position your company to be cited by ChatGPT, Perplexity, Gemini and Copilot. Entity authority, brand mentions, and machine-readable llms.txt.",
    url: "https://turbobytesconsulting.com/services/generative-engine-optimisation",
    images: [{ url: "/img/og-default.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image" as const,
    title: { absolute: "Generative Engine Optimisation (GEO) | Turbo Bytes" },
    description: "Position your company to be cited by ChatGPT, Perplexity, Gemini and Copilot. Entity authority, brand mentions, and machine-readable llms.txt.",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Generative Engine Optimisation Services",
  provider: {
    "@id": "https://turbobytesconsulting.com/#organization",
  },
  url: "https://turbobytesconsulting.com/services/generative-engine-optimisation",
  description: "Generative engine optimisation (GEO) consulting to earn citations and recommendations across ChatGPT, Gemini, Perplexity, Copilot, and Google AI Overviews for businesses worldwide.",
  areaServed: ["Worldwide", "IN", "GB", "US", "AE", "SA", "SG", "AU"],
  serviceType: "Generative Engine Optimisation Consulting"
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://turbobytesconsulting.com" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://turbobytesconsulting.com/services" },
    { "@type": "ListItem", position: 3, name: "Generative Engine Optimisation", item: "https://turbobytesconsulting.com/services/generative-engine-optimisation" }
  ]
};

const faqs = [
  {
    question: "What is Generative Engine Optimisation (GEO)?",
    answer: "Generative Engine Optimisation (GEO) is the systematic process of structuring your company's digital footprint so that artificial intelligence assistants—such as ChatGPT, Google Gemini, Perplexity AI, Microsoft Copilot, and Google AI Overviews—cite your firm as a verified authority when prospective buyers ask for recommendations."
  },
  {
    question: "How do AI models decide which companies to mention?",
    answer: "Large language models evaluate entity authority, independent third-party consensus, and information clarity. They synthesize responses by drawing from authoritative web registries, verified partner directories, Schema.org entity graphs, machine-readable documentation feeds (such as llms.txt), and clear answer-first technical guides."
  },
  {
    question: "Can any consultancy guarantee that ChatGPT will mention our brand?",
    answer: "No. Anyone claiming guaranteed citations in ChatGPT or Gemini is misrepresenting how generative AI works. AI models generate responses dynamically based on probabilistic token selection and evolving retrieval-augmented generation (RAG) indexes. We guarantee the rigorous technical, semantic, and citation groundwork required to maximize inclusion."
  },
  {
    question: "What is an llms.txt file and why does it matter?",
    answer: "An llms.txt file is an emerging web standard that provides large language models with a curated, machine-readable markdown overview of your company, core offerings, technical capabilities, and primary documentation, allowing AI crawlers to parse your entity information cleanly without noise."
  },
  {
    question: "How long does it take for AI models to start citing our business?",
    answer: "While real-time search-augmented models like Perplexity and Google AI Overviews can reflect technical and schema updates within four to eight weeks, foundational model updates typically take three to six months as AI providers refresh their web crawl corpora and fine-tuning datasets."
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

export default function GeoServicePage() {
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
              <li className="text-white font-medium">GEO</li>
            </ol>
          </nav>

          <div className="max-w-3xl">
            <hr className="gold-rule mb-6" />
            <h1 className="font-display font-bold text-[clamp(32px,4.5vw,54px)] text-white leading-[1.1] mb-6 text-balance">
              Generative Engine Optimisation: being cited in AI search.
            </h1>
            <p className="text-[clamp(17px,1.2vw,20px)] text-white/80 leading-relaxed text-pretty mb-8">
              Generative engine optimisation GEO consulting for B2B enterprises worldwide, including clients in India, the Middle East, Asia-Pacific, the UK and the US. When your target buyers prompt ChatGPT, Perplexity, or Gemini for trusted suppliers and partners, our GEO framework ensures your business is cited as an authoritative answer.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link href="/free-ai-visibility-check" className="btn-gold min-h-[48px] px-8 text-[16px]">
                Check your AI visibility
              </Link>
              <Link href="/services/aeo-seo-geo" className="btn-ghost-white min-h-[48px] px-6 text-[16px]">
                View AEO & SEO overview
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW LLMS DISCOVER AND CITE ENTITIES ── */}
      <section className="bg-white py-s6 border-b border-light-grey">
        <div className="container-tbc">
          <hr className="gold-rule mb-6" />
          <h2 className="font-display font-bold text-[clamp(26px,2.5vw,36px)] text-ink leading-[1.2] mb-4">
            How conversational AI models evaluate your brand.
          </h2>
          <p className="text-body text-mid-grey leading-relaxed max-w-2xl mb-8">
            Large language models do not look at keywords. They evaluate entity consistency, external verification, and semantic clarity.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            <div className="bg-ivory border border-light-grey rounded-[8px] p-6">
              <span className="font-mono text-[16px] font-bold text-forest block mb-2">01. Entity graph</span>
              <h3 className="font-display font-bold text-[18px] text-ink mb-2">Schema grounding</h3>
              <p className="text-[14px] text-mid-grey leading-relaxed">
                Clear Organization and Service JSON-LD schemas linking your business to verified industry registries and official company databases.
              </p>
            </div>

            <div className="bg-ivory border border-light-grey rounded-[8px] p-6">
              <span className="font-mono text-[16px] font-bold text-forest block mb-2">02. Independent consensus</span>
              <h3 className="font-display font-bold text-[18px] text-ink mb-2">Third-party verification</h3>
              <p className="text-[14px] text-mid-grey leading-relaxed">
                Co-citations across established trade directories, partner portfolios, and industry publications confirming your operational capabilities.
              </p>
            </div>

            <div className="bg-ivory border border-light-grey rounded-[8px] p-6">
              <span className="font-mono text-[16px] font-bold text-forest block mb-2">03. Machine feeds</span>
              <h3 className="font-display font-bold text-[18px] text-ink mb-2">llms.txt standard</h3>
              <p className="text-[14px] text-mid-grey leading-relaxed">
                Deploying markdown-formatted llms.txt files that allow AI retrieval agents to ingest your service specifications without HTML noise.
              </p>
            </div>

            <div className="bg-ivory border border-light-grey rounded-[8px] p-6">
              <span className="font-mono text-[16px] font-bold text-forest block mb-2">04. Answer content</span>
              <h3 className="font-display font-bold text-[18px] text-ink mb-2">Answer-first depth</h3>
              <p className="text-[14px] text-mid-grey leading-relaxed">
                Detailed technical documentation that directly resolves complex buyer problems with verifiable data and unambiguous explanations.
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
                  Maintain clean crawl architecture, fast response times, and index hygiene so search bots pass trust signals to AI models.
                </p>
              </div>
              <Link href="/services/seo" className="text-[15px] font-semibold text-royal hover:underline">
                Explore Technical SEO &rarr;
              </Link>
            </div>

            <div className="bg-white border border-light-grey rounded-[8px] p-8 flex flex-col justify-between">
              <div>
                <h3 className="font-display font-bold text-[20px] text-ink mb-2">
                  Answer Engine Optimisation (AEO)
                </h3>
                <p className="text-body text-mid-grey leading-relaxed mb-6">
                  Structure your content into 40 to 60-word answer blocks engineered for featured snippets and voice search assistants.
                </p>
              </div>
              <Link href="/services/answer-engine-optimisation" className="text-[15px] font-semibold text-royal hover:underline">
                Explore AEO Services &rarr;
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
            Questions about Generative Engine Optimisation.
          </h2>
          <p className="text-body text-mid-grey leading-relaxed max-w-2xl mb-8">
            How to prepare your enterprise for the shift toward conversational search.
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
            Are AI assistants recommending your business?
          </h2>
          <p className="text-body text-white/80 mb-10 text-pretty max-w-2xl mx-auto">
            Test your brand across ChatGPT, Gemini, and Perplexity with our complimentary AI visibility check.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/free-ai-visibility-check" className="btn-gold min-h-[48px] px-8 text-[16px]">
              Run free AI visibility check
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