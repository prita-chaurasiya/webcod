"use client";

import { PremiumSolutionDetail } from "@/components/PremiumSolutionDetail";
import { Monitor, Server, Code2, Layers, ShieldCheck, Zap } from "lucide-react";

export default function GeneratedPage() {
  return (
    <main>
      <PremiumSolutionDetail 
        title="Software Testing & QA"
        heroHeading={
          <>Software Testing & QA Company in <span className="text-[#c25916]">Noida</span> – Premium Solutions for Enterprises</>
        }
        subtitle="Accelerate Your Business Growth with Custom Architecture"
        heroDescription={
          <>
            <p>Rigorous automated and manual testing to ensure zero-defect product launches.</p>
            <p>WebCodian specializes in delivering end-to-end software testing & qa services that help startups, SMEs, and large organizations automate workflows, improve customer experiences, and scale operations efficiently.</p>
            <p>From initial consulting and strategic planning to deployment and post-launch support, our expert engineers create secure, scalable, and high-performance solutions tailored to your strict business goals.</p>
          </>
        }
        heroImage="https://takshitsolutions.com/img/web-application-development.svg"
        whyHeading={
          <>Why Modern Businesses Need <span className="text-[#c25916]">Software Testing & QA</span></>
        }
        whyDescription="Today's businesses require more than standard solutions. Organizations need intelligent, bespoke architecture that can:"
        whyImage="https://takshitsolutions.com/img/w1.svg"
        features={[
          {
            title: "Automate Workflows",
            description: "Automate repetitive workflows and eliminate manual data entry overhead.",
            icon: <Zap className="w-5 h-5" />
          },
          {
            title: "Centralize Data",
            description: "Centralize core business operations and data across multiple departments.",
            icon: <Server className="w-5 h-5" />
          },
          {
            title: "Enhance Collaboration",
            description: "Empower remote and office teams with real-time enterprise collaboration tools.",
            icon: <Monitor className="w-5 h-5" />
          },
          {
            title: "Improve UX",
            description: "Deliver seamless, highly responsive self-service customer portals.",
            icon: <Layers className="w-5 h-5" />
          },
          {
            title: "Cost Reduction",
            description: "Significantly reduce administrative overhead and operational software costs.",
            icon: <ShieldCheck className="w-5 h-5" />
          },
          {
            title: "Scale Infrastructure",
            description: "Scale infrastructure easily to support exponential user and revenue expansion.",
            icon: <Code2 className="w-5 h-5" />
          }
        ]}
      />
    </main>
  );
}