import { locales, Page, pages } from "@/config";
import { basePathLocalized, getLocale } from "@/utilities/l10n";
import Link from "next/link";

export default function Nav({
  locale,
  page,
}: {
  locale: string | undefined;
  page: Page;
}) {
  const activeLocale = getLocale(locale);
  const activePage = !page ? "home" : page;
  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-center gap-2">
        {locales.map((locale) => (
          <Link
            className={`px-3 py-1 rounded-md ${
              locale === activeLocale ? "bg-slate-200" : "bg-slate-100"
            }`}
            href={`${basePathLocalized(locale)}${
              activePage === "home" ? "" : page
            }`}
            key={locale}
          >
            {locale}
          </Link>
        ))}
      </div>
      <div className="flex justify-center gap-2">
        {pages.map((page) => (
          <Link
            className={`px-3 py-1 rounded-md ${
              page === activePage ? "bg-slate-200" : "bg-slate-100"
            }`}
            href={`${basePathLocalized(activeLocale)}${
              page === "home" ? "" : page
            }`}
            key={page}
          >
            {page}
          </Link>
        ))}
      </div>
    </div>
  );
}
