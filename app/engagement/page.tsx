import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import SectionInk from "@/components/SectionInk";

export const metadata: Metadata = {
  title: "Engagement Model & Pricing | Turbo Bytes Consulting",
  description:
    "How we work and how to begin. Consulting engagement tiers, project pricing, and ongoing advisory. TBC.",
  alternates: {
    canonical: "/engagement",
  },
  openGraph: {
    title: "Engagement Model & Pricing | Turbo Bytes Consulting",
    description:
      "How we work and how to begin. Consulting engagement tiers, project pricing, and ongoing advisory. TBC.",
    url: "https://turbobytesconsulting.com/engagement",
    images: [{ url: "/og-default.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image" as const,
    title: "Engagement Model & Pricing | Turbo Bytes Consulting",
    description:
      "How we work and how to begin. Consulting engagement tiers, project pricing, and ongoing advisory. TBC.",
  },
};

interface PricingTier {
  tier: string;
  price: string;
  duration: string;
  body: string;
  cta: string;
  featured: boolean;
}

const pricingTiers: PricingTier[] = [
  {
    tier: "Business Diagnostic",
    price: "₹50,000 +",
    duration: "2 weeks",
    body: "Comprehensive audit of operations, structure, and execution gaps. Diagnostic report with prioritised findings and a 30–60–90 day action blueprint.",
    cta: "Request a Diagnostic",
    featured: false,
  },
  {
    tier: "Restructuring & Redesign",
    price: "₹1,50,000 +",
    duration: "4–8 weeks",
    body: "Full Diagnostic plus organisational redesign, decision rights framework, role mandates, leadership alignment, and structured implementation roadmap.",
    cta: "Request a Proposal",
    featured: true,
  },
  {
    tier: "Ongoing Advisory",
    price: "₹75,000 /month",
    duration: "Ongoing",
    body: "Monthly strategic and execution partnership. Weekly check-ins, decision support, and senior accountability across key initiatives.",
    cta: "Start a Conversation",
    featured: false,
  },
];

const processSteps = [
  {
    step: "01",
    title: "Discovery Call",
    description:
      "A 30–45 minute conversation to understand your objectives, constraints, and the scope of the engagement.",
  },
  {
    step: "02",
    title: "Proposal Delivery",
    description:
      "A detailed written proposal — scope, methodology, deliverables, timeline, and investment — delivered within 48 hours.",
  },
  {
    step: "03",
    title: "Engagement Start",
    description:
      "Onboarding, stakeholder alignment, and kickoff. We move fast. Work typically begins within 5 business days.",
  },
  {
    step: "04",
    title: "Execution",
    description:
      "Structured, milestone-driven delivery with weekly progress communications and a named senior point of contact.",
  },
  {
    step: "05",
    title: "Outcome Review",
    description:
      "A formal close-out review documenting outcomes against objectives, lessons, and recommended next steps.",
  },
];

export default function EngagementPage() {
  return (
    <>
      {/* ── BREADCRUMB ── */}
      <nav aria-label="Breadcrumb" className="bg-ivory border-b border-light-grey">
        <div className="container-tbc py-3">
          <ol className="flex items-center gap-2 font-sans text-[13px] text-mid-grey">
            <li>
              <Link href="/" className="hover:text-ink transition-colors duration-150">
                Home
              </Link>
            </li>
            <li aria-hidden="true" className="text-light-grey select-none">
              /
            </li>
            <li className="text-ink font-semibold">
              Engagement Model
            </li>
          </ol>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="bg-ink py-s7 relative overflow-hidden min-h-[350px] flex items-center border-b border-light-grey">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-ink via-ink to-royal/20" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-gold/10 via-transparent to-transparent" />
        </div>

        <div className="container-tbc relative z-10">
          <Reveal>
            <span className="eyebrow text-gold">ENGAGEMENT</span>
            <hr className="gold-rule mb-6" />
            <h1 className="font-display font-bold text-white text-[clamp(32px,4.5vw,48px)] leading-[1.15] tracking-[-0.5px] max-w-3xl mb-5">
              Structured around outcomes, not hours.
            </h1>
            <p className="font-sans text-[17px] text-white/70 leading-relaxed max-w-2xl">
              We define what success looks like at the outset of every
              engagement, and we structure our work around achieving it.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── CONSULTING TIERS ── */}
      <section className="bg-ivory py-s7 border-b border-light-grey" aria-labelledby="consulting-tiers-heading">
        <div className="container-tbc">
          <div className="text-center max-w-2xl mx-auto mb-s6">
            <Reveal>
              <span className="eyebrow">CONSULTING TIERS</span>
              <h2 id="consulting-tiers-heading" className="font-display font-bold text-[clamp(28px,3vw,36px)] text-ink leading-[1.2] mb-6">
                Three ways to engage.
              </h2>
              <hr className="gold-rule gold-rule--center" />
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
            {pricingTiers.map((tier, i) => (
              <Reveal key={tier.tier} delay={i * 30}>
                <article
                  className={`rounded-[8px] flex flex-col h-full ${
                    tier.featured
                      ? "bg-ink text-white shadow-card-hover relative overflow-hidden"
                      : "bg-white border border-light-grey text-ink shadow-card"
                  }`}
                >
                  {tier.featured && (
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-gold/10 via-transparent to-transparent pointer-events-none" />
                  )}

                  <div className={`p-8 flex flex-col gap-6 flex-1 relative z-10 ${tier.featured ? "border border-royal-light/20 rounded-[8px]" : ""}`}>
                    {/* Tier name */}
                    <div>
                      <p className="font-display font-bold text-[12px] tracking-[1.5px] uppercase mb-4 text-gold">
                        {tier.tier}
                      </p>
                      <hr className={tier.featured ? "gold-rule" : "w-12 border-light-grey mb-6"} />
                    </div>

                    {/* Price + duration */}
                    <div>
                      <p
                        className={`font-display font-bold leading-none mb-2 ${
                          tier.featured ? "text-white" : "text-ink"
                        }`}
                        style={{ fontSize: "36px" }}
                      >
                        {tier.price}
                      </p>
                      <p
                        className={`font-sans text-[14px] ${
                          tier.featured ? "text-white/60" : "text-mid-grey"
                        }`}
                      >
                        {tier.duration}
                      </p>
                    </div>

                    {/* Body */}
                    <p
                      className={`font-sans text-[15px] leading-relaxed flex-1 ${
                        tier.featured ? "text-white/80" : "text-mid-grey"
                      }`}
                    >
                      {tier.body}
                    </p>

                    {/* CTA */}
                    <div className="mt-6">
                      <Link
                        href="/book-consultation"
                        className={tier.featured ? "btn-gold w-full justify-center" : "btn-primary w-full justify-center"}
                      >
                        {tier.cta}
                      </Link>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          {/* Disclaimer */}
          <Reveal delay={150}>
            <p className="font-sans text-[14px] text-mid-grey text-center leading-relaxed max-w-3xl mx-auto mt-12 bg-white/50 px-6 py-4 rounded-[8px] border border-light-grey">
              <strong>Note:</strong> All other service engagements (Social Media Management, Web
              Development, Custom LLM, Slate, AI Training) are priced on a
              project and retainer basis, scoped after an initial consultation. A
              detailed proposal is delivered within 48 hours of the discovery
              call.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── HOW WE WORK ── */}
      <section className="bg-white py-s7 border-b border-light-grey" aria-labelledby="process-heading">
        <div className="container-tbc">
          <Reveal>
            <span className="eyebrow">HOW WE WORK</span>
            <h2 id="process-heading" className="font-display font-bold text-[clamp(28px,3vw,36px)] text-ink leading-[1.2] mb-6">
              From first conversation to final outcome.
            </h2>
            <hr className="gold-rule mb-12" />
          </Reveal>

          <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {processSteps.map((step, index) => (
              <Reveal key={step.step} delay={index * 30}>
                <li className="flex flex-col gap-5">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-ivory border border-light-grey flex items-center justify-center shadow-sm">
                      <span className="font-display font-bold text-gold text-[13px] tracking-widest" aria-hidden="true">
                        {step.step}
                      </span>
                    </div>
                    {index < processSteps.length - 1 && (
                      <span className="hidden lg:block flex-1 h-px bg-light-grey" aria-hidden="true" />
                    )}
                  </div>
                  <h3 className="font-display font-bold text-[18px] text-ink">
                    {step.title}
                  </h3>
                  <p className="font-sans text-[15px] text-mid-grey leading-relaxed text-pretty">
                    {step.description}
                  </p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ── CTA BAND ── */}
      <SectionInk className="text-center" aria-labelledby="engagement-cta-heading">
        <div className="container-tbc">
          <Reveal>
            <h2 id="engagement-cta-heading" className="font-display font-bold text-[clamp(26px,3.5vw,40px)] text-white leading-[1.2] mb-6 text-balance">
              Begin with a discovery call.
            </h2>
            <p className="text-body text-white/70 max-w-lg mx-auto mb-10 text-pretty">
              30 minutes. No obligation. We will tell you honestly whether and
              how we can help.
            </p>
            <Link href="/book-consultation" className="btn-gold px-10 py-4.5 text-[16px]">
              Book a Discovery Call →
            </Link>
          </Reveal>
        </div>
      </SectionInk>
    </>
  );
}
