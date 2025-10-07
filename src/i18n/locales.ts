export const LOCALES = ['en', 'it'] as const;
export type Locale = typeof LOCALES[number];
export const DEFAULT_LOCALE: Locale = 'en';

export function isSupportedLocale(l?: string): l is Locale {
  return !!l && (LOCALES as readonly string[]).includes(l);
}