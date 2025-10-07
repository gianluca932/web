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

export const metadata: Metadata = {
  metadataBase: new URL(DATA_EN.url),
  title: { default: DATA_EN.name, template: `%s | ${DATA_EN.name}` },
  description: DATA_EN.description,
  openGraph: {
    title: DATA_EN.name,
    description: DATA_EN.description,
    url: DATA_EN.url,
    siteName: DATA_EN.name,
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: { title: DATA_EN.name, card: "summary_large_image" },
  verification: { google: "", yandex: "" },
};

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
