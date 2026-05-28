"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  company: z.string().min(1, "Company name is required"),
  email: z.string().email("Please enter a valid email address"),
  service: z.string().min(1, "Please select a service of interest"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const services = [
  "Social Media Management",
  "Website Development",
  "Custom LLM & AI",
  "Slate Executive Assistant",
  "AI Capability Building",
  "General Enquiry",
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
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setFormState("success");
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
    "w-full font-sans text-[15px] text-ink bg-white border border-light-grey rounded-[8px] px-4 py-3 placeholder-mid-grey/60 outline-none transition-colors duration-150 focus:border-royal focus:ring-2 focus:ring-royal/10";
  const inputError =
    "border-red-400 focus:border-red-400 focus:ring-red-100";
  const labelBase =
    "block font-display font-semibold text-[13px] text-ink mb-1.5";
  const errorBase = "mt-1 font-sans text-[12px] text-red-500";

  return (
    <>
      {/* ── HERO ── */}
      <section className="bg-ink py-20">
        <div className="container-tbc">
          <span className="eyebrow">CONTACT</span>
          <hr className="gold-rule mb-6" />
          <h1 className="font-display font-bold text-white text-[clamp(32px,4.5vw,48px)] leading-[1.15] tracking-[-0.5px] max-w-2xl">
            Let&rsquo;s talk.
          </h1>
        </div>
      </section>

      {/* ── MAIN ── */}
      <section className="bg-ivory py-16">
        <div className="container-tbc">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left: Contact details */}
            <div>
              <span className="eyebrow">REACH US</span>
              <hr className="gold-rule mb-6" />
              <h2 className="font-display font-bold text-[26px] text-ink leading-[1.25] mb-8">
                We respond within one business day.
              </h2>

              <ul className="space-y-6">
                <li>
                  <p className="font-display font-semibold text-[12px] text-mid-grey uppercase tracking-[1.5px] mb-1.5">
                    Phone
                  </p>
                  <a
                    href="tel:+919354784377"
                    className="font-sans text-[16px] text-ink hover:text-royal transition-colors duration-150"
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
                    className="font-sans text-[16px] text-ink hover:text-royal transition-colors duration-150"
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
                    className="font-sans text-[16px] text-ink hover:text-royal transition-colors duration-150"
                  >
                    +91 93547 84377
                  </a>
                </li>
                <li>
                  <p className="font-display font-semibold text-[12px] text-mid-grey uppercase tracking-[1.5px] mb-1.5">
                    Address
                  </p>
                  <address className="font-sans text-[16px] text-ink not-italic leading-relaxed">
                    Kasana Tower, Alfa Marg,
                    <br />
                    Alpha-I Commercial Belt, Block A,
                    <br />
                    Alpha I, Greater Noida,
                    <br />
                    Uttar Pradesh, India
                  </address>
                </li>
              </ul>
            </div>

            {/* Right: Contact form */}
            <div>
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
                      stroke="#C8960C"
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
                    Thank you. We will respond within one business day.
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
                      {...register("name")}
                      className={`${inputBase} ${errors.name ? inputError : ""}`}
                    />
                    {errors.name && (
                      <p className={errorBase} role="alert">
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  {/* Company */}
                  <div>
                    <label htmlFor="company" className={labelBase}>
                      Company <span className="text-gold">*</span>
                    </label>
                    <input
                      id="company"
                      type="text"
                      autoComplete="organization"
                      placeholder="Your organisation"
                      {...register("company")}
                      className={`${inputBase} ${errors.company ? inputError : ""}`}
                    />
                    {errors.company && (
                      <p className={errorBase} role="alert">
                        {errors.company.message}
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
                      {...register("email")}
                      className={`${inputBase} ${errors.email ? inputError : ""}`}
                    />
                    {errors.email && (
                      <p className={errorBase} role="alert">
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  {/* Service of Interest */}
                  <div>
                    <label htmlFor="service" className={labelBase}>
                      Service of Interest <span className="text-gold">*</span>
                    </label>
                    <select
                      id="service"
                      {...register("service")}
                      className={`${inputBase} ${errors.service ? inputError : ""}`}
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Select a service
                      </option>
                      {services.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                    {errors.service && (
                      <p className={errorBase} role="alert">
                        {errors.service.message}
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className={labelBase}>
                      Message <span className="text-gold">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      placeholder="Tell us about your organisation, your challenges, and what you are hoping to achieve."
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
                    className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
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
                      "Send Message"
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
