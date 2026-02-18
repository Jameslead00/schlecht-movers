"use client";

import { motion } from "framer-motion";
import { Shield, Clock, ThumbsUp, MapPin } from "lucide-react";
import { type Locale } from "@/content/site";

const trustItems = {
  de: [
    {
      icon: Shield,
      title: "Versichert & geprüft",
      description:
        "Vollständig versichert für Ihren Schutz. Jeder Transport ist abgesichert.",
    },
    {
      icon: Clock,
      title: "Termingerecht",
      description: "Pünktlich und zuverlässig — wir halten unsere Zusagen ein.",
    },
    {
      icon: ThumbsUp,
      title: "Persönlich betreut",
      description:
        "Direkte Betreuung durch unseren Teamleiter von Anfang bis Ende.",
    },
    {
      icon: MapPin,
      title: "Regional verwurzelt",
      description: "Aus Reinach, für die ganze Schweiz — und darüber hinaus.",
    },
  ],
  en: [
    {
      icon: Shield,
      title: "Insured & verified",
      description:
        "Fully insured for your protection. Every transport is covered.",
    },
    {
      icon: Clock,
      title: "On schedule",
      description: "Punctual and reliable — we keep our commitments.",
    },
    {
      icon: ThumbsUp,
      title: "Personal care",
      description:
        "Direct supervision by our team leader from start to finish.",
    },
    {
      icon: MapPin,
      title: "Regionally rooted",
      description: "From Reinach, for all of Switzerland — and beyond.",
    },
  ],
};

export function TrustBanner({ locale }: { locale: Locale }) {
  const items = trustItems[locale];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
      {items.map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: i * 0.06,
            duration: 0.45,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="text-center group"
        >
          <div className="w-14 h-14 mx-auto rounded-2xl bg-brand/8 flex items-center justify-center mb-4 group-hover:bg-brand/12 transition-colors duration-300">
            <item.icon className="w-6 h-6 text-brand" />
          </div>
          <h3 className="font-bold text-foreground text-sm sm:text-base mb-1.5">
            {item.title}
          </h3>
          <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
            {item.description}
          </p>
        </motion.div>
      ))}
    </div>
  );
}
