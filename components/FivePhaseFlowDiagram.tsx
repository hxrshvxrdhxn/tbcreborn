import React from "react";

export type PhaseData = {
  phase: string;
  name: string;
  short: string;
  deliverables: string[];
};

const defaultPhases: PhaseData[] = [
  {
    phase: "Phase 01",
    name: "Diagnose",
    short: "Sit with every team, from the MD to the interns, hear everyone's pain points and take every input we can to calculate friction costs.",
    deliverables: [
      "Comprehensive visual process and handoff map",
      "Quantified cost-of-delay and bottleneck calculations",
      "Identification of spreadsheet gaps and duplicate data entry",
      "Prioritised transformation roadmap ranked by commercial ROI",
    ],
  },
  {
    phase: "Phase 02",
    name: "Design",
    short: "Engineer target systems architecture and data models before writing production code.",
    deliverables: [
      "Target systems architecture and data flow specifications",
      "Interactive UI wireframes designed for floor and desk users",
      "Integration blueprints for Tally, ERPs, CRM, and messaging",
      "Security, access control, and compliance governance model",
    ],
  },
  {
    phase: "Phase 03",
    name: "Build",
    short: "Sprint-based in-house delivery of custom software, automation, and bi-directional connectors.",
    deliverables: [
      "In-house software, automations and models built around how your business works",
      "Bi-directional API connectors linking accounting and floor systems",
      "Automated notification triggers, approval chains, and document generators",
      "Fewer third-party dependencies so your operational data stays with you",
    ],
  },
  {
    phase: "Phase 04",
    name: "Run",
    short: "Deploy to production, monitor live telemetry, and manage early operations with your staff.",
    deliverables: [
      "Coordinated production cutover with zero downtime",
      "Real-time error logging, latency monitoring, and telemetry dashboards",
      "Dedicated SLA support covering bug fixes and minor adjustments",
      "Continuous performance tuning based on real operational feedback",
    ],
  },
  {
    phase: "Phase 05",
    name: "Hand Over",
    short: "Train your internal team and transfer complete source code and operational control.",
    deliverables: [
      "Complete transfer of source code repositories in your accounts",
      "Comprehensive technical documentation and operational runbooks",
      "Role-based staff training sessions and video documentation",
      "Final handover sign-off with optional ongoing maintenance agreements",
    ],
  },
];

export default function FivePhaseFlowDiagram({
  phases = defaultPhases,
}: {
  phases?: PhaseData[];
}) {
  return (
    <div className="w-full">
      <div className="text-center max-w-2xl mx-auto mb-8">
        <h3 className="font-display font-semibold text-[clamp(22px,2.6vw,30px)] text-ink mb-2">
          The Five-Phase Transformation Lifecycle
        </h3>
        <p className="text-[15px] text-mid-grey">
          From first operational diagnostic to production systems running under client ownership.
        </p>
      </div>

      <div className="relative mb-6">
        {/* Horizontal SVG line connector for desktop */}
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

        {/* Five Phase Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 relative z-10">
          {phases.map((p, i) => (
            <div
              key={p.phase}
              className="bg-white border border-light-grey rounded-[8px] p-5 shadow-sm flex flex-col justify-between hover:border-[#167A4E]/50 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="w-7 h-7 rounded-full bg-[#0C3D2A] text-white text-[12px] font-mono font-semibold flex items-center justify-center">
                    0{i + 1}
                  </span>
                  <span className="text-[11px] font-semibold text-[#167A4E]">{p.phase}</span>
                </div>
                <h4 className="font-display font-semibold text-[17px] text-ink mb-1.5">{p.name}</h4>
                <p className="text-[13px] text-mid-grey leading-relaxed mb-3">{p.short}</p>
              </div>

              {/* Folded Deliverables Accordion */}
              <details className="group [&_summary::-webkit-details-marker]:hidden border-t border-light-grey pt-2.5">
                <summary className="cursor-pointer text-[12px] font-semibold text-[#167A4E] hover:underline flex items-center justify-between select-none">
                  <span>Deliverables ({p.deliverables.length})</span>
                  <span className="group-open:rotate-180 transition-transform">↓</span>
                </summary>
                <ul className="mt-2.5 pt-2 border-t border-light-grey/80 space-y-1.5 text-[12px] text-mid-grey">
                  {p.deliverables.map((item, dIdx) => (
                    <li key={dIdx} className="flex items-start gap-1.5 leading-snug">
                      <span className="text-[#167A4E] font-bold select-none">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </details>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
