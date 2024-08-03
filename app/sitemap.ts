import { defaultLocale, locales, pages } from "@/config";
import { pageUrlLocalized } from "@/utilities/l10n";
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map((p) => ({
    url: pageUrlLocalized(defaultLocale, p),
    lastModified: new Date(),
    priority: p === "home" ? 1 : 0.5,
    alternates: {
      languages: Object.fromEntries(
        locales
          .filter((l) => l !== defaultLocale)
          .map((l) => [l, pageUrlLocalized(l, p)])
      ),
    },
  }));
}
