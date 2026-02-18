"use client";

import { motion } from "framer-motion";
import { clsx } from "clsx";
import { type ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  bgAlt?: boolean;
}

export function Section({ children, className, id, bgAlt }: SectionProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      className={clsx(
        "py-20 sm:py-24 lg:py-28",
        bgAlt && "bg-bg-alt",
        className,
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
    </motion.section>
  );
}

export function SectionHeader({
  title,
  subtitle,
  className,
  centered = true,
  tag,
}: {
  title: string;
  subtitle?: string;
  className?: string;
  centered?: boolean;
  tag?: string;
}) {
  return (
    <div
      className={clsx(centered && "text-center", "mb-14 lg:mb-18", className)}
    >
      {tag && (
        <span className="inline-flex items-center gap-2 text-brand text-sm font-medium tracking-widest uppercase mb-4">
          <span className="w-8 h-px bg-brand/40" />
          {tag}
          <span className="w-8 h-px bg-brand/40" />
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-5 text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
