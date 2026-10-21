"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Reveal from "@/components/Reveal";
import { aiPractices, consultingLinks } from "@/lib/offerings";

const services = [
  ...aiPractices.map((l) => ({ href: l.href, label: l.title })),
  { href: "/products", label: "Products" },
  ...consultingLinks.map((l) => ({ href: l.href, label: l.title })),
];

export default function ServiceFooter() {
  const pathname = usePathname();

  return (
    <section className="bg-ivory py-s6 border-t border-light-grey">
      <div className="container-tbc">
        <Reveal>
          <p className="text-center font-display font-semibold text-[15px] text-mid-grey mb-5">Explore our other services</p>
          <nav aria-label="Other services" className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {services.map((service) => {
              const isActive = pathname === service.href;
              return (
                <Link
                  key={service.href}
                  href={service.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`px-5 py-3 rounded-full font-display font-semibold text-[14px] border transition-[color,background-color,border-color,box-shadow,transform] duration-150 ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-royal ${
                    isActive
                      ? "bg-royal border-royal text-white shadow-sm pointer-events-none"
                      : "bg-white border-light-grey text-ink hover:border-royal hover:text-royal hover:-translate-y-px hover:shadow-sm active:translate-y-0"
                  }`}
                >
                  {service.label}
                </Link>
              );
            })}
          </nav>
        </Reveal>
      </div>
    </section>
  );
}
