/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  assetPrefix: process.env.NODE_ENV === 'production' ? "https://cdn.nav.no/detsombetyrnoe/frontend-onboarding-demo" : undefined
}

module.exports = nextConfig
