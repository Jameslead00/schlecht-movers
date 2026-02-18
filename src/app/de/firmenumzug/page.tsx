import { ServicePage } from "@/components/ServicePage";

export const metadata = { title: "Firmenumzug" };

export default function FirmenumzugPage() {
  return (
    <ServicePage
      locale="de"
      pageKey="firmenumzug"
      currentPath="/de/firmenumzug"
    />
  );
}
