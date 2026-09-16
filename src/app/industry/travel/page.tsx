import { PremiumIndustryDetailPage, IndustryPageData } from "@/components/PremiumIndustryDetailPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tour & Travel Digital Solutions | WebCodian",
  description: "Dynamic booking platforms and travel management systems designed to simplify global adventures.",
};

const travelData: IndustryPageData = {
  id: "travel",
  title: "Tour & Travel",
  eyebrow: "WebCodian • Industry Solutions",
  heroDescription: "Dynamic booking platforms and travel management systems designed to simplify global adventures.",
  heroImage: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
  introHeading: "Technology built around the modern traveler.",
  introDescription: "In the travel industry, user experience is everything. Customers expect seamless booking, transparent pricing, and instant confirmations. We build comprehensive travel technology that connects global inventory, automates reservations, and provides travelers with beautiful, frictionless booking experiences.",
  challenges: [
    {
      id: "01",
      title: "Complex Integrations",
      description: "Aggregating flights, hotels, and activities from multiple third-party APIs (GDS) requires robust technical architecture."
    },
    {
      id: "02",
      title: "Booking Friction",
      description: "Complicated checkout flows and limited payment options lead to high abandonment rates for expensive travel packages."
    },
    {
      id: "03",
      title: "Inventory Management",
      description: "Agencies struggle to manage custom tour packages, seat availability, and dynamic pricing without centralized systems."
    },
    {
      id: "04",
      title: "Post-Booking Support",
      description: "Handling cancellations, itinerary updates, and customer support requires intelligent automation to reduce overhead."
    }
  ],
  solutions: [
    {
      icon: "Globe2",
      title: "Travel Booking Portals",
      description: "B2C and B2B platforms for booking flights, hotels, cars, and custom holiday packages."
    },
    {
      icon: "Calendar",
      title: "Tour Management Systems",
      description: "Backend tools to create itineraries, manage group allocations, and track operational costs."
    },
    {
      icon: "CreditCard",
      title: "Payment & API Integration",
      description: "Seamless connection with global GDS providers (Amadeus, Sabre) and multi-currency payment gateways."
    },
    {
      icon: "Ticket",
      title: "Travel Agency CRM",
      description: "Customer relationship tools designed specifically to track traveler preferences and booking history."
    }
  ],
  featuredVisual: {
    image: "https://images.unsplash.com/photo-1488085061387-422e29b40080?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
    overlayText: "From itinerary planning to global booking."
  },
  whatWeCanBuild: [
    "B2B/B2C Travel Booking Engines",
    "Tour Operator Software",
    "Hotel Booking Systems",
    "Travel Agency CRM",
    "Flight & Hotel API Integrations",
    "Mobile Travel Companion Apps"
  ],
  useCases: [
    {
      title: "Traveler Experience",
      items: ["Dynamic package builder", "Mobile itineraries", "Instant booking confirmation", "Multi-currency checkout"]
    },
    {
      title: "Agency Operations",
      items: ["GDS integration", "Markup & commission management", "Supplier management", "Booking analytics"]
    }
  ],
  technologies: ["React", "Node.js", "Python", "Redis", "Amadeus API", "Sabre API", "AWS"]
};

export default function TravelIndustryPage() {
  return <PremiumIndustryDetailPage data={travelData} />;
}
