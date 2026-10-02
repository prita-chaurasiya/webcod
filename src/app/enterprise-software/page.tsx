import { SolutionPageTemplate, SolutionPageData } from "@/components/SolutionPageTemplate";

const data: SolutionPageData = {
  heroTitle: "Enterprise Software Engineering",
  heroSubtitle: "Mission-critical software architectures designed for massive scale, rigorous compliance, and global deployment. We modernize legacy monoliths and build the robust engines that power enterprise corporations.",
  heroImg: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2000&auto=format&fit=crop",
  breadcrumbLabel: "Enterprise Software",
  category: "Web & Software Solutions",

  overviewHeading: "Software Built for Scale, Security, and Stability",
  overviewText: "In the enterprise tier, software failure is not an inconvenience—it's a multi-million dollar disaster. Enterprise software requires a fundamentally different engineering approach focused on zero-downtime deployments, microservices architecture, strict regulatory compliance, and the ability to process millions of transactions securely. WebCodian partners with large corporations and government entities to engineer the heavy-duty software systems that form the backbone of their global operations.",
  overviewImg: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?q=80&w=2000&auto=format&fit=crop",
  overviewBullets: [
    "High-availability Microservices and Serverless architectures",
    "Legacy Monolith to Microservices migration (Strangler Fig)",
    "Enterprise Service Bus (ESB) and API Gateway engineering",
    "Strict compliance (GDPR, HIPAA, SOC 2, ISO 27001)",
    "DevSecOps and automated CI/CD pipeline implementation",
    "Big Data architecture and real-time data streaming",
  ],

  challenges: [
    { title: "Legacy Monolith Paralysis", desc: "Massive, decades-old codebases where changing a single line of code risks crashing the entire global system, paralyzing innovation." },
    { title: "Data Silos & Fragmentation", desc: "Global branches using different, disconnected software systems, making it impossible to achieve real-time, company-wide financial or operational visibility." },
    { title: "Security & Compliance Risks", desc: "Outdated infrastructure failing modern security audits, exposing the enterprise to catastrophic data breaches and massive regulatory fines." },
    { title: "System Downtime", desc: "Fragile infrastructure that crashes during peak seasonal loads (e.g., Black Friday), resulting in millions of dollars in lost revenue per hour." },
    { title: "High Technical Debt", desc: "Years of rushed 'band-aid' fixes have created a fragile system that requires 80% of the IT budget just to maintain, leaving nothing for innovation." },
    { title: "Talent Acquisition", desc: "Struggling to hire and retain the highly specialized senior cloud architects and DevOps engineers required to manage enterprise scale." },
  ],

  whyPoints: [
    { title: "Microservices Architecture", desc: "We decouple monolithic systems into independent microservices. If one service fails, the rest of the system stays online, ensuring massive resiliency." },
    { title: "Zero-Downtime Deployments", desc: "Implementing advanced CI/CD pipelines (Blue/Green or Canary deployments) allowing you to push updates globally without taking the system offline." },
    { title: "Cloud-Agnostic Engineering", desc: "Building containerized applications (Docker/Kubernetes) that can run on AWS, Azure, GCP, or private clouds, preventing vendor lock-in." },
    { title: "Ironclad Security (DevSecOps)", desc: "Security is integrated into the code pipeline. Automated vulnerability scanning prevents insecure code from ever reaching the production environment." },
    { title: "Global Scalability", desc: "Architectures designed to utilize multi-region cloud deployments, ensuring ultra-low latency for users whether they are in New York or Mumbai." },
    { title: "Seamless Systems Integration", desc: "Building robust API gateways that allow your new custom software to communicate flawlessly with legacy SAP, Oracle, or Salesforce deployments." },
  ],

  solutions: [
    { title: "Legacy Modernization", desc: "Safely strangling legacy mainframes or monolithic apps, migrating them to cloud-native microservices with zero disruption to daily business." },
    { title: "Custom ERP / CRM Systems", desc: "Engineering massive, company-wide operational platforms customized to your specific global supply chain or sales workflows." },
    { title: "API Middleware & Integration", desc: "Building the high-throughput middleware that synchronizes data in real-time across dozens of disparate enterprise applications." },
    { title: "Big Data & Analytics Platforms", desc: "Architecting data lakes and streaming pipelines (Kafka) to process millions of daily events for real-time executive dashboards." },
  ],

  features: [
    { icon: "📦", title: "Docker & Kubernetes", desc: "Containerized deployment ensuring identical environments from development to production, enabling auto-scaling." },
    { icon: "🌐", title: "Multi-Region Cloud", desc: "Deploying active-active server architectures across different geographic regions for maximum disaster recovery protection." },
    { icon: "🔐", title: "Enterprise Identity (IAM)", desc: "Deep integration with Azure AD, Okta, or Ping Identity for secure Single Sign-On (SSO) and granular RBAC." },
    { icon: "🔄", title: "Event-Driven Architecture", desc: "Utilizing Apache Kafka or RabbitMQ for asynchronous, high-throughput communication between microservices." },
    { icon: "📊", title: "Observability & Tracing", desc: "Implementing Datadog, New Relic, or ELK stack for real-time logging, distributed tracing, and infrastructure monitoring." },
    { icon: "☁️", title: "Infrastructure as Code (IaC)", desc: "Using Terraform or AWS CloudFormation to automatically provision and manage identical cloud environments reliably." },
    { icon: "🧪", title: "Automated QA & Load Testing", desc: "Rigorous test-driven development supplemented by extreme load testing (JMeter) to simulate Black Friday traffic levels." },
    { icon: "💾", title: "Polyglot Persistence", desc: "Using the right database for the right job—PostgreSQL for relations, MongoDB for documents, Redis for caching, Neo4j for graphs." },
    { icon: "🛡️", title: "DDoS & WAF Protection", desc: "Enterprise-grade perimeter security via Cloudflare or AWS Shield to automatically mitigate massive DDoS attacks." },
  ],

  benefits: [
    { title: "Unmatched Reliability", desc: "Achieve 99.99% (Four Nines) or higher availability, ensuring your business operations literally never stop." },
    { title: "Agile Feature Rollouts", desc: "Microservices allow independent teams to update specific parts of the software daily, drastically reducing time-to-market for new features." },
    { title: "Reduced IT OpEx", desc: "Cloud auto-scaling means you only pay for the server power you need during peak hours, significantly reducing overall infrastructure costs." },
    { title: "Unified Executive Visibility", desc: "Integrating siloed data into a central data warehouse provides the C-Suite with real-time, accurate global reporting." },
    { title: "Regulatory Peace of Mind", desc: "Built-in compliance architectures ensure you pass stringent industry audits (Financial, Healthcare, Government) effortlessly." },
    { title: "Future-Proof Foundation", desc: "A modern, API-first architecture makes it incredibly easy to integrate future technologies like AI or IoT as they emerge." },
  ],

  techStack: ["Java (Spring Boot)", "C# (.NET Core)", "Go (Golang)", "Node.js", "React / Angular", "Kubernetes / Docker", "Apache Kafka", "PostgreSQL", "Elasticsearch", "AWS / Azure / GCP", "Terraform", "Datadog"],

  process: [
    { step: "01", title: "Enterprise Architecture Review", desc: "Rigorous assessment of existing legacy systems, data flows, compliance requirements, and defining the target cloud architecture." },
    { step: "02", title: "Proof of Concept (PoC)", desc: "Building a small, fully functional slice of the architecture to validate technical feasibility and security models before massive investment." },
    { step: "03", title: "Agile Phased Delivery", desc: "Executing development across multiple specialized squads (frontend, backend, DevOps), delivering working modules in strict 2-week sprints." },
    { step: "04", title: "Zero-Downtime Migration", desc: "Carefully executing the 'Strangler Fig' pattern to slowly route traffic from the legacy system to the new system without business interruption." },
  ],

  industries: ["Banking & Financial Services", "Telecommunications", "Global Logistics & Aviation", "Healthcare Networks", "Large Scale E-Commerce", "Government & Public Sector"],

  aiPoints: [
    { title: "AI-Powered Observability", desc: "Using AI to monitor the millions of logs generated by microservices, automatically predicting and preventing server outages before they happen." },
    { title: "Cognitive Search", desc: "Implementing enterprise-wide AI search that can index and retrieve information from millions of internal documents, emails, and databases instantly." },
    { title: "Algorithmic Fraud Detection", desc: "For financial enterprise software, integrating real-time machine learning models that analyze transactions and block fraud in milliseconds." },
    { title: "Robotic Process Automation (RPA)", desc: "Deploying AI bots that interact with legacy systems (which lack APIs) to automate massive, repetitive data entry tasks." },
    { title: "Generative AI Knowledge Bases", desc: "Training secure, internal LLMs on your proprietary enterprise data to assist employees with HR, legal, or technical queries." },
  ],

  securityTitle: "Defense-in-Depth Enterprise Security",
  securityDesc: "At the enterprise level, a single vulnerability can result in catastrophic financial and reputational damage. We employ a 'Defense-in-Depth' (DiD) strategy, assuming that perimeter breaches will happen, and ensuring internal systems are equally fortified.",
  securityPoints: [
    "Zero-Trust Architecture: Internal microservices must explicitly authenticate to talk to each other (mTLS)",
    "Hardware Security Modules (HSM) for highly sensitive cryptographic key management",
    "Continuous Static and Dynamic Application Security Testing (SAST/DAST) in the CI/CD pipeline",
    "Immutable Infrastructure: Servers are never patched; they are destroyed and redeployed with fixes",
    "Data Loss Prevention (DLP) protocols and automated PII redaction algorithms",
    "Rigorous compliance mapping for GDPR, CCPA, HIPAA, SOC 2 Type II, and PCI-DSS Level 1",
  ],
  securityImg: "https://images.unsplash.com/photo-1535223289827-42f1e9919769?q=80&w=2000&auto=format&fit=crop",

  caseStudy: {
    client: "Global FinTech Payment Processor",
    label: "Enterprise Software · Microservices Migration",
    challenge: "A leading payment gateway was running on a 12-year-old monolithic Java application. During major holiday sales, the system buckled under high transaction volume, causing downtime that cost millions. Deploying new features took 6 weeks due to complex testing requirements.",
    solution: "WebCodian led a 14-month initiative to decompose the monolith into a cloud-native microservices architecture on AWS. We utilized Kubernetes for auto-scaling, Apache Kafka for event streaming, and implemented a fully automated CI/CD pipeline.",
    result: "The system can now process 10,000+ transactions per second. During the next holiday season, uptime remained at 100%. The CI/CD pipeline reduced feature deployment time from 6 weeks to just 4 hours, drastically improving market agility.",
  },

  stats: [
    { metric: "10k+", label: "Transactions Per Second", desc: "Zero performance degradation" },
    { metric: "100%", label: "Holiday Uptime", desc: "Achieved via Kubernetes auto-scaling" },
    { metric: "4h", label: "Deployment Cycle", desc: "Reduced from 6 weeks via CI/CD" },
    { metric: "Zero", label: "Security Breaches", desc: "Protected by DevSecOps pipeline" },
  ],

  supportPoints: [
    { title: "24/7/365 NOC/SOC Operations", desc: "Continuous, around-the-clock monitoring of your infrastructure by our Network and Security Operations Centers to ensure absolute availability." },
    { title: "Disaster Recovery Testing", desc: "Quarterly 'Game Day' exercises where we intentionally simulate catastrophic failures to ensure automated failovers work perfectly." },
    { title: "Dedicated DevOps Teams", desc: "A specialized retainer team focused entirely on optimizing your cloud costs, CI/CD pipelines, and infrastructure performance." },
    { title: "Compliance Auditing Support", desc: "Working alongside your internal risk teams to provide the necessary logs, architectural diagrams, and security proofs for external auditors." },
    { title: "Database Administration (DBA)", desc: "Expert, ongoing tuning of massive SQL and NoSQL clusters to ensure query times remain in the milliseconds as your data grows into petabytes." },
    { title: "Legacy System Decommissioning", desc: "Safe, systematic sunsetting of old servers and software once the new microservices architecture is fully validated in production." },
  ],

  faqs: [
    { q: "What is the difference between standard software and 'Enterprise' software?", a: "Enterprise software is designed for massive scale, extreme fault tolerance, and strict security/compliance. While a standard app might run on a single server, enterprise software uses distributed microservices, multi-region cloud deployments, and messaging queues (like Kafka) to ensure the system never goes down, even if millions of users log in simultaneously." },
    { q: "How do you modernize a legacy system without breaking our current business?", a: "We use the 'Strangler Fig' pattern. We don't turn off the old system overnight. Instead, we build the new modern system alongside it. We slowly route a small percentage of traffic (or specific features) to the new system, testing it rigorously. Over time, the new system 'strangles' the old one until the legacy system can be safely turned off." },
    { q: "Do you have the engineering talent required for this scale?", a: "Yes. Enterprise projects are not staffed by junior developers. WebCodian assigns specialized Cloud Architects, Senior DevOps Engineers, and Security Specialists who have previous experience building highly available systems for Fortune 500 companies." },
    { q: "How long do enterprise modernization projects take?", a: "Enterprise transformations are complex and rarely take less than 6 to 12 months. However, because we use Agile methodology and microservices, you will see working, deployable components delivered incrementally every few weeks, rather than waiting a year for a single massive launch." },
  ],

  relatedServices: [
    { label: "Software Development", href: "/software-development" },
    { label: "Cloud & DevOps", href: "/cloud-deployment-and-devops-services" },
    { label: "API Development", href: "/api-development-and-system-integration" },
    { label: "Data Analytics", href: "/data-analytics-and-emerging-technologies" },
    { label: "AI Solutions", href: "/generative-ai" },
  ],

  ctaHeading: "Ready to Modernize Your Enterprise Architecture?",
  ctaDesc: "Don't let legacy technology slow down your global operations. Partner with WebCodian to architect secure, scalable, cloud-native enterprise software.",
};

export default function Page() {
  return <SolutionPageTemplate data={data} />;
}