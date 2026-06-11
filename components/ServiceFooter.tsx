"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Reveal from "@/components/Reveal";

const services = [
  { href: "/services/custom-llm", label: "Custom LLM & AI" },
  { href: "/services/ai-training", label: "AI Capability Building" },
  { href: "/services/web-development", label: "Web & App Development" },
  { href: "/services/smm", label: "Social Media Management" },
  { href: "/services/slate", label: "Slate Executive Assistant" },
];

export default function ServiceFooter() {
  const pathname = usePathname();

  return (
    <section className="bg-ivory py-s6 border-t border-light-grey">
      <div className="container-tbc">
        <Reveal>
          <span className="eyebrow text-center mb-6">EXPLORE OTHER PRACTICES</span>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {services.map((service) => {
              const isActive = pathname === service.href;
              return (
                <Link
                  key={service.href}
                  href={service.href}
                  className={`px-5 py-3 rounded-full font-display font-semibold text-[14px] transition-all duration-200 border ${
                    isActive
                      ? "bg-gold border-gold text-ink shadow-md"
                      : "bg-white border-light-grey text-mid-grey hover:border-gold hover:text-ink hover:shadow-sm"
                  }`}
                >
                  {service.label}
                </Link>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
