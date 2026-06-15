"use client";

export default function GlobalError({
  _error,
  reset,
}: {
  _error?: Error & { digest?: string };
  reset: () => void;
}) {
  if (_error) console.error("Global Error:", _error);
  return (
    <html lang="en">
      <body>
        <div className="flex flex-col items-center justify-center min-h-screen text-center px-4 bg-ivory">
          <h2 className="text-3xl font-display font-bold text-ink mb-4">Critical Application Error</h2>
          <p className="text-mid-grey mb-8 max-w-md">
            A critical system error occurred. We are working to resolve this immediately.
          </p>
          <button onClick={() => reset()} className="px-6 py-3 bg-ink text-white rounded font-medium">
            Attempt Recovery
          </button>
        </div>
      </body>
    </html>
  );
}
