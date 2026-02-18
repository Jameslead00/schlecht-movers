import {
  PageLayout,
  PageHero,
  Section,
  SectionHeader,
  Accordion,
  ContactForm,
  ContactInfo,
  CTASection,
} from "@/components";
import { type Locale, getPageContent, getUi } from "@/content/site";

interface ServicePageProps {
  locale: Locale;
  pageKey: string;
  currentPath: string;
}

export function ServicePage({
  locale,
  pageKey,
  currentPath,
}: ServicePageProps) {
  const page = getPageContent(pageKey, locale);
  const t = getUi(locale);

  const accordionItems = page.sections
    .filter((s) => s.heading)
    .map((s) => ({ title: s.heading!, content: s.body }));

  // Collect all heading-less sections (not just the first one)
  const introSections = page.sections.filter((s) => !s.heading);

  return (
    <PageLayout locale={locale} currentPath={currentPath}>
      <PageHero title={page.title} subtitle={page.subtitle} />

      {introSections.length > 0 && (
        <Section>
          <div className="max-w-3xl mx-auto space-y-6">
            {introSections.map((section, i) => (
              <p
                key={i}
                className="text-lg text-text-secondary leading-relaxed"
              >
                {section.body}
              </p>
            ))}
          </div>
        </Section>
      )}

      {accordionItems.length > 0 && (
        <Section bgAlt={introSections.length > 0}>
          <SectionHeader
            tag={locale === "de" ? "Im Detail" : "In detail"}
            title={locale === "de" ? "Unsere Leistungen" : "Our services"}
          />
          <div className="max-w-3xl mx-auto">
            <Accordion items={accordionItems} />
          </div>
        </Section>
      )}

      {page.hasForm && (
        <Section
          id="contact-form"
          bgAlt={accordionItems.length === 0 && introSections.length === 0}
        >
          <SectionHeader
            tag={locale === "de" ? "Kontakt" : "Contact"}
            title={locale === "de" ? "Jetzt anfragen" : "Get in touch"}
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <p className="text-text-secondary mb-8 leading-relaxed">
                {t.weAreHereForYou}
              </p>
              <ContactInfo locale={locale} />
            </div>
            <div className="relative">
              <div className="p-6 sm:p-8 rounded-2xl bg-bg-card border border-border">
                <ContactForm locale={locale} pageSource={pageKey} />
              </div>
            </div>
          </div>
        </Section>
      )}

      {!page.hasForm && <CTASection locale={locale} />}
    </PageLayout>
  );
}
