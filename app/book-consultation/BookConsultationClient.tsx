"use client";

import { useEffect } from "react";
import Script from "next/script";
import Link from "next/link";
import { track } from "@/lib/track";
import CallProcess from "@/components/CallProcess";

const CALENDLY_URL =
  "https://calendly.com/harshvardhan-o-1z/tbc-quick-consultation";

export default function BookConsultationClient() {
  useEffect(() => {
    const handleMessage = (e: MessageEvent) => {
      if (e.origin === "https://calendly.com" && e.data?.event === "calendly.event_scheduled") {
        track("calendly_booked", {
          page_path: typeof window !== "undefined" ? window.location.pathname : "/book-consultation",
        });
      }
    };
    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

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
            A focused 30-minute conversation about your software, automation or AI plans. We respond within one business day.
          </p>
        </div>
      </section>

      {/* ── MAIN CONTENT ── */}
      <section className="bg-ivory py-16">
        <div className="container-tbc">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left: What happens on the call (on mobile: order-2, on desktop: order-1) */}
            <div className="order-2 lg:order-1">
              <CallProcess variant="compact" />

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

            {/* Right: Calendly embed (on mobile: order-1, on desktop: order-2) */}
            <div className="order-1 lg:order-2">
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
