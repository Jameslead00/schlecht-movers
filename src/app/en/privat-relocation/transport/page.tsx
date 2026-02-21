import {
  PageLayout,
  PageHero,
  Section,
  Accordion,
  CTASection,
} from "@/components";
import { pagesEn, getRoute } from "@/content/site";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata = { title: "Transport Services" };

export default function TransportEnPage() {
  const page = pagesEn.transport;
  const accordionItems = page.sections
    .filter((s) => s.heading)
    .map((s) => ({ title: s.heading!, content: s.body }));
  const introSections = page.sections.filter((s) => !s.heading);

  return (
    <PageLayout locale="en" currentPath="/en/privat-relocation/transport">
      <PageHero title={page.title} subtitle={page.subtitle} />

      {introSections.length > 0 && (
        <Section>
          <div className="max-w-3xl mx-auto space-y-6">
            {introSections.map((section, i) => (
              <p key={i} className="text-lg text-text-secondary leading-relaxed">
                {section.body}
              </p>
            ))}
          </div>
        </Section>
      )}

      <Section bgAlt={introSections.length > 0}>
        <div className="max-w-3xl mx-auto">
          <Accordion items={accordionItems} />
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link
              href={getRoute("umzug", "en")}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand text-white font-medium rounded-xl hover:bg-brand-light transition-colors text-sm shadow-sm"
            >
              Planning a move?
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href={getRoute("kontakt", "en")}
              className="inline-flex items-center gap-2 px-5 py-2.5 border border-border text-foreground font-medium rounded-xl hover:bg-bg-alt transition-colors text-sm"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </Section>

      <CTASection locale="en" />
    </PageLayout>
  );
}
