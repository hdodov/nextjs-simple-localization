import { getLocale, state } from "@/utilities/l10n";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={getLocale(state.locale)}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
