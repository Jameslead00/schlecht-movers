import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Schlecht & Co GmbH – Ihr kompetenter Umzugspartner",
    template: "%s | Schlecht & Co GmbH",
  },
  description:
    "Schlecht & Co GmbH – Professionelle Umzüge, Firmenumzüge, Räumungen, Entsorgungen und USM-Haller Montagen in Reinach, Basel-Landschaft und der ganzen Schweiz.",
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
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    type: "website",
    locale: "de_CH",
    siteName: "Schlecht & Co GmbH",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
