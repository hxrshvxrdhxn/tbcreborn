import { PrismaClient } from '@prisma/client';
import Link from 'next/link';
import HowToSearch from './HowToSearch';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How-To Guides | Turbo Bytes Consulting',
  description: 'Practical, actionable guides for Indian business owners and founders scaling their operations.',
};

export const revalidate = 3600; // Revalidate every hour

async function getAllGuides() {
  const prisma = new PrismaClient();
  const guides = await prisma.howToGuide.findMany({
    select: {
      id: true,
      title: true,
      slug: true,
      category: true,
    },
    orderBy: {
      title: 'asc',
    },
  });
  await prisma.$disconnect();
  return guides;
}

export default async function HowToLanding() {
  const guides = await getAllGuides();

  return (
    <div className="bg-ivory min-h-screen pt-24 pb-20">
      <div className="container-tbc max-w-4xl mx-auto">
        <header className="mb-16 text-center">
          <h1 className="font-display font-bold text-4xl sm:text-5xl text-ink mb-6">
            How-To Guides
          </h1>
          <p className="text-lg text-mid-grey max-w-2xl mx-auto mb-12">
            Practical, step-by-step guides for Indian founders navigating the complexities of scaling operations, technology, and people. Search our repository below.
          </p>
          
          <HowToSearch />
        </header>

        <div className="mt-20">
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {guides.map((guide) => (
              <li key={guide.id}>
                <Link
                  href={`/how-to/${guide.slug}`}
                  className="block p-6 h-full bg-white rounded-xl border border-light-grey hover:border-gold hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div className="text-xs text-royal font-bold tracking-wider uppercase mb-3">
                    {guide.category}
                  </div>
                  <h3 className="font-display font-bold text-[18px] text-ink group-hover:text-royal leading-tight">
                    {guide.title}
                  </h3>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
