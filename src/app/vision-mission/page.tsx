import { AboutBreadcrumb } from "@/components/AboutBreadcrumb";
import { PremiumVision } from "@/components/PremiumVision";
import { PremiumProjectCTA } from "@/components/PremiumProjectCTA";

export default function VisionMissionPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <AboutBreadcrumb title="VISION & MISSION" />
      
      {/* We can reuse the PremiumVision component which is very high quality */}
      <div className="py-12 bg-white">
        <PremiumVision />
      </div>
      
      <PremiumProjectCTA />
    </main>
  );
}
