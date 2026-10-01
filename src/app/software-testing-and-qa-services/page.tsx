"use client";

import { PremiumSolutionDetail } from "@/components/PremiumSolutionDetail";
import { Monitor, Server, Code2, Layers, ShieldCheck, Zap } from "lucide-react";

export default function GeneratedPage() {
  return (
    <main>
      <PremiumSolutionDetail 
        title="Software Testing & QA"
        heroHeading={
          <>Software Testing & QA Solutions by <span className="text-[var(--primary)]">WebCodian</span> – Premium Enterprise Architecture</>
        }
        subtitle="Accelerate Your Business Growth with Custom Architecture"
        heroDescription={
          <>
            <p>Rigorous automated and manual testing to ensure zero-defect product launches.</p>
            <p>WebCodian specializes in delivering end-to-end software testing & qa services that help startups, SMEs, and large organizations automate workflows, improve customer experiences, and scale operations efficiently.</p>
            <p>From initial consulting and strategic planning to deployment and post-launch support, our expert engineers create secure, scalable, and high-performance solutions tailored to your strict business goals.</p>
          </>
        }
        heroImage="/videos/software-dev.mp4"
        whyHeading={
          <>Why Modern Businesses Need <span className="text-[var(--primary)]">Software Testing & QA</span></>
        }
        whyDescription="Today's businesses require more than standard solutions. Organizations need intelligent, bespoke architecture that can scale globally:"
        whyImage="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=800"
        features={[
          {
            title: "Automated Testing",
            description: "End-to-end automation scripts utilizing Selenium, Cypress, and Playwright.",
            icon: <Code2 className='w-5 h-5' />
          },
          {
            title: "Performance Testing",
            description: "Stress and load testing to ensure your application can handle massive traffic spikes.",
            icon: <Zap className='w-5 h-5' />
          },
          {
            title: "Security Auditing",
            description: "Comprehensive vulnerability scanning and penetration testing.",
            icon: <ShieldCheck className='w-5 h-5' />
          },
          {
            title: "Cross-Platform QA",
            description: "Ensuring flawless functionality across all browsers, operating systems, and devices.",
            icon: <Monitor className='w-5 h-5' />
          },
          {
            title: "API Testing",
            description: "Validating API responses, payloads, and latency using Postman and REST Assured.",
            icon: <Server className='w-5 h-5' />
          },
          {
            title: "Continuous Testing",
            description: "Integrating QA directly into the CI/CD pipeline for instant bug detection.",
            icon: <Layers className='w-5 h-5' />
          }
        ]}
      />
    </main>
  );
}