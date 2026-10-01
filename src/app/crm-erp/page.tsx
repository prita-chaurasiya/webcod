import { SolutionPageTemplate, SolutionPageData } from "@/components/SolutionPageTemplate";

const data: SolutionPageData = {
  heroTitle: "Enterprise CRM & ERP Development",
  heroSubtitle: "Unify your business operations. We engineer custom Customer Relationship Management (CRM) and Enterprise Resource Planning (ERP) systems tailored to your exact workflows, eliminating data silos and driving operational efficiency.",
  heroImg: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2000&auto=format&fit=crop",
  breadcrumbLabel: "CRM & ERP",
  category: "Systems & Automation",

  overviewHeading: "Software That Molds to Your Business, Not the Other Way Around",
  overviewText: "Off-the-shelf CRM and ERP platforms are built for the 'average' business. But enterprise leaders don't operate average businesses—they have unique workflows, specialized supply chains, and complex sales cycles. Forcing your team to adapt to generic software destroys productivity. WebCodian engineers custom, cloud-native CRM and ERP systems that map perfectly to your operational reality, integrating sales, finance, inventory, and HR into a single, cohesive ecosystem.",
  overviewImg: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2000&auto=format&fit=crop",
  overviewBullets: [
    "Custom ERP systems (Finance, Inventory, Manufacturing, HR)",
    "Bespoke CRM platforms tailored to complex B2B/B2C sales cycles",
    "Integration with existing legacy systems and third-party APIs",
    "Real-time BI dashboards and automated reporting",
    "Cloud-native architecture (AWS/Azure) for infinite scalability",
    "Mobile-first interfaces for field sales and warehouse teams",
  ],

  challenges: [
    { title: "Fragmented Operations", desc: "Sales teams use Salesforce, finance uses Tally, and operations uses Excel. Data is manually copied between them, causing delays, errors, and a complete lack of executive visibility." },
    { title: "Rigid Off-the-Shelf Limitations", desc: "Expensive SaaS platforms forcing you to change your proven business processes because the software cannot be customized to accommodate your specific workflow." },
    { title: "Escalating Licensing Costs", desc: "Per-user, per-month licensing fees that punish growth. As you add more employees to an off-the-shelf ERP, your software costs spiral out of control." },
    { title: "Poor User Adoption", desc: "Clunky, unintuitive legacy interfaces that employees hate using, leading to incomplete data entry and Shadow IT (teams secretly using spreadsheets instead)." },
    { title: "Lack of Mobile Accessibility", desc: "Field sales teams and warehouse workers unable to access or update the ERP system on the go, resulting in massive data entry backlogs at the end of the day." },
    { title: "Integration Nightmares", desc: "Proprietary systems that act as walled gardens, making it nearly impossible to integrate with modern marketing, e-commerce, or logistics APIs." },
  ],

  whyPoints: [
    { title: "Perfect Workflow Alignment", desc: "Custom systems are engineered around your exact processes. This frictionless alignment drastically increases employee productivity and data accuracy." },
    { title: "Zero Licensing Fees", desc: "You own the software. Whether you have 50 employees or 5,000, your software costs do not scale linearly with your headcount, saving millions over time." },
    { title: "A Single Source of Truth", desc: "By combining CRM and ERP, leadership gains absolute real-time visibility. When sales closes a deal, inventory is immediately allocated, and finance is notified instantly." },
    { title: "Limitless Integration Capability", desc: "Custom systems are built API-first, meaning they can easily connect to your website, supplier databases, logistics partners, and marketing automation tools." },
    { title: "High User Adoption via UX", desc: "We design modern, intuitive interfaces that look like consumer apps. When software is easy to use, employees actually use it, ensuring high-quality data." },
    { title: "Proprietary Competitive Advantage", desc: "A highly optimized operational backend allows you to fulfill orders faster, service customers better, and operate cheaper than competitors using generic software." },
  ],

  solutions: [
    { title: "Domain-Driven Custom ERP Engineering", desc: "We architect comprehensive ERP solutions encompassing Procurement, Inventory (WMS), Production Planning, Finance, and HR, all built on a unified, real-time database." },
    { title: "Specialized CRM Development", desc: "Building CRMs designed for your specific sales cycle, featuring automated lead routing, custom quoting engines, pipeline visualization, and deep email integration." },
    { title: "Legacy System Modernization", desc: "Gradually migrating your company off outdated, fragile legacy systems onto modern, cloud-native architectures without disrupting ongoing daily operations." },
    { title: "Enterprise Systems Integration", desc: "Developing middleware and API layers to seamlessly connect your new custom CRM/ERP with any specialized third-party tools you still need to use." },
  ],

  features: [
    { icon: "💼", title: "Sales & Pipeline Management", desc: "Visual kanban boards, automated lead scoring, email tracking, and custom quoting engines tailored to your sales process." },
    { icon: "📦", title: "Inventory & Warehouse (WMS)", desc: "Real-time stock tracking, barcode/QR scanning integration, multi-warehouse management, and automated reorder alerts." },
    { icon: "💰", title: "Finance & Invoicing", desc: "Automated invoice generation, multi-currency support, payment gateway integration, and real-time P&L dashboards." },
    { icon: "👥", title: "HRMS & Payroll", desc: "Employee onboarding, leave management, performance tracking, and automated payroll calculation based on local tax laws." },
    { icon: "📊", title: "Advanced BI & Reporting", desc: "Customizable executive dashboards, automated daily reports, and data export capabilities for deep financial analysis." },
    { icon: "📱", title: "Mobile & Field Access", desc: "Progressive Web Apps (PWAs) or native apps allowing field agents to update CRM records or scan inventory on the go." },
    { icon: "🤖", title: "Workflow Automation", desc: "Rule-based engines that automatically trigger tasks, route approvals, or send notifications when specific business conditions are met." },
    { icon: "🔐", title: "Granular Access Control", desc: "Strict Role-Based Access Control (RBAC) ensuring employees only see the data and modules necessary for their specific job." },
    { icon: "☁️", title: "Cloud-Native Infrastructure", desc: "Deployed on AWS or Azure for 99.99% uptime, automated backups, and the ability to scale seamlessly during peak periods." },
  ],

  benefits: [
    { title: "30-50% Operational Cost Reduction", desc: "Eliminating manual data entry across departments and automating repetitive workflows drastically reduces administrative overhead." },
    { title: "Accelerated Sales Cycles", desc: "Automated quoting and seamless handoffs between sales and operations enable you to close deals and deliver value significantly faster." },
    { title: "Optimized Inventory Levels", desc: "Real-time visibility and predictive ordering algorithms prevent costly stockouts while minimizing capital tied up in dead inventory." },
    { title: "Faster Financial Close", desc: "Unified data means the finance team isn't spending weeks reconciling spreadsheets; month-end close happens in days, not weeks." },
    { title: "Superior Customer Experience", desc: "When sales and support teams have instant access to a customer's entire history (orders, tickets, billing), they provide vastly superior service." },
    { title: "Data-Driven Leadership", desc: "Executives no longer manage by intuition; real-time dashboards provide the absolute clarity required to make aggressive, confident business decisions." },
  ],

  techStack: ["Node.js", "Python", "Java", "React.js", "Next.js", "PostgreSQL", "MongoDB", "Redis", "Kafka", "AWS", "Azure", "Docker", "Kubernetes", "REST / GraphQL", "Elasticsearch"],

  process: [
    { step: "01", title: "Deep Workflow Discovery", desc: "Extensive shadowing and workshops with every department head to map exact business processes, pain points, and reporting requirements." },
    { step: "02", title: "Architecture & UX Design", desc: "Designing the unified database schema, mapping API integrations, and creating interactive wireframes of the system for user validation." },
    { step: "03", title: "Modular Agile Development", desc: "Building the system in phased modules (e.g., CRM first, then Inventory, then Finance) allowing for early ROI and iterative feedback." },
    { step: "04", title: "Data Migration & Training", desc: "Securely migrating historical data from legacy systems, conducting comprehensive UAT, and providing detailed team training before go-live." },
  ],

  industries: ["Manufacturing", "Logistics & Supply Chain", "Healthcare", "Real Estate & Construction", "E-Commerce", "Financial Services", "Education", "Consulting & Professional Services"],

  aiPoints: [
    { title: "Predictive Lead Scoring", desc: "Machine learning models in the CRM that analyze historical win/loss data to automatically grade new leads, telling sales reps exactly who to call first." },
    { title: "Demand Forecasting", desc: "AI algorithms in the ERP that analyze seasonality, market trends, and historical sales to predict exactly how much inventory to order and when." },
    { title: "Automated Data Entry (OCR)", desc: "Integrating computer vision to allow staff to scan vendor invoices or business cards, with AI automatically extracting the data and populating the ERP." },
    { title: "Conversational ERP Interfaces", desc: "Integrating LLMs so executives can simply type 'What is our current stock of Product X in the Mumbai warehouse?' and get an instant, accurate answer." },
    { title: "Churn Prediction", desc: "AI analyzing customer interaction frequency, support ticket tone, and ordering patterns to alert account managers before a key client decides to leave." },
  ],

  securityTitle: "Enterprise-Grade Security for Core Business Data",
  securityDesc: "Your CRM and ERP house your most sensitive financial, customer, and employee data. We engineer these systems with a Zero-Trust architecture, ensuring total data privacy, rigorous access controls, and compliance with global security standards.",
  securityPoints: [
    "Strict Role-Based and Row-Level Access Controls (RBAC/RLS)",
    "AES-256 Encryption for Data at Rest and TLS 1.3 for Data in Transit",
    "Multi-Factor Authentication (MFA) and SSO (SAML/OAuth) Integration",
    "Comprehensive, Immutable Audit Logging of all system actions",
    "Automated Daily Backups and Multi-Region Disaster Recovery",
    "Compliance with GDPR, HIPAA, SOC 2, and India DPDP Act",
  ],
  securityImg: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2000&auto=format&fit=crop",

  caseStudy: {
    client: "Tier-1 Auto Parts Manufacturer — Pune",
    label: "Custom ERP · Manufacturing & Supply Chain",
    challenge: "A rapidly growing manufacturer was managing 3 facilities using a mix of Tally, legacy desktop software, and Excel. Disconnected data caused massive production delays, frequent material stockouts, and financial reporting that was always 3 weeks behind.",
    solution: "WebCodian engineered a unified, cloud-based ERP tailored to their exact manufacturing process. It featured real-time shop-floor data collection via tablets, automated Bill of Materials (BOM) calculation, and seamless integration with Tally for final accounting.",
    result: "Material stockouts were eliminated, increasing production throughput by 22%. The finance team achieved real-time cost-of-goods-sold (COGS) visibility. By escaping per-user licensing fees of equivalent SaaS ERPs, the company saved over ₹1.5 Crores in software costs over 3 years.",
  },

  stats: [
    { metric: "22%", label: "Production Throughput Increase", desc: "Due to optimized material planning" },
    { metric: "₹1.5Cr", label: "Software Costs Saved", desc: "Over 3 years vs. SaaS alternatives" },
    { metric: "100%", label: "Real-Time Visibility", desc: "Across all 3 manufacturing plants" },
    { metric: "Zero", label: "Data Entry Duplication", desc: "Fully unified system architecture" },
  ],

  supportPoints: [
    { title: "Continuous Feature Evolution", desc: "As your business processes change or you enter new markets, we act as your dedicated engineering team to build new modules and capabilities." },
    { title: "Proactive Infrastructure Management", desc: "We handle all AWS/Azure server maintenance, database optimization, and scaling to ensure the system remains lightning-fast as your data grows." },
    { title: "Security & Compliance Updates", desc: "Regular application of security patches, dependency updates, and compliance audits to keep your enterprise data ironclad." },
    { title: "User Training & Onboarding", desc: "Maintaining up-to-date documentation and providing training sessions for new hires to ensure high system adoption rates across the company." },
    { title: "24/7 Priority Support", desc: "Guaranteed SLA-backed response times for any critical system issues, ensuring your operations never experience extended downtime." },
    { title: "Third-Party API Maintenance", desc: "Proactively monitoring and updating integrations (e.g., Payment gateways, Logistics APIs) to ensure they never break when third parties update their systems." },
  ],

  faqs: [
    { q: "Should we buy an off-the-shelf ERP (like SAP/Oracle) or build custom?", a: "Off-the-shelf ERPs are excellent but incredibly rigid and expensive. If you are willing to change your business processes to match the software, buy off-the-shelf. If your unique processes are your competitive advantage, and you want to avoid massive recurring per-user licensing fees, custom is the superior long-term investment." },
    { q: "How long does it take to build a custom ERP or CRM?", a: "We build modularly. A focused, custom CRM can be launched in 3-4 months. A comprehensive ERP covering all departments may take 6-12 months. However, we deploy phase-by-phase (e.g., Sales module first, then Inventory) so you start seeing ROI immediately, rather than waiting a year." },
    { q: "How do we migrate our years of historical data from our old systems?", a: "Data migration is a core part of our process. We build custom ETL (Extract, Transform, Load) scripts to pull data from your legacy databases, spreadsheets, or Tally, clean it, and map it securely into the new system architecture before launch." },
    { q: "What happens if we need to integrate with a new tool in the future?", a: "Because we build your custom CRM/ERP with an 'API-First' architecture, integrating new tools (like a new marketing platform or a specialized logistics provider) is straightforward and fast, unlike the walled gardens of legacy proprietary software." },
  ],

  relatedServices: [
    { label: "Custom Software", href: "/custom-software-development" },
    { label: "Enterprise Software", href: "/enterprise-software" },
    { label: "Business Automation", href: "/business-automation" },
    { label: "Web Application Dev", href: "/web-application-development" },
    { label: "Data Analytics", href: "/data-analytics-and-emerging-technologies" },
  ],

  ctaHeading: "Ready to Unify Your Business Operations?",
  ctaDesc: "Stop fighting with generic software that doesn't understand your business. Partner with WebCodian to engineer a CRM & ERP system built exactly for you.",
};

export default function Page() {
  return <SolutionPageTemplate data={data} />;
}
