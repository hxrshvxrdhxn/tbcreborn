"use client";

import { Suspense, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

function LoginForm() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const params = useSearchParams();
  const fromParam = params.get("from");
  const safeTo = fromParam && fromParam.startsWith("/") && !fromParam.startsWith("//") ? fromParam : "/admin";

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const res = await fetch("/api/admin/auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });

    if (res.ok) {
      router.push(safeTo);
      router.refresh();
    } else {
      setError("Incorrect password.");
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-ink flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        {/* Logo */}
        <div className="flex items-baseline gap-2 mb-10">
          <span className="font-display font-bold text-2xl text-white" style={{ letterSpacing: "3px" }}>
            TBC
          </span>
          <span className="font-display font-semibold text-gold" style={{ fontSize: "9px", letterSpacing: "0.5px" }}>
            ADMIN
          </span>
        </div>

        <h1 className="font-display font-bold text-white text-2xl mb-2">Content Studio</h1>
        <p className="font-sans text-[15px] text-mid-grey mb-8">Sign in to manage blog posts.</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="password" className="block font-display font-semibold text-[13px] text-white/70 mb-2">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoFocus
              className="w-full bg-white/10 border border-white/20 rounded-[8px] px-4 py-3 text-white font-sans text-[15px] placeholder-white/30 outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-colors"
              placeholder="Enter admin password"
            />
          </div>

          {error && (
            <p className="font-sans text-[13px] text-red-400">{error}</p>
          )}

          <button
            type="submit"
            disabled={loading || !password}
            className="btn-gold w-full justify-center disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Signing in…" : "Sign In"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default function AdminLoginPage() {
  return (
    <Suspense>
      <LoginForm />
    </Suspense>
  );
}
