import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

import { isValidSession } from '@/lib/redis';

export async function middleware(req: NextRequest) {
  const url = req.nextUrl;
  const hostname = req.headers.get('host') || '';
  // Behind our reverse proxy req.url is the internal address (localhost:3000), so redirects are built
  // from the public host the visitor actually used.
  const fwdHost = req.headers.get('x-forwarded-host') || hostname;
  // Only our own domains: a forged host header must never turn a redirect into an open redirect.
  const publicBase = /^(www\.|admin\.|blog\.)?turbobytesconsulting\.(com|in)$/.test(fwdHost)
    ? `https://${fwdHost}`
    : 'https://turbobytesconsulting.com';

  // Bypass if it's a public API route or static asset
  if (
    url.pathname.startsWith('/_next') || 
    url.pathname.includes('.')
  ) {
    return NextResponse.next();
  }

  // Helper to check auth
  async function checkAuth() {
    const token = req.cookies.get("admin_session")?.value;
    if (!token) return false;
    return await isValidSession(token);
  }

  // Protect admin API routes
  if (url.pathname.startsWith('/api/admin') || url.pathname.startsWith('/api/blog-admin')) {
    // The login form posts to /api/admin/auth, which checks the password itself.
    if (url.pathname !== '/api/admin/auth') {
      if (!(await checkAuth())) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
      }
    }
  }

  // Bypass other public API routes
  if (url.pathname.startsWith('/api')) {
    return NextResponse.next();
  }

  // Handle .com redirects for subdomains
  if (hostname.endsWith('.com')) {
    if (hostname.startsWith('admin.') || hostname.startsWith('blog.')) {
      return NextResponse.redirect(new URL('/', 'https://turbobytesconsulting.com'), 308);
    }
  }


  // 1. Direct path access protection
  if (url.pathname.startsWith('/admin') && url.pathname !== '/admin/login') {
    if (!(await checkAuth())) {
      return NextResponse.redirect(new URL('/admin/login', publicBase));
    }
  }
  if (url.pathname.startsWith('/blog-admin') && url.pathname !== '/blog-admin/login') {
    if (!(await checkAuth())) {
      return NextResponse.redirect(new URL('/blog-admin/login', publicBase));
    }
  }

  // 2. Subdomain routing and protection
  if (hostname.startsWith('admin.')) {
    if (!url.pathname.startsWith('/admin')) {
      if (url.pathname !== '/login' && !(await checkAuth())) {
        return NextResponse.redirect(new URL('/login', publicBase));
      }
      return NextResponse.rewrite(new URL(`/admin${url.pathname === '/' ? '' : url.pathname}`, req.url));
    }
  } 
  else if (hostname.startsWith('blog.')) {
    if (!url.pathname.startsWith('/blog-admin')) {
      if (url.pathname !== '/login' && !(await checkAuth())) {
        return NextResponse.redirect(new URL('/login', publicBase));
      }
      return NextResponse.rewrite(new URL(`/blog-admin${url.pathname === '/' ? '' : url.pathname}`, req.url));
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
