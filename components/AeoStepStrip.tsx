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
    title: "Visibility audit",
    short: "Checking site health and baseline recommendations across ChatGPT, Gemini and Perplexity.",
    detail: "We audit your technical website performance and index status alongside tests querying leading AI assistants with the top 20 questions your buyers ask.",
  },
  {
    step: "02",
    title: "Structured data and schema",
    short: "Deploying schema data across pages and machine-readable llms.txt discovery paths.",
    detail: "AI assistants need clear confirmation across the web to recommend a firm. We deploy structured schema data (Organization, Service, FAQ, Breadcrumbs) and machine-readable llms.txt discovery routes.",
  },
  {
    step: "03",
    title: "Direct answer summaries",
    short: "Concise 40 to 60-word clear answers placed directly beneath question headings.",
    detail: "We organise key page content around specific commercial questions, giving each a concise 40 to 60-word summary followed by full technical details.",
  },
  {
    step: "04",
    title: "Industry mentions",
    short: "Verified directory listings, partner mentions and independent corroboration.",
    detail: "AI models verify credentials through independent sources. We ensure your business is listed in relevant industry registries and partner directories so assistants have reliable sources verifying what you do.",
  },
  {
    step: "05",
    title: "Monthly review",
    short: "Tracking search rankings and AI recommendations with clear monthly reports.",
    detail: "We track organic traffic, search positions and how often your business appears in AI assistant responses to commercial buyer questions.",
  },
];

export default function AeoStepStrip() {
  return (
    <div className="w-full">
      <div className="text-center max-w-2xl mx-auto mb-8">
        <h3 className="font-display font-semibold text-[clamp(22px,2.6vw,30px)] text-ink mb-2">
          The five-step AI and search visibility method.
        </h3>
        <p className="text-[15px] text-mid-grey">
          A clear process connecting website performance directly to being recommended in AI answers.
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
