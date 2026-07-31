/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export — deployable to GitHub Pages (gh-pages branch)
  output: "export",
  // GitHub Pages serves folders; trailing slashes make /how-it-works/ resolve
  trailingSlash: true,
};

export default nextConfig;
