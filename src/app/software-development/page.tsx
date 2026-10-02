import { SolutionPageTemplate, SolutionPageData } from "@/components/SolutionPageTemplate";

const data: SolutionPageData = {
  heroTitle: "Enterprise Software Development Solutions",
  heroSubtitle: "We engineer robust, scalable, and secure custom software systems tailored to your unique business workflows, turning complex operational bottlenecks into streamlined digital advantages.",
  heroImg: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2000&auto=format&fit=crop",
  breadcrumbLabel: "Software Development",
  category: "Web & Software Solutions",

  overviewHeading: "Stop Adapting Your Business to Generic Software",
  overviewText: "Off-the-shelf software forces you to change your proven business processes to match the tool. True enterprise software development does the opposite. At WebCodian, we architect custom software solutions from the ground up to map perfectly to your unique workflows. Whether you need to modernize legacy systems, build a massive internal ERP, or launch a complex SaaS platform, our engineering teams deliver scalable, high-performance code.",
  overviewImg: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2000&auto=format&fit=crop",
  overviewBullets: [
    "Full-lifecycle custom software engineering",
    "Legacy system modernization and cloud migration",
    "API development and enterprise systems integration",
    "Cloud-native microservices architecture",
    "SaaS product development for startups and enterprises",
    "Dedicated offshore development teams",
  ],

  challenges: [
    { title: "Rigid Legacy Systems", desc: "Aging infrastructure that requires constant maintenance, fails under high load, and cannot integrate with modern cloud APIs." },
    { title: "Siloed Data Operations", desc: "Different departments using disconnected software, requiring manual data entry and preventing unified executive visibility." },
    { title: "Expensive Vendor Lock-In", desc: "Paying astronomical, recurring per-user licensing fees for SaaS platforms that only solve 60% of your business problems." },
    { title: "Security Vulnerabilities", desc: "Outdated software exposing your company to severe data breaches, ransomware, and compliance violations." },
    { title: "Failed Agile Deliveries", desc: "Working with vendors who overpromise, miss deadlines, and deliver buggy software due to poor project management." },
    { title: "Unscalable Architecture", desc: "Software that works for 100 users but crashes completely when your business attempts to scale to 10,000 users." },
  ],

  whyPoints: [
    { title: "100% IP Ownership", desc: "Unlike SaaS platforms, you own the source code outright. No per-user licensing fees, giving you a massive long-term cost advantage." },
    { title: "Perfect Workflow Alignment", desc: "We map your exact business logic before writing a line of code, ensuring the software enhances your current processes rather than disrupting them." },
    { title: "Cloud-Native Scalability", desc: "We build on AWS and Azure using microservices and serverless architectures, ensuring your software can handle sudden traffic spikes effortlessly." },
    { title: "Ironclad Security", desc: "Enterprise-grade encryption, role-based access controls, and compliance with GDPR, HIPAA, and SOC 2 standards are built in by default." },
    { title: "Transparent Agile Delivery", desc: "Two-week sprints, continuous integration, and regular demos mean you see working software rapidly and can pivot requirements as needed." },
    { title: "Seamless Integration", desc: "We engineer robust APIs to ensure your new custom software communicates flawlessly with your existing CRM, ERP, and payment systems." },
  ],

  solutions: [
    { title: "Custom Enterprise Systems", desc: "Building massive, data-heavy internal tools, custom ERPs, and operational dashboards that streamline your entire company." },
    { title: "SaaS Product Development", desc: "Engineering multi-tenant, subscription-based cloud platforms for founders looking to disrupt their industries." },
    { title: "Legacy Modernization", desc: "Carefully refactoring and migrating outdated on-premise software into modern, cloud-native architectures without losing data." },
    { title: "API & Middleware Engineering", desc: "Building the invisible 'glue' that connects disparate enterprise systems, ensuring real-time data synchronization." },
  ],

  features: [
    { icon: "⚡", title: "Microservices Architecture", desc: "Decoupled backend services that allow different parts of your application to scale independently." },
    { icon: "☁️", title: "Cloud Deployment", desc: "Infrastructure as Code (IaC) deployment on AWS, Azure, or GCP for maximum reliability and 99.99% uptime." },
    { icon: "🔒", title: "Advanced Security", desc: "End-to-end encryption, OAuth2 SSO integration, and rigorous OWASP Top 10 vulnerability mitigation." },
    { icon: "📊", title: "Real-Time BI Dashboards", desc: "Custom data visualization giving executives instant insight into operational KPIs and financial metrics." },
    { icon: "🔄", title: "CI/CD Pipelines", desc: "Automated testing and deployment pipelines that allow us to push new features to production safely and rapidly." },
    { icon: "📱", title: "Responsive & Accessible", desc: "Web-based software that works flawlessly on desktop, tablet, and mobile, adhering to WCAG accessibility standards." },
    { icon: "🧩", title: "Third-Party Integrations", desc: "Deep integrations with Stripe, Twilio, Salesforce, SAP, and any other REST/GraphQL APIs your business requires." },
    { icon: "💾", title: "High-Performance Databases", desc: "Optimized PostgreSQL, MongoDB, or Redis architectures designed to query massive datasets in milliseconds." },
    { icon: "🤖", title: "AI/ML Readiness", desc: "Data structures designed specifically to feed into machine learning models for future predictive analytics." },
  ],

  benefits: [
    { title: "Massive Operational Savings", desc: "Automating manual workflows through custom software typically reclaims thousands of hours of wasted employee time annually." },
    { title: "Competitive Advantage", desc: "Proprietary software allows you to deliver faster service, better insights, or unique features that your competitors simply cannot match." },
    { title: "Elimination of Licensing Costs", desc: "Replacing expensive SaaS subscriptions with owned software delivers a massive ROI over a 3-5 year horizon." },
    { title: "Higher Data Quality", desc: "Unified systems eliminate double data entry and departmental silos, ensuring leadership can trust their reports." },
    { title: "Agility to Pivot", desc: "When market conditions change, you aren't waiting on a vendor's roadmap. You control the software and can add features instantly." },
    { title: "Increased Valuation", desc: "Companies that own their proprietary technology stack command significantly higher valuations during M&A." },
  ],

  techStack: ["Java / Spring Boot", "Node.js", "Python / Django", "C# / .NET", "React.js", "Angular", "PostgreSQL", "MongoDB", "Redis", "Kafka", "Docker", "Kubernetes", "AWS / Azure", "GraphQL"],

  process: [
    { step: "01", title: "Discovery & Blueprinting", desc: "Deep-dive workshops to document business logic, define user roles, and architect the database schema and cloud infrastructure." },
    { step: "02", title: "UI/UX Prototyping", desc: "Designing intuitive, high-fidelity interfaces in Figma to ensure the software is highly usable before we write backend code." },
    { step: "03", title: "Agile Engineering", desc: "Building the software in two-week sprints, giving you continuous visibility and working software to test throughout development." },
    { step: "04", title: "Testing, QA & Launch", desc: "Rigorous automated testing, security audits, and load testing before a phased rollout and comprehensive team training." },
  ],

  industries: ["Finance & FinTech", "Healthcare & MedTech", "Logistics & Supply Chain", "Manufacturing", "E-Commerce", "Education (EdTech)", "Real Estate", "Government"],

  aiPoints: [
    { title: "Predictive Analytics Integration", desc: "Building machine learning models directly into your custom software to forecast sales, inventory needs, or equipment maintenance." },
    { title: "Natural Language Processing (NLP)", desc: "Allowing users to query your massive database using natural language (e.g., 'Show me last quarter's sales in Mumbai')." },
    { title: "Automated Document Extraction", desc: "Using OCR and AI to automatically read uploaded PDFs or invoices and populate the database, eliminating manual data entry." },
    { title: "Intelligent Workflow Routing", desc: "AI that analyzes an incoming task or support ticket and automatically routes it to the correct department based on context." },
    { title: "Code Generation for Faster Delivery", desc: "Our engineers utilize enterprise AI coding assistants to write boilerplate code faster, reducing your overall project timeline and budget." },
  ],

  securityTitle: "Enterprise-Grade Security Architecture",
  securityDesc: "Custom software often houses a company's most critical intellectual property and customer data. We engineer our software with a Zero-Trust security model, ensuring that every layer—from the database to the API to the frontend—is ironclad.",
  securityPoints: [
    "Strict Role-Based Access Control (RBAC) and Single Sign-On (SSO)",
    "Data Encryption at Rest (AES-256) and in Transit (TLS 1.3)",
    "Automated Static Application Security Testing (SAST) in CI/CD",
    "Comprehensive audit logging of all system access and modifications",
    "Compliance architecture for GDPR, HIPAA, SOC 2, and PCI-DSS",
    "Dynamic data masking for sensitive PII in non-production environments",
  ],
  securityImg: "https://images.unsplash.com/photo-1510511459012-914015da9c68?q=80&w=2000&auto=format&fit=crop",

  caseStudy: {
    client: "National Logistics Provider",
    label: "Software Development · Custom ERP",
    challenge: "A logistics company with 1,200 employees was running their entire operation on a patchwork of Excel spreadsheets and a 15-year-old legacy desktop app. Data syncing took 24 hours, leading to massive billing errors and lost shipments.",
    solution: "WebCodian architected a unified, cloud-native ERP using Node.js, React, and PostgreSQL on AWS. We built a microservices architecture to handle real-time fleet tracking, automated invoicing, and a mobile app for drivers.",
    result: "Data synchronization became instant. Billing errors were reduced by 94%, fleet utilization increased by 18%, and the company saved over $400,000 annually by retiring their expensive legacy software licenses.",
  },

  stats: [
    { metric: "94%", label: "Reduction in Billing Errors", desc: "Due to unified data architecture" },
    { metric: "18%", label: "Fleet Utilization Increase", desc: "Driven by real-time analytics" },
    { metric: "$400k", label: "Annual Licensing Savings", desc: "By owning the software IP" },
    { metric: "0", label: "Downtime Incidents", desc: "Since migrating to AWS Cloud" },
  ],

  supportPoints: [
    { title: "24/7 SLA-Backed Support", desc: "Continuous monitoring of server health, database performance, and API uptime with guaranteed emergency response times." },
    { title: "Continuous Feature Development", desc: "Monthly engineering retainers to act as your dedicated tech team, continuously adding new features as your business evolves." },
    { title: "Security Patching", desc: "Proactive updating of all third-party libraries, frameworks, and OS dependencies to protect against zero-day vulnerabilities." },
    { title: "Performance Tuning", desc: "Regular database indexing, query optimization, and infrastructure scaling to ensure the software remains fast as data volume grows." },
    { title: "User Training", desc: "Comprehensive documentation and ongoing training sessions for your staff to ensure maximum adoption of the new system." },
    { title: "Cloud Cost Optimization", desc: "Quarterly reviews of your AWS/Azure architecture to ensure you aren't overpaying for unused cloud resources." },
  ],

  faqs: [
    { q: "How much does custom software development cost?", a: "Costs vary wildly based on complexity. A simple internal portal might cost ₹5L-10L, while a massive enterprise ERP could range from ₹30L-1Cr+. We provide fixed-cost proposals after a detailed discovery phase to eliminate budget surprises." },
    { q: "Who owns the software and the code once it's finished?", a: "You do. Upon final payment, 100% of the Intellectual Property (IP), source code, and infrastructure access is transferred to your company. You are not locked into WebCodian." },
    { q: "How do you ensure the software won't become obsolete in 5 years?", a: "We strictly use modern, widely supported, open-source technologies (like React, Node, Python, Java) backed by massive communities. We also utilize microservices architecture, which allows you to update or replace single parts of the software without rebuilding the whole system." },
    { q: "We have an existing system. Can you integrate the new software with it?", a: "Yes. Integration is a core part of enterprise software development. We build custom APIs and middleware to ensure the new software can read and write data seamlessly to your legacy systems, CRMs, or ERPs." },
  ],

  relatedServices: [
    { label: "Custom Software", href: "/custom-software-development" },
    { label: "Enterprise Software", href: "/enterprise-software" },
    { label: "Web Application Dev", href: "/web-application-development" },
    { label: "Business Automation", href: "/business-automation" },
    { label: "Data Analytics", href: "/data-analytics-and-emerging-technologies" },
  ],

  ctaHeading: "Ready to Build Software That Fits Your Business?",
  ctaDesc: "Stop compromising with generic tools. Partner with WebCodian to engineer scalable, secure, custom software that drives true operational efficiency.",
};

export default function Page() {
  return <SolutionPageTemplate data={data} />;
}
