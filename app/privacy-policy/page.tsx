import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Turbo Bytes Consulting privacy policy.",
  alternates: { canonical: "/privacy-policy" },
};

const sections = [
  {
    heading: "1. Introduction",
    body: "Turbo Bytes Consulting ('TBC', 'we', 'us') is committed to protecting your personal information. This policy explains how we collect, use, and protect data you provide through our website at turbobytesconsulting.com.",
  },
  {
    heading: "2. Information We Collect",
    body: "We collect the following information when you interact with us:",
    list: [
      "Name, company, email address, service interest, and message when you complete our contact form.",
      "Website usage data via Google Analytics 4 (anonymised IP addresses; no personally identifiable information is shared with Google).",
    ],
  },
  {
    heading: "3. How We Use Your Information",
    body: "We use information you provide for the following purposes:",
    list: [
      "To respond to your enquiry in a timely and relevant manner.",
      "To deliver services you have engaged us for.",
      "To send relevant communications, including updates and insights, if you have opted in to receive them.",
    ],
  },
  {
    heading: "4. Data Storage and Security",
    body: "Contact form submissions are processed via Resend and stored securely. All data in transit is encrypted using TLS. We do not sell, rent, or otherwise share your personal data with third parties except service providers strictly necessary for delivery of our services. These providers are contractually bound to process your data only as instructed by us.",
  },
  {
    heading: "5. Your Rights",
    body: "Under the Indian Digital Personal Data Protection Act 2023 (DPDP Act) and applicable regulations, you have the right to:",
    list: [
      "Access personal data we hold about you.",
      "Request correction of inaccurate or incomplete data.",
      "Request deletion of your personal data, subject to legal retention obligations.",
      "Withdraw consent where processing is based on consent.",
    ],
    footer:
      "To exercise any of these rights, contact us at: info@turbobytesconsulting.com. We will respond within 30 days.",
  },
  {
    heading: "6. Cookies",
    body: "We use the following categories of cookies on our website:",
    list: [
      "Essential cookies: required for the site to function correctly. These cannot be disabled.",
      "Analytics cookies: Google Analytics 4 is used to measure site performance and understand how visitors use the site. This data is anonymised and aggregated.",
    ],
    footer:
      "You may disable analytics cookies at any time through your browser settings or a cookie management tool.",
  },
  {
    heading: "7. Contact",
    body: "For any privacy-related queries or to exercise your data rights, please contact us:",
    list: [
      "Email: info@turbobytesconsulting.com",
      "Address: Kasana Tower, Alpha-I Commercial Belt, Greater Noida, Uttar Pradesh, India",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="bg-ink py-16">
        <div className="container-tbc">
          <h1 className="font-display font-bold text-white text-[clamp(32px,4vw,44px)] leading-[1.15] tracking-[-0.5px] mb-3">
            Privacy Policy
          </h1>
          <p className="font-sans text-[15px] text-mid-grey">
            Last updated: January 2026
          </p>
        </div>
      </section>

      {/* ── CONTENT ── */}
      <section className="bg-ivory py-16">
        <div className="container-tbc">
          <div className="mx-auto max-w-[760px]">
            <p className="font-sans text-[16px] text-mid-grey leading-relaxed mb-10 border-l-4 border-gold pl-5 italic">
              Turbo Bytes Consulting is an MSME-registered AI consultancy based
              in Greater Noida, Uttar Pradesh, India. We take the privacy of our
              clients and website visitors seriously.
            </p>

            <div className="space-y-10">
              {sections.map((section) => (
                <div key={section.heading}>
                  <h2 className="font-display font-bold text-[22px] text-ink leading-[1.3] mb-3">
                    {section.heading}
                  </h2>
                  <hr className="gold-rule mb-4" style={{ width: "32px" }} />
                  <p className="font-sans text-[16px] text-ink leading-relaxed mb-3">
                    {section.body}
                  </p>
                  {section.list && (
                    <ul className="list-disc pl-5 space-y-2 mb-3">
                      {section.list.map((item) => (
                        <li
                          key={item}
                          className="font-sans text-[16px] text-ink leading-relaxed"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                  {section.footer && (
                    <p className="font-sans text-[16px] text-mid-grey leading-relaxed mt-3">
                      {section.footer}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
