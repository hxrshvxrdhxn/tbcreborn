import Link from "next/link";
import { getAdminPosts } from "@/lib/posts";
import { blogPosts as staticPosts } from "@/lib/content";
import AdminLogout from "./AdminLogout";

const STATUS_STYLES: Record<string, string> = {
  published: "bg-tbc-emerald-light text-tbc-emerald",
  draft:     "bg-light-grey text-mid-grey",
  scheduled: "bg-gold-light text-gold",
};

export default async function AdminPage() {
  const managed = await getAdminPosts();

  return (
    <div className="min-h-screen bg-ivory">
      {/* ── Top bar ── */}
      <header className="bg-ink border-b-2 border-gold sticky top-0 z-40">
        <div className="container-tbc h-14 flex items-center justify-between">
          <div className="flex items-baseline gap-2">
            <Link href="/" className="font-display font-bold text-xl text-white" style={{ letterSpacing: "3px" }}>
              TBC
            </Link>
            <span className="font-display font-semibold text-gold" style={{ fontSize: "9px" }}>
              CONTENT STUDIO
            </span>
          </div>
          <AdminLogout />
        </div>
      </header>

      <main className="container-tbc py-12">
        {/* Header row */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="font-display font-bold text-[28px] text-ink">Blog Posts</h1>
            <p className="font-sans text-[14px] text-mid-grey mt-1">
              {managed.length} managed · {staticPosts.length} migrated (read-only)
            </p>
          </div>
          <Link href="/admin/new" className="btn-primary">
            + New Post
          </Link>
        </div>

        {/* Managed posts */}
        {managed.length > 0 && (
          <section className="mb-12">
            <h2 className="font-display font-semibold text-[13px] text-mid-grey uppercase tracking-[1.5px] mb-4">
              Your Posts
            </h2>
            <div className="bg-white rounded-[8px] border border-light-grey shadow-card divide-y divide-light-grey">
              {managed.map((post) => (
                <div key={post.slug} className="flex items-center gap-4 p-5 hover:bg-ivory/60 transition-colors">
                  <div className="flex-1 min-w-0">
                    <p className="font-display font-semibold text-[16px] text-ink truncate">
                      {post.title}
                    </p>
                    <p className="font-sans text-[13px] text-mid-grey mt-0.5">
                      {post.category} · {post.date}
                      {post.status === "scheduled" && post.publishedAt && (
                        <> · Publishes {new Date(post.publishedAt).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}</>
                      )}
                    </p>
                  </div>
                  <span className={`font-display font-semibold text-[11px] uppercase tracking-[1px] px-2.5 py-1 rounded-full ${STATUS_STYLES[post.status] ?? STATUS_STYLES.draft}`}>
                    {post.status}
                  </span>
                  <Link
                    href={`/admin/edit/${post.slug}`}
                    className="font-display font-semibold text-[13px] text-royal hover:text-royal-mid transition-colors shrink-0"
                  >
                    Edit →
                  </Link>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Static (migrated) posts — read-only */}
        <section>
          <h2 className="font-display font-semibold text-[13px] text-mid-grey uppercase tracking-[1.5px] mb-4">
            Migrated Posts (read-only)
          </h2>
          <div className="bg-white rounded-[8px] border border-light-grey shadow-card divide-y divide-light-grey">
            {staticPosts.map((post) => (
              <div key={post.slug} className="flex items-center gap-4 p-5 opacity-70">
                <div className="flex-1 min-w-0">
                  <p className="font-display font-semibold text-[15px] text-ink truncate">
                    {post.title}
                  </p>
                  <p className="font-sans text-[13px] text-mid-grey mt-0.5">
                    {post.category} · {post.date}
                  </p>
                </div>
                <span className={`font-display font-semibold text-[11px] uppercase tracking-[1px] px-2.5 py-1 rounded-full ${STATUS_STYLES.published}`}>
                  published
                </span>
                <Link
                  href={`/blog/${post.slug}`}
                  target="_blank"
                  className="font-display font-semibold text-[13px] text-mid-grey hover:text-ink transition-colors shrink-0"
                >
                  View ↗
                </Link>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
