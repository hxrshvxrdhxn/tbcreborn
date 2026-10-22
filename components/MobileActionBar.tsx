"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { track } from "@/lib/track";

// Phones only: the three things a visitor might want to do, always one tap away.
export default function MobileActionBar() {
  const pathname = usePathname();
  if (pathname?.startsWith("/admin") || pathname?.startsWith("/blog-admin")) return null;
  const item = "flex flex-1 flex-col items-center justify-center gap-1 py-2.5 text-[12px] font-display font-semibold";
  return (
    <nav
      aria-label="Quick contact"
      className="md:hidden fixed inset-x-0 bottom-0 z-40 flex bg-forest text-white border-t border-white/10"
      style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}
    >
      <a href="tel:+919354784377" className={item} onClick={() => track("contact_click", { method: "phone_bar" })}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8.1 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.8 2Z" /></svg>
        Call
      </a>
      <a href="https://wa.me/919354784377" target="_blank" rel="noopener noreferrer" className={`${item} border-x border-white/10`} onClick={() => track("contact_click", { method: "whatsapp_bar" })}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8s-.4-.1-.6.1-.6.8-.8 1-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.2-.4.7-1.3a.5.5 0 0 0 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4c1.7.7 2.3.8 3.1.6a2.7 2.7 0 0 0 1.8-1.2 2.2 2.2 0 0 0 .1-1.3c0-.1-.2-.2-.4-.3Z" /></svg>
        WhatsApp
      </a>
      <Link href="/book-consultation" className={item} onClick={() => track("contact_click", { method: "book_bar" })}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" /></svg>
        Book a call
      </Link>
    </nav>
  );
}
