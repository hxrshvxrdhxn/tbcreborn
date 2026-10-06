import type { Metadata } from "next";
import Link from "next/link";
import CostCalculator from "@/components/CostCalculator";
import { getHubEntries, CostEntry } from "@/lib/hubs";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: {
    absolute: "Software Development Cost Calculator (India) | TBC",
  },
  description:
    "Estimate the cost and timeline of custom software, a mobile app, an AI application or a website in India. Indicative ranges in minutes, then a free scoping call.",
  alternates: {
    canonical: "/software-cost-calculator",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: {
      absolute: "Software Development Cost Calculator (India) | TBC",
    },
    description:
      "Estimate the cost and timeline of custom software, a mobile app, an AI application or a website in India. Indicative ranges in minutes, then a free scoping call.",
    url: "https://turbobytesconsulting.com/software-cost-calculator",
    images: [{ url: "/og-default.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: {
      absolute: "Software Development Cost Calculator (India) | TBC",
    },
    description:
      "Estimate the cost and timeline of custom software, a mobile app, an AI application or a website in India. Indicative ranges in minutes, then a free scoping call.",
  },
};

const FAQS = [
  {
    q: "How accurate is this estimate?",
    a: "It reflects typical projects of each type in India. Your real cost depends on detailed scope, which a scoping call clarifies.",
  },
  {
    q: "Why is there a range rather than a single price?",
    a: "Two projects with the same headline can differ a lot in workflows, integrations and data. The range narrows once scope is written down.",
  },
  {
    q: "Does the estimate include hosting and licences?",
    a: "No. Hosting, app store fees, WhatsApp and AI usage charges are separate and usually small monthly costs.",
  },
  {
    q: "Can we start smaller?",
    a: "Yes. Many projects start with a focused first release and grow in phases, which lowers the first investment.",
  },
];

export default async function SoftwareCostCalculatorPage() {
  const visibleCostEntries = await getHubEntries<CostEntry>("cost");
  const visibleCostGuideSlugs = visibleCostEntries.map((e) => e.slug);

  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Software Development Cost Calculator",
    url: "https://turbobytesconsulting.com/software-cost-calculator",
    applicationCategory: "BusinessApplication",
    operatingSystem: "All",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "INR",
    },
    provider: {
      "@id": "https://turbobytesconsulting.com/#organization",
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://turbobytesconsulting.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Software Cost Calculator",
        item: "https://turbobytesconsulting.com/software-cost-calculator",
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  return (
    <>
      <script
        id="webapp-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }}
      />
      <script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ── BREADCRUMB ── */}
      <nav aria-label="Breadcrumb" className="bg-ivory border-b border-light-grey">
        <div className="container-tbc py-3">
          <ol className="flex items-center gap-2 font-sans text-[13px] text-mid-grey">
            <li>
              <Link href="/" className="hover:text-royal transition-colors duration-150">
                Home
              </Link>
            </li>
            <li aria-hidden="true" className="text-light-grey select-none">
              /
            </li>
            <li className="text-ink font-semibold">Software Cost Calculator</li>
          </ol>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="bg-forest py-16 sm:py-20 text-white">
        <div className="container-tbc">
          <span className="eyebrow">Interactive Estimator</span>
          <hr className="gold-rule mb-6" />
          <h1 className="font-display font-bold text-white text-[clamp(28px,4vw,44px)] leading-[1.15] tracking-[-0.5px] max-w-3xl mb-4">
            Software cost calculator
          </h1>
          <p className="font-sans text-[17px] sm:text-[18px] text-white/90 leading-relaxed max-w-3xl">
            Answer five questions to get an indicative cost range and timeline for your project. Ranges reflect typical projects we see in India; a short scoping call turns this into a firm plan.
          </p>
        </div>
      </section>

      {/* ── CALCULATOR SECTION ── */}
      <section className="bg-ivory py-12 sm:py-16">
        <div className="container-tbc">
          <CostCalculator visibleCostGuideSlugs={visibleCostGuideSlugs} />
        </div>
      </section>

      {/* ── FAQS SECTION ── */}
      <section className="bg-white py-16 border-t border-light-grey">
        <div className="container-tbc max-w-4xl">
          <div className="mb-10 text-center sm:text-left">
            <span className="eyebrow">Questions &amp; Clarity</span>
            <hr className="gold-rule mb-4" />
            <h2 className="font-display font-bold text-[26px] sm:text-[30px] text-ink">
              Frequently asked questions
            </h2>
            <p className="font-sans text-[15px] text-mid-grey mt-2">
              How our ranges are calculated and how to move from an estimate to a delivery plan.
            </p>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, idx) => (
              <details
                key={idx}
                className="group rounded-lg border border-light-grey bg-white p-5 sm:p-6 shadow-xs [&_summary::-webkit-details-marker]:hidden"
              >
                <summary className="flex items-center justify-between cursor-pointer font-display font-semibold text-[17px] text-ink hover:text-royal transition-colors select-none">
                  <span>{faq.q}</span>
                  <span className="text-royal group-open:rotate-180 transition-transform duration-200 ml-4 flex-shrink-0">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </span>
                </summary>
                <div className="pt-3 font-sans text-[15px] text-ink/80 leading-relaxed border-t border-light-grey/60 mt-3">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
