import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import SectionInk from "@/components/SectionInk";
import { BothHalves, ValueIcon, ProcessToday, ProcessWithSoftware } from "@/components/Illustrations";

export const metadata: Metadata = {
  title: { absolute: "About Turbo Bytes Consulting | Technology Consultancy" },
  description:
    "TBC is a technology consultancy. We sit with your MD and team, measure what processes cost, fix them, and run them.",
  alternates: {
    canonical: "/about",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: { absolute: "About Turbo Bytes Consulting | Technology Consultancy" },
    description:
      "TBC is a technology consultancy. We sit with your MD and team, measure what processes cost, fix them, and run them.",
    url: "https://turbobytesconsulting.com/about",
    images: [{ url: "/img/og-default.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image" as const,
    title: { absolute: "About Turbo Bytes Consulting | Technology Consultancy" },
    description:
      "TBC is a technology consultancy. We sit with your MD and team, measure what processes cost, fix them, and run them.",
  },
};

const values = [
  {
    icon: "process" as const,
    title: "Process first",
    description:
      "We learn how the work is actually done before we write a line of code. Software built on a misunderstood process just makes the mistake faster.",
  },
  {
    icon: "ai" as const,
    title: "Useful AI",
    description:
      "LLMs and neural networks go in where they earn their place. Where a simple rule or a clean form does the job better, we use that instead.",
  },
  {
    icon: "end" as const,
    title: "End to end",
    description:
      "We design, build, deploy and support. AMC and maintenance stay with us, so there is one team to call when something needs to change.",
  },
  {
    icon: "value" as const,
    title: "Business value",
    description:
      "We measure the work by hours saved, errors removed and decisions made faster, not by features shipped.",
  },
  {
    icon: "plain" as const,
    title: "Plain dealing",
    description:
      "Clear scope, clear timelines, and a written proposal before any work begins. If we are not the right fit, we will say so.",
  },
];

const companyFacts = [
  {
    label: "Category",
    value: "Technology consultancy and process automation",
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
    label: "Geographic scope",
    value: "Worldwide (serving clients in India, the Middle East, Asia-Pacific, the UK and the US)",
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

const faqs = [
  {
    question: "What kind of organisation is Turbo Bytes Consulting?",
    answer: "TBC is a technology consultancy. We sit with the managing director and frontline teams, find the processes that cost the business the most time and money, and fix them with automation, custom software, and full digital transformation. We also help companies establish authoritative visibility in search and AI answers, with clients in India, the Middle East, Asia-Pacific, the UK and the US."
  },
  {
    question: "How do you work with client leadership?",
    answer: "We begin with an in-person or structured scoping conversation with the MD or founder to identify friction points and bottlenecks. Then we shadow the operational teams who perform the work every day, quantify the cost of delay, build the software solution, and run and maintain it under ongoing SLA support."
  },
  {
    question: "Do you replace our existing accounting or ERP systems?",
    answer: "No. We believe in augmenting existing stable infrastructure rather than forcing high-risk replacements. Invoices, taxation, and ledgers remain in Tally or your ERP, while we build modern workflow, quality, and tracking layers that synchronise bi-directionally."
  },
  {
    question: "What is your real-world proof of operational leverage?",
    answer: "In pilot engagements we have taken work that needed a 40-person technology team and run it with 4 people plus machines. We achieve this by eliminating redundant data transfer, connecting departmental handoffs, and automating high-volume manual routines."
  },
  {
    question: "Who owns the software and intellectual property created during an engagement?",
    answer: "You do. All source code repositories, databases, automation scripts, and schemas are created in your accounts and belong entirely to your organisation from day one."
  }
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AboutPage",
      "@id": "https://turbobytesconsulting.com/about#webpage",
      url: "https://turbobytesconsulting.com/about",
      name: "About Turbo Bytes Consulting",
      description: "Turbo Bytes Consulting is a technology consultancy. We sit with your MD and team, find the process that costs you most, and turn it into software we build, run and maintain.",
      publisher: { "@id": "https://turbobytesconsulting.com/#organization" },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://turbobytesconsulting.com" },
        { "@type": "ListItem", position: 2, name: "About", item: "https://turbobytesconsulting.com/about" },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map(f => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: f.answer
        }
      }))
    }
  ],
};

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      {/* ── PAGE HERO ── */}
      <section className="relative bg-forest overflow-hidden min-h-[400px] flex items-center border-b border-light-grey">
        <div className="container-tbc py-s6 relative z-10">
          <Reveal>
            <hr className="gold-rule mb-6" />
            <h1 className="font-display font-bold text-[clamp(32px,4.5vw,52px)] text-white leading-[1.1] tracking-[-0.5px] max-w-4xl mb-6 text-balance">
              We sit with your team, measure what processes cost, fix them, and run them.
            </h1>
            <p className="text-[clamp(17px,1.2vw,20px)] text-white/80 leading-relaxed max-w-2xl text-pretty">
              Turbo Bytes Consulting is a technology consultancy serving growing mid-market enterprises, with clients in India, the Middle East, Asia-Pacific, the UK and the US.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── WHO WE ARE ── */}
      <section className="bg-ivory py-s6 md:py-s8 border-b border-light-grey" aria-labelledby="who-we-are-heading">
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
                  TBC is a technology consultancy. We sit with the managing director and the team, find the processes that cost the business the most time, money or sleep, and fix them: with process automation, with custom software built for that exact need, and with full digital transformation.
                </p>
                <p className="text-body text-mid-grey leading-relaxed text-pretty">
                  We also make companies findable in traditional search and in conversational AI answers (SEO, AEO, GEO), for our clients and for ourselves. We build the systems, deploy them, train your staff, and run and maintain them through ongoing SLA support.
                </p>
                <div className="p-6 bg-white border-l-4 border-forest rounded-r-[8px] mt-6">
                  <p className="font-display font-bold text-ink text-[18px] mb-2">
                    In pilot engagements we have taken work that needed a 40-person technology team and run it with 4 people plus machines.
                  </p>
                  <p className="text-[14px] text-mid-grey">
                    We achieve this through rigorous process mapping, removing spreadsheet bottlenecks, and applying targeted machine intelligence to routine administrative work.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-12 md:mt-s7">
              <figure>
                <ProcessToday />
                <figcaption className="mt-4 text-[15px] text-mid-grey"><span className="font-display font-semibold text-ink">Before.</span> The work waits on one person.</figcaption>
              </figure>
              <figure>
                <ProcessWithSoftware />
                <figcaption className="mt-4 text-[15px] text-mid-grey"><span className="font-display font-semibold text-ink">After.</span> The work runs, and you see it.</figcaption>
              </figure>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── OUR POSITION ── */}
      <section className="bg-white py-s6 md:py-s8 border-b border-light-grey" aria-labelledby="our-position-heading">
        <div className="container-tbc">
          <Reveal>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 id="our-position-heading" className="font-display font-bold text-[clamp(28px,3vw,36px)] text-ink leading-[1.2] mb-6 text-balance">
                Consulting that ends in working software, not a slide deck.
              </h2>
              <hr className="gold-rule mb-8" />
              <p className="text-body text-mid-grey leading-relaxed text-pretty">
                A traditional consultancy will tell you what to fix. A software house will build what you specify. We do both: we sit with you to diagnose the root operational bottlenecks, engineer the custom software and automations, and stay accountable for running and maintaining the systems in production. One team, from the initial diagnostic to years of live support.
              </p>
            </div>
            <BothHalves />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section className="bg-forest py-s6 md:py-s8 border-b border-light-grey" aria-labelledby="values-heading">
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
                  <ValueIcon kind={value.icon} />
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
      <section className="bg-ivory py-s6 md:py-s8 border-b border-light-grey" aria-labelledby="company-facts-heading">
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

      {/* ── FAQS ── */}
      <section className="bg-white py-s6 md:py-s8 border-b border-light-grey">
        <div className="container-tbc max-w-4xl">
          <hr className="gold-rule mb-6" />
          <h2 className="font-display font-bold text-[clamp(26px,2.5vw,36px)] text-ink leading-[1.2] mb-4">
            Frequently asked questions about TBC.
          </h2>
          <p className="text-body text-mid-grey leading-relaxed max-w-2xl mb-12">
            Clear facts on how we engage with enterprise clients, intellectual property ownership, and our service delivery model.
          </p>

          <div className="space-y-4">
            {faqs.map((f, i) => (
              <details key={i} className="group bg-ivory border border-light-grey rounded-[8px] p-6 open:shadow-card transition-all">
                <summary className="font-display font-bold text-[18px] text-ink cursor-pointer list-none flex items-center justify-between">
                  <span>{f.question}</span>
                  <span className="text-mid-grey text-[20px] transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="text-body text-mid-grey leading-relaxed mt-4 pt-4 border-t border-light-grey text-pretty">
                  {f.answer}
                </p>
              </details>
            ))}
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
              Book a consultation
            </Link>
          </Reveal>
        </div>
      </SectionInk>
    </>
  );
}