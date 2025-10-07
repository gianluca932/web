// middleware.ts (root)
import createMiddleware from 'next-intl/middleware';
export default createMiddleware({locales:['en','it'], defaultLocale:'en', localePrefix:'always'});
export const config = { matcher: ['/', '/(en|it)/:path*'] };