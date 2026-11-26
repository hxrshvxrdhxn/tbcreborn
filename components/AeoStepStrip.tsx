import React from "react";

export type StepItem = {
  step: string;
  title: string;
  short: string;
  detail: string;
};

const steps: StepItem[] = [
  {
    step: "01",
    title: "Visibility Audit",
    short: "Crawl health, canonical integrity, and baseline testing across ChatGPT, Gemini, and Perplexity.",
    detail: "We audit your technical SEO (crawl budget, index status, canonical integrity, Core Web Vitals) alongside an AI answers test querying leading AI assistants with the top 20 questions your buyers ask.",
  },
  {
    step: "02",
    title: "Entity & Schema",
    short: "Deploy rich Schema.org graphs, directory consensus, and machine-readable llms.txt.",
    detail: "AI assistants require clear entity consensus to recommend a firm. We deploy rich Schema.org structured data (Organization, Service, FAQPage, BreadcrumbList) and establish machine-readable llms.txt discovery routes.",
  },
  {
    step: "03",
    title: "Answer Architecture",
    short: "Structured 40-60 word definitive answer summaries placed directly beneath question headers.",
    detail: "We re-architect your content around specific commercial questions. Every core page features an authoritative question heading followed by a tight 40 to 60-word direct summary supported by technical specifications.",
  },
  {
    step: "04",
    title: "Authoritative Citations",
    short: "Third-party registry verification, partner mentions, and industry corroboration.",
    detail: "Large language models evaluate third-party consensus. We curate relevant business registries, partner portfolios, and industry citations so assistants have independent sources that confirm your capabilities.",
  },
  {
    step: "05",
    title: "Monthly Iteration",
    short: "Track search console positions and proprietary AI Answer Share with monthly reports.",
    detail: "We track organic impressions, click-through rates, and average search positions alongside our proprietary AI Answer Share metric across a predefined question set, tied to commercial leads.",
  },
];

export default function AeoStepStrip() {
  return (
    <div className="w-full">
      <div className="text-center max-w-2xl mx-auto mb-8">
        <h3 className="font-display font-semibold text-[clamp(22px,2.6vw,30px)] text-ink mb-2">
          The Five-Step AI & Search Visibility Method
        </h3>
        <p className="text-[15px] text-mid-grey">
          A systematic framework connecting crawl technicals directly to generative model citations.
        </p>
      </div>

      {/* Horizontal connector on desktop */}
      <div className="relative mb-6">
        <div className="hidden lg:block absolute top-[28px] left-[5%] right-[5%] h-[2px] z-0" aria-hidden="true">
          <svg className="w-full h-[6px] overflow-visible" preserveAspectRatio="none" viewBox="0 0 100 2">
            <line
              x1="0"
              y1="1"
              x2="100"
              y2="1"
              stroke="#167A4E"
              strokeWidth="2"
              strokeDasharray="4 4"
              strokeOpacity="0.4"
            />
          </svg>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 relative z-10">
          {steps.map((st, i) => (
            <div
              key={st.step}
              className="bg-white border border-light-grey rounded-[8px] p-5 shadow-sm flex flex-col justify-between hover:border-[#167A4E]/50 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="w-7 h-7 rounded-full bg-[#0C3D2A] text-white text-[12px] font-mono font-semibold flex items-center justify-center">
                    {st.step}
                  </span>
                  <span className="text-[11px] font-semibold text-[#167A4E]">Step {i + 1}</span>
                </div>
                <h4 className="font-display font-semibold text-[15px] text-ink mb-1.5">{st.title}</h4>
                <p className="text-[13px] text-mid-grey leading-relaxed mb-3">{st.short}</p>
              </div>

              <details className="group [&_summary::-webkit-details-marker]:hidden border-t border-light-grey pt-2.5">
                <summary className="cursor-pointer text-[12px] font-semibold text-[#167A4E] hover:underline flex items-center justify-between select-none">
                  <span>Scope details</span>
                  <span className="group-open:rotate-180 transition-transform">↓</span>
                </summary>
                <p className="text-[12px] text-mid-grey mt-2 leading-relaxed bg-ivory p-2 rounded border border-light-grey">
                  {st.detail}
                </p>
              </details>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
