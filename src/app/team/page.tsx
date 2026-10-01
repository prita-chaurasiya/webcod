import { TeamHero } from "@/components/TeamHero";
import { PremiumTeam } from "@/components/PremiumTeam";
import { PremiumProjectCTA } from "@/components/PremiumProjectCTA";

export default function TeamPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <TeamHero />
      <PremiumTeam />
      <PremiumProjectCTA />
    </main>
  );
}
