import React from "react";

export interface CallProcessStep {
  number: number;
  title: string;
  description: string;
}

export const CALL_PROCESS_STEPS: CallProcessStep[] = [
  {
    number: 1,
    title: "Before",
    description: "You pick a time. A few questions help us prepare, nothing more.",
  },
  {
    number: 2,
    title: "On the call (30 minutes)",
    description:
      "We ask about your business, what is not working today and what a good result looks like.",
  },
  {
    number: 3,
    title: "Our honest view",
    description:
      "We tell you whether custom software, automation, AI or an off-the-shelf tool fits best, even if that means you do not need us.",
  },
  {
    number: 4,
    title: "Afterwards",
    description:
      "Within two business days you receive a short written summary with recommended next steps. There is no obligation.",
  },
];

interface CallProcessProps {
  className?: string;
  variant?: "section" | "compact";
}

export default function CallProcess({
  className = "",
  variant = "section",
}: CallProcessProps) {
  if (variant === "compact") {
    return (
      <div className={className}>
        <span className="eyebrow">HOW WE WORK</span>
        <hr className="gold-rule mb-6" />
        <h2 className="font-display font-bold text-[26px] text-ink leading-[1.25] mb-8">
          What happens on the call
        </h2>

        <ol className="space-y-6 mb-10">
          {CALL_PROCESS_STEPS.map((step) => (
            <li key={step.number} className="flex items-start gap-4">
              <span
                className="mt-0.5 flex-shrink-0 w-7 h-7 rounded-full bg-gold/15 text-gold font-display font-bold text-[13px] flex items-center justify-center"
                aria-hidden="true"
              >
                {step.number}
              </span>
              <div>
                <h3 className="font-display font-bold text-[16px] text-ink leading-snug mb-1">
                  {step.title}
                </h3>
                <p className="font-sans text-[15px] text-mid-grey leading-relaxed">
                  {step.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    );
  }

  return (
    <section
      className={`bg-ivory py-16 md:py-20 border-t border-light-grey ${className}`}
    >
      <div className="container-tbc">
        <div className="max-w-2xl mb-12">
          <span className="eyebrow">HOW WE WORK</span>
          <hr className="gold-rule mb-6" />
          <h2 className="font-display font-bold text-[clamp(24px,3vw,36px)] text-ink leading-[1.2]">
            What happens on the call
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {CALL_PROCESS_STEPS.map((step) => (
            <div
              key={step.number}
              className="bg-white border border-light-grey rounded-[8px] p-6 shadow-card flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className="flex-shrink-0 w-7 h-7 rounded-full bg-gold/15 text-gold font-display font-bold text-[13px] flex items-center justify-center"
                    aria-hidden="true"
                  >
                    {step.number}
                  </span>
                  <h3 className="font-display font-bold text-[17px] text-ink leading-snug">
                    {step.title}
                  </h3>
                </div>
                <p className="font-sans text-[15px] text-mid-grey leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
