"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { type ReactNode } from "react";

interface ServiceCardProps {
  title: string;
  description: string;
  href: string;
  icon: ReactNode;
  index?: number;
}

export function ServiceCard({
  title,
  description,
  href,
  icon,
  index = 0,
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: index * 0.06,
        duration: 0.45,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      <Link
        href={href}
        className="group relative block h-full p-7 sm:p-8 bg-bg-card rounded-2xl border border-border hover:border-brand/30 transition-all duration-500 overflow-hidden"
      >
        {/* Hover gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-subtle/0 to-brand/[0.02] group-hover:from-brand-subtle/60 group-hover:to-brand/[0.06] transition-all duration-500 rounded-2xl" />

        <div className="relative z-10">
          <div className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center text-brand mb-6 group-hover:bg-brand group-hover:text-white transition-all duration-400 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-brand/15">
            {icon}
          </div>
          <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-brand transition-colors duration-300">
            {title}
          </h3>
          <p className="text-sm text-text-secondary leading-relaxed mb-5 line-clamp-3">
            {description}
          </p>
          <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
            {/* Learn more arrow */}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </span>
        </div>
      </Link>
    </motion.div>
  );
}

export function ServiceCardGrid({ children }: { children: ReactNode }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {children}
    </div>
  );
}
