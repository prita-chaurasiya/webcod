"use client";

import { PremiumSolutionDetail } from "@/components/PremiumSolutionDetail";
import { Monitor, Server, Code2, Layers, ShieldCheck, Zap } from "lucide-react";

export default function GeneratedPage() {
  return (
    <main>
      <PremiumSolutionDetail 
        title="UI/UX Design"
        heroHeading={
          <>UI/UX Design Solutions by <span className="text-[var(--primary)]">WebCodian</span> – Premium Enterprise Architecture</>
        }
        subtitle="Accelerate Your Business Growth with Custom Architecture"
        heroDescription={
          <>
            <p>Human-centric design strategies for engaging digital product experiences.</p>
            <p>WebCodian specializes in delivering end-to-end ui/ux design services that help startups, SMEs, and large organizations automate workflows, improve customer experiences, and scale operations efficiently.</p>
            <p>From initial consulting and strategic planning to deployment and post-launch support, our expert engineers create secure, scalable, and high-performance solutions tailored to your strict business goals.</p>
          </>
        }
        heroImage="/videos/web-dev.mp4"
        whyHeading={
          <>Why Modern Businesses Need <span className="text-[var(--primary)]">UI/UX Design</span></>
        }
        whyDescription="Today's businesses require more than standard solutions. Organizations need intelligent, bespoke architecture that can scale globally:"
        whyImage="https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=800"
        features={[
          {
            title: "User Research",
            description: "In-depth user interviews and persona creation to understand audience psychology.",
            icon: <Monitor className='w-5 h-5' />
          },
          {
            title: "Wireframing & Prototyping",
            description: "Interactive Figma prototypes to validate product flows before development.",
            icon: <Layers className='w-5 h-5' />
          },
          {
            title: "Design Systems",
            description: "Scalable component libraries that ensure visual consistency across all platforms.",
            icon: <Code2 className='w-5 h-5' />
          },
          {
            title: "Usability Testing",
            description: "Iterative testing with real users to identify and remove friction points.",
            icon: <Zap className='w-5 h-5' />
          },
          {
            title: "Micro-Interactions",
            description: "Engaging animations that delight users and provide intuitive system feedback.",
            icon: <Server className='w-5 h-5' />
          },
          {
            title: "Accessibility (WCAG)",
            description: "Designing inclusive interfaces that meet global accessibility standards.",
            icon: <ShieldCheck className='w-5 h-5' />
          }
        ]}
      />
    </main>
  );
}