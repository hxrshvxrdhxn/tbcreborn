import type { Metadata } from "next";
import Link from "next/link";
import ProcessCostCalculator from "@/components/ProcessCostCalculator";

const TITLE = "What Does Your Slowest Process Cost? | TBC";
const DESC = "Work out what one manual process costs your business a year in people's time and mistakes, then get a plan to bring it down. Free, takes a minute.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESC,
  alternates: { canonical: "/process-cost-calculator" },
  openGraph: { title: { absolute: TITLE }, description: DESC, url: "https://turbobytesconsulting.com/process-cost-calculator", images: [{ url: "/img/og-default.png", width: 1200, height: 630 }] },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Process cost calculator",
  url: "https://turbobytesconsulting.com/process-cost-calculator",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Any",
  offers: { "@type": "Offer", price: "0", priceCurrency: "INR" },
  description: DESC,
  provider: { "@id": "https://turbobytesconsulting.com/#organization" },
};

export default function ProcessCostCalculatorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-ivory border-b border-light-grey">
        <div className="container-tbc py-s6 md:py-s7">
          <h1 className="font-display font-bold text-[clamp(30px,4.2vw,48px)] text-ink leading-[1.1] tracking-[-0.5px] max-w-3xl mb-4 text-balance">
            What does your slowest process cost you each year?
          </h1>
          <p className="text-body text-mid-grey max-w-2xl mb-10 text-pretty">
            Pick the process that frustrates you most: quotations, dispatch, stock, approvals, month-end. Move the sliders to match it. The figure updates as you go.
          </p>
          <ProcessCostCalculator />
          <p className="mt-10 text-[14px] text-mid-grey max-w-3xl">
            How it is worked out: hourly cost is monthly salary divided by 208 working hours. Time cost is people × hours a week × 52 weeks × hourly cost. Mistake cost is mistakes a month × 12 × cost per mistake. It is an estimate to start a conversation, not an audit. For what software itself costs, see the{" "}
            <Link href="/software-cost-calculator" className="text-royal underline underline-offset-2">software cost calculator</Link>.
          </p>
        </div>
      </section>
    </>
  );
}
