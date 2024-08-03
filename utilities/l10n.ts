import {
  baseUrl,
  defaultLocale,
  Locale,
  locales,
  translations,
} from "@/config";

export const isValidLocale = (input: any): input is Locale =>
  locales.includes(input as Locale);

export const getLocale = (input?: string): Locale =>
  isValidLocale(input) ? input : defaultLocale;

export const getTranslations = (input?: string) =>
  translations[getLocale(input)];

export const basePathLocalized = (locale?: Locale) =>
  `/${locale === defaultLocale ? "" : `${locale}/`}`;

export const baseUrlLocalized = (locale?: Locale) =>
  `${baseUrl}${locale === defaultLocale ? "" : `/${locale}`}`;

export const state = { locale: defaultLocale };
