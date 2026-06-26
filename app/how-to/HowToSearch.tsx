"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function HowToSearch() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<{id: string, title: string, slug: string, category: string}[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  // Fallback form state
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const delayDebounceFn = setTimeout(async () => {
      if (query.length > 2) {
        setIsSearching(true);
        try {
          const res = await fetch(`/api/how-to/search?q=${encodeURIComponent(query)}`);
          const data = await res.json();
          setResults(data.results || []);
          setHasSearched(true);
        } catch (error) {
          console.error("Search failed", error);
        } finally {
          setIsSearching(false);
        }
      } else {
        setResults([]);
        setHasSearched(false);
      }
    }, 400);

    return () => clearTimeout(delayDebounceFn);
  }, [query]);

  const handleRequestSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await fetch("/api/how-to/request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query, email }),
      });
      setSubmitted(true);
    } catch (error) {
      console.error("Request failed", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-white p-6 md:p-8 rounded-xl shadow-lg border border-light-grey">
      <div className="relative">
        <svg
          className="absolute left-4 top-1/2 -translate-y-1/2 text-mid-grey"
          width="20"
          height="20"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <circle cx="11" cy="11" r="8" />
          <path d="M21 21l-4.35-4.35" />
        </svg>
        <input
          type="text"
          placeholder="Search for a guide (e.g. 'commercial lease', 'inventory')"
          className="w-full pl-12 pr-4 py-4 bg-ivory border border-light-grey rounded-lg focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold text-[17px] text-ink"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setSubmitted(false);
          }}
        />
        {isSearching && (
          <div className="absolute right-4 top-1/2 -translate-y-1/2">
            <div className="w-5 h-5 border-2 border-gold border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}
      </div>

      {hasSearched && query.length > 2 && (
        <div className="mt-6 text-left">
          {results.length > 0 ? (
            <div className="space-y-3">
              <h3 className="text-sm font-bold text-mid-grey uppercase tracking-wider mb-2">Results</h3>
              <ul className="space-y-2">
                {results.map((result) => (
                  <li key={result.id}>
                    <Link
                      href={`/how-to/${result.slug}`}
                      className="block p-4 rounded bg-ivory hover:bg-gold/10 border border-transparent hover:border-gold transition-colors"
                    >
                      <div className="text-xs text-royal font-semibold mb-1 uppercase tracking-wider">{result.category}</div>
                      <div className="text-ink font-medium">{result.title}</div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <div className="bg-ivory border border-light-grey rounded-lg p-6 text-center">
              <p className="text-ink mb-4 font-medium">
                We don&apos;t have a guide for &quot;<span className="text-royal">{query}</span>&quot; yet.
              </p>
              {submitted ? (
                <div className="bg-green-50 text-green-800 p-4 rounded-md border border-green-200">
                  <p className="font-semibold text-[15px]">Thanks! We&apos;ve logged your request.</p>
                  <p className="text-sm mt-1">We&apos;ll email you at {email} as soon as we write a guide on this topic.</p>
                </div>
              ) : (
                <form onSubmit={handleRequestSubmit} className="max-w-md mx-auto">
                  <p className="text-sm text-mid-grey mb-4">
                    Leave your email and we&apos;ll notify you once our consultants add this topic to the repository.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <input
                      type="email"
                      required
                      placeholder="Your email address"
                      className="flex-1 px-4 py-2 border border-light-grey rounded focus:outline-none focus:border-gold text-[15px] bg-white"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-primary py-2 px-6 disabled:opacity-70 whitespace-nowrap"
                    >
                      {isSubmitting ? "Submitting..." : "Notify Me"}
                    </button>
                  </div>
                </form>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
