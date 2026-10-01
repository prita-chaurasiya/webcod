import { IndustryPageTemplate, IndustryPageData } from "@/components/IndustryPageTemplate";

const data: IndustryPageData = {
  heroTitle: "Purpose-Built Technology for NGOs & Non-Profits",
  heroSubtitle: "Amplify your social impact with custom donation management systems, volunteer portals, campaign platforms, and impact reporting tools designed for the unique operational needs of mission-driven organizations.",
  heroImg: "https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=2000&auto=format&fit=crop",
  breadcrumbLabel: "NGO",
  breadcrumbHref: "/industry/ngo",

  overviewHeading: "Maximizing Social Impact Through Digital Empowerment",
  overviewText: "Non-governmental organizations and non-profits operate at the intersection of compassion and efficiency. Every rupee of operational overhead is a rupee not reaching those in need. WebCodian engineers technology solutions specifically designed for mission-driven organizations — from transparent donation management and volunteer coordination to AI-powered campaign analytics and FCRA-compliant financial reporting — that help NGOs do more with less and communicate their impact more powerfully to donors and the public.",
  overviewImg: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?q=80&w=2000&auto=format&fit=crop",
  overviewBullets: [
    "Online donation platforms with recurring giving and tax receipts",
    "Volunteer management portals with scheduling and tracking",
    "Campaign management and crowdfunding platforms",
    "Impact reporting dashboards with real-time beneficiary data",
    "FCRA-compliant financial management and audit trail systems",
  ],

  challenges: [
    { title: "Donor Acquisition & Retention", desc: "NGOs spending enormous effort acquiring one-time donors but failing to convert them into recurring supporters due to poor digital engagement." },
    { title: "Manual Volunteer Coordination", desc: "Managing hundreds of volunteers through WhatsApp and spreadsheets causing scheduling conflicts, poor accountability, and high volunteer dropout." },
    { title: "Impact Measurement Difficulty", desc: "Organizations unable to quantify and communicate their social impact in data-driven terms that satisfy sophisticated institutional donors." },
    { title: "Financial Transparency & FCRA", desc: "Complex FCRA regulations and CSR compliance requirements creating significant accounting and reporting burdens for small teams." },
    { title: "Campaign Performance Blindness", desc: "No analytics on fundraising campaign performance, donor segmentation, or email/social media effectiveness." },
    { title: "Beneficiary Data Management", desc: "Poor systems for tracking program beneficiaries, tracking intervention outcomes, and generating government-mandated reports." },
  ],

  transformationPoints: [
    { title: "Recurring Donation Automation", desc: "Smart donation portals with SIP-style recurring giving options that convert one-time donors into monthly supporters automatically." },
    { title: "Real-Time Impact Dashboard", desc: "Public-facing impact dashboards showing donors exactly where their money is going and what outcomes their contributions are achieving." },
    { title: "Digital Volunteer Ecosystem", desc: "Mobile-first volunteer platforms with self-service onboarding, geotagged activity tracking, and automated certificate issuance." },
    { title: "AI-Powered Fundraising", desc: "Machine learning that predicts donor propensity, personalizes fundraising appeals, and optimizes campaign timing for maximum donations." },
    { title: "Transparent Financial Reporting", desc: "Automated FCRA quarterly reports, CSR fund utilization statements, and auditor-ready financial documents generated in one click." },
    { title: "Crowdfunding Platform", desc: "Branded crowdfunding platform enabling peer-to-peer fundraising, corporate challenge campaigns, and emergency appeal funding." },
  ],

  solutions: [
    { title: "Custom Donation Platform", desc: "Branded online donation portals accepting all payment methods with instant 80G receipts, recurring giving setup, and donor dashboards." },
    { title: "Volunteer Management System", desc: "End-to-end volunteer portal with onboarding, skill-matching, scheduling, GPS-tracked activity logging, and impact certification." },
    { title: "Campaign & Event Management", desc: "Digital campaign management tools for fundraising drives, awareness campaigns, and field events with real-time collection tracking." },
    { title: "FCRA-Compliant Financial System", desc: "Custom accounting and fund management system with separate foreign and domestic fund tracking, mandatory FC-4 report generation, and audit trails." },
  ],

  services: [
    { icon: "💝", title: "Online Donation Platform", desc: "Multi-payment donation portal with recurring giving, 80G receipts, and donor relationship management." },
    { icon: "🤝", title: "Volunteer Management Portal", desc: "Self-service volunteer onboarding, scheduling, activity tracking, and automated appreciation certificates." },
    { icon: "📣", title: "Campaign Management System", desc: "Create, launch, and track fundraising campaigns with real-time collection dashboards and donor leaderboards." },
    { icon: "📊", title: "Impact Reporting Dashboard", desc: "Data-driven impact stories showing beneficiary reach, program outcomes, and fund utilization in real-time." },
    { icon: "📅", title: "Event Management Platform", desc: "Event ticketing, volunteer coordination, vendor management, and post-event reporting for NGO events." },
    { icon: "📱", title: "NGO Mobile App", desc: "Donor-facing mobile app with giving history, impact updates, campaign participation, and tax receipt downloads." },
    { icon: "💰", title: "FCRA Financial Management", desc: "Separate foreign/domestic fund tracking, FC-4 report automation, and CSR fund utilization statements." },
    { icon: "🎯", title: "Beneficiary Management System", desc: "Comprehensive database for tracking program beneficiaries, intervention records, and long-term outcome monitoring." },
    { icon: "🤖", title: "AI Fundraising Optimizer", desc: "ML-powered tools for donor segmentation, personalized appeal generation, and optimal campaign timing analysis." },
  ],

  aiOpportunities: [
    { title: "Donor Propensity Modeling", desc: "ML models that identify which existing donors are most likely to upgrade their giving or respond positively to a specific campaign appeal." },
    { title: "Automated Impact Storytelling", desc: "Generative AI that transforms raw beneficiary data into compelling, shareable impact stories for donor communications." },
    { title: "Campaign Performance Prediction", desc: "Predictive analytics that forecast fundraising campaign performance based on historical data, timing, and audience segmentation." },
    { title: "Grant Matching Intelligence", desc: "AI that scans thousands of grant databases and automatically matches your organization's programs with eligible funding opportunities." },
    { title: "Social Sentiment Analysis", desc: "NLP models monitoring social media for mentions of your cause, identifying advocacy opportunities and potential reputational issues in real-time." },
  ],

  techStack: ["React.js", "Next.js", "Node.js", "Python", "PostgreSQL", "MongoDB", "AWS", "Razorpay", "Stripe", "Twilio", "SendGrid", "Google Analytics", "Facebook Pixel", "TensorFlow", "Flutter", "Chart.js", "Power BI"],

  devProcess: [
    { step: "01", title: "Mission & Stakeholder Mapping", desc: "Understanding your organizational mission, donor personas, volunteer demographics, and program delivery model." },
    { step: "02", title: "Compliance & Security Design", desc: "Designing FCRA-compliant data architecture and financial workflows before writing a single line of code." },
    { step: "03", title: "Lean MVP Development", desc: "Building a resource-efficient platform that delivers maximum impact for your budget, with clear expansion pathways." },
    { step: "04", title: "Training & Capacity Building", desc: "Comprehensive staff and volunteer training to ensure maximum platform adoption and utilization." },
  ],

  benefits: [
    { title: "Higher Donor Retention", desc: "Personalized donor communications and impact dashboards increase donor retention rates from 30% to 65%+ annually." },
    { title: "Increased Recurring Giving", desc: "Optimized recurring giving prompts and frictionless setup increase monthly donors by 250–400% compared to one-time appeal models." },
    { title: "Reduced Administrative Overhead", desc: "Automated receipting, reporting, and communication tools free up 40–60% of staff time previously spent on manual administration." },
    { title: "Institutional Donor Confidence", desc: "Real-time impact dashboards and transparent financial reporting significantly increase confidence from CSR donors and institutional funders." },
    { title: "Expanded Volunteer Capacity", desc: "Self-service volunteer portals reduce coordination effort by 70% while increasing volunteer satisfaction and retention." },
    { title: "Global Donation Access", desc: "Multi-currency platforms allow your organization to receive donations from Indian diaspora and international supporters worldwide." },
  ],

  useCases: [
    { title: "National Disaster Relief Platform", img: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=800&auto=format&fit=crop", desc: "Emergency fundraising platform that raised ₹4.2 crore in 72 hours during a natural disaster, with real-time fund allocation transparency." },
    { title: "Rural Education NGO Portal", img: "https://images.unsplash.com/photo-1527168027773-0cc890c4f42e?q=80&w=800&auto=format&fit=crop", desc: "Beneficiary tracking system for a 50,000-child education program, with government-ready outcome reports and donor impact stories." },
    { title: "Corporate CSR Management", img: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?q=80&w=800&auto=format&fit=crop", desc: "CSR fund management platform for a Fortune 500's social initiatives, tracking ₹25 crore across 12 partner NGOs with FCRA compliance." },
  ],

  caseStudy: {
    client: "Pan-India Education NGO",
    industry: "NGO · Education & Child Development",
    challenge: "A well-established NGO was losing donors due to poor digital communication, had no online donation system, managed 2,000+ volunteers via WhatsApp, and was failing FCRA audits due to manual accounting errors.",
    solution: "WebCodian built a complete digital ecosystem: an 80G-compliant donation portal, a volunteer management app, a real-time impact dashboard, and an FCRA-compliant accounting module with automated quarterly report generation.",
    result: "Monthly donations increased by 340%, donor retention improved from 28% to 67%, volunteer coordination effort reduced by 65%, and the organization passed its FCRA audit for the first time without external accounting support.",
  },

  stats: [
    { metric: "340%", label: "Monthly Donation Increase", desc: "Through digital donor platform" },
    { metric: "67%", label: "Donor Retention Rate", desc: "Up from 28% previously" },
    { metric: "65%", label: "Volunteer Admin Reduction", desc: "Via self-service portal" },
    { metric: "2,000+", label: "Volunteers Managed", desc: "Across India simultaneously" },
  ],

  securityTitle: "Donor Data Security & Regulatory Compliance",
  securityDesc: "Your donors trust you with their personal and financial information. We build NGO platforms with bank-grade security, FCRA-compliant data separation, and transparent audit trails that satisfy both regulatory bodies and the most discerning institutional donors.",
  securityPoints: [
    "PCI-DSS Compliant Donation Payment Processing",
    "FCRA-Compliant Domestic & Foreign Fund Separation",
    "Donor PII (Personally Identifiable Information) Encryption",
    "Automated 80G Tax Receipt Generation & Delivery",
    "Real-Time Financial Audit Trail for All Transactions",
    "GDPR & India IT Act Compliant Data Handling",
  ],
  securityImg: "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2000&auto=format&fit=crop",

  faqs: [
    { q: "Can you build a platform that issues 80G receipts automatically?", a: "Yes. Our donation platforms automatically generate and email compliant 80G tax exemption receipts immediately after every successful donation." },
    { q: "Does your system help with FCRA compliance?", a: "Yes. We build separate accounting ledgers for domestic and foreign contributions, generate FC-4 quarterly reports, and maintain detailed audit trails required for FCRA compliance." },
    { q: "Can international donors donate in foreign currencies?", a: "Yes. We support multi-currency payments through Stripe and PayPal for international donors, with automatic conversion and separate FCRA foreign account crediting." },
    { q: "Do you offer affordable pricing for small NGOs?", a: "We believe technology should empower every organization regardless of size. We offer special pricing and flexible payment plans for registered non-profit organizations." },
  ],

  relatedIndustries: [
    { label: "Healthcare", href: "/industry/healthcare" },
    { label: "Education", href: "/industry/education" },
    { label: "Consulting", href: "/industry/consulting" },
    { label: "News & Blog", href: "/industry/news-blog" },
  ],

  ctaHeading: "Ready to Amplify Your Organization's Impact?",
  ctaDesc: "Technology should serve your mission, not burden it. Partner with WebCodian to build a digital platform that reaches more donors, empowers more volunteers, and maximizes every rupee of your social investment.",
};

export default function Page() {
  return <IndustryPageTemplate data={data} />;
}
