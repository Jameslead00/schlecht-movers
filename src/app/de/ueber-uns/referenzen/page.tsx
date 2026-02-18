import {
  PageLayout,
  PageHero,
  Section,
  GalleryGrid,
  CTASection,
} from "@/components";
import { pagesDe, references } from "@/content/site";
import { Camera } from "lucide-react";

export const metadata = { title: "Referenzen" };

export default function ReferenzenPage() {
  const page = pagesDe.referenzen;

  const galleryItems = references.map((ref) => ({
    id: ref.id,
    caption: ref.captionDe,
    imagePlaceholder: ref.imagePlaceholder,
  }));

  return (
    <PageLayout locale="de" currentPath="/de/ueber-uns/referenzen">
      <PageHero title={page.title} subtitle={page.subtitle} />

      <Section>
        <div className="max-w-2xl mx-auto text-center mb-12">
          <div className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center mx-auto mb-4">
            <Camera className="w-6 h-6 text-brand" />
          </div>
          <p className="text-text-secondary leading-relaxed">
            Ein Blick auf ausgewählte Projekte — von Privatumzügen über
            Firmenumzüge bis hin zu USM-Haller Montagen. Qualität, die man
            sieht.
          </p>
        </div>
        <GalleryGrid items={galleryItems} />
      </Section>

      <CTASection locale="de" />
    </PageLayout>
  );
}
