import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact Turbo Bytes Consulting",
  description:
    "Get in touch. Phone, email, WhatsApp, or visit us in Greater Noida.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return <ContactClient />;
}
