import { locales, Page, pages } from "@/config";
import { getLocale, getPath, getTranslations } from "@/utilities/l10n";
import Link from "next/link";

function List({
  items,
}: {
  items: { active: boolean; href: string; text: string }[];
}) {
  return (
    <div className="flex justify-center gap-2">
      {items.map(({ active, href, text }) => (
        <Link
          className={`px-3 py-1 rounded-md ${
            active ? "bg-slate-200" : "bg-slate-100"
          }`}
          href={href}
          key={text}
        >
          {text}
        </Link>
      ))}
    </div>
  );
}

export default function Nav({
  locale,
  page,
}: {
  locale: string | undefined;
  page: Page;
}) {
  const activeLocale = getLocale(locale);
  const t = getTranslations(activeLocale);
  return (
    <div className="flex flex-col gap-2">
      <List
        items={locales.map((l) => ({
          active: l === activeLocale,
          href: getPath(l, page),
          text: l,
        }))}
      />
      <List
        items={pages.map((p) => ({
          active: p === page,
          href: getPath(activeLocale, p),
          text: t.pages[p],
        }))}
      />
    </div>
  );
}
