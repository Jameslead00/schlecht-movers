"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { clsx } from "clsx";

interface AccordionItem {
  title: string;
  content: string;
}

interface AccordionProps {
  items: AccordionItem[];
}

export function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.04, duration: 0.35 }}
            className={clsx(
              "rounded-2xl border transition-all duration-400",
              isOpen
                ? "border-brand/20 bg-gradient-to-br from-brand-subtle/40 to-brand-subtle/20 shadow-sm"
                : "border-border bg-bg-card hover:border-brand/10",
            )}
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="flex items-center justify-between w-full px-6 py-5 text-left group"
              aria-expanded={isOpen}
            >
              <div className="flex items-center gap-3">
                <span
                  className={clsx(
                    "flex items-center justify-center w-7 h-7 rounded-lg text-xs font-bold transition-all duration-300",
                    isOpen
                      ? "bg-brand text-white"
                      : "bg-brand/8 text-brand group-hover:bg-brand/15",
                  )}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span
                  className={clsx(
                    "font-semibold text-sm sm:text-base transition-colors duration-300",
                    isOpen ? "text-brand" : "text-foreground",
                  )}
                >
                  {item.title}
                </span>
              </div>
              <ChevronDown
                className={clsx(
                  "w-5 h-5 shrink-0 transition-all duration-300 text-text-muted",
                  isOpen && "rotate-180 text-brand",
                )}
              />
            </button>
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6 pl-16">
                    <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
                      {item.content}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
}
