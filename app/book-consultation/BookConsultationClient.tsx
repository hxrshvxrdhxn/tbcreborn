"use client";

import Script from "next/script";
import Link from "next/link";

const CALENDLY_URL =
  "https://calendly.com/harshvardhan-o-1z/tbc-quick-consultation";

export default function BookConsultationClient() {
  return (
    <>
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
      />

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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
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
                      <svg width="10" height="8" viewBox="0 0 10 8" fill="none" aria-hidden="true">
                        <path d="M1 4L3.5 6.5L9 1" stroke="#0D1B2A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span className="font-sans text-[16px] text-ink leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="border-t border-light-grey pt-8">
                <h3 className="font-display font-semibold text-[16px] text-ink mb-5">
                  Prefer to reach out directly?
                </h3>
                <ul className="space-y-4">
                  {[
                    { href: "tel:+919354784377", icon: "phone", label: "+91 93547 84377" },
                    { href: "https://wa.me/919354784377", icon: "wa", label: "WhatsApp", external: true },
                    { href: "mailto:info@turbobytesconsulting.com", icon: "mail", label: "info@turbobytesconsulting.com" },
                  ].map(({ href, label, external }) => (
                    <li key={href}>
                      <a
                        href={href}
                        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                        className="font-sans text-[15px] text-mid-grey hover:text-royal transition-colors duration-150"
                      >
                        {label}
                      </a>
                    </li>
                  ))}
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
              <div className="bg-white rounded-[8px] border border-light-grey shadow-card overflow-hidden w-full">
                <div
                  className="calendly-inline-widget w-full"
                  data-url={CALENDLY_URL}
                  style={{ minWidth: "320px", height: "700px" }}
                />
                <noscript>
                  <div className="p-8 text-center">
                    <p className="font-sans text-[15px] text-mid-grey mb-4">
                      Please enable JavaScript to load the booking calendar.
                    </p>
                    <Link href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
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
