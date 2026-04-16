import { PageLayout, PageHero, Section, CTASection } from "@/components";
import { Truck } from "lucide-react";

export const metadata = { title: "Our Fleet – Schlecht Movers" };

interface Vehicle {
  name: string;
  description: string;
  details: { label: string; value: string }[];
  badge?: string;
}

const vehicles: Vehicle[] = [
  {
    name: "Large Moving Truck",
    badge: "Main vehicle",
    description:
      "Our largest lorry is perfectly suited for complete household and corporate relocations. The spacious load compartment allows entire apartments or offices to be transported in a single trip – efficiently, carefully and on schedule.",
    details: [
      { label: "Load volume", value: "approx. 40 m³" },
      { label: "Payload", value: "up to 3,500 kg" },
      { label: "Load length", value: "approx. 7.2 m" },
      { label: "Interior width", value: "approx. 2.4 m" },
      { label: "Interior height", value: "approx. 2.5 m" },
      { label: "Licence class", value: "C/CE" },
    ],
  },
  {
    name: "Medium Van",
    badge: "All-rounder",
    description:
      "Ideal for medium-sized moves, small transports and specialist goods. Versatile in urban environments and for transports requiring extra care. Fitted with a tail lift for easy loading and unloading.",
    details: [
      { label: "Load volume", value: "approx. 20 m³" },
      { label: "Payload", value: "up to 1,800 kg" },
      { label: "Load length", value: "approx. 5.4 m" },
      { label: "Interior width", value: "approx. 2.2 m" },
      { label: "Interior height", value: "approx. 2.3 m" },
      { label: "Equipment", value: "Tail lift" },
    ],
  },
  {
    name: "Compact Van / Sprinter",
    badge: "Flexible & fast",
    description:
      "For small moves, individual item transport, furniture deliveries or short-notice collections. Suitable for narrow streets and car parks – ideal for urban use and customers who only need a few items transported.",
    details: [
      { label: "Load volume", value: "approx. 10 m³" },
      { label: "Payload", value: "up to 900 kg" },
      { label: "Load length", value: "approx. 3.8 m" },
      { label: "Interior width", value: "approx. 1.8 m" },
      { label: "Interior height", value: "approx. 2.1 m" },
      { label: "Licence class", value: "B" },
    ],
  },
];

export default function FleetPage() {
  return (
    <PageLayout locale="en" currentPath="/en/about-us/fleet">
      <PageHero
        title="Our Fleet"
        subtitle="Modern vehicles for every assignment"
      />

      <Section>
        <div className="max-w-5xl mx-auto">
          {/* Intro */}
          <p className="text-text-secondary text-lg leading-relaxed max-w-2xl mb-16">
            Our fleet consists of modern, well-maintained vehicles for every
            requirement — from small transport jobs to full household
            relocations. Every vehicle is regularly inspected and professionally
            operated to ensure your belongings arrive safely and on time.
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
            All specifications are approximate values. For specific
            requirements, we are happy to advise you personally.
          </p>
        </div>
      </Section>

      <CTASection locale="en" />
    </PageLayout>
  );
}
