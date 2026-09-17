import { AboutBreadcrumb } from "@/components/AboutBreadcrumb";
import { PremiumPerks } from "@/components/PremiumPerks";
import { PremiumJobs } from "@/components/PremiumJobs";
import { PremiumProjectCTA } from "@/components/PremiumProjectCTA";

export default function CareerPage() {
  return (
    <main>
      <AboutBreadcrumb title="CAREER" />
      <PremiumPerks />
      <PremiumJobs />
      <PremiumProjectCTA />
    </main>
  );
}
