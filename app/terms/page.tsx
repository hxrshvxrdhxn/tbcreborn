import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms of use for turbobytesconsulting.com",
  alternates: { canonical: "/terms" },
};

const sections = [
  {
    heading: "1. Acceptance of Terms",
    body: "By accessing or using turbobytesconsulting.com (the 'Website'), you agree to be bound by these Terms of Use. If you do not agree to these terms, please do not use the Website. Turbo Bytes Consulting reserves the right to amend these terms at any time. Continued use of the Website following any changes constitutes acceptance of the revised terms.",
  },
  {
    heading: "2. Intellectual Property",
    body: "All content on this Website — including but not limited to text, graphics, logos, images, case studies, articles, frameworks, and methodology descriptions — is owned by or licensed to Turbo Bytes Consulting and is protected by applicable Indian and international intellectual property laws. You may not reproduce, distribute, modify, or create derivative works from any content on this Website without express prior written permission from Turbo Bytes Consulting.",
  },
  {
    heading: "3. Permitted Use of Website",
    body: "This Website is provided for lawful informational and commercial enquiry purposes only. You agree not to:",
    list: [
      "Use the Website for any unlawful purpose or in violation of any applicable law or regulation.",
      "Scrape, index, or harvest any content from this Website using automated means (bots, crawlers, scrapers) without prior written consent.",
      "Reproduce, republish, or redistribute any Website content without written permission.",
      "Attempt to gain unauthorised access to any system, server, or database connected to this Website.",
      "Transmit any harmful, offensive, or disruptive material through the Website.",
    ],
  },
  {
    heading: "4. Limitation of Liability",
    body: "The content on this Website is provided for general informational purposes only. Turbo Bytes Consulting makes no representations or warranties of any kind regarding the accuracy, completeness, or suitability of the information provided. We accept no liability for any decisions made, actions taken, or losses incurred on the basis of Website content alone. Engagement with TBC for professional services is governed by separate engagement terms agreed in writing.",
  },
  {
    heading: "5. Third-Party Links",
    body: "This Website may contain links to third-party websites for convenience. Turbo Bytes Consulting does not endorse, control, or accept responsibility for the content, privacy practices, or services of any third-party websites. Your use of third-party websites is at your own risk.",
  },
  {
    heading: "6. Governing Law and Jurisdiction",
    body: "These Terms of Use are governed by and construed in accordance with the laws of India. Any disputes arising in connection with these terms or the use of this Website shall be subject to the exclusive jurisdiction of the courts in Greater Noida, Uttar Pradesh, India.",
  },
  {
    heading: "7. Contact",
    body: "For any queries regarding these terms, please contact us:",
    list: [
      "Email: info@turbobytesconsulting.com",
      "Address: Kasana Tower, Alpha-I Commercial Belt, Greater Noida, Uttar Pradesh, India",
    ],
  },
];

export default function TermsPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="bg-ink py-16">
        <div className="container-tbc">
          <h1 className="font-display font-bold text-white text-[clamp(32px,4vw,44px)] leading-[1.15] tracking-[-0.5px] mb-3">
            Terms of Use
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
              Please read these terms carefully before using this Website. By
              continuing to browse or use turbobytesconsulting.com you indicate
              your acceptance of these terms.
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
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
