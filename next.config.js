/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 's3.us-west-2.amazonaws.com',
        port: '',
        pathname: '/www.duyou.com.mx/assets/**',
      },
      {
        protocol: 'https',
        hostname: 'placehold.co/**',
        port: '',
      },
    ],
    // domains: ['placehold.co'],
  },
}

module.exports = nextConfig
