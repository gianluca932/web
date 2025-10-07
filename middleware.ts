import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ["en", "it"],
  defaultLocale: "en",
  localePrefix: "always", // URLs sempre /en o /it
  localeDetection: true, // usa Accept-Language + cookie NEXT_LOCALE
});

export const config = {
  matcher: ["/", "/(en|it)/:path*"],
};
