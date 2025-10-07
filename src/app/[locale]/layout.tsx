import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { cn } from "@/lib/utils";
import { DATA as DATA_EN } from "@/data/resume.en"; // or use generateMetadata below for per-locale
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "../globals.css";

const fontSans = FontSans({ subsets: ["latin"], variable: "--font-sans" });
export const dynamic = "force-static";

import { DATA as EN } from "@/data/resume.en";
import { DATA as IT } from "@/data/resume.it";

const SITE = "https://giordanogianluca.com";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: "en" | "it" };
}): Promise<Metadata> {
  const D = locale === "it" ? IT : EN;

  return {
    metadataBase: new URL(SITE),
    title: { default: D.name, template: `%s | ${D.name}` },
    description: D.description,
    alternates: {
      canonical: `/${locale}`,
      languages: {
        en: "/en",
        it: "/it",
      },
    },
    openGraph: {
      title: D.name,
      description: D.description,
      url: `/${locale}`,
      siteName: D.name,
      locale: locale === "it" ? "it_IT" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: D.name,
      description: D.description,
    },
  };
}
// (Optional) make metadata locale-aware:
// export async function generateMetadata({params:{locale}}): Promise<Metadata> { ... pick EN/IT ... }

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: "en" | "it" };
}) {
  const messages = await getMessages(locale); // ✅ loads via the plugin

  return (
    <html suppressHydrationWarning lang={locale}>
      <body
        className={cn(
          "min-h-dvh bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
          <NextIntlClientProvider messages={messages} locale={locale}>
            <ThemeProvider attribute="class" defaultTheme="light">
              <TooltipProvider delayDuration={0}>
                {children}
                <Navbar />
              </TooltipProvider>
            </ThemeProvider>
          </NextIntlClientProvider>
        </div>
      </body>
    </html>
  );
}
