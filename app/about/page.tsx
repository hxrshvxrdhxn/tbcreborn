import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import SectionInk from "@/components/SectionInk";

export const metadata: Metadata = {
  title: { absolute: "About Turbo Bytes Consulting | Process-First AI & Software" },
  description:
    "Turbo Bytes Consulting sits with your MD and team, finds the process that costs you most, and turns it into software we build, run and maintain. Delhi NCR.",
  alternates: {
    canonical: "/about",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: { absolute: "About Turbo Bytes Consulting | Process-First AI & Software" },
    description:
      "Turbo Bytes Consulting sits with your MD and team, finds the process that costs you most, and turns it into software we build, run and maintain. Delhi NCR.",
    url: "https://turbobytesconsulting.com/about",
    images: [{ url: "/img/og-default.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image" as const,
    title: { absolute: "About Turbo Bytes Consulting | Process-First AI & Software" },
    description:
      "Turbo Bytes Consulting sits with your MD and team, finds the process that costs you most, and turns it into software we build, run and maintain. Delhi NCR.",
  },
};

const values = [
  {
    title: "Process first",
    description:
      "We learn how the work is actually done before we write a line of code. Software built on a misunderstood process just makes the mistake faster.",
  },
  {
    title: "Useful AI",
    description:
      "LLMs and neural networks go in where they earn their place. Where a simple rule or a clean form does the job better, we use that instead.",
  },
  {
    title: "End to end",
    description:
      "We design, build, deploy and support. AMC and maintenance stay with us, so there is one team to call when something needs to change.",
  },
  {
    title: "Business value",
    description:
      "We measure the work by hours saved, errors removed and decisions made faster, not by features shipped.",
  },
  {
    title: "Plain dealing",
    description:
      "Clear scope, clear timelines, and a written proposal before any work begins. If we are not the right fit, we will say so.",
  },
];

const companyFacts = [
  {
    label: "Category",
    value: "Process automation, AI and software consultancy",
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
      <section className="relative bg-forest overflow-hidden min-h-[400px] flex items-center border-b border-light-grey">
        {/* Full-bleed background abstract layer */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-forest via-forest to-royal/20" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-gold/10 via-transparent to-transparent" />
        </div>

        <div className="container-tbc py-s6 relative z-10">
          <Reveal>
            <hr className="gold-rule mb-6" />
            <h1 className="font-display font-bold text-[clamp(32px,4.5vw,52px)] text-white leading-[1.1] tracking-[-0.5px] max-w-4xl mb-6 text-balance">
              We turn the process that slows your business down{" "}
              <span className="text-gold">into software that runs it</span>.
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
                <h2 id="who-we-are-heading" className="font-display font-bold text-[clamp(26px,3vw,34px)] text-ink leading-[1.2] mb-6">
                  The Organisation
                </h2>
                <hr className="gold-rule" />
              </div>
              <div className="lg:col-span-8 space-y-6">
                <p className="text-body text-mid-grey leading-relaxed text-pretty">
                  Turbo Bytes Consulting (TBC) starts with a conversation with your
                  MD or founder, to find the one process that costs the business the
                  most time, money or sleep. Then we sit with the team who run it
                  every day and learn how it really works, exceptions included.
                </p>
                <p className="text-body text-mid-grey leading-relaxed text-pretty">
                  From there, our team turns that process into software, using LLMs
                  and neural networks where they genuinely help. We deploy it, train
                  your people, and keep looking after it through AMC and
                  maintenance. Most projects start at about what one person costs
                  you in a year.
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
              <h2 id="our-position-heading" className="font-display font-bold text-[clamp(28px,3vw,36px)] text-ink leading-[1.2] mb-6">
                Consulting that ends in working software, not a slide deck.
              </h2>
              <hr className="gold-rule gold-rule--center mb-8" />
              <p className="text-body text-mid-grey leading-relaxed text-pretty max-w-3xl mx-auto">
                A consultancy will tell you what to fix. A software house will build
                what you specify. We do both: we find the problem with you, build
                the fix, and stay accountable for it after go-live. One team, from
                the first conversation to the hundredth support call.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section className="bg-forest py-s7 border-b border-light-grey" aria-labelledby="values-heading">
        <div className="container-tbc">
          <div className="text-center max-w-2xl mx-auto mb-s6">
            <Reveal>
              <h2 id="values-heading" className="font-display font-bold text-[clamp(28px,3vw,36px)] text-white leading-[1.2] mb-6">
                How we work.
              </h2>
              <hr className="gold-rule gold-rule--center" />
            </Reveal>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
            {values.map((value, i) => (
              <Reveal key={value.title} delay={i * 0.06}>
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
              Tell us which process is costing you the most. The first
              conversation is free and comes with no obligation.
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
