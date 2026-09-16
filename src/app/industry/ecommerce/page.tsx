import { PremiumIndustryDetailPage, IndustryPageData } from "@/components/PremiumIndustryDetailPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "E-Commerce Digital Solutions | WebCodian",
  description: "High-performance digital storefronts and unified retail management systems built to drive global sales.",
};

const ecommerceData: IndustryPageData = {
  id: "ecommerce",
  title: "E-Commerce & Retail",
  eyebrow: "WebCodian • Industry Solutions",
  heroDescription: "High-performance digital storefronts and unified retail management systems built to drive global sales.",
  heroImage: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
  introHeading: "Technology built around the modern shopper.",
  introDescription: "In the hyper-competitive e-commerce landscape, a slow or confusing checkout can cost millions in abandoned carts. We engineer high-performance, scalable commerce architectures that combine beautiful consumer-facing storefronts with powerful backend inventory and order management systems.",
  challenges: [
    {
      id: "01",
      title: "Platform Scalability",
      description: "Traffic spikes during holiday sales or product launches cause downtime and lost revenue on legacy platforms."
    },
    {
      id: "02",
      title: "Omnichannel Friction",
      description: "Managing inventory, pricing, and orders across web, mobile, and physical stores is highly error-prone without centralization."
    },
    {
      id: "03",
      title: "Cart Abandonment",
      description: "Complex checkout flows and limited payment options drastically reduce final conversion rates."
    },
    {
      id: "04",
      title: "Data Disconnect",
      description: "Failing to capture and analyze customer shopping behavior limits personalization and remarketing efforts."
    }
  ],
  solutions: [
    {
      icon: "ShoppingCart",
      title: "Custom Storefronts",
      description: "Lightning-fast, mobile-optimized digital storefronts designed for maximum conversion."
    },
    {
      icon: "Box",
      title: "Inventory & Order Management",
      description: "Centralized hubs to track stock levels, manage warehouses, and automate fulfillment."
    },
    {
      icon: "CreditCard",
      title: "Payment Integrations",
      description: "Secure integration with global payment gateways, multi-currency support, and financing options."
    },
    {
      icon: "BarChart3",
      title: "Commerce CRM & Analytics",
      description: "Deep insights into customer behavior, predictive analytics, and automated marketing tools."
    }
  ],
  featuredVisual: {
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
    overlayText: "From browsing to checkout to fulfillment."
  },
  whatWeCanBuild: [
    "Custom E-Commerce Web Platforms",
    "Native Mobile Shopping Apps",
    "Multi-Vendor Marketplaces",
    "B2B Wholesale Portals",
    "Inventory Management ERPs",
    "Headless Commerce Architectures"
  ],
  useCases: [
    {
      title: "Customer Experience",
      items: ["Personalized product recommendations", "One-click checkout", "Real-time order tracking", "Loyalty programs"]
    },
    {
      title: "Retail Operations",
      items: ["Multi-warehouse inventory", "Automated reordering", "Vendor management", "Financial reporting"]
    }
  ],
  technologies: ["Next.js", "Shopify Plus", "Magento", "Node.js", "React Native", "Stripe", "Redis"]
};

export default function EcommerceIndustryPage() {
  return <PremiumIndustryDetailPage data={ecommerceData} />;
}
