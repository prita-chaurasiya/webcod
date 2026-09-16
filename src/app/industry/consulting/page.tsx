import { PremiumIndustryDetailPage, IndustryPageData } from "@/components/PremiumIndustryDetailPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Consulting & Enterprise Digital Solutions | WebCodian",
  description: "Digital transformation tools and data analytics platforms designed to scale professional services and enterprise consulting.",
};

const consultingData: IndustryPageData = {
  id: "consulting",
  title: "Consulting & Enterprise",
  eyebrow: "WebCodian • Industry Solutions",
  heroDescription: "Digital transformation tools and data analytics platforms designed to scale professional services and enterprise consulting.",
  heroImage: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
  introHeading: "Technology built around strategic growth.",
  introDescription: "In the professional services sector, data is the ultimate currency. Firms must quickly analyze complex information, collaborate securely with global clients, and deliver actionable insights. We build secure, high-performance enterprise tools that automate workflows, visualize data, and elevate the consulting experience.",
  challenges: [
    {
      id: "01",
      title: "Data Silos",
      description: "Critical client data and market research are scattered across different platforms, making holistic analysis nearly impossible."
    },
    {
      id: "02",
      title: "Client Collaboration",
      description: "Relying on email for sensitive document exchange and project tracking creates security risks and communication gaps."
    },
    {
      id: "03",
      title: "Workflow Bottlenecks",
      description: "Manual reporting, onboarding, and compliance checks consume valuable billable hours."
    },
    {
      id: "04",
      title: "Knowledge Management",
      description: "Consultancies struggle to centralize institutional knowledge and past project assets for future reuse."
    }
  ],
  solutions: [
    {
      icon: "Network",
      title: "Client Portals",
      description: "Secure, branded environments for document sharing, project tracking, and direct client communication."
    },
    {
      icon: "BarChart4",
      title: "Analytics Dashboards",
      description: "Custom data visualization tools that aggregate metrics from multiple sources into actionable insights."
    },
    {
      icon: "Workflow",
      title: "Workflow Automation",
      description: "Intelligent systems that automate onboarding, compliance checks, and standard reporting procedures."
    },
    {
      icon: "FileSpreadsheet",
      title: "Knowledge Base Systems",
      description: "Centralized, AI-powered repositories for storing and retrieving institutional knowledge and research."
    }
  ],
  featuredVisual: {
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
    overlayText: "From raw data to actionable enterprise strategy."
  },
  whatWeCanBuild: [
    "Enterprise Client Portals",
    "Business Intelligence (BI) Dashboards",
    "Workflow Automation Software",
    "Secure Document Management Systems",
    "Internal HR & Resource Planners",
    "Custom Analytics APIs"
  ],
  useCases: [
    {
      title: "Client Engagement",
      items: ["Secure file exchange", "Real-time project tracking", "Interactive data presentations", "Automated status reports"]
    },
    {
      title: "Internal Operations",
      items: ["Resource allocation", "Time & billing tracking", "Compliance management", "Knowledge retrieval"]
    }
  ],
  technologies: ["React", "Python", "Node.js", "Tableau Integration", "AWS", "PostgreSQL", "PowerBI API"]
};

export default function ConsultingIndustryPage() {
  return <PremiumIndustryDetailPage data={consultingData} />;
}
