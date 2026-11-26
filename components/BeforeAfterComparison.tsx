import React from "react";

export type BeforeAfterProps = {
  title?: string;
  subtitle?: string;
  beforeTitle?: string;
  beforeItems: string[];
  afterTitle?: string;
  afterItems: string[];
};

export default function BeforeAfterComparison({
  title = "Operational Contrast: Today vs With TBC",
  subtitle = "Why founder-led firms move away from fragmented spreadsheets and generic software.",
  beforeTitle = "Today (Common friction)",
  beforeItems,
  afterTitle = "With TBC (Engineered resolution)",
  afterItems,
}: BeforeAfterProps) {
  return (
    <div className="w-full">
      <div className="text-center max-w-2xl mx-auto mb-8">
        <h3 className="font-display font-semibold text-[clamp(20px,2.4vw,28px)] text-ink mb-2">
          {title}
        </h3>
        {subtitle && <p className="text-[15px] text-mid-grey">{subtitle}</p>}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Before / Today */}
        <div className="bg-white border border-light-grey rounded-[8px] p-6 shadow-sm">
          <div className="flex items-center gap-2 mb-4 pb-3 border-b border-light-grey">
            <span className="w-2.5 h-2.5 rounded-full bg-[#E57373]" aria-hidden="true" />
            <h4 className="font-display font-semibold text-[17px] text-ink">{beforeTitle}</h4>
          </div>
          <ul className="space-y-3">
            {beforeItems.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-[15px] text-mid-grey leading-relaxed">
                <span className="text-[#C62828] text-base leading-none select-none mt-0.5" aria-hidden="true">✕</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* After / With TBC */}
        <div className="bg-white border-2 border-[#167A4E]/30 rounded-[8px] p-6 shadow-sm relative">
          <div className="flex items-center gap-2 mb-4 pb-3 border-b border-[#167A4E]/20">
            <span className="w-2.5 h-2.5 rounded-full bg-[#167A4E]" aria-hidden="true" />
            <h4 className="font-display font-semibold text-[17px] text-[#0C3D2A]">{afterTitle}</h4>
          </div>
          <ul className="space-y-3">
            {afterItems.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-[15px] text-ink leading-relaxed">
                <span className="text-[#167A4E] text-base leading-none select-none mt-0.5" aria-hidden="true">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
