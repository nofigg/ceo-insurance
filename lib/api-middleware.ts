import { NextApiRequest, NextApiResponse } from 'next'
import rateLimit from './rate-limit'

const limiter = rateLimit({
  interval: 60 * 1000, // 60 seconds
  uniqueTokenPerInterval: 500, // Max 500 users per interval
})

export default async function apiMiddleware(
  req: NextApiRequest,
  res: NextApiResponse,
  next: () => void
) {
  // Rate limiting
  try {
    await limiter.check(10, req.ip!) // 10 requests per minute
  } catch {
    res.status(429).json({ error: 'Rate limit exceeded' })
    return
  }

  // Sanitize input
  if (req.body) {
    // Remove any potential XSS content
    Object.keys(req.body).forEach(key => {
      if (typeof req.body[key] === 'string') {
        req.body[key] = req.body[key]
          .replace(/[<>]/g, '') // Remove < and >
          .replace(/javascript:/gi, '') // Remove javascript: protocol
          .trim()
      }
    })
  }

  // Add security headers
  res.setHeader('X-Content-Type-Options', 'nosniff')
  res.setHeader('X-Frame-Options', 'DENY')
  res.setHeader('X-XSS-Protection', '1; mode=block')

  // Continue to the API route
  next()
}
