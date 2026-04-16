import { ServicePage } from "@/components/ServicePage";

export const metadata = { title: "Transport – Transporte aller Art" };

export default function TransportPage() {
  return (
    <ServicePage
      locale="de"
      pageKey="transport"
      currentPath="/de/umzug/transport"
    />
  );
}
