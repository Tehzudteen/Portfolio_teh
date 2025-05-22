/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // forces static output
  images: { unoptimized: true }, // if you're using Next < 13 image optimization
}

module.exports = nextConfig
