import { PremiumIndustryDetailPage, IndustryPageData } from "@/components/PremiumIndustryDetailPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Manufacturing Digital Solutions | WebCodian",
  description: "Industry 4.0 solutions, custom ERPs, and supply chain management platforms designed to optimize factory operations.",
};

const manufacturingData: IndustryPageData = {
  id: "manufacturing",
  title: "Manufacturing & Industry",
  eyebrow: "WebCodian • Industry Solutions",
  heroDescription: "Industry 4.0 solutions, custom ERPs, and supply chain management platforms designed to optimize factory operations.",
  heroImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
  introHeading: "Technology built around operational efficiency.",
  introDescription: "Modern manufacturing requires absolute precision. When production lines rely on manual data entry and disconnected supply chain systems, bottlenecks are inevitable. We build powerful Industry 4.0 platforms and ERP systems that automate inventory, track production in real-time, and eliminate operational waste.",
  challenges: [
    {
      id: "01",
      title: "Inventory Blind Spots",
      description: "Inaccurate raw material tracking leads to production delays, overstocking, and increased holding costs."
    },
    {
      id: "02",
      title: "Production Bottlenecks",
      description: "Without real-time line monitoring, identifying the root cause of production slowdowns takes days instead of minutes."
    },
    {
      id: "03",
      title: "Supply Chain Friction",
      description: "Managing vendors, purchase orders, and logistics across multiple disconnected platforms causes massive inefficiencies."
    },
    {
      id: "04",
      title: "Quality Control",
      description: "Relying on paper-based QA processes makes it difficult to track defect rates and maintain compliance."
    }
  ],
  solutions: [
    {
      icon: "Layers",
      title: "Manufacturing ERPs",
      description: "Comprehensive systems to manage everything from HR and finance to production and sales."
    },
    {
      icon: "Package",
      title: "Inventory Management",
      description: "Real-time stock tracking, automated reordering, and multi-warehouse management tools."
    },
    {
      icon: "Truck",
      title: "Supply Chain Portals",
      description: "Secure environments for vendor management, purchase order tracking, and logistics."
    },
    {
      icon: "Settings2",
      title: "Production Dashboards",
      description: "Real-time visualization of machine performance, output rates, and operator efficiency."
    }
  ],
  featuredVisual: {
    image: "https://images.unsplash.com/photo-1565153205792-5b9e248a30f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
    overlayText: "From raw materials to finished products."
  },
  whatWeCanBuild: [
    "Custom Manufacturing ERPs",
    "Supply Chain Management Software",
    "Inventory & Warehouse Systems",
    "Quality Assurance (QA) Portals",
    "IoT Data Visualization Dashboards",
    "B2B Wholesale Ordering Platforms"
  ],
  useCases: [
    {
      title: "Factory Floor",
      items: ["Real-time production tracking", "Machine maintenance logging", "Digital QA checklists", "Shift management"]
    },
    {
      title: "Logistics & Supply",
      items: ["Automated purchase orders", "Vendor performance tracking", "Barcode/RFID integration", "Shipment tracking"]
    }
  ],
  technologies: ["React", "Node.js", "Python", "AWS IoT", "PostgreSQL", "React Native", "Docker"]
};

export default function ManufacturingIndustryPage() {
  return <PremiumIndustryDetailPage data={manufacturingData} />;
}
