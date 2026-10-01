import { IndustryPageTemplate, IndustryPageData } from "@/components/IndustryPageTemplate";

const data: IndustryPageData = {
  heroTitle: "Smart Restaurant & Hospitality Technology Solutions",
  heroSubtitle: "Transform your restaurant operations with custom POS systems, QR ordering platforms, kitchen display systems, table reservation engines, and AI-powered loyalty programs built for the modern F&B enterprise.",
  heroImg: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2000&auto=format&fit=crop",
  breadcrumbLabel: "Restaurant",
  breadcrumbHref: "/industry/restaurant",

  overviewHeading: "Engineering Exceptional Dining Experiences Through Technology",
  overviewText: "India's food service industry is projected to reach ₹7.76 lakh crore by 2028, driven by rising disposable incomes, urbanization, and the explosion of food delivery platforms. In this intensely competitive landscape, restaurants that leverage smart technology to improve operational efficiency, reduce food waste, enhance guest experiences, and drive repeat visits will capture disproportionate market share. WebCodian engineers comprehensive restaurant technology ecosystems — from custom POS and QR ordering to kitchen automation, inventory intelligence, and AI-powered loyalty programs — tailored for every F&B format, from standalone restaurants to multi-city chains.",
  overviewImg: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2000&auto=format&fit=crop",
  overviewBullets: [
    "Custom POS systems with cloud-based multi-outlet management",
    "QR code-based contactless ordering and payment systems",
    "Kitchen Display Systems (KDS) for streamlined order management",
    "Online table reservation and waitlist management platforms",
    "AI-powered inventory management and waste reduction systems",
  ],

  challenges: [
    { title: "High Food & Beverage Cost", desc: "Poor inventory management, over-ordering, and food waste consuming 30–40% of revenue, severely compressing restaurant profit margins." },
    { title: "Order Management Chaos", desc: "Dine-in, delivery (Zomato, Swiggy), takeaway, and QR orders all flowing through separate systems creating kitchen confusion and missed tickets." },
    { title: "Aggregator Commission Dependency", desc: "Paying 20–30% commission to Zomato and Swiggy on every online order, making delivery-channel profitability near impossible." },
    { title: "Staff Turnover & Training Costs", desc: "Restaurant industry's notoriously high staff turnover making it expensive and time-consuming to train new staff on complex POS systems." },
    { title: "Customer Loyalty & Retention", desc: "Generic punch-card loyalty programs failing to create meaningful repeat visit incentives or personalized customer relationships." },
    { title: "Menu Pricing & Profitability Blindness", desc: "Restaurant owners unable to identify which menu items are profitable, which are loss-making, and how demand varies across day-parts and seasons." },
  ],

  transformationPoints: [
    { title: "Unified Omnichannel Order Management", desc: "Single kitchen display system aggregating dine-in, QR, delivery, and takeaway orders with automatic routing and preparation sequencing." },
    { title: "Direct Online Ordering to Eliminate Commissions", desc: "Branded online ordering platform and mobile app that enables customers to order directly, eliminating aggregator commissions entirely." },
    { title: "AI Menu Engineering & Pricing", desc: "Data analytics platform that analyzes sales mix, food cost, and guest preferences to optimize your menu for maximum profitability." },
    { title: "Predictive Inventory Management", desc: "AI demand forecasting integrated with inventory that automatically generates daily purchase orders to minimize waste and prevent stockouts." },
    { title: "Personalized Loyalty Engine", desc: "Machine learning loyalty program that personalizes rewards, offers birthday specials, and sends re-engagement campaigns to lapsed guests." },
    { title: "Real-Time Multi-Outlet Intelligence", desc: "Centralized cloud dashboard giving restaurant chains real-time visibility into sales, voids, staff performance, and kitchen efficiency across all outlets." },
  ],

  solutions: [
    { title: "Custom Cloud POS System", desc: "Intuitive, cloud-based POS with menu management, table mapping, modifier handling, split bills, and real-time cloud reporting for multi-outlet chains." },
    { title: "QR Ordering & Digital Menu Platform", desc: "Contactless QR ordering with real-time menu updates, modifier selection, table-side payment, and kitchen ticket generation." },
    { title: "Direct Ordering App & Platform", desc: "Branded iOS/Android ordering app and web platform with Zomato-like UX but zero commission, integrated directly with your POS." },
    { title: "AI Inventory & Recipe Management", desc: "Recipe costing engine integrated with sales data and POS to track inventory consumption, calculate theoretical vs. actual usage, and generate purchase orders." },
  ],

  services: [
    { icon: "💻", title: "Cloud POS System", desc: "Intuitive touchscreen POS with table management, KOT printing, cloud reporting, and multi-outlet centralization." },
    { icon: "📱", title: "QR Ordering & Digital Menu", desc: "Contactless QR menu with real-time updates, customizations, table-side payment, and instant KOT generation." },
    { icon: "🍕", title: "Online Ordering Platform", desc: "Commission-free direct ordering website and mobile app with your brand, integrated with POS and delivery logistics." },
    { icon: "📺", title: "Kitchen Display System (KDS)", desc: "Digital order management for the kitchen aggregating all order channels with preparation timers and expediter view." },
    { icon: "📅", title: "Table Reservation System", desc: "Online reservation platform with floor map management, waitlist, automated reminders, and guest profile building." },
    { icon: "📦", title: "Inventory & Recipe Management", desc: "Recipe costing, auto inventory deduction, supplier ordering, and food cost analytics integrated with POS sales data." },
    { icon: "🎁", title: "Loyalty & CRM Platform", desc: "Points-based loyalty, personalized offers, birthday rewards, and re-engagement campaigns for repeat guest cultivation." },
    { icon: "📊", title: "Restaurant Analytics Dashboard", desc: "Real-time dashboards for sales, covers, average check, item performance, void analysis, and staff productivity." },
    { icon: "🚴", title: "Delivery Management System", desc: "In-house delivery management with rider assignment, live GPS tracking, proof of delivery, and customer notifications." },
  ],

  aiOpportunities: [
    { title: "AI Demand Forecasting", desc: "ML models that predict daily covers and item-level demand based on historical sales, weather, events, and day-of-week patterns for precise purchasing." },
    { title: "Dynamic Menu Pricing", desc: "AI-powered surge pricing for peak hours and limited-availability items, maximizing revenue during high-demand periods." },
    { title: "Personalized Guest Marketing", desc: "ML segmentation that identifies guest dining patterns to send hyper-personalized offers — the right promotion to the right guest at the right time." },
    { title: "Food Waste Prediction", desc: "AI models analyzing historical consumption, prep quantities, and upcoming reservations to minimize prep over-production and perishable waste." },
    { title: "Sentiment Analysis & Reputation Management", desc: "Real-time monitoring of Zomato, Google, and social media reviews with NLP sentiment analysis and automated response suggestions." },
  ],

  techStack: ["React.js", "React Native", "Flutter", "Node.js", "Python", "PostgreSQL", "MongoDB", "Redis", "AWS", "Razorpay", "Stripe", "Twilio", "Firebase", "TensorFlow", "Google Maps API", "Bluetooth/WiFi Printer APIs", "WebSocket", "GraphQL"],

  devProcess: [
    { step: "01", title: "Operations & Menu Analysis", desc: "Deep dive into your current operations, service model, menu structure, and technology pain points across your outlets." },
    { step: "02", title: "UX Design for Speed & Simplicity", desc: "Restaurant staff UX must be learnable in minutes and survive the chaos of peak service — we design for real-world speed and intuitiveness." },
    { step: "03", title: "Platform Engineering & Hardware Integration", desc: "Building POS software with simultaneous hardware certification for printers, cash drawers, KDS displays, and payment terminals." },
    { step: "04", title: "Pilot Launch & Chain Rollout", desc: "Launching in one outlet first for real-world validation, then rolling out chain-wide with dedicated on-site support during go-live." },
  ],

  benefits: [
    { title: "15–25% Food Cost Reduction", desc: "AI inventory management and recipe costing routinely deliver 15–25% reductions in food and beverage costs within 6 months." },
    { title: "Eliminate Delivery Commissions", desc: "Own your direct ordering channel and stop paying Zomato/Swiggy 20–30% commissions on every online order." },
    { title: "3x Faster Table Turnover", desc: "QR ordering and self-payment eliminate 10–15 minutes of wait time per table, enabling significantly faster turnover during peak hours." },
    { title: "40–60% More Repeat Customers", desc: "AI-personalized loyalty programs typically double or triple guest return frequency compared to generic stamp card programs." },
    { title: "Real-Time Chain Visibility", desc: "Multi-outlet cloud dashboards give owners and operations managers instant visibility into every outlet's performance from a phone or laptop." },
    { title: "Dramatically Reduced Training Time", desc: "Intuitive, touch-friendly POS interface reduces staff training time from 3 days to 2 hours, drastically reducing the cost of high turnover." },
  ],

  useCases: [
    { title: "Multi-City QSR Chain", img: "https://images.unsplash.com/photo-1561758033-7e924f619b47?q=80&w=800&auto=format&fit=crop", desc: "Unified cloud POS + QR ordering deployed across 45 QSR outlets in 8 cities, with centralized menu management and real-time sales dashboards." },
    { title: "Fine Dining Reservation Platform", img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=800&auto=format&fit=crop", desc: "Premium table reservation system with floor management, guest preference tracking, and personalized occasion management for a 5-star hotel chain." },
    { title: "Cloud Kitchen Management", img: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=800&auto=format&fit=crop", desc: "Unified order aggregator for a cloud kitchen managing 8 virtual brands across Zomato, Swiggy, and their own app from a single KDS." },
  ],

  caseStudy: {
    client: "Casual Dining Restaurant Chain — Western India",
    industry: "Restaurant & F&B · Casual Dining",
    challenge: "A 12-outlet casual dining chain was losing ₹45 lakhs/month in aggregator commissions, had no centralized sales visibility, suffered 8% food cost variance from unmanaged inventory, and was losing customers to competitors with better loyalty programs.",
    solution: "WebCodian deployed a unified cloud POS system, a branded direct ordering app, a QR menu for dine-in, an AI inventory management system with recipe costing, and a personalized loyalty platform across all 12 outlets simultaneously.",
    result: "Direct ordering app captured 35% of delivery volume within 8 months, saving ₹38 lakhs/month in commissions. Food cost variance reduced to 1.2%, customer repeat rate improved by 67%, and the chain opened 4 new outlets funded by the commission savings.",
  },

  stats: [
    { metric: "₹38L/mo", label: "Commission Savings", desc: "Via direct ordering app" },
    { metric: "67%", label: "Repeat Customer Increase", desc: "From AI loyalty program" },
    { metric: "35%", label: "Direct Order Share", desc: "Captured in 8 months" },
    { metric: "1.2%", label: "Food Cost Variance", desc: "Down from 8% with AI inventory" },
  ],

  securityTitle: "Payment Security & Data Privacy for F&B Businesses",
  securityDesc: "Restaurant POS systems process thousands of high-value customer payment transactions daily. We build every payment integration with PCI-DSS compliance, end-to-end encryption, and comprehensive data privacy features that protect your customers' payment information and your business from liability.",
  securityPoints: [
    "PCI-DSS Compliant Card Payment Processing",
    "End-to-End Encrypted QR Payment Transactions",
    "GDPR-Ready Customer Data & Loyalty Profile Management",
    "Role-Based POS Access Control (Cashier vs. Manager vs. Admin)",
    "Tamper-Evident Audit Logs for All Transactions & Voids",
    "Automated Daily Backup of All Sales & Inventory Data",
  ],
  securityImg: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=2000&auto=format&fit=crop",

  faqs: [
    { q: "Does your POS work offline if the internet is down?", a: "Yes. Our POS is designed with an offline-first architecture that continues to take orders and process transactions locally, syncing automatically to the cloud when connectivity is restored." },
    { q: "Can you integrate with Zomato and Swiggy for order management?", a: "Yes. We aggregate Zomato, Swiggy, and Dunzo orders directly into your POS and KDS alongside your own direct orders, eliminating the need to manage multiple tablets." },
    { q: "Can your system handle a restaurant chain with 50+ outlets?", a: "Yes. Our cloud POS architecture scales linearly and has been deployed across chains with 100+ outlets, with centralized menu management and real-time consolidated reporting." },
    { q: "What hardware do you support?", a: "We support all major POS hardware including Epson/Star receipt printers, Sunmi/PAX terminals, kitchen display monitors, and Bluetooth/USB card readers. We can also recommend and procure the optimal hardware bundle for your setup." },
  ],

  relatedIndustries: [
    { label: "Tour & Travel", href: "/industry/tour-travel" },
    { label: "E-Commerce", href: "/industry/e-commerce" },
    { label: "Manufacturing", href: "/industry/manufacturing" },
    { label: "Real Estate", href: "/industry/real-estate" },
  ],

  ctaHeading: "Ready to Build a Smarter Restaurant?",
  ctaDesc: "Stop losing margin to aggregators, inefficient inventory, and outdated POS systems. Partner with WebCodian to build a restaurant technology ecosystem that delights your guests, empowers your team, and grows your bottom line.",
};

export default function Page() {
  return <IndustryPageTemplate data={data} />;
}
