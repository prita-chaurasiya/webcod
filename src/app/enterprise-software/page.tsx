"use client";

import { PremiumSolutionDetail } from "@/components/PremiumSolutionDetail";
import { Monitor, Server, Code2, Layers, ShieldCheck, Zap } from "lucide-react";

export default function GeneratedPage() {
  return (
    <main>
      <PremiumSolutionDetail 
        title="Enterprise Software"
        heroHeading={
          <>Enterprise Software Solutions by <span className="text-[var(--primary)]">WebCodian</span> – Premium Enterprise Architecture</>
        }
        subtitle="Accelerate Your Business Growth with Custom Architecture"
        heroDescription={
          <>
            <p>Custom business logic and scalable microservices for global enterprises.</p>
            <p>WebCodian specializes in delivering end-to-end enterprise software services that help startups, SMEs, and large organizations automate workflows, improve customer experiences, and scale operations efficiently.</p>
            <p>From initial consulting and strategic planning to deployment and post-launch support, our expert engineers create secure, scalable, and high-performance solutions tailored to your strict business goals.</p>
          </>
        }
        heroImage="/videos/software-dev.mp4"
        whyHeading={
          <>Why Modern Businesses Need <span className="text-[var(--primary)]">Enterprise Software</span></>
        }
        whyDescription="Today's businesses require more than standard solutions. Organizations need intelligent, bespoke architecture that can scale globally:"
        whyImage="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
        features={[
          {
            title: "ERP Integration",
            description: "Centralize business operations, inventory, and HR into a single cohesive platform.",
            icon: <Layers className='w-5 h-5' />
          },
          {
            title: "Legacy Modernization",
            description: "Upgrade outdated monolithic software to scalable cloud-native architectures.",
            icon: <Server className='w-5 h-5' />
          },
          {
            title: "Workflow Automation",
            description: "Eliminate manual data entry and human error with intelligent automation.",
            icon: <Zap className='w-5 h-5' />
          },
          {
            title: "Custom CRM Solutions",
            description: "Tailored customer relationship management systems that fit your sales cycle.",
            icon: <Monitor className='w-5 h-5' />
          },
          {
            title: "Role-Based Access",
            description: "Granular access controls ensuring employees only see the data they need.",
            icon: <ShieldCheck className='w-5 h-5' />
          },
          {
            title: "High-Availability Systems",
            description: "Fault-tolerant architectures ensuring 99.99% uptime for critical apps.",
            icon: <Code2 className='w-5 h-5' />
          }
        ]}
      />
    </main>
  );
}