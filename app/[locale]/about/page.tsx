import Nav from "@/components/nav";
import { getTranslations } from "@/utilities/l10n";
import { Metadata } from "next";
import { Props } from "../layout";

export function generateMetadata({ params: { locale } }: Props): Metadata {
  const t = getTranslations(locale);
  return {
    title: t.meta.title,
    description: t.meta.description,
  };
}

export default function Home({ params: { locale } }: Readonly<Props>) {
  const t = getTranslations(locale);
  return (
    <main className="my-16 px-4 text-center">
      <Nav locale={locale} page="about" />
      <h1 className="text-4xl font-bold my-4">About {t.home.heading}</h1>
      <p className="text-lg">About {t.home.subheading}</p>
    </main>
  );
}
