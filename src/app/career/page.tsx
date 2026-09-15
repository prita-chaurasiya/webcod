import { PremiumCareerHero } from "@/components/PremiumCareerHero";
import { PremiumPerks } from "@/components/PremiumPerks";
import { PremiumJobs } from "@/components/PremiumJobs";
import { PremiumProjectCTA } from "@/components/PremiumProjectCTA";

export default function CareerPage() {
  return (
    <main>
      <PremiumCareerHero />
      <PremiumPerks />
      <PremiumJobs />
      <PremiumProjectCTA />
    </main>
  );
}
