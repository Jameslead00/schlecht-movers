import {
  PageLayout,
  PageHero,
  Section,
  SectionHeader,
  Timeline,
  CTASection,
} from "@/components";
import { pagesEn } from "@/content/site";
import { Building2, Award, Users } from "lucide-react";

export const metadata = { title: "About Us – Our Story" };

export default function AboutEnPage() {
  const page = pagesEn.about;

  const timelineItems = page.sections.map((s) => ({
    year: s.heading?.match(/\d{4}/)?.[0] || s.heading || "",
    title: s.heading || "",
    description: s.body,
  }));

  return (
    <PageLayout locale="en" currentPath="/en/about-us">
      <PageHero title={page.title} subtitle={page.subtitle} />

      <Section>
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-lg text-text-secondary leading-relaxed">
            From an idea to an established company — discover our journey and
            learn what drives us as a team.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-16">
          {[
            { icon: Building2, label: "Founded", value: "2024" },
            { icon: Award, label: "Insured", value: "Fully covered" },
            { icon: Users, label: "Team", value: "Experienced pros" },
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
        <SectionHeader tag="Our journey" title="Milestones" />
        <div className="max-w-3xl mx-auto">
          <Timeline items={timelineItems} />
        </div>
      </Section>

      <CTASection locale="en" />
    </PageLayout>
  );
}
