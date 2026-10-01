import { IndustryPageTemplate, IndustryPageData } from "@/components/IndustryPageTemplate";

const data: IndustryPageData = {
  heroTitle: "Enterprise Technology Solutions for Consulting Firms",
  heroSubtitle: "Accelerate your consulting practice with custom CRM platforms, client portals, automated workflow engines, and AI-powered business intelligence tools that transform how you deliver and demonstrate value.",
  heroImg: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2000&auto=format&fit=crop",
  breadcrumbLabel: "Consulting",
  breadcrumbHref: "/industry/consulting",

  overviewHeading: "Technology That Makes Your Consulting Practice Indispensable",
  overviewText: "In the modern consulting industry, your competitive differentiation is no longer just the quality of your advice — it's the quality of your client experience, the speed of your delivery, and the rigor of your evidence. WebCodian engineers purpose-built technology solutions for management consulting, IT consulting, legal, and financial advisory firms — from intelligent CRM systems and client collaboration portals to AI-powered research platforms and automated proposal generators — that allow your consultants to focus on strategy while technology handles the operational complexity.",
  overviewImg: "https://images.unsplash.com/photo-1542744094-24638eff58bb?q=80&w=2000&auto=format&fit=crop",
  overviewBullets: [
    "Custom CRM with pipeline management and client health scoring",
    "Secure client portal for collaboration, document sharing, and approvals",
    "Automated proposal, SOW, and contract generation workflows",
    "Business intelligence dashboards with AI-powered market insights",
    "Project and resource management for multi-client engagements",
  ],

  challenges: [
    { title: "Knowledge Management Silos", desc: "Valuable institutional knowledge trapped in individual consultants' laptops, email archives, and memory — inaccessible when they leave." },
    { title: "Manual Proposal Generation", desc: "Senior consultants spending 20–30% of their time on proposal writing instead of billable client work, reducing firm profitability." },
    { title: "Poor Client Visibility", desc: "Clients frustrated by lack of real-time engagement visibility into project status, deliverables, and team activities between monthly check-in calls." },
    { title: "Inefficient Billing & Time Tracking", desc: "Manual timesheet submission and invoice approval workflows creating cash flow delays and revenue recognition issues." },
    { title: "Research & Data Overload", desc: "Consultants spending excessive time manually aggregating research from multiple data sources instead of synthesizing insights." },
    { title: "Resource Allocation Bottlenecks", desc: "Senior partners manually matching consultants to projects based on memory, creating poor skill-utilization and burnout issues." },
  ],

  transformationPoints: [
    { title: "Intelligent Knowledge Repository", desc: "AI-searchable knowledge management system that captures project learnings, templates, and frameworks for instant retrieval across the practice." },
    { title: "Automated Proposal Engine", desc: "Template-driven proposal generation with AI that pulls relevant case studies, pricing, and team profiles to assemble proposals in minutes." },
    { title: "Real-Time Client Portal", desc: "Secure, branded client portal providing live project dashboards, milestone tracking, document approvals, and direct team communication." },
    { title: "AI Research Acceleration", desc: "AI-powered research assistant that aggregates, synthesizes, and summarizes market data, competitor intelligence, and industry reports." },
    { title: "Predictive Resource Planning", desc: "ML-powered resource allocation that matches consultant skills and availability to project requirements for optimal utilization and team fit." },
    { title: "Automated Time & Billing", desc: "Integrated time tracking with automated approval workflows, invoice generation, and real-time revenue recognition dashboards." },
  ],

  solutions: [
    { title: "Consulting CRM Development", desc: "Purpose-built CRM for consulting firms with relationship mapping, opportunity pipeline, client health scoring, and engagement analytics." },
    { title: "Secure Client Collaboration Portal", desc: "White-label client portals with project dashboards, document management, e-signatures, task tracking, and encrypted communication." },
    { title: "Knowledge Management Platform", desc: "AI-powered organizational knowledge base with intelligent search, automated taxonomy tagging, and contextual document recommendations." },
    { title: "Business Intelligence & Reporting", desc: "Custom BI dashboards that transform your consulting data into compelling, interactive visual reports for client presentations." },
  ],

  services: [
    { icon: "📊", title: "Consulting CRM", desc: "Relationship management, pipeline tracking, client health scores, and engagement analytics for consulting teams." },
    { icon: "🔐", title: "Secure Client Portal", desc: "Branded client collaboration space with documents, approvals, milestones, and encrypted communication." },
    { icon: "📋", title: "Proposal & SOW Generator", desc: "AI-powered proposal builder with dynamic pricing, team profiles, case studies, and e-signature." },
    { icon: "🧠", title: "Knowledge Management System", desc: "Searchable repository of frameworks, templates, case studies, and research with AI-powered discovery." },
    { icon: "⏱️", title: "Time & Billing Automation", desc: "Automated timesheet collection, approval workflows, invoice generation, and revenue reconciliation." },
    { icon: "📈", title: "Business Intelligence Dashboard", desc: "Custom BI reports and real-time dashboards delivering data-driven insights for client deliverables." },
    { icon: "👥", title: "Resource Management System", desc: "Skills database, availability calendar, and AI-powered consultant-to-project matching for optimal utilization." },
    { icon: "📱", title: "Consultant Mobile App", desc: "Mobile app for consultants to track time, access documents, update CRM, and communicate with clients on the go." },
    { icon: "🤖", title: "AI Research Assistant", desc: "AI-powered research aggregator that summarizes industry reports, competitor data, and market intelligence on demand." },
  ],

  aiOpportunities: [
    { title: "AI Proposal Generation", desc: "Generative AI that assembles context-aware proposals in minutes by intelligently pulling relevant case studies, pricing benchmarks, and team bios." },
    { title: "Client Churn Prediction", desc: "ML models that analyze engagement patterns and flag at-risk client relationships before they deteriorate, enabling proactive retention." },
    { title: "Automated Research Synthesis", desc: "AI that scrapes and synthesizes market research, regulatory changes, and industry news into structured consulting-ready briefings." },
    { title: "Contract Intelligence", desc: "NLP-powered contract review that flags non-standard clauses, liability risks, and payment term anomalies in seconds." },
    { title: "Meeting Intelligence", desc: "AI transcription and action item extraction from client meetings, automatically updating CRM and creating follow-up tasks." },
  ],

  techStack: ["React.js", "Next.js", "Node.js", "Python", "Django", "PostgreSQL", "MongoDB", "AWS", "Azure", "OpenAI API", "Elasticsearch", "Power BI", "Tableau", "Salesforce API", "DocuSign API", "Microsoft Graph API", "Slack API"],

  devProcess: [
    { step: "01", title: "Practice Model Analysis", desc: "Understanding your service lines, billing model, client lifecycle, and knowledge management needs." },
    { step: "02", title: "Workflow Architecture", desc: "Mapping every manual process and designing automated digital equivalents that save consultant time and improve client experience." },
    { step: "03", title: "Agile Platform Build", desc: "Sprint delivery of CRM, client portal, and knowledge management modules with continuous partner feedback." },
    { step: "04", title: "Adoption & Change Management", desc: "Structured onboarding, training, and change management to ensure firm-wide adoption and realized ROI." },
  ],

  benefits: [
    { title: "Higher Consultant Utilization", desc: "AI resource matching and automated admin reduction increases billable consultant utilization rates from 65% to 85%+." },
    { title: "Faster Client Onboarding", desc: "Automated KYC, contract, and portal setup reduces new client onboarding from 3 weeks to 48 hours." },
    { title: "Improved Proposal Win Rates", desc: "AI-optimized proposals and real-time client portal access improve RFP win rates by 30–45% over manual approaches." },
    { title: "Zero Knowledge Loss", desc: "Structured knowledge management prevents the loss of institutional insights when consultants leave the firm." },
    { title: "Faster Revenue Recognition", desc: "Automated time capture and billing approval workflows reduce invoice-to-payment cycles by 40–60%." },
    { title: "Measurable Client Satisfaction", desc: "Client portals with real-time project visibility and transparent deliverable tracking increase CSAT scores significantly." },
  ],

  useCases: [
    { title: "Management Consulting CRM", img: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=800&auto=format&fit=crop", desc: "Custom CRM for a 200-consultant management firm, with AI opportunity scoring, relationship mapping, and automated pipeline reporting for the leadership team." },
    { title: "IT Consulting Client Portal", img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop", desc: "Secure client collaboration portal deployed for a Big 4 IT consulting practice, with live project dashboards and document approval workflows." },
    { title: "Legal Practice Knowledge Base", img: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=800&auto=format&fit=crop", desc: "AI-powered legal knowledge management system indexing 500,000+ documents for instant precedent search across a national law firm." },
  ],

  caseStudy: {
    client: "Mid-Size Management Consulting Firm — Pan-India",
    industry: "Consulting · Strategy & Management",
    challenge: "A 150-consultant firm was losing 25% of senior consultant time to proposal writing, had no client portal (sharing deliverables via email), and saw ₹1.2 crore/year in unbilled time due to manual timesheet management.",
    solution: "WebCodian built an integrated consulting platform — AI proposal engine, secure client portal, automated time tracking, and a knowledge management system — replacing 6 disconnected tools with one unified platform.",
    result: "Proposal creation time reduced from 4 days to 6 hours, unbilled time recovered entirely (₹1.2 crore), client NPS improved from 42 to 71, and two major client wins attributed directly to the portal's transparency and professionalism.",
  },

  stats: [
    { metric: "85%+", label: "Billable Utilization Rate", desc: "Up from 65% industry average" },
    { metric: "6 Hours", label: "Proposal Creation Time", desc: "Down from 4 days average" },
    { metric: "₹1.2Cr", label: "Recovered Unbilled Revenue", desc: "In first year of automation" },
    { metric: "71", label: "Client NPS Score", desc: "Up from 42 pre-platform" },
  ],

  securityTitle: "Confidentiality, Data Security & Legal Compliance",
  securityDesc: "Client confidentiality is the foundation of every consulting relationship. We build your platforms with enterprise-grade security — attorney-client privilege protection, air-gapped data architecture, and comprehensive audit trails — ensuring your most sensitive client data is protected at all times.",
  securityPoints: [
    "End-to-End Encryption for All Client Communications",
    "Role-Based Access Control (RBAC) at Project & Document Level",
    "NDA-Protected Data Segregation Between Client Matters",
    "ISO 27001 Information Security Management",
    "Comprehensive Audit Logs for All Data Access Events",
    "GDPR & India IT Act Compliant Data Architecture",
  ],
  securityImg: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2000&auto=format&fit=crop",

  faqs: [
    { q: "Can your CRM integrate with tools we already use like Salesforce, HubSpot, or Microsoft Teams?", a: "Yes. We provide API-based integrations with Salesforce, HubSpot, Microsoft Dynamics, Teams, Slack, and all major enterprise tools to ensure your new platform enhances existing workflows." },
    { q: "How do you handle data segregation between different clients?", a: "We implement strict data isolation at the database level, ensuring no data from one client engagement can be accessed through another client's portal or report." },
    { q: "Can the AI proposal tool be trained on our own proposal library?", a: "Yes. We train the AI on your firm's proprietary proposal templates, successful case studies, and pricing models to generate proposals that match your brand voice and quality standards." },
    { q: "Is the client portal accessible on mobile?", a: "Yes. The client portal is fully responsive and also available as a native mobile app for both iOS and Android for senior executive convenience." },
  ],

  relatedIndustries: [
    { label: "Real Estate", href: "/industry/real-estate" },
    { label: "Manufacturing", href: "/industry/manufacturing" },
    { label: "Healthcare", href: "/industry/healthcare" },
    { label: "Security", href: "/industry/security" },
  ],

  ctaHeading: "Ready to Modernize Your Consulting Practice?",
  ctaDesc: "The firms that win the next decade won't just advise on digital transformation — they'll lead it. Partner with WebCodian to build a technology platform that makes your practice faster, smarter, and more valuable to your clients.",
};

export default function Page() {
  return <IndustryPageTemplate data={data} />;
}
