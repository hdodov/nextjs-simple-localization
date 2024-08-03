import { defaultLocale, locales } from "@/config";
import {
  basePathLocalized,
  getLocale,
  getTranslations,
  state,
} from "@/utilities/l10n";
import { Metadata } from "next";
import Link from "next/link";

type Props = {
  params: {
    /**
     * Optional because it's not available in `app/page.tsx`.
     */
    locale?: string;
  };
};

export function generateStaticParams(): Props["params"][] {
  return locales
    .filter((locale) => locale !== defaultLocale)
    .map((locale) => ({ locale: locale }));
}

export function generateMetadata({ params: { locale } }: Props): Metadata {
  const t = getTranslations(locale);
  return {
    title: t.meta.title,
    description: t.meta.description,
  };
}

export default function Home({ params: { locale } }: Readonly<Props>) {
  const activeLocale = getLocale(locale);
  const t = getTranslations(activeLocale);
  state.locale = activeLocale;
  return (
    <main className="my-16 px-4 text-center">
      <div className="flex justify-center gap-2">
        {locales.map((locale) => (
          <Link
            className={`px-3 py-1 rounded-md ${
              locale === activeLocale ? "bg-slate-200" : "bg-slate-100"
            }`}
            href={basePathLocalized(locale)}
            key={locale}
          >
            {locale}
          </Link>
        ))}
      </div>
      <h1 className="text-4xl font-bold my-4">{t.home.heading}</h1>
      <p className="text-lg">{t.home.subheading}</p>
    </main>
  );
}
