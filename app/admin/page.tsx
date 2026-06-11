import Link from "next/link";
import { prisma } from "@/lib/prisma";
import AdminLogout from "./AdminLogout";

export const dynamic = "force-dynamic";

export default async function AdminPage() {
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
              LEADS INBOX
            </span>
          </div>
          <AdminLogout />
        </div>
      </header>

      <main className="container-tbc py-12">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="mb-2">
            <h1 className="font-display font-bold text-[28px] text-ink">Contact Queries</h1>
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
      </main>
    </div>
  );
}
