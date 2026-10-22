"use client";

import { useMemo, useState } from "react";
import { track } from "@/lib/track";

// What does one slow, manual process cost a year? People × hours × hourly cost, plus the cost of
// errors that reach customers. Shown live; the visitor can ask for a written breakdown, which is
// sent to /api/contact like any other enquiry.

const inr = (n: number) => "₹" + Math.round(n).toLocaleString("en-IN");
const WORK_HOURS_PER_MONTH = 208; // 26 days × 8 hours

function Field({ id, label, hint, value, onChange, min = 0, max, step = 1, prefix }: {
  id: string; label: string; hint: string; value: number; onChange: (v: number) => void; min?: number; max: number; step?: number; prefix?: string;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="font-display font-semibold text-[15px] text-ink">{label}</label>
      <div className="flex items-center gap-4">
        <input id={id} type="range" min={min} max={max} step={step} value={value} onChange={(e) => onChange(Number(e.target.value))} className="flex-1 accent-[#167A4E]" />
        <input
          aria-label={label}
          type="number" min={min} max={max * 10} step={step} value={value}
          onChange={(e) => onChange(Math.max(min, Number(e.target.value) || 0))}
          className="w-28 rounded-lg border border-light-grey px-3 py-2 text-right tabular-nums text-ink"
        />
      </div>
      <p className="text-[13px] text-mid-grey">{prefix ? `${prefix} ` : ""}{hint}</p>
    </div>
  );
}

export default function ProcessCostCalculator() {
  const [people, setPeople] = useState(3);
  const [hours, setHours] = useState(8);
  const [salary, setSalary] = useState(35000);
  const [errors, setErrors] = useState(4);
  const [errorCost, setErrorCost] = useState(5000);

  const r = useMemo(() => {
    const hourly = salary / WORK_HOURS_PER_MONTH;
    const timeCost = people * hours * 52 * hourly;
    const errorTotal = errors * 12 * errorCost;
    const total = timeCost + errorTotal;
    const hoursYear = people * hours * 52;
    const fte = hoursYear / (WORK_HOURS_PER_MONTH * 12);
    return { timeCost, errorTotal, total, hoursYear, fte };
  }, [people, hours, salary, errors, errorCost]);

  const [form, setForm] = useState({ name: "", email: "", company: "", process: "", website: "" });
  const [state, setState] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setState("sending");
    const message =
      `Process cost calculator\n\nProcess: ${form.process || "not given"}\n` +
      `${people} people × ${hours} h/week, average monthly salary ${inr(salary)}\n` +
      `${errors} errors a month at about ${inr(errorCost)} each\n\n` +
      `Estimated yearly cost: ${inr(r.total)} (time ${inr(r.timeCost)}, errors ${inr(r.errorTotal)}); ${Math.round(r.hoursYear).toLocaleString("en-IN")} hours a year, about ${r.fte.toFixed(1)} full-time people.`;
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: form.name, email: form.email, company: form.company || undefined, service: "Process cost calculator", message, website: form.website }),
      });
      if (!res.ok) throw new Error(String(res.status));
      setState("sent");
      track("generate_lead", { source: "process_cost_calculator", value: Math.round(r.total) });
    } catch {
      setState("error");
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-8 items-start">
      <div className="bg-white border border-light-grey rounded-2xl p-6 md:p-8 flex flex-col gap-7">
        <Field id="people" label="People who work on this process" hint="Everyone who touches it in a normal week." value={people} onChange={setPeople} min={1} max={30} />
        <Field id="hours" label="Hours each spends on it per week" hint="Typing, chasing, checking, re-doing." value={hours} onChange={setHours} min={1} max={40} />
        <Field id="salary" label="Their average monthly salary (₹)" hint="Cost to company per month, roughly." value={salary} onChange={setSalary} min={10000} max={200000} step={1000} />
        <Field id="errors" label="Mistakes that reach a customer or supplier each month" hint="Wrong quantity, wrong price, missed dispatch." value={errors} onChange={setErrors} max={50} />
        <Field id="errorCost" label="What one mistake costs you (₹)" hint="Re-dispatch, discount given, time to fix." value={errorCost} onChange={setErrorCost} max={100000} step={500} />
      </div>

      <div className="flex flex-col gap-6 lg:sticky lg:top-28">
        <div className="bg-forest text-white rounded-2xl p-7 md:p-8" aria-live="polite">
          <p className="text-white/70 text-[14px] mb-2">This process costs you about</p>
          <p className="font-display font-bold text-[clamp(36px,5vw,52px)] leading-none tabular-nums">{inr(r.total)}</p>
          <p className="text-white/70 text-[14px] mt-2">a year</p>
          <dl className="mt-6 grid grid-cols-2 gap-4 text-[14px]">
            <div><dt className="text-white/60">Time</dt><dd className="font-semibold tabular-nums">{inr(r.timeCost)}</dd></div>
            <div><dt className="text-white/60">Mistakes</dt><dd className="font-semibold tabular-nums">{inr(r.errorTotal)}</dd></div>
            <div><dt className="text-white/60">Hours a year</dt><dd className="font-semibold tabular-nums">{Math.round(r.hoursYear).toLocaleString("en-IN")}</dd></div>
            <div><dt className="text-white/60">Full-time people</dt><dd className="font-semibold tabular-nums">{r.fte.toFixed(1)}</dd></div>
          </dl>
          <p className="mt-6 text-[13px] text-white/60">Before counting the decisions that wait on one person, or the customers who quietly go elsewhere.</p>
        </div>

        <div className="bg-white border border-light-grey rounded-2xl p-6 md:p-7">
          {state === "sent" ? (
            <div role="status">
              <p className="font-display font-bold text-[20px] text-ink mb-2">Thank you. We have your numbers.</p>
              <p className="text-[15px] text-mid-grey">Harsh will reply within one working day with how we would approach this process and what it would take.</p>
            </div>
          ) : (
            <form onSubmit={submit} className="flex flex-col gap-3">
              <p className="font-display font-bold text-[18px] text-ink">Want a plan to bring that number down?</p>
              <p className="text-[14px] text-mid-grey mb-1">Send it to us. We reply within one working day.</p>
              <input id="pc-process" placeholder="Which process is it? e.g. quotations" value={form.process} onChange={(e) => setForm({ ...form, process: e.target.value })} className="rounded-lg border border-light-grey px-4 py-3" />
              <input id="pc-name" required minLength={2} placeholder="Your name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="rounded-lg border border-light-grey px-4 py-3" />
              <input id="pc-email" required type="email" placeholder="Work email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="rounded-lg border border-light-grey px-4 py-3" />
              <input id="pc-company" placeholder="Company" value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} className="rounded-lg border border-light-grey px-4 py-3" />
              <input tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" value={form.website} onChange={(e) => setForm({ ...form, website: e.target.value })} />
              <button type="submit" disabled={state === "sending"} className="btn-primary justify-center py-3.5 mt-1 disabled:opacity-60">
                {state === "sending" ? "Sending…" : "Send me a plan"}
              </button>
              {state === "error" && <p className="text-[14px] text-[#B42318]">That did not go through. Please email harshvardhan@turbobytesconsulting.com or call +91 93547 84377.</p>}
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
