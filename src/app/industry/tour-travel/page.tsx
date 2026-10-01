import { IndustryPageTemplate, IndustryPageData } from "@/components/IndustryPageTemplate";

const data: IndustryPageData = {
  heroTitle: "Next-Generation Tech Solutions for Tour & Travel",
  heroSubtitle: "Modernize your travel business with custom booking engines, hotel management systems, AI trip planning, and white-label travel portals engineered for the global hospitality market.",
  heroImg: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2000&auto=format&fit=crop",
  breadcrumbLabel: "Tour & Travel",
  breadcrumbHref: "/industry/tour-travel",

  overviewHeading: "Engineering Memorable Travel Experiences Through Technology",
  overviewText: "The global travel and tourism industry generates over $9 trillion annually, and the competitive advantage increasingly belongs to tech-driven operators. WebCodian engineers end-to-end travel technology solutions — from white-label booking engines and hotel management systems to AI-powered trip planners and travel CRMs — that help tour operators, travel agencies, OTAs, and hotel chains streamline operations, increase direct bookings, and deliver unforgettable customer journeys.",
  overviewImg: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2000&auto=format&fit=crop",
  overviewBullets: [
    "Custom flight, hotel, and holiday package booking engines",
    "White-label B2B travel portals for agent networks",
    "Hotel Property Management Systems (PMS)",
    "AI-powered trip planning and itinerary generation",
    "Travel CRM with automated lead nurturing and follow-ups",
  ],

  challenges: [
    { title: "OTA Dependency & Commission Leakage", desc: "Travel businesses paying 15–25% commissions to OTAs on every booking, severely compressing already thin margins." },
    { title: "Fragmented Booking Systems", desc: "Hotels and tour operators managing flights, hotels, transfers, and activities through separate, disconnected systems causing booking errors." },
    { title: "Dynamic Pricing Complexity", desc: "Manual pricing adjustments failing to respond to real-time demand fluctuations, competitor pricing, and seasonal patterns." },
    { title: "Customer Service Overload", desc: "High volumes of customer queries about bookings, itineraries, and cancellations overwhelming small travel agency teams." },
    { title: "Loyalty Program Inefficiency", desc: "Generic loyalty programs failing to create genuine traveler attachment, leading to high customer churn between trips." },
    { title: "No Real-Time Inventory Visibility", desc: "Agents and customers unable to see real-time availability for flights, hotels, and packages, leading to overbookings and cancellations." },
  ],

  transformationPoints: [
    { title: "Direct Booking Engine", desc: "Own your booking channel completely with a branded direct booking engine that eliminates OTA commissions and builds customer loyalty." },
    { title: "AI Trip Planning", desc: "Generative AI that creates personalized, day-by-day itineraries based on traveler preferences, budget, and travel dates in seconds." },
    { title: "Dynamic Pricing Intelligence", desc: "ML-powered pricing engine that adjusts package and hotel rates in real-time based on demand, competition, and availability." },
    { title: "Integrated Travel Platform", desc: "Unify flights, hotels, transfers, activities, and visa services into a single, seamless booking and management workflow." },
    { title: "Whatsapp Travel Assistant", desc: "AI-powered WhatsApp bot that handles booking queries, sends itineraries, and manages customer service conversations 24/7." },
    { title: "B2B Agent Ecosystem", desc: "White-label portals and mobile apps that empower your agent network to book and manage travel on behalf of their clients." },
  ],

  solutions: [
    { title: "Custom Booking Engine", desc: "We build high-performance booking engines with real-time GDS/API inventory, multi-currency support, and a conversion-optimized checkout experience." },
    { title: "Hotel PMS Development", desc: "Comprehensive Property Management Systems with front desk, housekeeping, reservations, F&B, and revenue management integrated into a single platform." },
    { title: "AI Itinerary Generator", desc: "Generative AI-powered trip planning tool that creates detailed, day-by-day itineraries and automatically assembles the relevant booking components." },
    { title: "Travel CRM & Lead Automation", desc: "Purpose-built travel CRM that nurtures B2C and B2B leads through automated, personalized email and WhatsApp campaigns." },
  ],

  services: [
    { icon: "✈️", title: "Online Booking Engine", desc: "Custom flight, hotel, holiday package, and activity booking engine with real-time GDS/API inventory." },
    { icon: "🏨", title: "Hotel Management System", desc: "Full-featured PMS with reservations, front desk, housekeeping, F&B, and channel manager integration." },
    { icon: "🗺️", title: "AI Trip Planner", desc: "Generative AI that creates personalized itineraries and auto-bundles flights, hotels, and activities." },
    { icon: "📊", title: "Travel CRM", desc: "Lead management, customer journey tracking, automated follow-ups, and booking history analytics." },
    { icon: "📦", title: "Package Management System", desc: "Create, price, and manage dynamic travel packages with real-time availability and automated costing." },
    { icon: "📱", title: "Travel Mobile App", desc: "B2C iOS/Android app with booking, itinerary management, real-time alerts, and offline access." },
    { icon: "🤝", title: "B2B Agent Portal", desc: "White-label agent booking portal with net rates, credit management, and real-time reporting." },
    { icon: "💰", title: "Revenue Management", desc: "Dynamic pricing engine, yield management, and competitive rate intelligence for hotels and packages." },
    { icon: "🎁", title: "Loyalty & Rewards Platform", desc: "Points-based loyalty programs, milestone rewards, and VIP traveler tiers integrated across all booking channels." },
  ],

  aiOpportunities: [
    { title: "AI Personalized Itinerary Generation", desc: "Generative AI creates unique, personalized itineraries in under 30 seconds, dramatically improving the conversion rate of planning-stage visitors." },
    { title: "Dynamic Package Pricing", desc: "ML algorithms optimize package pricing in real-time based on demand curves, competitor pricing, and available inventory." },
    { title: "Sentiment Analysis for Reviews", desc: "NLP models analyze guest reviews across TripAdvisor, Google, and Booking.com to identify operational improvement areas automatically." },
    { title: "Churn Prevention Campaigns", desc: "Predictive models identify customers who haven't booked in 12+ months and trigger personalized win-back campaigns." },
    { title: "AI Visa & Travel Document Check", desc: "Automated document verification that checks visa requirements, passport validity, and vaccination certificates for any destination." },
  ],

  techStack: ["React.js", "Next.js", "Node.js", "Python", "Django", "PostgreSQL", "MongoDB", "Redis", "AWS", "Amadeus GDS API", "Sabre API", "TBO Holidays API", "Stripe", "Razorpay", "OpenAI API", "Flutter", "Twilio", "SendGrid"],

  devProcess: [
    { step: "01", title: "Travel Business Analysis", desc: "Understanding your product mix, target segments, agent network, and supplier relationships to architect the right platform." },
    { step: "02", title: "API & Inventory Planning", desc: "Identifying and contracting the right GDS/supplier APIs (Amadeus, Sabre, TBO) to power your inventory." },
    { step: "03", title: "Agile Platform Build", desc: "Sprint-based development delivering booking, CRM, and back-office modules in parallel for rapid go-live." },
    { step: "04", title: "Performance & Revenue Optimization", desc: "Post-launch optimization of booking funnel, pricing engine, and agent portal for maximum revenue per visitor." },
  ],

  benefits: [
    { title: "Eliminate OTA Commissions", desc: "A direct booking engine typically recovers its development cost in 4–8 months by eliminating 15–25% OTA commission fees." },
    { title: "Increase Agent Productivity", desc: "B2B portals allow agents to book, quote, and invoice in minutes instead of hours, enabling each agent to handle 5x more clients." },
    { title: "Higher Customer Lifetime Value", desc: "Personalized loyalty programs and AI-powered campaigns increase repeat booking rates from 18% to 45%+ over 24 months." },
    { title: "Operational Cost Reduction", desc: "Integrated PMS and booking system automation reduces hotel operational overhead by 35–45% across front desk and back office." },
    { title: "Global Reach via Technology", desc: "Multi-currency, multi-language booking engines allow you to sell packages to customers in 190+ countries without a local office." },
    { title: "Real-Time Revenue Intelligence", desc: "Dashboards providing live visibility into booking volumes, ADR, RevPAR, channel performance, and package popularity." },
  ],

  useCases: [
    { title: "OTA White-Label Platform", img: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=800&auto=format&fit=crop", desc: "Full-featured OTA platform with GDS integration, 150+ supplier APIs, dynamic packaging, and a B2B agent portal for 800 travel agents." },
    { title: "Boutique Hotel PMS", img: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=800&auto=format&fit=crop", desc: "Cloud-based PMS for a 12-property boutique hotel chain, integrating reservations, housekeeping, F&B, and OTA channel management." },
    { title: "AI Travel App", img: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=800&auto=format&fit=crop", desc: "Consumer travel app with AI itinerary generation, social sharing, and real-time booking for 200,000+ monthly active users." },
  ],

  caseStudy: {
    client: "Mid-Size Tour Operator — North India",
    industry: "Tour & Travel · B2C & B2B",
    challenge: "A 20-year-old tour operator was losing 22% of revenue to MakeMyTrip and Yatra commissions annually, had no own booking platform, managed 800 agents via WhatsApp groups, and had zero visibility into lead conversion data.",
    solution: "WebCodian built a comprehensive travel platform — including a branded B2C booking engine, a white-label B2B agent portal, AI trip planner, and a travel CRM with automated WhatsApp follow-ups — delivered in 6 months.",
    result: "Commission savings of ₹1.8 crore in Year 1, agent productivity increased by 3x, customer repeat booking rate rose from 19% to 44%, and the client expanded to international packages within 12 months of platform launch.",
  },

  stats: [
    { metric: "₹1.8Cr", label: "Commission Savings in Year 1", desc: "By eliminating OTA dependency" },
    { metric: "3x", label: "Agent Productivity Increase", desc: "Via B2B agent portal" },
    { metric: "44%", label: "Repeat Booking Rate", desc: "Up from 19% within 12 months" },
    { metric: "6 Months", label: "Full Platform Delivery", desc: "B2C + B2B + CRM + AI" },
  ],

  securityTitle: "Secure Payments & PCI-DSS Compliance for Travel",
  securityDesc: "Travel bookings involve large-value transactions and highly sensitive personal data including passports and payment information. We build your payment infrastructure with the highest PCI-DSS standards, fraud prevention, and multi-currency security to protect every transaction.",
  securityPoints: [
    "PCI-DSS Level 1 Payment Processing",
    "3D Secure Authentication for All Card Transactions",
    "Passport & Document Data Encryption",
    "GDPR Compliant Customer Data Management",
    "Real-Time Fraud Scoring & Transaction Monitoring",
    "Automated Chargeback & Cancellation Management",
  ],
  securityImg: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2000&auto=format&fit=crop",

  faqs: [
    { q: "Which GDS and supplier APIs do you integrate with?", a: "We integrate with Amadeus, Sabre, Galileo, Farelogix, TBO Holidays, HotelBeds, Expedia, and all major hotel chain APIs including IHG, Marriott, and Hilton." },
    { q: "Can you build a platform that competes with MakeMyTrip?", a: "Yes. We have built full-featured OTA platforms with multi-supplier API aggregation, dynamic packaging, and mobile apps. The key differentiator is your brand, niche focus, and customer relationships." },
    { q: "How do you handle cancellations and refund automation?", a: "We build automated cancellation handling with supplier refund API integration, rule-based refund policies, and instant customer notification workflows." },
    { q: "Can the system handle seasonal traffic spikes?", a: "Yes. We architect all travel platforms on auto-scaling infrastructure designed to handle 20x baseline traffic during peak booking windows." },
  ],

  relatedIndustries: [
    { label: "Real Estate", href: "/industry/real-estate" },
    { label: "Restaurant", href: "/industry/restaurant" },
    { label: "E-Commerce", href: "/industry/e-commerce" },
    { label: "Consulting", href: "/industry/consulting" },
  ],

  ctaHeading: "Ready to Build Your Travel Technology Platform?",
  ctaDesc: "Stop paying OTA commissions. Partner with WebCodian to build your own direct booking engine and travel ecosystem that puts your brand, data, and revenue back in your hands.",
};

export default function Page() {
  return <IndustryPageTemplate data={data} />;
}
