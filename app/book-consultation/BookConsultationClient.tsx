"use client";

import { useEffect } from "react";
import Link from "next/link";

const CALENDLY_URL = "https://calendly.com/turbobytesconsulting";

export default function BookConsultationClient() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      {/* ── HERO ── */}
      <section className="bg-ink py-20">
        <div className="container-tbc">
          <span className="eyebrow">BOOK A CONSULTATION</span>
          <hr className="gold-rule mb-6" />
          <h1 className="font-display font-bold text-white text-[clamp(32px,4.5vw,48px)] leading-[1.15] tracking-[-0.5px] max-w-3xl mb-5">
            Request a consultation.
          </h1>
          <p className="font-sans text-[17px] text-white/70 leading-relaxed max-w-2xl">
            We will respond within one business day. No sales process. Just a
            focused conversation about your organisation and where AI can have
            the highest impact.
          </p>
        </div>
      </section>

      {/* ── MAIN CONTENT ── */}
      <section className="bg-ivory py-16">
        <div className="container-tbc">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left: What to expect */}
            <div>
              <span className="eyebrow">WHAT TO EXPECT</span>
              <hr className="gold-rule mb-6" />
              <h2 className="font-display font-bold text-[26px] text-ink leading-[1.25] mb-8">
                A structured 30-minute conversation.
              </h2>

              <ul className="space-y-5 mb-10">
                {[
                  "A 30-minute structured conversation",
                  "We will ask about your organisation, your challenges, and your goals",
                  "We will tell you, honestly, whether and how we can help",
                  "No commitment required — just clarity",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span
                      className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-gold flex items-center justify-center"
                      aria-hidden="true"
                    >
                      <svg
                        width="10"
                        height="8"
                        viewBox="0 0 10 8"
                        fill="none"
                        aria-hidden="true"
                      >
                        <path
                          d="M1 4L3.5 6.5L9 1"
                          stroke="#0D1B2A"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <span className="font-sans text-[16px] text-ink leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="border-t border-light-grey pt-8">
                <h3 className="font-display font-semibold text-[16px] text-ink mb-5">
                  Prefer to reach out directly?
                </h3>
                <ul className="space-y-4">
                  <li>
                    <a
                      href="tel:+919354784377"
                      className="flex items-center gap-3 font-sans text-[15px] text-mid-grey hover:text-royal transition-colors duration-150 group"
                    >
                      <span
                        className="w-9 h-9 rounded-full bg-light-grey flex items-center justify-center group-hover:bg-royal/10 transition-colors duration-150"
                        aria-hidden="true"
                      >
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-royal"
                        >
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.5a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.62 2.74h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 10a16 16 0 0 0 5.91 5.91l.72-.87a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                        </svg>
                      </span>
                      +91 93547 84377
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://wa.me/919354784377"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 font-sans text-[15px] text-mid-grey hover:text-royal transition-colors duration-150 group"
                    >
                      <span
                        className="w-9 h-9 rounded-full bg-light-grey flex items-center justify-center group-hover:bg-royal/10 transition-colors duration-150"
                        aria-hidden="true"
                      >
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="text-royal"
                        >
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                        </svg>
                      </span>
                      WhatsApp
                    </a>
                  </li>
                  <li>
                    <a
                      href="mailto:info@turbobytesconsulting.com"
                      className="flex items-center gap-3 font-sans text-[15px] text-mid-grey hover:text-royal transition-colors duration-150 group"
                    >
                      <span
                        className="w-9 h-9 rounded-full bg-light-grey flex items-center justify-center group-hover:bg-royal/10 transition-colors duration-150"
                        aria-hidden="true"
                      >
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-royal"
                        >
                          <rect width="20" height="16" x="2" y="4" rx="2" />
                          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                        </svg>
                      </span>
                      info@turbobytesconsulting.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right: Calendly embed */}
            <div>
              <span className="eyebrow">SCHEDULE ONLINE</span>
              <hr className="gold-rule mb-6" />
              <h2 className="font-display font-bold text-[26px] text-ink leading-[1.25] mb-6">
                Pick a time that works for you.
              </h2>
              <div
                className="bg-white rounded-[8px] border border-light-grey shadow-card overflow-hidden"
                id="calendly-placeholder"
              >
                <div
                  className="calendly-inline-widget"
                  data-url={CALENDLY_URL}
                  style={{ minWidth: "320px", height: "630px" }}
                />
                <noscript>
                  <div className="p-8 text-center">
                    <p className="font-sans text-[15px] text-mid-grey mb-4">
                      Calendar loading...
                    </p>
                    <Link
                      href={CALENDLY_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary"
                    >
                      Book directly on Calendly
                    </Link>
                  </div>
                </noscript>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
