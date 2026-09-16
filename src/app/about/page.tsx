import { PageBanner } from "@/components/PageBanner";
import { PremiumAboutDigiatureStyle } from "@/components/PremiumAboutDigiatureStyle";
import { PremiumProjectCTA } from "@/components/PremiumProjectCTA";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <PageBanner 
        title="About WebCodian"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About Us" }
        ]}
      />
      
      {/* 
        This new component perfectly replicates the 3-section layout 
        of digiature.com/about-digiature as requested!
      */}
      <PremiumAboutDigiatureStyle />

      <PremiumProjectCTA />
    </main>
  );
}
