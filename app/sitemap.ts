import { defaultLocale, locales } from "@/config";
import { baseUrlLocalized } from "@/utilities/l10n";
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return locales.map((locale) => ({
    url: baseUrlLocalized(locale),
    lastModified: new Date(),
    priority: locale === defaultLocale ? 1 : 0.5,
  }));
}
