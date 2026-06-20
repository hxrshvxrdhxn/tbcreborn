import { PrismaClient } from '@prisma/client'
import fs from 'fs'
import path from 'path'

let prismaUrl = process.env.DATABASE_URL;

if (process.env.NODE_ENV === 'production' && process.env.VERCEL) {
  const dbPath = path.join(process.cwd(), 'prisma', 'dev.db');
  const tmpPath = '/tmp/dev.db';
  
  // Vercel serverless functions are read-only. 
  // We must copy the bundled SQLite database to /tmp so Prisma can open it.
  if (fs.existsSync(dbPath)) {
    try {
      fs.copyFileSync(dbPath, tmpPath);
      prismaUrl = 'file:/tmp/dev.db';
      console.log('Successfully copied SQLite DB to /tmp for Vercel runtime.');
    } catch (e) {
      console.error('Failed to copy dev.db to /tmp', e);
    }
  } else {
    console.error('Could not find dev.db at', dbPath);
  }
}

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

export const prisma = globalForPrisma.prisma ?? new PrismaClient(
  prismaUrl ? { datasources: { db: { url: prismaUrl } } } : undefined
)

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma
