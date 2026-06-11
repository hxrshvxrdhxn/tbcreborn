import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  const url = req.nextUrl;
  const hostname = req.headers.get('host') || '';

  // Bypass if it's an API route or static asset
  if (
    url.pathname.startsWith('/api') || 
    url.pathname.startsWith('/_next') || 
    url.pathname.includes('.')
  ) {
    return NextResponse.next();
  }

  // Rewrite for Admin Subdomain
  if (hostname.startsWith('admin.')) {
    if (!url.pathname.startsWith('/admin')) {
      return NextResponse.rewrite(new URL(`/admin${url.pathname === '/' ? '' : url.pathname}`, req.url));
    }
  } 
  // Rewrite for Blog Subdomain
  else if (hostname.startsWith('blog.')) {
    if (!url.pathname.startsWith('/blog')) {
      return NextResponse.rewrite(new URL(`/blog${url.pathname === '/' ? '' : url.pathname}`, req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    // Skip static files, api routes (since we bypass them explicitly anyway, this is a safety net)
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
};
