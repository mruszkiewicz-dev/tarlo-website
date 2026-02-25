/** @type {import('next').NextConfig} */
const nextConfig = {
  publicRuntimeConfig: {
    NEXT_PUBLIC_ROBOTS_TXT: process.env.NEXT_PUBLIC_ROBOTS_TXT,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.imgur.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig
