"use client";

import { useState } from "react";
import Reveal from "@/components/Reveal";

export default function FreeAnalysisForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      company: formData.get("company"),
      address: formData.get("address"),
      request: formData.get("request"),
      website: formData.get("website"),
    };

    try {
      const res = await fetch("/api/analysis", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();
      if (!res.ok) throw new Error(result.error || "Failed to submit request.");
      
      setStatus("success");
    } catch (err) {
      console.error(err);
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "An error occurred.");
    }
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
                Provide us with a few details, and our experts will prepare a preliminary analysis of your business&apos;s AI potential.
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
                      We&apos;re putting together your custom analysis. It will be delivered to the address provided shortly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Honeypot field (hidden from real users) */}
                    <div style={{ display: "none" }} aria-hidden="true">
                      <label htmlFor="website">Website</label>
                      <input
                        id="website"
                        name="website"
                        type="text"
                        autoComplete="off"
                        tabIndex={-1}
                      />
                    </div>
                    
                    {status === "error" && (
                      <div className="bg-red-50 text-red-600 p-4 rounded text-sm mb-4">
                        {errorMessage}
                      </div>
                    )}
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="space-y-1.5">
                        <label htmlFor="name" className="text-[13px] font-bold text-ink uppercase tracking-wide">Full Name</label>
                        <input id="name" name="name" required className="w-full bg-ivory border border-light-grey px-4 py-3 rounded focus:outline-none focus:border-gold transition-colors text-ink placeholder:text-mid-grey/50" placeholder="Jane Doe" />
                      </div>
                      <div className="space-y-1.5">
                        <label htmlFor="email" className="text-[13px] font-bold text-ink uppercase tracking-wide">Work Email</label>
                        <input id="email" name="email" type="email" required className="w-full bg-ivory border border-light-grey px-4 py-3 rounded focus:outline-none focus:border-gold transition-colors text-ink placeholder:text-mid-grey/50" placeholder="jane@company.com" />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="space-y-1.5">
                        <label htmlFor="phone" className="text-[13px] font-bold text-ink uppercase tracking-wide">Phone Number</label>
                        <input id="phone" name="phone" type="tel" required className="w-full bg-ivory border border-light-grey px-4 py-3 rounded focus:outline-none focus:border-gold transition-colors text-ink placeholder:text-mid-grey/50" placeholder="+1 (555) 000-0000" />
                      </div>
                      <div className="space-y-1.5">
                        <label htmlFor="company" className="text-[13px] font-bold text-ink uppercase tracking-wide">Company Name</label>
                        <input id="company" name="company" required className="w-full bg-ivory border border-light-grey px-4 py-3 rounded focus:outline-none focus:border-gold transition-colors text-ink placeholder:text-mid-grey/50" placeholder="Acme Corp" />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="address" className="text-[13px] font-bold text-ink uppercase tracking-wide">Office Delivery Address</label>
                      <input id="address" name="address" required className="w-full bg-ivory border border-light-grey px-4 py-3 rounded focus:outline-none focus:border-gold transition-colors text-ink placeholder:text-mid-grey/50" placeholder="123 Business Rd, Suite 100, City, Country" />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="request" className="text-[13px] font-bold text-ink uppercase tracking-wide">Any Specific Focus Areas?</label>
                      <textarea id="request" name="request" rows={3} className="w-full bg-ivory border border-light-grey px-4 py-3 rounded focus:outline-none focus:border-gold transition-colors text-ink placeholder:text-mid-grey/50 resize-none" placeholder="e.g., We spend too much time on manual data entry..." />
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
