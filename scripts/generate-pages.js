const fs = require('fs');
const path = require('path');

const pages = [
  { slug: "api-development-and-system-integration", title: "API & System Integration", desc: "Seamlessly connect disparate systems to create unified digital ecosystems." },
  { slug: "cloud-deployment-and-devops-services", title: "Cloud Deployment & DevOps", desc: "Scale your infrastructure globally with automated CI/CD and secure cloud environments." },
  { slug: "data-analytics-and-emerging-technologies", title: "Data Analytics & Tech", desc: "Turn raw data into actionable enterprise intelligence using predictive algorithms." },
  { slug: "enterprise-software", title: "Enterprise Software", desc: "Custom business logic and scalable microservices for global enterprises." },
  { slug: "ppt-design", title: "PPT Design", desc: "Corporate presentation design that wins pitches and impresses stakeholders." },
  { slug: "software-testing-and-qa-services", title: "Software Testing & QA", desc: "Rigorous automated and manual testing to ensure zero-defect product launches." },
  { slug: "ui-ux-design-and-prototyping", title: "UI/UX Design", desc: "Human-centric design strategies for engaging digital product experiences." },
  { slug: "blockchain-development", title: "Blockchain & Web3", desc: "Decentralized architecture and secure distributed ledger technologies." },
  { slug: "smart-contract-development", title: "Smart Contract Development", desc: "Audited, secure, and self-executing contracts for the modern Web3 economy." },
  { slug: "wallet-development", title: "Crypto Wallet Development", desc: "Non-custodial and custodial secure crypto wallet infrastructures." },
  { slug: "exchange-software-development", title: "Crypto Exchange Development", desc: "High-liquidity, high-frequency trading platforms built for scale." },
  { slug: "ai-chatbot-development", title: "AI & Chatbot Development", desc: "Intelligent conversational agents that automate customer success." },
  { slug: "logo-design", title: "Logo & Brand Identity", desc: "Memorable corporate branding designed for modern enterprises." },
  { slug: "web-application-development", title: "Web App Development", desc: "Robust, scalable, and secure web applications built on modern frameworks." },
];

const template = (title, desc) => {
  return `"use client";

import { PremiumSolutionDetail } from "@/components/PremiumSolutionDetail";
import { Monitor, Server, Code2, Layers, ShieldCheck, Zap } from "lucide-react";

export default function GeneratedPage() {
  return (
    <main>
      <PremiumSolutionDetail 
        title="${title}"
        heroHeading={
          <>${title} Company in <span className="text-[#c25916]">Noida</span> – Premium Solutions for Enterprises</>
        }
        subtitle="Accelerate Your Business Growth with Custom Architecture"
        heroDescription={
          <>
            <p>${desc}</p>
            <p>WebCodian specializes in delivering end-to-end ${title.toLowerCase()} services that help startups, SMEs, and large organizations automate workflows, improve customer experiences, and scale operations efficiently.</p>
            <p>From initial consulting and strategic planning to deployment and post-launch support, our expert engineers create secure, scalable, and high-performance solutions tailored to your strict business goals.</p>
          </>
        }
        heroImage="https://takshitsolutions.com/img/web-application-development.svg"
        whyHeading={
          <>Why Modern Businesses Need <span className="text-[#c25916]">${title}</span></>
        }
        whyDescription="Today's businesses require more than standard solutions. Organizations need intelligent, bespoke architecture that can:"
        whyImage="https://takshitsolutions.com/img/w1.svg"
        features={[
          {
            title: "Automate Workflows",
            description: "Automate repetitive workflows and eliminate manual data entry overhead.",
            icon: <Zap className="w-5 h-5" />
          },
          {
            title: "Centralize Data",
            description: "Centralize core business operations and data across multiple departments.",
            icon: <Server className="w-5 h-5" />
          },
          {
            title: "Enhance Collaboration",
            description: "Empower remote and office teams with real-time enterprise collaboration tools.",
            icon: <Monitor className="w-5 h-5" />
          },
          {
            title: "Improve UX",
            description: "Deliver seamless, highly responsive self-service customer portals.",
            icon: <Layers className="w-5 h-5" />
          },
          {
            title: "Cost Reduction",
            description: "Significantly reduce administrative overhead and operational software costs.",
            icon: <ShieldCheck className="w-5 h-5" />
          },
          {
            title: "Scale Infrastructure",
            description: "Scale infrastructure easily to support exponential user and revenue expansion.",
            icon: <Code2 className="w-5 h-5" />
          }
        ]}
      />
    </main>
  );
}`;
};

pages.forEach(page => {
  const dir = path.join('d:/webcod/src/app', page.slug);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  const filePath = path.join(dir, 'page.tsx');
  fs.writeFileSync(filePath, template(page.title, page.desc));
  console.log('Generated:', filePath);
});
