/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'stomptheworld.org',
      },
    ],
  },
}

module.exports = nextConfig
