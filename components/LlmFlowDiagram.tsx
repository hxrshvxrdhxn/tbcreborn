/**
 * "Your own LLM" in one picture: your company data -> your private model -> answers and automations.
 * Pure SVG in the site palette; stacks vertically on phones. No client-side JavaScript.
 */

const SOURCES = ["Documents & SOPs", "Emails & chats", "Orders & ERP", "Spreadsheets", "Past proposals"];
const OUTPUTS = ["Agents that do real work", "Answers with the source", "Drafts & reports", "Automated workflows"];

function Column({ title, items, tone }: { title: string; items: string[]; tone: "light" | "dark" }) {
  const dark = tone === "dark";
  return (
    <div
      className={`rounded-[8px] border p-5 flex flex-col gap-2.5 ${
        dark ? "bg-forest border-forest text-white" : "bg-white border-light-grey text-ink"
      }`}
    >
      <p className={`font-display font-bold text-[15px] mb-1 ${dark ? "text-white" : "text-ink"}`}>{title}</p>
      {items.map((item) => (
        <span
          key={item}
          className={`text-[13px] rounded-[6px] px-3 py-2 border ${
            dark ? "bg-white/10 border-white/20 text-white" : "bg-ivory border-light-grey text-mid-grey"
          }`}
        >
          {item}
        </span>
      ))}
    </div>
  );
}

function Arrow() {
  return (
    <div className="flex items-center justify-center text-royal" aria-hidden="true">
      <svg className="hidden md:block" width="44" height="24" viewBox="0 0 44 24" fill="none">
        <path d="M2 12h36m0 0l-8-8m8 8l-8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <svg className="md:hidden" width="24" height="32" viewBox="0 0 24 32" fill="none">
        <path d="M12 2v24m0 0l-8-8m8 8l8-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

export default function LlmFlowDiagram() {
  return (
    <figure className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1.1fr_auto_1fr] gap-4 md:gap-3 items-stretch">
        <Column title="1. Your company data" items={SOURCES} tone="light" />
        <Arrow />
        <div className="rounded-[8px] bg-forest text-white p-6 flex flex-col items-center justify-center text-center gap-3 shadow-card">
          <svg width="56" height="56" viewBox="0 0 56 56" fill="none" aria-hidden="true">
            <circle cx="28" cy="28" r="26" stroke="#A7EBC8" strokeWidth="2" />
            <circle cx="28" cy="28" r="6" fill="#A7EBC8" />
            {[0, 60, 120, 180, 240, 300].map((deg) => {
              const r = (deg * Math.PI) / 180;
              const x = 28 + Math.cos(r) * 17;
              const y = 28 + Math.sin(r) * 17;
              return (
                <g key={deg}>
                  <line x1="28" y1="28" x2={x} y2={y} stroke="#A7EBC8" strokeOpacity="0.6" strokeWidth="1.5" />
                  <circle cx={x} cy={y} r="3.5" fill="#FFFFFF" />
                </g>
              );
            })}
          </svg>
          <p className="font-display font-bold text-[18px]">2. Your private LLM</p>
          <p className="text-[13px] text-white/80 leading-relaxed max-w-[220px]">
            Trained and grounded on your data. Runs on a server you control. Nobody else&apos;s model learns from it.
          </p>
        </div>
        <Arrow />
        <Column title="3. What your teams get" items={OUTPUTS} tone="light" />
      </div>
      <figcaption className="sr-only">
        Your company data goes into a private language model that runs on infrastructure you control, which gives your
        teams sourced answers, drafts, reports, automated workflows and tools.
      </figcaption>
    </figure>
  );
}
