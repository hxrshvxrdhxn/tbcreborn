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
          background: "#080C16", // ink
          borderTop: "1px solid #D4AF37", // gold
          fontFamily: "var(--font-dm-sans, sans-serif)", 
          zIndex: 99999,
          padding: "10px"
        }}
        buttonStyle={{ 
          backgroundColor: "#D4AF37", 
          color: "#080C16", 
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
        onAccept={() => setHasConsent(true)}
      >
        <span className="text-[14px] text-ivory">
          We use cookies to analyze site traffic and optimize your experience. By clicking &quot;Accept All&quot;, you consent to our use of analytics tools.
        </span>
      </CookieConsent>

      {hasConsent && (
        <>
          <Script
            src="https://www.googletagmanager.com/gtag/js?id=G-1H5E3Y9YRF"
            strategy="afterInteractive"
          />
          <Script id="ga4" strategy="afterInteractive">{`
            window.dataLayer=window.dataLayer||[];
            function gtag(){dataLayer.push(arguments);}
            gtag('js',new Date());
            gtag('config','G-1H5E3Y9YRF');
          `}</Script>

          <Script id="clarity" strategy="afterInteractive">{`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window,document,"clarity","script","wy3ihoq9t1");
          `}</Script>
        </>
      )}
    </>
  );
}
