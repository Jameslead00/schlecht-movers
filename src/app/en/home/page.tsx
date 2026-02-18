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
import { pagesEn, getRoute, getUi } from "@/content/site";

export const metadata = {
  title: "Schlecht Movers – Your Competent Relocation Partner",
};

export default function HomeEnPage() {
  const page = pagesEn.home;
  const t = getUi("en");

  const serviceIcons = [
    <Home key="home" className="w-6 h-6" />,
    <Building2 key="building" className="w-6 h-6" />,
    <Trash2 key="trash" className="w-6 h-6" />,
    <Wrench key="wrench" className="w-6 h-6" />,
  ];

  const serviceRoutes = ["umzug", "firmenumzug", "raeumung", "usm"];

  return (
    <PageLayout locale="en" currentPath="/en/home">
      <Hero
        title={page.title}
        subtitle={page.subtitle}
        description={page.heroText}
        locale="en"
        ctaHref={getRoute("kontakt", "en")}
        ctaLabel={t.getInTouch}
        secondaryCta={{
          href: getRoute("about", "en"),
          label: t.learnMore,
        }}
      />

      <StatsBar locale="en" />

      <Section className="pt-28">
        <SectionHeader
          title={t.services}
          subtitle={t.individualRequest}
          tag="What we offer"
        />
        <ServiceCardGrid>
          {page.sections.map((section, i) => (
            <ServiceCard
              key={i}
              title={section.heading || ""}
              description={section.body}
              href={getRoute(serviceRoutes[i], "en")}
              icon={serviceIcons[i]}
              index={i}
            />
          ))}
        </ServiceCardGrid>
      </Section>

      <Section bgAlt>
        <SectionHeader
          title="Why Schlecht Movers?"
          subtitle="Trust, quality and personal care — that is what sets us apart."
          tag="Your advantages"
        />
        <TrustBanner locale="en" />
      </Section>

      <CTASection locale="en" />
    </PageLayout>
  );
}
