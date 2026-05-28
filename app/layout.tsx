import type { Metadata } from "next";
import { Inter, DM_Sans } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
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

const GA_ID = process.env.NEXT_PUBLIC_GA_ID ?? "G-XXXXXXXXXX";

export const metadata: Metadata = {
  title: {
    default: "Turbo Bytes Consulting · Intelligence. Precision. Growth.",
    template: "%s · Turbo Bytes Consulting",
  },
  description:
    "An AI-native management and technology consultancy. We integrate AI into marketing, operations, and internal systems — completely, not partially.",
  metadataBase: new URL("https://turbobytesconsulting.com"),
  openGraph: {
    type: "website",
    siteName: "Turbo Bytes Consulting",
    locale: "en_IN",
    url: "https://turbobytesconsulting.com",
    title: "Turbo Bytes Consulting · Intelligence. Precision. Growth.",
    description:
      "An AI-native management and technology consultancy. We integrate AI into marketing, operations, and internal systems — completely, not partially.",
  },
  twitter: {
    card: "summary_large_image",
    site: "@social_TBC",
    creator: "@social_TBC",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${dmSans.variable}`}>
      <head>
        {GA_ID !== "G-XXXXXXXXXX" && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}');
              `}
            </Script>
          </>
        )}
      </head>
      <body className="bg-ivory text-ink antialiased">
        <Navigation />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
