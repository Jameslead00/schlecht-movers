import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Schlecht Movers – Ihr kompetenter Umzugspartner",
    template: "%s | Schlecht Movers",
  },
  description:
    "Schlecht und Co. GmbH – Professionelle Umzüge, Firmenumzüge, Räumungen, Entsorgungen und USM-Haller Montagen in Reinach, Basel-Landschaft und der ganzen Schweiz.",
  keywords: [
    "Umzug",
    "Firmenumzug",
    "Räumung",
    "Entsorgung",
    "USM Haller",
    "Reinach",
    "Basel",
    "Schweiz",
  ],
  metadataBase: new URL("https://schlecht-movers.ch"),
  openGraph: {
    type: "website",
    locale: "de_CH",
    siteName: "Schlecht Movers",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={inter.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
