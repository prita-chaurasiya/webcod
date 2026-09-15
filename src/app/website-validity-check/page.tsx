import { PageBanner } from "@/components/PageBanner";
import { PremiumWebsiteValidity } from "@/components/PremiumWebsiteValidity";

export default function Page() {
  return (
    <main>
      <PageBanner 
        title="Check Domain" 
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Check Domain", href: "/website-validity-check" }
        ]} 
      />
      <PremiumWebsiteValidity />
    </main>
  );
}
