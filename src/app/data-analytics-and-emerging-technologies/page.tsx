"use client";

import { PremiumSolutionDetail } from "@/components/PremiumSolutionDetail";
import { Monitor, Server, Code2, Layers, ShieldCheck, Zap } from "lucide-react";

export default function GeneratedPage() {
  return (
    <main>
      <PremiumSolutionDetail 
        title="Data Analytics & Tech"
        heroHeading={
          <>Data Analytics & Tech Solutions by <span className="text-[var(--primary)]">WebCodian</span> – Premium Enterprise Architecture</>
        }
        subtitle="Accelerate Your Business Growth with Custom Architecture"
        heroDescription={
          <>
            <p>Turn raw data into actionable enterprise intelligence using predictive algorithms.</p>
            <p>WebCodian specializes in delivering end-to-end data analytics & tech services that help startups, SMEs, and large organizations automate workflows, improve customer experiences, and scale operations efficiently.</p>
            <p>From initial consulting and strategic planning to deployment and post-launch support, our expert engineers create secure, scalable, and high-performance solutions tailored to your strict business goals.</p>
          </>
        }
        heroImage="/videos/software-dev.mp4"
        whyHeading={
          <>Why Modern Businesses Need <span className="text-[var(--primary)]">Data Analytics & Tech</span></>
        }
        whyDescription="Today's businesses require more than standard solutions. Organizations need intelligent, bespoke architecture that can scale globally:"
        whyImage="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
        features={[
          {
            title: "Predictive Analytics",
            description: "Forecast market trends and customer behavior using historical data modeling.",
            icon: <Zap className='w-5 h-5' />
          },
          {
            title: "Big Data Processing",
            description: "Architectures capable of processing terabytes of unstructured data in real-time.",
            icon: <Server className='w-5 h-5' />
          },
          {
            title: "Interactive Dashboards",
            description: "Custom PowerBI and Tableau integrations for real-time executive reporting.",
            icon: <Monitor className='w-5 h-5' />
          },
          {
            title: "Machine Learning Models",
            description: "Custom algorithms designed to automate complex decision-making processes.",
            icon: <Layers className='w-5 h-5' />
          },
          {
            title: "Data Security Governance",
            description: "Strict adherence to data privacy laws, anonymization, and secure warehousing.",
            icon: <ShieldCheck className='w-5 h-5' />
          },
          {
            title: "ETL Pipelines",
            description: "Robust data extraction, transformation, and loading pipelines for clean datasets.",
            icon: <Code2 className='w-5 h-5' />
          }
        ]}
      />
    </main>
  );
}