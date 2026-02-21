"use client";

import Link from "next/link";
import { Globe } from "lucide-react";
import { clsx } from "clsx";
import { type Locale, routes } from "@/content/site";

interface LanguageSwitcherProps {
  locale: Locale;
  currentPath: string;
  scrolled?: boolean;
}

export function LanguageSwitcher({
  locale,
  currentPath,
  scrolled = true,
}: LanguageSwitcherProps) {
  const targetLocale: Locale = locale === "de" ? "en" : "de";
  const label = locale === "de" ? "EN" : "DE";

  // Find matching route in target locale
  let targetPath = targetLocale === "de" ? "/" : "/en/home";
  for (const route of Object.values(routes)) {
    if (route[locale] === currentPath) {
      targetPath = route[targetLocale];
      break;
    }
  }

  return (
    <Link
      href={targetPath}
      className={clsx(
        "inline-flex items-center gap-1.5 px-2.5 py-1.5 text-sm font-medium rounded-lg transition-all duration-300",
        "text-text-secondary hover:text-brand hover:bg-bg-alt",
      )}
      aria-label={`Switch to ${targetLocale === "de" ? "German" : "English"}`}
    >
      <Globe className="w-4 h-4" />
      {label}
    </Link>
  );
}
