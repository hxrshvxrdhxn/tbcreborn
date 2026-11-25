import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: { absolute: "Contact Turbo Bytes Consulting | Greater Noida, India" },
  description:
    "Get in touch with Turbo Bytes Consulting. Call +91 93547 84377, email info@turbobytesconsulting.com, or visit Kasana Tower, Alpha I, Greater Noida, UP.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: { absolute: "Contact Turbo Bytes Consulting | Greater Noida, India" },
    description:
      "Get in touch with Turbo Bytes Consulting. Call +91 93547 84377, email info@turbobytesconsulting.com, or visit Kasana Tower, Alpha I, Greater Noida, UP.",
    url: "https://turbobytesconsulting.com/contact",
    images: [{ url: "/og-default.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image" as const,
    title: { absolute: "Contact Turbo Bytes Consulting | Greater Noida, India" },
    description:
      "Get in touch with Turbo Bytes Consulting. Call +91 93547 84377, email info@turbobytesconsulting.com, or visit Kasana Tower, Alpha I, Greater Noida, UP.",
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
