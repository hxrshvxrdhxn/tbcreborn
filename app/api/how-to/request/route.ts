import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { query, email } = body;

    if (!query || !email) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const newRequest = await prisma.howToRequest.create({
      data: { query, email },
    });

    // You could optionally send an email notification here using Resend or Nodemailer
    // to alert the admin that a new How-To topic was requested.

    return NextResponse.json({ success: true, request: newRequest });
  } catch (error) {
    console.error('Failed to submit request:', error);
    return NextResponse.json(
      { error: 'Failed to submit request' },
      { status: 500 }
    );
  }
}
