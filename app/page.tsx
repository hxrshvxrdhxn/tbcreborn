import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "AI Consulting & Strategy | Turbo Bytes Consulting",
  description:
    "Turbo Bytes Consulting is an AI-native management and technology consultancy. We integrate AI into your marketing, operations, and systems — completely.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "AI Consulting & Strategy | Turbo Bytes Consulting",
    description:
      "Turbo Bytes Consulting is an AI-native management and technology consultancy. We integrate AI into your marketing, operations, and systems — completely.",
    url: "https://turbobytesconsulting.com",
    images: [{ url: "/og-default.png", width: 1200, height: 630 }],
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
    streetAddress:
      "Kasana Tower, Alfa Marg, Alpha-I Commercial Belt, Block A, Alpha I",
    addressLocality: "Greater Noida",
    addressRegion: "Uttar Pradesh",
    addressCountry: "IN",
  },
  sameAs: [
    "https://instagram.com/turbobytesconsulting",
    "https://x.com/social_TBC",
  ],
};

const services = [
  {
    number: "01",
    name: "Custom LLM & On-Premise AI",
    description:
      "Your organisation's intelligence layer. Trained on your knowledge.",
    href: "/services/custom-llm",
  },
  {
    number: "02",
    name: "AI Capability Building",
    description:
      "Organisations that understand AI use it better. We build that understanding.",
    href: "/services/ai-training",
  },
  {
    number: "03",
    name: "Website & Application Development",
    description:
      "Architecturally sound. Conversion-optimised. Built to perform.",
    href: "/services/web-development",
  },
  {
    number: "04",
    name: "Social Media Management",
    description:
      "Precision-engineered content. Platform-native strategy. AI-driven execution.",
    href: "/services/smm",
  },
  {
    number: "05",
    name: "Slate AI Executive Assistant",
    description:
      "Beyond scheduling. Beyond email. A second intelligence for leaders.",
    href: "/services/slate",
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
    name: "Discovery",
    description:
      "A focused conversation about your organisation, your challenges, and where AI can have the highest impact. No jargon. No sales process.",
  },
  {
    number: "02",
    name: "Proposal",
    description:
      "A precise written proposal delivered within 48 hours. Scope, methodology, timeline, and investment — all defined.",
  },
  {
    number: "03",
    name: "Engagement",
    description:
      "Work begins. Integrated with your team, your systems, and your pace. Regular structured updates.",
  },
  {
    number: "04",
    name: "Delivery",
    description:
      "The outcome we defined at the outset is achieved. Documented, measured, and handed over completely.",
  },
  {
    number: "05",
    name: "Partnership",
    description:
      "Many clients continue with an ongoing advisory retainer. We are designed to be a long-term intelligence partner.",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      {/* ── 1. HERO ── */}
      <section className="bg-ink hero-grid relative overflow-hidden">
        <div className="container-tbc py-28 md:py-36 lg:py-40">
          <span className="eyebrow text-gold hero-1">TURBO BYTES CONSULTING</span>
          <hr className="gold-rule mb-8 hero-1" />
          <h1 className="font-display font-bold text-white text-[clamp(36px,5vw,52px)] leading-[1.1] tracking-[-0.5px] max-w-3xl mb-6 hero-2">
            The intelligence layer your business has been missing.
          </h1>
          <p className="font-sans text-[18px] text-mid-grey leading-relaxed max-w-2xl mb-10 hero-3">
            Turbo Bytes Consulting is an AI-native consultancy. We integrate
            artificial intelligence into your marketing, operations, and internal
            systems — completely, not partially.
          </p>
          <div className="flex flex-wrap gap-4 hero-4">
            <Link href="/book-consultation" className="btn-primary">
              Request a Consultation
            </Link>
            <Link href="/services" className="btn-ghost-gold">
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* ── 2. TRUST BAR ── */}
      <section className="bg-ivory border-t border-b border-light-grey">
        <div className="container-tbc py-4">
          <ul className="flex flex-wrap items-center justify-center gap-x-0 gap-y-2 sm:gap-y-0">
            {[
              "MSME Registered",
              "AI-Native",
              "5 Practice Areas",
            ].map((item, i, arr) => (
              <li key={item} className="flex items-center">
                <span className="font-display font-semibold text-[13px] tracking-[1px] text-ink uppercase">
                  {item}
                </span>
                {i < arr.length - 1 && (
                  <span
                    className="mx-4 text-gold font-bold text-lg leading-none select-none"
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
      <section className="bg-ivory py-20">
        <div className="container-tbc">
          <Reveal>
            <span className="eyebrow">WHO WE ARE</span>
            <hr className="gold-rule mb-6" />
            <h2 className="font-display font-bold text-[clamp(26px,3.5vw,36px)] text-ink leading-[1.2] max-w-3xl mb-6">
              Not an agency. Not a software house.<br />A consultancy built for the AI
              era.
            </h2>
            <p className="font-sans text-[17px] text-mid-grey leading-relaxed max-w-2xl mb-14">
              Turbo Bytes Consulting sits at the intersection of strategic
              management consulting and artificial intelligence. We design the
              strategy. We build the technology. We deploy it. We measure it. Our
              clients do not receive a strategy deck and a goodbye — they receive
              a working, measurable competitive advantage.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 lg:gap-16">
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
              <Reveal key={pillar.label} delay={i * 80}>
                <article>
                  <hr className="gold-rule mb-4" style={{ width: "32px" }} />
                  <h4 className="font-display font-bold text-[18px] text-ink mb-2">
                    {pillar.label}
                  </h4>
                  <p className="font-sans text-[15px] text-mid-grey leading-relaxed">
                    {pillar.body}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. SERVICES ── */}
      <section className="bg-white py-20">
        <div className="container-tbc">
          <Reveal>
            <span className="eyebrow">WHAT WE DO</span>
            <hr className="gold-rule mb-6" />
            <h2 className="font-display font-bold text-[clamp(26px,3.5vw,36px)] text-ink leading-[1.2] max-w-2xl mb-12">
              Five practice areas.<br />One integrated capability.
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <Reveal key={s.number} delay={i * 60} className="flex">
                <Link
                  href={s.href}
                  className="bg-ivory rounded-[8px] border border-light-grey shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-200 ease-tbc p-7 flex flex-col w-full group/card"
                >
                  <span className="font-display font-bold text-[13px] text-gold tracking-[1px] mb-4">
                    {s.number}
                  </span>
                  <h3 className="font-display font-bold text-[20px] text-ink leading-snug mb-3 group-hover/card:text-royal transition-colors duration-150">
                    {s.name}
                  </h3>
                  <p className="font-sans text-[15px] text-mid-grey leading-relaxed mb-6 flex-1">
                    {s.description}
                  </p>
                  <span
                    className="font-display font-semibold text-[14px] text-royal group-hover/card:text-royal-mid transition-colors duration-150 inline-flex items-center gap-1"
                  >
                    Learn More
                    <span className="inline-block transition-transform duration-150 group-hover/card:translate-x-1">→</span>
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. WHY TBC ── */}
      <section className="bg-ink py-20">
        <div className="container-tbc">
          <Reveal>
            <span className="eyebrow text-gold">WHY TBC</span>
            <hr className="gold-rule mb-6" />
            <h2 className="font-display font-bold text-[clamp(26px,3.5vw,36px)] text-white leading-[1.2] max-w-2xl mb-12">
              The rigour of a consultancy.<br />The speed of a technology firm.
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {whyTbc.map((card, i) => (
              <Reveal key={card.title} delay={i * 90}>
                <article className="border-t-2 border-gold pt-6">
                  <h3 className="font-display font-bold text-[20px] text-white mb-3">
                    {card.title}
                  </h3>
                  <p className="font-sans text-[15px] text-white/70 leading-relaxed">
                    {card.body}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. PROCESS ── */}
      <section className="bg-ivory py-20">
        <div className="container-tbc">
          <Reveal>
            <span className="eyebrow">OUR PROCESS</span>
            <hr className="gold-rule mb-6" />
            <h2 className="font-display font-bold text-[clamp(26px,3.5vw,36px)] text-ink leading-[1.2] max-w-2xl mb-14">
              A process designed for outcomes,<br />not deliverables.
            </h2>
          </Reveal>

          <Reveal>
          <ol className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4 lg:gap-8">
            {processSteps.map((step, idx) => (
              <li key={step.number} className="relative flex md:flex-col gap-5 md:gap-4">
                {/* connector line (desktop) */}
                {idx < processSteps.length - 1 && (
                  <span
                    className="hidden md:block absolute top-5 left-[calc(50%+20px)] right-[-50%] h-px bg-light-grey"
                    aria-hidden="true"
                  />
                )}
                <span className="flex-shrink-0 w-10 h-10 rounded-full bg-gold flex items-center justify-center font-display font-bold text-[13px] text-ink">
                  {step.number}
                </span>
                <div>
                  <h3 className="font-display font-bold text-[17px] text-ink mb-2">
                    {step.name}
                  </h3>
                  <p className="font-sans text-[14px] text-mid-grey leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
          </Reveal>
        </div>
      </section>

      {/* ── 7. INSIGHT ── */}
      <section className="bg-white py-20">
        <div className="container-tbc">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4 mb-12">
              <div>
                <span className="eyebrow">INSIGHT</span>
                <hr className="gold-rule mb-4" />
                <h2 className="font-display font-bold text-[clamp(26px,3.5vw,36px)] text-ink leading-[1.2] max-w-xl">
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
              <Reveal key={post.slug} delay={i * 70} className="flex">
                <Link href={`/blog/${post.slug}`} className="bg-ivory rounded-[8px] border border-light-grey hover:shadow-card-hover hover:-translate-y-1 transition-all duration-200 ease-tbc p-7 flex flex-col w-full group/card block">
                  <span className="font-display font-semibold text-[12px] text-royal uppercase tracking-[1.5px] mb-4">
                    {post.category}
                  </span>
                  <h3 className="font-display font-bold text-[18px] text-ink leading-snug mb-auto group-hover/card:text-royal transition-colors">
                    {post.title}
                  </h3>
                  <p className="font-sans text-[13px] text-mid-grey mt-6">
                    {post.date} · {post.readTime}
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. CTA BAND ── */}
      <section className="bg-royal py-16 text-center">
        <div className="container-tbc">
          <Reveal>
            <hr className="gold-rule gold-rule--center mb-8" />
            <h2 className="font-display font-bold text-[clamp(24px,3vw,36px)] text-white leading-[1.2] mb-4">
              Ready to make AI work for your business?
            </h2>
            <p className="font-sans text-[17px] text-white/80 mb-10">
              Request a consultation. We will respond within one business day.
            </p>
            <Link href="/book-consultation" className="btn-gold">
              Request a Consultation
            </Link>
            <hr className="gold-rule gold-rule--center mt-10" />
          </Reveal>
        </div>
      </section>
    </>
  );
}
