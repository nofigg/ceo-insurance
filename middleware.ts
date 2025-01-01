import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const response = NextResponse.next()

  // Add security headers
  const headers = response.headers

  // Allow same origin framing
  headers.set('X-Frame-Options', 'SAMEORIGIN')

  // Help prevent XSS attacks
  headers.set('X-XSS-Protection', '1; mode=block')
  headers.set('X-Content-Type-Options', 'nosniff')

  // Add caching headers for static content
  if (request.nextUrl.pathname.match(/\.(js|css|png|jpg|jpeg|gif|ico)$/)) {
    headers.set('Cache-Control', 'public, max-age=31536000, immutable')
  } else {
    headers.set('Cache-Control', 'public, max-age=3600, must-revalidate')
  }

  // Content Security Policy - Less restrictive
  headers.set(
    'Content-Security-Policy',
    "default-src 'self' https: data: 'unsafe-inline' 'unsafe-eval'; " +
    "script-src 'self' 'unsafe-inline' 'unsafe-eval' https: blob:; " +
    "style-src 'self' 'unsafe-inline' https:; " +
    "img-src 'self' data: https: blob:; " +
    "font-src 'self' data: https:; " +
    "connect-src 'self' https:; " +
    "media-src 'self' https: data: blob:; " +
    "object-src 'none'; " +
    "base-uri 'self'; " +
    "form-action 'self' https:; " +
    "frame-ancestors 'self';"
  )

  return response
}

// Specify which paths this middleware will run on
export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}
