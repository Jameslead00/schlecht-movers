"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { type Locale } from "@/content/site";

interface Stat {
  value: number;
  suffix: string;
  label: string;
}

const statsData: Record<string, Stat[]> = {
  de: [
    { value: 500, suffix: "+", label: "Erfolgreiche Umzüge" },
    { value: 100, suffix: "%", label: "Kundenzufriedenheit" },
    { value: 6, suffix: "", label: "Tage pro Woche" },
    { value: 15, suffix: "+", label: "Jahre Erfahrung" },
  ],
  en: [
    { value: 500, suffix: "+", label: "Successful moves" },
    { value: 100, suffix: "%", label: "Client satisfaction" },
    { value: 6, suffix: "", label: "Days per week" },
    { value: 15, suffix: "+", label: "Years of experience" },
  ],
};

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const duration = 1200;
    const steps = 30;
    const stepTime = duration / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      const eased = 1 - Math.pow(1 - progress, 3);
      setCurrent(Math.round(eased * value));
      if (step >= steps) clearInterval(timer);
    }, stepTime);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <span ref={ref}>
      {current.toLocaleString("de-CH")}
      {suffix}
    </span>
  );
}

export function StatsBar({ locale }: { locale: Locale }) {
  const stats = statsData[locale] || statsData.de;

  return (
    <section className="relative -mt-12 z-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-px rounded-2xl overflow-hidden shadow-xl border border-border/50 bg-border/50"
        >
          {stats.map((stat, i) => (
            <div key={i} className="bg-bg-card p-6 sm:p-8 text-center">
              <div className="text-3xl sm:text-4xl font-bold text-brand tracking-tight">
                <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="mt-1 text-xs sm:text-sm text-text-muted font-medium uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
