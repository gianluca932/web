"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

function withLocale(pathname: string, locale: "en" | "it") {
  const base = pathname.replace(/^\/(en|it)(?=\/|$)/, ""); // rimuove prefisso se c'è
  return `/${locale}${base || ""}`;
}

export function LocaleSwitcher({ locale }: { locale: "en" | "it" }) {
  const pathname = usePathname() || "/";
  const enHref = withLocale(pathname, "en");
  const itHref = withLocale(pathname, "it");

  const baseBtn =
    "inline-flex h-8 w-8 items-center justify-center rounded-md border bg-card text-sm transition hover:bg-accent";
  const active = "ring-2 ring-foreground";

  return (
    <div className="flex items-center gap-2">
      <Link
        href={enHref}
        aria-current={locale === "en" ? "page" : undefined}
        className={cn(baseBtn, locale === "en" ? active : "opacity-70")}
        title="English"
      >
        <span aria-hidden>🇬🇧</span>
        <span className="sr-only">English</span>
      </Link>
      <Link
        href={itHref}
        aria-current={locale === "it" ? "page" : undefined}
        className={cn(baseBtn, locale === "it" ? active : "opacity-70")}
        title="Italiano"
      >
        <span aria-hidden>🇮🇹</span>
        <span className="sr-only">Italiano</span>
      </Link>
    </div>
  );
}
