import type { Metadata } from "next";
import Link from "next/link";

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
    images: [{ url: "/og-default.png", width: 1200, height: 630 }],
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
      <nav aria-label="Breadcrumb" className="bg-ink border-b border-white/10">
        <div className="container-tbc py-3">
          <ol className="flex items-center gap-2 text-xs font-sans text-white/50">
            <li>
              <Link href="/" className="hover:text-white/80 transition-colors">
                Home
              </Link>
            </li>
            <li aria-hidden="true" className="text-white/30">/</li>
            <li>
              <Link href="/services" className="hover:text-white/80 transition-colors">
                Services
              </Link>
            </li>
            <li aria-hidden="true" className="text-white/30">/</li>
            <li className="text-white/80" aria-current="page">
              AI Capability Building
            </li>
          </ol>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section className="bg-ink text-white py-24" aria-labelledby="ai-training-hero-heading">
        <div className="container-tbc">
          <p className="font-display font-bold text-gold text-sm tracking-widest uppercase mb-4">
            Practice 05
          </p>
          <h1
            id="ai-training-hero-heading"
            className="font-display font-bold text-h1 text-white mb-6 text-balance"
            style={{ maxWidth: "760px" }}
          >
            AI Capability Building &amp; Automation
          </h1>
          <p
            className="font-sans text-body-lg text-white/70 mb-8"
            style={{ maxWidth: "600px" }}
          >
            Organisations that understand AI use it better. We build that
            understanding.
          </p>
          <div className="inline-flex items-center gap-3 border border-gold/40 rounded px-5 py-3">
            <span className="block w-2 h-2 rounded-full bg-gold flex-shrink-0" aria-hidden="true" />
            <span className="font-display font-semibold text-gold text-sm tracking-wide">
              Sessions bookable with 5 business days notice
            </span>
          </div>
        </div>
      </section>

      {/* ── Curriculum ── */}
      <section className="bg-ivory py-16" aria-labelledby="curriculum-heading">
        <div className="container-tbc">
          <span className="eyebrow">What We Teach</span>
          <h2
            id="curriculum-heading"
            className="section-heading font-display font-bold mb-12"
          >
            A curriculum built around your tools, your team, and your goals.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {curriculumItems.map((item) => (
              <article
                key={item.number}
                className="bg-white border border-light-grey rounded-lg p-8 shadow-card hover:shadow-card-hover transition-shadow duration-300"
              >
                <span
                  className="font-display font-bold text-gold/60 text-sm tracking-widest mb-3 block"
                  aria-hidden="true"
                >
                  {item.number}
                </span>
                <hr className="gold-rule mb-5" />
                <h3 className="font-display font-bold text-h3 text-ink mb-3">
                  {item.title}
                </h3>
                <p className="font-sans text-body text-mid-grey leading-relaxed">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Delivery Formats ── */}
      <section className="bg-white py-12" aria-labelledby="delivery-formats-heading">
        <div className="container-tbc">
          <span className="eyebrow">Delivery Formats</span>
          <h2
            id="delivery-formats-heading"
            className="section-heading font-display font-bold mb-10"
          >
            Training delivered the way your organisation works.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {deliveryFormats.map((format) => (
              <div key={format.title} className="flex flex-col gap-4">
                <div className="text-royal" aria-hidden="true">
                  {format.icon}
                </div>
                <h3 className="font-display font-semibold text-ink" style={{ fontSize: "17px" }}>
                  {format.title}
                </h3>
                <p className="font-sans text-body text-mid-grey leading-relaxed">
                  {format.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── AI Action Plan ── */}
      <section
        className="py-12"
        style={{ backgroundColor: "#FFF8E1" }}
        aria-labelledby="action-plan-heading"
      >
        <div className="container-tbc">
          <div
            className="bg-white border border-gold/30 rounded-lg p-10 shadow-card"
            style={{ maxWidth: "860px" }}
          >
            <span className="eyebrow">Programme Deliverable</span>
            <h2
              id="action-plan-heading"
              className="font-display font-bold text-h2 text-ink mb-5"
            >
              Every programme concludes with an AI Action Plan.
            </h2>
            <p className="font-sans text-body-lg text-ink leading-relaxed">
              Every programme we deliver concludes with an organisation-specific
              AI Action Plan — automation opportunities ranked by impact,
              recommended tools, and projected outcomes. Your team leaves with
              both the knowledge and the roadmap to act immediately.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              {[
                "Automation opportunities ranked by impact",
                "Recommended tools and stack",
                "Projected outcomes and timelines",
              ].map((point) => (
                <span
                  key={point}
                  className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 text-ink font-sans text-sm font-medium rounded px-4 py-2"
                >
                  <span className="block w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" aria-hidden="true" />
                  {point}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA Band ── */}
      <section className="bg-royal py-16" aria-labelledby="ai-training-cta-heading">
        <div className="container-tbc text-center">
          <h2
            id="ai-training-cta-heading"
            className="font-display font-bold text-h2 text-white mb-4 text-balance"
          >
            Ready to build your team&apos;s AI capability?
          </h2>
          <p
            className="font-sans text-body text-white/70 mb-8"
            style={{ maxWidth: "520px", margin: "0 auto 2rem" }}
          >
            Every programme is scoped around your specific tools, team, and
            objectives. Discovery calls are complimentary.
          </p>
          <Link href="/book-consultation" className="btn-gold">
            Book a Discovery Call
          </Link>
        </div>
      </section>
    </>
  );
}
