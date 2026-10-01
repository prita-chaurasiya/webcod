"use client";

import { PremiumSolutionDetail } from "@/components/PremiumSolutionDetail";
import { Monitor, Server, Code2, Layers, ShieldCheck, Zap } from "lucide-react";

export default function GeneratedPage() {
  return (
    <main>
      <PremiumSolutionDetail 
        title="Cloud Deployment & DevOps"
        heroHeading={
          <>Cloud Deployment & DevOps Solutions by <span className="text-[var(--primary)]">WebCodian</span> – Premium Enterprise Architecture</>
        }
        subtitle="Accelerate Your Business Growth with Custom Architecture"
        heroDescription={
          <>
            <p>Scale your infrastructure globally with automated CI/CD and secure cloud environments.</p>
            <p>WebCodian specializes in delivering end-to-end cloud deployment & devops services that help startups, SMEs, and large organizations automate workflows, improve customer experiences, and scale operations efficiently.</p>
            <p>From initial consulting and strategic planning to deployment and post-launch support, our expert engineers create secure, scalable, and high-performance solutions tailored to your strict business goals.</p>
          </>
        }
        heroImage="/videos/software-dev.mp4"
        whyHeading={
          <>Why Modern Businesses Need <span className="text-[var(--primary)]">Cloud Deployment & DevOps</span></>
        }
        whyDescription="Today's businesses require more than standard solutions. Organizations need intelligent, bespoke architecture that can scale globally:"
        whyImage="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800"
        features={[
          {
            title: "Automated CI/CD Pipelines",
            description: "Zero-downtime deployment pipelines for faster and safer feature releases.",
            icon: <Zap className='w-5 h-5' />
          },
          {
            title: "Cloud Architecture Design",
            description: "Scalable AWS, Azure, and GCP infrastructures optimized for heavy loads.",
            icon: <Server className='w-5 h-5' />
          },
          {
            title: "Infrastructure as Code",
            description: "Manage and provision data centers automatically using Terraform and Ansible.",
            icon: <Code2 className='w-5 h-5' />
          },
          {
            title: "Containerization",
            description: "Docker and Kubernetes orchestration for isolated, portable application deployment.",
            icon: <Layers className='w-5 h-5' />
          },
          {
            title: "DevSecOps",
            description: "Integrating automated security scanning directly into your build pipelines.",
            icon: <ShieldCheck className='w-5 h-5' />
          },
          {
            title: "24/7 Monitoring",
            description: "Proactive infrastructure monitoring using Prometheus, Grafana, and Datadog.",
            icon: <Monitor className='w-5 h-5' />
          }
        ]}
      />
    </main>
  );
}