import { getTranslations } from "@/utilities/l10n";
import { Metadata } from "next";
import { Props } from "./layout";
import Main from "./main";

export function generateMetadata({ params: { locale } }: Props): Metadata {
  const t = getTranslations(locale);
  return {
    title: t.home.meta.title,
    description: t.home.meta.description,
  };
}

export default function Home({ params: { locale } }: Readonly<Props>) {
  const t = getTranslations(locale);
  return (
    <Main locale={locale} page="home">
      <h1 className="text-4xl font-bold my-4">{t.home.heading}</h1>
      <p className="text-lg">{t.home.subheading}</p>
    </Main>
  );
}
