import { NextApiRequest, NextApiResponse } from 'next'
import rateLimit from 'express-rate-limit'
import { RateLimiterMemory } from 'rate-limiter-flexible'

const limiter = new RateLimiterMemory({
  points: 10, // Number of points
  duration: 60, // Per 60 seconds
})

export function withApiMiddleware(handler: (req: NextApiRequest, res: NextApiResponse) => Promise<void>) {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    // CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,POST')
    
    // Rate limiting
    try {
      const clientIp = req.headers['x-forwarded-for'] || 
                      req.socket.remoteAddress || 
                      'unknown'
      const ip = Array.isArray(clientIp) ? clientIp[0] : clientIp
      await limiter.consume(ip) // 10 requests per minute
    } catch {
      res.status(429).json({ error: 'Rate limit exceeded' })
      return
    }

    // Handle preflight request
    if (req.method === 'OPTIONS') {
      res.status(200).end()
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

    return handler(req, res)
  }
}
