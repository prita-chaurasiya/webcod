import { PageBanner } from "@/components/PageBanner";
import { PremiumTeam } from "@/components/PremiumTeam";
import { PremiumProjectCTA } from "@/components/PremiumProjectCTA";

export default function TeamPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <PageBanner 
        title="Our Team" 
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Our Team" }
        ]} 
        bgImage="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2000&auto=format&fit=crop"
      />
      <PremiumTeam />
      <PremiumProjectCTA />
    </main>
  );
}
