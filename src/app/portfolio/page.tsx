import { PageBanner } from "@/components/PageBanner";
import { PremiumServiceLayout } from "@/components/PremiumServiceLayout";

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
      <PremiumServiceLayout 
        title="Our Portfolio"
        description="Explore our latest projects and see how we have helped businesses transform digitally."
        features={["Web Applications","Mobile Apps","Branding Projects","Marketing Campaigns"]}
      />
    </main>
  );
}
