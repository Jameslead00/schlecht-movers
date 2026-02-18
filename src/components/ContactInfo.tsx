import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { company, openingHours, type Locale, getUi } from "@/content/site";

interface ContactInfoProps {
  locale: Locale;
  showHours?: boolean;
}

export function ContactInfo({ locale, showHours = false }: ContactInfoProps) {
  const t = getUi(locale);

  return (
    <div className="space-y-6">
      {/* Phone */}
      <div className="group">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-9 h-9 rounded-xl bg-brand/10 flex items-center justify-center group-hover:bg-brand/15 transition-colors duration-300">
            <Phone className="w-4 h-4 text-brand" />
          </div>
          <h3 className="font-semibold text-foreground">{t.callUs}</h3>
        </div>
        <div className="space-y-1.5 pl-12">
          {company.phones.map((phone) => (
            <a
              key={phone}
              href={`tel:${phone.replace(/\s/g, "")}`}
              className="block text-sm text-text-secondary hover:text-brand transition-colors duration-300"
            >
              {phone}
            </a>
          ))}
        </div>
      </div>

      {/* WhatsApp */}
      <div className="group">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-9 h-9 rounded-xl bg-brand/10 flex items-center justify-center group-hover:bg-brand/15 transition-colors duration-300">
            <MessageCircle className="w-4 h-4 text-brand" />
          </div>
          <h3 className="font-semibold text-foreground">WhatsApp</h3>
        </div>
        <a
          href={`https://wa.me/${company.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-text-secondary hover:text-brand transition-colors duration-300 pl-12"
        >
          {company.phones[1]}
        </a>
      </div>

      {/* Address */}
      <div className="group">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-9 h-9 rounded-xl bg-brand/10 flex items-center justify-center group-hover:bg-brand/15 transition-colors duration-300">
            <MapPin className="w-4 h-4 text-brand" />
          </div>
          <h3 className="font-semibold text-foreground">{t.findUs}</h3>
        </div>
        <p className="text-sm text-text-secondary pl-12">
          {company.address}
          <br />
          {company.city}
        </p>
      </div>

      {/* Email */}
      <div className="group">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-9 h-9 rounded-xl bg-brand/10 flex items-center justify-center group-hover:bg-brand/15 transition-colors duration-300">
            <Mail className="w-4 h-4 text-brand" />
          </div>
          <h3 className="font-semibold text-foreground">{t.ourContact}</h3>
        </div>
        <a
          href={`mailto:${company.email}`}
          className="text-sm text-text-secondary hover:text-brand transition-colors duration-300 pl-12"
        >
          {company.email}
        </a>
      </div>

      {/* Opening hours */}
      {showHours && (
        <div className="group">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-9 h-9 rounded-xl bg-brand/10 flex items-center justify-center group-hover:bg-brand/15 transition-colors duration-300">
              <Clock className="w-4 h-4 text-brand" />
            </div>
            <h3 className="font-semibold text-foreground">{t.openingHours}</h3>
          </div>
          <div className="pl-12">
            <div className="rounded-2xl border border-border overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-bg-alt">
                    <th className="py-2.5 px-4 text-left text-text-muted font-medium text-xs uppercase tracking-wider"></th>
                    <th className="py-2.5 px-4 text-center text-text-muted font-medium text-xs uppercase tracking-wider">
                      {t.morning}
                    </th>
                    <th className="py-2.5 px-4 text-center text-text-muted font-medium text-xs uppercase tracking-wider">
                      {t.afternoon}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {openingHours.map((h, i) => (
                    <tr key={i} className="border-t border-border/50">
                      <td className="py-2.5 px-4 font-medium text-foreground">
                        {h.day[locale]}
                      </td>
                      <td className="py-2.5 px-4 text-text-secondary text-center">
                        {h.morning}
                      </td>
                      <td className="py-2.5 px-4 text-text-secondary text-center">
                        {h.afternoon}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
