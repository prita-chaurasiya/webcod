import { SolutionPageTemplate, SolutionPageData } from "@/components/SolutionPageTemplate";

const data: SolutionPageData = {
  heroTitle: "Enterprise Digital Product Strategy & Engineering",
  heroSubtitle: "Transform bold ideas into market-dominating software. From rapid MVP development to enterprise-scale digital platforms, we engineer products that solve real problems, delight users, and drive massive revenue.",
  heroImg: "https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?q=80&w=2000&auto=format&fit=crop",
  breadcrumbLabel: "Digital Product",
  category: "Web & Software Solutions",

  overviewHeading: "Building Digital Products That Win Markets",
  overviewText: "Building software is easy; building a successful digital product is incredibly hard. It requires a delicate balance of user-centric design, robust technical architecture, and a ruthless focus on business viability. WebCodian acts as your complete product engineering partner. We don't just write code—we help you validate the market, design the UX, architect the scalable backend, launch the MVP, and iterate based on actual user data.",
  overviewImg: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2000&auto=format&fit=crop",
  overviewBullets: [
    "End-to-End Product Strategy and Roadmap Development",
    "Rapid Minimum Viable Product (MVP) Engineering",
    "UI/UX Design, Wireframing, and Interactive Prototyping",
    "Scalable Cloud-Native Architecture (AWS/Azure/Vercel)",
    "Go-To-Market Technical Support and Analytics Integration",
    "Continuous Product Iteration and Feature Scaling",
  ],

  challenges: [
    { title: "Building Features Nobody Wants", desc: "Spending millions of rupees and months of development time building a massive product without validating if the market actually needs or will pay for it." },
    { title: "Poor User Experience (UX)", desc: "Technically functional software that fails in the market because it is clunky, unintuitive, and ignores modern design paradigms." },
    { title: "Unscalable Architectures", desc: "Products built hastily by freelancers or cheap agencies that collapse under the weight of real traffic, requiring a complete, expensive rewrite to scale." },
    { title: "Scope Creep & Blown Budgets", desc: "Lack of clear product management resulting in endless feature additions, pushing launch dates back by months and draining the budget." },
    { title: "Zero Analytics or Feedback Loops", desc: "Launching a product without integrating the analytics required to understand how users are interacting with it, making it impossible to iterate effectively." },
    { title: "Lack of Technical Leadership", desc: "Founders struggling to manage the technical complexities of cloud infrastructure, security, and modern tech stacks without a CTO." },
  ],

  whyPoints: [
    { title: "Validate Before You Build", desc: "Our product strategy focuses on validating core assumptions through prototypes and MVPs, ensuring you only invest heavy engineering resources into proven concepts." },
    { title: "Speed to Market", desc: "By ruthlessly prioritizing the core feature set, we get your MVP into the hands of real users in weeks—not years—allowing you to start generating revenue quickly." },
    { title: "Enterprise-Grade Foundations", desc: "We build the MVP fast, but we build it on scalable technologies (React, Next.js, Node, PostgreSQL). You won't need to rewrite your code when you hit 10,000 users." },
    { title: "User-Obsessed Design", desc: "Great design is a competitive advantage. We engineer intuitive, frictionless user interfaces that drive adoption, retention, and lower support costs." },
    { title: "Data-Driven Iteration", desc: "We integrate comprehensive analytics from day one. Every post-launch decision is guided by hard data on how users are actually interacting with your product." },
    { title: "Your Fractional CTO", desc: "We act as your technical co-founder. We handle the architecture, security, scaling, and team management, allowing you to focus purely on sales and business growth." },
  ],

  solutions: [
    { title: "Product Discovery & Strategy", desc: "Intensive workshops to define the product vision, target personas, core value proposition, and the prioritized feature roadmap for V1." },
    { title: "UI/UX & Prototyping", desc: "Developing interactive Figma prototypes that allow you to test the user flow and secure investor buy-in before writing a single line of code." },
    { title: "Agile MVP Engineering", desc: "Rapid, 8-12 week sprint-based development of the Minimum Viable Product, focusing purely on features that deliver immediate value to the user." },
    { title: "Product Scaling & Maintenance", desc: "Post-launch engineering to add complex features, optimize performance, scale cloud infrastructure, and ensure 99.9% uptime as your user base grows." },
  ],

  features: [
    { icon: "🎯", title: "Product Strategy Roadmap", desc: "Clear documentation of product goals, user personas, competitive analysis, and a phased rollout plan." },
    { icon: "🎨", title: "Figma Prototyping", desc: "High-fidelity, clickable prototypes for user testing and stakeholder approval prior to development." },
    { icon: "⚛️", title: "Modern Web/Mobile Tech Stack", desc: "Development using Next.js, React, React Native, or Flutter for premium, app-like experiences." },
    { icon: "☁️", title: "Scalable Cloud Architecture", desc: "Serverless or containerized deployment on AWS or Vercel, designed to scale automatically with traffic." },
    { icon: "💳", title: "Monetization & Billing", desc: "Integration with Stripe or Razorpay for complex SaaS subscriptions, tiered billing, or marketplace payouts." },
    { icon: "📊", title: "Product Analytics Setup", desc: "Deep integration with Mixpanel, Amplitude, or PostHog to track user journeys, feature usage, and drop-off points." },
    { icon: "🤖", title: "AI Capabilities", desc: "Integration of Generative AI, LLMs, or predictive machine learning models to give your product a distinct competitive edge." },
    { icon: "🛡️", title: "Security & Compliance", desc: "Implementation of GDPR-compliant data practices, AES-256 encryption, and robust authentication (Auth0/NextAuth)." },
    { icon: "🔄", title: "CI/CD Deployment", desc: "Automated testing and continuous integration pipelines allowing for rapid, daily feature releases without downtime." },
  ],

  benefits: [
    { title: "Lower Risk of Failure", desc: "By validating assumptions early and launching iteratively, you drastically reduce the risk of building a product the market doesn't want." },
    { title: "Faster Revenue Generation", desc: "A rapid MVP launch gets your product into the market generating subscription or transaction revenue months earlier than traditional development." },
    { title: "Higher User Retention", desc: "Products designed with a focus on UX and performance naturally retain users longer and generate more organic referrals." },
    { title: "Easier Fundraising", desc: "Investors fund traction, not ideas. A polished, functioning MVP with early active users makes securing Seed or Series A funding significantly easier." },
    { title: "Predictable Development Costs", desc: "Our agile process and strict scope management for the MVP ensure that your project stays within budget." },
    { title: "Focus on Your Core Business", desc: "Offloading the complex technical execution to our expert team allows founders to focus entirely on marketing, sales, and strategy." },
  ],

  techStack: ["Next.js", "React", "React Native", "Flutter", "Node.js", "Python", "PostgreSQL", "MongoDB", "Figma", "Stripe", "AWS", "Vercel", "Mixpanel", "Docker"],

  process: [
    { step: "01", title: "Discovery & UX Design", desc: "We define the core problem, map the user journey, and create interactive Figma prototypes to finalize the product's look and feel." },
    { step: "02", title: "Architecture & Planning", desc: "Our architects design the database schema, select the optimal tech stack, and plan the cloud infrastructure for future scalability." },
    { step: "03", title: "Agile Development", desc: "We build the product in 2-week sprints, providing you with continuous updates and working software to review at every step." },
    { step: "04", title: "Launch, Analyze & Iterate", desc: "We deploy the product, monitor the analytics to see how real users behave, and immediately begin iterating on the next phase of features." },
  ],

  industries: ["SaaS & Software", "FinTech", "HealthTech & MedTech", "EdTech", "E-Commerce & Marketplaces", "PropTech", "HR & Recruiting", "Creator Economy"],

  aiPoints: [
    { title: "AI-First Product Design", desc: "We don't just bolt an AI chatbot onto an old app. We rethink the core product experience assuming AI is the primary interface, creating magical user experiences." },
    { title: "Predictive Personalization", desc: "Using machine learning to analyze user behavior within the app and automatically customize their dashboard, content, or recommendations." },
    { title: "Automated Onboarding", desc: "AI agents that guide new users through complex software setups, answering their questions contextually and reducing time-to-value." },
    { title: "Generative Workflows", desc: "Products that do the work for the user—e.g., generating first drafts of reports, code, or designs based on minimal inputs." },
    { title: "Continuous Learning", desc: "Building feedback loops into the product so that every time a user corrects an AI output, the underlying model improves for everyone." },
  ],

  securityTitle: "Enterprise Security for Digital Products",
  securityDesc: "A data breach can kill a digital product before it even gains traction. We engineer security into the foundation of your product, ensuring user data is protected, compliance is met, and investor confidence is maintained.",
  securityPoints: [
    "Secure Authentication (OAuth2, SAML, Multi-Factor Authentication)",
    "Data Encryption at Rest (AES-256) and in Transit (TLS 1.3)",
    "Strict Role-Based Access Control (RBAC) and Multi-Tenant Isolation",
    "OWASP Top 10 Vulnerability Mitigation built into the CI/CD pipeline",
    "Compliance readiness for GDPR, CCPA, and SOC 2",
    "Automated Dependency Scanning to prevent supply chain attacks",
  ],
  securityImg: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=2000&auto=format&fit=crop",

  caseStudy: {
    client: "FinTech Startup — Singapore & India",
    label: "Digital Product · B2B Payment Platform",
    challenge: "A startup founder had secured pre-seed funding for a cross-border B2B payment platform. They needed a highly secure MVP built within 12 weeks to present to Series A investors, but lacked an internal engineering team.",
    solution: "WebCodian acted as their fractional engineering team. We designed the UX, built a Next.js/Node.js platform, integrated complex KYC/AML APIs, and engineered a highly secure AWS infrastructure.",
    result: "The MVP launched in 11 weeks. The flawless UX and robust security architecture allowed the founder to onboard their first 50 enterprise clients, successfully closing a $2.5M Series A round shortly after.",
  },

  stats: [
    { metric: "11 Wks", label: "Time to Market", desc: "From concept to live MVP" },
    { metric: "$2.5M", label: "Funding Secured", desc: "Series A raised post-launch" },
    { metric: "50+", label: "Enterprise Clients", desc: "Onboarded in month one" },
    { metric: "100%", label: "IP Ownership", desc: "Fully transferred to the founder" },
  ],

  supportPoints: [
    { title: "Product Analytics Review", desc: "Monthly strategic meetings where we analyze user data (Mixpanel/Amplitude) to identify bottlenecks and plan the next sprint's features." },
    { title: "Infrastructure Scaling", desc: "Proactive management of your cloud servers and databases to ensure the product remains lightning-fast as your active user base grows." },
    { title: "Continuous Feature Delivery", desc: "Dedicated monthly engineering retainers to continually build, test, and release new features to your users without disruption." },
    { title: "Bug Fixing & SLA", desc: "Guaranteed, rapid response times for any critical production bugs, ensuring your users maintain trust in the platform." },
    { title: "Security Updates", desc: "Regular application of patches and dependency updates to protect your product against newly discovered zero-day vulnerabilities." },
    { title: "Technology Strategy", desc: "Acting as your ongoing technical advisors, helping you make critical decisions regarding new integrations, AI models, or architectural shifts." },
  ],

  faqs: [
    { q: "What is an MVP (Minimum Viable Product)?", a: "An MVP is the most stripped-down version of your product that still solves the core problem for your target user. We build it to get to market quickly, test assumptions, and start generating revenue or user feedback before spending money on 'nice-to-have' features." },
    { q: "Do you only write code, or do you design the product too?", a: "We provide end-to-end product engineering. This means we handle the business strategy, the UI/UX design (Figma), the frontend/backend development, the cloud infrastructure, and the post-launch analytics." },
    { q: "Who owns the Intellectual Property (IP)?", a: "You do. We are an engineering partner, not a co-founder demanding equity. Upon payment, 100% of the source code, design assets, and infrastructure access are transferred to your company." },
    { q: "What happens after the product launches?", a: "Launch is just the beginning. We transition into a 'Scale & Iterate' phase. We monitor how real users interact with the app, fix any issues, and use a monthly engineering retainer to continuously build the features defined in your roadmap." },
  ],

  relatedServices: [
    { label: "SaaS Product Engineering", href: "/ai-saas-product" },
    { label: "Web Application Dev", href: "/web-application-development" },
    { label: "Mobile App Dev", href: "/app-development" },
    { label: "UI/UX Design", href: "/ui-ux-design-and-prototyping" },
    { label: "Software Development", href: "/software-development" },
  ],

  ctaHeading: "Ready to Build Your Digital Product?",
  ctaDesc: "Turn your vision into a scalable, revenue-generating reality. Partner with WebCodian to engineer a world-class digital product.",
};

export default function Page() {
  return <SolutionPageTemplate data={data} />;
}
