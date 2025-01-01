/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' https: data:; font-src 'self' data:;"
          }
        ]
      }
    ];
  },
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    // Add any webpack-specific configurations here if needed
    if (!isServer) {
      // client-side config adjustments
    }
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
  // Disable Vercel Analytics
  analyticsId: false,
  // Disable Speed Insights
  speedInsights: {
    enabled: false,
  },
}

module.exports = nextConfig
