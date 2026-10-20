import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Plain static HTML in out/, served by AWS Amplify as before.
  output: 'export',
  // Keep the /about/ style URLs (and canonicals) the Astro build produced.
  trailingSlash: true,
  // The image optimiser needs a server; portraits are already WebP on S3.
  images: { unoptimized: true },
};

export default nextConfig;
