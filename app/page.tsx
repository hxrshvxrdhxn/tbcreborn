import type { Metadata } from "next";
import Link from "next/link";
import HeroLines from "@/components/HeroLines";
import Reveal from "@/components/Reveal";
import PracticeArt from "@/components/PracticeArt";
import { aiPractices, products, consultingLinks } from "@/lib/offerings";
import SectionInk from "@/components/SectionInk";
import ProcessTimeline from "@/components/ProcessTimeline";
import FreeAnalysisForm from "@/components/FreeAnalysisForm";
import InsightRail from "@/components/InsightRail";
import { getAllPosts } from "@/lib/posts";
import { ProcessToday, ProcessWithSoftware, PillarIcon, WhyIcon, FactoryScene, DistributionScene, CostScene, GuideCover } from "@/components/Illustrations";

export const metadata: Metadata = {
  title: { absolute: "AI & Tech Consulting in Delhi NCR | Turbo Bytes Consulting" },
  description:
    "AI and technology consultancy for founder-led firms: private LLMs, AI training, technology consulting and audits. Based in Greater Noida, serving Delhi NCR.",
  alternates: { canonical: "/" },
  openGraph: {
    title: { absolute: "AI & Tech Consulting in Delhi NCR | Turbo Bytes Consulting" },
    description:
      "AI and technology consultancy for founder-led firms: private LLMs, AI training, technology consulting and audits. Based in Greater Noida, serving Delhi NCR.",
    url: "https://turbobytesconsulting.com",
    images: [{ url: "/img/og-default.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image" as const,
    title: { absolute: "AI & Tech Consulting in Delhi NCR | Turbo Bytes Consulting" },
    description:
      "AI and technology consultancy for founder-led firms in Delhi NCR.",
  },
};

const faqs = [
  {
    question: "What exactly do you do?",
    answer: "We talk to the MD to find the process that costs the business most, sit with the team who runs it, and turn that process into software built around how they work. We use LLMs and neural networks where they genuinely help. After launch we stay: support, maintenance and the AMC are ours.",
  },
  {
    question: "How long does a project take?",
    answer: "Most process projects go live in 6 to 12 weeks, depending on how many teams and systems are involved. The first step, understanding the process with your team, usually takes one to two weeks.",
  },
  {
    question: "What does it cost?",
    answer: "We agree up front what the software should save you. Most projects start at about what one person costs you in a year, and that includes support and maintenance after launch.",
  },
  {
    question: "Who looks after the software once it is live?",
    answer: "We do. Updates, fixes, monitoring and changes as your process evolves are covered under an annual maintenance contract, so you are never left with software nobody can change.",
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

const groups = [
  {
    heading: "AI practice",
    lead: "LLMs and neural networks built into the way your business already works.",
    art: "ai" as const,
    items: aiPractices,
    more: { href: "/services", label: "About the AI practice" },
  },
  {
    heading: "Consulting",
    lead: "Independent, in-depth work on strategy, systems and operations.",
    art: "consulting" as const,
    items: consultingLinks,
    more: { href: "/services", label: "All consulting work" },
  },
  {
    heading: "Products",
    lead: "Software we build and run ourselves.",
    art: "products" as const,
    items: products,
    more: { href: "/products", label: "See the products" },
  },
];

const whyTbc = [
  {
    icon: "process" as const,
    title: "Process First",
    body: "We learn how the work really runs before we build anything, so the software fits your team instead of the other way round.",
  },
  {
    icon: "delivery" as const,
    title: "Complete Delivery",
    body: "We design strategy and we build systems. Clients do not manage handoffs between an advisor and an agency. We do both.",
  },
  {
    icon: "outcome" as const,
    title: "Measurable Outcomes",
    body: "Every engagement begins with a defined outcome. Our work is assessed against it. We do not invoice for activity — we invoice for results.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Discovery",
    description: "A focused conversation about your organisation, your challenges, and where AI can have the highest impact. No jargon. No sales process.",
  },
  {
    number: "02",
    title: "Proposal",
    description: "A precise written proposal delivered within 48 hours. Scope, methodology, timeline, and investment — all defined.",
  },
  {
    number: "03",
    title: "Engagement",
    description: "Work begins. Integrated with your team, your systems, and your pace. Regular structured updates.",
  },
  {
    number: "04",
    title: "Delivery",
    description: "The outcome we defined at the outset is achieved. Documented, measured, and handed over completely.",
  },
  {
    number: "05",
    title: "Partnership",
    description: "Many clients continue with an ongoing advisory retainer. We are designed to be a long-term intelligence partner.",
  },
];

export const dynamic = 'force-dynamic';

export default async function HomePage() {
  const posts = await getAllPosts();
  const insightPosts = posts.slice(0, 8);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ── 1. HERO ── */}
      <section className="relative bg-forest overflow-hidden flex flex-col md:flex-row min-h-[600px]">
        <HeroLines />

        <div className="container-tbc py-s5 md:py-s7 relative z-10 flex-1 flex flex-col justify-center order-first">
          <div className="max-w-[620px]">
            <hr className="gold-rule mb-8 hero-1" />
            <h1 className="font-display font-bold text-white text-[clamp(32px,8vw,52px)] leading-[1.1] tracking-[-0.5px] mb-6 hero-2 text-balance">
              The intelligence layer your business has been missing.
            </h1>
            <p className="font-sans text-[18px] text-mid-grey leading-relaxed mb-10 hero-3 text-pretty">
              We sit with your MD and your team, find the process that costs you
              the most, and turn it into software we build, run and maintain, with
              LLMs and neural networks where they earn their place.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 hero-4">
              <Link href="/book-consultation" className="btn-primary w-full sm:w-auto">
                Request a Consultation
              </Link>
              <Link href="/services" className="btn-ghost-gold w-full sm:w-auto">
                Explore Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. WHO WE ARE ── */}
      <section className="bg-ivory py-s6 md:py-s8">
        <div className="container-tbc">
          <Reveal>
            <hr className="gold-rule mb-8 md:mb-s5" />
            <h2 className="section-heading mb-6 text-balance">
              We fix the process first.<br />Then we build the software.
            </h2>
            <p className="text-body text-mid-grey measure-68 mb-12 md:mb-s6 text-pretty">
              We start with the person who runs the company and ask which process
              hurts most. Then we sit with the team who does it, map how it really
              works, and turn it into software built around it. After launch it
              stays ours: support, maintenance and the AMC are part of the job.
            </p>
          </Reveal>

          <Reveal>
            <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-start gap-6 md:gap-8 mb-16 md:mb-s7">
              <figure>
                <ProcessToday />
                <figcaption className="mt-4 text-[15px] text-mid-grey"><span className="font-display font-semibold text-ink">Today.</span> Chats, sheets, calls and paper, all waiting on one person.</figcaption>
              </figure>
              <div className="flex md:flex-col items-center justify-center text-royal md:self-center md:-mt-10" aria-hidden="true">
                <svg viewBox="0 0 48 48" className="w-12 h-12 rotate-90 md:rotate-0"><circle cx="24" cy="24" r="23" fill="#fff" stroke="currentColor" strokeOpacity="0.25" /><path d="M16 24h16M26 17l7 7-7 7" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </div>
              <figure>
                <ProcessWithSoftware />
                <figcaption className="mt-4 text-[15px] text-mid-grey"><span className="font-display font-semibold text-ink">With software.</span> Each step moves on its own, and the figures reach you by nine.</figcaption>
              </figure>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 md:gap-14">
            {[
              { icon: "listen" as const, label: "We listen", body: "To the MD on what hurts, and to the team on how the work is really done." },
              { icon: "build" as const, label: "We build", body: "The process, turned into software that fits it, with AI where it helps." },
              { icon: "stay" as const, label: "We stay", body: "AMC, maintenance and support, end to end. Measured on the value it delivers." },
            ].map((pillar, i) => (
              <Reveal key={pillar.label} delay={i * 0.1}>
                <article className="flex flex-row sm:flex-col gap-5 sm:gap-4">
                  <div className="shrink-0"><PillarIcon kind={pillar.icon} /></div>
                  <div>
                    <h3 className="font-display font-bold text-[20px] text-ink mb-2">{pillar.label}</h3>
                    <p className="text-body text-mid-grey">{pillar.body}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. WHAT WE DO ── */}
      <section className="bg-white py-s6 md:py-s8 border-y border-light-grey">
        <div className="container-tbc">
          <Reveal>
            <h2 className="section-heading mb-10 md:mb-12 text-balance">
              Three ways we work with you.
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
            {groups.map((g, i) => (
              <Reveal key={g.heading} delay={i * 0.08}>
                <div className="flex flex-col h-full">
                  <div className="relative aspect-[16/10] rounded overflow-hidden bg-forest mb-6">
                    <PracticeArt kind={g.art} />
                  </div>
                  <h3 className="font-display font-semibold text-[24px] text-ink tracking-[-0.015em] mb-2">{g.heading}</h3>
                  <p className="text-[16px] text-mid-grey leading-relaxed mb-5 md:min-h-[52px]">{g.lead}</p>
                  <ul className="border-t border-light-grey mb-5">
                    {g.items.map((it) => (
                      <li key={it.href} className="border-b border-light-grey">
                        <Link href={it.href} className="flex items-center justify-between gap-4 py-3 text-[15px] text-ink hover:text-royal transition-colors">
                          {it.title}
                          <span aria-hidden="true" className="text-royal">→</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <Link href={g.more.href} className="mt-auto font-semibold text-[15px] text-royal hover:text-royal-mid">{g.more.label}</Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4b. WHO WE SERVE ── */}
      <section className="bg-ivory py-s6 md:py-s8" aria-labelledby="serve-heading">
        <div className="container-tbc">
          <Reveal>
            <hr className="gold-rule mb-8 md:mb-s5" />
            <h2 id="serve-heading" className="section-heading mb-12 md:mb-s6 text-balance">Who we work with.</h2>
          </Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              { href: "/industries/manufacturing", eyebrow: "Industry", title: "Manufacturers", body: "Quotes, dispatch, stock and the morning report.", Art: FactoryScene, big: true },
              { href: "/industries/distribution", eyebrow: "Industry", title: "Distributors and traders", body: "WhatsApp orders, stock that matches, money that comes in on time.", Art: DistributionScene, big: false },
              { href: "/process-cost-calculator", eyebrow: "Tool", title: "What does your slowest process cost?", body: "Work it out in a minute.", Art: CostScene, big: false },
            ].map(({ href, eyebrow, title, body, Art, big }) => (
              <div key={href} className={big ? "lg:col-span-2 lg:row-span-2" : ""}>
                <Link href={href} className="group flex flex-col h-full rounded-2xl overflow-hidden bg-[#0E3F2A] ring-1 ring-black/5">
                  <div className={`relative ${big ? "aspect-[16/10] lg:aspect-auto lg:flex-1 lg:min-h-[320px]" : "aspect-[16/9]"}`}>
                    <Art />
                  </div>
                  <div className="p-6 md:p-8 border-t border-white/10">
                    <p className="text-[13px] font-semibold text-[#7FD1A6] mb-2">{eyebrow}</p>
                    <h3 className={`font-display font-bold text-white leading-tight mb-2 text-balance ${big ? "text-[clamp(24px,3vw,34px)]" : "text-[21px]"}`}>{title}</h3>
                    <p className="text-[15px] text-white/75 mb-4 max-w-md">{body}</p>
                    <span className="inline-flex items-center gap-2 font-display font-semibold text-[15px] text-white">
                      {eyebrow === "Tool" ? "Open the calculator" : "See what we fix"} <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-1">→</span>
                    </span>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. WHY TBC (Dark Section) ── */}
      <SectionInk>
        <div className="container-tbc py-s5 md:py-s7">
          <Reveal>
            <hr className="gold-rule mb-8 md:mb-s5" />
            <h2 className="font-display font-bold text-[clamp(26px,3.5vw,36px)] text-white leading-[1.2] max-w-2xl mb-10 md:mb-12 text-balance">
              The rigour of a consultancy.<br />The speed of a technology firm.
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-10">
            {whyTbc.map((card, i) => (
              <Reveal key={card.title} delay={i * 0.15}>
                <article className="border-t-2 border-gold pt-8">
                  <WhyIcon kind={card.icon} />
                  <h3 className="font-display font-bold text-[20px] text-white mb-3">
                    {card.title}
                  </h3>
                  <p className="text-body text-white/70 measure-68">
                    {card.body}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </SectionInk>

      {/* ── 6. PROCESS ── */}
      <section className="bg-ivory py-s6 md:py-s8 border-b border-light-grey">
        <div className="container-tbc">
          <Reveal>
            <hr className="gold-rule mb-8 md:mb-s5" />
            <h2 className="section-heading mb-10 md:mb-14 text-balance">
              A process designed for outcomes,<br />not deliverables.
            </h2>
          </Reveal>

          <Reveal>
            <ProcessTimeline steps={processSteps} />
          </Reveal>
        </div>
      </section>

      {/* ── 7. FAQ ── */}
      <section className="bg-white py-s6 md:py-s8 border-b border-light-grey">
        <div className="container-tbc max-w-3xl">
          <Reveal>
            <hr className="gold-rule gold-rule--center mb-8 md:mb-s5" />
            <h2 className="section-heading text-center mb-10 md:mb-14 text-balance mx-auto">
              Common Questions
            </h2>
          </Reveal>

          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <article className="bg-ivory p-6 rounded-[8px] border border-light-grey shadow-sm">
                  <h3 className="font-display font-bold text-[18px] text-ink mb-3">{faq.question}</h3>
                  <p className="text-body text-mid-grey">{faq.answer}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. INSIGHT ── */}
      <section className="bg-white py-s6 md:py-s8">
        <div className="container-tbc">
          <Reveal>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 md:mb-12">
              <div>
                <hr className="gold-rule mb-6 md:mb-s5" />
                <h2 className="section-heading text-balance">
                  Thinking on AI, strategy, and what comes next.
                </h2>
              </div>
              <Link
                href="/blog"
                className="group/arrow font-display font-semibold text-[14px] text-royal hover:text-royal-mid transition-colors duration-150 inline-flex items-center gap-1"
              >
                View all writing
                <span className="inline-block transition-transform duration-150 group-hover/arrow:translate-x-1">→</span>
              </Link>
            </div>
          </Reveal>

          <InsightRail
            posts={insightPosts.map((p) => ({ slug: p.slug, title: p.title, category: p.category, date: p.date, readTime: p.readTime, excerpt: p.excerpt }))}
          />
        </div>
      </section>

      {/* ── 9. FREE ANALYSIS LEAD MAGNET ── */}
      <FreeAnalysisForm />

      {/* ── POPULAR GUIDES ── */}
      <section className="bg-white py-s6 md:py-s8 border-t border-light-grey">
        <div className="container-tbc">
          <Reveal>
            <hr className="gold-rule mb-6 md:mb-s5" />
            <h2 className="section-heading mb-8">
              Guides for business owners
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              {
                href: "/blog/how-much-does-custom-software-development-cost-in-india-in-2026",
                title: "What custom software costs in India",
              },
              {
                href: "/blog/mobile-app-development-cost-in-india-what-drives-the-price",
                title: "Mobile app development cost in India",
              },
              {
                href: "/blog/how-to-build-an-ai-chatbot-trained-on-your-company-documents",
                title: "Building an AI chatbot on your company documents",
              },
              {
                href: "/blog/custom-crm-vs-zoho-vs-hubspot-for-indian-smes",
                title: "Custom CRM vs Zoho vs HubSpot",
              },
              {
                href: "/blog/business-process-automation-where-to-start",
                title: "Where to start with business automation",
              },
              {
                href: "/blog/how-to-choose-a-software-development-company-in-noida-12-questions-to-ask",
                title: "Choosing a software company in Noida",
              },
              {
                href: "/blog/build-buy-or-extend-choosing-software-for-a-100-person-company",
                title: "Build, buy or extend",
              },
              {
                href: "/blog/the-real-cost-of-a-bad-software-decision",
                title: "The real cost of a bad software decision",
              },
            ].map((guide, i) => (
              <Reveal key={guide.href} delay={i * 0.04}>
                <Link href={guide.href} className="group flex flex-col h-full">
                  <div className="relative aspect-[16/9] rounded-xl overflow-hidden mb-4">
                    <GuideCover variant={i} />
                  </div>
                  <span className="font-display font-semibold text-[17px] text-ink leading-snug group-hover:text-royal transition-colors text-balance">
                    {guide.title}
                  </span>
                  <span className="mt-2 text-[14px] text-royal font-semibold" aria-hidden="true">Read the guide →</span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 10. CTA BAND ── */}
      <section className="bg-royal py-s6 md:py-s8 text-center">
        <div className="container-tbc">
          <Reveal>
            <hr className="gold-rule gold-rule--center mb-8" />
            <h2 className="font-display font-bold text-[clamp(24px,3vw,36px)] text-white leading-[1.2] mb-4 text-balance">
              Ready to make AI work for your business?
            </h2>
            <p className="text-body text-white/80 mb-10 text-pretty max-w-2xl mx-auto">
              Request a consultation. We will respond within one business day.
            </p>
            <Link href="/book-consultation" className="btn-gold w-full sm:w-auto">
              Request a Consultation
            </Link>
            <hr className="gold-rule gold-rule--center mt-10" />
          </Reveal>
        </div>
      </section>
    </>
  );
}
