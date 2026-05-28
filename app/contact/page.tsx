import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact Turbo Bytes Consulting | Greater Noida, India",
  description:
    "Get in touch with Turbo Bytes Consulting. +91 93547 84377 · info@turbobytesconsulting.com · Kasana Tower, Alpha I, Greater Noida.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Turbo Bytes Consulting | Greater Noida, India",
    description:
      "Get in touch with Turbo Bytes Consulting. +91 93547 84377 · info@turbobytesconsulting.com · Kasana Tower, Alpha I, Greater Noida.",
    url: "https://turbobytesconsulting.com/contact",
    images: [{ url: "/og-default.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image" as const,
    title: "Contact Turbo Bytes Consulting | Greater Noida, India",
    description:
      "Get in touch with Turbo Bytes Consulting. +91 93547 84377 · info@turbobytesconsulting.com · Kasana Tower, Alpha I, Greater Noida.",
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
