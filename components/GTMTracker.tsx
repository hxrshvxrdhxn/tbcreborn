"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { track } from "@/lib/track";

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
        } catch {
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

      if (href.startsWith("tel:")) {
        track("click_phone", { page_path: window.location.pathname });
      } else if (href.includes("wa.me")) {
        track("click_whatsapp", { page_path: window.location.pathname });
      } else if (href.includes("/book-consultation")) {
        track("book_consultation_click", { page_path: window.location.pathname });
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}
