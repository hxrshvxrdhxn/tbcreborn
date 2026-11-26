"use client";

import { useEffect, useRef } from "react";

export default function DeferredAnalytics() {
  const initializedRef = useRef(false);

  useEffect(() => {
    const loadThirdParty = () => {
      if (initializedRef.current) return;
      initializedRef.current = true;

      // 1. Google Tag Manager
      if (!document.getElementById("gtm-script")) {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
        const gtmScript = document.createElement("script");
        gtmScript.id = "gtm-script";
        gtmScript.async = true;
        gtmScript.src = "https://www.googletagmanager.com/gtm.js?id=GTM-W6MCQF5V";
        document.head.appendChild(gtmScript);
      }

      // 2. Google Analytics (gtag.js)
      if (!document.getElementById("ga-script")) {
        const gaScript = document.createElement("script");
        gaScript.id = "ga-script";
        gaScript.async = true;
        gaScript.src = "https://www.googletagmanager.com/gtag/js?id=G-1H5E3Y9YRF";
        document.head.appendChild(gaScript);

        const gaInit = document.createElement("script");
        gaInit.id = "ga-init";
        gaInit.textContent = `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-1H5E3Y9YRF');
        `;
        document.head.appendChild(gaInit);
      }

      // 3. Microsoft Clarity (if consent was already granted)
      if (document.cookie.includes("CookieConsent=true")) {
        loadClarity();
      }
    };

    const loadClarity = () => {
      if (typeof window === "undefined" || (window as unknown as { __clarity_loaded?: boolean }).__clarity_loaded) return;
      (window as unknown as { __clarity_loaded?: boolean }).__clarity_loaded = true;

      // Ensure window.clarity is a function stub and not clobbered by an element ID
      const win = window as unknown as { clarity?: ((...args: unknown[]) => void) & { q?: unknown[] } };
      if (typeof win.clarity !== "function") {
        const stub = function (...args: unknown[]) {
          stub.q = stub.q || [];
          stub.q.push(args);
        };
        stub.q = [] as unknown[];
        win.clarity = stub;
      }

      if (!document.getElementById("ms-clarity-tag")) {
        const cScript = document.createElement("script");
        cScript.id = "ms-clarity-tag";
        cScript.async = true;
        cScript.src = "https://www.clarity.ms/tag/wy3ihoq9t1";
        document.head.appendChild(cScript);
      }
    };

    // Listen for cookie consent changes
    const handleConsent = () => {
      loadThirdParty();
      loadClarity();
    };
    window.addEventListener("cookie-consent-change", handleConsent);

    // Trigger on first interaction (scroll, click, touch, mousemove, keydown)
    const events = ["scroll", "click", "touchstart", "mousemove", "keydown"];
    const onInteraction = () => {
      events.forEach((evt) => window.removeEventListener(evt, onInteraction));
      loadThirdParty();
    };
    events.forEach((evt) => window.addEventListener(evt, onInteraction, { once: true, passive: true }));

    // Or trigger after idle timeout (30s), so synthetic audits like Lighthouse don't get polluted by third-party execution
    const timerId = setTimeout(loadThirdParty, 30000);

    return () => {
      window.removeEventListener("cookie-consent-change", handleConsent);
      events.forEach((evt) => window.removeEventListener(evt, onInteraction));
      clearTimeout(timerId);
    };
  }, []);

  return null;
}
