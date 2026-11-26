"use client";

import { useEffect, useState } from "react";

export default function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (typeof document !== "undefined") {
      const hasAnswered = document.cookie.includes("CookieConsent=");
      if (!hasAnswered) {
        setShow(true);
      }
    }
  }, []);

  if (!show) return null;

  const onAccept = () => {
    document.cookie = "CookieConsent=true; max-age=31536000; path=/; SameSite=Lax";
    setShow(false);
    if (typeof window !== "undefined") {
      const win = window as unknown as { gtag?: (...args: unknown[]) => void };
      if (typeof win.gtag === "function") {
        win.gtag("consent", "update", {
          analytics_storage: "granted",
        });
      }
      window.dispatchEvent(new Event("cookie-consent-change"));
    }
  };

  const onDecline = () => {
    document.cookie = "CookieConsent=false; max-age=31536000; path=/; SameSite=Lax";
    setShow(false);
    if (typeof window !== "undefined") {
      window.dispatchEvent(new Event("cookie-consent-change"));
    }
  };

  return (
    <aside
      aria-label="Cookie consent banner"
      className="fixed bottom-0 inset-x-0 z-[99999] p-3 sm:p-4 text-ivory flex flex-col sm:flex-row items-center justify-between gap-3 shadow-2xl"
      style={{
        background: "#13563A",
        borderTop: "1px solid #A7EBC8",
        fontFamily: "var(--font-inter, sans-serif)",
      }}
    >
      <div className="flex-1 text-[13px] sm:text-[14px] leading-snug">
        We use cookies to analyse site traffic and improve your experience. By clicking &quot;Accept All&quot;, you consent to our use of analytics tools.
      </div>
      <div className="flex items-center gap-2 flex-shrink-0 w-full sm:w-auto justify-end">
        <button
          type="button"
          onClick={onDecline}
          aria-label="Essential Only"
          className="flex-1 sm:flex-initial text-center px-4 py-2 text-[14px] font-medium text-ivory border border-ivory rounded-[6px] hover:bg-white/10 transition-colors"
        >
          Essential Only
        </button>
        <button
          type="button"
          onClick={onAccept}
          aria-label="Accept All"
          className="flex-1 sm:flex-initial text-center px-4 py-2 text-[14px] font-semibold text-[#0B1A12] bg-[#A7EBC8] rounded-[6px] hover:bg-[#8ee0b4] transition-colors"
        >
          Accept All
        </button>
      </div>
    </aside>
  );
}
