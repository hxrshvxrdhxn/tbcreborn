import React from "react";

export type FlowStep = {
  number: string;
  title: string;
  summary: string;
};

const defaultSteps: FlowStep[] = [
  {
    number: "01",
    title: "Diagnostic",
    summary: "Sit with every team, from the MD to the interns, hear everyone's pain points and map the costliest process.",
  },
  {
    number: "02",
    title: "Architecture & Scope",
    summary: "Define fixed milestones, data models, and integrations with no bloated stacks.",
  },
  {
    number: "03",
    title: "Engineered Build",
    summary: "Sprint-based delivery of custom software and automation, tested against edge cases.",
  },
  {
    number: "04",
    title: "Production SLA Run",
    summary: "Trained staff, continuous monitoring, and ongoing maintenance under fixed SLA.",
  },
];

export default function MethodFlowDiagram({
  title = "Our Four-Stage Engineering Method",
  subtitle = "How an engagement moves from first diagnosis to production software.",
  steps = defaultSteps,
}: {
  title?: string;
  subtitle?: string;
  steps?: FlowStep[];
}) {
  return (
    <div className="w-full">
      <div className="text-center max-w-2xl mx-auto mb-8">
        <h3 className="font-display font-semibold text-[clamp(20px,2.4vw,28px)] text-ink mb-2">
          {title}
        </h3>
        <p className="text-[15px] text-mid-grey">{subtitle}</p>
      </div>

      <div className="relative">
        {/* Horizontal line connector for desktop */}
        <div className="hidden md:block absolute top-[28px] left-[10%] right-[10%] h-[2px] z-0" aria-hidden="true">
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
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 sm:gap-6 relative z-10">
          {steps.map((st, i) => (
            <div
              key={st.number}
              className="bg-white border border-light-grey rounded-[8px] p-5 shadow-sm hover:border-[#167A4E]/50 transition-colors flex flex-col"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="w-8 h-8 rounded-full bg-[#0C3D2A] text-white text-[13px] font-semibold flex items-center justify-center font-mono">
                  {st.number}
                </span>
                {i < steps.length - 1 && (
                  <span className="md:hidden text-[#167A4E] text-xs font-semibold">Step {i + 1} of {steps.length}</span>
                )}
              </div>
              <h4 className="font-display font-semibold text-[17px] text-ink mb-1.5">{st.title}</h4>
              <p className="text-[14px] text-mid-grey leading-relaxed flex-1">{st.summary}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
