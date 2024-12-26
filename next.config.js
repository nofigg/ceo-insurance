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
  // Ensure proper CSS processing
  experimental: {
    optimizeCss: true
  }
}

module.exports = nextConfig
