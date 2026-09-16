import { PremiumIndustryDetailPage, IndustryPageData } from "@/components/PremiumIndustryDetailPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Security & Surveillance Digital Solutions | WebCodian",
  description: "Advanced digital monitoring platforms and access control software for physical and digital security agencies.",
};

const securityData: IndustryPageData = {
  id: "security",
  title: "Security & Surveillance",
  eyebrow: "WebCodian • Industry Solutions",
  heroDescription: "Advanced digital monitoring platforms and access control software for physical and digital security agencies.",
  heroImage: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
  introHeading: "Technology built around absolute control.",
  introDescription: "In the security sector, response time is everything. Relying on fragmented hardware systems and analog reporting leads to critical blind spots. We build unified security platforms that aggregate video feeds, automate access control, and provide real-time incident reporting in centralized, highly-secure command dashboards.",
  challenges: [
    {
      id: "01",
      title: "Fragmented Hardware",
      description: "Managing cameras, biometric scanners, and alarms from different manufacturers creates massive operational blind spots."
    },
    {
      id: "02",
      title: "Incident Response",
      description: "Without automated alerts and centralized monitoring, response times to critical breaches are significantly delayed."
    },
    {
      id: "03",
      title: "Guard Management",
      description: "Tracking the real-time location, patrols, and reporting of physical security personnel is inefficient without mobile tools."
    },
    {
      id: "04",
      title: "Data Vulnerability",
      description: "Security companies must protect their own surveillance data from cyber threats with robust encryption protocols."
    }
  ],
  solutions: [
    {
      icon: "Activity",
      title: "Central Command Dashboards",
      description: "Unified web interfaces that aggregate feeds and alerts from all connected security hardware."
    },
    {
      icon: "Fingerprint",
      title: "Access Control Software",
      description: "Digital systems to manage employee permissions, visitor logs, and biometric access points."
    },
    {
      icon: "ShieldAlert",
      title: "Incident Reporting Systems",
      description: "Mobile applications for on-the-ground guards to log incidents, upload photos, and request backup."
    },
    {
      icon: "Video",
      title: "VMS Integrations",
      description: "Connecting Video Management Systems with cloud storage and AI-driven analytics for threat detection."
    }
  ],
  featuredVisual: {
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
    overlayText: "From localized monitoring to centralized command."
  },
  whatWeCanBuild: [
    "Security Command Dashboards",
    "Guard Tracking Mobile Apps",
    "Visitor Management Systems",
    "Hardware API Integrations",
    "Automated Alerting Systems",
    "Encrypted Data Storage Solutions"
  ],
  useCases: [
    {
      title: "Command Center",
      items: ["Real-time threat monitoring", "Automated dispatching", "Hardware health checks", "System-wide lockdowns"]
    },
    {
      title: "Field Operations",
      items: ["GPS guard tracking", "Digital shift logs", "Mobile incident reporting", "QR-code checkpoint scanning"]
    }
  ],
  technologies: ["React", "Node.js", "WebSockets", "React Native", "AWS IoT", "Python", "AES-256"]
};

export default function SecurityIndustryPage() {
  return <PremiumIndustryDetailPage data={securityData} />;
}
