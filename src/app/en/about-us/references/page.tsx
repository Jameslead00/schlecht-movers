import {
  PageLayout,
  PageHero,
  Section,
  GalleryGrid,
  CTASection,
} from "@/components";
import { pagesEn, references } from "@/content/site";
import { Camera } from "lucide-react";

export const metadata = { title: "References" };

export default function ReferencesEnPage() {
  const page = pagesEn.referenzen;

  const galleryItems = references.map((ref) => ({
    id: ref.id,
    caption: ref.captionEn,
    imagePlaceholder: ref.imagePlaceholder,
  }));

  return (
    <PageLayout locale="en" currentPath="/en/about-us/references">
      <PageHero title={page.title} subtitle={page.subtitle} />

      <Section>
        <div className="max-w-2xl mx-auto text-center mb-12">
          <div className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center mx-auto mb-4">
            <Camera className="w-6 h-6 text-brand" />
          </div>
          <p className="text-text-secondary leading-relaxed">
            A look at selected projects — from private relocations and corporate
            moves to USM Haller assemblies. Quality you can see.
          </p>
        </div>
        <GalleryGrid items={galleryItems} />
      </Section>

      <CTASection locale="en" />
    </PageLayout>
  );
}
