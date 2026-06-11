"use client";

import { useState } from "react";
import Reveal from "@/components/Reveal";

export default function FreeAnalysisForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    // Simulate API call
    setTimeout(() => {
      setStatus("success");
    }, 1500);
  };

  return (
    <section className="bg-ivory py-s5 md:py-s7 border-t border-light-grey">
      <div className="container-tbc">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-5">
            <Reveal>
              <span className="eyebrow text-gold">FREE OF CHARGE</span>
              <hr className="gold-rule mb-6" />
              <h2 className="font-display font-bold text-[clamp(28px,3vw,40px)] text-ink leading-[1.1] mb-6 text-balance">
                Get a custom business analysis delivered to your office.
              </h2>
              <p className="text-body text-mid-grey leading-relaxed mb-6 text-pretty">
                Wondering where AI can actually reduce costs or drive revenue in your specific operations? 
                Provide us with a few details, and our experts will prepare a preliminary analysis of your business's AI potential.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Delivered straight to your office address",
                  "No generic advice, tailored strictly to your industry",
                  "Absolutely no commitment required"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-body text-ink font-medium">
                    <span className="mt-[6px] flex-shrink-0 w-2 h-2 rounded-full bg-gold" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={0.2}>
              <div className="bg-white border border-light-grey rounded-[8px] p-8 shadow-card">
                {status === "success" ? (
                  <div className="text-center py-10">
                    <div className="w-16 h-16 bg-ivory rounded-full flex items-center justify-center mx-auto mb-6">
                      <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="font-display font-bold text-[24px] text-ink mb-3">Request Received</h3>
                    <p className="text-body text-mid-grey">
                      We're putting together your custom analysis. It will be delivered to the address provided shortly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="space-y-1.5">
                        <label htmlFor="name" className="text-[13px] font-bold text-ink uppercase tracking-wide">Full Name</label>
                        <input id="name" required className="w-full bg-ivory border border-light-grey px-4 py-3 rounded focus:outline-none focus:border-gold transition-colors text-ink placeholder:text-mid-grey/50" placeholder="Jane Doe" />
                      </div>
                      <div className="space-y-1.5">
                        <label htmlFor="email" className="text-[13px] font-bold text-ink uppercase tracking-wide">Work Email</label>
                        <input id="email" type="email" required className="w-full bg-ivory border border-light-grey px-4 py-3 rounded focus:outline-none focus:border-gold transition-colors text-ink placeholder:text-mid-grey/50" placeholder="jane@company.com" />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="space-y-1.5">
                        <label htmlFor="phone" className="text-[13px] font-bold text-ink uppercase tracking-wide">Phone Number</label>
                        <input id="phone" type="tel" required className="w-full bg-ivory border border-light-grey px-4 py-3 rounded focus:outline-none focus:border-gold transition-colors text-ink placeholder:text-mid-grey/50" placeholder="+1 (555) 000-0000" />
                      </div>
                      <div className="space-y-1.5">
                        <label htmlFor="company" className="text-[13px] font-bold text-ink uppercase tracking-wide">Company Name</label>
                        <input id="company" required className="w-full bg-ivory border border-light-grey px-4 py-3 rounded focus:outline-none focus:border-gold transition-colors text-ink placeholder:text-mid-grey/50" placeholder="Acme Corp" />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="address" className="text-[13px] font-bold text-ink uppercase tracking-wide">Office Delivery Address</label>
                      <input id="address" required className="w-full bg-ivory border border-light-grey px-4 py-3 rounded focus:outline-none focus:border-gold transition-colors text-ink placeholder:text-mid-grey/50" placeholder="123 Business Rd, Suite 100, City, Country" />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="request" className="text-[13px] font-bold text-ink uppercase tracking-wide">Any Specific Focus Areas?</label>
                      <textarea id="request" rows={3} className="w-full bg-ivory border border-light-grey px-4 py-3 rounded focus:outline-none focus:border-gold transition-colors text-ink placeholder:text-mid-grey/50 resize-none" placeholder="e.g., We spend too much time on manual data entry..." />
                    </div>

                    <button 
                      type="submit" 
                      disabled={status === "submitting"}
                      className="btn-primary w-full py-4 text-[15px] flex items-center justify-center gap-2"
                    >
                      {status === "submitting" ? (
                        <span className="opacity-80">Processing...</span>
                      ) : (
                        <>
                          Request Free Analysis
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
}
