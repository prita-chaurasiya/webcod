import { SolutionPageTemplate, SolutionPageData } from "@/components/SolutionPageTemplate";
import { PremiumWebDevOverview } from "@/components/PremiumWebDevOverview";

const data: SolutionPageData = {
  heroTitle: "Enterprise Web Development Solutions That Drive Business Growth",
  heroSubtitle: "We engineer high-performance, SEO-optimized, and scalable web applications — from corporate portals and CMS platforms to progressive web apps and API-integrated digital ecosystems.",
  heroImg: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2000&auto=format&fit=crop",
  breadcrumbLabel: "Web Development",
  category: "Web & Software Solutions",

  overviewHeading: "Beyond Websites — Engineering Digital Engines for Business",
  overviewText: "The modern web is the most powerful distribution channel for any business. A well-engineered website or web application isn't just a digital brochure — it's a revenue engine, a customer acquisition system, and an operational backbone. WebCodian has delivered 500+ web projects for clients across India, the Middle East, UK, and USA — from lightning-fast marketing sites to complex multi-tenant SaaS platforms and enterprise portals managing millions of daily users.",
  overviewImg: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2000&auto=format&fit=crop",
  overviewBullets: [
    "Corporate websites, microsites, and landing page systems",
    "CMS-driven web platforms (headless, WordPress, custom)",
    "SEO-first technical architecture for maximum organic visibility",
    "API-integrated web applications connecting third-party services",
    "Progressive Web Apps (PWAs) with offline-first capabilities",
    "Website performance optimization for Core Web Vitals excellence",
  ],

  challenges: [
    { title: "Poor Web Performance", desc: "Slow websites lose 53% of mobile visitors before the page loads, directly costing businesses leads and revenue every day." },
    { title: "SEO Invisibility", desc: "Technically flawed websites that Google cannot properly crawl and index, resulting in poor search rankings regardless of content quality." },
    { title: "Non-Scalable Architecture", desc: "Template-based or legacy codebases that break under traffic growth, require expensive rebuilds, and block feature development." },
    { title: "Security Vulnerabilities", desc: "Outdated frameworks, unpatched plugins, and poor authentication implementation exposing businesses to data breaches and reputational damage." },
    { title: "Poor Mobile Experience", desc: "Non-responsive designs alienating 60%+ of web traffic that now arrives on smartphones, directly impacting conversion rates." },
    { title: "Slow Development Cycles", desc: "Inability to launch new features and campaigns quickly due to monolithic architecture or over-reliance on vendor platforms." },
  ],

  whyPoints: [
    { title: "First Impressions Are Digital", desc: "Your website is the first touchpoint for 97% of B2B buyers. A slow, outdated, or poorly designed site immediately erodes trust and loses prospects to competitors." },
    { title: "SEO as a Revenue Channel", desc: "Organic search drives 53% of all website traffic. A technically excellent, fast-loading website with great content architecture is your highest-ROI marketing channel." },
    { title: "Conversion Rate Optimization", desc: "A professionally engineered website with optimized UX and clear CTAs can convert 2–5x more visitors into leads and customers than a template site." },
    { title: "Operational Efficiency", desc: "Web applications that integrate with your CRM, ERP, and marketing tools eliminate manual data entry and streamline operations significantly." },
    { title: "Brand Credibility", desc: "Enterprise clients, investors, and partners judge your business heavily on your digital presence. A premium website signals capability, stability, and ambition." },
    { title: "Competitive Differentiation", desc: "In every market, the businesses with the best digital experiences are capturing disproportionate market share from those still relying on aging online presence." },
  ],

  solutions: [
    { title: "Custom Web Application Engineering", desc: "We build every web application from first principles — no bloated templates — using the most appropriate technology for your specific business requirements." },
    { title: "Performance-First Development", desc: "Every project is engineered to achieve Core Web Vitals green scores with sub-2-second page loads, optimized for both user experience and Google rankings." },
    { title: "Headless CMS Architecture", desc: "We implement headless CMS solutions (Sanity, Contentful, Strapi) that give your marketing team complete content freedom without touching code." },
    { title: "API & Integration Layer", desc: "Seamlessly connecting your web platform with CRMs, payment gateways, marketing automation, analytics, and all mission-critical business tools." },
  ],

  features: [
    { icon: "⚡", title: "Performance Optimization", desc: "Sub-2s page loads, CDN integration, image optimization, code splitting, and full Core Web Vitals compliance." },
    { icon: "🔍", title: "Technical SEO Architecture", desc: "Schema markup, XML sitemaps, canonical tags, hreflang, crawl optimization, and Google News eligibility." },
    { icon: "📱", title: "Mobile-First Responsive Design", desc: "Pixel-perfect, responsive layouts optimized for every viewport from 320px to 4K displays." },
    { icon: "🔐", title: "Enterprise Security", desc: "HTTPS enforcement, CSRF protection, XSS prevention, CSP headers, rate limiting, and regular VAPT." },
    { icon: "🧩", title: "CMS Integration", desc: "Headless or traditional CMS integration with custom editorial workflows, media management, and multi-language support." },
    { icon: "📊", title: "Analytics & Conversion Tracking", desc: "GA4, Search Console, Hotjar, Facebook Pixel, and GTM integration with custom event tracking and funnel analysis." },
    { icon: "🌍", title: "Multi-Language & Localization", desc: "i18n-ready architecture with RTL support, regional content management, and hreflang for international SEO." },
    { icon: "♿", title: "Accessibility (WCAG 2.1)", desc: "WCAG 2.1 AA compliance including keyboard navigation, screen reader support, and color contrast optimization." },
    { icon: "🔄", title: "CI/CD & DevOps Pipeline", desc: "Automated testing, staging environments, one-click deployments, and rollback capabilities via GitHub Actions." },
  ],

  benefits: [
    { title: "Higher Organic Traffic", desc: "Technical SEO-first architecture consistently delivers 40–120% organic traffic growth within 12 months of launch." },
    { title: "Improved Conversion Rates", desc: "Optimized landing pages and clear user journeys increase lead conversion rates by 25–50% over legacy sites." },
    { title: "Faster Time-to-Market", desc: "Our agile delivery process gets your new web platform live in 6–12 weeks, significantly faster than traditional agency timelines." },
    { title: "Reduced Maintenance Costs", desc: "Clean, well-documented codebases and modern frameworks dramatically reduce the long-term cost of maintaining and evolving your web platform." },
    { title: "Complete Data Ownership", desc: "Unlike SaaS website builders, you own 100% of your source code, data, and infrastructure with zero vendor lock-in." },
    { title: "Enterprise-Grade Scalability", desc: "Cloud-native architectures that scale from 100 to 10 million monthly visitors without requiring costly platform migrations." },
  ],

  techStack: ["Next.js", "React.js", "TypeScript", "Node.js", "Tailwind CSS", "PostgreSQL", "MongoDB", "Redis", "AWS", "Cloudflare", "Vercel", "Sanity CMS", "Strapi", "GraphQL", "REST APIs", "Docker", "GitHub Actions", "Elasticsearch"],

  process: [
    { step: "01", title: "Discovery & Strategy", desc: "In-depth analysis of your business goals, target audience, competitor landscape, and technical requirements." },
    { step: "02", title: "UX & Technical Design", desc: "Information architecture, wireframes, high-fidelity designs, and technical architecture specification." },
    { step: "03", title: "Agile Development", desc: "Sprint-based engineering with weekly demos, continuous testing, and stakeholder feedback integration." },
    { step: "04", title: "Launch & Growth", desc: "Zero-downtime deployment, SEO migration, analytics setup, and post-launch optimization for continuous improvement." },
  ],

  industries: ["Healthcare", "E-Commerce", "Real Estate", "Education", "Manufacturing", "Financial Services", "Tour & Travel", "NGO", "Consulting", "Legal", "Media", "Restaurants", "Retail", "SaaS"],

  aiPoints: [
    { title: "AI-Powered Personalization", desc: "Dynamic content personalization using ML models that adapt website content, CTAs, and recommendations based on visitor behavior and segments." },
    { title: "AI Chatbot Integration", desc: "Intelligent conversational AI chatbots for lead qualification, customer support, and appointment booking directly on your website." },
    { title: "SEO Content Intelligence", desc: "AI-powered content analysis tools that identify keyword gaps, suggest topic clusters, and optimize existing content for maximum search visibility." },
    { title: "Predictive Analytics", desc: "ML models analyzing visitor behavior patterns to predict conversion probability and trigger personalized retention interventions." },
    { title: "Voice Search Optimization", desc: "Structuring content and implementing schema markup for voice search queries via Google Assistant, Siri, and Alexa." },
  ],

  securityTitle: "Enterprise Security Built Into Every Line of Code",
  securityDesc: "Security is not an afterthought at WebCodian — it's baked into our development process from Day 1. Every web project undergoes security review, penetration testing, and compliance validation before it reaches production.",
  securityPoints: [
    "OWASP Top 10 Vulnerability Prevention by Default",
    "SSL/TLS Encryption with HSTS & Perfect Forward Secrecy",
    "CSRF, XSS, SQLi, and Injection Attack Prevention",
    "GDPR & India IT Act Compliant Data Handling",
    "Role-Based Access Control (RBAC) for All Admin Functions",
    "Automated Dependency Vulnerability Scanning (Snyk, Dependabot)",
  ],
  securityImg: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?q=80&w=2000&auto=format&fit=crop",

  caseStudy: {
    client: "B2B SaaS Company — Hyderabad, India",
    label: "Web Development · SaaS Platform",
    challenge: "A Series A SaaS company needed to replace their Laravel monolith with a modern, scalable web platform that could support 10x user growth, integrate with 15 third-party APIs, and achieve sub-1.5s page loads for global users.",
    solution: "WebCodian re-architected the platform as a Next.js frontend with a Node.js microservices backend, deployed on AWS with multi-region CDN distribution, automated CI/CD pipelines, and full integration with Salesforce, Stripe, and HubSpot.",
    result: "Page load time improved from 4.2s to 0.9s, organic search traffic grew 185% in 8 months, customer churn dropped 28% due to improved UX, and the platform successfully onboarded 3 enterprise accounts within 60 days of relaunch.",
  },

  stats: [
    { metric: "500+", label: "Web Projects Delivered", desc: "Across 12 countries" },
    { metric: "185%", label: "Avg Traffic Growth", desc: "Within 12 months" },
    { metric: "<1.5s", label: "Average Page Load Time", desc: "On all new builds" },
    { metric: "99.9%", label: "Uptime SLA", desc: "Guaranteed on all platforms" },
  ],

  supportPoints: [
    { title: "24/7 Uptime Monitoring", desc: "Continuous monitoring with automated alerts and on-call engineers ensuring your website is always available to your customers." },
    { title: "Regular Security Patching", desc: "Proactive dependency updates, security patches, and monthly VAPT scans to keep your platform protected against emerging threats." },
    { title: "Performance Optimization", desc: "Quarterly performance audits, Core Web Vitals monitoring, and continuous optimization to maintain peak user experience and SEO rankings." },
    { title: "Content & Feature Updates", desc: "Ongoing development retainers for new feature additions, content management, and A/B testing — without requiring a complete rebuild." },
    { title: "SEO Health Monitoring", desc: "Monthly technical SEO audits, index coverage reports, and keyword performance tracking to protect and grow your organic traffic." },
    { title: "Disaster Recovery", desc: "Automated daily backups, tested restore procedures, and defined RTO/RPO objectives ensuring rapid recovery from any incident." },
  ],

  faqs: [
    { q: "How long does a custom website take to build?", a: "A premium corporate website typically takes 4–8 weeks. Complex web applications with custom functionality take 3–6 months. We always deliver a detailed timeline after the discovery workshop." },
    { q: "Do you build on WordPress or only custom platforms?", a: "Both. We build headless WordPress for content-heavy sites, Sanity/Strapi for maximum flexibility, and fully custom Next.js platforms for complex applications. We recommend the best fit for your requirements." },
    { q: "What does your website development pricing include?", a: "All projects include discovery, UX design, development, testing, launch, 30-day post-launch support, and documentation. We provide fixed-scope quotes to eliminate surprise bills." },
    { q: "Can you redesign or optimize our existing website without a full rebuild?", a: "Yes. We offer performance optimization, technical SEO audits, UX redesigns, and CMS migrations for existing websites without necessarily requiring a complete rebuild." },
  ],

  relatedServices: [
    { label: "Software Development", href: "/software-development" },
    { label: "Web Application Development", href: "/web-application-development" },
    { label: "Custom Software", href: "/custom-software-development" },
    { label: "SEO & Digital Marketing", href: "/seo-smo" },
    { label: "UI/UX Design", href: "/ui-ux-design-and-prototyping" },
  ],

  ctaHeading: "Ready to Build a Web Platform That Grows Your Business?",
  ctaDesc: "Partner with WebCodian to engineer a high-performance, SEO-optimized web platform that converts visitors into customers and scales as you grow.",
};

export default function WebDevelopmentPage() {
  return (
    <main>
      <SolutionPageTemplate data={data} />
      <PremiumWebDevOverview />
    </main>
  );
}
