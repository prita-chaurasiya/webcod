"use client";

import { PremiumSolutionDetail } from "@/components/PremiumSolutionDetail";
import { Monitor, Server, Code2, Layers, ShieldCheck, Zap } from "lucide-react";

export default function GeneratedPage() {
  return (
    <main>
      <PremiumSolutionDetail 
        title="AI & Chatbot Development"
        heroHeading={
          <>AI & Chatbot Development Solutions by <span className="text-[var(--primary)]">WebCodian</span> – Premium Enterprise Architecture</>
        }
        subtitle="Accelerate Your Business Growth with Custom Architecture"
        heroDescription={
          <>
            <p>Intelligent conversational agents that automate customer success.</p>
            <p>WebCodian specializes in delivering end-to-end ai & chatbot development services that help startups, SMEs, and large organizations automate workflows, improve customer experiences, and scale operations efficiently.</p>
            <p>From initial consulting and strategic planning to deployment and post-launch support, our expert engineers create secure, scalable, and high-performance solutions tailored to your strict business goals.</p>
          </>
        }
        heroImage="/videos/software-dev.mp4"
        whyHeading={
          <>Why Modern Businesses Need <span className="text-[var(--primary)]">AI & Chatbot Development</span></>
        }
        whyDescription="Today's businesses require more than standard solutions. Organizations need intelligent, bespoke architecture that can scale globally:"
        whyImage="https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&q=80&w=800"
        features={[
          {
            title: "NLP Integration",
            description: "Natural Language Processing ensuring chatbots understand complex human intent.",
            icon: <Code2 className='w-5 h-5' />
          },
          {
            title: "Omnichannel Deployment",
            description: "Deploy bots seamlessly across WhatsApp, Telegram, Website, and Messenger.",
            icon: <Layers className='w-5 h-5' />
          },
          {
            title: "Sentiment Analysis",
            description: "Algorithms that detect user frustration and instantly route to human agents.",
            icon: <Zap className='w-5 h-5' />
          },
          {
            title: "CRM Syncing",
            description: "Automatic logging of chat transcripts and leads into Salesforce or Hubspot.",
            icon: <Server className='w-5 h-5' />
          },
          {
            title: "Enterprise Security",
            description: "Encrypted conversation storage complying with global privacy regulations.",
            icon: <ShieldCheck className='w-5 h-5' />
          },
          {
            title: "Voice Bot Capabilities",
            description: "Speech-to-text integration for automated IVR and voice assistant skills.",
            icon: <Monitor className='w-5 h-5' />
          }
        ]}
      />
    </main>
  );
}