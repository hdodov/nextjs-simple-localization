import { getTranslations } from "@/utilities/l10n";
import { Metadata } from "next";
import { Props } from "../layout";
import Main from "../main";

export function generateMetadata({ params: { locale } }: Props): Metadata {
  const t = getTranslations(locale);
  return {
    title: `${t.pages.about} • ${t.home.meta.title}`,
    description: t.about.meta.description,
  };
}

export default function About({ params: { locale } }: Readonly<Props>) {
  const t = getTranslations(locale);
  return (
    <Main locale={locale} page="about">
      <h1 className="text-4xl font-bold my-4">{t.about.heading}</h1>
      <p
        className="text-lg"
        dangerouslySetInnerHTML={{ __html: t.about.subheading }}
      ></p>
    </Main>
  );
}
