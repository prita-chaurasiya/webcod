import { VisionHero } from "@/components/VisionHero";
import { PremiumVision } from "@/components/PremiumVision";
import { PremiumProjectCTA } from "@/components/PremiumProjectCTA";

export default function VisionMissionPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <VisionHero />
      
      <div className="py-12 bg-white">
        <PremiumVision />
      </div>
      
      <PremiumProjectCTA />
    </main>
  );
}
