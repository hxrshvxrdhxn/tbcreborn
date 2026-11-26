import type { Metadata } from "next";
import Link from "next/link";
import AiVisibilityForm from "./AiVisibilityForm";

export const metadata: Metadata = {
  title: { absolute: "Free AI Visibility Check | Turbo Bytes Consulting" },
  description: "Check whether ChatGPT, Gemini and Perplexity mention your company when buyers search for your products or services. Receive a detailed diagnostic report.",
  alternates: { canonical: "/free-ai-visibility-check" },
  openGraph: {
    title: { absolute: "Free AI Visibility Check | Turbo Bytes Consulting" },
    description: "Check whether ChatGPT, Gemini and Perplexity mention your company when buyers search for your products or services. Receive a detailed diagnostic report.",
    url: "https://turbobytesconsulting.com/free-ai-visibility-check",
    images: [{ url: "/img/og-default.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image" as const,
    title: { absolute: "Free AI Visibility Check | Turbo Bytes Consulting" },
    description: "Check whether ChatGPT, Gemini and Perplexity mention your company when buyers search for your products or services. Receive a detailed diagnostic report.",
  },
};

export default function FreeAiVisibilityCheckPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="bg-forest pt-s7 pb-s6 relative overflow-hidden">
        <div className="container-tbc relative z-10">
          <nav aria-label="Breadcrumbs" className="mb-6">
            <ol className="flex items-center gap-2 text-[14px] text-white/60">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li>/</li>
              <li><Link href="/services/aeo-seo-geo" className="hover:text-white transition-colors">AEO, SEO & GEO</Link></li>
              <li>/</li>
              <li className="text-white font-medium">Free AI Visibility Check</li>
            </ol>
          </nav>

          <div className="max-w-3xl">
            <hr className="gold-rule mb-6" />
            <h1 className="font-display font-bold text-[clamp(32px,4.5vw,52px)] text-white leading-[1.1] mb-6 text-balance">
              Find out if your company appears in AI search answers.
            </h1>
            <p className="text-[clamp(17px,1.2vw,20px)] text-white/80 leading-relaxed text-pretty">
              When prospective enterprise buyers ask ChatGPT, Google Gemini, or Perplexity for vendors in your sector, does your company get cited? We test your domain against actual buyer queries and deliver a straightforward diagnostic report.
            </p>
          </div>
        </div>
      </section>

      {/* ── FORM & DETAILS ── */}
      <section className="bg-ivory py-s6 md:py-s7 border-b border-light-grey">
        <div className="container-tbc">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5">
              <h2 className="font-display font-bold text-[clamp(24px,2.5vw,32px)] text-ink mb-6">
                What you receive in your diagnostic report.
              </h2>
              <div className="space-y-6 text-body text-mid-grey leading-relaxed">
                <div className="border-l-2 border-forest pl-4">
                  <h3 className="font-semibold text-ink text-[16px] mb-1">
                    1. AI Answer Testing
                  </h3>
                  <p className="text-[14px]">
                    We query ChatGPT, Gemini, and Perplexity with the questions your buyers ask and record whether your brand, products, or competitors are cited.
                  </p>
                </div>

                <div className="border-l-2 border-forest pl-4">
                  <h3 className="font-semibold text-ink text-[16px] mb-1">
                    2. Schema and Entity Health
                  </h3>
                  <p className="text-[14px]">
                    We check whether your site has the Schema.org structured data (Organization, Service, FAQPage) that AI models need to identify your business accurately.
                  </p>
                </div>

                <div className="border-l-2 border-forest pl-4">
                  <h3 className="font-semibold text-ink text-[16px] mb-1">
                    3. Technical Crawl Readiness
                  </h3>
                  <p className="text-[14px]">
                    We inspect your robots.txt, canonical configuration, and machine-readable llms.txt discovery endpoints.
                  </p>
                </div>

                <div className="border-l-2 border-forest pl-4">
                  <h3 className="font-semibold text-ink text-[16px] mb-1">
                    4. Practical Recommendations
                  </h3>
                  <p className="text-[14px]">
                    Three to five high-priority fixes your team or agency can implement immediately to improve search and AI citation chances.
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-light-grey">
                <p className="text-[14px] text-mid-grey">
                  Need an immediate conversation? <Link href="/book-consultation" className="text-royal font-semibold hover:underline">Book a 30-minute consultation</Link> directly with our technology team.
                </p>
              </div>
            </div>

            <div className="lg:col-span-7">
              <AiVisibilityForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}