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
    <section className="relative overflow-hidden bg-accent min-h-[70vh] sm:min-h-[80vh] flex items-center">
      {/* Decorative gold accent shapes */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden>
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-brand/8 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[400px] bg-brand/5 blur-3xl rounded-full" />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border pointer-events-none"
          style={{ borderColor: "rgba(107,93,39,0.04)" }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border pointer-events-none"
          style={{ borderColor: "rgba(107,93,39,0.06)" }}
        />
      </div>

      {/* Subtle diagonal lines pattern */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #fff 0px, #fff 1px, transparent 1px, transparent 40px)",
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
              <span className="inline-flex items-center gap-2 text-brand-muted text-sm font-semibold tracking-widest uppercase">
                <span className="w-8 h-px bg-brand-muted" />
                {subtitle}
              </span>
            </motion.div>
          )}

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight leading-[1.05] text-brand relative z-20"
            style={{ color: "var(--color-brand-light)" }}
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
              className="mt-6 text-lg sm:text-xl text-white/70 leading-relaxed max-w-2xl"
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
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-white/15 text-white/80 font-medium rounded-xl hover:bg-white/5 hover:border-white/25 transition-all duration-300"
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
    <section className="relative overflow-hidden bg-accent pt-32 sm:pt-36 pb-20 sm:pb-24">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden>
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-brand/8 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[300px] bg-brand/5 blur-3xl rounded-full" />
      </div>

      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #fff 0px, #fff 1px, transparent 1px, transparent 40px)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-brand relative z-20"
            style={{ color: "var(--color-brand-light)" }}
          >
            {title}
          </h1>

          <div
            className="mt-3 w-20 h-0.5 rounded-full bg-brand/90"
            aria-hidden
          />

          {subtitle && (
            <p className="mt-4 text-lg text-white/60 max-w-2xl">{subtitle}</p>
          )}
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
