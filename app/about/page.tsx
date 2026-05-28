import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Turbo Bytes Consulting",
  description:
    "TBC is an AI-native management and technology consultancy. We sit at the intersection of strategic consulting and AI implementation.",
  alternates: {
    canonical: "/about",
  },
};

const values = [
  {
    title: "Precision",
    description:
      "We do not guess. Every recommendation is grounded in analysis. Every system we build is designed to produce measurable outcomes.",
  },
  {
    title: "Intelligence",
    description:
      "Intelligence is not just what we sell — it is how we operate. AI is embedded in every process, every workflow, every client engagement.",
  },
  {
    title: "Completeness",
    description:
      "We do not hand over a strategy deck and walk away. We design, build, deploy, and measure.",
  },
  {
    title: "Partnership",
    description:
      "We treat every client relationship as a long-term partnership. We succeed when our clients succeed.",
  },
  {
    title: "Rigour",
    description:
      "Our standards are non-negotiable. We hold our work — and our clients — to a high bar.",
  },
];

const companyFacts = [
  {
    label: "Category",
    value: "AI-Native Management & Technology Consultancy",
  },
  {
    label: "Registration",
    value: "MSME Registered — India (NIC Code: 62020)",
  },
  {
    label: "Established",
    value: "2022 (Business commencement: 04/03/2022)",
  },
  {
    label: "Headquarters",
    value:
      "Kasana Tower, Alpha-I Commercial Belt, Greater Noida, Uttar Pradesh, India",
  },
  {
    label: "Website",
    value: "turbobytesconsulting.com",
    href: "https://turbobytesconsulting.com",
  },
  {
    label: "Email",
    value: "info@turbobytesconsulting.com",
    href: "mailto:info@turbobytesconsulting.com",
  },
  {
    label: "Phone",
    value: "+91 93547 84377",
    href: "tel:+919354784377",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section
        className="bg-ink hero-grid py-24"
        aria-labelledby="about-hero-heading"
      >
        <div className="container-tbc">
          <span className="eyebrow">About TBC</span>
          <h1
            id="about-hero-heading"
            className="font-display font-bold text-white text-balance"
            style={{
              fontSize: "clamp(36px, 5vw, 60px)",
              lineHeight: "1.05",
              letterSpacing: "-1.2px",
              maxWidth: "860px",
            }}
          >
            We help ambitious organisations use AI{" "}
            <span className="text-gold">
              as a structural competitive advantage
            </span>{" "}
            — not as an experiment.
          </h1>
        </div>
      </section>

      {/* ── Who We Are ── */}
      <section className="bg-ivory py-20" aria-labelledby="who-we-are-heading">
        <div className="container-tbc">
          <span className="eyebrow">Who We Are</span>
          <div style={{ maxWidth: "760px" }}>
            <p className="font-sans text-ink leading-relaxed mb-6" style={{ fontSize: "19px", lineHeight: "1.65" }}>
              Turbo Bytes Consulting (TBC) is an AI-native management and
              technology consultancy. We work with leadership teams and
              organisations that are serious about using artificial intelligence
              not as an experiment, but as a structural competitive advantage.
            </p>
            <p className="font-sans text-ink leading-relaxed" style={{ fontSize: "19px", lineHeight: "1.65" }}>
              We operate across two disciplines simultaneously: strategic
              management consulting and deep AI implementation. This
              combination — rare in the market — means our clients receive not
              just advice, but execution. Not just frameworks, but working
              systems.
            </p>
          </div>
        </div>
      </section>

      {/* ── Our Position ── */}
      <section className="bg-white py-16" aria-labelledby="our-position-heading">
        <div className="container-tbc">
          <span className="eyebrow">Our Position</span>
          <h2
            id="our-position-heading"
            className="section-heading font-display font-bold mb-6"
          >
            The intelligence and discipline of a top-tier consultancy, combined
            with the speed of a world-class AI firm.
          </h2>
          <p
            className="font-sans text-body text-mid-grey leading-relaxed"
            style={{ maxWidth: "760px" }}
          >
            TBC occupies a deliberate position: the intelligence and discipline
            of a top-tier management consultancy, combined with the speed,
            technology depth, and implementation capability of a world-class AI
            firm. We are not a digital agency. We are not a software house. We
            are a strategic partner.
          </p>
        </div>
      </section>

      {/* ── Values ── */}
      <section
        className="bg-ink text-white py-20"
        aria-labelledby="values-heading"
      >
        <div className="container-tbc">
          <span className="eyebrow">Core Values</span>
          <h2
            id="values-heading"
            className="font-display font-bold text-h2 text-white mb-12"
          >
            Five values. Built into every engagement.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
            {values.map((value) => (
              <article key={value.title} className="flex flex-col gap-5">
                <hr className="gold-rule" />
                <h3 className="font-display font-bold text-h3 text-white">
                  {value.title}
                </h3>
                <p className="font-sans text-body text-white/70 leading-relaxed">
                  {value.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Company Facts ── */}
      <section className="bg-ivory py-16" aria-labelledby="company-facts-heading">
        <div className="container-tbc">
          <span className="eyebrow">Company</span>
          <h2
            id="company-facts-heading"
            className="section-heading font-display font-bold mb-10"
          >
            The organisation behind the work.
          </h2>
          <div
            className="bg-white border border-light-grey rounded-lg shadow-card overflow-hidden"
            style={{ maxWidth: "760px" }}
          >
            <dl>
              {companyFacts.map((fact, index) => (
                <div
                  key={fact.label}
                  className={`grid grid-cols-1 sm:grid-cols-[200px_1fr] gap-2 sm:gap-8 px-8 py-5 ${
                    index < companyFacts.length - 1
                      ? "border-b border-light-grey"
                      : ""
                  }`}
                >
                  <dt className="font-display font-semibold text-ink text-sm tracking-wide">
                    {fact.label}
                  </dt>
                  <dd className="font-sans text-body text-mid-grey">
                    {fact.href ? (
                      <a
                        href={fact.href}
                        className="text-royal hover:text-royal-mid transition-colors underline underline-offset-2"
                        {...(fact.href.startsWith("http")
                          ? { target: "_blank", rel: "noopener noreferrer" }
                          : {})}
                      >
                        {fact.value}
                      </a>
                    ) : (
                      fact.value
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* ── CTA Band ── */}
      <section className="bg-royal py-16" aria-labelledby="about-cta-heading">
        <div className="container-tbc text-center">
          <h2
            id="about-cta-heading"
            className="font-display font-bold text-h2 text-white mb-4 text-balance"
          >
            Work with us.
          </h2>
          <p
            className="font-sans text-body text-white/70 mb-8"
            style={{ maxWidth: "480px", margin: "0 auto 2rem" }}
          >
            Every engagement begins with a conversation about your objectives.
            No commitment required.
          </p>
          <Link href="/book-consultation" className="btn-gold">
            Book a Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
