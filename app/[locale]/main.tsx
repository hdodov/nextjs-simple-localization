import Nav from "@/components/nav";
import { Page } from "@/config";

export default function Main({
  children,
  locale,
  page,
}: {
  children: React.ReactNode;
  locale: string | undefined;
  page: Page;
}) {
  return (
    <main className="my-16 px-4 text-center">
      <Nav locale={locale} page={page} />
      {children}
    </main>
  );
}
