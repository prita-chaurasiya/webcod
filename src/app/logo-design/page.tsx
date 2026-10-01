"use client";

import { PremiumSolutionDetail } from "@/components/PremiumSolutionDetail";
import { Monitor, Server, Code2, Layers, ShieldCheck, Zap } from "lucide-react";

export default function GeneratedPage() {
  return (
    <main>
      <PremiumSolutionDetail 
        title="Logo & Brand Identity"
        heroHeading={
          <>Logo & Brand Identity Solutions by <span className="text-[var(--primary)]">WebCodian</span> – Premium Enterprise Architecture</>
        }
        subtitle="Accelerate Your Business Growth with Custom Architecture"
        heroDescription={
          <>
            <p>Memorable corporate branding designed for modern enterprises.</p>
            <p>WebCodian specializes in delivering end-to-end logo & brand identity services that help startups, SMEs, and large organizations automate workflows, improve customer experiences, and scale operations efficiently.</p>
            <p>From initial consulting and strategic planning to deployment and post-launch support, our expert engineers create secure, scalable, and high-performance solutions tailored to your strict business goals.</p>
          </>
        }
        heroImage="/videos/digital-marketing.mp4"
        whyHeading={
          <>Why Modern Businesses Need <span className="text-[var(--primary)]">Logo & Brand Identity</span></>
        }
        whyDescription="Today's businesses require more than standard solutions. Organizations need intelligent, bespoke architecture that can scale globally:"
        whyImage="https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=800"
        features={[
          {
            title: "Vector Master Files",
            description: "Infinitely scalable AI and EPS files for print, web, and merchandise.",
            icon: <Code2 className='w-5 h-5' />
          },
          {
            title: "Brand Guidelines",
            description: "Comprehensive rulebooks detailing typography, spacing, and color theory.",
            icon: <Layers className='w-5 h-5' />
          },
          {
            title: "Competitor Analysis",
            description: "Strategic design positioning to ensure you stand out in saturated markets.",
            icon: <Monitor className='w-5 h-5' />
          },
          {
            title: "Versatile Formats",
            description: "Delivering custom logomarks, wordmarks, and responsive icon variations.",
            icon: <Server className='w-5 h-5' />
          },
          {
            title: "Trademark Ready",
            description: "Original, from-scratch vector artistry completely ready for legal trademarking.",
            icon: <ShieldCheck className='w-5 h-5' />
          },
          {
            title: "Rapid Iterations",
            description: "Agile design sprints ensuring the final identity perfectly aligns with your vision.",
            icon: <Zap className='w-5 h-5' />
          }
        ]}
      />
    </main>
  );
}