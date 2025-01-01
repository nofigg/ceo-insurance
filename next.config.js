/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    // Add any webpack-specific configurations here if needed
    return config
  },
  // Disable type checking during builds for better performance
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ['images.unsplash.com'],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://*.vercel-scripts.com",
              "script-src-elem 'self' 'unsafe-inline' 'unsafe-eval' https://*.vercel-scripts.com",
              "connect-src 'self' https://*.vercel-scripts.com",
            ].join('; ')
          },
        ],
      },
    ]
  },
  experimental: {
    optimizeCss: true
  },
}

module.exports = nextConfig
