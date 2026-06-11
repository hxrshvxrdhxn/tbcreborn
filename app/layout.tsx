import type { Metadata } from "next";
import { Inter, DM_Sans } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import CookieBanner from "@/components/CookieBanner";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import BackToTop from "@/components/BackToTop";
import { GoogleAnalytics } from "@next/third-parties/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "AI Consulting & Strategy | Turbo Bytes Consulting",
    template: "%s | Turbo Bytes Consulting",
  },
  description:
    "Turbo Bytes Consulting is an AI-native management and technology consultancy. We integrate AI into your marketing, operations, and systems — completely.",
  metadataBase: new URL("https://turbobytesconsulting.com"),
  openGraph: {
    type: "website",
    siteName: "Turbo Bytes Consulting",
    locale: "en_IN",
    images: [{ url: "/og-default.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@social_TBC",
    creator: "@social_TBC",
  },
  icons: {
    icon: "/icon.svg?v=2",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-IN" className={`${inter.variable} ${dmSans.variable}`}>
      <body className="bg-ivory text-ink antialiased">
        <SmoothScrollProvider>
          {/* Skip-to-content — visible only on keyboard focus */}
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:bg-gold focus:text-ink focus:font-display focus:font-semibold focus:text-sm focus:rounded focus:shadow-card"
          >
            Skip to main content
          </a>
          <Navigation />
          <main id="main-content">{children}</main>
        <Footer />
        <WhatsAppButton />
        <BackToTop />
        <CookieBanner />

        {/* Analytics and Tracking for Email Campaigns */}
        <Analytics />
        <SpeedInsights />
        {process.env.NEXT_PUBLIC_GA_ID && <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />}
        {process.env.NEXT_PUBLIC_CLARITY_ID && (
          <Script id="ms-clarity" strategy="afterInteractive">
            {`
              (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "${process.env.NEXT_PUBLIC_CLARITY_ID}");
            `}
          </Script>
        )}

        {/* Global JSON-LD Schema for GEO/SEO */}
        <Script id="schema-org" type="application/ld+json" strategy="afterInteractive" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": ["Organization", "ProfessionalService"],
            "name": "Turbo Bytes Consulting",
            "url": "https://turbobytesconsulting.com",
            "logo": "https://turbobytesconsulting.com/og-default.png",
            "telephone": "+919354784377",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Kasana Tower, Alfa Marg, Alpha-I Commercial Belt, Block A, Alpha I",
              "addressLocality": "Greater Noida",
              "addressRegion": "Uttar Pradesh",
              "postalCode": "201310",
              "addressCountry": "IN"
            },
            "sameAs": [
              "https://x.com/social_TBC",
              "https://instagram.com/turbobytesconsulting"
            ]
          })
        }} />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
