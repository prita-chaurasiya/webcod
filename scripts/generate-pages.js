const fs = require('fs');
const path = require('path');

const pagesData = [
  { 
    slug: "api-development-and-system-integration", 
    title: "API & System Integration", 
    desc: "Seamlessly connect disparate systems to create unified digital ecosystems.",
    features: [
      { title: "Custom API Engineering", desc: "Robust REST & GraphQL APIs designed for scalability and minimal latency.", icon: "<Code2 className='w-5 h-5' />" },
      { title: "Legacy System Integration", desc: "Connect modern frontends with legacy on-premise backend mainframes safely.", icon: "<Server className='w-5 h-5' />" },
      { title: "Microservices Architecture", desc: "Decouple monolithic apps into independent, high-performance microservices.", icon: "<Layers className='w-5 h-5' />" },
      { title: "Data Synchronization", desc: "Real-time, bidirectional data syncing across all third-party platforms.", icon: "<Zap className='w-5 h-5' />" },
      { title: "API Security & OAuth", desc: "End-to-end encryption, rate limiting, and secure OAuth2 implementation.", icon: "<ShieldCheck className='w-5 h-5' />" },
      { title: "API Documentation", desc: "Clear, interactive Swagger/OpenAPI documentation for seamless developer onboarding.", icon: "<Monitor className='w-5 h-5' />" }
    ],
    video: "/videos/software-dev.mp4",
    whyImg: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800"
  },
  { 
    slug: "cloud-deployment-and-devops-services", 
    title: "Cloud Deployment & DevOps", 
    desc: "Scale your infrastructure globally with automated CI/CD and secure cloud environments.",
    features: [
      { title: "Automated CI/CD Pipelines", desc: "Zero-downtime deployment pipelines for faster and safer feature releases.", icon: "<Zap className='w-5 h-5' />" },
      { title: "Cloud Architecture Design", desc: "Scalable AWS, Azure, and GCP infrastructures optimized for heavy loads.", icon: "<Server className='w-5 h-5' />" },
      { title: "Infrastructure as Code", desc: "Manage and provision data centers automatically using Terraform and Ansible.", icon: "<Code2 className='w-5 h-5' />" },
      { title: "Containerization", desc: "Docker and Kubernetes orchestration for isolated, portable application deployment.", icon: "<Layers className='w-5 h-5' />" },
      { title: "DevSecOps", desc: "Integrating automated security scanning directly into your build pipelines.", icon: "<ShieldCheck className='w-5 h-5' />" },
      { title: "24/7 Monitoring", desc: "Proactive infrastructure monitoring using Prometheus, Grafana, and Datadog.", icon: "<Monitor className='w-5 h-5' />" }
    ],
    video: "/videos/software-dev.mp4",
    whyImg: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800"
  },
  { 
    slug: "data-analytics-and-emerging-technologies", 
    title: "Data Analytics & Tech", 
    desc: "Turn raw data into actionable enterprise intelligence using predictive algorithms.",
    features: [
      { title: "Predictive Analytics", desc: "Forecast market trends and customer behavior using historical data modeling.", icon: "<Zap className='w-5 h-5' />" },
      { title: "Big Data Processing", desc: "Architectures capable of processing terabytes of unstructured data in real-time.", icon: "<Server className='w-5 h-5' />" },
      { title: "Interactive Dashboards", desc: "Custom PowerBI and Tableau integrations for real-time executive reporting.", icon: "<Monitor className='w-5 h-5' />" },
      { title: "Machine Learning Models", desc: "Custom algorithms designed to automate complex decision-making processes.", icon: "<Layers className='w-5 h-5' />" },
      { title: "Data Security Governance", desc: "Strict adherence to data privacy laws, anonymization, and secure warehousing.", icon: "<ShieldCheck className='w-5 h-5' />" },
      { title: "ETL Pipelines", desc: "Robust data extraction, transformation, and loading pipelines for clean datasets.", icon: "<Code2 className='w-5 h-5' />" }
    ],
    video: "/videos/software-dev.mp4",
    whyImg: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
  },
  { 
    slug: "enterprise-software", 
    title: "Enterprise Software", 
    desc: "Custom business logic and scalable microservices for global enterprises.",
    features: [
      { title: "ERP Integration", desc: "Centralize business operations, inventory, and HR into a single cohesive platform.", icon: "<Layers className='w-5 h-5' />" },
      { title: "Legacy Modernization", desc: "Upgrade outdated monolithic software to scalable cloud-native architectures.", icon: "<Server className='w-5 h-5' />" },
      { title: "Workflow Automation", desc: "Eliminate manual data entry and human error with intelligent automation.", icon: "<Zap className='w-5 h-5' />" },
      { title: "Custom CRM Solutions", desc: "Tailored customer relationship management systems that fit your sales cycle.", icon: "<Monitor className='w-5 h-5' />" },
      { title: "Role-Based Access", desc: "Granular access controls ensuring employees only see the data they need.", icon: "<ShieldCheck className='w-5 h-5' />" },
      { title: "High-Availability Systems", desc: "Fault-tolerant architectures ensuring 99.99% uptime for critical apps.", icon: "<Code2 className='w-5 h-5' />" }
    ],
    video: "/videos/software-dev.mp4",
    whyImg: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
  },
  { 
    slug: "ppt-design", 
    title: "PPT Design", 
    desc: "Corporate presentation design that wins pitches and impresses stakeholders.",
    features: [
      { title: "Pitch Deck Design", desc: "Persuasive and visually stunning decks designed specifically for investor pitches.", icon: "<Monitor className='w-5 h-5' />" },
      { title: "Corporate Templates", desc: "Branded master templates ensuring consistency across all internal communications.", icon: "<Layers className='w-5 h-5' />" },
      { title: "Data Visualization", desc: "Transforming complex spreadsheets into beautiful, easily digestible infographics.", icon: "<Code2 className='w-5 h-5' />" },
      { title: "Sales Presentations", desc: "High-conversion sales decks that perfectly highlight your product's value proposition.", icon: "<Zap className='w-5 h-5' />" },
      { title: "Brand Adherence", desc: "Strict alignment with your corporate brand guidelines, fonts, and color palettes.", icon: "<ShieldCheck className='w-5 h-5' />" },
      { title: "Rapid Turnaround", desc: "Dedicated design teams capable of executing premium designs under tight deadlines.", icon: "<Server className='w-5 h-5' />" }
    ],
    video: "/videos/digital-marketing.mp4",
    whyImg: "https://images.unsplash.com/photo-1542744094-24638ea0b3b5?auto=format&fit=crop&q=80&w=800"
  },
  { 
    slug: "software-testing-and-qa-services", 
    title: "Software Testing & QA", 
    desc: "Rigorous automated and manual testing to ensure zero-defect product launches.",
    features: [
      { title: "Automated Testing", desc: "End-to-end automation scripts utilizing Selenium, Cypress, and Playwright.", icon: "<Code2 className='w-5 h-5' />" },
      { title: "Performance Testing", desc: "Stress and load testing to ensure your application can handle massive traffic spikes.", icon: "<Zap className='w-5 h-5' />" },
      { title: "Security Auditing", desc: "Comprehensive vulnerability scanning and penetration testing.", icon: "<ShieldCheck className='w-5 h-5' />" },
      { title: "Cross-Platform QA", desc: "Ensuring flawless functionality across all browsers, operating systems, and devices.", icon: "<Monitor className='w-5 h-5' />" },
      { title: "API Testing", desc: "Validating API responses, payloads, and latency using Postman and REST Assured.", icon: "<Server className='w-5 h-5' />" },
      { title: "Continuous Testing", desc: "Integrating QA directly into the CI/CD pipeline for instant bug detection.", icon: "<Layers className='w-5 h-5' />" }
    ],
    video: "/videos/software-dev.mp4",
    whyImg: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=800"
  },
  { 
    slug: "ui-ux-design-and-prototyping", 
    title: "UI/UX Design", 
    desc: "Human-centric design strategies for engaging digital product experiences.",
    features: [
      { title: "User Research", desc: "In-depth user interviews and persona creation to understand audience psychology.", icon: "<Monitor className='w-5 h-5' />" },
      { title: "Wireframing & Prototyping", desc: "Interactive Figma prototypes to validate product flows before development.", icon: "<Layers className='w-5 h-5' />" },
      { title: "Design Systems", desc: "Scalable component libraries that ensure visual consistency across all platforms.", icon: "<Code2 className='w-5 h-5' />" },
      { title: "Usability Testing", desc: "Iterative testing with real users to identify and remove friction points.", icon: "<Zap className='w-5 h-5' />" },
      { title: "Micro-Interactions", desc: "Engaging animations that delight users and provide intuitive system feedback.", icon: "<Server className='w-5 h-5' />" },
      { title: "Accessibility (WCAG)", desc: "Designing inclusive interfaces that meet global accessibility standards.", icon: "<ShieldCheck className='w-5 h-5' />" }
    ],
    video: "/videos/web-dev.mp4",
    whyImg: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=800"
  },
  { 
    slug: "blockchain-development", 
    title: "Blockchain & Web3", 
    desc: "Decentralized architecture and secure distributed ledger technologies.",
    features: [
      { title: "DeFi Solutions", desc: "Building decentralized finance protocols, staking platforms, and liquidity pools.", icon: "<Layers className='w-5 h-5' />" },
      { title: "Private Blockchains", desc: "Enterprise-grade permissioned ledgers using Hyperledger and Corda.", icon: "<Server className='w-5 h-5' />" },
      { title: "DApp Development", desc: "Intuitive decentralized applications built on Ethereum, Solana, and Polygon.", icon: "<Monitor className='w-5 h-5' />" },
      { title: "Tokenomics Design", desc: "Strategic design of token utility, distribution, and economic incentive structures.", icon: "<Zap className='w-5 h-5' />" },
      { title: "Security Auditing", desc: "Rigorous smart contract auditing to prevent vulnerabilities and exploits.", icon: "<ShieldCheck className='w-5 h-5' />" },
      { title: "Layer-2 Scaling", desc: "Implementing state channels and rollups to reduce transaction gas fees.", icon: "<Code2 className='w-5 h-5' />" }
    ],
    video: "/videos/software-dev.mp4",
    whyImg: "https://images.unsplash.com/photo-1621416894569-0f39ed31d247?auto=format&fit=crop&q=80&w=800"
  },
  { 
    slug: "smart-contract-development", 
    title: "Smart Contract Development", 
    desc: "Audited, secure, and self-executing contracts for the modern Web3 economy.",
    features: [
      { title: "Solidity & Rust Engineering", desc: "Writing optimized, gas-efficient contracts for EVM and Rust-based chains.", icon: "<Code2 className='w-5 h-5' />" },
      { title: "NFT Minting Contracts", desc: "ERC-721 and ERC-1155 standards for unique digital asset ownership.", icon: "<Layers className='w-5 h-5' />" },
      { title: "DAO Governance", desc: "Decentralized voting mechanisms and treasury management contracts.", icon: "<Server className='w-5 h-5' />" },
      { title: "Automated Market Makers", desc: "Complex mathematical pricing algorithms for decentralized exchanges.", icon: "<Zap className='w-5 h-5' />" },
      { title: "Comprehensive Audits", desc: "Multi-layered security testing utilizing MythX, Slither, and manual review.", icon: "<ShieldCheck className='w-5 h-5' />" },
      { title: "Multi-Sig Wallets", desc: "Multi-signature contract architectures for enterprise fund security.", icon: "<Monitor className='w-5 h-5' />" }
    ],
    video: "/videos/software-dev.mp4",
    whyImg: "https://images.unsplash.com/photo-1639762681485-074b7f4ec672?auto=format&fit=crop&q=80&w=800"
  },
  { 
    slug: "wallet-development", 
    title: "Crypto Wallet Development", 
    desc: "Non-custodial and custodial secure crypto wallet infrastructures.",
    features: [
      { title: "Multi-Currency Support", desc: "Seamless integration with thousands of ERC-20, SPL, and native network tokens.", icon: "<Layers className='w-5 h-5' />" },
      { title: "Biometric Authentication", desc: "FaceID and fingerprint integration for maximum mobile wallet security.", icon: "<ShieldCheck className='w-5 h-5' />" },
      { title: "Hardware Wallet Sync", desc: "Native integrations for Ledger and Trezor cold storage devices.", icon: "<Server className='w-5 h-5' />" },
      { title: "In-App Swaps", desc: "Direct DEX integration allowing users to trade tokens within the wallet.", icon: "<Zap className='w-5 h-5' />" },
      { title: "Seed Phrase Generation", desc: "Cryptographically secure BIP-39 mnemonic phrase generation.", icon: "<Code2 className='w-5 h-5' />" },
      { title: "Cross-Platform Access", desc: "Synchronized wallet access via mobile app, browser extension, and web.", icon: "<Monitor className='w-5 h-5' />" }
    ],
    video: "/videos/app-dev.mp4",
    whyImg: "https://images.unsplash.com/photo-1621416894569-0f39ed31d247?auto=format&fit=crop&q=80&w=800"
  },
  { 
    slug: "exchange-software-development", 
    title: "Crypto Exchange Development", 
    desc: "High-liquidity, high-frequency trading platforms built for scale.",
    features: [
      { title: "High-Frequency Matching", desc: "Ultra-fast order matching engines capable of millions of transactions per second.", icon: "<Zap className='w-5 h-5' />" },
      { title: "Liquidity Integration", desc: "API connections to top-tier global exchanges for deep order book liquidity.", icon: "<Server className='w-5 h-5' />" },
      { title: "Advanced Trading UI", desc: "Professional charting tools, technical indicators, and customizable layouts.", icon: "<Monitor className='w-5 h-5' />" },
      { title: "Cold Storage Systems", desc: "Air-gapped security protocols ensuring the absolute safety of user funds.", icon: "<ShieldCheck className='w-5 h-5' />" },
      { title: "Fiat Gateways", desc: "Seamless credit card and bank transfer integration for crypto purchases.", icon: "<Code2 className='w-5 h-5' />" },
      { title: "Admin Architecture", desc: "Comprehensive KYC/AML management and fee structure administration.", icon: "<Layers className='w-5 h-5' />" }
    ],
    video: "/videos/software-dev.mp4",
    whyImg: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=800"
  },
  { 
    slug: "ai-chatbot-development", 
    title: "AI & Chatbot Development", 
    desc: "Intelligent conversational agents that automate customer success.",
    features: [
      { title: "NLP Integration", desc: "Natural Language Processing ensuring chatbots understand complex human intent.", icon: "<Code2 className='w-5 h-5' />" },
      { title: "Omnichannel Deployment", desc: "Deploy bots seamlessly across WhatsApp, Telegram, Website, and Messenger.", icon: "<Layers className='w-5 h-5' />" },
      { title: "Sentiment Analysis", desc: "Algorithms that detect user frustration and instantly route to human agents.", icon: "<Zap className='w-5 h-5' />" },
      { title: "CRM Syncing", desc: "Automatic logging of chat transcripts and leads into Salesforce or Hubspot.", icon: "<Server className='w-5 h-5' />" },
      { title: "Enterprise Security", desc: "Encrypted conversation storage complying with global privacy regulations.", icon: "<ShieldCheck className='w-5 h-5' />" },
      { title: "Voice Bot Capabilities", desc: "Speech-to-text integration for automated IVR and voice assistant skills.", icon: "<Monitor className='w-5 h-5' />" }
    ],
    video: "/videos/software-dev.mp4",
    whyImg: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&q=80&w=800"
  },
  { 
    slug: "logo-design", 
    title: "Logo & Brand Identity", 
    desc: "Memorable corporate branding designed for modern enterprises.",
    features: [
      { title: "Vector Master Files", desc: "Infinitely scalable AI and EPS files for print, web, and merchandise.", icon: "<Code2 className='w-5 h-5' />" },
      { title: "Brand Guidelines", desc: "Comprehensive rulebooks detailing typography, spacing, and color theory.", icon: "<Layers className='w-5 h-5' />" },
      { title: "Competitor Analysis", desc: "Strategic design positioning to ensure you stand out in saturated markets.", icon: "<Monitor className='w-5 h-5' />" },
      { title: "Versatile Formats", desc: "Delivering custom logomarks, wordmarks, and responsive icon variations.", icon: "<Server className='w-5 h-5' />" },
      { title: "Trademark Ready", desc: "Original, from-scratch vector artistry completely ready for legal trademarking.", icon: "<ShieldCheck className='w-5 h-5' />" },
      { title: "Rapid Iterations", desc: "Agile design sprints ensuring the final identity perfectly aligns with your vision.", icon: "<Zap className='w-5 h-5' />" }
    ],
    video: "/videos/digital-marketing.mp4",
    whyImg: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=800"
  },
];

const template = (data) => {
  const featureList = data.features.map(f => `{
            title: "${f.title}",
            description: "${f.desc}",
            icon: ${f.icon}
          }`).join(',\n          ');

  return `"use client";

import { PremiumSolutionDetail } from "@/components/PremiumSolutionDetail";
import { Monitor, Server, Code2, Layers, ShieldCheck, Zap } from "lucide-react";

export default function GeneratedPage() {
  return (
    <main>
      <PremiumSolutionDetail 
        title="${data.title}"
        heroHeading={
          <>${data.title} Solutions by <span className="text-[var(--primary)]">WebCodian</span> – Premium Enterprise Architecture</>
        }
        subtitle="Accelerate Your Business Growth with Custom Architecture"
        heroDescription={
          <>
            <p>${data.desc}</p>
            <p>WebCodian specializes in delivering end-to-end ${data.title.toLowerCase()} services that help startups, SMEs, and large organizations automate workflows, improve customer experiences, and scale operations efficiently.</p>
            <p>From initial consulting and strategic planning to deployment and post-launch support, our expert engineers create secure, scalable, and high-performance solutions tailored to your strict business goals.</p>
          </>
        }
        heroImage="${data.video}"
        whyHeading={
          <>Why Modern Businesses Need <span className="text-[var(--primary)]">${data.title}</span></>
        }
        whyDescription="Today's businesses require more than standard solutions. Organizations need intelligent, bespoke architecture that can scale globally:"
        whyImage="${data.whyImg}"
        features={[
          ${featureList}
        ]}
      />
    </main>
  );
}`;
};

pagesData.forEach(page => {
  const dir = path.join('d:/webcod/src/app', page.slug);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  const filePath = path.join(dir, 'page.tsx');
  fs.writeFileSync(filePath, template(page));
  console.log('Generated custom content for:', filePath);
});
