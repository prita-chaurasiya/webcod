import { PremiumIndustryDetailPage, IndustryPageData } from "@/components/PremiumIndustryDetailPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "NGO & Non-Profit Digital Solutions | WebCodian",
  description: "Empowering non-profits with digital platforms to drive donations, manage volunteers, and maximize global impact.",
};

const ngoData: IndustryPageData = {
  id: "ngo",
  title: "NGO & Non-Profit",
  eyebrow: "WebCodian • Industry Solutions",
  heroDescription: "Empowering non-profits with digital platforms to drive donations, manage volunteers, and maximize global impact.",
  heroImage: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
  introHeading: "Technology built around social impact.",
  introDescription: "Non-profits and NGOs operate in a challenging environment where every dollar matters. Traditional manual processes drain resources that should be spent on the mission. We build digital platforms that automate fundraising, streamline volunteer coordination, and provide absolute transparency to donors.",
  challenges: [
    {
      id: "01",
      title: "Donation Friction",
      description: "Complex donation processes and limited payment options reduce campaign conversion rates."
    },
    {
      id: "02",
      title: "Donor Retention",
      description: "Without proper CRM systems, organizations struggle to maintain relationships and communicate impact to previous donors."
    },
    {
      id: "03",
      title: "Volunteer Management",
      description: "Coordinating schedules, tasks, and communication across a decentralized volunteer network is highly inefficient."
    },
    {
      id: "04",
      title: "Financial Transparency",
      description: "Tracking funds from donation to execution requires robust accounting and reporting tools to maintain trust."
    }
  ],
  solutions: [
    {
      icon: "Wallet",
      title: "Fundraising Platforms",
      description: "Secure, optimized donation portals supporting recurring payments and multi-currency contributions."
    },
    {
      icon: "Users",
      title: "Donor Management CRM",
      description: "Tools to track donor history, automate communication, and build long-term engagement."
    },
    {
      icon: "Globe",
      title: "Campaign Management",
      description: "Digital tools to launch, track, and analyze the performance of advocacy and fundraising campaigns."
    },
    {
      icon: "LineChart",
      title: "Impact Reporting",
      description: "Interactive dashboards that visualize fund allocation and social impact for stakeholders."
    }
  ],
  featuredVisual: {
    image: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
    overlayText: "From global campaigns to local impact."
  },
  whatWeCanBuild: [
    "Custom Donation Portals",
    "Non-Profit CRM Systems",
    "Volunteer Management Portals",
    "Crowdfunding Platforms",
    "Advocacy & Campaign Websites",
    "Financial Transparency Dashboards"
  ],
  useCases: [
    {
      title: "Fundraising",
      items: ["One-time & recurring donations", "Peer-to-peer fundraising", "Event ticketing", "Tax receipt automation"]
    },
    {
      title: "Operations",
      items: ["Volunteer scheduling", "Grant management", "Expense tracking", "Beneficiary database"]
    }
  ],
  technologies: ["React", "Laravel", "Stripe", "PayPal", "Python", "Node.js", "PostgreSQL"]
};

export default function NgoIndustryPage() {
  return <PremiumIndustryDetailPage data={ngoData} />;
}
