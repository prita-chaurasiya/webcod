import { AboutBreadcrumb } from "@/components/AboutBreadcrumb";
import { PremiumTeam } from "@/components/PremiumTeam";
import { PremiumProjectCTA } from "@/components/PremiumProjectCTA";

export default function TeamPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <AboutBreadcrumb title="OUR TEAM" />
      <PremiumTeam />
      <PremiumProjectCTA />
    </main>
  );
}
