import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { type Locale } from "@/content/site";

interface PageLayoutProps {
  locale: Locale;
  currentPath: string;
  children: React.ReactNode;
}

export function PageLayout({ locale, currentPath, children }: PageLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header locale={locale} currentPath={currentPath} />
      <main className="flex-1">{children}</main>
      <Footer locale={locale} />
    </div>
  );
}
