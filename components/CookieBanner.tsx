"use client";

import { useState, useEffect } from "react";
import CookieConsent from "react-cookie-consent";
import Script from "next/script";

export default function CookieBanner() {
  const [hasConsent, setHasConsent] = useState(false);

  useEffect(() => {
    // Check if the cookie exists
    if (document.cookie.includes("CookieConsent=true")) {
      setHasConsent(true);
    }
  }, []);

  return (
    <>
      <CookieConsent
        location="bottom"
        buttonText="Accept All"
        declineButtonText="Essential Only"
        enableDeclineButton
        cookieName="CookieConsent"
        style={{ 
          background: "#13563A", // forest
          borderTop: "1px solid #A7EBC8", // mint
          fontFamily: "var(--font-inter, sans-serif)", 
          zIndex: 99999,
          padding: "10px"
        }}
        buttonStyle={{ 
          backgroundColor: "#A7EBC8", 
          color: "#0B1A12", 
          fontSize: "14px", 
          fontWeight: "600", 
          borderRadius: "6px",
          padding: "8px 16px"
        }}
        declineButtonStyle={{ 
          backgroundColor: "transparent", 
          color: "#F5F5F0", 
          fontSize: "14px", 
          border: "1px solid #F5F5F0", 
          borderRadius: "6px",
          padding: "8px 16px"
        }}
        expires={365}
        onAccept={() => {
          setHasConsent(true);
          if (typeof window !== "undefined") {
            const win = window as unknown as { gtag?: (...args: unknown[]) => void };
            if (typeof win.gtag === "function") {
              win.gtag("consent", "update", {
                analytics_storage: "granted",
              });
            }
            window.dispatchEvent(new Event("cookie-consent-change"));
          }
        }}
        onDecline={() => {
          // stays denied
          if (typeof window !== "undefined") {
            window.dispatchEvent(new Event("cookie-consent-change"));
          }
        }}
      >
        <span className="text-[14px] text-ivory">
          We use cookies to analyse site traffic and improve your experience. By clicking &quot;Accept All&quot;, you consent to our use of analytics tools.
        </span>
      </CookieConsent>

      {hasConsent && (
        <Script id="clarity" strategy="afterInteractive">{`
          (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window,document,"clarity","script","wy3ihoq9t1");
        `}</Script>
      )}
    </>
  );
}
