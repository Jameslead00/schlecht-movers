import {
  PageLayout,
  PageHero,
  Section,
  SectionHeader,
  ContactForm,
  CTASection,
} from "@/components";
import { type Locale, getPageContent, getRoute, company } from "@/content/site";
import Link from "next/link";
import {
  Phone,
  ArrowRight,
  CheckCircle2,
  Truck,
  Building2,
  Trash2,
  Wrench,
  Home,
  Star,
  ShieldCheck,
  Clock,
  MapPin,
  Users,
  MessageCircle,
} from "lucide-react";
import { type ReactNode } from "react";

interface ServicePageProps {
  locale: Locale;
  pageKey: string;
  currentPath: string;
}

// ─── Per-service UX metadata ───────────────────────────────────────────
interface Highlight {
  icon: ReactNode;
  de: string;
  en: string;
}

interface ServiceMeta {
  highlights: Highlight[];
  relatedKeys: string[];
  processTagDe?: string;
  processTagEn?: string;
  formAnchor?: boolean;
}

const serviceMeta: Record<string, ServiceMeta> = {
  umzug: {
    highlights: [
      {
        icon: <Star className="w-4 h-4" />,
        de: "Festpreis & Kostendach",
        en: "Fixed price guarantee",
      },
      {
        icon: <MapPin className="w-4 h-4" />,
        de: "Schweizweit tätig",
        en: "Nationwide across Switzerland",
      },
      {
        icon: <ShieldCheck className="w-4 h-4" />,
        de: "Vollversicherte Transporte",
        en: "Fully insured transport",
      },
    ],
    relatedKeys: ["transport", "firmenumzug"],
    formAnchor: true,
  },
  transport: {
    highlights: [
      {
        icon: <Clock className="w-4 h-4" />,
        de: "Kurzfristig verfügbar",
        en: "Available at short notice",
      },
      {
        icon: <Truck className="w-4 h-4" />,
        de: "Vom Einzelstück bis Spezialgut",
        en: "Single items to specialist goods",
      },
      {
        icon: <ShieldCheck className="w-4 h-4" />,
        de: "Fachgerecht verpackt & gesichert",
        en: "Professionally packed & secured",
      },
    ],
    relatedKeys: ["umzug", "firmenumzug"],
  },
  firmenumzug: {
    highlights: [
      {
        icon: <Users className="w-4 h-4" />,
        de: "Direkter Teamleiter-Kontakt",
        en: "Direct team leader contact",
      },
      {
        icon: <CheckCircle2 className="w-4 h-4" />,
        de: "Massgeschneidertes Umzugskonzept",
        en: "Tailored relocation concept",
      },
      {
        icon: <Clock className="w-4 h-4" />,
        de: "Termingerechte Ausführung",
        en: "On-schedule execution",
      },
    ],
    relatedKeys: ["umzug", "transport"],
    processTagDe: "Unser Prozess",
    processTagEn: "Our process",
    formAnchor: true,
  },
  raeumung: {
    highlights: [
      {
        icon: <ShieldCheck className="w-4 h-4" />,
        de: "Diskret & respektvoll",
        en: "Discreet & respectful",
      },
      {
        icon: <CheckCircle2 className="w-4 h-4" />,
        de: "Besenreine Übergabe möglich",
        en: "Broom-clean handover available",
      },
      {
        icon: <Trash2 className="w-4 h-4" />,
        de: "Umweltgerechte Entsorgung",
        en: "Eco-responsible disposal",
      },
    ],
    relatedKeys: ["umzug", "firmenumzug"],
    formAnchor: true,
  },
  usm: {
    highlights: [
      {
        icon: <MapPin className="w-4 h-4" />,
        de: "Basel-Landschaft & Nordwestschweiz",
        en: "Basel-Landschaft & NW Switzerland",
      },
      {
        icon: <Wrench className="w-4 h-4" />,
        de: "Materialsichere Montage",
        en: "Material-safe assembly",
      },
      {
        icon: <Users className="w-4 h-4" />,
        de: "Privat & Geschäftskunden",
        en: "Private & commercial clients",
      },
    ],
    relatedKeys: ["firmenumzug", "transport"],
    formAnchor: true,
  },
};

export function ServicePage({
  locale,
  pageKey,
  currentPath,
}: ServicePageProps) {
  const page = getPageContent(pageKey, locale);
  const meta = serviceMeta[pageKey];

  const namedSections = page.sections.filter((s) => s.heading);

  const sectionTag = meta?.processTagDe
    ? locale === "de"
      ? meta.processTagDe
      : (meta.processTagEn ?? "Our process")
    : locale === "de"
      ? "Im Detail"
      : "In detail";

  const formHref = meta?.formAnchor
    ? "#kontakt-formular"
    : getRoute("kontakt", locale);

  return (
    <PageLayout locale={locale} currentPath={currentPath}>
      {/* ── 1. HERO ─────────────────────────────────────────────────── */}
      <PageHero
        title={page.title}
        subtitle={page.subtitle}
        ctaHref={formHref}
        ctaLabel={locale === "de" ? "Jetzt anfragen" : "Get a quote"}
      />

      {/* ── 3. SERVICE SECTIONS (numbered cards) ────────────────────── */}
      {namedSections.length > 0 && (
        <Section bgAlt className="pt-12 sm:pt-14 lg:pt-16">
          <div className="max-w-5xl mx-auto">
            <SectionHeader
              tag={sectionTag}
              title={locale === "de" ? "Unsere Leistungen" : "Our services"}
              centered={false}
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {namedSections.map((section, i) => (
                <div
                  key={i}
                  className="group flex flex-col gap-4 p-6 sm:p-7 rounded-2xl bg-bg-card border border-border hover:border-brand/20 hover:shadow-md transition-all duration-300"
                >
                  <span className="inline-flex items-center justify-center w-9 h-9 rounded-xl bg-brand/10 text-brand text-sm font-bold group-hover:bg-brand group-hover:text-white transition-all duration-300 self-start">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-foreground mb-2">
                      {section.heading}
                    </h3>
                    <p className="text-sm text-text-secondary leading-relaxed">
                      {section.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Section>
      )}

      {/* ── 4. INLINE PHONE STRIP ───────────────────────────────────── */}
      <div className="bg-accent">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="text-white font-semibold text-lg">
                {locale === "de"
                  ? "Fragen? Wir sind persönlich für Sie da."
                  : "Questions? We're here for you personally."}
              </p>
              <p className="text-white/50 text-sm mt-0.5">
                {locale === "de"
                  ? "Kostenlose Beratung — unverbindlich & unkompliziert."
                  : "Free consultation — no commitment required."}
              </p>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <a
                href={`tel:${company.phones[0].replace(/\s/g, "")}`}
                className="inline-flex items-center gap-2.5 px-5 py-2.5 bg-brand text-white font-medium rounded-xl hover:bg-brand-light transition-colors text-sm shadow-sm"
              >
                <Phone className="w-4 h-4" />
                {company.phones[0]}
              </a>
              <a
                href={`https://wa.me/${company.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 border border-white/20 text-white/80 font-medium rounded-xl hover:bg-white/10 transition-colors text-sm"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ── 5. CONTACT FORM or CTA ──────────────────────────────────── */}
      {page.hasForm ? (
        <Section id="kontakt-formular" bgAlt>
          <div className="max-w-5xl mx-auto">
            <SectionHeader
              tag={locale === "de" ? "Kontakt" : "Contact"}
              title={locale === "de" ? "Jetzt anfragen" : "Get in touch"}
              subtitle={
                locale === "de"
                  ? "Schildern Sie uns Ihr Vorhaben — wir melden uns kurzfristig bei Ihnen."
                  : "Tell us about your project — we'll get back to you promptly."
              }
              centered={false}
            />
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 items-start">
              {/* Sidebar trust points */}
              <div className="lg:col-span-2 space-y-5">
                {[
                  {
                    icon: <Clock className="w-5 h-5 text-brand" />,
                    title: locale === "de" ? "Schnelle Antwort" : "Quick reply",
                    body:
                      locale === "de"
                        ? "Wir melden uns in der Regel innert 24 Stunden."
                        : "We usually reply within 24 hours.",
                  },
                  {
                    icon: <ShieldCheck className="w-5 h-5 text-brand" />,
                    title:
                      locale === "de"
                        ? "Unverbindliches Angebot"
                        : "No-obligation quote",
                    body:
                      locale === "de"
                        ? "Kostenlose Offerte ganz ohne Verpflichtung."
                        : "Free quote with no commitment.",
                  },
                  {
                    icon: <Phone className="w-5 h-5 text-brand" />,
                    title:
                      locale === "de" ? "Direkt anrufen" : "Call us directly",
                    body: (
                      <a
                        href={`tel:${company.phones[0].replace(/\s/g, "")}`}
                        className="text-brand hover:underline font-medium"
                      >
                        {company.phones[0]}
                      </a>
                    ),
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-brand/10 flex items-center justify-center shrink-0 mt-0.5">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">
                        {item.title}
                      </p>
                      <p className="text-sm text-text-secondary mt-0.5">
                        {item.body as ReactNode}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Form */}
              <div className="lg:col-span-3">
                <div className="p-6 sm:p-8 rounded-2xl bg-bg-card border border-border">
                  <ContactForm locale={locale} pageSource={pageKey} />
                </div>
              </div>
            </div>
          </div>
        </Section>
      ) : (
        <CTASection locale={locale} />
      )}
    </PageLayout>
  );
}
