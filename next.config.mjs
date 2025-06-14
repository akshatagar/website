/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static optimization
  reactStrictMode: true,
  // Disable server-side runtime JS
  poweredByHeader: false,
  // Optimize images
  images: {
    domains: [],
    formats: ['image/avif', 'image/webp'],
    // Cache optimized images for 30 days
    minimumCacheTTL: 2592000,
  },
  // Use SWC minifier
  swcMinify: true,
  // Enable compression
  compress: true,
  // Configure static generation
  staticPageGenerationTimeout: 120,
  // Experimental features
  experimental: {
    // Optimize CSS
    optimizeCss: true,
    // Optimize fonts
    optimizeFonts: true,
  }
};

export default nextConfig;
