import { PremiumIndustryDetailPage, IndustryPageData } from "@/components/PremiumIndustryDetailPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Healthcare Digital Solutions | WebCodian",
  description: "Digital solutions designed to simplify healthcare operations, improve patient experiences, and connect teams through intelligent technology.",
};

const healthcareData: IndustryPageData = {
  id: "healthcare",
  title: "Healthcare",
  eyebrow: "WebCodian • Industry Solutions",
  heroDescription: "Digital solutions designed to simplify healthcare operations, improve patient experiences, and connect teams through intelligent technology.",
  heroImage: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
  introHeading: "Technology built around the way healthcare works.",
  introDescription: "In the modern healthcare environment, disconnected systems lead to operational delays and fragmented patient care. We build comprehensive digital platforms that unify hospital management, empower patients through intuitive portals, and ensure strict compliance with medical data security standards. Our solutions bridge the gap between clinical excellence and digital efficiency.",
  challenges: [
    {
      id: "01",
      title: "Disconnected Workflows",
      description: "Siloed data between departments leads to inefficiencies and delays in critical patient care and administrative tasks."
    },
    {
      id: "02",
      title: "Patient Experience",
      description: "Patients struggle with complex booking systems, lack of communication, and difficulty accessing their own medical records."
    },
    {
      id: "03",
      title: "Data Security & Compliance",
      description: "Managing sensitive health data requires rigorous adherence to HIPAA and other international data protection regulations."
    },
    {
      id: "04",
      title: "Resource Management",
      description: "Difficulty in tracking hospital beds, inventory, and staff availability in real-time limits operational capacity."
    }
  ],
  solutions: [
    {
      icon: "Building2",
      title: "Hospital Management Systems (HMS)",
      description: "End-to-end platforms for managing inpatient, outpatient, billing, and clinical workflows."
    },
    {
      icon: "Users",
      title: "Patient Portals",
      description: "Secure, intuitive portals for patients to book appointments, view results, and communicate with doctors."
    },
    {
      icon: "Smartphone",
      title: "Telemedicine Solutions",
      description: "Integrated video consultation platforms with secure file sharing and e-prescription capabilities."
    },
    {
      icon: "Activity",
      title: "Healthcare CRM",
      description: "Advanced relationship management tools to track patient journeys and improve engagement."
    }
  ],
  featuredVisual: {
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
    overlayText: "From patient experience to clinical efficiency."
  },
  whatWeCanBuild: [
    "Hospital Management Systems (HMS)",
    "Custom Telemedicine Apps",
    "Electronic Health Records (EHR)",
    "Pharmacy Management Systems",
    "Medical Billing Software",
    "Healthcare Analytics Dashboards"
  ],
  useCases: [
    {
      title: "Patient Journey",
      items: ["Online booking & scheduling", "Virtual consultations", "Secure message portals", "Digital prescriptions"]
    },
    {
      title: "Clinical Operations",
      items: ["Doctor & staff scheduling", "Bed management", "Lab integration", "Patient history tracking"]
    }
  ],
  technologies: ["React", "Node.js", "Python", "React Native", "MongoDB", "AWS", "WebRTC"]
};

export default function HealthcareIndustryPage() {
  return <PremiumIndustryDetailPage data={healthcareData} />;
}
