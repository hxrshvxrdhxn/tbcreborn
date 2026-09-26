/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function GTMTracker() {
  const pathname = usePathname();

  useEffect(() => {
    // Record landing page on first load
    if (typeof window !== "undefined") {
      if (!sessionStorage.getItem("landingPage")) {
        sessionStorage.setItem("landingPage", window.location.pathname);
      }
      // If we just landed from a blog post, or we're on a blog post, store referrer
      if (document.referrer && !sessionStorage.getItem("referrerPath")) {
        try {
          const refUrl = new URL(document.referrer);
          if (refUrl.pathname.startsWith("/blog/")) {
            sessionStorage.setItem("referrerPath", refUrl.pathname);
          }
        } catch (e) {
          // ignore
        }
      }
    }
  }, [pathname]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest("a");
      
      if (!link) return;
      
      const href = link.getAttribute("href");
      if (!href) return;

      const dataLayer = (window as any).dataLayer || [];

      if (href.startsWith("tel:")) {
        dataLayer.push({ event: "click_phone" });
      } else if (href.includes("wa.me")) {
        dataLayer.push({ event: "click_whatsapp" });
      } else if (href.includes("/book-consultation")) {
        dataLayer.push({ event: "book_consultation_click" });
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}
