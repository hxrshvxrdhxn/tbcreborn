import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Services | AI Strategy, Web Development & More",
  description:
    "Five AI-powered practice areas: social media management, web development, custom LLM deployment, Slate AI assistant, and AI training. Turbo Bytes Consulting.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Our Services | AI Strategy, Web Development & More",
    description:
      "Five AI-powered practice areas: social media management, web development, custom LLM deployment, Slate AI assistant, and AI training. Turbo Bytes Consulting.",
    url: "https://turbobytesconsulting.com/services",
    images: [{ url: "/og-default.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image" as const,
    title: "Our Services | AI Strategy, Web Development & More",
    description:
      "Five AI-powered practice areas: social media management, web development, custom LLM deployment, Slate AI assistant, and AI training. Turbo Bytes Consulting.",
  },
};

const practices = [
  {
    number: "01",
    name: "Social Media Management",
    description:
      "Precision-engineered content. Platform-native strategy. AI-driven execution.",
    timeline: "Onboarding 5 days · First calendar in 10 days",
    deliverables: [
      "Full annual content strategy and calendar",
      "AI-powered content creation across formats",
      "Active management of every platform",
      "Monthly analytics and strategy recalibration",
    ],
    href: "/services/smm",
  },
  {
    number: "02",
    name: "Website & Application Development",
    description:
      "Architecturally sound. Conversion-optimised. Built to perform.",
    timeline: "Sites 2–3 weeks · Apps 4–8 weeks",
    deliverables: [
      "Custom business and e-commerce sites",
      "Web applications and internal tools",
      "API integrations and hosting architecture",
      "Post-launch support retainers",
    ],
    href: "/services/web-development",
  },
  {
    number: "03",
    name: "Custom LLM & On-Premise AI",
    description:
      "Your organisation's intelligence layer. Trained on your knowledge.",
    timeline: "Setup 4–8 weeks · ROI in 60–90 days",
    deliverables: [
      "On-premise or private cloud deployment",
      "Persistent AI knowledge base",
      "New staff fully operational in hours",
      "Live ROI dashboard",
    ],
    href: "/services/custom-llm",
  },
  {
    number: "04",
    name: "Slate AI Executive Assistant",
    description:
      "Beyond scheduling. Beyond email. A second intelligence for leaders.",
    timeline: "Setup 48 hours · Full calibration 2–4 weeks",
    deliverables: [
      "Intelligent calendar and email management",
      "Meeting prep, agendas, and briefings",
      "Continuous research and daily briefings",
      "Deep tool integration: Gmail, Slack, Notion, Asana",
    ],
    href: "/services/slate",
  },
  {
    number: "05",
    name: "AI Capability Building",
    description:
      "Organisations that understand AI use it better. We build that understanding.",
    timeline: "Bookable with 5 business days notice",
    deliverables: [
      "In-person intensives and virtual cohorts",
      "Curriculum mapped to your tools and stack",
      "No-code AI workflow building",
      "AI governance and responsible deployment",
    ],
    href: "/services/ai-training",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* ── PAGE HERO ── */}
      <section className="bg-ink hero-grid">
        <div className="container-tbc py-24">
          <span className="eyebrow text-gold">SERVICES</span>
          <hr className="gold-rule mb-6" />
          <h1 className="font-display font-bold text-[clamp(32px,4.5vw,52px)] text-white leading-[1.1] tracking-[-0.5px] max-w-3xl mb-6">
            Five practice areas. One integrated capability.
          </h1>
          <p className="font-sans text-[18px] text-white/70 leading-relaxed max-w-2xl">
            Each practice is complete in its own right. Deployed in combination,
            they give clients a comprehensive AI-powered competitive
            infrastructure.
          </p>
        </div>
      </section>

      {/* ── PRACTICE CARDS ── */}
      <section className="bg-ivory py-20">
        <div className="container-tbc">
          <div className="flex flex-col gap-8">
            {practices.map((p) => (
              <article
                key={p.number}
                className="bg-white rounded-[8px] border border-light-grey shadow-card hover:shadow-card-hover transition-shadow duration-200 ease-tbc p-8 md:p-10"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-8">
                  {/* Left column */}
                  <div className="md:w-2/5">
                    <span className="font-display font-bold text-[13px] text-gold tracking-[1px] mb-3 block">
                      {p.number}
                    </span>
                    <h2 className="font-display font-bold text-[24px] text-ink leading-snug mb-3">
                      {p.name}
                    </h2>
                    <p className="font-sans text-[16px] text-mid-grey leading-relaxed mb-5">
                      {p.description}
                    </p>
                    <div className="inline-flex items-center gap-2 bg-royal-light rounded px-3 py-1.5 mb-6">
                      <span className="font-display font-semibold text-[12px] text-royal tracking-[0.5px]">
                        {p.timeline}
                      </span>
                    </div>
                    <div>
                      <Link
                        href={p.href}
                        className="font-display font-semibold text-[14px] text-royal hover:text-royal-mid transition-colors duration-150"
                      >
                        Open Practice →
                      </Link>
                    </div>
                  </div>

                  {/* Right column */}
                  <div className="md:w-3/5 md:border-l md:border-light-grey md:pl-10">
                    <h3 className="font-display font-semibold text-[13px] text-mid-grey uppercase tracking-[1.5px] mb-5">
                      Key Deliverables
                    </h3>
                    <ul className="space-y-3">
                      {p.deliverables.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-3 font-sans text-[15px] text-ink leading-relaxed"
                        >
                          <span
                            className="mt-[7px] flex-shrink-0 w-1.5 h-1.5 rounded-full bg-gold"
                            aria-hidden="true"
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BAND ── */}
      <section className="bg-royal py-16 text-center">
        <div className="container-tbc">
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
        </div>
      </section>
    </>
  );
}
