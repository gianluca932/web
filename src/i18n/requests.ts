import {getRequestConfig} from 'next-intl/server';
import {LOCALES, DEFAULT_LOCALE} from './locales';

const LOADERS = {
  en: () => import('../messages/en.json').then(m => m.default),
  it: () => import('../messages/it.json').then(m => m.default),
} as const;

function isSupported(l?: string): l is keyof typeof LOADERS {
  return !!l && (LOCALES as readonly string[]).includes(l);
}

export default getRequestConfig(async ({ locale }) => {
  // ✅ Trust the URL param first; fallback to default only if unknown
  const current = isSupported(locale) ? locale : DEFAULT_LOCALE;
  const messages = await LOADERS[current]();
  return { locale: current, messages };
});
