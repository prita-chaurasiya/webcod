import { PageBanner } from "@/components/PageBanner";
import { PremiumIndustry } from "@/components/PremiumIndustry";

export default function Page() {
  return (
    <main>
      <PageBanner 
        title="Industry" 
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Industry", href: "/industry" }
        ]} 
      />
      <PremiumIndustry />
    </main>
  );
}
