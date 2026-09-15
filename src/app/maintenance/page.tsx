import { PageBanner } from "@/components/PageBanner";
import { PremiumMaintenance } from "@/components/PremiumMaintenance";

export default function Page() {
  return (
    <main>
      <PageBanner 
        title="Maintenance" 
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Maintenance", href: "/maintenance" }
        ]} 
      />
      <PremiumMaintenance />
    </main>
  );
}
