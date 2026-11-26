import type { Metadata } from "next";
import Link from "next/link";
import HeroLines from "@/components/HeroLines";
import YouTubeLite from "@/components/YouTubeLite";
import { ProcessToday, ProcessWithSoftware } from "@/components/Illustrations";

export const metadata: Metadata = {
  title: { absolute: "Technology Consulting & Process Automation | Turbo Bytes Consulting" },
  description:
    "Technology consultancy for mid-market and founder-led firms: process automation, custom software, digital transformation, and AEO/SEO/GEO visibility.",
  alternates: { canonical: "/" },
  openGraph: {
    title: { absolute: "Technology Consulting & Process Automation | Turbo Bytes Consulting" },
    description:
      "Technology consultancy for mid-market and founder-led firms: process automation, custom software, digital transformation, and AEO/SEO/GEO visibility.",
    url: "https://turbobytesconsulting.com",
    images: [{ url: "/img/og-default.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image" as const,
    title: { absolute: "Technology Consulting & Process Automation | Turbo Bytes Consulting" },
    description:
      "Technology consultancy for mid-market and founder-led firms.",
  },
};

const faqs = [
  {
    question: "What does Turbo Bytes Consulting do?",
    answer: "We are a technology consultancy. We sit with the MD and leadership team to identify the business processes costing the most in time and errors, and resolve them: through process automation, custom software engineered for that exact workflow, and full digital transformation. We also build search and AI answer visibility (AEO, SEO, GEO) for clients.",
  },
  {
    question: "What is your approach to digital transformation?",
    answer: "We run digital transformation end-to-end across five clear phases: Diagnose, Design, Build, Run, and Hand over. We do not stop at advisory slide decks; we engineer the systems, train your operators, and stay through ongoing maintenance.",
  },
  {
    question: "What are AEO and GEO, and why do they matter now?",
    answer: "SEO ranks websites in traditional search engines. AEO (Answer Engine Optimisation) ensures your brand is the direct answer for featured snippets and voice search. GEO (Generative Engine Optimisation) ensures your company is cited and recommended when buyers ask ChatGPT, Gemini, Perplexity, Copilot, or Google AI Overviews.",
  },
  {
    question: "Who maintains the software and systems once launched?",
    answer: "We do. Ongoing maintenance, monitoring, feature adaptation, and operational support are managed under our SLA agreements, so your business always has dedicated engineers to support and evolve your systems.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(faq => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer
    }
  }))
};

export const revalidate = 300;

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ── 1. HERO (Layout & animation unchanged) ── */}
      <section className="relative bg-forest overflow-hidden flex flex-col md:flex-row min-h-[600px]">
        <HeroLines />

        <div className="container-tbc py-s5 md:py-s7 relative z-10 flex-1 flex flex-col justify-center order-first">
          <div className="max-w-[620px]">
            <hr className="gold-rule mb-8 hero-1" />
            <h1 className="font-display font-bold text-white text-[clamp(32px,8vw,52px)] leading-[1.1] tracking-[-0.5px] mb-6 hero-2 text-balance">
              The intelligence layer your business has been missing.
            </h1>
            <p className="font-sans text-[18px] text-mid-grey leading-relaxed mb-10 hero-3 text-pretty">
              We sit with the MD and your team, find the processes that cost the
              business the most, and fix them: with process automation, custom software,
              and full digital transformation.
            </p>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 hero-4">
              <Link href="/book-consultation" className="btn-primary min-h-[48px] px-8 text-center flex items-center justify-center text-[16px] shadow-sm">
                Book a consultation
              </Link>
              <Link href="/services" className="inline-flex items-center justify-center min-h-[48px] px-6 text-[15px] font-display font-semibold text-white/90 hover:text-white transition-colors gap-2">
                Explore our advisory <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. FOUR OFFER CARDS ── */}
      <section className="bg-white py-s6 md:py-s7 border-b border-light-grey" aria-labelledby="offer-heading">
        <div className="container-tbc">
          <div className="max-w-2xl mb-10">
            <hr className="gold-rule mb-4" />
            <h2 id="offer-heading" className="font-display font-bold text-[clamp(26px,2.5vw,34px)] text-ink leading-[1.2] mb-3">
              What we do.
            </h2>
            <p className="text-body text-mid-grey text-pretty">
              Four focused practices designed to eliminate operational friction and make your business findable.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Offer 1 */}
            <Link
              href="/services/technology-consulting"
              className="group bg-ivory border border-light-grey rounded-[8px] p-6 hover:border-forest/40 hover:shadow-card transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-full bg-forest/10 flex items-center justify-center text-forest mb-4 group-hover:bg-forest group-hover:text-white transition-colors">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="3" />
                    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2v-.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
                  </svg>
                </div>
                <h3 className="font-display font-bold text-[18px] text-ink mb-2">
                  Consulting & Automation
                </h3>
                <p className="text-[14px] text-mid-grey leading-relaxed">
                  We diagnose the processes costing your business the most and automate the handoffs.
                </p>
              </div>
              <span className="text-[13px] font-semibold text-royal mt-6 inline-flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                Explore consulting &rarr;
              </span>
            </Link>

            {/* Offer 2 */}
            <Link
              href="/services/custom-software-development"
              className="group bg-ivory border border-light-grey rounded-[8px] p-6 hover:border-forest/40 hover:shadow-card transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-full bg-forest/10 flex items-center justify-center text-forest mb-4 group-hover:bg-forest group-hover:text-white transition-colors">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="16 18 22 12 16 6" />
                    <polyline points="8 6 2 12 8 18" />
                  </svg>
                </div>
                <h3 className="font-display font-bold text-[18px] text-ink mb-2">
                  Custom Software
                </h3>
                <p className="text-[14px] text-mid-grey leading-relaxed">
                  Bespoke web applications, floor tracking tools, and private LLMs built around your workflow.
                </p>
              </div>
              <span className="text-[13px] font-semibold text-royal mt-6 inline-flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                Explore software &rarr;
              </span>
            </Link>

            {/* Offer 3 */}
            <Link
              href="/services/aeo-seo-geo"
              className="group bg-ivory border border-light-grey rounded-[8px] p-6 hover:border-forest/40 hover:shadow-card transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-full bg-forest/10 flex items-center justify-center text-forest mb-4 group-hover:bg-forest group-hover:text-white transition-colors">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                    <path d="M11 8v6M8 11h6" />
                  </svg>
                </div>
                <h3 className="font-display font-bold text-[18px] text-ink mb-2">
                  AEO, SEO & GEO
                </h3>
                <p className="text-[14px] text-mid-grey leading-relaxed">
                  Be found on Google and cited in AI answers across ChatGPT, Gemini, and Perplexity.
                </p>
              </div>
              <span className="text-[13px] font-semibold text-royal mt-6 inline-flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                Explore search & AI &rarr;
              </span>
            </Link>

            {/* Offer 4 */}
            <Link
              href="/digital-transformation"
              className="group bg-ivory border border-light-grey rounded-[8px] p-6 hover:border-forest/40 hover:shadow-card transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-full bg-forest/10 flex items-center justify-center text-forest mb-4 group-hover:bg-forest group-hover:text-white transition-colors">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 20V10M12 20V4M6 20v-6" />
                  </svg>
                </div>
                <h3 className="font-display font-bold text-[18px] text-ink mb-2">
                  Digital Transformation
                </h3>
                <p className="text-[14px] text-mid-grey leading-relaxed">
                  End-to-end modernisation from initial diagnostic to running systems and trained teams.
                </p>
              </div>
              <span className="text-[13px] font-semibold text-royal mt-6 inline-flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                Explore transformation &rarr;
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── 3. HOW WE WORK FLOW DIAGRAM ── */}
      <section className="bg-ivory py-s6 md:py-s7 border-b border-light-grey" aria-labelledby="how-we-work-heading">
        <div className="container-tbc">
          <div className="max-w-2xl mb-8">
            <hr className="gold-rule mb-4" />
            <h2 id="how-we-work-heading" className="font-display font-bold text-[clamp(26px,2.5vw,34px)] text-ink leading-[1.2] mb-3">
              How we work.
            </h2>
            <p className="text-body text-mid-grey text-pretty">
              A structured four-step path from operational discovery to running systems.
            </p>
          </div>

          {/* Responsive SVG Flow Diagram */}
          <div className="bg-white border border-light-grey rounded-[8px] p-6 md:p-8 shadow-sm mb-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
              {[
                { step: "01", title: "Sit with the MD", text: "Identify the single process costing the business most in time, money or errors." },
                { step: "02", title: "Map the process", text: "Shadow the frontline team to record every step, exception and spreadsheet gap." },
                { step: "03", title: "Build exact software", text: "Engineer custom tools and automated handoffs without forcing off-the-shelf compromises." },
                { step: "04", title: "Run and maintain", text: "Deploy to production, onboard your operators, and support the systems long term." },
              ].map((s, idx) => (
                <div key={idx} className="relative flex flex-col justify-between p-4 rounded-[6px] bg-ivory/60 border border-light-grey/80">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-mono text-[13px] font-bold text-forest bg-forest/10 px-2 py-0.5 rounded">
                        {s.step}
                      </span>
                      {idx < 3 && (
                        <span className="hidden md:inline-block text-forest/40 text-[18px]" aria-hidden="true">
                          &rarr;
                        </span>
                      )}
                    </div>
                    <h3 className="font-display font-bold text-[16px] text-ink mb-1.5">
                      {s.title}
                    </h3>
                    <p className="text-[13px] text-mid-grey leading-relaxed">
                      {s.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Folded detail accordion */}
          <details className="group bg-white border border-light-grey rounded-[8px] p-5 transition-all text-body">
            <summary className="font-display font-semibold text-[15px] text-ink cursor-pointer list-none flex items-center justify-between">
              <span>Read more about our delivery methodology</span>
              <span className="text-mid-grey text-[18px] transition-transform group-open:rotate-45">+</span>
            </summary>
            <div className="mt-4 pt-4 border-t border-light-grey text-[14px] text-mid-grey space-y-4">
              <p>
                A traditional consultancy delivers a slide deck and leaves implementation to third parties. A software house builds whatever you specify without assessing whether the underlying process is flawed. We do both: we sit down with leadership to measure the true cost of operational friction, engineer the exact software required, and stay through live production operations.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                <figure>
                  <ProcessToday />
                  <figcaption className="mt-2 text-[13px] text-mid-grey"><strong>Today:</strong> Work waits on calls, sheets and single-person choke points.</figcaption>
                </figure>
                <figure>
                  <ProcessWithSoftware />
                  <figcaption className="mt-2 text-[13px] text-mid-grey"><strong>With TBC:</strong> Handoffs trigger automatically with complete management visibility.</figcaption>
                </figure>
              </div>
            </div>
          </details>
        </div>
      </section>

      {/* ── 4. WHO WE ARE VIDEO ── */}
      <section className="bg-white py-s6 md:py-s7 border-b border-light-grey" aria-labelledby="video-heading">
        <div className="container-tbc">
          <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-14 items-center">
            <div>
              <hr className="gold-rule mb-4" />
              <h2 id="video-heading" className="font-display font-bold text-[clamp(26px,2.5vw,34px)] text-ink leading-[1.2] mb-4 text-balance">
                Consulting that ends in working software, not a slide deck.
              </h2>
              <p className="text-body text-mid-grey leading-relaxed mb-6 text-pretty">
                Hear directly how we engage with managing directors, diagnose operations, and build long-term technology partnerships.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Link href="/about" className="text-[15px] font-semibold text-royal hover:underline inline-flex items-center gap-1.5">
                  About our organisation &rarr;
                </Link>
                <Link href="/book-consultation" className="btn-gold min-h-[44px] px-6 text-[15px]">
                  Book a consultation
                </Link>
              </div>
            </div>

            <div className="w-full">
              <YouTubeLite
                id="LtEm_wP8Ubw"
                title="Turbo Bytes Consulting: who we are and what we do"
                poster="/img/og-default.png"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. PRODUCT STRIP (Distil, Sunscout, Meridian + Shorts) ── */}
      <section className="bg-ivory py-s6 md:py-s7 border-b border-light-grey" aria-labelledby="products-heading">
        <div className="container-tbc">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <hr className="gold-rule mb-4" />
              <h2 id="products-heading" className="font-display font-bold text-[clamp(26px,2.5vw,34px)] text-ink leading-[1.2] mb-2">
                Proof that we ship.
              </h2>
              <p className="text-body text-mid-grey text-pretty">
                Focused operational software built for real client workflows, available as standalone tools or unified within Meridian.
              </p>
            </div>
            <Link href="/products" className="text-[15px] font-semibold text-royal hover:underline shrink-0">
              View all 10 products &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {/* Distil */}
            <div className="bg-white border border-light-grey rounded-[8px] p-5 flex flex-col justify-between">
              <div>
                <div className="mb-4">
                  <YouTubeLite
                    id="uYaMWnzlR4U"
                    title="Complex proposals, assembled from verified parts"
                    isShort={true}
                  />
                </div>
                <h3 className="font-display font-bold text-[18px] text-ink mb-1">Distil</h3>
                <p className="text-[14px] text-mid-grey leading-relaxed mb-4">
                  Turn complex technical enquiries into verified proposals and bills of materials in minutes.
                </p>
              </div>
              <Link href="/products/distil" className="text-[14px] font-semibold text-royal hover:underline">
                Explore Distil &rarr;
              </Link>
            </div>

            {/* Sunscout */}
            <div className="bg-white border border-light-grey rounded-[8px] p-5 flex flex-col justify-between">
              <div>
                <div className="mb-4">
                  <YouTubeLite
                    id="-zvS0dC-i_g"
                    title="Find the factory roofs worth calling first"
                    isShort={true}
                  />
                </div>
                <h3 className="font-display font-bold text-[18px] text-ink mb-1">Sunscout</h3>
                <p className="text-[14px] text-mid-grey leading-relaxed mb-4">
                  Identify and score commercial factory rooftops for solar EPCs from open satellite data.
                </p>
              </div>
              <Link href="/products/sunscout" className="text-[14px] font-semibold text-royal hover:underline">
                Explore Sunscout &rarr;
              </Link>
            </div>

            {/* Meridian */}
            <div className="bg-white border border-light-grey rounded-[8px] p-5 flex flex-col justify-between">
              <div>
                <div className="mb-4">
                  <YouTubeLite
                    id="2Jdxao-PJuE"
                    title="Seven tools for growing businesses"
                    isShort={true}
                  />
                </div>
                <h3 className="font-display font-bold text-[18px] text-ink mb-1">Meridian</h3>
                <p className="text-[14px] text-mid-grey leading-relaxed mb-4">
                  One operating system uniting orders, quality certificates and service with an isolated company brain.
                </p>
              </div>
              <Link href="/products/meridian" className="text-[14px] font-semibold text-royal hover:underline">
                Explore Meridian &rarr;
              </Link>
            </div>
          </div>

          {/* Folded product suite details */}
          <details className="group bg-white border border-light-grey rounded-[8px] p-5 transition-all text-body">
            <summary className="font-display font-semibold text-[15px] text-ink cursor-pointer list-none flex items-center justify-between">
              <span>View additional operations tools in our suite (Cadence, Assay, Steward & more)</span>
              <span className="text-mid-grey text-[18px] transition-transform group-open:rotate-45">+</span>
            </summary>
            <div className="mt-4 pt-4 border-t border-light-grey grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-[13px]">
              <div>
                <h4 className="font-bold text-ink">Cadence</h4>
                <p className="text-mid-grey">Order-to-dispatch tracking for make-to-order manufacturing.</p>
                <Link href="/products/cadence" className="text-royal font-semibold hover:underline">View &rarr;</Link>
              </div>
              <div>
                <h4 className="font-bold text-ink">Assay</h4>
                <p className="text-mid-grey">Certificate of Analysis (COA) generation and laboratory QA.</p>
                <Link href="/products/assay" className="text-royal font-semibold hover:underline">View &rarr;</Link>
              </div>
              <div>
                <h4 className="font-bold text-ink">Steward</h4>
                <p className="text-mid-grey">Installed base machine tracking, warranty and service tickets.</p>
                <Link href="/products/steward" className="text-royal font-semibold hover:underline">View &rarr;</Link>
              </div>
              <div>
                <h4 className="font-bold text-ink">Vantage</h4>
                <p className="text-mid-grey">Plain-text answers grounded strictly in your own catalogues.</p>
                <Link href="/products/vantage" className="text-royal font-semibold hover:underline">View &rarr;</Link>
              </div>
            </div>
          </details>
        </div>
      </section>

      {/* ── 6. FAQS (Folded for SEO/AEO without visual clutter) ── */}
      <section className="bg-white py-s6 md:py-s7 border-b border-light-grey" aria-labelledby="home-faq-heading">
        <div className="container-tbc max-w-4xl">
          <div className="mb-8">
            <hr className="gold-rule mb-4" />
            <h2 id="home-faq-heading" className="font-display font-bold text-[clamp(24px,2.5vw,32px)] text-ink leading-[1.2] mb-2">
              Frequently asked questions.
            </h2>
            <p className="text-body text-mid-grey text-pretty">
              Common questions about our advisory, delivery models, and technology support.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((f, i) => (
              <details key={i} className="group bg-ivory border border-light-grey rounded-[8px] p-5 open:shadow-card transition-all">
                <summary className="font-display font-bold text-[16px] text-ink cursor-pointer list-none flex items-center justify-between">
                  <span>{f.question}</span>
                  <span className="text-mid-grey text-[18px] transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="text-body text-mid-grey leading-relaxed mt-3 pt-3 border-t border-light-grey text-pretty text-[14px]">
                  {f.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. CTA BAND ── */}
      <section className="bg-royal py-s7 text-center">
        <div className="container-tbc">
          <hr className="gold-rule gold-rule--center mb-6" />
          <h2 className="font-display font-bold text-[clamp(24px,3vw,36px)] text-white leading-[1.2] mb-3 text-balance">
            Talk to us about your business.
          </h2>
          <p className="text-body text-white/80 mb-8 text-pretty max-w-2xl mx-auto">
            Book a 30-minute consultation. We will identify which process is costing you the most and outline how to fix it.
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
