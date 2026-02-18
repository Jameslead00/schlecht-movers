/** @type {import('next').NextConfig} */
const repoName = 'schlecht-movers'

module.exports = {
  // Required for `next export`
  output: 'export',
  // If deploying to https://<user>.github.io/<repo>/ set basePath + assetPrefix
  basePath: `/${repoName}`,
  assetPrefix: `/${repoName}/`,
  // Disable Next.js Image Optimization for static export / GitHub Pages
  images: {
    unoptimized: true,
  },
}
