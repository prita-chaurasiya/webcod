import { PremiumSolutionDetail } from "@/components/PremiumSolutionDetail";
import { Monitor, Server, Code2, Globe, Shield, Zap } from "lucide-react";
import { PremiumWebDevOverview } from "@/components/PremiumWebDevOverview";

export default function WebDevelopmentPage() {
  return (
    <main>
      <PremiumSolutionDetail 
        title="Web Development"
        heroHeading={
          <>Premium Web Engineering Solutions by <span className="text-[var(--primary)]">WebCodian</span></>
        }
        subtitle="Build Powerful Web Applications That Accelerate Business Growth"
        heroDescription={
          <>
            <p>Looking for a reliable Web Engineering partner that can transform your business processes into intelligent digital solutions?</p>
            <p>WebCodian specializes in designing and developing custom web applications that help startups, SMEs, enterprises, and organizations automate workflows, improve customer experiences, and scale operations efficiently.</p>
            <p>From business management portals and SaaS platforms to enterprise applications and cloud-based systems, our expert developers create secure, scalable, and high-performance web applications tailored to your business goals.</p>
            <p>Serving clients globally, we deliver future-ready web solutions that drive measurable business results.</p>
          </>
        }
        heroImage="/videos/web-dev.mp4"
        whyHeading={
          <>Why Modern Businesses Need Custom <span className="text-[#c25916]">Web Applications</span></>
        }
        whyDescription="Today's businesses require more than traditional websites. Organizations need intelligent applications that can:"
        whyImage="https://takshitsolutions.com/img/w1.svg"
        features={[
          {
            title: "Automate Tasks",
            description: "Automate repetitive workflows and eliminate manual data entry.",
            icon: <Zap className="w-5 h-5" />
          },
          {
            title: "Centralize Ops",
            description: "Centralize core business operations and data across departments.",
            icon: <Server className="w-5 h-5" />
          },
          {
            title: "Team Collaboration",
            description: "Empower remote and office teams with real-time collaboration tools.",
            icon: <Monitor className="w-5 h-5" />
          },
          {
            title: "Customer UX",
            description: "Deliver seamless, responsive self-service customer portals.",
            icon: <Globe className="w-5 h-5" />
          },
          {
            title: "Cost Reduction",
            description: "Reduce administrative overhead and operational software costs.",
            icon: <Shield className="w-5 h-5" />
          },
          {
            title: "Scale & Growth",
            description: "Scale infrastructure easily to support user and revenue expansion.",
            icon: <Code2 className="w-5 h-5" />
          }
        ]}
      />
      <PremiumWebDevOverview />
    </main>
  );
}
