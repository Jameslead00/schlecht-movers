import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-1/4 -left-32 w-64 h-64 rounded-full bg-brand/[0.04] blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-64 h-64 rounded-full bg-brand/[0.03] blur-3xl" />

      <div className="text-center max-w-md relative">
        <div className="text-[120px] sm:text-[160px] font-bold leading-none text-brand/10 select-none mb-[-30px] sm:mb-[-40px]">
          404
        </div>
        <div className="w-14 h-14 rounded-2xl bg-brand/10 flex items-center justify-center mx-auto mb-6">
          <span className="text-xl font-bold text-brand">S</span>
        </div>
        <h1 className="text-2xl font-bold text-foreground mb-3">
          Seite nicht gefunden
        </h1>
        <p className="text-text-secondary mb-2 leading-relaxed">
          Die angeforderte Seite existiert leider nicht.
        </p>
        <p className="text-text-muted text-sm mb-10">
          The requested page could not be found.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-brand text-white font-medium rounded-xl hover:bg-brand-light transition-colors text-sm shadow-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Zur Startseite
          </Link>
          <Link
            href="/en/home"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-border text-foreground font-medium rounded-xl hover:bg-bg-alt transition-colors text-sm"
          >
            <Home className="w-4 h-4" />
            Home (EN)
          </Link>
        </div>
      </div>
    </div>
  );
}
