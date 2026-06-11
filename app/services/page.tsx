import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import ServiceCard from "@/components/ServiceCard";
import SectionInk from "@/components/SectionInk";

export const metadata: Metadata = {
  title: "Our Services | AI Strategy, Web Development & More",
  description:
    "Five AI-powered practice areas: custom LLM deployment, AI capability building, web development, social media management, and Slate AI assistant. Turbo Bytes Consulting.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Our Services | AI Strategy, Web Development & More",
    description:
      "Five AI-powered practice areas: custom LLM deployment, AI capability building, web development, social media management, and Slate AI assistant. Turbo Bytes Consulting.",
    url: "https://turbobytesconsulting.com/services",
    images: [{ url: "/img/og-default.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image" as const,
    title: "Our Services | AI Strategy, Web Development & More",
    description:
      "Five AI-powered practice areas: custom LLM deployment, AI capability building, web development, social media management, and Slate AI assistant. Turbo Bytes Consulting.",
  },
};

const practices = [
  {
    number: "01",
    name: "Custom LLM & On-Premise AI",
    description: "Your organisation's intelligence layer. Trained on your knowledge.",
    timeline: "Setup 4–8 weeks · ROI in 60–90 days",
    setupTime: "4–8 wks",
    roi: "60–90 days",
    deliverables: [
      "On-premise or private cloud deployment",
      "Persistent AI knowledge base",
      "New staff fully operational in hours",
      "Live ROI dashboard",
    ],
    href: "/services/custom-llm",
    imageSrc: "/img/hero-service-llm.png",
  },
  {
    number: "02",
    name: "AI Capability Building",
    description: "Organisations that understand AI use it better. We build that understanding.",
    timeline: "Bookable with 5 business days notice",
    setupTime: "2–4 wks",
    roi: "Immediate",
    deliverables: [
      "In-person intensives and virtual cohorts",
      "Curriculum mapped to your tools and stack",
      "No-code AI workflow building",
      "AI governance and responsible deployment",
    ],
    href: "/services/ai-training",
    imageSrc: "/img/hero-service-ai-training.png",
  },
  {
    number: "03",
    name: "Website & Application Development",
    description: "Architecturally sound. Conversion-optimised. Built to perform.",
    timeline: "Sites 2–3 weeks · Apps 4–8 weeks",
    setupTime: "6–12 wks",
    roi: "90 days",
    deliverables: [
      "Custom business and e-commerce sites",
      "Web applications and internal tools",
      "API integrations and hosting architecture",
      "Post-launch support retainers",
    ],
    href: "/services/web-development",
    imageSrc: "/img/hero-service-web-development.png",
  },
  {
    number: "04",
    name: "Social Media Management",
    description: "Precision-engineered content. Platform-native strategy. AI-driven execution.",
    timeline: "Onboarding 5 days · First calendar in 10 days",
    setupTime: "2 wks",
    roi: "Ongoing",
    deliverables: [
      "Full annual content strategy and calendar",
      "AI-powered content creation across formats",
      "Active management of every platform",
      "Monthly analytics and strategy recalibration",
    ],
    href: "/services/smm",
    imageSrc: "/img/hero-service-smm.png",
  },
  {
    number: "05",
    name: "Slate AI Executive Assistant",
    description: "Beyond scheduling. Beyond email. A second intelligence for leaders.",
    timeline: "Setup 48 hours · Full calibration 2–4 weeks",
    setupTime: "1 wk",
    roi: "Immediate",
    deliverables: [
      "Intelligent calendar and email management",
      "Meeting prep, agendas, and briefings",
      "Continuous research and daily briefings",
      "Deep tool integration: Gmail, Slack, Notion, Asana",
    ],
    href: "/services/slate",
    imageSrc: "/img/hero-service-slate.png",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* ── PAGE HERO ── */}
      <section className="relative bg-ink overflow-hidden min-h-[400px] flex items-center border-b border-light-grey">
        {/* Full-bleed background image band */}
        <div className="absolute inset-0 z-0">
          <Image src="/img/hero-home.png" alt="" fill className="object-cover object-center opacity-40 mix-blend-screen" priority aria-hidden="true" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-transparent" />
        </div>

        <div className="container-tbc py-s6 relative z-10">
          <span className="eyebrow text-gold">SERVICES</span>
          <hr className="gold-rule mb-6" />
          <h1 className="font-display font-bold text-[clamp(32px,4.5vw,52px)] text-white leading-[1.1] tracking-[-0.5px] max-w-3xl mb-6 text-balance">
            Five practice areas.<br />One integrated capability.
          </h1>
          <p className="text-body text-white/70 leading-relaxed max-w-2xl text-pretty">
            Each practice is complete in its own right. Deployed in combination,
            they give clients a comprehensive AI-powered competitive
            infrastructure.
          </p>
        </div>
      </section>

      {/* ── PRACTICE CARDS ── */}
      <section className="bg-ivory py-s7">
        <div className="container-tbc">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {practices.map((p, i) => (
              <Reveal key={p.number} delay={i * 0.12} className={i < 2 ? "lg:col-span-1" : "lg:col-span-1"}>
                <div className="flex flex-col h-full bg-white rounded shadow-card border border-light-grey overflow-hidden group">
                  <ServiceCard 
                    number={p.number}
                    title={p.name}
                    description={p.description}
                    setupTime={p.setupTime}
                    roi={p.roi}
                    href={p.href}
                    imageSrc={p.imageSrc}
                    className="border-none shadow-none hover:shadow-none hover:-translate-y-0"
                  />
                  {/* Always-on Sub Panel for Deliverables */}
                  <div className="px-s4 pb-s4 pt-2 mt-auto border-t border-light-grey bg-ivory/50">
                    <h3 className="font-display font-semibold text-caption text-mid-grey uppercase tracking-[1.5px] mb-3 mt-3">
                      Key Deliverables
                    </h3>
                    <ul className="space-y-2">
                      {p.deliverables.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-caption text-ink leading-tight">
                          <span className="text-tbc-emerald-mid mt-0.5" aria-hidden="true">✓</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── INTEGRATED CAPABILITY BAND (Dark Section) ── */}
      <SectionInk>
        <div className="container-tbc text-center">
          <Reveal>
            <h2 className="font-display font-bold text-[clamp(26px,3vw,36px)] text-white leading-[1.2] mb-4 text-balance">
              True transformation requires all five.
            </h2>
            <p className="text-body text-white/70 max-w-2xl mx-auto text-pretty">
              We don&apos;t just build an LLM or run a workshop. We deploy the model, train your team to use it, automate your workflows, and manage the outputs.
            </p>
          </Reveal>
        </div>
      </SectionInk>

      {/* ── CTA BAND ── */}
      <section className="bg-royal py-s7 text-center">
        <div className="container-tbc">
          <hr className="gold-rule gold-rule--center mb-8" />
          <h2 className="font-display font-bold text-[clamp(24px,3vw,36px)] text-white leading-[1.2] mb-4 text-balance">
            Don&apos;t know where to start? Let&apos;s talk about your business.
          </h2>
          <p className="text-body text-white/80 mb-10 text-pretty max-w-2xl mx-auto">
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

