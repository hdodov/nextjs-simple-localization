import bg from "./dictionaries/bg.json";
import en from "./dictionaries/en.json";
import es from "./dictionaries/es.json";

export const baseUrl = process.env.NEXT_PUBLIC_BASE_URL!;
export const translations = { bg, en, es } as const;
export type Locale = keyof typeof translations;
export const locales = Object.keys(translations) as Locale[];
export const defaultLocale: Locale = "en" as const;
