import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import ServiceFooter from "@/components/ServiceFooter";
import SectionInk from "@/components/SectionInk";

export const metadata: Metadata = {
  title: "AI Training & Automation Workshops",
  description:
    "Hands-on AI training and automation workshops for business teams. Custom programmes, action plans, and measurable outcomes. Turbo Bytes Consulting.",
  alternates: {
    canonical: "/services/ai-training",
  },
  openGraph: {
    title: "AI Training & Automation Workshops",
    description:
      "Hands-on AI training and automation workshops for business teams. Custom programmes, action plans, and measurable outcomes. Turbo Bytes Consulting.",
    url: "https://turbobytesconsulting.com/services/ai-training",
    images: [{ url: "/img/og-default.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image" as const,
    title: "AI Training & Automation Workshops",
    description:
      "Hands-on AI training and automation workshops for business teams. Custom programmes, action plans, and measurable outcomes. Turbo Bytes Consulting.",
  },
};

const curriculumItems = [
  {
    number: "01",
    title: "AI Fundamentals",
    description:
      "For non-technical leaders and teams. What AI can and cannot do. Where it creates leverage.",
  },
  {
    number: "02",
    title: "Automation Mapping",
    description:
      "Identifying and mapping automation opportunities in your existing processes.",
  },
  {
    number: "03",
    title: "AI Tools in Practice",
    description:
      "Effective use of ChatGPT, Claude, Gemini, Midjourney, and others.",
  },
  {
    number: "04",
    title: "No-Code Workflows",
    description:
      "Building AI-powered automation with Zapier, Make, and n8n.",
  },
  {
    number: "05",
    title: "Prompt Engineering",
    description:
      "Precision business outputs through systematic prompt design.",
  },
  {
    number: "06",
    title: "AI Governance",
    description:
      "Data privacy, responsible deployment, and organisational AI policy.",
  },
];

const deliveryFormats = [
  {
    title: "In-Person Intensives",
    description:
      "Half-day and full-day sessions delivered at your office or an off-site venue. High engagement, immediate application.",
    icon: (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
  },
  {
    title: "Virtual Cohorts",
    description:
      "Live remote sessions for distributed teams. Cohorts of 5–20 participants with breakout exercises and real-time coaching.",
    icon: (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125z" />
      </svg>
    ),
  },
  {
    title: "Recorded Modules",
    description:
      "Asynchronous video content your team can access on their own schedule. Ideal for large organisations or onboarding new hires.",
    icon: (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
      </svg>
    ),
  },
  {
    title: "Ongoing Advisory",
    description:
      "Monthly advisory retainer for teams that want continued AI coaching, tool evaluation, and strategic guidance post-programme.",
    icon: (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
      </svg>
    ),
  },
];

export default function AITrainingPage() {
  return (
    <>
      {/* ── Breadcrumb ── */}
      <nav aria-label="Breadcrumb" className="bg-ivory border-b border-light-grey">
        <div className="container-tbc py-3">
          <ol className="flex items-center gap-2 font-display text-[13px] uppercase tracking-widest text-mid-grey">
            <li>
              <Link href="/" className="hover:text-ink transition-colors">Home</Link>
            </li>
            <li aria-hidden="true" className="text-light-grey select-none">/</li>
            <li>
              <Link href="/services" className="hover:text-ink transition-colors">Services</Link>
            </li>
            <li aria-hidden="true" className="text-light-grey select-none">/</li>
            <li className="text-ink font-bold" aria-current="page">AI Capability Building</li>
          </ol>
        </div>
      </nav>

      {/* ── PAGE HERO ── */}
      <section className="relative bg-ink overflow-hidden min-h-[400px] flex items-center border-b border-light-grey" aria-labelledby="ai-training-hero-heading">
        {/* Full-bleed background image band */}
        <div className="absolute inset-0 z-0">
          <Image src="/img/hero-service-ai-training.png" alt="" fill className="object-cover object-center opacity-40 mix-blend-screen" priority aria-hidden="true" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-transparent" />
        </div>

        <div className="container-tbc py-s6 relative z-10">
          <Reveal>
            <span className="eyebrow text-gold">PRACTICE 02</span>
            <hr className="gold-rule mb-6" />
            <h1 id="ai-training-hero-heading" className="font-display font-bold text-[clamp(32px,4.5vw,52px)] text-white leading-[1.1] tracking-[-0.5px] max-w-4xl mb-6 text-balance">
              AI Capability Building &amp;<br />Automation Workshops
            </h1>
            <p className="text-body text-white/70 leading-relaxed max-w-3xl mb-8 text-pretty">
              Organisations that understand AI use it better. We build that understanding.
            </p>
            <div className="inline-flex flex-wrap items-center gap-3 bg-white/10 backdrop-blur border border-white/20 rounded px-4 py-3 shadow-sm">
              <span className="w-2.5 h-2.5 rounded-full bg-gold flex-shrink-0" aria-hidden="true" />
              <span className="font-display font-semibold text-caption text-white uppercase tracking-widest">
                Sessions bookable with 5 business days notice
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Curriculum ── */}
      <section className="bg-ivory py-s7 border-b border-light-grey" aria-labelledby="curriculum-heading">
        <div className="container-tbc">
          <div className="text-center max-w-2xl mx-auto mb-s6">
            <Reveal>
              <span className="eyebrow">What We Teach</span>
              <h2 id="curriculum-heading" className="font-display font-bold text-[clamp(28px,3vw,36px)] text-ink leading-[1.2] mb-6">
                A curriculum built around your tools, your team, and your goals.
              </h2>
              <hr className="gold-rule gold-rule--center" />
            </Reveal>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {curriculumItems.map((item, i) => (
              <Reveal key={item.number} delay={i * 0.10}>
                <article className="bg-white border border-light-grey rounded p-8 shadow-card hover:shadow-card-hover transition-shadow duration-300 h-full">
                  <span className="font-display font-bold text-gold/60 text-[13px] tracking-widest mb-3 block" aria-hidden="true">
                    {item.number}
                  </span>
                  <hr className="gold-rule mb-5" />
                  <h3 className="font-display font-bold text-[18px] text-ink mb-3 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-body text-mid-grey text-pretty">
                    {item.description}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Delivery Formats ── */}
      <section className="bg-white py-s7 border-b border-light-grey" aria-labelledby="delivery-formats-heading">
        <div className="container-tbc">
          <div className="text-center max-w-2xl mx-auto mb-s6">
            <Reveal>
              <span className="eyebrow">Delivery Formats</span>
              <h2 id="delivery-formats-heading" className="font-display font-bold text-[clamp(28px,3vw,36px)] text-ink leading-[1.2] mb-6">
                Training delivered the way your organisation works.
              </h2>
              <hr className="gold-rule gold-rule--center" />
            </Reveal>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {deliveryFormats.map((format, i) => (
              <Reveal key={format.title} delay={i * 0.10}>
                <div className="flex flex-col gap-4 h-full">
                  <div className="text-gold" aria-hidden="true">
                    {format.icon}
                  </div>
                  <h3 className="font-display font-bold text-[17px] text-ink leading-snug">
                    {format.title}
                  </h3>
                  <p className="text-body text-mid-grey">
                    {format.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── AI Action Plan ── */}
      <section className="bg-ivory py-s7 border-b border-light-grey" aria-labelledby="action-plan-heading">
        <div className="container-tbc">
          <Reveal>
            <div className="bg-white border border-light-grey rounded p-10 shadow-card max-w-4xl mx-auto relative overflow-hidden">
              {/* Subtle gold accent line */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gold"></div>
              
              <span className="eyebrow">Programme Deliverable</span>
              <h2 id="action-plan-heading" className="font-display font-bold text-[clamp(26px,3vw,32px)] text-ink mb-5 leading-[1.2] text-balance">
                Every programme concludes with an AI Action Plan.
              </h2>
              <p className="text-body text-mid-grey mb-8 text-pretty">
                Every programme we deliver concludes with an organisation-specific
                AI Action Plan — automation opportunities ranked by impact,
                recommended tools, and projected outcomes. Your team leaves with
                both the knowledge and the roadmap to act immediately.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                {[
                  "Automation opportunities ranked by impact",
                  "Recommended tools and stack",
                  "Projected outcomes and timelines",
                ].map((point, i) => (
                  <div key={i} className="flex-1 bg-ivory border border-light-grey rounded p-4 flex flex-col gap-3">
                    <span className="w-6 h-6 rounded-full bg-gold/10 text-gold flex items-center justify-center font-display font-bold text-[11px]">
                      {i + 1}
                    </span>
                    <span className="font-sans text-[14px] text-ink font-medium leading-tight">
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── CTA Band ── */}
      <ServiceFooter />

      <SectionInk className="text-center" aria-labelledby="ai-training-cta-heading">
        <div className="container-tbc">
          <Reveal>
            <h2 id="ai-training-cta-heading" className="font-display font-bold text-[clamp(26px,3.5vw,40px)] text-white leading-[1.2] mb-4 text-balance">
              Ready to build your team&apos;s AI capability?
            </h2>
            <p className="text-body text-white/70 mb-10 text-pretty max-w-2xl mx-auto">
              Every programme is scoped around your specific tools, team, and
              objectives. Discovery calls are complimentary.
            </p>
            <Link href="/book-consultation" className="btn-gold">
              Book a Discovery Call
            </Link>
          </Reveal>
        </div>
      </SectionInk>
    </>
  );
}
