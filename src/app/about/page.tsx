import { AboutBreadcrumb } from "@/components/AboutBreadcrumb";
import { PremiumAboutDigiatureStyle } from "@/components/PremiumAboutDigiatureStyle";
import { PremiumProjectCTA } from "@/components/PremiumProjectCTA";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <AboutBreadcrumb 
        title="ABOUT WEBCODIAN"
        subtitle="Empowering businesses through cutting-edge digital transformation, AI-driven automation, and world-class IT education."
        badge="✦ EMPOWERING FUTURE TECH"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About Us" }
        ]}
        highlights={["Established in Varanasi", "Global Delivery Standards", "100+ Enterprise Clients", "Top-Tier IT Mentorship"]}
      />
      
      <PremiumAboutDigiatureStyle />

      <PremiumProjectCTA />
    </main>
  );
}
