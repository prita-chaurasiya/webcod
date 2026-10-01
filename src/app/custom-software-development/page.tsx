import { SolutionPageTemplate, SolutionPageData } from "@/components/SolutionPageTemplate";

const data: SolutionPageData = {
  heroTitle: "Bespoke Custom Software Development",
  heroSubtitle: "Transform your unique operational challenges into a competitive advantage. We engineer 100% custom software systems designed specifically for your business logic, built to scale infinitely.",
  heroImg: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2000&auto=format&fit=crop",
  breadcrumbLabel: "Custom Software",
  category: "Web & Software Solutions",

  overviewHeading: "Software Engineered Exclusively for You",
  overviewText: "When off-the-shelf software falls short, businesses are forced into inefficient workarounds, manual data entry, and fragmented operations. Custom software development is the ultimate solution. WebCodian engineers bespoke platforms that map directly to your unique workflows. From specialized inventory algorithms to complex multi-party portals, we build proprietary digital assets that increase your company's valuation and drastically reduce operational overhead.",
  overviewImg: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2000&auto=format&fit=crop",
  overviewBullets: [
    "100% bespoke architecture tailored to your workflows",
    "No recurring per-user vendor licensing fees",
    "Complete ownership of intellectual property (IP)",
    "Seamless integration with your legacy systems",
    "Highly secure, scalable, and cloud-native",
    "Built for rapid feature expansion as you grow",
  ],

  challenges: [
    { title: "Generic Software Limitations", desc: "Using SaaS products that only solve 70% of your problems, forcing your staff to use Excel spreadsheets to manage the remaining 30%." },
    { title: "Manual Data Entry", desc: "Employees wasting thousands of hours copying data between disconnected systems because off-the-shelf tools refuse to integrate properly." },
    { title: "Exorbitant Licensing Costs", desc: "Paying tens of thousands of dollars a month in per-seat licenses for software features your team doesn't even use." },
    { title: "Lack of Competitive Edge", desc: "Using the exact same software as your competitors, making it impossible to offer a faster or more unique digital experience to your customers." },
    { title: "Vendor Lock-In", desc: "Being held hostage by a software vendor who unexpectedly raises prices or deprecates the specific feature your business relies on." },
    { title: "Compliance Headaches", desc: "Struggling to meet strict regional data privacy laws because generic global software vendors won't allow custom data residency." },
  ],

  whyPoints: [
    { title: "Total IP Ownership", desc: "You own the source code. This proprietary technology becomes an asset on your balance sheet, significantly increasing your company's M&A valuation." },
    { title: "Zero Licensing Fees", desc: "Whether you have 10 employees or 10,000, you never pay a per-user licensing fee. The ROI of custom software compounds massively over time." },
    { title: "Perfect Process Alignment", desc: "We map your exact business logic. The software works the way you do, minimizing employee training time and eliminating workflow friction." },
    { title: "Limitless Integration", desc: "Because we wrote the code, we can build custom APIs to connect your new software to any legacy system, ERP, or hardware device." },
    { title: "Uncompromised Security", desc: "We implement specialized security protocols, custom encryption, and precise role-based access controls that generic software simply cannot offer." },
    { title: "Agility & Control", desc: "You control the roadmap. If the market shifts, we can immediately pivot development to add a new feature, rather than waiting for a vendor's update." },
  ],

  solutions: [
    { title: "Custom Internal Tools", desc: "Building specialized dashboards, admin panels, and data-entry systems that drastically speed up back-office operations." },
    { title: "Bespoke CRM & ERP Systems", desc: "Engineering massive, interconnected platforms that manage your entire customer lifecycle, inventory, and financials exactly how you want." },
    { title: "Proprietary SaaS Products", desc: "Partnering with founders to engineer, launch, and scale their unique Software-as-a-Service concepts into profitable businesses." },
    { title: "Hardware-Integrated Software", desc: "Developing software that communicates directly with IoT devices, factory machinery, or specialized medical equipment." },
  ],

  features: [
    { icon: "🎨", title: "Custom UI/UX", desc: "Interfaces designed specifically for your users' technical proficiency, maximizing adoption rates." },
    { icon: "⚙️", title: "Complex Algorithms", desc: "Engineering proprietary matching, routing, or pricing algorithms that give you a unique market advantage." },
    { icon: "🔄", title: "Custom API Gateways", desc: "Building secure middleware to ensure flawless data synchronization across your entire tech stack." },
    { icon: "☁️", title: "Cloud-Agnostic Hosting", desc: "Architecture designed to run on AWS, Azure, GCP, or your own on-premise servers based on your compliance needs." },
    { icon: "📊", title: "Advanced Reporting", desc: "Custom data visualization giving your executives exactly the BI metrics they need to make decisions." },
    { icon: "🔐", title: "Granular Permissions", desc: "Deep Role-Based Access Control (RBAC) ensuring employees only see the exact data required for their job." },
    { icon: "📱", title: "Omnichannel Access", desc: "Progressive Web Apps (PWAs) and native mobile apps ensuring your team can work securely from the field." },
    { icon: "🌍", title: "Multi-Tenant Architecture", desc: "Secure data isolation protocols for SaaS applications serving thousands of distinct client organizations." },
    { icon: "🧪", title: "Automated QA", desc: "Comprehensive test-driven development (TDD) ensuring new features never break existing functionality." },
  ],

  benefits: [
    { title: "Massive Efficiency Gains", desc: "Custom software regularly reduces administrative processing time by 40-70% by automating specialized manual tasks." },
    { title: "Higher Profit Margins", desc: "Eliminating recurring software licenses directly impacts your bottom line, paying for the custom development within 2-3 years." },
    { title: "Improved Customer Satisfaction", desc: "Custom portals provide your clients with a seamless, branded experience that off-the-shelf software cannot match." },
    { title: "Data Driven Leadership", desc: "Unified systems provide a single source of truth, allowing executives to make decisions based on real-time, accurate data." },
    { title: "Scalable Growth", desc: "Cloud-native architecture means your software won't crash when you open a new branch or double your user base." },
    { title: "Enhanced Security Posture", desc: "Hackers target widely used commercial software. Proprietary, isolated systems offer a significantly smaller attack surface." },
  ],

  techStack: ["Node.js", "Python / Django", "Go", "React.js", "Vue.js", "PostgreSQL", "MongoDB", "Elasticsearch", "AWS", "Docker", "Kubernetes", "GraphQL", "Redis", "RabbitMQ"],

  process: [
    { step: "01", title: "Requirements Elicitation", desc: "Deep workshops with your stakeholders to document exactly how your business operates and where the pain points lie." },
    { step: "02", title: "Architecture & Wireframing", desc: "Designing the database schema, cloud infrastructure, and creating clickable prototypes to validate the user experience." },
    { step: "03", title: "Iterative Development", desc: "Writing clean, documented code in agile sprints, providing you with working software every two weeks for feedback." },
    { step: "04", title: "Deployment & Training", desc: "Rigorous testing, seamless migration of legacy data, and comprehensive training for your team upon launch." },
  ],

  industries: ["Healthcare & Life Sciences", "Logistics & Supply Chain", "Financial Services", "Manufacturing", "Legal Technology", "Real Estate", "Education", "Retail"],

  aiPoints: [
    { title: "Custom AI Models", desc: "Training bespoke machine learning models on your proprietary company data to uncover insights generic AI cannot see." },
    { title: "Automated Anomaly Detection", desc: "Integrating algorithms that constantly monitor your custom system's data to instantly flag fraudulent transactions or operational errors." },
    { title: "Conversational Interfaces", desc: "Adding NLP (Natural Language Processing) so executives can simply ask the software for a report rather than navigating complex menus." },
    { title: "Smart Scheduling", desc: "AI optimization for logistics or field services, automatically calculating the most efficient routes and schedules for your workforce." },
    { title: "Predictive Maintenance", desc: "For manufacturing software, AI that predicts when a machine is likely to fail before it happens, saving massive downtime." },
  ],

  securityTitle: "Custom Security for Custom Software",
  securityDesc: "When you build custom software, you are fully responsible for its security. WebCodian's engineering teams follow strict DevSecOps protocols, ensuring your proprietary platform is hardened against attacks from day one.",
  securityPoints: [
    "Zero-Trust Architecture principles applied across all microservices",
    "Data encryption at rest (AES-256) and in transit (TLS 1.3+)",
    "Strict implementation of the OWASP Top 10 security guidelines",
    "Regular third-party Vulnerability Assessment & Penetration Testing (VAPT)",
    "Compliance mapping for HIPAA, GDPR, SOC 2, and PCI-DSS",
    "Automated backup and disaster recovery (DR) protocols",
  ],
  securityImg: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?q=80&w=2000&auto=format&fit=crop",

  caseStudy: {
    client: "Specialized Healthcare Provider",
    label: "Custom Software · Patient Management",
    challenge: "A specialized clinic network was paying $12,000/month for an off-the-shelf EHR system that didn't support their unique treatment protocols. Doctors were forced to use paper forms for specific procedures, which were later manually typed into the system.",
    solution: "WebCodian engineered a 100% custom, HIPAA-compliant patient management system using React, Node.js, and PostgreSQL. We built custom digital forms that mapped exactly to their clinical workflows and integrated billing via Stripe.",
    result: "The custom software eliminated all paper processes, saving doctors 1.5 hours a day. The clinic saved $144,000 annually in licensing fees, and the streamlined billing API reduced delayed payments by 42%.",
  },

  stats: [
    { metric: "$144k", label: "Annual Licensing Saved", desc: "Direct bottom-line impact" },
    { metric: "1.5h", label: "Time Saved Per Doctor/Day", desc: "Eliminating manual entry" },
    { metric: "42%", label: "Reduction in Delayed Payments", desc: "Via custom billing API" },
    { metric: "100%", label: "HIPAA Compliant", desc: "Secure custom architecture" },
  ],

  supportPoints: [
    { title: "Dedicated Engineering Retainers", desc: "Our team remains available post-launch to continuously develop new features as your business operations evolve." },
    { title: "Proactive Security Patching", desc: "We continuously monitor and update the open-source libraries used in your custom software to prevent security vulnerabilities." },
    { title: "Infrastructure Management", desc: "We handle the AWS/GCP server hosting, load balancing, and database optimization, ensuring the software remains blazing fast." },
    { title: "Bug Fixing & Maintenance", desc: "Strict SLA-backed guarantees for identifying and resolving any bugs that arise in production environments." },
    { title: "Scaling Architecture", desc: "As your user base grows from 1,000 to 100,000, we optimize the database indexes and cloud resources to handle the load." },
    { title: "Comprehensive Documentation", desc: "Maintaining detailed technical documentation so your internal IT team can easily understand and support the codebase if needed." },
  ],

  faqs: [
    { q: "Is custom software development more expensive than buying SaaS?", a: "Initially, yes. Custom development requires a capital expenditure upfront. However, over a 3-5 year period, custom software is almost always significantly cheaper because you completely eliminate recurring per-user licensing fees." },
    { q: "Will I own the intellectual property?", a: "Absolutely. Once the project is completed and paid for, WebCodian transfers 100% ownership of the source code and Intellectual Property to your company." },
    { q: "What happens if we need to change requirements during development?", a: "We use an Agile development methodology. We work in two-week sprints, meaning we expect and welcome changing requirements. You have complete visibility and the ability to pivot the project direction at the start of every sprint." },
    { q: "How do you ensure the software won't break if WebCodian is no longer around?", a: "We build using the world's most popular open-source frameworks (React, Node, Python, Java). This means there are millions of developers globally who can read and maintain our code. We also provide thorough technical documentation and codebase comments." },
  ],

  relatedServices: [
    { label: "Software Development", href: "/software-development" },
    { label: "Enterprise Software", href: "/enterprise-software" },
    { label: "API Development", href: "/api-development-and-system-integration" },
    { label: "Business Automation", href: "/business-automation" },
    { label: "Cloud & DevOps", href: "/cloud-deployment-and-devops-services" },
  ],

  ctaHeading: "Ready to Build Your Digital Advantage?",
  ctaDesc: "Stop adapting to generic software. Partner with WebCodian to engineer a proprietary, custom solution that perfectly fits your business.",
};

export default function Page() {
  return <SolutionPageTemplate data={data} />;
}
