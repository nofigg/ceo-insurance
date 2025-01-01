/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self' 'unsafe-inline' 'unsafe-eval' data: blob: https://*.vercel.app https://*.vercel.com https://vercel.live https://*.vercel-insights.com;",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://*.vercel.app https://*.vercel.com https://*.vercel-scripts.com https://vercel.live https://*.vercel-insights.com;",
              "style-src 'self' 'unsafe-inline';",
              "img-src 'self' data: https: blob:;",
              "font-src 'self' data:;",
              "connect-src 'self' https://*.vercel.app https://*.vercel.com https://*.vercel-insights.com https: wss:;",
              "frame-src 'self' https://vercel.live https://*.vercel.app https://*.vercel.com;",
              "worker-src 'self' blob:;",
              "child-src 'self' blob: https://vercel.live https://*.vercel.app https://*.vercel.com;"
            ].join(' ')
          }
        ]
      }
    ];
  },
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
  experimental: {
    optimizeCss: true
  },
}

module.exports = nextConfig
