import { AboutBreadcrumb } from "@/components/AboutBreadcrumb";
import { PremiumPerks } from "@/components/PremiumPerks";
import { PremiumJobs } from "@/components/PremiumJobs";
import { PremiumProjectCTA } from "@/components/PremiumProjectCTA";

export default function CareerPage() {
  return (
    <main>
      <AboutBreadcrumb 
        title="JOIN OUR INNOVATION TEAM"
        subtitle="Shape the future of intelligent software and digital experiences. Explore open roles, exceptional benefits, and our collaborative tech culture."
        badge="🚀 WE ARE HIRING TALENT"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "More" },
          { label: "Career" }
        ]}
        highlights={["Competitive Compensation", "Flexible Work Environment", "Latest Tech Stack", "Direct Leadership Mentorship"]}
      />
      <PremiumPerks />
      <PremiumJobs />
      <PremiumProjectCTA />
    </main>
  );
}
