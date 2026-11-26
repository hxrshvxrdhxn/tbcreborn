import type { Metadata } from "next";
import Link from "next/link";
import HeroLines from "@/components/HeroLines";
import Reveal from "@/components/Reveal";
import YouTubeLite from "@/components/YouTubeLite";
import { liveVideos, videoSchema } from "@/lib/social";
import SectionInk from "@/components/SectionInk";
import ProcessTimeline from "@/components/ProcessTimeline";
import FreeAnalysisForm from "@/components/FreeAnalysisForm";
import InsightRail from "@/components/InsightRail";
import { getAllPosts } from "@/lib/posts";
import { ProcessToday, ProcessWithSoftware, PillarIcon, WhyIcon, FactoryScene, DistributionScene, CostScene, GuideCover } from "@/components/Illustrations";

export const metadata: Metadata = {
  title: { absolute: "Technology Consulting & Process Automation | Turbo Bytes Consulting" },
  description:
    "Technology consultancy for mid-market and founder-led firms: process automation, custom software, digital transformation, and AEO/SEO/GEO visibility across India, Middle East and Asia-Pacific.",
  alternates: { canonical: "/" },
  openGraph: {
    title: { absolute: "Technology Consulting & Process Automation | Turbo Bytes Consulting" },
    description:
      "Technology consultancy for mid-market and founder-led firms: process automation, custom software, digital transformation, and AEO/SEO/GEO visibility across India, Middle East and Asia-Pacific.",
    url: "https://turbobytesconsulting.com",
    images: [{ url: "/img/og-default.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image" as const,
    title: { absolute: "Technology Consulting & Process Automation | Turbo Bytes Consulting" },
    description:
      "Technology consultancy for mid-market and founder-led firms across India, Middle East and Asia-Pacific.",
  },
};

const faqs = [
  {
    question: "What does Turbo Bytes Consulting do?",
    answer: "We are a technology consultancy. We sit with the MD and leadership team to identify the business processes costing the most in time and errors, and resolve them: through process automation, custom software engineered for that exact workflow, and full digital transformation. We also build search and AI answer visibility (AEO, SEO, GEO) for clients.",
  },
  {
    question: "How does your team operate compared to a traditional technology firm?",
    answer: "In pilot engagements we have taken work that needed a 40-person technology team and run it with 4 people plus machines. We start with process mapping and diagnostic clarity, eliminate unnecessary steps, and automate handoffs with purpose-built systems so lean senior teams achieve outsized results.",
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

export const revalidate = 300; // Rebuilt at most every 5 minutes, not on every visit (this was what used up the Vercel CPU quota)

export default async function HomePage() {
  const posts = await getAllPosts();
  const insightPosts = posts.slice(0, 8);
  const videos = liveVideos();

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
              We sit with the MD and your team, find the processes that cost the
              business the most, and fix them: with process automation, custom software,
              and full digital transformation. We also ensure your company is findable
              in search and AI answers across India, the Middle East, and Asia-Pacific.
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

      {/* ── 2. PROOF POINT STAT BLOCK ── */}
      <section className="bg-forest border-y border-white/10 py-10">
        <div className="container-tbc">
          <div className="bg-white/5 border border-white/15 rounded-[8px] p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="flex items-baseline gap-4 shrink-0">
              <span className="font-display font-bold text-[clamp(44px,6vw,68px)] text-gold leading-none">
                40 → 4
              </span>
              <span className="text-[14px] font-sans text-white/70 max-w-[140px] leading-tight">
                Team leverage in pilot engagements
              </span>
            </div>
            <div className="border-t md:border-t-0 md:border-l border-white/10 pt-6 md:pt-0 md:pl-10 max-w-2xl">
              <p className="font-display font-semibold text-[20px] text-white leading-snug mb-2">
                In pilot engagements we have taken work that needed a 40-person technology team and run it with 4 people plus machines.
              </p>
              <p className="font-sans text-[15px] text-white/75 leading-relaxed">
                We sit with the MD and leadership team, map the workflows that cost the most, automate repetitive handoffs, and deploy bespoke systems so lean senior teams outperform sprawling departments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. WHO WE ARE: PROCESS AUTOMATION & CONSULTING ── */}
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

      {/* ── 4. CUSTOM SOFTWARE FOR ANY SPECIFIC NEED ── */}
      <section className="bg-white py-s6 md:py-s8 border-y border-light-grey" aria-labelledby="custom-software-heading">
        <div className="container-tbc">
          <Reveal>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 md:mb-12">
              <div>
                <hr className="gold-rule mb-6 md:mb-s5" />
                <h2 id="custom-software-heading" className="section-heading text-balance mb-4">
                  Custom software for any specific need.
                </h2>
                <p className="text-body text-mid-grey measure-68 text-pretty">
                  We build what the process needs, not a template. When commercial off-the-shelf software forces compromise, we engineer exact web systems, mobile tools, and private LLMs.
                </p>
              </div>
              <Link href="/services/custom-software-development" className="btn-primary min-h-[48px] px-6 flex items-center justify-center shrink-0">
                Explore custom software →
              </Link>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-ivory p-8 rounded-[8px] border border-light-grey flex flex-col justify-between">
              <div>
                <h3 className="font-display font-bold text-[20px] text-ink mb-3">Operational Systems</h3>
                <p className="text-[15px] text-mid-grey leading-relaxed mb-6">
                  Order-to-dispatch tracking boards, quality assurance workflows, inventory synchronisation, and custom ERP connectors built for your exact floor rules.
                </p>
              </div>
              <Link href="/services/custom-software-development" className="text-[14px] font-semibold text-royal hover:underline">
                Read about operational systems →
              </Link>
            </div>
            <div className="bg-ivory p-8 rounded-[8px] border border-light-grey flex flex-col justify-between">
              <div>
                <h3 className="font-display font-bold text-[20px] text-ink mb-3">Private On-Premise AI</h3>
                <p className="text-[15px] text-mid-grey leading-relaxed mb-6">
                  Custom LLMs trained on company documents, technical drawings, and catalogue specifications, hosted securely on your private cloud or premises.
                </p>
              </div>
              <Link href="/services/custom-llm" className="text-[14px] font-semibold text-royal hover:underline">
                Explore custom LLMs →
              </Link>
            </div>
            <div className="bg-ivory p-8 rounded-[8px] border border-light-grey flex flex-col justify-between">
              <div>
                <h3 className="font-display font-bold text-[20px] text-ink mb-3">AI Capability Building</h3>
                <p className="text-[15px] text-mid-grey leading-relaxed mb-6">
                  Structured workforce enablement that trains engineers, estimators, and analysts to build machine intelligence directly into daily business operations.
                </p>
              </div>
              <Link href="/services/ai-training" className="text-[14px] font-semibold text-royal hover:underline">
                View training programmes →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. AEO, SEO & GEO READINESS BAND ── */}
      <section className="bg-forest py-s6 md:py-s8 border-b border-light-grey text-white" aria-labelledby="aeo-band-heading">
        <div className="container-tbc">
          <Reveal>
            <div className="max-w-3xl">
              <hr className="gold-rule mb-6" />
              <h2 id="aeo-band-heading" className="font-display font-bold text-[clamp(28px,3.8vw,44px)] leading-[1.15] mb-6 text-balance text-white">
                Is your business visible in AI answers?
              </h2>
              <p className="text-[18px] text-white/85 leading-relaxed mb-8 text-pretty">
                When prospective buyers ask ChatGPT, Gemini, Perplexity, Copilot, or Google AI Overviews for recommendations in your industry, is your company named and cited? We prepare B2B firms, manufacturers, and consultancies for discovery across traditional search engines and generative answer engines.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                <div className="bg-white/5 border border-white/10 rounded-[8px] p-6">
                  <h3 className="font-display font-semibold text-[18px] text-gold mb-2">SEO (Search Engines)</h3>
                  <p className="text-[14px] text-white/75 leading-relaxed">
                    Technical indexing, site architecture, and top keyword positioning across Google and Bing.
                  </p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-[8px] p-6">
                  <h3 className="font-display font-semibold text-[18px] text-gold mb-2">AEO (Answer Engines)</h3>
                  <p className="text-[14px] text-white/75 leading-relaxed">
                    Answer-first page structuring that earns featured snippets, People Also Ask, and voice search answers.
                  </p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-[8px] p-6">
                  <h3 className="font-display font-semibold text-[18px] text-gold mb-2">GEO (Generative Engines)</h3>
                  <p className="text-[14px] text-white/75 leading-relaxed">
                    Entity authority, schema graphs, and verified third-party citations so LLMs cite your company directly.
                  </p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Link href="/services/aeo-seo-geo" className="btn-gold min-h-[48px] px-8 text-center flex items-center justify-center text-[15px]">
                  Explore AEO, SEO & GEO Readiness →
                </Link>
                <Link href="/free-ai-visibility-check" className="btn-primary min-h-[48px] px-8 text-center flex items-center justify-center text-[15px] border border-white/30">
                  Request a Free AI Visibility Check
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── 6. DIGITAL TRANSFORMATION ── */}
      <section className="bg-ivory py-s6 md:py-s8 border-b border-light-grey" aria-labelledby="transformation-heading">
        <div className="container-tbc">
          <Reveal>
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 items-end mb-12">
              <div>
                <hr className="gold-rule mb-6" />
                <h2 id="transformation-heading" className="section-heading mb-4 text-balance">
                  Full digital transformation: end-to-end.
                </h2>
                <p className="text-body text-mid-grey measure-68 text-pretty">
                  We do not stop at advisory slide decks. We take responsibility from the first diagnostic to the day your team uses running software on the shop floor or office.
                </p>
              </div>
              <Link href="/digital-transformation" className="btn-primary min-h-[48px] px-6 flex items-center justify-center shrink-0">
                How transformation runs →
              </Link>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { phase: "01", name: "Diagnose", desc: "Process audit, bottleneck costing, and structural review with leadership." },
              { phase: "02", name: "Design", desc: "Workflow architecture, integration mapping, and human approval rules." },
              { phase: "03", name: "Build", desc: "Bespoke software and automated data pipelines engineered for your team." },
              { phase: "04", name: "Run", desc: "Deployment, operational testing, and workforce training on live work." },
              { phase: "05", name: "Hand over", desc: "Ongoing SLA maintenance, system monitoring, and complete operational autonomy." },
            ].map((p, i) => (
              <Reveal key={p.phase} delay={i * 0.08}>
                <div className="bg-white p-6 rounded-[8px] border border-light-grey shadow-card h-full flex flex-col justify-between">
                  <div>
                    <span className="font-display font-bold text-royal text-[16px] block mb-2">{p.phase}</span>
                    <h3 className="font-display font-bold text-ink text-[18px] mb-2">{p.name}</h3>
                    <p className="text-[14px] text-mid-grey leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. PRODUCTS (PROOF THAT WE SHIP) ── */}
      <section className="bg-white py-s6 md:py-s8 border-b border-light-grey" aria-labelledby="products-heading">
        <div className="container-tbc">
          <Reveal>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 md:mb-12">
              <div>
                <hr className="gold-rule mb-6" />
                <h2 id="products-heading" className="section-heading text-balance mb-3">
                  Products are proof that we ship.
                </h2>
                <p className="text-[17px] text-mid-grey leading-relaxed max-w-2xl">
                  Consulting leads our engagements. Alongside client work, we engineer and operate our own software platforms: battle-tested proof of our engineering standards.
                </p>
              </div>
              <Link href="/products" className="font-display font-semibold text-[15px] text-royal hover:text-royal-mid shrink-0">
                View all software products →
              </Link>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-[8px] bg-ivory border border-light-grey flex flex-col justify-between">
              <div>
                <span className="text-[13px] font-semibold text-royal block mb-2">Proposal Engine</span>
                <h3 className="font-display font-bold text-[22px] text-ink mb-3">Distil</h3>
                <p className="text-[15px] text-mid-grey leading-relaxed mb-6">
                  Complex techno-commercial proposals assembled from verified data components. Calculates exact pricing with zero spreadsheet formula errors.
                </p>
              </div>
              <Link href="/products/distil" className="font-display font-semibold text-[15px] text-royal hover:underline">
                Explore Distil →
              </Link>
            </div>

            <div className="p-8 rounded-[8px] bg-ivory border border-light-grey flex flex-col justify-between">
              <div>
                <span className="text-[13px] font-semibold text-royal block mb-2">Solar Prospecting</span>
                <h3 className="font-display font-bold text-[22px] text-ink mb-3">Sunscout</h3>
                <p className="text-[15px] text-mid-grey leading-relaxed mb-6">
                  Rooftop solar prospecting and sizing for commercial and industrial EPCs in India and Europe. Identifies factory roofs, sizes kWp, and ranks opportunities.
                </p>
              </div>
              <Link href="/products/sunscout" className="font-display font-semibold text-[15px] text-royal hover:underline">
                Explore Sunscout →
              </Link>
            </div>

            <div className="p-8 rounded-[8px] bg-ivory border border-light-grey flex flex-col justify-between">
              <div>
                <span className="text-[13px] font-semibold text-royal block mb-2">All-in-One Operating System</span>
                <h3 className="font-display font-bold text-[22px] text-ink mb-3">Meridian</h3>
                <p className="text-[15px] text-mid-grey leading-relaxed mb-6">
                  One unified edition connecting orders, QC, service, and inventory through a dedicated private company brain that keeps data strictly separate.
                </p>
              </div>
              <Link href="/products/meridian" className="font-display font-semibold text-[15px] text-royal hover:underline">
                Explore Meridian →
              </Link>
            </div>
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
                <Link href={href} className="group flex flex-col h-full rounded-[8px] overflow-hidden bg-[#0E3F2A] ring-1 ring-black/5 card-depth">
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

      {/* ── 4c. PRODUCTS AT WORK (YouTube, click to play) ── */}
      {videos.length > 0 && (
        <section className="bg-white py-s6 md:py-s8 border-b border-light-grey" aria-labelledby="watch-heading">
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(videos.map(videoSchema)) }} />
          <div className="container-tbc">
            <Reveal>
              <h2 id="watch-heading" className="section-heading mb-4 text-balance">Our products at work.</h2>
              <p className="text-[17px] text-mid-grey leading-relaxed measure-68 mb-10 md:mb-s5">Short films on how our products work, from first click to finished result.</p>
            </Reveal>
            <div className={`grid grid-cols-1 ${videos.length > 1 ? "md:grid-cols-2" : "max-w-3xl"} gap-8`}>
              {videos.map((v) => (
                <div key={v.id} className="flex flex-col gap-4">
                  <YouTubeLite id={v.id} title={v.title} poster={v.poster} />
                  {v.product && (
                    <Link href={`/products/${v.product}`} className="font-display font-semibold text-royal hover:text-royal-mid">
                      More about {v.product === "sunscout" ? "Sunscout" : "Distil"}, with a free trial →
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

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

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <details className="group bg-ivory rounded-[8px] border border-light-grey transition-colors open:bg-white open:shadow-sm">
                  <summary className="flex items-center justify-between p-6 cursor-pointer list-none select-none font-display font-semibold text-[18px] text-ink">
                    <span>{faq.question}</span>
                    <span className="text-forest transition-transform duration-200 group-open:rotate-180 text-xl font-bold ml-4 shrink-0" aria-hidden="true">↓</span>
                  </summary>
                  <div className="px-6 pb-6 text-body text-mid-grey border-t border-light-grey/60 pt-4">
                    {faq.answer}
                  </div>
                </details>
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
                <Link href={guide.href} className="group flex flex-col h-full p-2 rounded-[8px] transition-all duration-200 hover:bg-white hover:shadow-card card-depth">
                  <div className="relative aspect-[16/9] rounded-[8px] overflow-hidden mb-4">
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
