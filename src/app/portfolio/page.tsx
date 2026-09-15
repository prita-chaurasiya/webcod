import { PageBanner } from "@/components/PageBanner";
import { PremiumPortfolio } from "@/components/PremiumPortfolio";

export default function Page() {
  return (
    <main>
      <PageBanner 
        title="Our Portfolio" 
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Our Portfolio", href: "/portfolio" }
        ]} 
      />
      <PremiumPortfolio />
    </main>
  );
}
