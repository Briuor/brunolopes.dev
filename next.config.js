/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  reactStrictMode: true,
  assetPrefix: isProd ? './' : '',
  images: {
    domains: ['github.com'],
    unoptimized: true,
  },
}

module.exports = nextConfig
