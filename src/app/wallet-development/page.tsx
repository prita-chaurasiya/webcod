"use client";

import { PremiumSolutionDetail } from "@/components/PremiumSolutionDetail";
import { Monitor, Server, Code2, Layers, ShieldCheck, Zap } from "lucide-react";

export default function GeneratedPage() {
  return (
    <main>
      <PremiumSolutionDetail 
        title="Crypto Wallet Development"
        heroHeading={
          <>Crypto Wallet Development Solutions by <span className="text-[var(--primary)]">WebCodian</span> – Premium Enterprise Architecture</>
        }
        subtitle="Accelerate Your Business Growth with Custom Architecture"
        heroDescription={
          <>
            <p>Non-custodial and custodial secure crypto wallet infrastructures.</p>
            <p>WebCodian specializes in delivering end-to-end crypto wallet development services that help startups, SMEs, and large organizations automate workflows, improve customer experiences, and scale operations efficiently.</p>
            <p>From initial consulting and strategic planning to deployment and post-launch support, our expert engineers create secure, scalable, and high-performance solutions tailored to your strict business goals.</p>
          </>
        }
        heroImage="/videos/app-dev.mp4"
        whyHeading={
          <>Why Modern Businesses Need <span className="text-[var(--primary)]">Crypto Wallet Development</span></>
        }
        whyDescription="Today's businesses require more than standard solutions. Organizations need intelligent, bespoke architecture that can scale globally:"
        whyImage="https://images.unsplash.com/photo-1621416894569-0f39ed31d247?auto=format&fit=crop&q=80&w=800"
        features={[
          {
            title: "Multi-Currency Support",
            description: "Seamless integration with thousands of ERC-20, SPL, and native network tokens.",
            icon: <Layers className='w-5 h-5' />
          },
          {
            title: "Biometric Authentication",
            description: "FaceID and fingerprint integration for maximum mobile wallet security.",
            icon: <ShieldCheck className='w-5 h-5' />
          },
          {
            title: "Hardware Wallet Sync",
            description: "Native integrations for Ledger and Trezor cold storage devices.",
            icon: <Server className='w-5 h-5' />
          },
          {
            title: "In-App Swaps",
            description: "Direct DEX integration allowing users to trade tokens within the wallet.",
            icon: <Zap className='w-5 h-5' />
          },
          {
            title: "Seed Phrase Generation",
            description: "Cryptographically secure BIP-39 mnemonic phrase generation.",
            icon: <Code2 className='w-5 h-5' />
          },
          {
            title: "Cross-Platform Access",
            description: "Synchronized wallet access via mobile app, browser extension, and web.",
            icon: <Monitor className='w-5 h-5' />
          }
        ]}
      />
    </main>
  );
}