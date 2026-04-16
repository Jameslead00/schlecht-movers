import {
  PageLayout,
  PageHero,
  Section,
  SectionHeader,
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
} from "lucide-react";
import { WhatsAppIcon } from "./WhatsAppIcon";
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

  const emailHref = `mailto:${company.email}`;

  const formHref = meta?.formAnchor ? emailHref : getRoute("kontakt", locale);

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
                <WhatsAppIcon className="w-4 h-4" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ── 5. CONTACT FORM or CTA ──────────────────────────────────── */}
      {page.hasForm ? (
        <Section id="kontakt-formular" bgAlt>
          <div className="max-w-4xl mx-auto">
            <SectionHeader
              tag={locale === "de" ? "Kontakt" : "Contact"}
              title={locale === "de" ? "Jetzt anfragen" : "Get in touch"}
              subtitle={
                locale === "de"
                  ? "Schreiben Sie uns direkt per E-Mail und wir melden uns kurzfristig bei Ihnen."
                  : "Send us an email directly and we'll get back to you promptly."
              }
              centered={false}
            />
            <div className="p-6 sm:p-8 rounded-2xl bg-bg-card border border-border">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    {locale === "de"
                      ? "E-Mail an unser Team"
                      : "Email our team"}
                  </p>
                  <p className="text-sm text-text-secondary mt-1">
                    {company.email}
                  </p>
                </div>
                <a
                  href={emailHref}
                  className="inline-flex items-center justify-center gap-2.5 px-5 py-3 bg-brand text-white font-medium rounded-xl hover:bg-brand-light transition-colors text-sm shadow-sm"
                >
                  {locale === "de" ? "E-Mail schreiben" : "Send email"}
                  <ArrowRight className="w-4 h-4" />
                </a>
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
