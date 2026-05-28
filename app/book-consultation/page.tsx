import type { Metadata } from "next";
import BookConsultationClient from "./BookConsultationClient";

export const metadata: Metadata = {
  title: "Request a Consultation",
  description:
    "Book a consultation with Turbo Bytes Consulting. We will respond within one business day.",
  alternates: { canonical: "/book-consultation" },
};

export default function BookConsultationPage() {
  return <BookConsultationClient />;
}
