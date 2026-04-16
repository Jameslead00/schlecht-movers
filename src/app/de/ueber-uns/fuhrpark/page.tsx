import { PageLayout, PageHero, Section, CTASection } from "@/components";
import { Truck } from "lucide-react";

export const metadata = { title: "Fuhrpark – Schlecht Movers" };

interface Vehicle {
  name: string;
  description: string;
  details: { label: string; value: string }[];
  badge?: string;
}

const vehicles: Vehicle[] = [
  {
    name: "Mittlerer Transporter",
    badge: "Allrounder",
    description:
      "Ideal für mittlere Umzüge, Kleintransporte und Spezialgüter. Flexibel einsetzbar im städtischen Umfeld sowie für Transporte, die besondere Sorgfalt erfordern. Mit Hebebühne für bequemes Be- und Entladen.",
    details: [
      { label: "Laderaum", value: "ca. 20 m³" },
      { label: "Nutzlast", value: "bis 1'800 kg" },
      { label: "Länge Laderaum", value: "ca. 5.4 m" },
      { label: "Breite innen", value: "ca. 2.2 m" },
      { label: "Höhe innen", value: "ca. 2.3 m" },
      { label: "Ausstattung", value: "Hebebühne" },
    ],
  },
  {
    name: "Kleintransporter / Sprinter",
    badge: "Flexibel & schnell",
    description:
      "Für kleine Umzüge, Einzeltransporte, Möbellieferungen oder kurzfristige Abholungen. Kommt auch in enge Strassen und Parkhäuser – ideal für den urbanen Einsatz und für Kunden, die nur wenige Gegenstände transportieren möchten.",
    details: [
      { label: "Laderaum", value: "ca. 10 m³" },
      { label: "Nutzlast", value: "bis 900 kg" },
      { label: "Länge Laderaum", value: "ca. 3.8 m" },
      { label: "Breite innen", value: "ca. 1.8 m" },
      { label: "Höhe innen", value: "ca. 2.1 m" },
      { label: "Ausstattung", value: "-" },
    ],
  },
];

export default function FuhrparkPage() {
  return (
    <PageLayout locale="de" currentPath="/de/ueber-uns/fuhrpark">
      <PageHero
        title="Unser Fuhrpark"
        subtitle="Moderne Fahrzeuge für jeden Auftrag"
      />

      <Section>
        <div className="max-w-5xl mx-auto">
          {/* Intro */}
          <p className="text-text-secondary text-lg leading-relaxed max-w-2xl mb-16">
            Unser Fuhrpark umfasst moderne, gewartete Fahrzeuge für jeden
            Einsatz – vom Kleintransport bis zum grossen Haushaltsumzug. Jedes
            Fahrzeug wird regelmässig geprüft und professionell eingesetzt,
            damit Ihre Gegenstände sicher und pünktlich ankommen.
          </p>

          {/* Vehicle cards */}
          <div className="space-y-8">
            {vehicles.map((vehicle, i) => (
              <div
                key={i}
                className="group rounded-2xl bg-bg-card border border-border hover:border-brand/20 hover:shadow-md transition-all duration-300 overflow-hidden"
              >
                <div className="flex flex-col lg:flex-row">
                  {/* Icon / image placeholder */}
                  <div className="lg:w-64 shrink-0 bg-gradient-to-br from-bg-alt to-bg-card flex flex-col items-center justify-center p-10 lg:p-12 gap-4">
                    <div className="w-20 h-20 rounded-2xl bg-brand/10 flex items-center justify-center group-hover:bg-brand/15 transition-colors duration-300">
                      <Truck className="w-10 h-10 text-brand/70" />
                    </div>
                    {vehicle.badge && (
                      <span className="inline-flex items-center px-3 py-1 rounded-full bg-brand/10 text-brand text-xs font-semibold uppercase tracking-wider">
                        {vehicle.badge}
                      </span>
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 p-6 sm:p-8">
                    <h2 className="text-xl font-bold text-foreground mb-3">
                      {vehicle.name}
                    </h2>
                    <p className="text-text-secondary text-sm leading-relaxed mb-6">
                      {vehicle.description}
                    </p>

                    {/* Specs grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {vehicle.details.map(({ label, value }) => (
                        <div
                          key={label}
                          className="rounded-xl bg-bg-alt px-4 py-3"
                        >
                          <p className="text-xs text-text-muted uppercase tracking-wider font-medium mb-0.5">
                            {label}
                          </p>
                          <p className="text-sm font-semibold text-foreground">
                            {value}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Note */}
          <p className="mt-10 text-sm text-text-muted text-center">
            Alle Angaben sind Richtwerte. Bei spezifischen Anforderungen beraten
            wir Sie gerne persönlich.
          </p>
        </div>
      </Section>

      <CTASection locale="de" />
    </PageLayout>
  );
}
