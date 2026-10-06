"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Reveal from "@/components/Reveal";
import { track } from "@/lib/track";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  service: z.string().min(1, "Please select what you need"),
  message: z.string().min(10, "Message must be at least 10 characters"),
  foundVia: z.string().optional(),
});

type ContactFormData = z.infer<typeof contactSchema>;

const needOptions = [
  "Custom software",
  "Mobile app",
  "AI application",
  "Business automation",
  "Website",
  "MVP for a startup",
  "Something else",
];

const foundViaOptions = [
  "Google search",
  "ChatGPT or another AI assistant",
  "LinkedIn",
  "Instagram",
  "Referral",
  "Other",
];

export default function ContactClient() {
  const [formState, setFormState] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setFormState("loading");
    setErrorMessage("");
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
        body: JSON.stringify({ ...data, ...trackingData }),
      });
      if (res.ok) {
        setFormState("success");
        track("generate_lead", {
          form_location: typeof window !== "undefined" ? window.location.pathname : "",
          service: data.service,
          found_via: data.foundVia || "not given",
          page_path: typeof window !== "undefined" ? window.location.pathname : "",
        });
        reset();
      } else {
        const body = await res.json().catch(() => ({}));
        setErrorMessage(
          (body as { error?: string }).error ??
            "Failed to send message. Please try again."
        );
        setFormState("error");
      }
    } catch {
      setErrorMessage("An unexpected error occurred. Please try again.");
      setFormState("error");
    }
  };

  const inputBase =
    "w-full font-sans text-[15px] text-ink bg-white border border-light-grey rounded-[8px] px-4 py-3 placeholder-mid-grey/60 outline-none transition-colors duration-150 focus:border-royal focus:ring-2 focus:ring-royal/10 shadow-sm";
  const inputError =
    "border-red-400 focus:border-red-400 focus:ring-red-100";
  const labelBase =
    "block font-display font-semibold text-[13px] text-ink mb-1.5";
  const errorBase = "mt-1 font-sans text-[12px] text-red-500";

  return (
    <>
      {/* ── HERO ── */}
      <section className="bg-forest py-s7 relative overflow-hidden min-h-[350px] flex items-center border-b border-light-grey">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-forest via-forest to-royal/20" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-gold/10 via-transparent to-transparent" />
        </div>

        <div className="container-tbc relative z-10">
          <Reveal>
            <span className="eyebrow text-gold">CONTACT</span>
            <hr className="gold-rule mb-6" />
            <h1 className="font-display font-bold text-white text-[clamp(32px,4.5vw,48px)] leading-[1.15] tracking-[-0.5px] max-w-2xl">
              Let&rsquo;s talk.
            </h1>
          </Reveal>
        </div>
      </section>

      {/* ── MAIN ── */}
      <section className="bg-ivory py-s7 border-b border-light-grey">
        <div className="container-tbc">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left: Contact details */}
            <div className="flex flex-col h-full">
              <Reveal>
                <span className="eyebrow">REACH US</span>
                <hr className="gold-rule mb-6" />
                <h2 className="font-display font-bold text-[26px] text-ink leading-[1.25] mb-8">
                  We respond within one business day.
                </h2>

                <ul className="space-y-6 flex-1 flex flex-col">
                  <li>
                    <p className="font-display font-semibold text-[12px] text-mid-grey uppercase tracking-[1.5px] mb-1.5">
                      Phone
                    </p>
                    <a
                      href="tel:+919354784377"
                      className="font-sans text-[16px] text-ink hover:text-royal transition-colors duration-150 underline underline-offset-2"
                    >
                      +91 93547 84377
                    </a>
                  </li>
                  <li>
                    <p className="font-display font-semibold text-[12px] text-mid-grey uppercase tracking-[1.5px] mb-1.5">
                      Email
                    </p>
                    <a
                      href="mailto:info@turbobytesconsulting.com"
                      className="font-sans text-[16px] text-ink hover:text-royal transition-colors duration-150 underline underline-offset-2"
                    >
                      info@turbobytesconsulting.com
                    </a>
                  </li>
                  <li>
                    <p className="font-display font-semibold text-[12px] text-mid-grey uppercase tracking-[1.5px] mb-1.5">
                      WhatsApp
                    </p>
                    <a
                      href="https://wa.me/919354784377"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-sans text-[16px] text-ink hover:text-royal transition-colors duration-150 underline underline-offset-2"
                    >
                      +91 93547 84377
                    </a>
                  </li>
                  <li className="flex-1 flex flex-col">
                    <p className="font-display font-semibold text-[12px] text-mid-grey uppercase tracking-[1.5px] mb-1.5">
                      Address
                    </p>
                    <address className="font-sans text-[16px] text-ink not-italic leading-relaxed mb-2">
                      Kasana Tower, Alfa Marg,
                      <br />
                      Alpha-I Commercial Belt, Block A,
                      <br />
                      Alpha I, Greater Noida,
                      <br />
                      Uttar Pradesh, India
                    </address>
                    <p className="font-sans text-[14px] text-mid-grey mb-6">
                      Mon–Fri, 8:00–21:00 IST
                    </p>
                    
                    {/* Mini Map */}
                    <div className="w-full mt-auto flex-1 min-h-[220px] rounded-[6px] overflow-hidden shadow-card border border-light-grey relative group">
                      <div className="absolute inset-0 bg-forest/5 pointer-events-none group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.757887711463!2d77.514013!3d28.48425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cea7ab55191b9%3A0x6a2c3a5180f121d5!2sKasana%20Tower!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0, filter: "grayscale(100%) contrast(1.1) opacity(0.9)" }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Turbo Bytes Consulting Location"
                        className="relative z-0 group-hover:filter-none transition-all duration-500"
                      ></iframe>
                    </div>
                  </li>
                </ul>
              </Reveal>
            </div>

            {/* Right: Contact form */}
            <div>
              <Reveal delay={0.20}>
                <span className="eyebrow">SEND A MESSAGE</span>
                <hr className="gold-rule mb-6" />
                <h2 className="font-display font-bold text-[26px] text-ink leading-[1.25] mb-8">
                  Tell us about your organisation.
                </h2>

                {formState === "success" ? (
                  <div className="bg-white border border-light-grey rounded-[8px] shadow-card p-8 text-center">
                    <div className="w-12 h-12 rounded-full bg-gold/15 flex items-center justify-center mx-auto mb-4">
                      <svg
                        width="22"
                        height="22"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#1F8A5B"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                    </div>
                    <h3 className="font-display font-bold text-[20px] text-ink mb-2">
                      Message sent.
                    </h3>
                    <p className="font-sans text-[15px] text-mid-grey mb-6">
                      Thank you. We will be in touch within one business day.
                    </p>
                    <button
                      onClick={() => setFormState("idle")}
                      className="btn-ghost-gold"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    noValidate
                    className="bg-white border border-light-grey rounded-[8px] shadow-card p-7 space-y-5"
                  >
                    {/* Honeypot field (hidden from real users) */}
                    <div style={{ display: "none" }} aria-hidden="true">
                      <label htmlFor="website">Website</label>
                      <input
                        id="website"
                        type="text"
                        autoComplete="off"
                        tabIndex={-1}
                        {...register("website" as keyof ContactFormData)}
                      />
                    </div>

                    {/* Name */}
                    <div>
                      <label htmlFor="name" className={labelBase}>
                        Name <span className="text-gold">*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        autoComplete="name"
                        placeholder="Your full name"
                        aria-required="true"
                        aria-invalid={!!errors.name}
                        {...register("name")}
                        className={`${inputBase} ${errors.name ? inputError : ""}`}
                      />
                      {errors.name && (
                        <p className={errorBase} role="alert">
                          {errors.name.message}
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className={labelBase}>
                        Email <span className="text-gold">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        autoComplete="email"
                        placeholder="you@company.com"
                        aria-required="true"
                        aria-invalid={!!errors.email}
                        {...register("email")}
                        className={`${inputBase} ${errors.email ? inputError : ""}`}
                      />
                      {errors.email && (
                        <p className={errorBase} role="alert">
                          {errors.email.message}
                        </p>
                      )}
                    </div>

                    {/* Phone or WhatsApp (optional) */}
                    <div>
                      <label htmlFor="phone" className={labelBase}>
                        Phone or WhatsApp <span className="text-mid-grey font-normal">(optional)</span>
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        autoComplete="tel"
                        placeholder="+91 98765 43210"
                        {...register("phone")}
                        className={inputBase}
                      />
                    </div>

                    {/* What do you need? */}
                    <div>
                      <label htmlFor="service" className={labelBase}>
                        What do you need? <span className="text-gold">*</span>
                      </label>
                      <div className="relative">
                        <select
                          id="service"
                          aria-required="true"
                          aria-invalid={!!errors.service}
                          {...register("service")}
                          className={`${inputBase} appearance-none ${errors.service ? inputError : ""}`}
                          defaultValue=""
                        >
                          <option value="" disabled>
                            Select what you need
                          </option>
                          {needOptions.map((option) => (
                            <option key={option} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none">
                          <svg className="w-4 h-4 text-mid-grey" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </div>
                      {errors.service && (
                        <p className={errorBase} role="alert">
                          {errors.service.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="foundVia" className={labelBase}>
                        How did you find us? <span className="font-normal text-mid-grey">(optional)</span>
                      </label>
                      <div className="relative">
                        <select
                          id="foundVia"
                          {...register("foundVia")}
                          className={`${inputBase} appearance-none`}
                          defaultValue=""
                        >
                          <option value="">Select one</option>
                          {foundViaOptions.map((option) => (
                            <option key={option} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none">
                          <svg className="w-4 h-4 text-mid-grey" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* A line or two about it */}
                    <div>
                      <label htmlFor="message" className={labelBase}>
                        A line or two about it <span className="text-gold">*</span>
                      </label>
                      <textarea
                        id="message"
                        rows={3}
                        placeholder="e.g. We manage orders in Excel and want a system that connects to Tally."
                        aria-required="true"
                        aria-invalid={!!errors.message}
                        {...register("message")}
                        className={`${inputBase} resize-none ${errors.message ? inputError : ""}`}
                      />
                      {errors.message && (
                        <p className={errorBase} role="alert">
                          {errors.message.message}
                        </p>
                      )}
                    </div>

                    {/* API error state */}
                    {formState === "error" && errorMessage && (
                      <div
                        className="bg-red-50 border border-red-200 rounded-[6px] px-4 py-3"
                        role="alert"
                      >
                        <p className="font-sans text-[14px] text-red-600">
                          {errorMessage}
                        </p>
                      </div>
                    )}

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={formState === "loading"}
                      className="btn-gold w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed py-3 text-[16px]"
                    >
                      {formState === "loading" ? (
                        <span className="flex items-center gap-2">
                          <svg
                            className="animate-spin h-4 w-4 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            />
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                            />
                          </svg>
                          Sending&hellip;
                        </span>
                      ) : (
                        "Send message"
                      )}
                    </button>
                  </form>
                )}
              </Reveal>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
