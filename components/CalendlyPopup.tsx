"use client";

import Script from "next/script";

const CALENDLY_URL =
  "https://calendly.com/harshvardhan-o-1z/tbc-quick-consultation";

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (opts: { url: string }) => void;
    };
  }
}

export default function CalendlyPopup({
  label = "Request a Consultation",
  className,
}: {
  label?: string;
  className?: string;
}) {
  const open = () => {
    if (typeof window !== "undefined" && window.Calendly) {
      window.Calendly.initPopupWidget({ url: CALENDLY_URL });
    }
  };

  return (
    <>
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
      />
      <link
        rel="stylesheet"
        href="https://assets.calendly.com/assets/external/widget.css"
      />
      <button onClick={open} className={className ?? "btn-primary"}>
        {label}
      </button>
    </>
  );
}
