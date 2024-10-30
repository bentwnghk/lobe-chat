import resources from './default';

export const locales = [
  'ar',
  'bg-BG',
  'de-DE',
  'en-US',
  'es-ES',
  'fr-FR',
  'ja-JP',
  'ko-KR',
  'pt-BR',
  'ru-RU',
  'tr-TR',
  'zh-CN',
  'zh-TW',
  'vi-VN',
  'fa-IR',
] as const;

export type DefaultResources = typeof resources;
export type NS = keyof DefaultResources;
export type Locales = (typeof locales)[number];

export const normalizeLocale = (locale?: string): string => {
  if (!locale) return 'en-US';

  if (locale.startsWith('ar')) return 'ar';

  if (locale.startsWith('cn')) return 'zh-CN';

  for (const l of locales) {
    if (l.startsWith(locale)) {
      return l;
    }
  }

  return 'en-US';
};

type LocaleOptions = {
  label: string;
  value: Locales;
}[];

export const localeOptions: LocaleOptions = [
  {
    label: 'English',
    value: 'en-US',
  },
  {
    label: '繁體中文',
    value: 'zh-TW',
  },
  {
    label: '简体中文',
    value: 'zh-CN',
  },
  {
    label: 'فارسی',
    value: 'fa-IR',
  },
] as LocaleOptions;

export const supportLocales: string[] = [...locales, 'en', 'zh'];