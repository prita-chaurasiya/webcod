import { AboutBreadcrumb } from "@/components/AboutBreadcrumb";
import { PremiumVision } from "@/components/PremiumVision";
import { PremiumProjectCTA } from "@/components/PremiumProjectCTA";

export default function VisionMissionPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <AboutBreadcrumb 
        title="VISION & MISSION"
        subtitle="Pioneering modern enterprise engineering, democratizing IT training, and architecting the future of software in Varanasi and beyond."
        badge="✦ OUR CORE PURPOSE & PRINCIPLES"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
          { label: "Vision & Mission" }
        ]}
        highlights={["Value Driven", "Future Ready", "Uncompromising Quality", "Empowering Youth"]}
      />
      
      <div className="py-12 bg-white">
        <PremiumVision />
      </div>
      
      <PremiumProjectCTA />
    </main>
  );
}
