import {
  baseUrl,
  defaultLocale,
  Locale,
  locales,
  Page,
  translations,
} from "@/config";

export const isValidLocale = (input: any): input is Locale =>
  locales.includes(input as Locale);

export const getLocale = (input?: string): Locale =>
  isValidLocale(input) ? input : defaultLocale;

export const getTranslations = (input?: string) =>
  translations[getLocale(input)];

export const getPath = (locale: Locale, page?: Page) =>
  `/${locale === defaultLocale ? "" : `${locale}/`}${
    !page || page === "home" ? "" : `${page}/`
  }`;

export const getUrl = (locale: Locale, page?: Page) =>
  `${baseUrl}${getPath(locale, page)}`.replace(/\/$/, "");

export const state = { locale: defaultLocale };
