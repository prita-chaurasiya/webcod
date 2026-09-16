import { PremiumServiceDetail } from "@/components/PremiumServiceDetail";
import { Monitor, Server, Code2, Layers, Globe } from "lucide-react";

export default function SoftwareDevelopmentPage() {
  return (
    <main>
      <PremiumServiceDetail 
        title="Software Development"
        badgeText="ENTERPRISE GRADE"
        description="End-to-end software solutions tailored to your business processes. We build robust architectures that grow with you."
        heroImage="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1000"
        overviewTitle="Empowering Businesses with Custom Software"
        overviewDescription="Off-the-shelf software doesn't always fit. Our custom software development services deliver exactly what your business needs to automate workflows, manage data, and increase overall efficiency."
        features={[
          {
            title: "Custom CRM & ERP",
            description: "Bespoke internal systems designed specifically for your organizational structure and workflow.",
            icon: <Layers className="w-5 h-5" />
          },
          {
            title: "SaaS Development",
            description: "Scalable Software-as-a-Service platforms built for high concurrency and multi-tenancy.",
            icon: <Globe className="w-5 h-5" />
          },
          {
            title: "API Integration",
            description: "Seamlessly connect your disparate systems with custom API development and third-party integrations.",
            icon: <Server className="w-5 h-5" />
          },
          {
            title: "Legacy Modernization",
            description: "Upgrade your outdated systems to modern cloud architectures without losing critical data.",
            icon: <Code2 className="w-5 h-5" />
          }
        ]}
        technologies={[
          { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
          { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
          { name: "C#", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" },
          { name: ".NET", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg" },
          { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
          { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" }
        ]}
        faqs={[
          { q: "Do you provide source code ownership?", a: "Yes, upon project completion and final payment, you will have 100% ownership of the source code and IP." },
          { q: "How do you ensure software security?", a: "We follow industry best practices, including regular vulnerability assessments, encrypted data transmission, and secure authentication protocols." },
          { q: "Can you maintain the software after launch?", a: "Yes, we offer flexible Service Level Agreements (SLAs) to provide ongoing maintenance, updates, and feature additions." }
        ]}
      />
    </main>
  );
}
