/** @type {import('next').NextConfig} */
const nextConfig = {
  // This page has no API routes or server-only features, so a static
  // export is all Netlify needs -- `npm run build` produces a plain `out/`
  // folder of HTML/CSS/JS you can drag onto Netlify or serve from any host.
  output: "export",
  trailingSlash: true,
};

export default nextConfig;
