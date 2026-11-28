import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import MobileActionBar from "@/components/MobileActionBar";
import CookieBanner from "@/components/CookieBanner";
import VisitBeacon from "@/components/VisitBeacon";
import StickyCta from "@/components/StickyCta";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import BackToTop from "@/components/BackToTop";
import DeferredAnalytics from "@/components/DeferredAnalytics";
import GTMTracker from "@/components/GTMTracker";

// Self-hosted so every build ships identical font class names (no Google Fonts fetch at build time).
// Inter is the closest open equivalent to Apple's San Francisco: tall x-height, open shapes, easy to read.
const inter = localFont({
  src: "./fonts/Inter-var.woff2",
  variable: "--font-inter",
  weight: "100 900",
  display: "swap",
  fallback: ["-apple-system", "BlinkMacSystemFont", "Segoe UI", "Helvetica Neue", "Arial", "sans-serif"],
});

export const metadata: Metadata = {
  title: {
    default: "Your Own Private LLM, Built on Your Company Data | Turbo Bytes Consulting",
    template: "%s | Turbo Bytes Consulting",
  },
  description:
    "We train your company its own private LLM on your own data, then build the agents, automations and tools around it. Also: custom software, digital transformation and AEO/SEO/GEO. Serving clients worldwide.",
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
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180" },
    ],
  },
  manifest: "/site.webmanifest",
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
    <html lang="en-IN" className={`${inter.variable}`}>
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
                'analytics_storage': 'denied'
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
        <StickyCta />
        <WhatsAppButton />
        <MobileActionBar />
        <BackToTop />
        <CookieBanner />
        <VisitBeacon />

        {/* Analytics and Tracking (Deferred until idle or first interaction to protect CWV & TBT) */}
        <DeferredAnalytics />
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
                  "description": "Technology consultancy that builds companies their own private LLM trained on their data, plus the agents, automations and software around it.",
                  "knowsAbout": ["Large language models", "On-premise AI", "AI training", "Technology strategy", "Technology audit", "AI readiness", "Business process improvement", "Custom software"],
                  "url": "https://turbobytesconsulting.com",
                  "logo": "https://turbobytesconsulting.com/logo-square.png",
                  "telephone": "+919354784377",
                  "email": "info@turbobytesconsulting.com",
                  "hasMap": "https://share.google/jp3MGXYa4u27I4bcq",
                  "contactPoint": [
                    {
                      "@type": "ContactPoint",
                      "telephone": "+919354784377",
                      "contactType": "customer service",
                      "email": "info@turbobytesconsulting.com",
                      "areaServed": ["Worldwide", "IN", "GB", "US", "AE", "SA", "SG", "AU"],
                      "availableLanguage": ["English", "Hindi"]
                    }
                  ],
                  "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "Kasana Tower, Alfa Marg, Alpha-I Commercial Belt, Block A, Alpha I",
                    "addressLocality": "Greater Noida",
                    "addressRegion": "Uttar Pradesh",
                    "postalCode": "201310",
                    "addressCountry": "IN"
                  },
                  "areaServed": ["Worldwide", "India", "United Kingdom", "United States", "United Arab Emirates", "Saudi Arabia", "Singapore", "Australia"],
                  "openingHoursSpecification": [
                    {
                      "@type": "OpeningHoursSpecification",
                      "dayOfWeek": [
                        "Monday",
                        "Tuesday",
                        "Wednesday",
                        "Thursday",
                        "Friday"
                      ],
                      "opens": "08:00",
                      "closes": "21:00"
                    }
                  ],
                  "founder": {
                    "@id": "https://turbobytesconsulting.com/#harsh"
                  },
                  "sameAs": [
                    "https://x.com/social_TBC",
                    "https://www.instagram.com/turbobytesconsulting/",
                    "https://www.youtube.com/channel/UCXQy14KS46mSFyu1VzEUqXw",
                    "https://www.facebook.com/profile.php?id=61587117418569",
                    "https://www.linkedin.com/in/tbcofficial/",
                    "https://share.google/jp3MGXYa4u27I4bcq"
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
                  "inLanguage": "en-IN",
                  "potentialAction": {
                    "@type": "SearchAction",
                    "target": "https://turbobytesconsulting.com/how-to?q={search_term_string}",
                    "query-input": "required name=search_term_string"
                  }
                },
                {
                  "@type": "Person",
                  "@id": "https://turbobytesconsulting.com/#harsh",
                  "name": "Harshvardhan Chauhan",
                  "jobTitle": "Founder",
                  "worksFor": {
                    "@id": "https://turbobytesconsulting.com/#organization"
                  },
                  "url": "https://turbobytesconsulting.com/about",
                  "sameAs": [
                    "https://www.linkedin.com/in/tbcofficial/"
                  ]
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
