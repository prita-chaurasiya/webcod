import { PageBanner } from "@/components/PageBanner";
import { PremiumVision } from "@/components/PremiumVision";
import { PremiumProjectCTA } from "@/components/PremiumProjectCTA";

export default function VisionMissionPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <PageBanner 
        title="Vision & Mission"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Vision Mission" }
        ]}
        bgImage="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000&auto=format&fit=crop"
      />
      
      {/* We can reuse the PremiumVision component which is very high quality */}
      <div className="py-12 bg-white">
        <PremiumVision />
      </div>
      
      <PremiumProjectCTA />
    </main>
  );
}
