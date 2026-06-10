"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { marked } from "marked";
import DOMPurify from "isomorphic-dompurify";

const CATEGORIES = [
  "AI Strategy",
  "Consulting",
  "Framework",
  "Leadership",
  "Operations",
  "Perspective",
  "Strategy",
];

function slugify(title: string) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

function estimateReadTime(text: string) {
  const words = text.trim().split(/\s+/).length;
  const mins = Math.max(1, Math.round(words / 220));
  return `${mins} min read`;
}

function todayISO() {
  return new Date().toISOString().split("T")[0];
}

function todayDisplay() {
  return new Date().toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

interface Props {
  initialSlug?: string;
  initialTitle?: string;
  initialExcerpt?: string;
  initialCategory?: string;
  initialStatus?: string;
  initialPublishedAt?: string;
  initialDate?: string;
  initialBody?: string;
  isEdit?: boolean;
}

export default function AdminPostEditor({
  initialSlug = "",
  initialTitle = "",
  initialExcerpt = "",
  initialCategory = "Strategy",
  initialStatus = "draft",
  initialPublishedAt = "",
  initialDate = "",
  initialBody = "",
  isEdit = false,
}: Props) {
  const router = useRouter();

  const [title, setTitle] = useState(initialTitle);
  const [slug, setSlug] = useState(initialSlug);
  const [slugTouched, setSlugTouched] = useState(isEdit);
  const [excerpt, setExcerpt] = useState(initialExcerpt);
  const [category, setCategory] = useState(initialCategory);
  const [status, setStatus] = useState(initialStatus);
  const [publishedAt, setPublishedAt] = useState(initialPublishedAt || todayISO());
  const [date, setDate] = useState(initialDate || todayDisplay());
  const [body, setBody] = useState(initialBody);
  const [tab, setTab] = useState<"write" | "preview">("write");
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [deleting, setDeleting] = useState(false);

  // Auto-slug from title
  useEffect(() => {
    if (!slugTouched && title) setSlug(slugify(title));
  }, [title, slugTouched]);

  // Auto read time from body
  const readTime = estimateReadTime(body || "");

  async function handleSave(e: React.FormEvent) {
    e.preventDefault();
    if (!title || !body) {
      setError("Title and content are required.");
      return;
    }
    setSaving(true);
    setError("");

    const res = await fetch("/api/admin/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        slug,
        title,
        excerpt,
        category,
        readTime,
        date,
        status,
        publishedAt: status === "scheduled" ? publishedAt : (status === "published" ? (publishedAt || todayISO()) : ""),
        body,
      }),
    });

    if (res.ok) {
      router.push("/admin");
      router.refresh();
    } else {
      const data = await res.json().catch(() => ({}));
      setError((data as { error?: string }).error ?? "Failed to save post.");
      setSaving(false);
    }
  }

  async function handleDelete() {
    if (!confirm(`Delete "${title}"? This cannot be undone.`)) return;
    setDeleting(true);
    const res = await fetch("/api/admin/posts", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ slug }),
    });
    if (!res.ok) {
      setError("Failed to delete post.");
      setDeleting(false);
      return;
    }
    router.push("/admin");
    router.refresh();
  }

  const inputBase =
    "w-full font-sans text-[15px] text-ink bg-white border border-light-grey rounded-[8px] px-4 py-3 placeholder-mid-grey/60 outline-none transition-colors focus:border-royal focus:ring-2 focus:ring-royal/10";
  const labelBase = "block font-display font-semibold text-[13px] text-ink mb-1.5";

  return (
    <div className="min-h-screen bg-ivory">
      {/* ── Top bar ── */}
      <header className="bg-ink border-b-2 border-gold sticky top-0 z-40">
        <div className="container-tbc h-14 flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <Link href="/admin" className="font-display font-semibold text-[13px] text-white/60 hover:text-white transition-colors">
              ← Posts
            </Link>
            <span className="text-white/20">|</span>
            <span className="font-display font-semibold text-[14px] text-white truncate max-w-[280px]">
              {title || "New Post"}
            </span>
          </div>
          <div className="flex items-center gap-3">
            {isEdit && (
              <button
                onClick={handleDelete}
                disabled={deleting}
                className="font-display font-semibold text-[13px] text-red-400 hover:text-red-300 transition-colors disabled:opacity-50"
              >
                {deleting ? "Deleting…" : "Delete"}
              </button>
            )}
            <Link
              href={`/blog/${slug}`}
              target="_blank"
              className="font-display font-semibold text-[13px] text-white/60 hover:text-white transition-colors"
            >
              Preview ↗
            </Link>
            <button
              form="post-form"
              type="submit"
              disabled={saving}
              className="btn-gold text-sm py-2 px-5 disabled:opacity-50"
            >
              {saving ? "Saving…" : isEdit ? "Update Post" : "Save Post"}
            </button>
          </div>
        </div>
      </header>

      <form id="post-form" onSubmit={handleSave}>
        <div className="container-tbc py-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-8 items-start">

            {/* ── LEFT: Title + Content ── */}
            <div className="space-y-6">
              {/* Title */}
              <div>
                <label htmlFor="title" className={labelBase}>Title</label>
                <input
                  id="title"
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Post title…"
                  className="w-full font-display font-bold text-[26px] text-ink bg-white border border-light-grey rounded-[8px] px-4 py-3 placeholder-mid-grey/40 outline-none focus:border-royal focus:ring-2 focus:ring-royal/10 transition-colors"
                />
              </div>

              {/* Excerpt */}
              <div>
                <label htmlFor="excerpt" className={labelBase}>Excerpt</label>
                <textarea
                  id="excerpt"
                  value={excerpt}
                  onChange={(e) => setExcerpt(e.target.value)}
                  rows={2}
                  placeholder="One or two sentences shown on the blog listing page…"
                  className={`${inputBase} resize-none`}
                />
              </div>

              {/* Content editor */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <span className={labelBase.replace("mb-1.5", "")}>Content (Markdown)</span>
                  <div className="flex rounded-[6px] border border-light-grey overflow-hidden">
                    {(["write", "preview"] as const).map((t) => (
                      <button
                        key={t}
                        type="button"
                        onClick={() => setTab(t)}
                        className={`font-display font-semibold text-[12px] px-3 py-1.5 capitalize transition-colors ${
                          tab === t ? "bg-ink text-white" : "bg-white text-mid-grey hover:text-ink"
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>

                {tab === "write" ? (
                  <textarea
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                    rows={28}
                    placeholder={`## Introduction\n\nWrite your post in Markdown…\n\n## Section Heading\n\nParagraph text here.\n\n- Bullet point\n- Another point`}
                    className={`${inputBase} resize-y font-mono text-[14px] leading-relaxed`}
                  />
                ) : (
                  <div
                    className="
                      bg-white border border-light-grey rounded-[8px] px-6 py-8 min-h-[500px]
                      font-sans text-[16px] text-ink leading-[1.7]
                      [&_h2]:font-display [&_h2]:font-bold [&_h2]:text-[22px] [&_h2]:mt-10 [&_h2]:mb-3
                      [&_h3]:font-display [&_h3]:font-bold [&_h3]:text-[18px] [&_h3]:mt-8 [&_h3]:mb-2
                      [&_p]:mb-5
                      [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:mb-5 [&_ul_li]:mb-1.5
                      [&_ol]:list-decimal [&_ol]:pl-5 [&_ol]:mb-5 [&_ol_li]:mb-1.5
                      [&_blockquote]:border-l-4 [&_blockquote]:border-gold [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:text-mid-grey [&_blockquote]:my-6
                      [&_strong]:font-semibold
                      [&_hr]:border-light-grey [&_hr]:my-8
                      [&_code]:bg-light-grey [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:rounded [&_code]:text-[14px] [&_code]:font-mono
                    "
                    dangerouslySetInnerHTML={{
                      __html: body
                        ? DOMPurify.sanitize(marked.parse(body) as string)
                        : "<p class='text-mid-grey'>Nothing to preview yet…</p>",
                    }}
                  />
                )}
                <p className="font-sans text-[12px] text-mid-grey mt-2">
                  Estimated: {readTime}
                </p>
              </div>

              {error && (
                <div className="bg-red-50 border border-red-200 rounded-[6px] px-4 py-3">
                  <p className="font-sans text-[14px] text-red-600">{error}</p>
                </div>
              )}
            </div>

            {/* ── RIGHT: Metadata ── */}
            <div className="space-y-5 bg-white border border-light-grey rounded-[8px] shadow-card p-6">
              <h2 className="font-display font-bold text-[15px] text-ink">Post Settings</h2>

              {/* Status */}
              <div>
                <label htmlFor="status" className={labelBase}>Status</label>
                <select
                  id="status"
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                  className={inputBase}
                >
                  <option value="draft">Draft</option>
                  <option value="published">Published</option>
                  <option value="scheduled">Scheduled</option>
                </select>
              </div>

              {/* Schedule date — only shown when status = scheduled */}
              {status === "scheduled" && (
                <div>
                  <label htmlFor="publishedAt" className={labelBase}>
                    Publish Date
                  </label>
                  <input
                    id="publishedAt"
                    type="date"
                    value={publishedAt}
                    onChange={(e) => setPublishedAt(e.target.value)}
                    className={inputBase}
                  />
                  <p className="font-sans text-[12px] text-mid-grey mt-1.5">
                    Will go live at midnight on this date.
                  </p>
                </div>
              )}

              {/* Display date */}
              <div>
                <label htmlFor="date" className={labelBase}>Display Date</label>
                <input
                  id="date"
                  type="text"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  placeholder="e.g. 3 June 2026"
                  className={inputBase}
                />
              </div>

              {/* Category */}
              <div>
                <label htmlFor="category" className={labelBase}>Category</label>
                <select
                  id="category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className={inputBase}
                >
                  {CATEGORIES.map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>

              {/* Slug */}
              <div>
                <label htmlFor="slug" className={labelBase}>URL Slug</label>
                <input
                  id="slug"
                  type="text"
                  value={slug}
                  onChange={(e) => { setSlug(e.target.value); setSlugTouched(true); }}
                  placeholder="auto-generated-from-title"
                  className={`${inputBase} font-mono text-[13px]`}
                />
                <p className="font-sans text-[12px] text-mid-grey mt-1.5">
                  /blog/{slug || "…"}
                </p>
              </div>

              <hr className="border-light-grey" />

              {/* Markdown cheatsheet */}
              <div>
                <p className="font-display font-semibold text-[12px] text-mid-grey uppercase tracking-[1px] mb-3">
                  Markdown Reference
                </p>
                <div className="space-y-1.5 font-mono text-[12px] text-mid-grey">
                  {[
                    ["## Heading", "H2 section"],
                    ["### Sub-heading", "H3"],
                    ["**bold**", "Bold text"],
                    ["- item", "Bullet list"],
                    ["> quote", "Blockquote"],
                    ["---", "Divider"],
                  ].map(([code, desc]) => (
                    <div key={code} className="flex items-center gap-2">
                      <code className="bg-light-grey px-1.5 py-0.5 rounded text-ink">{code}</code>
                      <span>{desc}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
