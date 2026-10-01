"use client";

import { PremiumSolutionDetail } from "@/components/PremiumSolutionDetail";
import { Monitor, Server, Code2, Layers, ShieldCheck, Zap } from "lucide-react";

export default function GeneratedPage() {
  return (
    <main>
      <PremiumSolutionDetail 
        title="PPT Design"
        heroHeading={
          <>PPT Design Solutions by <span className="text-[var(--primary)]">WebCodian</span> – Premium Enterprise Architecture</>
        }
        subtitle="Accelerate Your Business Growth with Custom Architecture"
        heroDescription={
          <>
            <p>Corporate presentation design that wins pitches and impresses stakeholders.</p>
            <p>WebCodian specializes in delivering end-to-end ppt design services that help startups, SMEs, and large organizations automate workflows, improve customer experiences, and scale operations efficiently.</p>
            <p>From initial consulting and strategic planning to deployment and post-launch support, our expert engineers create secure, scalable, and high-performance solutions tailored to your strict business goals.</p>
          </>
        }
        heroImage="/videos/digital-marketing.mp4"
        whyHeading={
          <>Why Modern Businesses Need <span className="text-[var(--primary)]">PPT Design</span></>
        }
        whyDescription="Today's businesses require more than standard solutions. Organizations need intelligent, bespoke architecture that can scale globally:"
        whyImage="https://images.unsplash.com/photo-1542744094-24638ea0b3b5?auto=format&fit=crop&q=80&w=800"
        features={[
          {
            title: "Pitch Deck Design",
            description: "Persuasive and visually stunning decks designed specifically for investor pitches.",
            icon: <Monitor className='w-5 h-5' />
          },
          {
            title: "Corporate Templates",
            description: "Branded master templates ensuring consistency across all internal communications.",
            icon: <Layers className='w-5 h-5' />
          },
          {
            title: "Data Visualization",
            description: "Transforming complex spreadsheets into beautiful, easily digestible infographics.",
            icon: <Code2 className='w-5 h-5' />
          },
          {
            title: "Sales Presentations",
            description: "High-conversion sales decks that perfectly highlight your product's value proposition.",
            icon: <Zap className='w-5 h-5' />
          },
          {
            title: "Brand Adherence",
            description: "Strict alignment with your corporate brand guidelines, fonts, and color palettes.",
            icon: <ShieldCheck className='w-5 h-5' />
          },
          {
            title: "Rapid Turnaround",
            description: "Dedicated design teams capable of executing premium designs under tight deadlines.",
            icon: <Server className='w-5 h-5' />
          }
        ]}
      />
    </main>
  );
}