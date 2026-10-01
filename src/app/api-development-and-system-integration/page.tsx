"use client";

import { PremiumSolutionDetail } from "@/components/PremiumSolutionDetail";
import { Monitor, Server, Code2, Layers, ShieldCheck, Zap } from "lucide-react";

export default function GeneratedPage() {
  return (
    <main>
      <PremiumSolutionDetail 
        title="API & System Integration"
        heroHeading={
          <>API & System Integration Solutions by <span className="text-[var(--primary)]">WebCodian</span> – Premium Enterprise Architecture</>
        }
        subtitle="Accelerate Your Business Growth with Custom Architecture"
        heroDescription={
          <>
            <p>Seamlessly connect disparate systems to create unified digital ecosystems.</p>
            <p>WebCodian specializes in delivering end-to-end api & system integration services that help startups, SMEs, and large organizations automate workflows, improve customer experiences, and scale operations efficiently.</p>
            <p>From initial consulting and strategic planning to deployment and post-launch support, our expert engineers create secure, scalable, and high-performance solutions tailored to your strict business goals.</p>
          </>
        }
        heroImage="/videos/software-dev.mp4"
        whyHeading={
          <>Why Modern Businesses Need <span className="text-[var(--primary)]">API & System Integration</span></>
        }
        whyDescription="Today's businesses require more than standard solutions. Organizations need intelligent, bespoke architecture that can scale globally:"
        whyImage="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800"
        features={[
          {
            title: "Custom API Engineering",
            description: "Robust REST & GraphQL APIs designed for scalability and minimal latency.",
            icon: <Code2 className='w-5 h-5' />
          },
          {
            title: "Legacy System Integration",
            description: "Connect modern frontends with legacy on-premise backend mainframes safely.",
            icon: <Server className='w-5 h-5' />
          },
          {
            title: "Microservices Architecture",
            description: "Decouple monolithic apps into independent, high-performance microservices.",
            icon: <Layers className='w-5 h-5' />
          },
          {
            title: "Data Synchronization",
            description: "Real-time, bidirectional data syncing across all third-party platforms.",
            icon: <Zap className='w-5 h-5' />
          },
          {
            title: "API Security & OAuth",
            description: "End-to-end encryption, rate limiting, and secure OAuth2 implementation.",
            icon: <ShieldCheck className='w-5 h-5' />
          },
          {
            title: "API Documentation",
            description: "Clear, interactive Swagger/OpenAPI documentation for seamless developer onboarding.",
            icon: <Monitor className='w-5 h-5' />
          }
        ]}
      />
    </main>
  );
}