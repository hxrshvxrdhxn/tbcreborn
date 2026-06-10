import Link from "next/link";
import { getAdminPosts } from "@/lib/posts";
import { prisma } from "@/lib/prisma";
import AdminLogout from "./AdminLogout";

export const dynamic = "force-dynamic";

const STATUS_STYLES: Record<string, string> = {
  published: "bg-tbc-emerald-light text-tbc-emerald",
  draft:     "bg-light-grey text-mid-grey",
  scheduled: "bg-gold-light text-gold",
};

export default async function AdminPage() {
  const managed = await getAdminPosts();
  const queries = await prisma.contactQuery.findMany({
    orderBy: { createdAt: "desc" },
  });

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
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column: Posts */}
          <div className="lg:col-span-2 space-y-8">
            <div className="flex items-center justify-between mb-2">
              <div>
                <h1 className="font-display font-bold text-[28px] text-ink">Blog Posts</h1>
                <p className="font-sans text-[14px] text-mid-grey mt-1">
                  {managed.length} total posts
                </p>
              </div>
              <Link href="/admin/new" className="btn-primary">
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
                      href={`/admin/edit/${post.slug}`}
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

          {/* Right Column: Contact Queries */}
          <div className="space-y-8">
            <div className="mb-2">
              <h1 className="font-display font-bold text-[28px] text-ink">Leads Inbox</h1>
              <p className="font-sans text-[14px] text-mid-grey mt-1">
                {queries.length} total form submissions
              </p>
            </div>

            {queries.length > 0 ? (
              <div className="bg-white rounded-[8px] border border-light-grey shadow-card divide-y divide-light-grey max-h-[800px] overflow-y-auto">
                {queries.map((q) => (
                  <div key={q.id} className="p-5 hover:bg-ivory/60 transition-colors">
                    <div className="flex items-start justify-between mb-1">
                      <p className="font-display font-bold text-[15px] text-ink">{q.name}</p>
                      <p className="font-sans text-[11px] text-mid-grey shrink-0">{q.createdAt.toLocaleDateString()}</p>
                    </div>
                    <p className="font-sans text-[13px] text-mid-grey font-semibold">{q.company}</p>
                    <a href={`mailto:${q.email}`} className="font-sans text-[13px] text-royal block mb-2">{q.email}</a>
                    
                    <div className="space-y-1 mb-3">
                      <p className="font-sans text-[12px]"><span className="text-mid-grey">Service:</span> {q.service}</p>
                      {q.budget && <p className="font-sans text-[12px]"><span className="text-mid-grey">Budget:</span> {q.budget}</p>}
                      {q.phone && <p className="font-sans text-[12px]"><span className="text-mid-grey">Phone:</span> {q.phone}</p>}
                    </div>

                    <div className="bg-ivory p-3 rounded text-[13px] text-ink whitespace-pre-wrap">
                      {q.message}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="p-8 text-center bg-white border border-light-grey rounded-[8px]">
                <p className="text-mid-grey">No contact queries yet.</p>
              </div>
            )}
            
            {/* Quick Stats Box */}
            <div className="bg-ink p-6 rounded-[8px] text-white">
               <h3 className="font-display font-bold text-[18px] mb-2 text-gold">Analytics Hub</h3>
               <p className="font-sans text-[13px] text-light-grey mb-4">View deep visitor insights natively in your dashboard.</p>
               <a href="https://vercel.com/analytics" target="_blank" rel="noopener noreferrer" className="btn-primary w-full text-center block">
                 Open Vercel Analytics ↗
               </a>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}
