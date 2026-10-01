"use client";

import { PremiumSolutionDetail } from "@/components/PremiumSolutionDetail";
import { Monitor, Server, Code2, Layers, ShieldCheck, Zap } from "lucide-react";

export default function GeneratedPage() {
  return (
    <main>
      <PremiumSolutionDetail 
        title="Blockchain & Web3"
        heroHeading={
          <>Blockchain & Web3 Solutions by <span className="text-[var(--primary)]">WebCodian</span> – Premium Enterprise Architecture</>
        }
        subtitle="Accelerate Your Business Growth with Custom Architecture"
        heroDescription={
          <>
            <p>Decentralized architecture and secure distributed ledger technologies.</p>
            <p>WebCodian specializes in delivering end-to-end blockchain & web3 services that help startups, SMEs, and large organizations automate workflows, improve customer experiences, and scale operations efficiently.</p>
            <p>From initial consulting and strategic planning to deployment and post-launch support, our expert engineers create secure, scalable, and high-performance solutions tailored to your strict business goals.</p>
          </>
        }
        heroImage="/videos/software-dev.mp4"
        whyHeading={
          <>Why Modern Businesses Need <span className="text-[var(--primary)]">Blockchain & Web3</span></>
        }
        whyDescription="Today's businesses require more than standard solutions. Organizations need intelligent, bespoke architecture that can scale globally:"
        whyImage="https://images.unsplash.com/photo-1621416894569-0f39ed31d247?auto=format&fit=crop&q=80&w=800"
        features={[
          {
            title: "DeFi Solutions",
            description: "Building decentralized finance protocols, staking platforms, and liquidity pools.",
            icon: <Layers className='w-5 h-5' />
          },
          {
            title: "Private Blockchains",
            description: "Enterprise-grade permissioned ledgers using Hyperledger and Corda.",
            icon: <Server className='w-5 h-5' />
          },
          {
            title: "DApp Development",
            description: "Intuitive decentralized applications built on Ethereum, Solana, and Polygon.",
            icon: <Monitor className='w-5 h-5' />
          },
          {
            title: "Tokenomics Design",
            description: "Strategic design of token utility, distribution, and economic incentive structures.",
            icon: <Zap className='w-5 h-5' />
          },
          {
            title: "Security Auditing",
            description: "Rigorous smart contract auditing to prevent vulnerabilities and exploits.",
            icon: <ShieldCheck className='w-5 h-5' />
          },
          {
            title: "Layer-2 Scaling",
            description: "Implementing state channels and rollups to reduce transaction gas fees.",
            icon: <Code2 className='w-5 h-5' />
          }
        ]}
      />
    </main>
  );
}