import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import ServiceCard from "@/components/ServiceCard";
import SectionInk from "@/components/SectionInk";
import ProcessTimeline from "@/components/ProcessTimeline";
import FreeAnalysisForm from "@/components/FreeAnalysisForm";
import { getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "AI Consulting & Strategy | Turbo Bytes Consulting",
  description:
    "Turbo Bytes Consulting is an AI-native management and technology consultancy. We integrate AI into your marketing, operations, and systems — completely.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "AI Consulting & Strategy | Turbo Bytes Consulting",
    description:
      "Turbo Bytes Consulting is an AI-native management and technology consultancy.",
    url: "https://turbobytesconsulting.com",
    images: [{ url: "/img/og-default.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image" as const,
    title: "AI Consulting & Strategy | Turbo Bytes Consulting",
    description:
      "Turbo Bytes Consulting is an AI-native management and technology consultancy.",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Turbo Bytes Consulting",
  alternateName: "TBC",
  description: "AI-Native Management & Technology Consultancy",
  url: "https://turbobytesconsulting.com",
  telephone: "+91-93547-84377",
  email: "info@turbobytesconsulting.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Kasana Tower, Alfa Marg, Alpha-I Commercial Belt, Block A, Alpha I",
    addressLocality: "Greater Noida",
    addressRegion: "Uttar Pradesh",
    addressCountry: "IN",
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Turbo Bytes Consulting",
  url: "https://turbobytesconsulting.com",
};

const faqs = [
  {
    question: "What exactly does an AI-native consultancy do?",
    answer: "We don't just provide slide decks about AI. We integrate artificial intelligence into your core business — from custom Large Language Models (LLMs) and internal tools to training your team on how to actually use them. We design the strategy and build the technology.",
  },
  {
    question: "How long does an engagement typically take?",
    answer: "We are built for speed. Most strategy and AI discovery phases conclude in 2-4 weeks. Full implementation of Custom LLMs or internal tools takes 6-12 weeks, depending on complexity.",
  },
  {
    question: "Do you work with startups or enterprises?",
    answer: "Both. We scale our solutions to match the operational maturity of the organization. For startups, we build lean, fast systems. For enterprises, we ensure compliance, security, and integration with legacy infrastructure.",
  },
  {
    question: "What is your pricing model?",
    answer: "We scope engagements around outcomes, not hourly rates. Every proposal includes a defined timeline, deliverable, and investment required. We also offer retained advisory services for long-term intelligence partnership.",
  }
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

const services = [
  {
    number: "01",
    title: "Custom LLM & On-Premise AI",
    description: "Your organisation's intelligence layer. Trained on your knowledge.",
    href: "/services/custom-llm",
    setupTime: "4–8 wks",
    roi: "60–90 days",
    imageSrc: "/img/hero-service-llm.png",
  },
  {
    number: "02",
    title: "AI Capability Building",
    description: "Organisations that understand AI use it better. We build that understanding.",
    href: "/services/ai-training",
    setupTime: "2–4 wks",
    roi: "Immediate",
    imageSrc: "/img/hero-service-ai-training.png",
  },
  {
    number: "03",
    title: "Website & Application Development",
    description: "Architecturally sound. Conversion-optimised. Built to perform.",
    href: "/services/web-development",
    setupTime: "6–12 wks",
    roi: "90 days",
    imageSrc: "/img/hero-service-web-development.png",
  },
  {
    number: "04",
    title: "Social Media Management",
    description: "Precision-engineered content. Platform-native strategy. AI-driven execution.",
    href: "/services/smm",
    setupTime: "2 wks",
    roi: "Ongoing",
    imageSrc: "/img/hero-service-smm.png",
  },
  {
    number: "05",
    title: "Slate AI Executive Assistant",
    description: "Beyond scheduling. Beyond email. A second intelligence for leaders.",
    href: "/services/slate",
    setupTime: "1 wk",
    roi: "Immediate",
    imageSrc: "/img/hero-service-slate.png",
  },
];

const whyTbc = [
  {
    title: "AI-Native",
    body: "We do not add AI on top of traditional consulting. AI is how we operate — in every workflow, every engagement, every output.",
  },
  {
    title: "Complete Delivery",
    body: "We design strategy and we build systems. Clients do not manage handoffs between an advisor and an agency. We do both.",
  },
  {
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

export const revalidate = 3600;

export default async function HomePage() {
  const posts = await getAllPosts();
  const insightPosts = posts.slice(0, 3);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([localBusinessSchema, websiteSchema, faqSchema]) }}
      />

      {/* ── 1. HERO ── */}
      <section className="relative bg-ink overflow-hidden flex flex-col md:flex-row min-h-[600px]">
        {/* Mobile image band (shows below content on small screens, hidden on md+) */}
        <div className="md:hidden relative w-full h-[220px] order-last">
          <Image src="/img/hero-home.png" alt="" fill className="object-cover object-top opacity-80" priority aria-hidden="true" />
        </div>

        {/* Desktop full-bleed right half image (hidden on mobile) */}
        <div className="hidden md:block absolute right-0 top-0 w-1/2 h-full z-0">
          <Image src="/img/hero-home.png" alt="" fill className="object-cover object-left opacity-90" priority aria-hidden="true" />
          {/* Gradient fade to blend image into the solid left side */}
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-transparent" />
        </div>

        <div className="container-tbc py-s5 md:py-s7 relative z-10 flex-1 flex flex-col justify-center order-first">
          <div className="max-w-[620px]">
            <span className="eyebrow text-gold hero-1">TURBO BYTES CONSULTING</span>
            <hr className="gold-rule mb-8 hero-1" />
            <h1 className="font-display font-bold text-white text-[clamp(32px,8vw,52px)] leading-[1.1] tracking-[-0.5px] mb-6 hero-2 text-balance">
              The intelligence layer your business has been missing.
            </h1>
            <p className="font-sans text-[18px] text-mid-grey leading-relaxed mb-10 hero-3 text-pretty">
              Turbo Bytes Consulting is an AI-native consultancy. We integrate
              artificial intelligence into your marketing, operations, and internal
              systems — completely, not partially.
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

      {/* ── 2. TRUST BAR ── */}
      <section className="bg-ivory border-y border-light-grey">
        <div className="container-tbc py-4">
          <ul className="flex flex-wrap items-center justify-center gap-x-0 gap-y-2 sm:gap-y-0">
            {[
              "MSME Registered",
              "AI-Native",
              "5 Practice Areas",
            ].map((item, i, arr) => (
              <li key={item} className="flex items-center">
                <span className="font-display font-semibold text-caption tracking-[1px] text-ink uppercase text-center w-full sm:w-auto">
                  {item}
                </span>
                {i < arr.length - 1 && (
                  <span
                    className="hidden sm:inline-block mx-4 text-gold font-bold text-lg leading-none select-none"
                    aria-hidden="true"
                  >
                    ·
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── 3. WHO WE ARE ── */}
      <section className="bg-ivory py-s5 md:py-s7">
        <div className="container-tbc">
          <Reveal>
            <span className="eyebrow">WHO WE ARE</span>
            <hr className="gold-rule mb-8 md:mb-s5" />
            <h2 className="section-heading mb-6 text-balance">
              Not an agency. Not a software house.<br />A consultancy built for the AI era.
            </h2>
            <p className="text-body text-mid-grey measure-68 mb-10 md:mb-14 text-pretty">
              Turbo Bytes Consulting sits at the intersection of strategic
              management consulting and artificial intelligence. We design the
              strategy. We build the technology. We deploy it. We measure it. Our
              clients do not receive a strategy deck and a goodbye — they receive
              a working, measurable competitive advantage.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                label: "We Design",
                body: "Strategy, decision frameworks, AI operating models.",
              },
              {
                label: "We Build",
                body: "Custom LLMs, applications, internal tools, content engines.",
              },
              {
                label: "We Deploy",
                body: "Inside your team. Your systems. Your pace. We stay.",
              },
            ].map((pillar, i) => (
              <Reveal key={pillar.label} delay={i * 0.1}>
                <article className="bg-white p-6 rounded shadow-card border-t-[3px] border-t-gold border border-x-light-grey border-b-light-grey h-full">
                  <h4 className="font-display font-bold text-[18px] text-ink mb-2">
                    {pillar.label}
                  </h4>
                  <p className="text-body text-mid-grey">
                    {pillar.body}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. SERVICES ── */}
      <section className="bg-white py-s5 md:py-s7 border-y border-light-grey">
        <div className="container-tbc">
          <Reveal>
            <span className="eyebrow">WHAT WE DO</span>
            <hr className="gold-rule mb-8 md:mb-s5" />
            <h2 className="section-heading mb-10 md:mb-12 text-balance">
              Five practice areas.<br />One integrated capability.
            </h2>
          </Reveal>

          {/* 5-card grid (2 up top, 3 below, auto-fits well) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <Reveal key={s.number} delay={i * 0.1} className={i < 2 ? "lg:col-span-1" : "lg:col-span-1"}>
                <ServiceCard {...s} className="h-full" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. WHY TBC (Dark Section) ── */}
      <SectionInk>
        <div className="container-tbc py-s5 md:py-s7">
          <Reveal>
            <span className="eyebrow text-gold">WHY TBC</span>
            <hr className="gold-rule mb-8 md:mb-s5" />
            <h2 className="font-display font-bold text-[clamp(26px,3.5vw,36px)] text-white leading-[1.2] max-w-2xl mb-10 md:mb-12 text-balance">
              The rigour of a consultancy.<br />The speed of a technology firm.
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-10">
            {whyTbc.map((card, i) => (
              <Reveal key={card.title} delay={i * 0.15}>
                <article className="border-t-2 border-gold pt-6">
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
      <section className="bg-ivory py-s5 md:py-s7 border-b border-light-grey">
        <div className="container-tbc">
          <Reveal>
            <span className="eyebrow">OUR PROCESS</span>
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
      <section className="bg-white py-s5 md:py-s7 border-b border-light-grey">
        <div className="container-tbc max-w-3xl">
          <Reveal>
            <span className="eyebrow text-center">FAQ</span>
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
      <section className="bg-white py-s5 md:py-s7">
        <div className="container-tbc">
          <Reveal>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 md:mb-12">
              <div>
                <span className="eyebrow">INSIGHT</span>
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {insightPosts.map((post, i) => (
              <Reveal key={post.slug} delay={i * 0.1} className="flex">
                <Link href={`/blog/${post.slug}`} className="bg-white rounded shadow-card border border-light-grey hover:shadow-card-hover hover:-translate-y-1 transition-all duration-tbc flex flex-col w-full overflow-hidden group/card block">
                  {/* Category swatch tile to avoid pure text card */}
                  <div className="h-16 bg-ink flex items-center px-6 border-b-[3px] border-gold">
                    <span className="font-display font-semibold text-caption text-white uppercase tracking-[1.5px]">
                      {post.category}
                    </span>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="font-display font-bold text-[18px] text-ink leading-snug mb-auto group-hover/card:text-royal transition-colors text-balance">
                      {post.title}
                    </h3>
                    <p className="font-sans text-caption text-mid-grey mt-6 uppercase tracking-[1px]">
                      {post.date} · {post.readTime}
                    </p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 9. FREE ANALYSIS LEAD MAGNET ── */}
      <FreeAnalysisForm />

      {/* ── 10. CTA BAND ── */}
      <section className="bg-royal py-s5 md:py-s7 text-center">
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
