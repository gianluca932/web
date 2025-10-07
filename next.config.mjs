
// next.config.mjs
import createNextIntlPlugin from 'next-intl/plugin';

// Point to the config file you created under src/i18n
const withNextIntl = createNextIntlPlugin('./src/i18n/requests.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
 reactStrictMode: true,
  output: "standalone",
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  images: { unoptimized: true },
};

export default withNextIntl(nextConfig);

