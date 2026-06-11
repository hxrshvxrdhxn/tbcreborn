import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import SectionInk from "@/components/SectionInk";

export const metadata: Metadata = {
  title: "About Turbo Bytes Consulting | AI-Native Consultancy",
  description:
    "Turbo Bytes Consulting is an AI-native management and technology consultancy based in Greater Noida, India. Intelligence. Precision. Growth.",
  alternates: {
    canonical: "/about",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: "About Turbo Bytes Consulting | AI-Native Consultancy",
    description:
      "Turbo Bytes Consulting is an AI-native management and technology consultancy based in Greater Noida, India. Intelligence. Precision. Growth.",
    url: "https://turbobytesconsulting.com/about",
    images: [{ url: "/img/og-default.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image" as const,
    title: "About Turbo Bytes Consulting | AI-Native Consultancy",
    description:
      "Turbo Bytes Consulting is an AI-native management and technology consultancy based in Greater Noida, India. Intelligence. Precision. Growth.",
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
      {/* ── PAGE HERO ── */}
      <section className="relative bg-ink overflow-hidden min-h-[400px] flex items-center border-b border-light-grey">
        {/* Full-bleed background abstract layer */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-ink via-ink to-royal/20" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-gold/10 via-transparent to-transparent" />
        </div>

        <div className="container-tbc py-s6 relative z-10">
          <Reveal>
            <span className="eyebrow text-gold">ABOUT TBC</span>
            <hr className="gold-rule mb-6" />
            <h1 className="font-display font-bold text-[clamp(32px,4.5vw,52px)] text-white leading-[1.1] tracking-[-0.5px] max-w-4xl mb-6 text-balance">
              We help ambitious organisations use AI{" "}
              <span className="text-gold">
                as a structural competitive advantage
              </span>{" "}
              — not as an experiment.
            </h1>
          </Reveal>
        </div>
      </section>

      {/* ── WHO WE ARE ── */}
      <section className="bg-ivory py-s7 border-b border-light-grey" aria-labelledby="who-we-are-heading">
        <div className="container-tbc">
          <Reveal>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              <div className="lg:col-span-4">
                <span className="eyebrow">WHO WE ARE</span>
                <h2 id="who-we-are-heading" className="font-display font-bold text-[clamp(26px,3vw,34px)] text-ink leading-[1.2] mb-6">
                  The Organisation
                </h2>
                <hr className="gold-rule" />
              </div>
              <div className="lg:col-span-8 space-y-6">
                <p className="text-body text-mid-grey leading-relaxed text-pretty">
                  Turbo Bytes Consulting (TBC) is an AI-native management and
                  technology consultancy. We work with leadership teams and
                  organisations that are serious about using artificial intelligence
                  not as an experiment, but as a structural competitive advantage.
                </p>
                <p className="text-body text-mid-grey leading-relaxed text-pretty">
                  We operate across two disciplines simultaneously: strategic
                  management consulting and deep AI implementation. This
                  combination — rare in the market — means our clients receive not
                  just advice, but execution. Not just frameworks, but working
                  systems.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── OUR POSITION ── */}
      <section className="bg-white py-s7 border-b border-light-grey" aria-labelledby="our-position-heading">
        <div className="container-tbc">
          <Reveal>
            <div className="max-w-4xl mx-auto text-center">
              <span className="eyebrow">OUR POSITION</span>
              <h2 id="our-position-heading" className="font-display font-bold text-[clamp(28px,3vw,36px)] text-ink leading-[1.2] mb-6">
                The intelligence and discipline of a top-tier consultancy, combined
                with the speed of a world-class AI firm.
              </h2>
              <hr className="gold-rule gold-rule--center mb-8" />
              <p className="text-body text-mid-grey leading-relaxed text-pretty max-w-3xl mx-auto">
                TBC occupies a deliberate position: the intelligence and discipline
                of a top-tier management consultancy, combined with the speed,
                technology depth, and implementation capability of a world-class AI
                firm. We are not a digital agency. We are not a software house. We
                are a strategic partner.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section className="bg-ink py-s7 border-b border-light-grey" aria-labelledby="values-heading">
        <div className="container-tbc">
          <div className="text-center max-w-2xl mx-auto mb-s6">
            <Reveal>
              <span className="eyebrow text-gold">CORE VALUES</span>
              <h2 id="values-heading" className="font-display font-bold text-[clamp(28px,3vw,36px)] text-white leading-[1.2] mb-6">
                Five values. Built into every engagement.
              </h2>
              <hr className="gold-rule gold-rule--center" />
            </Reveal>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
            {values.map((value, i) => (
              <Reveal key={value.title} delay={i * 30}>
                <article className="flex flex-col gap-4">
                  <div className="w-8 h-1 bg-gold mb-2"></div>
                  <h3 className="font-display font-bold text-[20px] text-white">
                    {value.title}
                  </h3>
                  <p className="font-sans text-[15px] text-white/70 leading-relaxed text-pretty">
                    {value.description}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMPANY FACTS ── */}
      <section className="bg-ivory py-s7 border-b border-light-grey" aria-labelledby="company-facts-heading">
        <div className="container-tbc">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-5">
              <Reveal>
                <span className="eyebrow">COMPANY</span>
                <h2 id="company-facts-heading" className="font-display font-bold text-[clamp(26px,3vw,34px)] text-ink leading-[1.2] mb-6">
                  The organisation behind the work.
                </h2>
                <hr className="gold-rule mb-8" />
              </Reveal>
            </div>
            <div className="lg:col-span-7">
              <Reveal>
                <div className="bg-white border border-light-grey rounded shadow-card overflow-hidden">
                  <dl>
                    {companyFacts.map((fact, index) => (
                      <div
                        key={fact.label}
                        className={`grid grid-cols-1 sm:grid-cols-[200px_1fr] gap-2 sm:gap-6 px-6 py-5 ${
                          index < companyFacts.length - 1
                            ? "border-b border-light-grey"
                            : ""
                        }`}
                      >
                        <dt className="font-display font-bold text-[14px] text-ink tracking-wide">
                          {fact.label}
                        </dt>
                        <dd className="font-sans text-[15px] text-mid-grey">
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
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA BAND ── */}
      <SectionInk className="text-center" aria-labelledby="about-cta-heading">
        <div className="container-tbc">
          <Reveal>
            <h2 id="about-cta-heading" className="font-display font-bold text-[clamp(26px,3.5vw,40px)] text-white leading-[1.2] mb-6 text-balance">
              Work with us.
            </h2>
            <p className="text-body text-white/70 max-w-lg mx-auto mb-10 text-pretty">
              Every engagement begins with a conversation about your objectives.
              No commitment required.
            </p>
            <Link href="/book-consultation" className="btn-gold px-10 py-4.5 text-[16px]">
              Book a Consultation →
            </Link>
          </Reveal>
        </div>
      </SectionInk>
    </>
  );
}
