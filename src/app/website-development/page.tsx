import { SolutionPageTemplate, SolutionPageData } from "@/components/SolutionPageTemplate";

const data: SolutionPageData = {
  heroTitle: "Premium Website Design & Development",
  heroSubtitle: "We engineer beautiful, high-performance websites that tell your brand story and convert visitors into enterprise clients. Custom-designed, lightning-fast, and optimized for global search engines.",
  heroImg: "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=2000&auto=format&fit=crop",
  breadcrumbLabel: "Website Design & Dev",
  category: "Web & Software Solutions",

  overviewHeading: "Your Website is Your Most Valuable Real Estate",
  overviewText: "In the digital age, your website is often the first and only impression an enterprise buyer has of your brand. A slow, outdated, or generic template site immediately destroys credibility. WebCodian designs and develops bespoke corporate websites that exude premium authority. We combine stunning, award-winning UI/UX design with bleeding-edge frontend technologies to deliver experiences that are as fast as they are beautiful.",
  overviewImg: "https://images.unsplash.com/photo-1507238692062-5a04ce4bef02?q=80&w=2000&auto=format&fit=crop",
  overviewBullets: [
    "Custom, high-fidelity UI/UX design (No templates)",
    "Lightning-fast Next.js/React frontend development",
    "Headless CMS integration (Sanity, Contentful, Strapi)",
    "Pixel-perfect responsive design for mobile & tablet",
    "Advanced WebGL and Framer Motion micro-animations",
    "Technical SEO optimization for maximum organic reach",
  ],

  challenges: [
    { title: "Generic Template Aesthetics", desc: "Using cheap WordPress themes that make your enterprise look like a startup, failing to communicate the true value and scale of your services." },
    { title: "Abysmal Load Times", desc: "Websites bloated with unnecessary plugins that take 5+ seconds to load, causing users to bounce before they even see your homepage." },
    { title: "Poor Mobile Experience", desc: "Sites that break on mobile devices, alienating the 60%+ of B2B buyers who conduct initial vendor research on their smartphones." },
    { title: "Difficult Content Management", desc: "Being locked into a system where the marketing team has to ask a developer to write code just to publish a simple blog post or update a team photo." },
    { title: "Invisible to Search Engines", desc: "Beautiful websites built with technologies that Google cannot crawl properly, resulting in zero organic traffic and wasted investment." },
    { title: "Low Conversion Rates", desc: "A site that gets traffic but fails to guide the user toward a clear Call-To-Action (CTA), acting as a digital brochure rather than a lead generation engine." },
  ],

  whyPoints: [
    { title: "Instant Credibility", desc: "A premium, custom-designed website instantly positions your brand as an industry leader, justifying premium pricing for your services." },
    { title: "Sub-Second Performance", desc: "We engineer sites that load almost instantly, retaining impatient executives and satisfying Google's strict Core Web Vitals algorithms." },
    { title: "Engaging Micro-Interactions", desc: "Subtle, smooth animations (via Framer Motion) guide the user's eye and create a deeply engaging, modern browsing experience." },
    { title: "Empowered Marketing Teams", desc: "Headless CMS integration allows your non-technical marketing team to update content, launch landing pages, and publish blogs seamlessly." },
    { title: "Built for SEO", desc: "Server-Side Rendering (SSR) and perfect semantic HTML ensure search engines can effortlessly crawl, understand, and rank your content." },
    { title: "Security by Default", desc: "By decoupling the frontend from the database (Jamstack architecture), we eliminate the database vulnerabilities that plague traditional CMS platforms." },
  ],

  solutions: [
    { title: "Custom Corporate Websites", desc: "Bespoke digital experiences designed from a blank canvas in Figma to perfectly match your brand guidelines and corporate identity." },
    { title: "Headless CMS Architecture", desc: "Separating the frontend design from the backend content repository, allowing for ultimate design freedom and infinite scalability." },
    { title: "Landing Page Optimization", desc: "Designing high-converting, targeted landing pages for specific marketing campaigns, heavily optimized for PPC and social media traffic." },
    { title: "Web Migration Services", desc: "Securely migrating your massive, legacy corporate website onto a modern React/Next.js stack without losing any SEO equity." },
  ],

  features: [
    { icon: "🎨", title: "Bespoke UI/UX Design", desc: "Wireframing, user journey mapping, and high-fidelity Figma design specifically tailored to your target audience." },
    { icon: "⚡", title: "Next.js Framework", desc: "Utilizing the industry standard for fast, SEO-friendly React websites with automatic image optimization and edge caching." },
    { icon: "📱", title: "Fluid Responsiveness", desc: "Pixel-perfect adaptation across massive 4K monitors, laptops, tablets, and every size of mobile device." },
    { icon: "🪄", title: "Advanced Animations", desc: "Implementing GSAP or Framer Motion for scroll-triggered animations, parallax effects, and smooth page transitions." },
    { icon: "📝", title: "Headless CMS", desc: "Integration with Contentful, Sanity, or Strapi for a secure, incredibly fast, and user-friendly content editing experience." },
    { icon: "🔍", title: "Technical SEO Foundation", desc: "Perfect Lighthouse scores, dynamic sitemaps, structured data (Schema.org), and optimized meta tags." },
    { icon: "🌍", title: "Multi-Language (i18n)", desc: "Architecture supporting dozens of languages and regional content variations for global enterprise reach." },
    { icon: "♿", title: "WCAG Accessibility", desc: "Ensuring your website is fully accessible to users with disabilities, protecting your brand from legal liability." },
    { icon: "🔒", title: "Enterprise Security", desc: "Static site generation and edge deployments that provide zero surface area for traditional database hacking." },
  ],

  benefits: [
    { title: "Higher Lead Conversion", desc: "Strategic UX design guides users effortlessly toward your contact forms and CTAs, turning passive readers into active prospects." },
    { title: "Increased Organic Traffic", desc: "Perfect technical SEO and blazing-fast load times signal quality to Google, naturally boosting your search rankings." },
    { title: "Lower Bounce Rates", desc: "When a site loads instantly and looks stunning, users stay longer and consume more of your brand's messaging." },
    { title: "Brand Premiumization", desc: "A world-class digital presence allows your sales team to approach top-tier enterprise clients with absolute confidence." },
    { title: "Zero Maintenance Headaches", desc: "Modern Jamstack sites don't require constant plugin updates or database patching like traditional WordPress sites do." },
    { title: "Future-Proof Foundation", desc: "Built on React, your website's components can easily be reused if you decide to build a full web application later." },
  ],

  techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "Figma", "Sanity CMS", "Contentful", "Vercel", "AWS", "Google Analytics 4", "GSAP"],

  process: [
    { step: "01", title: "Discovery & Strategy", desc: "We analyze your brand, competitors, and target audience to define the site architecture and conversion goals." },
    { step: "02", title: "UI/UX Design", desc: "Our designers create wireframes and high-fidelity Figma mockups, iterating until the visual direction is perfect." },
    { step: "03", title: "Frontend Engineering", desc: "Developers translate the designs into pixel-perfect React code, integrating the CMS and optimizing for performance." },
    { step: "04", title: "QA & Launch", desc: "Rigorous cross-browser testing, SEO audits, and a seamless deployment to global edge networks (Vercel/AWS)." },
  ],

  industries: ["Corporate & Enterprise", "SaaS & Technology", "Financial Services", "Healthcare & Pharma", "Real Estate", "Professional Services", "E-Commerce", "Education"],

  aiPoints: [
    { title: "AI-Driven Personalization", desc: "Integrating tools that analyze a visitor's IP and behavior to dynamically alter website headlines and content to match their specific industry." },
    { title: "Automated Content Generation", desc: "Connecting your Headless CMS to LLMs to help your marketing team instantly generate first drafts for blog posts and case studies." },
    { title: "Predictive Search", desc: "Implementing AI-powered site search (like Algolia) that understands typos and natural language, ensuring users always find what they are looking for." },
    { title: "AI Chatbots (Optional)", desc: "Seamlessly embedding intelligent, context-aware chatbots trained on your website's content to capture leads 24/7." },
    { title: "Dynamic Image Optimization", desc: "Using AI to automatically crop, compress, and serve the perfect image size based on the user's exact device and network speed." },
  ],

  securityTitle: "Secure, Jamstack Architecture",
  securityDesc: "Traditional CMS platforms like WordPress are constantly targeted by hackers due to their exposed databases. We build websites using modern Jamstack principles—pre-rendering your site into static files served across a global CDN. This provides ultimate speed and virtually eliminates the risk of being hacked.",
  securityPoints: [
    "No exposed databases or vulnerable admin panels (Zero Database Surface Area)",
    "Distributed Denial of Service (DDoS) protection via Vercel/Cloudflare edge networks",
    "Strict Content Security Policies (CSP) to prevent cross-site scripting",
    "Automated SSL/TLS certificate provisioning and renewal",
    "Enterprise-grade SSO (SAML) for CMS author access",
    "Immutable deployments ensuring instant rollback capabilities",
  ],
  securityImg: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2000&auto=format&fit=crop",

  caseStudy: {
    client: "Global Consulting Firm — London & Mumbai",
    label: "Website Design · Corporate Rebranding",
    challenge: "A prestigious consulting firm had a 7-year-old WordPress site that took 6 seconds to load, looked terrible on mobile, and failed to reflect their premium market positioning. Their marketing team was terrified to update it because plugins constantly broke.",
    solution: "WebCodian led a complete digital rebrand. We designed a stunning, minimalist UI in Figma and engineered a headless Next.js website integrated with Sanity CMS. We added smooth scroll animations to make the case studies highly engaging.",
    result: "Page load speeds dropped to 0.6 seconds (a 10x improvement). The firm saw a 45% increase in organic search traffic within 3 months, and the marketing team can now publish new insights globally in under 2 minutes without developer help.",
  },

  stats: [
    { metric: "0.6s", label: "Average Load Time", desc: "Achieving 99+ Lighthouse Scores" },
    { metric: "45%", label: "Organic Traffic Growth", desc: "Driven by technical SEO" },
    { metric: "10x", label: "Faster Content Updates", desc: "Via modern Headless CMS" },
    { metric: "Zero", label: "Security Incidents", desc: "Since migrating to Jamstack" },
  ],

  supportPoints: [
    { title: "Continuous SEO Monitoring", desc: "We track your technical SEO health monthly, ensuring that Core Web Vitals remain perfect as your marketing team adds new content." },
    { title: "CMS Training & Support", desc: "Comprehensive training for your marketing team on how to use the Headless CMS, plus ongoing support for creating complex new page layouts." },
    { title: "A/B Testing & CRO", desc: "Implementing tools like Google Optimize to test different headlines and button placements, continuously improving the site's conversion rate." },
    { title: "Performance Audits", desc: "Regular technical audits to ensure large image uploads or third-party marketing scripts aren't degrading the website's blazing-fast speed." },
    { title: "Feature Expansion", desc: "Agile engineering support to add new functionality—like investor portals, career boards, or localization—as your company grows." },
    { title: "Uptime & Security Monitoring", desc: "24/7 monitoring of the CDN edge network to ensure 99.99% availability globally." },
  ],

  faqs: [
    { q: "Do you use WordPress?", a: "We strongly advise against traditional WordPress for enterprise clients due to its slow performance, high security risks, and difficult maintenance. We build modern 'Headless' websites using Next.js and secure CMS platforms like Sanity or Contentful. However, if you are strictly mandated to use WordPress, we can build a 'Headless WordPress' setup." },
    { q: "How long does it take to design and develop a custom corporate website?", a: "A bespoke corporate website—including deep UX discovery, custom Figma design, and frontend development—typically takes 8 to 12 weeks from kickoff to global launch." },
    { q: "Will our marketing team be able to update the website without knowing how to code?", a: "Yes. We integrate a Headless CMS (Content Management System) that provides a beautiful, intuitive interface. Your team can easily add blogs, update team members, and create new landing pages using pre-built blocks without writing a single line of code." },
    { q: "How do you ensure the new website won't lose our current SEO rankings?", a: "We take SEO migration very seriously. Before launching, we map every single URL from your old site to the new site using 301 redirects. We also ensure the new site has vastly superior technical SEO (speed, semantic HTML), which typically results in a significant ranking boost shortly after launch." },
  ],

  relatedServices: [
    { label: "Web Application Dev", href: "/web-application-development" },
    { label: "Digital Marketing", href: "/digital-marketing" },
    { label: "UI/UX Design", href: "/ui-ux-design-and-prototyping" },
    { label: "SEO / SMO", href: "/seo-smo" },
    { label: "Custom Software", href: "/custom-software-development" },
  ],

  ctaHeading: "Ready for a World-Class Digital Presence?",
  ctaDesc: "Stop settling for generic templates that hurt your brand. Partner with WebCodian to design and engineer a premium corporate website.",
};

export default function Page() {
  return <SolutionPageTemplate data={data} />;
}
