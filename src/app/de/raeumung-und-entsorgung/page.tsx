import { ServicePage } from "@/components/ServicePage";

export const metadata = { title: "Räumung und Entsorgung" };

export default function RaeumungPage() {
  return (
    <ServicePage
      locale="de"
      pageKey="raeumung"
      currentPath="/de/raeumung-und-entsorgung"
    />
  );
}
