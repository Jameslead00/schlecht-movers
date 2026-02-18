import { PageLayout, PageHero, Section, CTASection } from "@/components";
import { pagesDe } from "@/content/site";
import { User } from "lucide-react";

export const metadata = { title: "Unser Team" };

const roles = ["Disposition, Aussendienst", "Umzugsleiter"];

export default function TeamPage() {
  const page = pagesDe.team;

  return (
    <PageLayout locale="de" currentPath="/de/ueber-uns/unser-team">
      <PageHero title={page.title} subtitle={page.subtitle} />

      <Section>
        <div className="max-w-4xl mx-auto space-y-8">
          {page.sections.map((section, i) => {
            const nameParts = section.heading?.split(", ") || [];
            const name = nameParts[0];
            const titleRole = nameParts[1];
            return (
              <div
                key={i}
                className="flex flex-col sm:flex-row gap-6 p-6 sm:p-8 rounded-2xl bg-bg-card border border-border hover:border-brand/20 transition-colors duration-300"
              >
                <div className="shrink-0">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-brand/10 flex items-center justify-center">
                    <User className="w-10 h-10 sm:w-12 sm:h-12 text-brand/60" />
                  </div>
                </div>
                <div className="flex-1">
                  <h2 className="text-xl font-bold text-foreground">{name}</h2>
                  {titleRole && (
                    <p className="text-sm font-medium text-brand mt-0.5">
                      {titleRole}
                    </p>
                  )}
                  <p className="text-xs text-text-muted uppercase tracking-wider mt-1">
                    {roles[i]}
                  </p>
                  <p className="text-sm text-text-secondary leading-relaxed mt-4">
                    {section.body}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Section>

      <CTASection locale="de" />
    </PageLayout>
  );
}
