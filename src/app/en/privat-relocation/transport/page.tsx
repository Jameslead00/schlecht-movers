import { ServicePage } from "@/components/ServicePage";

export const metadata = { title: "Transport Services" };

export default function TransportEnPage() {
  return (
    <ServicePage
      locale="en"
      pageKey="transport"
      currentPath="/en/privat-relocation/transport"
    />
  );
}
