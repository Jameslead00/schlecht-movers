"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { clsx } from "clsx";
import {
  navigation,
  getRoute,
  getRouteLabel,
  type Locale,
  type NavItem,
} from "@/content/site";
import { LanguageSwitcher } from "./LanguageSwitcher";

interface HeaderProps {
  locale: Locale;
  currentPath: string;
}

export function Header({ locale, currentPath }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu when path changes
  const [lastPath, setLastPath] = useState(currentPath);
  useEffect(() => {
    if (lastPath !== currentPath) {
      setLastPath(currentPath);
      if (mobileOpen) setMobileOpen(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPath]);

  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "/schlecht-movers";

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-white/90 backdrop-blur-xl shadow-[0_1px_3px_rgba(0,0,0,0.05)] border-b border-border/50"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-18 sm:h-20 items-center justify-between">
          {/* Logo */}
          <Link
            href={getRoute("home", locale)}
            className="flex items-center gap-3 shrink-0 group"
          >
            <div className="flex items-center gap-2.5">
              <img
                src={`${basePath}/logo.png`}
                alt="Schlecht Movers"
                width={40}
                height={40}
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg shadow-sm group-hover:shadow-md transition-shadow duration-300"
              />
              <div className="leading-tight">
                <span
                  className={clsx(
                    "font-bold text-base sm:text-lg tracking-tight transition-colors duration-500",
                    scrolled ? "text-foreground" : "text-white",
                  )}
                >
                  Schlecht
                </span>
                <span
                  className={clsx(
                    "block text-[10px] sm:text-xs uppercase tracking-[0.2em] transition-colors duration-500",
                    scrolled ? "text-text-muted" : "text-white/50",
                  )}
                >
                  Movers
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav
            className="hidden lg:flex items-center gap-0.5"
            aria-label="Main navigation"
          >
            {navigation.map((item) => (
              <DesktopNavItem
                key={item.key}
                item={item}
                locale={locale}
                currentPath={currentPath}
                scrolled={scrolled}
              />
            ))}
            <div className="ml-6 flex items-center gap-3">
              <LanguageSwitcher
                locale={locale}
                currentPath={currentPath}
                scrolled={scrolled}
              />
              <Link
                href={getRoute("kontakt", locale)}
                className="inline-flex items-center px-5 py-2.5 bg-brand text-white text-sm font-medium rounded-xl hover:bg-brand-light transition-all duration-300 shadow-sm hover:shadow-md"
              >
                {locale === "de" ? "Kontakt" : "Contact"}
              </Link>
            </div>
          </nav>

          {/* Mobile controls */}
          <div className="flex lg:hidden items-center gap-2">
            <LanguageSwitcher
              locale={locale}
              currentPath={currentPath}
              scrolled={scrolled}
            />
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={clsx(
                "p-2 rounded-lg transition-colors",
                scrolled
                  ? "hover:bg-bg-alt text-foreground"
                  : "hover:bg-white/10 text-white",
              )}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-white border-t border-border overflow-hidden"
          >
            <nav className="px-4 py-4 space-y-1" aria-label="Mobile navigation">
              {navigation.map((item) => (
                <MobileNavItem
                  key={item.key}
                  item={item}
                  locale={locale}
                  currentPath={currentPath}
                />
              ))}
              <div className="pt-3 border-t border-border mt-3">
                <Link
                  href={getRoute("kontakt", locale)}
                  className="block w-full text-center px-4 py-2.5 bg-brand text-white text-sm font-medium rounded-lg hover:bg-brand-light transition-colors"
                >
                  {locale === "de" ? "Kontakt aufnehmen" : "Get in touch"}
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function DesktopNavItem({
  item,
  locale,
  currentPath,
  scrolled,
}: {
  item: NavItem;
  locale: Locale;
  currentPath: string;
  scrolled: boolean;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const href = getRoute(item.key, locale);
  const label = getRouteLabel(item.key, locale);
  const isActive =
    currentPath === href ||
    item.children?.some((c) => currentPath === getRoute(c.key, locale));

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node))
        setOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (!item.children) {
    return (
      <Link
        href={href}
        className={clsx(
          "px-3.5 py-2 text-sm font-medium rounded-lg transition-all duration-300",
          isActive
            ? scrolled
              ? "text-brand bg-brand-subtle"
              : "text-white bg-white/10"
            : scrolled
              ? "text-text-secondary hover:text-brand hover:bg-bg-alt"
              : "text-white/70 hover:text-white hover:bg-white/5",
        )}
      >
        {label}
      </Link>
    );
  }

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        onMouseEnter={() => setOpen(true)}
        className={clsx(
          "flex items-center gap-1 px-3.5 py-2 text-sm font-medium rounded-lg transition-all duration-300",
          isActive
            ? scrolled
              ? "text-brand bg-brand-subtle"
              : "text-white bg-white/10"
            : scrolled
              ? "text-text-secondary hover:text-brand hover:bg-bg-alt"
              : "text-white/70 hover:text-white hover:bg-white/5",
        )}
        aria-expanded={open}
      >
        {label}
        <ChevronDown
          className={clsx(
            "w-3.5 h-3.5 transition-transform",
            open && "rotate-180",
          )}
        />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.15 }}
            onMouseLeave={() => setOpen(false)}
            className="absolute top-full left-0 mt-1 w-52 bg-white rounded-xl shadow-lg border border-border py-1.5 z-50"
          >
            <Link
              href={href}
              className="block px-4 py-2 text-sm text-text-secondary hover:text-brand hover:bg-bg-alt transition-colors"
            >
              {label}
            </Link>
            <div className="h-px bg-border mx-3 my-1" />
            {item.children.map((child) => {
              const childHref = getRoute(child.key, locale);
              const childLabel = getRouteLabel(child.key, locale);
              return (
                <Link
                  key={child.key}
                  href={childHref}
                  className={clsx(
                    "block px-4 py-2 text-sm transition-colors",
                    currentPath === childHref
                      ? "text-brand bg-brand-subtle"
                      : "text-text-secondary hover:text-brand hover:bg-bg-alt",
                  )}
                >
                  {childLabel}
                </Link>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function MobileNavItem({
  item,
  locale,
  currentPath,
}: {
  item: NavItem;
  locale: Locale;
  currentPath: string;
}) {
  const [open, setOpen] = useState(false);
  const href = getRoute(item.key, locale);
  const label = getRouteLabel(item.key, locale);
  const isActive = currentPath === href;

  if (!item.children) {
    return (
      <Link
        href={href}
        className={clsx(
          "block px-3 py-2.5 text-sm font-medium rounded-lg transition-colors",
          isActive
            ? "text-brand bg-brand-subtle"
            : "text-text-secondary hover:text-brand hover:bg-bg-alt",
        )}
      >
        {label}
      </Link>
    );
  }

  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className={clsx(
          "flex items-center justify-between w-full px-3 py-2.5 text-sm font-medium rounded-lg transition-colors",
          isActive
            ? "text-brand bg-brand-subtle"
            : "text-text-secondary hover:text-brand hover:bg-bg-alt",
        )}
        aria-expanded={open}
      >
        {label}
        <ChevronDown
          className={clsx("w-4 h-4 transition-transform", open && "rotate-180")}
        />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.15 }}
            className="overflow-hidden"
          >
            <div className="pl-4 py-1 space-y-0.5">
              <Link
                href={href}
                className="block px-3 py-2 text-sm text-text-secondary hover:text-brand rounded-lg hover:bg-bg-alt transition-colors"
              >
                {label}
              </Link>
              {item.children.map((child) => (
                <Link
                  key={child.key}
                  href={getRoute(child.key, locale)}
                  className={clsx(
                    "block px-3 py-2 text-sm rounded-lg transition-colors",
                    currentPath === getRoute(child.key, locale)
                      ? "text-brand bg-brand-subtle"
                      : "text-text-secondary hover:text-brand hover:bg-bg-alt",
                  )}
                >
                  {getRouteLabel(child.key, locale)}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
