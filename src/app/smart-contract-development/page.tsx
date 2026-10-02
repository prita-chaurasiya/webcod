"use client";

import { PremiumSolutionDetail } from "@/components/PremiumSolutionDetail";
import { Monitor, Server, Code2, Layers, ShieldCheck, Zap } from "lucide-react";

export default function GeneratedPage() {
  return (
    <main>
      <PremiumSolutionDetail 
        title="Smart Contract Development"
        heroHeading={
          <>Smart Contract Development Solutions by <span className="text-[var(--primary)]">WebCodian</span> – Premium Enterprise Architecture</>
        }
        subtitle="Accelerate Your Business Growth with Custom Architecture"
        heroDescription={
          <>
            <p>Audited, secure, and self-executing contracts for the modern Web3 economy.</p>
            <p>WebCodian specializes in delivering end-to-end smart contract development services that help startups, SMEs, and large organizations automate workflows, improve customer experiences, and scale operations efficiently.</p>
            <p>From initial consulting and strategic planning to deployment and post-launch support, our expert engineers create secure, scalable, and high-performance solutions tailored to your strict business goals.</p>
          </>
        }
        heroImage="/videos/software-dev.mp4"
        whyHeading={
          <>Why Modern Businesses Need <span className="text-[var(--primary)]">Smart Contract Development</span></>
        }
        whyDescription="Today's businesses require more than standard solutions. Organizations need intelligent, bespoke architecture that can scale globally:"
        whyImage="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800"
        features={[
          {
            title: "Solidity & Rust Engineering",
            description: "Writing optimized, gas-efficient contracts for EVM and Rust-based chains.",
            icon: <Code2 className='w-5 h-5' />
          },
          {
            title: "NFT Minting Contracts",
            description: "ERC-721 and ERC-1155 standards for unique digital asset ownership.",
            icon: <Layers className='w-5 h-5' />
          },
          {
            title: "DAO Governance",
            description: "Decentralized voting mechanisms and treasury management contracts.",
            icon: <Server className='w-5 h-5' />
          },
          {
            title: "Automated Market Makers",
            description: "Complex mathematical pricing algorithms for decentralized exchanges.",
            icon: <Zap className='w-5 h-5' />
          },
          {
            title: "Comprehensive Audits",
            description: "Multi-layered security testing utilizing MythX, Slither, and manual review.",
            icon: <ShieldCheck className='w-5 h-5' />
          },
          {
            title: "Multi-Sig Wallets",
            description: "Multi-signature contract architectures for enterprise fund security.",
            icon: <Monitor className='w-5 h-5' />
          }
        ]}
      />
    </main>
  );
}
