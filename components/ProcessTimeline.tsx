import React from 'react';

export interface TimelineStep {
  number: string;
  title: string;
  description: string;
  caption?: string;
}

export default function ProcessTimeline({ steps }: { steps: TimelineStep[] }) {
  return (
    <div className="relative">
      {/* Desktop Spine (Horizontal) */}
      <div className="hidden md:block absolute top-[24px] left-0 w-full h-[2px] bg-gold-light z-0">
        <div className="h-full bg-gold w-full origin-left" />
      </div>

      {/* Mobile Spine (Vertical) */}
      <div className="block md:hidden absolute top-0 left-[24px] h-full w-[2px] bg-gold-light z-0">
        <div className="w-full h-full bg-gold origin-top" />
      </div>

      {/* Nodes */}
      <div className="relative z-10 flex flex-col md:flex-row gap-8 md:gap-4">
        {steps.map((step, idx) => (
          <div key={idx} className="flex-1 flex flex-row md:flex-col items-start md:items-center relative">
            {/* Node Circle */}
            <div className="shrink-0 w-[50px] h-[50px] rounded-full bg-white border-[3px] border-gold flex items-center justify-center shadow-sm z-10 md:mb-6">
              <span className="font-display font-bold text-ink text-sm tracking-widest">{step.number}</span>
            </div>
            
            {/* Content */}
            <div className="ml-6 md:ml-0 md:text-center mt-2 md:mt-0 flex-1">
              {step.caption && (
                <span className="font-display font-bold text-caption text-gold tracking-widest uppercase mb-1 block">
                  {step.caption}
                </span>
              )}
              <h4 className="font-display font-bold text-[15px] text-ink uppercase tracking-[1.5px] mb-2 text-balance leading-snug">
                {step.title}
              </h4>
              <p className="text-body text-mid-grey">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
