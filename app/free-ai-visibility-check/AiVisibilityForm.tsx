"use client";

import { useState } from "react";
import Link from "next/link";
import { track } from "@/lib/track";

export default function AiVisibilityForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const company = formData.get("company") as string;
    const website = formData.get("website_url") as string;
    const industry = formData.get("industry") as string;
    const questions = formData.get("buyer_questions") as string;
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const honeypot = formData.get("website") as string; // honeypot

    const message = [
      `AI Visibility Check Request`,
      `Company: ${company}`,
      `Website: ${website}`,
      `Industry: ${industry}`,
      `Key Buyer Questions:\n${questions}`
    ].join("\n\n");

    try {
      let trackingData = {};
      if (typeof window !== "undefined") {
        trackingData = {
          landingPage: sessionStorage.getItem("landingPage") || null,
          referrerPath: sessionStorage.getItem("referrerPath") || null,
        };
      }

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name || "Not provided",
          company: company,
          email: email,
          phone: phone || undefined,
          service: "AI Visibility Check",
          message: message,
          foundVia: "AI Visibility Check Page",
          website: honeypot || undefined,
          ...trackingData,
        }),
      });

      const result = await res.json().catch(() => ({}));
      if (!res.ok) {
        throw new Error(result.error || "Failed to submit request.");
      }

      setStatus("success");
      track("generate_lead", {
        form_location: "/free-ai-visibility-check",
        service: "AI Visibility Check",
        found_via: "AI Visibility Check Form",
        page_path: "/free-ai-visibility-check",
      });
    } catch (err) {
      console.error(err);
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "An unexpected error occurred. Please try again.");
    }
  };

  const inputClass = "w-full font-sans text-[15px] text-ink bg-white border border-light-grey rounded-[8px] px-4 py-3 placeholder-mid-grey/60 outline-none transition-colors duration-150 focus:border-royal focus:ring-2 focus:ring-royal/10 shadow-sm";
  const labelClass = "block text-[14px] font-semibold text-ink mb-1.5";

  if (status === "success") {
    return (
      <div className="bg-white border border-light-grey rounded-[8px] p-8 shadow-card text-center">
        <div className="w-12 h-12 bg-forest/10 rounded-full flex items-center justify-center mx-auto mb-4 text-forest">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-display font-bold text-[24px] text-ink mb-2">
          Visibility check request received.
        </h3>
        <p className="text-body text-mid-grey leading-relaxed max-w-md mx-auto mb-6">
          Our team will analyze your company presence across ChatGPT, Gemini, and Perplexity for your specified queries and send your diagnostic report within one business day.
        </p>
        <Link href="/" className="btn-gold inline-flex items-center min-h-[44px] px-6 text-[15px]">
          Return to home page
        </Link>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white border border-light-grey rounded-[8px] p-6 sm:p-8 shadow-card">
      {status === "error" && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 text-[14px] rounded-[6px]">
          {errorMessage}
        </div>
      )}

      {/* Honeypot */}
      <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label className={labelClass} htmlFor="company">Company name *</label>
          <input
            id="company"
            name="company"
            type="text"
            required
            placeholder="Acme Industrial Ltd"
            className={inputClass}
          />
        </div>
        <div>
          <label className={labelClass} htmlFor="website_url">Website URL *</label>
          <input
            id="website_url"
            name="website_url"
            type="url"
            required
            placeholder="https://example.com"
            className={inputClass}
          />
        </div>
      </div>

      <div className="mb-4">
        <label className={labelClass} htmlFor="industry">Industry / Sector *</label>
        <input
          id="industry"
          name="industry"
          type="text"
          required
          placeholder="e.g. Precision Manufacturing, Commercial Solar, B2B Logistics"
          className={inputClass}
        />
      </div>

      <div className="mb-4">
        <label className={labelClass} htmlFor="buyer_questions">
          2 or 3 questions your buyers ask when looking for suppliers *
        </label>
        <textarea
          id="buyer_questions"
          name="buyer_questions"
          rows={3}
          required
          placeholder="e.g. Which manufacturers in India provide ISO-certified precision CNC components?"
          className={inputClass}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label className={labelClass} htmlFor="name">Your name *</label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Rohan Sharma"
            className={inputClass}
          />
        </div>
        <div>
          <label className={labelClass} htmlFor="email">Work email *</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="rohan@example.com"
            className={inputClass}
          />
        </div>
      </div>

      <div className="mb-6">
        <label className={labelClass} htmlFor="phone">Phone number (optional)</label>
        <input
          id="phone"
          name="phone"
          type="tel"
          placeholder="+91 98765 43210"
          className={inputClass}
        />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="btn-gold w-full min-h-[48px] text-[16px] font-semibold transition-all"
      >
        {status === "submitting" ? "Submitting request..." : "Request free AI visibility report"}
      </button>

      <p className="text-[13px] text-mid-grey text-center mt-4">
        Confidential. We will not share your domain or queries with any third party.
      </p>
    </form>
  );
}