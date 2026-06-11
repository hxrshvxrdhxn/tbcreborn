import React from 'react';

/* ── PullStat: Oversized single metric tile ── */
export function PullStat({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col">
      <span className="font-display font-bold text-[40px] text-gold leading-none tracking-tight mb-2">
        {value}
      </span>
      <span className="text-caption text-mid-grey uppercase tracking-[1.5px] font-semibold">
        {label}
      </span>
    </div>
  );
}

/* ── StatBlock: Rows of facts/deliverables ── */
export interface StatRow {
  label: string;
  value: string | React.ReactNode;
}

export function StatBlock({ rows, className = "" }: { rows: StatRow[], className?: string }) {
  return (
    <div className={`border border-light-grey rounded-lg overflow-hidden bg-white ${className}`}>
      {rows.map((row, idx) => (
        <div 
          key={idx} 
          className={`px-6 py-4 flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-2 ${
            idx !== rows.length - 1 ? 'border-b border-dashed border-light-grey' : ''
          }`}
        >
          <span className="text-caption text-gold font-bold uppercase tracking-[1.5px] shrink-0">
            {row.label}
          </span>
          <span className="text-body font-semibold text-ink sm:text-right">
            {row.value}
          </span>
        </div>
      ))}
    </div>
  );
}
