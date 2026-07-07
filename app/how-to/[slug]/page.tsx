import { prisma } from '@/lib/prisma';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Metadata } from 'next';
import sanitizeHtml from 'sanitize-html';
import { marked } from 'marked';

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  
  const guide = await prisma.howToGuide.findUnique({
    where: { slug: params.slug },
  });
  

  if (!guide) {
    return { title: 'Guide Not Found' };
  }

  return {
    title: guide.seoTitle || `${guide.title} | Turbo Bytes Consulting`,
    description: guide.seoDescription || guide.content.substring(0, 160).replace(/\n/g, ' '),
  };
}

export const revalidate = 3600;

export default async function HowToGuidePage({ params }: { params: { slug: string } }) {
  
  const guide = await prisma.howToGuide.findUnique({
    where: { slug: params.slug },
  });
  

  if (!guide) {
    notFound();
  }

  // Parse markdown
  const rawHtml = await marked.parse(guide.content);
  
  const html = sanitizeHtml(rawHtml, {
    allowedTags: sanitizeHtml.defaults.allowedTags.concat([
      "img",
      "h1",
      "h2",
      "iframe",
    ]),
    allowedAttributes: {
      ...sanitizeHtml.defaults.allowedAttributes,
      "*": ["class", "id"],
    },
  });

  return (
    <article className="bg-ivory min-h-screen pt-24 pb-20">
      <div className="container-tbc max-w-3xl mx-auto">
        <Link 
          href="/how-to" 
          className="inline-flex items-center text-sm font-semibold text-royal hover:text-royal-mid mb-8 transition-colors group"
        >
          <svg className="w-4 h-4 mr-2 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to all guides
        </Link>
        
        <header className="mb-12">
          <div className="text-sm font-bold text-gold tracking-widest uppercase mb-4">
            {guide.category}
          </div>
          <h1 className="font-display font-bold text-4xl sm:text-5xl text-ink leading-tight">
            {guide.title}
          </h1>
        </header>

        <div 
          className="
            mx-auto max-w-[760px]
            font-sans text-[17px] text-ink leading-[1.7]
            [&_h2]:font-display [&_h2]:font-bold [&_h2]:text-[26px] [&_h2]:text-ink [&_h2]:leading-[1.25] [&_h2]:mt-12 [&_h2]:mb-4
            [&_h3]:font-display [&_h3]:font-bold [&_h3]:text-[20px] [&_h3]:text-ink [&_h3]:leading-[1.3] [&_h3]:mt-10 [&_h3]:mb-3
            [&_p]:mb-6
            [&_strong]:font-semibold [&_strong]:text-ink
            [&_a]:text-royal [&_a]:underline [&_a]:underline-offset-2 hover:[&_a]:text-royal-mid
            [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-6 [&_ul_li]:mb-2
            [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:mb-6 [&_ol_li]:mb-2
            [&_blockquote]:border-l-4 [&_blockquote]:border-gold [&_blockquote]:pl-5 [&_blockquote]:italic [&_blockquote]:text-mid-grey [&_blockquote]:my-8
            [&_hr]:border-light-grey [&_hr]:my-10
          "
          dangerouslySetInnerHTML={{ __html: html }} 
        />
      </div>
    </article>
  );
}
