import { PremiumAboutHero } from "@/components/PremiumAboutHero";
import { EnterpriseAbout } from "@/components/EnterpriseAbout";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <PremiumAboutHero />
      
      <EnterpriseAbout />
    </main>
  );
}
