import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const response = NextResponse.next()

  // Add security headers
  const headers = response.headers

  // Prevent clickjacking attacks
  headers.set('X-Frame-Options', 'DENY')

  // Help prevent XSS attacks
  headers.set('X-XSS-Protection', '1; mode=block')
  headers.set('X-Content-Type-Options', 'nosniff')

  // Strict Transport Security
  headers.set(
    'Strict-Transport-Security',
    'max-age=31536000; includeSubDomains; preload'
  )

  // Add caching headers for static content
  if (request.nextUrl.pathname.match(/\.(js|css|png|jpg|jpeg|gif|ico)$/)) {
    headers.set('Cache-Control', 'public, max-age=31536000, immutable')
  } else {
    headers.set('Cache-Control', 'public, max-age=3600, must-revalidate')
  }

  // Content Security Policy
  headers.set(
    'Content-Security-Policy',
    "default-src 'self'; " +
    "script-src 'self' 'unsafe-inline' 'unsafe-eval' *.vercel-scripts.com; " +
    "script-src-elem 'self' 'unsafe-inline' 'unsafe-eval' *.vercel-scripts.com; " +
    "connect-src 'self' *.vercel-scripts.com; " +
    "style-src 'self' 'unsafe-inline'; " +
    "img-src 'self' data: https: blob:; " +
    "font-src 'self' data:; " +
    "object-src 'none'; " +
    "base-uri 'self'; " +
    "form-action 'self'; " +
    "frame-ancestors 'none'; " +
    "block-all-mixed-content; " +
    "upgrade-insecure-requests;"
  )

  // Permissions Policy
  headers.set(
    'Permissions-Policy',
    'camera=(), microphone=(), geolocation=(), interest-cohort=()'
  )

  // Referrer Policy
  headers.set('Referrer-Policy', 'strict-origin-when-cross-origin')

  return response
}

// Specify which paths this middleware will run on
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}
