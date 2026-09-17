import { AboutBreadcrumb } from "@/components/AboutBreadcrumb";
import { PremiumPortfolio } from "@/components/PremiumPortfolio";

export default function PortfolioPage() {
  return (
    <main>
      <AboutBreadcrumb 
        title="OUR FEATURED PROJECTS"
        subtitle="Explore our production deliveries across enterprise software, educational institutions, non-profits, and cutting-edge web applications."
        badge="✦ PORTFOLIO & CASE STUDIES"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "More" },
          { label: "Projects" }
        ]}
        highlights={["Enterprise SaaS & Portals", "Custom ERP Solutions", "Full-Stack Web Apps", "100% Client Satisfaction"]}
      />
      <PremiumPortfolio />
    </main>
  );
}
