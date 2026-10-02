import { IndustryPageTemplate, IndustryPageData } from "@/components/IndustryPageTemplate";

const data: IndustryPageData = {
  heroTitle: "Smart Digital Solutions for Real Estate & PropTech",
  heroSubtitle: "Transform property management, lead generation, and buyer experiences with custom CRM platforms, AI property search engines, virtual tours, and intelligent booking systems built for the modern real estate enterprise.",
  heroImg: "https://images.unsplash.com/photo-1542744094-24638eff58bb?q=80&w=2000&auto=format&fit=crop",
  breadcrumbLabel: "Real Estate",
  breadcrumbHref: "/industry/real-estate",

  overviewHeading: "Redefining Real Estate Through Digital Innovation",
  overviewText: "The real estate industry is experiencing a seismic digital shift. Buyers now begin 97% of property searches online, and agents who leverage digital tools close deals 3x faster than those relying on traditional methods. WebCodian engineers comprehensive PropTech solutions — from AI-powered property portals and CRM systems to virtual reality tours and automated lead management — that help developers, agencies, and property managers generate more qualified leads, close deals faster, and deliver exceptional buyer experiences.",
  overviewImg: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2000&auto=format&fit=crop",
  overviewBullets: [
    "Custom property portals with AI-powered search and recommendations",
    "Real Estate CRM with automated lead nurturing and pipeline tracking",
    "3D virtual tours and augmented reality property visualizations",
    "Automated booking and site visit scheduling systems",
    "Investment analytics dashboards with ROI and rental yield modeling",
  ],

  challenges: [
    { title: "Low Lead Conversion Rates", desc: "Massive marketing spend generating high inquiry volumes but poor conversion due to slow follow-up and unqualified lead management." },
    { title: "Manual Lead Management", desc: "Sales teams managing thousands of leads across spreadsheets, WhatsApp, and fragmented CRMs, causing leads to go cold." },
    { title: "Poor Online Property Discovery", desc: "Generic listing portals with poor search functionality failing to match buyers with relevant properties based on their specific needs." },
    { title: "Documentation & Legal Delays", desc: "Manual property documentation, agreement generation, and registration processes creating weeks of unnecessary delays in deal closure." },
    { title: "Tenant & Property Management", desc: "Landlords and property managers struggling to track rent, maintenance requests, and tenancy agreements across multiple properties." },
    { title: "Offline-Only Customer Experience", desc: "No digital tools to allow buyers to explore properties, shortlist units, and pay booking amounts without physically visiting the site." },
  ],

  transformationPoints: [
    { title: "AI Property Matching", desc: "Machine learning algorithms that analyze buyer behavior, budget, and preferences to surface the most relevant properties automatically." },
    { title: "Virtual Reality Property Tours", desc: "Immersive 360° virtual tours and AR floor plan visualizations that allow buyers to experience properties from anywhere in the world." },
    { title: "Automated Lead Nurturing", desc: "CRM automation that sends personalized property recommendations, follow-up sequences, and appointment reminders without manual intervention." },
    { title: "Online Booking & Payment", desc: "Digital booking portals allowing buyers to reserve units, pay booking amounts, and sign agreements completely online." },
    { title: "Smart Contract Integration", desc: "Blockchain-based smart contracts that automate property transfer, escrow management, and title verification for transparent transactions." },
    { title: "Rental Yield Analytics", desc: "Investment dashboards that calculate rental yields, capital appreciation, and ROI comparisons to help buyers make data-driven decisions." },
  ],

  solutions: [
    { title: "Custom Property Portal Development", desc: "Building scalable real estate portals with advanced AI-powered search, map-based listings, virtual tours, and buyer dashboards." },
    { title: "Real Estate CRM Engineering", desc: "A purpose-built CRM for real estate with automated lead scoring, pipeline management, and multi-channel follow-up sequences." },
    { title: "Virtual Tour & AR Platform", desc: "Developing immersive 3D virtual tours with WebGL and AR-powered floor plan visualizations for off-plan property sales." },
    { title: "Property Management System", desc: "Comprehensive PMS for landlords and property managers covering tenant management, rent tracking, maintenance, and accounting." },
  ],

  services: [
    { icon: "🏢", title: "Property Portal Development", desc: "Custom listing portals with AI search, map view, virtual tours, and buyer/seller dashboards." },
    { icon: "📋", title: "Real Estate CRM", desc: "Lead management, pipeline tracking, automated follow-ups, and team performance analytics." },
    { icon: "🥽", title: "Virtual Tours & 3D Visualization", desc: "360° virtual property tours, AR floor plans, and digital twin experiences for off-plan sales." },
    { icon: "📅", title: "Site Visit & Booking System", desc: "Online appointment booking, site visit scheduling, token amount payment, and confirmation workflows." },
    { icon: "🔑", title: "Property Management System", desc: "Tenant onboarding, rent collection, maintenance ticketing, and lease management for landlords." },
    { icon: "💰", title: "Investment Analytics Dashboard", desc: "ROI calculator, rental yield modeling, area appreciation trends, and portfolio performance dashboards." },
    { icon: "📱", title: "Real Estate Mobile App", desc: "iOS and Android property search apps with saved searches, alerts, chatbot, and EMI calculators." },
    { icon: "🤖", title: "AI Lead Qualification Bot", desc: "Chatbot that qualifies inbound leads, collects requirements, and schedules site visits automatically." },
    { icon: "📜", title: "Digital Agreement & E-Sign", desc: "Paperless sale agreement generation with Aadhaar eSign, digital stamps, and automated registration workflows." },
  ],

  aiOpportunities: [
    { title: "AI Property Valuation", desc: "ML models that estimate property fair market value based on location, amenities, comparable sales, and market trends." },
    { title: "Lead Scoring & Prioritization", desc: "Predictive models that score and prioritize leads based on their likelihood to convert, allowing sales teams to focus on hot prospects." },
    { title: "Chatbot Property Assistant", desc: "24/7 AI chatbot that qualifies leads, answers property queries, schedules site visits, and sends relevant listings via WhatsApp." },
    { title: "Price Trend Prediction", desc: "LSTM-based time series models predicting property price movements in specific micro-markets for investor decision support." },
    { title: "Document Intelligence", desc: "AI that automatically extracts key terms from sale agreements, title deeds, and legal documents to flag discrepancies and risks." },
  ],

  techStack: ["React.js", "Next.js", "Node.js", "Python", "Django", "PostgreSQL", "MongoDB", "AWS", "Google Maps API", "Three.js", "WebGL", "Unity (VR)", "TensorFlow", "Twilio", "Razorpay", "Elasticsearch", "Flutter"],

  devProcess: [
    { step: "01", title: "Market & User Research", desc: "Understanding your buyer personas, agent workflows, and competitive portal landscape to define the right feature set." },
    { step: "02", title: "UX for High-Value Decisions", desc: "Designing property search experiences optimized for trust and conversion — the UX for a ₹50L decision is very different from a ₹500 e-commerce purchase." },
    { step: "03", title: "Platform & AI Build", desc: "Agile development with parallel tracks for the core portal, CRM, AI matching engine, and virtual tour integration." },
    { step: "04", title: "Launch & Lead Optimization", desc: "Phased go-live with A/B testing of listing layouts, CTA placements, and AI recommendation strategies for continuous improvement." },
  ],

  benefits: [
    { title: "3x Faster Lead-to-Closure", desc: "Automated nurturing and AI qualification eliminate manual delays, reducing average deal cycle time from months to weeks." },
    { title: "60% Reduction in Site Visit Costs", desc: "Virtual tours pre-qualify serious buyers, dramatically reducing the number of physical site visits required per sale." },
    { title: "Higher Quality Leads", desc: "AI matching and targeted chatbot qualification deliver higher-intent leads to your sales team, improving conversion rates by 40–55%." },
    { title: "Complete Pipeline Visibility", desc: "CRM dashboards give sales managers real-time visibility into every deal's stage, value, and probability of closure." },
    { title: "Global Buyer Reach", desc: "Virtual tours and digital booking systems allow you to sell off-plan units to NRI buyers in Dubai, London, and Singapore without a single site visit." },
    { title: "Reduced Documentation Time", desc: "Digital agreement workflows reduce sale agreement execution time from 2 weeks to 48 hours." },
  ],

  useCases: [
    { title: "Premium Residential Developer Portal", img: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=800&auto=format&fit=crop", desc: "End-to-end digital sales platform for a 2,000-unit luxury residential project, with 3D virtual tours, online booking, and CRM integration." },
    { title: "Commercial Property Management", img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop", desc: "Property management system for a 50-building commercial portfolio, automating rent collection, maintenance, and tenant communications." },
    { title: "Real Estate Investment Portal", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop", desc: "AI-powered investment advisory portal helping 25,000+ investors discover high-yield properties based on their financial goals." },
  ],

  caseStudy: {
    client: "Luxury Real Estate Developer — Western India",
    industry: "Real Estate · Premium Residential",
    challenge: "A top-tier developer launching a ₹500 crore luxury residential project had no digital presence, was relying entirely on broker networks for sales, and had no way to showcase the off-plan project to NRI buyers in the Middle East and UK.",
    solution: "WebCodian built a premium project microsite with immersive 3D virtual tours, floor plan configurator, AI chatbot, and a fully digital booking engine accepting international payments in USD, AED, and GBP.",
    result: "₹87 crore in NRI bookings within 90 days of launch, 68% of all buyer inquiries converted from virtual tour interactions, and broker dependency reduced from 90% to 45% of total sales.",
  },

  stats: [
    { metric: "₹87Cr", label: "NRI Bookings in 90 Days", desc: "Via digital-only sales" },
    { metric: "68%", label: "Inquiries from Virtual Tours", desc: "Reducing physical site visits" },
    { metric: "3x", label: "Faster Deal Closure", desc: "With AI nurturing & digital docs" },
    { metric: "55%", label: "Lead Conversion Improvement", desc: "Through AI qualification" },
  ],

  securityTitle: "Secure Transactions & Legal Compliance",
  securityDesc: "Real estate transactions involve large sums of money and highly sensitive personal and legal documentation. We engineer payment systems with bank-grade security, legal document management with Aadhaar-based eSign, and audit trails for every critical transaction.",
  securityPoints: [
    "PCI-DSS Compliant International Payment Processing",
    "Aadhaar eSign & Digital Stamp Paper Integration",
    "End-to-End Encryption for All Sensitive Documents",
    "RERA Compliance Features for Developer Portals",
    "Immutable Audit Trails for All Transactions",
    "AML (Anti-Money Laundering) Transaction Monitoring",
  ],
  securityImg: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2000&auto=format&fit=crop",

  faqs: [
    { q: "Can you build a portal like MagicBricks or 99acres?", a: "Yes. We build custom property listing portals with advanced AI-powered search, agent/developer dashboards, and monetization features. The advantage over generic portals is complete control over your brand, data, and feature roadmap." },
    { q: "How realistic are the 3D virtual tours you create?", a: "Our virtual tours are created using a combination of Matterport 360° photography for existing properties and fully rendered 3D visualization using Unity/Unreal Engine for off-plan projects." },
    { q: "Do you support RERA compliance features?", a: "Yes. We build RERA compliance dashboards for developers, with accurate project status updates, payment schedule transparency, and complaint management features." },
    { q: "Can the CRM handle high-volume inquiry management?", a: "Our CRM architecture is designed to handle 50,000+ leads simultaneously with automated scoring, assignment, and nurturing workflows." },
  ],

  relatedIndustries: [
    { label: "E-Commerce", href: "/industry/e-commerce" },
    { label: "Consulting", href: "/industry/consulting" },
    { label: "Tour & Travel", href: "/industry/tour-travel" },
    { label: "Manufacturing", href: "/industry/manufacturing" },
  ],

  ctaHeading: "Ready to Build Your PropTech Platform?",
  ctaDesc: "Partner with WebCodian to create a digital real estate ecosystem that sells faster, reaches global buyers, and positions you as the most trusted developer in your market.",
};

export default function Page() {
  return <IndustryPageTemplate data={data} />;
}
