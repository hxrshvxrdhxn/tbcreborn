import React from "react";

export default function WhereBuyersLookDiagram() {
  return (
    <div className="w-full">
      <div className="text-center max-w-2xl mx-auto mb-8">
        <h3 className="font-display font-semibold text-[clamp(22px,2.6vw,30px)] text-ink mb-2">
          Where Commercial Buyers Look Now
        </h3>
        <p className="text-[15px] text-mid-grey">
          Search has fragmented into three distinct channels. Winning enterprise buyers requires coverage across all three.
        </p>
      </div>

      <div className="bg-ivory border border-light-grey rounded-[12px] p-6 sm:p-8 max-w-4xl mx-auto shadow-sm">
        {/* Top Trigger: Buyer Enquiry */}
        <div className="bg-white border border-[#167A4E]/30 rounded-[8px] p-4 text-center max-w-md mx-auto mb-6 shadow-xs">
          <span className="text-[12px] font-semibold text-[#167A4E] block mb-0.5">Commercial Buyer Query</span>
          <p className="text-[14px] font-medium text-ink italic">
            &ldquo;Which firms handle enterprise process automation and custom software?&rdquo;
          </p>
        </div>

        {/* Visual Connector Lines */}
        <div className="hidden md:flex justify-around items-center h-8 mb-2 px-12" aria-hidden="true">
          <svg className="w-full h-8 overflow-visible" preserveAspectRatio="none" viewBox="0 0 300 32">
            <path
              d="M150 0 L150 12 L50 12 L50 32"
              fill="none"
              stroke="#167A4E"
              strokeWidth="2"
              strokeDasharray="4 4"
            />
            <path
              d="M150 0 L150 32"
              fill="none"
              stroke="#167A4E"
              strokeWidth="2"
              strokeDasharray="4 4"
            />
            <path
              d="M150 0 L150 12 L250 12 L250 32"
              fill="none"
              stroke="#167A4E"
              strokeWidth="2"
              strokeDasharray="4 4"
            />
          </svg>
        </div>

        {/* 3 Channel Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {/* Channel 1: SEO */}
          <div className="bg-white border border-light-grey rounded-[8px] p-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-bold text-[#0C3D2A] bg-[#0C3D2A]/10 px-2 py-0.5 rounded">SEO</span>
                <span className="text-[12px] text-mid-grey">Search Results</span>
              </div>
              <h4 className="font-display font-semibold text-[16px] text-ink mb-1.5">
                Google & Bing Links
              </h4>
              <p className="text-[13px] text-mid-grey leading-relaxed mb-3">
                Crawl architecture, core web vitals, and topical relevance earning first-page organic clicks.
              </p>
            </div>
            <div className="pt-2.5 border-t border-light-grey text-[12px] text-[#167A4E] font-medium">
              Evaluates: Domain authority & crawl depth
            </div>
          </div>

          {/* Channel 2: AEO */}
          <div className="bg-white border border-light-grey rounded-[8px] p-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-bold text-[#0C3D2A] bg-[#0C3D2A]/10 px-2 py-0.5 rounded">AEO</span>
                <span className="text-[12px] text-mid-grey">Answer Engines</span>
              </div>
              <h4 className="font-display font-semibold text-[16px] text-ink mb-1.5">
                AI Overviews & Snippets
              </h4>
              <p className="text-[13px] text-mid-grey leading-relaxed mb-3">
                Featured snippets, zero-click answer cards, and voice search summaries extracted directly.
              </p>
            </div>
            <div className="pt-2.5 border-t border-light-grey text-[12px] text-[#167A4E] font-medium">
              Evaluates: 40–60w concise answer blocks
            </div>
          </div>

          {/* Channel 3: GEO */}
          <div className="bg-white border border-light-grey rounded-[8px] p-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-bold text-[#0C3D2A] bg-[#0C3D2A]/10 px-2 py-0.5 rounded">GEO</span>
                <span className="text-[12px] text-mid-grey">Generative Models</span>
              </div>
              <h4 className="font-display font-semibold text-[16px] text-ink mb-1.5">
                ChatGPT, Gemini & Perplexity
              </h4>
              <p className="text-[13px] text-mid-grey leading-relaxed mb-3">
                Direct conversational brand citations when buyers ask LLMs for vetted recommendations.
              </p>
            </div>
            <div className="pt-2.5 border-t border-light-grey text-[12px] text-[#167A4E] font-medium">
              Evaluates: Entity consensus & llms.txt
            </div>
          </div>
        </div>

        {/* Bottom Unification */}
        <div className="mt-6 pt-4 border-t border-light-grey/80 text-center">
          <p className="text-[13px] font-medium text-ink">
            <span className="text-[#167A4E] font-semibold">TBC Unified Result:</span> Your firm is recommended when buyers type, click, or prompt.
          </p>
        </div>
      </div>
    </div>
  );
}
