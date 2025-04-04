/** @type {import('next/config').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: process.env.NEXT_PUBLIC_BASE_PATH,
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    domains: ['github.com'],
    path: process.env.NEXT_PUBLIC_BASE_PATH || '',
  },
  trailingSlash: true,
}

module.exports = nextConfig