import { PremiumIndustryDetailPage, IndustryPageData } from "@/components/PremiumIndustryDetailPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Restaurant & Hospitality Digital Solutions | WebCodian",
  description: "Next-generation Point of Sale (POS) systems and digital ordering platforms designed for the modern hospitality industry.",
};

const restaurantData: IndustryPageData = {
  id: "restaurant",
  title: "Restaurant & Hospitality",
  eyebrow: "WebCodian • Industry Solutions",
  heroDescription: "Next-generation Point of Sale (POS) systems and digital ordering platforms designed for the modern hospitality industry.",
  heroImage: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
  introHeading: "Technology built around the dining experience.",
  introDescription: "The hospitality industry is driven by speed, accuracy, and customer satisfaction. Relying on outdated POS systems and manual ticketing slows down service and hurts your bottom line. We build fully integrated digital ecosystems—from sleek consumer ordering apps to powerful kitchen display systems—that streamline your entire operation.",
  challenges: [
    {
      id: "01",
      title: "Fragmented Operations",
      description: "Managing dine-in, takeout, and third-party delivery apps on separate devices creates chaos in the kitchen."
    },
    {
      id: "02",
      title: "Order Accuracy",
      description: "Manual ticket writing leads to miscommunications between front-of-house and back-of-house staff."
    },
    {
      id: "03",
      title: "Inventory Waste",
      description: "Without automated recipe costing and real-time inventory tracking, restaurants suffer from massive food waste."
    },
    {
      id: "04",
      title: "Customer Loyalty",
      description: "Failing to capture diner data means restaurants miss out on personalized marketing and repeat business."
    }
  ],
  solutions: [
    {
      icon: "Calculator",
      title: "Cloud POS Systems",
      description: "Modern Point of Sale systems that unify orders, payments, and staff management in one interface."
    },
    {
      icon: "Smartphone",
      title: "Digital Ordering Apps",
      description: "Custom branded mobile applications for seamless online ordering, delivery, and loyalty rewards."
    },
    {
      icon: "ChefHat",
      title: "Kitchen Display Systems (KDS)",
      description: "Digital screens that replace paper tickets, routing orders directly to the correct prep stations."
    },
    {
      icon: "Store",
      title: "Inventory Management",
      description: "Backend tools for automated stock tracking, recipe costing, and vendor ordering."
    }
  ],
  featuredVisual: {
    image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
    overlayText: "From the customer's phone to the kitchen line."
  },
  whatWeCanBuild: [
    "Custom Restaurant POS Systems",
    "Branded Mobile Ordering Apps",
    "QR Code Table Menus & Ordering",
    "Kitchen Display Systems (KDS)",
    "Restaurant Inventory ERPs",
    "Franchise Management Dashboards"
  ],
  useCases: [
    {
      title: "Front of House",
      items: ["Tableside ordering tablets", "Contactless QR payments", "Waitlist management", "Loyalty program integration"]
    },
    {
      title: "Back of House",
      items: ["Digital ticket routing", "Prep time tracking", "Recipe cost analysis", "Automated stock alerts"]
    }
  ],
  technologies: ["React", "React Native", "Node.js", "Firebase", "Stripe Terminal", "PostgreSQL", "AWS"]
};

export default function RestaurantIndustryPage() {
  return <PremiumIndustryDetailPage data={restaurantData} />;
}
