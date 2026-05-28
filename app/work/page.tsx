import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Work — Client Outcomes",
  description:
    "Selected client engagements from Turbo Bytes Consulting. Every outcome is measured and verifiable.",
  alternates: {
    canonical: "/work",
  },
};

interface CaseStudy {
  tag: string;
  headline: string;
  outcome: string;
  metric: string;
}

const caseStudies: CaseStudy[] = [
  {
    tag: "Custom LLM",
    headline:
      "Professional services firm reduces new-hire onboarding from 3 weeks to 4 hours.",
    outcome:
      "Custom LLM trained on 7 years of SOPs and case files. Deployed on-premise.",
    metric: "87% reduction in knowledge-transfer time",
  },
  {
    tag: "Social Media Management",
    headline:
      "Manufacturing company achieves 340% LinkedIn follower growth in 6 months.",
    outcome:
      "Full content strategy and AI-driven execution across LinkedIn and Instagram.",
    metric: "340% follower growth · 12× engagement rate improvement",
  },
  {
    tag: "Website Development",
    headline:
      "Financial services firm launches conversion-optimised site in 18 days.",
    outcome:
      "Custom Next.js site with CMS, booking integration, and Core Web Vitals 97+ score.",
    metric: "97 PageSpeed · 23% increase in consultation requests",
  },
];

export default function WorkPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-ink py-24" aria-labelledby="work-hero-heading">
        <div className="container-tbc">
          <span className="eyebrow">Work</span>
          <h1
            id="work-hero-heading"
            className="font-display font-bold text-h1 text-white mb-6 text-balance"
            style={{ maxWidth: "640px" }}
          >
            Outcomes, documented.
          </h1>
          <p
            className="font-sans text-body-lg text-white/70"
            style={{ maxWidth: "680px" }}
          >
            Selected client engagements. Names are anonymised where
            confidentiality is preserved by mandate. Every outcome below is
            measured and verifiable on request.
          </p>
        </div>
      </section>

      {/* ── Case Studies ── */}
      <section className="bg-ivory py-20" aria-labelledby="case-studies-heading">
        <div className="container-tbc">
          <h2 id="case-studies-heading" className="sr-only">
            Case Studies
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <article
                key={index}
                className="bg-white border border-light-grey rounded-lg shadow-card hover:shadow-card-hover transition-shadow duration-300 flex flex-col"
              >
                {/* Tag */}
                <div className="px-8 pt-8 pb-0">
                  <span className="inline-block font-display font-bold text-xs tracking-widest uppercase text-royal bg-royal-light rounded px-3 py-1.5">
                    {study.tag}
                  </span>
                </div>

                {/* Body */}
                <div className="px-8 pt-6 pb-8 flex flex-col gap-5 flex-1">
                  <hr className="gold-rule" />
                  <h3 className="font-display font-bold text-ink leading-snug" style={{ fontSize: "20px", lineHeight: "1.3" }}>
                    {study.headline}
                  </h3>
                  <p className="font-sans text-body text-mid-grey leading-relaxed flex-1">
                    {study.outcome}
                  </p>

                  {/* Metric badge */}
                  <div className="mt-auto pt-4 border-t border-light-grey">
                    <div className="inline-flex items-center gap-2 bg-tbc-emerald-light rounded px-4 py-2.5">
                      <span
                        className="block w-2 h-2 rounded-full bg-tbc-emerald flex-shrink-0"
                        aria-hidden="true"
                      />
                      <span className="font-display font-semibold text-tbc-emerald text-sm">
                        {study.metric}
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Engagement CTA ── */}
      <section
        className="bg-white border-t border-light-grey py-16"
        aria-labelledby="work-cta-heading"
      >
        <div className="container-tbc">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div style={{ maxWidth: "560px" }}>
              <h2
                id="work-cta-heading"
                className="font-display font-bold text-h2 text-ink mb-3"
              >
                Every engagement begins with a defined outcome.
              </h2>
              <p className="font-sans text-body text-mid-grey leading-relaxed">
                We do not start work until we agree on what success looks like.
                That clarity drives every decision from the first day to the
                last.
              </p>
            </div>
            <div className="flex-shrink-0">
              <Link href="/book-consultation" className="btn-primary">
                Start a Conversation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
