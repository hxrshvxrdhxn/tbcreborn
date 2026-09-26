import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: { absolute: "Page not found | Turbo Bytes Consulting" },
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <h1 className="text-4xl font-display font-bold text-ink mb-4">404</h1>
      <p className="text-2xl font-display font-semibold text-ink mb-4">Page Not Found</p>
      <p className="text-mid-grey mb-8 max-w-md">
        The page you are looking for does not exist, has been moved, or is temporarily unavailable.
      </p>
      <div className="flex flex-col items-center gap-4">
        <Link href="/" className="btn-primary">
          Return Home
        </Link>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center justify-center mt-2">
          <Link href="/services" className="text-royal hover:text-royal-mid hover:underline font-semibold text-sm">
            View our services
          </Link>
          <span className="hidden sm:inline text-mid-grey text-sm">•</span>
          <Link href="/book-consultation" className="text-royal hover:text-royal-mid hover:underline font-semibold text-sm">
            Book a 30-minute scoping call
          </Link>
        </div>
      </div>
    </div>
  );
}
