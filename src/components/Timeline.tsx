"use client";

import { motion } from "framer-motion";
import { clsx } from "clsx";

interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

interface TimelineProps {
  items: TimelineItem[];
}

export function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative">
      {/* Gradient vertical line */}
      <div className="absolute left-5 sm:left-1/2 sm:-translate-x-px top-0 bottom-0 w-px bg-gradient-to-b from-brand/40 via-brand/20 to-transparent" />

      <div className="space-y-16">
        {items.map((item, i) => {
          const isLeft = i % 2 === 0;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: i * 0.08,
                duration: 0.45,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="relative"
            >
              {/* Dot with pulse */}
              <div className="absolute left-5 sm:left-1/2 -translate-x-1/2 z-10 top-1">
                <div className="w-4 h-4 rounded-full bg-brand border-4 border-background shadow-sm" />
                <div
                  className="absolute inset-0 w-4 h-4 rounded-full bg-brand/30 animate-ping"
                  style={{ animationDuration: "3s" }}
                />
              </div>

              <div
                className={clsx(
                  "pl-14 sm:pl-0 sm:w-[calc(50%-2rem)]",
                  isLeft
                    ? "sm:pr-0 sm:text-right sm:mr-auto"
                    : "sm:pl-0 sm:text-left sm:ml-auto",
                )}
              >
                <div
                  className={clsx(
                    "inline-block p-6 rounded-2xl bg-bg-card border border-border hover:border-brand/20 transition-colors duration-300",
                    isLeft ? "sm:mr-0" : "sm:ml-0",
                  )}
                >
                  <span className="inline-block px-3 py-1 text-xs font-bold text-brand bg-brand/10 rounded-full mb-3 tracking-wide">
                    {item.year}
                  </span>
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
