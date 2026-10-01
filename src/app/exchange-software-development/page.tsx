"use client";

import { PremiumSolutionDetail } from "@/components/PremiumSolutionDetail";
import { Monitor, Server, Code2, Layers, ShieldCheck, Zap } from "lucide-react";

export default function GeneratedPage() {
  return (
    <main>
      <PremiumSolutionDetail 
        title="Crypto Exchange Development"
        heroHeading={
          <>Crypto Exchange Development Solutions by <span className="text-[var(--primary)]">WebCodian</span> – Premium Enterprise Architecture</>
        }
        subtitle="Accelerate Your Business Growth with Custom Architecture"
        heroDescription={
          <>
            <p>High-liquidity, high-frequency trading platforms built for scale.</p>
            <p>WebCodian specializes in delivering end-to-end crypto exchange development services that help startups, SMEs, and large organizations automate workflows, improve customer experiences, and scale operations efficiently.</p>
            <p>From initial consulting and strategic planning to deployment and post-launch support, our expert engineers create secure, scalable, and high-performance solutions tailored to your strict business goals.</p>
          </>
        }
        heroImage="/videos/software-dev.mp4"
        whyHeading={
          <>Why Modern Businesses Need <span className="text-[var(--primary)]">Crypto Exchange Development</span></>
        }
        whyDescription="Today's businesses require more than standard solutions. Organizations need intelligent, bespoke architecture that can scale globally:"
        whyImage="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=800"
        features={[
          {
            title: "High-Frequency Matching",
            description: "Ultra-fast order matching engines capable of millions of transactions per second.",
            icon: <Zap className='w-5 h-5' />
          },
          {
            title: "Liquidity Integration",
            description: "API connections to top-tier global exchanges for deep order book liquidity.",
            icon: <Server className='w-5 h-5' />
          },
          {
            title: "Advanced Trading UI",
            description: "Professional charting tools, technical indicators, and customizable layouts.",
            icon: <Monitor className='w-5 h-5' />
          },
          {
            title: "Cold Storage Systems",
            description: "Air-gapped security protocols ensuring the absolute safety of user funds.",
            icon: <ShieldCheck className='w-5 h-5' />
          },
          {
            title: "Fiat Gateways",
            description: "Seamless credit card and bank transfer integration for crypto purchases.",
            icon: <Code2 className='w-5 h-5' />
          },
          {
            title: "Admin Architecture",
            description: "Comprehensive KYC/AML management and fee structure administration.",
            icon: <Layers className='w-5 h-5' />
          }
        ]}
      />
    </main>
  );
}