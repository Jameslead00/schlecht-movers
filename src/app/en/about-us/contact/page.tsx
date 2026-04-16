import { PageLayout, PageHero, Section } from "@/components";
import { pagesEn, company } from "@/content/site";
import { Phone, Mail, Instagram } from "lucide-react";
import { WhatsAppIcon } from "@/components";

export const metadata = { title: "Contact" };

const quickLinks = [
  {
    icon: Phone,
    label: "Call us",
    value: "+41 61 711 11 15",
    href: "tel:+41617111115",
  },
  {
    icon: WhatsAppIcon,
    label: "WhatsApp",
    value: "+41 79 197 89 92",
    href: "https://wa.me/+41791978992",
    external: true,
  },
  {
    icon: Mail,
    label: "Email",
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

export default function ContactEnPage() {
  const page = pagesEn.kontakt;

  return (
    <PageLayout locale="en" currentPath="/en/about-us/contact">
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

        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-8">Email</h2>
          <div className="p-6 sm:p-8 rounded-2xl bg-bg-card border border-border">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
              <div>
                <p className="text-sm font-semibold text-foreground">
                  Reach us directly by email
                </p>
                <p className="text-sm text-text-secondary mt-1">
                  {company.email}
                </p>
              </div>
              <a
                href={`mailto:${company.email}`}
                className="inline-flex items-center justify-center px-5 py-3 bg-brand text-white font-medium rounded-xl hover:bg-brand-light transition-colors text-sm shadow-sm"
              >
                Send email
              </a>
            </div>
          </div>
        </div>
      </Section>
    </PageLayout>
  );
}
