import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <h2 className="text-4xl font-display font-bold text-ink mb-4">404</h2>
      <h3 className="text-2xl font-display font-semibold text-ink mb-4">Page Not Found</h3>
      <p className="text-mid-grey mb-8 max-w-md">
        The page you are looking for does not exist, has been moved, or is temporarily unavailable.
      </p>
      <Link href="/" className="btn-primary">
        Return Home
      </Link>
    </div>
  );
}
