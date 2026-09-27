import type { Metadata } from "next";
import { Inter, DM_Sans } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import CookieBanner from "@/components/CookieBanner";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import BackToTop from "@/components/BackToTop";
import { GoogleTagManager } from "@next/third-parties/google";
import GTMTracker from "@/components/GTMTracker";
import Script from "next/script";

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
    default: "Software Development & AI Consulting in Delhi NCR | Turbo Bytes Consulting",
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
  robots: { index: true, follow: true },
  alternates: {
    types: {
      "application/rss+xml": "/feed.xml",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-IN" className={`${inter.variable} ${dmSans.variable}`}>
      <head>
        <link rel="alternate" type="application/rss+xml" title="Turbo Bytes Consulting blog" href="/feed.xml" />
        <script
          id="google-consent-mode"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){window.dataLayer.push(arguments);}
              window.gtag = gtag;
              gtag('consent', 'default', {
                'ad_storage': 'denied',
                'ad_user_data': 'denied',
                'ad_personalization': 'denied',
                'analytics_storage': 'denied',
                'wait_for_update': 500
              });
              if (document.cookie.indexOf('CookieConsent=true') !== -1) {
                gtag('consent', 'update', {
                  'analytics_storage': 'granted'
                });
              }
            `,
          }}
        />
      </head>
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

        {/* Analytics and Tracking */}
        <Analytics />
        <SpeedInsights />
        <GoogleTagManager gtmId="GTM-W6MCQF5V" />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-1H5E3Y9YRF"
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            gtag('js', new Date());
            gtag('config', 'G-1H5E3Y9YRF');
          `}
        </Script>
        <GTMTracker />

        {/* Global JSON-LD Schema Graph for GEO/SEO */}
        <script
          id="schema-graph"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": ["Organization", "ProfessionalService"],
                  "@id": "https://turbobytesconsulting.com/#organization",
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
                  "areaServed": ["Noida", "Greater Noida", "Delhi NCR", "India"],
                  "founder": {
                    "@id": "https://turbobytesconsulting.com/#harsh"
                  },
                  "sameAs": [
                    "https://x.com/social_TBC",
                    "https://instagram.com/turbobytesconsulting"
                  ]
                },
                {
                  "@type": "WebSite",
                  "@id": "https://turbobytesconsulting.com/#website",
                  "url": "https://turbobytesconsulting.com",
                  "name": "Turbo Bytes Consulting",
                  "alternateName": "TBC",
                  "publisher": {
                    "@id": "https://turbobytesconsulting.com/#organization"
                  },
                  "inLanguage": "en-IN"
                },
                {
                  "@type": "Person",
                  "@id": "https://turbobytesconsulting.com/#harsh",
                  "name": "Harshvardhan Chauhan",
                  "jobTitle": "Founder",
                  "worksFor": {
                    "@id": "https://turbobytesconsulting.com/#organization"
                  },
                  "url": "https://turbobytesconsulting.com/about"
                }
              ]
            })
          }}
        />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
