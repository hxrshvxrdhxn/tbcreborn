import type { Metadata } from "next";
import ConsultingServicePage from "@/components/ConsultingServicePage";
import { consulting } from "@/lib/offerings";

const s = consulting.find((c) => c.slug === "business-diagnostic")!;

export const metadata: Metadata = {
  title: s.title,
  description: s.metaDescription,
  alternates: { canonical: "/services/business-diagnostic" },
  openGraph: {
    title: s.title,
    description: s.metaDescription,
    url: "https://turbobytesconsulting.com/services/business-diagnostic",
    images: [{ url: "/img/og-default.png", width: 1200, height: 630 }],
  },
};

export default function Page() {
  return <ConsultingServicePage s={s} />;
}
