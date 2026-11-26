import React from "react";

export type ProductStep = {
  title: string;
  body: string;
};

export default function ProductThreeStepFlow({
  steps,
  productName,
}: {
  steps: ProductStep[];
  productName: string;
}) {
  const displaySteps = steps.slice(0, 3);

  return (
    <div className="w-full">
      <div className="text-center max-w-2xl mx-auto mb-8">
        <h3 className="font-display font-semibold text-[clamp(22px,2.6vw,30px)] text-ink mb-2">
          How {productName} Works
        </h3>
        <p className="text-[15px] text-mid-grey">
          Three clear operating stages connecting your data to verified outputs.
        </p>
      </div>

      <div className="relative">
        {/* Horizontal SVG line connector for desktop */}
        <div className="hidden md:block absolute top-[28px] left-[15%] right-[15%] h-[2px] z-0" aria-hidden="true">
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
          {displaySteps.map((s, i) => (
            <div
              key={s.title}
              className="bg-white rounded-[8px] border border-light-grey p-6 shadow-sm flex flex-col hover:border-[#167A4E]/50 transition-colors"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="w-8 h-8 rounded-full bg-[#0C3D2A] text-white font-mono text-[13px] font-semibold flex items-center justify-center">
                  0{i + 1}
                </span>
                <span className="text-[11px] font-semibold text-[#167A4E]">Stage {i + 1}</span>
              </div>
              <h4 className="font-display font-semibold text-[18px] text-ink mb-2">{s.title}</h4>
              <p className="text-[14px] text-mid-grey leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
