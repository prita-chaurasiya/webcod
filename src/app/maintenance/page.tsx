import { SolutionPageTemplate, SolutionPageData } from "@/components/SolutionPageTemplate";

const data: SolutionPageData = {
  heroTitle: "Enterprise Software Maintenance & Support",
  heroSubtitle: "Protect your digital investments. We provide 24/7 proactive monitoring, security patching, performance optimization, and continuous feature development to keep your mission-critical software running flawlessly.",
  heroImg: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2000&auto=format&fit=crop",
  breadcrumbLabel: "Maintenance",
  category: "Systems & Automation",

  overviewHeading: "Software Doesn't Age Like Wine. It Needs Active Management.",
  overviewText: "Launch day is only the beginning of a software product's lifecycle. Without active maintenance, codebases decay, dependencies become vulnerable, and performance degrades under scale. WebCodian provides comprehensive enterprise maintenance and support services for web applications, mobile apps, and custom software. Whether we built it or you are handing over an existing legacy system, we ensure your digital infrastructure remains secure, performant, and aligned with your evolving business goals.",
  overviewImg: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2000&auto=format&fit=crop",
  overviewBullets: [
    "24/7/365 Uptime Monitoring and Incident Response",
    "Security Patching and Dependency Updates",
    "Code Refactoring and Technical Debt Reduction",
    "Performance Tuning (Database Optimization, Caching)",
    "Cloud Infrastructure Management (AWS, Azure, GCP)",
    "Continuous Feature Development and Enhancements",
  ],

  challenges: [
    { title: "Sudden System Outages", desc: "Critical business software crashing during peak hours without warning, costing thousands in lost revenue and damaging customer trust." },
    { title: "Security Vulnerabilities", desc: "Outdated third-party libraries and unpatched frameworks leaving the application exposed to automated hacking scripts and data breaches." },
    { title: "Performance Degradation", desc: "Software that was fast at launch slowing to a crawl a year later as the database grows, frustrating users and reducing productivity." },
    { title: "Loss of Internal Knowledge", desc: "The original developers leaving the company, leaving behind a complex, undocumented codebase that the current IT team is afraid to touch." },
    { title: "Incompatibility with New OS/Browsers", desc: "Mobile apps breaking when Apple or Google release a new OS, or web apps failing in the latest browser updates." },
    { title: "Accumulating Technical Debt", desc: "Quick fixes and 'band-aids' applied over years creating a fragile spaghetti codebase where fixing one bug creates two new ones." },
  ],

  whyPoints: [
    { title: "Guaranteed Business Continuity", desc: "Proactive monitoring catches anomalies before they become outages. If a server does go down, an SLA-backed team is on it instantly." },
    { title: "Risk Mitigation", desc: "Regular application of security patches protects your most valuable asset—your data—from zero-day vulnerabilities and compliance violations." },
    { title: "Predictable IT Budgets", desc: "Fixed-cost maintenance retainers prevent the sudden, massive capital expenditures required to rebuild a system that was allowed to decay." },
    { title: "Extended Software Lifespan", desc: "Continuous refactoring and optimization can extend the viable lifespan of your custom software by years, maximizing your initial ROI." },
    { title: "Focus on Core Business", desc: "Offloading maintenance allows your internal teams to focus on strategic growth initiatives rather than fixing bugs in legacy systems." },
    { title: "Agility for New Features", desc: "A well-maintained, clean codebase allows our engineering team to build and deploy new features requested by the market much faster." },
  ],

  solutions: [
    { title: "Proactive APM Monitoring", desc: "Deploying Application Performance Monitoring (APM) tools like New Relic or Datadog to track memory leaks, slow database queries, and server health in real-time." },
    { title: "Comprehensive Code Audits", desc: "Taking over existing projects by first conducting a deep audit of the architecture, security posture, and technical debt before beginning optimization." },
    { title: "Managed Cloud Infrastructure", desc: "Handling all aspects of AWS/Azure server management, including automated backups, load balancing, autoscaling, and disaster recovery planning." },
    { title: "Dedicated Retainer Teams", desc: "Providing a consistent team of engineers who deeply understand your codebase, available for a set number of hours each month for fixes and new features." },
  ],

  features: [
    { icon: "🚨", title: "24/7 Incident Response", desc: "Automated alerting via PagerDuty/Slack ensuring our L2/L3 engineers begin resolving critical outages within minutes, day or night." },
    { icon: "🛡️", title: "Security Patching", desc: "Routine auditing and updating of NPM/Pip packages, OS libraries, and framework versions to prevent exploit vulnerabilities." },
    { icon: "🏎️", title: "Performance Optimization", desc: "Refactoring slow SQL queries, implementing Redis caching layers, and optimizing frontend assets for sub-second load times." },
    { icon: "🔄", title: "OS & Browser Compatibility", desc: "Proactive updates to ensure your iOS/Android apps or Web applications remain perfectly functional with every new major release." },
    { icon: "💾", title: "Backup & Disaster Recovery", desc: "Automated, encrypted daily backups with tested restore procedures ensuring zero data loss in catastrophic scenarios." },
    { icon: "🧹", title: "Technical Debt Reduction", desc: "Allocating a percentage of monthly hours specifically to clean up legacy code, improve architecture, and update documentation." },
    { icon: "✨", title: "Feature Enhancements", desc: "Agile development of new features, UI/UX improvements, and API integrations based on your evolving business roadmap." },
    { icon: "📊", title: "Monthly Health Reports", desc: "Detailed executive summaries covering uptime metrics, security incidents resolved, tasks completed, and recommendations." },
    { icon: "☁️", title: "Cloud Cost Optimization", desc: "Regular auditing of your AWS/Azure environments to shut down unused resources and optimize infrastructure spending." },
  ],

  benefits: [
    { title: "99.99% Uptime SLAs", desc: "Enterprise-grade reliability ensuring your customers and employees always have access to mission-critical tools." },
    { title: "Zero Security Breaches", desc: "Proactive maintenance is the best defense against data breaches, protecting your brand reputation and compliance status." },
    { title: "Maximum Initial ROI", desc: "By keeping the software modern and performant, we delay the need for a massive 'rip and replace' rebuild by several years." },
    { title: "Faster Feature Velocity", desc: "A clean, well-maintained codebase allows developers to add new features rapidly without breaking existing functionality." },
    { title: "Peace of Mind", desc: "Founders and CTOs can sleep at night knowing a dedicated team is monitoring the servers and ready to respond to any crisis." },
    { title: "Seamless Team Transitions", desc: "We comprehensively document your system, meaning you are never held hostage by the specialized knowledge of a single departing employee." },
  ],

  techStack: ["AWS", "Azure", "GCP", "Datadog", "New Relic", "Sentry", "PagerDuty", "Docker", "Kubernetes", "Node.js", "Python", "React", "PostgreSQL", "Redis"],

  process: [
    { step: "01", title: "System Audit & Onboarding", desc: "We conduct a deep architectural, security, and codebase review of your existing software, documenting all dependencies and infrastructure." },
    { step: "02", title: "Monitoring Setup", desc: "Deploying APM tools, configuring automated alerts for downtime or high error rates, and establishing the incident response protocol." },
    { step: "03", title: "Stabilization (If needed)", desc: "Addressing immediate critical vulnerabilities, fixing broken CI/CD pipelines, and resolving urgent performance bottlenecks." },
    { step: "04", title: "Continuous Maintenance", desc: "Executing the monthly retainer: applying patches, optimizing performance, building new features, and delivering health reports." },
  ],

  industries: ["All Enterprise Sectors", "E-Commerce", "SaaS & Technology", "Financial Services", "Healthcare", "Logistics", "Education", "Government"],

  aiPoints: [
    { title: "AI-Powered Log Analysis", desc: "Using machine learning to ingest millions of server logs, automatically detecting anomalous patterns that precede a system crash before it happens." },
    { title: "Automated Code Review", desc: "Utilizing AI coding assistants to automatically scan pull requests for security vulnerabilities, code smells, and performance issues." },
    { title: "Predictive Resource Scaling", desc: "ML algorithms that learn your application's traffic patterns and preemptively scale cloud infrastructure up *before* a spike hits." },
    { title: "Smart Alert Routing", desc: "AI that analyzes the nature of a system error and automatically routes the alert to the specific engineer best suited to fix it, reducing MTTR (Mean Time To Resolution)." },
    { title: "Automated Documentation", desc: "Using LLMs to automatically generate and update technical documentation as developers push new code, ensuring knowledge is never lost." },
  ],

  securityTitle: "Proactive Security and Compliance Management",
  securityDesc: "Security is not a state; it is a continuous process. New vulnerabilities are discovered daily. Our maintenance plans include aggressive, continuous security management to ensure your enterprise applications remain impenetrable.",
  securityPoints: [
    "Automated Dependency Scanning (Snyk, Dependabot) for zero-day vulnerabilities",
    "Continuous Static Application Security Testing (SAST) on all new code",
    "Regular application of OS-level security patches on cloud instances",
    "SSL/TLS Certificate management and automated renewal",
    "Quarterly access audits and IAM permission reviews",
    "Maintaining compliance with GDPR, HIPAA, and SOC 2 standards",
  ],
  securityImg: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2000&auto=format&fit=crop",

  caseStudy: {
    client: "National Logistics Company",
    label: "Maintenance · Legacy ERP Takeover",
    challenge: "A logistics firm had a custom-built, 6-year-old Node.js/Angular ERP. The original agency vanished. The system was crashing twice a week, order processing took 15 seconds per click, and the AWS bill was spiraling out of control.",
    solution: "WebCodian executed a 3-week deep audit, stabilized the server architecture, and implemented a monthly maintenance retainer. We refactored the most expensive database queries, updated critical security flaws, and optimized their AWS infrastructure.",
    result: "System crashes were eliminated entirely (99.99% uptime achieved). Order processing time dropped from 15 seconds to 0.5 seconds. Through cloud optimization, we reduced their monthly AWS bill by 40%, which covered the cost of our maintenance retainer.",
  },

  stats: [
    { metric: "99.99%", label: "Uptime Achieved", desc: "Up from weekly crashes" },
    { metric: "0.5s", label: "Query Time", desc: "Reduced from 15 seconds" },
    { metric: "40%", label: "AWS Cost Reduction", desc: "Covering the retainer cost" },
    { metric: "Zero", label: "Security Breaches", desc: "Post-takeover" },
  ],

  supportPoints: [
    { title: "Flexible SLA Tiers", desc: "Choose the response time that fits your business—from next-business-day support for internal tools, to 15-minute 24/7 response for mission-critical apps." },
    { title: "Dedicated Account Manager", desc: "A single, technical point of contact who understands your business goals and coordinates all engineering resources." },
    { title: "Transparent Time Tracking", desc: "Full visibility into exactly how your retainer hours are being spent, with access to our Jira/Trello boards." },
    { title: "Rollover Hours", desc: "Didn't use all your maintenance hours this month? Unused hours roll over to the next month for larger feature development pushes." },
    { title: "Emergency 'War Room' Support", desc: "For major marketing events or product launches, we provide dedicated, real-time standby support to ensure zero downtime." },
    { title: "Annual Technology Reviews", desc: "Strategic meetings with our CTOs to discuss major architectural upgrades or shifts required to keep the software viable for the next 3-5 years." },
  ],

  faqs: [
    { q: "We didn't build our software with WebCodian. Can you still maintain it?", a: "Yes. About 40% of our maintenance clients come to us with existing software. We require a 2-4 week 'Audit and Onboarding' phase to fully map the architecture, secure the infrastructure, and understand the code before we can assume SLA responsibility." },
    { q: "What happens if we don't use all our retainer hours in a month?", a: "We believe in fair value. Depending on the contract tier, unused hours can either roll over to the next month or be banked to be used toward a larger feature development project later in the quarter." },
    { q: "What is included in a standard maintenance retainer?", a: "Standard retainers include 24/7 uptime monitoring, server health management, monthly security patching, dependency updates, daily backup verification, and a set block of engineering hours to be used for bug fixes or new features." },
    { q: "How quickly do you respond if the server goes down?", a: "For clients on our Enterprise SLA tier, critical (Severity 1) issues trigger automated alerts to our on-call engineers 24/7, with a guaranteed response time of under 15 minutes." },
  ],

  relatedServices: [
    { label: "Cloud & DevOps", href: "/cloud-deployment-and-devops-services" },
    { label: "Enterprise Software", href: "/enterprise-software" },
    { label: "Custom Software", href: "/custom-software-development" },
    { label: "Web Application Dev", href: "/web-application-development" },
    { label: "Mobile App Dev", href: "/app-development" },
  ],

  ctaHeading: "Protect Your Digital Infrastructure",
  ctaDesc: "Stop worrying about server crashes and security vulnerabilities. Partner with WebCodian for enterprise-grade software maintenance and support.",
};

export default function Page() {
  return <SolutionPageTemplate data={data} />;
}
