import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// In-memory store for rate limiting
const rateLimit = new Map()

// Rate limit window in seconds
const WINDOW_SIZE = 60
// Maximum requests per window
const MAX_REQUESTS = 10

export function middleware(request: NextRequest) {
  // Get IP address from Vercel headers
  const ip = request.headers.get('x-forwarded-for') || 'unknown'
  const now = Date.now()

  // Initialize or get rate limit data for this IP
  const rateLimitData = rateLimit.get(ip) || {
    count: 0,
    resetTime: now + (WINDOW_SIZE * 1000)
  }

  // Reset count if window has expired
  if (now > rateLimitData.resetTime) {
    rateLimitData.count = 0
    rateLimitData.resetTime = now + (WINDOW_SIZE * 1000)
  }

  // Increment request count
  rateLimitData.count++
  rateLimit.set(ip, rateLimitData)

  // Check if rate limit exceeded
  if (rateLimitData.count > MAX_REQUESTS) {
    return new NextResponse('Rate limit exceeded', {
      status: 429,
      headers: {
        'Retry-After': String(WINDOW_SIZE),
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,OPTIONS,POST',
      }
    })
  }

  // Add security headers
  const response = NextResponse.next()
  response.headers.set('X-Content-Type-Options', 'nosniff')
  response.headers.set('X-Frame-Options', 'DENY')
  response.headers.set('X-XSS-Protection', '1; mode=block')

  return response
}

// Configure which routes to run middleware on
export const config = {
  matcher: '/((?!_next/static|_next/image|favicon.ico).*)',
}
