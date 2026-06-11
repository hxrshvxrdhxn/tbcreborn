import Link from "next/link";
import { getAdminPosts } from "@/lib/posts";
import AdminLogout from "./AdminLogout";

export const dynamic = "force-dynamic";

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
        <div className="max-w-4xl mx-auto space-y-8">
          
          {/* Blog Posts */}
          <div className="space-y-8">
            <div className="flex items-center justify-between mb-2">
              <div>
                <h1 className="font-display font-bold text-[28px] text-ink">Blog Posts</h1>
                <p className="font-sans text-[14px] text-mid-grey mt-1">
                  {managed.length} total posts
                </p>
              </div>
              <Link href="/blog-admin/new" className="btn-primary">
                + New Post
              </Link>
            </div>

            {managed.length > 0 ? (
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
                      href={`/blog-admin/edit/${post.slug}`}
                      className="font-display font-semibold text-[13px] text-royal hover:text-royal-mid transition-colors shrink-0"
                    >
                      Edit →
                    </Link>
                  </div>
                ))}
              </div>
            ) : (
              <div className="p-8 text-center bg-white border border-light-grey rounded-[8px]">
                <p className="text-mid-grey">No blog posts found.</p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
