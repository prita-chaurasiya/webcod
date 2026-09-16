import { PremiumIndustryDetailPage, IndustryPageData } from "@/components/PremiumIndustryDetailPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Real Estate Digital Solutions | WebCodian",
  description: "Next-generation property technology connecting agents, buyers, and management through unified digital platforms.",
};

const realEstateData: IndustryPageData = {
  id: "real-estate",
  title: "Real Estate",
  eyebrow: "WebCodian • Industry Solutions",
  heroDescription: "Next-generation property technology connecting agents, buyers, and management through unified digital platforms.",
  heroImage: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
  introHeading: "Technology built around property workflows.",
  introDescription: "The real estate market moves fast. Success relies on matching the right property with the right buyer at exactly the right time. We build sophisticated PropTech solutions that streamline property listings, automate lead generation, and equip agents with powerful CRM tools to close deals faster.",
  challenges: [
    {
      id: "01",
      title: "Lead Leakage",
      description: "Without automated CRM pipelines, high-value property leads fall through the cracks or receive delayed responses."
    },
    {
      id: "02",
      title: "Data Fragmentation",
      description: "Agents waste time jumping between multiple systems for listings, client data, and contract management."
    },
    {
      id: "03",
      title: "Search Experience",
      description: "Poor property search interfaces and lacking map integrations frustrate potential buyers and renters."
    },
    {
      id: "04",
      title: "Agent Performance",
      description: "Brokerages struggle to track individual agent performance and property movement without unified dashboards."
    }
  ],
  solutions: [
    {
      icon: "Search",
      title: "Property Listing Portals",
      description: "High-performance property search engines with advanced filtering, map integration, and virtual tours."
    },
    {
      icon: "Users2",
      title: "Real Estate CRM",
      description: "Intelligent lead management systems that track client interactions, preferences, and property matches."
    },
    {
      icon: "LayoutDashboard",
      title: "Brokerage Management",
      description: "Centralized platforms to manage agents, commissions, property portfolios, and agency analytics."
    },
    {
      icon: "Key",
      title: "Tenant & Lease Portals",
      description: "Secure environments for property managers to handle leases, maintenance requests, and rent collection."
    }
  ],
  featuredVisual: {
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
    overlayText: "From property discovery to contract closing."
  },
  whatWeCanBuild: [
    "Custom Real Estate Portals (B2C)",
    "Brokerage CRM Systems",
    "Property Management ERP",
    "Real Estate Mobile Applications",
    "Map-Based Search Interfaces",
    "Agent Performance Dashboards"
  ],
  useCases: [
    {
      title: "Buyer Experience",
      items: ["Interactive map search", "3D virtual property tours", "Automated alert systems", "Mortgage calculators"]
    },
    {
      title: "Agency Operations",
      items: ["Automated lead distribution", "Contract management", "Commission tracking", "Listing syndication"]
    }
  ],
  technologies: ["React", "Next.js", "Laravel", "Mapbox", "PostGIS", "AWS", "React Native"]
};

export default function RealEstateIndustryPage() {
  return <PremiumIndustryDetailPage data={realEstateData} />;
}
