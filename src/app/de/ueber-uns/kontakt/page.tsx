import {
  PageLayout,
  PageHero,
  Section,
  ContactForm,
  ContactInfo,
} from "@/components";
import { pagesDe, getUi, company } from "@/content/site";
import Link from "next/link";
import { FileDown, Phone, Mail, Instagram, MessageCircle } from "lucide-react";

export const metadata = { title: "Kontakt" };

const quickLinks = [
  {
    icon: Phone,
    label: "Anrufen",
    value: "+41 61 711 11 15",
    href: "tel:+41617111115",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+41 79 197 89 92",
    href: "https://wa.me/+41791978992",
    external: true,
  },
  {
    icon: Mail,
    label: "E-Mail",
    value: "jillschlecht@schlecht-movers.ch",
    href: "mailto:jillschlecht@schlecht-movers.ch",
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: "@schlechtundco",
    href: "https://www.instagram.com/schlechtundco",
    external: true,
  },
];

export default function KontaktPage() {
  const page = pagesDe.kontakt;
  const t = getUi("de");

  return (
    <PageLayout locale="de" currentPath="/de/ueber-uns/kontakt">
      <PageHero title={page.title} subtitle={page.subtitle} />

      <Section>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-16">
          {quickLinks.map(({ icon: Icon, label, value, href, external }) => (
            <a
              key={label}
              href={href}
              target={external ? "_blank" : undefined}
              rel={external ? "noopener noreferrer" : undefined}
              className="group text-center p-5 rounded-2xl bg-bg-card border border-border hover:border-brand/20 hover:shadow-sm transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-brand/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-brand/15 transition-colors">
                <Icon className="w-5 h-5 text-brand" />
              </div>
              <p className="text-sm font-semibold text-foreground">{label}</p>
              <p className="text-xs text-text-muted mt-1 truncate">{value}</p>
            </a>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <div>
            <ContactInfo locale="de" showHours />
            <div className="mt-8 pt-6 border-t border-border">
              <Link
                href={company.agbUrl}
                target="_blank"
                className="inline-flex items-center gap-2 px-4 py-2.5 border border-border rounded-xl text-sm font-medium text-foreground hover:bg-bg-alt transition-colors"
              >
                <FileDown className="w-4 h-4 text-brand" />
                {t.agbDownload}
              </Link>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-6">
              {t.sendMessage}
            </h2>
            <div className="p-6 sm:p-8 rounded-2xl bg-bg-card border border-border">
              <ContactForm locale="de" pageSource="kontakt" />
            </div>
          </div>
        </div>
      </Section>
    </PageLayout>
  );
}
