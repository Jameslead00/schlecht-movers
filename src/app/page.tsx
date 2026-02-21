import { Home, Building2, Trash2, Wrench } from "lucide-react";
import {
  PageLayout,
  Hero,
  Section,
  SectionHeader,
  ServiceCard,
  ServiceCardGrid,
  CTASection,
  StatsBar,
  TrustBanner,
} from "@/components";
import { pagesDe, getRoute, getUi } from "@/content/site";

export default function HomePage() {
  const page = pagesDe.home;
  const t = getUi("de");

  const serviceIcons = [
    <Home key="home" className="w-6 h-6" />,
    <Building2 key="building" className="w-6 h-6" />,
    <Trash2 key="trash" className="w-6 h-6" />,
    <Wrench key="wrench" className="w-6 h-6" />,
  ];

  const serviceRoutes = ["umzug", "firmenumzug", "raeumung", "usm"];

  return (
    <PageLayout locale="de" currentPath="/">
      <Hero
        title={page.title}
        subtitle={page.subtitle}
        description={page.heroText}
        locale="de"
        ctaHref={getRoute("kontakt", "de")}
        ctaLabel={t.getInTouch}
        secondaryCta={{
          href: getRoute("about", "de"),
          label: t.learnMore,
        }}
      />

      <StatsBar locale="de" />

      <Section className="pt-28">
        <SectionHeader
          title={t.services}
          subtitle={t.individualRequest}
          tag="Was wir bieten"
        />
        <ServiceCardGrid>
          {page.sections.map((section, i) => (
            <ServiceCard
              key={i}
              title={section.heading || ""}
              description={section.body}
              href={getRoute(serviceRoutes[i], "de")}
              icon={serviceIcons[i]}
              index={i}
            />
          ))}
        </ServiceCardGrid>
      </Section>

      <Section bgAlt>
        <SectionHeader
          title="Warum Schlecht & Co GmbH?"
          subtitle="Vertrauen, Qualität und persönliche Betreuung — das zeichnet uns aus."
          tag="Ihre Vorteile"
        />
        <TrustBanner locale="de" />
      </Section>

      <CTASection locale="de" />
    </PageLayout>
  );
}
