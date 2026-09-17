import { AboutBreadcrumb } from "@/components/AboutBreadcrumb";
import { PremiumTeam } from "@/components/PremiumTeam";
import { PremiumProjectCTA } from "@/components/PremiumProjectCTA";

export default function TeamPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <AboutBreadcrumb 
        title="OUR LEADERSHIP & TEAM"
        subtitle="Meet the seasoned architects, software engineers, and digital specialists driving transformative technology at WebCodian."
        badge="✦ EXPERIENCED TECH VISIONARIES"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
          { label: "Our Team" }
        ]}
        highlights={["Senior Engineers", "Certified Cloud Architects", "UI/UX Specialists", "Dedicated Account Leads"]}
      />
      <PremiumTeam />
      <PremiumProjectCTA />
    </main>
  );
}
