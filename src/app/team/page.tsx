import { PageBanner } from "@/components/PageBanner";
import { PremiumServiceLayout } from "@/components/PremiumServiceLayout";

export default function Page() {
  return (
    <main>
      <PageBanner 
        title="Our Team" 
        breadcrumbs={[
          { label: "Home", href: "/" },
          
          { label: "Our Team", href: "/team" }
        ]} 
      />
      <PremiumServiceLayout 
        title="Our Team"
        description="Meet the brilliant minds behind WebCodian. Our team of experts is dedicated to your success."
        features={["Expert Developers","Creative Designers","Strategic Marketers","Dedicated Support"]}
      />
    </main>
  );
}
