"use client";

import Link from "next/link";
import { ArrowRight, Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { company, type Locale, getRoute, getUi } from "@/content/site";

interface CTASectionProps {
  locale: Locale;
}

export function CTASection({ locale }: CTASectionProps) {
  const t = getUi(locale);

  return (
    <section className="relative overflow-hidden bg-accent py-20 sm:py-24">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-brand/8 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full bg-brand/5 blur-3xl" />
      </div>
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #fff 0px, #fff 1px, transparent 1px, transparent 40px)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="inline-flex items-center gap-2 text-brand-muted text-sm font-medium tracking-widest uppercase mb-4">
              <span className="w-6 h-px bg-brand-muted" />
              {t.getInTouch}
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4 leading-tight">
              {locale === "de"
                ? "Bereit für Ihren nächsten Schritt?"
                : "Ready for your next move?"}
            </h2>
            <p className="text-white/50 text-lg mb-8 leading-relaxed">
              {t.weAreHereForYou}
            </p>
            <Link
              href={getRoute("kontakt", locale)}
              className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-brand text-white font-semibold rounded-xl hover:bg-brand-light transition-all duration-300 group shadow-lg shadow-brand/20"
            >
              {t.getInTouch}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.45,
              delay: 0.05,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="space-y-3"
          >
            <a
              href={`tel:${company.phones[0].replace(/\s/g, "")}`}
              className="flex items-center gap-4 p-5 rounded-2xl bg-white/[0.04] border border-white/[0.06] hover:bg-white/[0.08] hover:border-white/[0.1] transition-all duration-300 group"
            >
              <div className="w-11 h-11 rounded-xl bg-brand/20 flex items-center justify-center shrink-0 group-hover:bg-brand/30 transition-colors">
                <Phone className="w-5 h-5 text-brand-muted" />
              </div>
              <div>
                <span className="text-xs text-white/40 uppercase tracking-wider font-medium">
                  {t.callUs}
                </span>
                <span className="block text-white font-medium mt-0.5">
                  {company.phones[0]}
                </span>
              </div>
            </a>
            <a
              href={`https://wa.me/${company.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 rounded-2xl bg-white/[0.04] border border-white/[0.06] hover:bg-white/[0.08] hover:border-white/[0.1] transition-all duration-300 group"
            >
              <div className="w-11 h-11 rounded-xl bg-brand/20 flex items-center justify-center shrink-0 group-hover:bg-brand/30 transition-colors">
                <MessageCircle className="w-5 h-5 text-brand-muted" />
              </div>
              <div>
                <span className="text-xs text-white/40 uppercase tracking-wider font-medium">
                  WhatsApp
                </span>
                <span className="block text-white font-medium mt-0.5">
                  {company.phones[1]}
                </span>
              </div>
            </a>
            <a
              href={`mailto:${company.email}`}
              className="flex items-center gap-4 p-5 rounded-2xl bg-white/[0.04] border border-white/[0.06] hover:bg-white/[0.08] hover:border-white/[0.1] transition-all duration-300 group"
            >
              <div className="w-11 h-11 rounded-xl bg-brand/20 flex items-center justify-center shrink-0 group-hover:bg-brand/30 transition-colors">
                <Mail className="w-5 h-5 text-brand-muted" />
              </div>
              <div>
                <span className="text-xs text-white/40 uppercase tracking-wider font-medium">
                  Email
                </span>
                <span className="block text-white font-medium mt-0.5">
                  {company.email}
                </span>
              </div>
            </a>
            <div className="flex items-center gap-4 p-5 rounded-2xl bg-white/[0.04] border border-white/[0.06]">
              <div className="w-11 h-11 rounded-xl bg-brand/20 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-brand-muted" />
              </div>
              <div>
                <span className="text-xs text-white/40 uppercase tracking-wider font-medium">
                  {t.findUs}
                </span>
                <span className="block text-white font-medium mt-0.5">
                  {company.fullAddress}
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
