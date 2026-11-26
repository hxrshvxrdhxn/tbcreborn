import type { Metadata } from "next";
import BookConsultationClient from "./BookConsultationClient";

export const metadata: Metadata = {
  title: "Request a Consultation",
  description:
    "Book a consultation with Turbo Bytes Consulting. We will respond within one business day.",
  alternates: { canonical: "/book-consultation" },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ContactPage",
      "@id": "https://turbobytesconsulting.com/book-consultation#webpage",
      url: "https://turbobytesconsulting.com/book-consultation",
      name: "Request a Consultation | Turbo Bytes Consulting",
      description: "Book a consultation with Turbo Bytes Consulting. We will respond within one business day.",
      publisher: { "@id": "https://turbobytesconsulting.com/#organization" },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://turbobytesconsulting.com" },
        { "@type": "ListItem", position: 2, name: "Book Consultation", item: "https://turbobytesconsulting.com/book-consultation" },
      ],
    },
  ],
};

export default function BookConsultationPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <BookConsultationClient />
    </>
  );
}
