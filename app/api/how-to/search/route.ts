import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const q = searchParams.get('q');

  if (!q) {
    return NextResponse.json({ results: [] });
  }

  try {
    const results = await prisma.howToGuide.findMany({
      where: {
        OR: [
          { title: { contains: q } },
          { content: { contains: q } },
          { category: { contains: q } },
        ],
      },
      select: {
        id: true,
        title: true,
        slug: true,
        category: true,
      },
      take: 10,
    });

    return NextResponse.json({ results });
  } catch (error) {
    console.error('Search error:', error);
    return NextResponse.json({ error: 'Failed to search' }, { status: 500 });
  }
}
