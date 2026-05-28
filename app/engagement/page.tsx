import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Engagement Model & Pricing",
  description:
    "TBC engagements are structured around client outcomes, not hours billed. Three consulting tiers.",
  alternates: {
    canonical: "/engagement",
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
      {/* ── Hero ── */}
      <section className="bg-ink py-24" aria-labelledby="engagement-hero-heading">
        <div className="container-tbc">
          <span className="eyebrow">Engagement</span>
          <h1
            id="engagement-hero-heading"
            className="font-display font-bold text-h1 text-white mb-6 text-balance"
            style={{ maxWidth: "700px" }}
          >
            Structured around outcomes, not hours.
          </h1>
          <p
            className="font-sans text-body-lg text-white/70"
            style={{ maxWidth: "620px" }}
          >
            We define what success looks like at the outset of every
            engagement, and we structure our work around achieving it.
          </p>
        </div>
      </section>

      {/* ── Consulting Tiers ── */}
      <section className="bg-ivory py-20" aria-labelledby="consulting-tiers-heading">
        <div className="container-tbc">
          <span className="eyebrow">Consulting Tiers</span>
          <h2
            id="consulting-tiers-heading"
            className="section-heading font-display font-bold mb-12"
          >
            Three ways to engage.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {pricingTiers.map((tier) => (
              <article
                key={tier.tier}
                className={`rounded-lg flex flex-col ${
                  tier.featured
                    ? "bg-royal text-white shadow-card-hover"
                    : "bg-white border border-light-grey text-ink shadow-card"
                }`}
              >
                <div className="p-8 flex flex-col gap-5 flex-1">
                  {/* Tier name */}
                  <div>
                    <p
                      className={`font-display font-bold text-xs tracking-widest uppercase mb-3 ${
                        tier.featured ? "text-gold" : "text-gold"
                      }`}
                    >
                      {tier.tier}
                    </p>
                    <hr
                      className="gold-rule"
                      style={{ marginBottom: "20px" }}
                    />
                  </div>

                  {/* Price + duration */}
                  <div>
                    <p
                      className={`font-display font-bold leading-none mb-1 ${
                        tier.featured ? "text-white" : "text-ink"
                      }`}
                      style={{ fontSize: "36px" }}
                    >
                      {tier.price}
                    </p>
                    <p
                      className={`font-sans text-sm ${
                        tier.featured ? "text-white/60" : "text-mid-grey"
                      }`}
                    >
                      {tier.duration}
                    </p>
                  </div>

                  {/* Body */}
                  <p
                    className={`font-sans text-body leading-relaxed flex-1 ${
                      tier.featured ? "text-white/80" : "text-mid-grey"
                    }`}
                  >
                    {tier.body}
                  </p>

                  {/* CTA */}
                  <div className="mt-4">
                    <Link
                      href="/book-consultation"
                      className={tier.featured ? "btn-gold w-full justify-center" : "btn-primary w-full justify-center"}
                    >
                      {tier.cta}
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Disclaimer */}
          <p className="font-sans text-caption text-mid-grey text-center mt-10 leading-relaxed" style={{ maxWidth: "760px", margin: "40px auto 0" }}>
            All other service engagements (Social Media Management, Web
            Development, Custom LLM, Slate, AI Training) are priced on a
            project and retainer basis, scoped after an initial consultation. A
            detailed proposal is delivered within 48 hours of the discovery
            call.
          </p>
        </div>
      </section>

      {/* ── How We Work ── */}
      <section className="bg-white py-16" aria-labelledby="process-heading">
        <div className="container-tbc">
          <span className="eyebrow">How We Work</span>
          <h2
            id="process-heading"
            className="section-heading font-display font-bold mb-12"
          >
            From first conversation to final outcome.
          </h2>
          <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {processSteps.map((step, index) => (
              <li key={step.step} className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <span
                    className="font-display font-bold text-gold text-sm tracking-widest"
                    aria-hidden="true"
                  >
                    {step.step}
                  </span>
                  {index < processSteps.length - 1 && (
                    <span
                      className="hidden lg:block flex-1 h-px bg-light-grey"
                      aria-hidden="true"
                    />
                  )}
                </div>
                <hr className="gold-rule" />
                <h3 className="font-display font-semibold text-ink" style={{ fontSize: "17px" }}>
                  {step.title}
                </h3>
                <p className="font-sans text-body text-mid-grey leading-relaxed">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── CTA Band ── */}
      <section className="bg-royal py-16" aria-labelledby="engagement-cta-heading">
        <div className="container-tbc text-center">
          <h2
            id="engagement-cta-heading"
            className="font-display font-bold text-h2 text-white mb-4 text-balance"
          >
            Begin with a discovery call.
          </h2>
          <p
            className="font-sans text-body text-white/70 mb-8"
            style={{ maxWidth: "480px", margin: "0 auto 2rem" }}
          >
            30 minutes. No obligation. We will tell you honestly whether and
            how we can help.
          </p>
          <Link href="/book-consultation" className="btn-gold">
            Book a Discovery Call
          </Link>
        </div>
      </section>
    </>
  );
}
