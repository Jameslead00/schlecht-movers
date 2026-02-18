import {
  PageLayout,
  PageHero,
  Section,
  SectionHeader,
  Timeline,
  CTASection,
} from "@/components";
import { pagesDe } from "@/content/site";
import { Building2, Award, Users } from "lucide-react";

export const metadata = { title: "Über uns – Unsere Geschichte" };

export default function AboutPage() {
  const page = pagesDe.about;

  const timelineItems = page.sections.map((s) => ({
    year: s.heading?.match(/\d{4}/)?.[0] || s.heading || "",
    title: s.heading || "",
    description: s.body,
  }));

  return (
    <PageLayout locale="de" currentPath="/de/ueber-uns">
      <PageHero title={page.title} subtitle={page.subtitle} />

      <Section>
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-lg text-text-secondary leading-relaxed">
            Von der Idee bis zum etablierten Unternehmen — lernen Sie unseren
            Weg kennen und erfahren Sie, was uns als Team antreibt.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-16">
          {[
            { icon: Building2, label: "Gegründet", value: "2024" },
            { icon: Award, label: "Versichert", value: "Vollumfänglich" },
            { icon: Users, label: "Team", value: "Erfahrene Profis" },
          ].map(({ icon: Icon, label, value }) => (
            <div
              key={label}
              className="text-center p-6 rounded-2xl bg-bg-card border border-border"
            >
              <div className="w-10 h-10 rounded-xl bg-brand/10 flex items-center justify-center mx-auto mb-3">
                <Icon className="w-5 h-5 text-brand" />
              </div>
              <p className="text-sm font-semibold text-foreground">{label}</p>
              <p className="text-xs text-text-muted mt-1">{value}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section bgAlt>
        <SectionHeader tag="Unsere Reise" title="Meilensteine" />
        <div className="max-w-3xl mx-auto">
          <Timeline items={timelineItems} />
        </div>
      </Section>

      <CTASection locale="de" />
    </PageLayout>
  );
}
