import { defaultLocale, locales } from "@/config";
import { getLocale, state } from "@/utilities/l10n";

export type Props = {
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

export default function Home({
  children,
  params: { locale },
}: Readonly<Props & { children: React.ReactNode }>) {
  const activeLocale = getLocale(locale);
  state.locale = activeLocale;
  return children;
}
