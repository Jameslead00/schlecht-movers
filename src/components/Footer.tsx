import Link from "next/link";
import { Phone, Mail, MapPin, Instagram, MessageCircle } from "lucide-react";
import {
  company,
  getRoute,
  getRouteLabel,
  type Locale,
  getUi,
} from "@/content/site";

interface FooterProps {
  locale: Locale;
}

export function Footer({ locale }: FooterProps) {
  const t = getUi(locale);
  const year = new Date().getFullYear();

  const serviceKeys = ["umzug", "firmenumzug", "transport", "raeumung", "usm"];
  const aboutKeys = ["about", "team", "kontakt", "referenzen"];

  return (
    <footer className="relative bg-accent text-white overflow-hidden">
      {/* Gold top accent line */}
      <div className="h-px bg-gradient-to-r from-transparent via-brand/40 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-5">
              <img
                src="/logo.png"
                alt="Schlecht & Co GmbH"
                width={40}
                height={40}
                className="w-10 h-10 rounded-lg shadow-sm"
              />
              <div className="leading-tight">
                <span className="font-bold text-white text-lg tracking-tight">
                  Schlecht & Co
                </span>
                <span className="block text-xs text-white/40 uppercase tracking-[0.2em]">
                  GmbH
                </span>
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs mb-5">
              {company.legalName}
              <br />
              {company.fullAddress}
            </p>
            <div className="flex items-center gap-2">
              <a
                href={company.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center hover:bg-brand/20 hover:border-brand/30 transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4 text-white/60" />
              </a>
              <a
                href={`https://wa.me/${company.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center hover:bg-brand/20 hover:border-brand/30 transition-all duration-300"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4 text-white/60" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/30 mb-5">
              {t.services}
            </h3>
            <ul className="space-y-3">
              {serviceKeys.map((key) => (
                <li key={key}>
                  <Link
                    href={getRoute(key, locale)}
                    className="text-sm text-white/50 hover:text-brand-muted transition-colors duration-300"
                  >
                    {getRouteLabel(key, locale)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/30 mb-5">
              {getRouteLabel("about", locale)}
            </h3>
            <ul className="space-y-3">
              {aboutKeys.map((key) => (
                <li key={key}>
                  <Link
                    href={getRoute(key, locale)}
                    className="text-sm text-white/50 hover:text-brand-muted transition-colors duration-300"
                  >
                    {getRouteLabel(key, locale)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/30 mb-5">
              {t.ourContact}
            </h3>
            <ul className="space-y-3.5">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-brand-muted/60" />
                <span className="text-sm text-white/50">
                  {company.address}
                  <br />
                  {company.city}
                </span>
              </li>
              <li>
                <a
                  href={`tel:${company.phones[0].replace(/\s/g, "")}`}
                  className="flex items-center gap-3 text-sm text-white/50 hover:text-brand-muted transition-colors duration-300"
                >
                  <Phone className="w-4 h-4 shrink-0 text-brand-muted/60" />
                  {company.phones[0]}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${company.phones[1].replace(/\s/g, "")}`}
                  className="flex items-center gap-3 text-sm text-white/50 hover:text-brand-muted transition-colors duration-300"
                >
                  <Phone className="w-4 h-4 shrink-0 text-brand-muted/60" />
                  {company.phones[1]}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${company.email}`}
                  className="flex items-center gap-3 text-sm text-white/50 hover:text-brand-muted transition-colors duration-300"
                >
                  <Mail className="w-4 h-4 shrink-0 text-brand-muted/60" />
                  {company.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/25">
            &copy; {year} {company.legalName}. {t.allRightsReserved}
          </p>
          <Link
            href={company.agbUrl}
            target="_blank"
            className="text-xs text-white/25 hover:text-white/50 transition-colors duration-300"
          >
            {t.agbDownload}
          </Link>
        </div>
      </div>
    </footer>
  );
}
