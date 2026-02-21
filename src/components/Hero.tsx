"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { type Locale, getUi } from "@/content/site";

interface HeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  locale: Locale;
  ctaHref?: string;
  ctaLabel?: string;
  secondaryCta?: { href: string; label: string };
}

export function Hero({
  title,
  subtitle,
  description,
  locale,
  ctaHref,
  ctaLabel,
  secondaryCta,
}: HeroProps) {
  const t = getUi(locale);

  return (
    <section className="relative overflow-hidden bg-transparent min-h-[70vh] sm:min-h-[80vh] flex items-center">
      {/* Decorative gradient shapes */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden>
        <div className="absolute -top-28 -right-28 w-[520px] h-[520px] rounded-full bg-brand/15 blur-3xl" />
        <div className="absolute -bottom-16 -left-12 w-[680px] h-[420px] bg-brand/10 blur-3xl rounded-full" />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border pointer-events-none"
          style={{ borderColor: "rgba(107,93,39,0.08)" }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border pointer-events-none"
          style={{ borderColor: "rgba(107,93,39,0.12)" }}
        />
      </div>

      {/* Subtle diagonal lines pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, rgba(107,93,39,0.2) 0px, rgba(107,93,39,0.2) 1px, transparent 1px, transparent 42px)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-32 sm:py-36 lg:py-44 w-full">
        <div className="max-w-3xl">
          {subtitle && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="mb-6"
            >
              <span className="inline-flex items-center gap-2 text-brand text-sm font-semibold tracking-widest uppercase">
                <span className="w-8 h-px bg-brand" />
                {subtitle}
              </span>
            </motion.div>
          )}

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight leading-[1.05] text-foreground relative z-20"
            style={{ color: "var(--color-brand)" }}
          >
            {title}
          </motion.h1>

          <div
            className="mt-4 w-24 h-0.5 rounded-full bg-brand/90"
            aria-hidden
          />

          {description && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-6 text-lg sm:text-xl text-text-secondary leading-relaxed max-w-2xl"
            >
              {description}
            </motion.p>
          )}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            {ctaHref && (
              <Link
                href={ctaHref}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-brand text-white font-semibold rounded-xl hover:bg-brand-light transition-all duration-300 group shadow-lg shadow-brand/20"
              >
                {ctaLabel || t.getInTouch}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            )}

            {secondaryCta && (
              <Link
                href={secondaryCta.href}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-brand/30 text-foreground font-medium rounded-xl hover:bg-brand-subtle hover:border-brand/50 transition-all duration-300"
              >
                {secondaryCta.label}
              </Link>
            )}
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}

export function PageHero({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-transparent pt-32 sm:pt-36 pb-20 sm:pb-24">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden>
        <div className="absolute -top-24 -right-20 w-96 h-96 rounded-full bg-brand/12 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[440px] h-[320px] bg-brand/10 blur-3xl rounded-full" />
      </div>

      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, rgba(107,93,39,0.2) 0px, rgba(107,93,39,0.2) 1px, transparent 1px, transparent 42px)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground relative z-20"
            style={{ color: "var(--color-brand)" }}
          >
            {title}
          </h1>

          <div
            className="mt-3 w-20 h-0.5 rounded-full bg-brand/90"
            aria-hidden
          />

          {subtitle && (
            <p className="mt-4 text-lg text-text-secondary max-w-2xl">
              {subtitle}
            </p>
          )}
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
