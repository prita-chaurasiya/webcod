import { SolutionPageTemplate, SolutionPageData } from "@/components/SolutionPageTemplate";

const data: SolutionPageData = {
  heroTitle: "Premium IT Training & Internship Programs",
  heroSubtitle: "Launch your tech career with real-world enterprise experience. Gain hands-on training in Web Development, AI, Mobile Apps, and Enterprise Software under the guidance of senior architects.",
  heroImg: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=2000&auto=format&fit=crop",
  breadcrumbLabel: "Internship",
  category: "Career & Training",

  overviewHeading: "Bridging the Gap Between Academia and Industry",
  overviewText: "Traditional college degrees focus on theory, leaving graduates completely unprepared for modern, fast-paced enterprise software development. The WebCodian Premium IT Internship is an intensive, hands-on immersion program designed to transform enthusiastic students into highly capable, deployable software engineers. You won't just learn syntax; you will write production code, deploy to live cloud environments, and collaborate in agile sprints just like our senior engineering teams.",
  overviewImg: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2000&auto=format&fit=crop",
  overviewBullets: [
    "Work on live, enterprise-grade client projects",
    "Mentorship from Senior Full-Stack Developers and Tech Leads",
    "Pre-Placement Offer (PPO) opportunities for top performers",
    "Hands-on training in React, Next.js, Node.js, and AI Integration",
    "Exposure to Agile methodologies, CI/CD, and DevOps",
    "Certificate of Completion and a verified letter of recommendation",
  ],

  challenges: [
    { title: "Theoretical Knowledge Only", desc: "Graduating with a degree but lacking the practical ability to build and deploy a functioning application from scratch." },
    { title: "Outdated Tech Stacks", desc: "Learning old languages or frameworks in college that are no longer actively used by top-tier modern tech companies." },
    { title: "No Portfolio to Show", desc: "Struggling to pass technical interviews because you have no real-world projects or live code to demonstrate your skills." },
    { title: "Lack of Industry Tools", desc: "Zero experience with crucial enterprise tools like Git, Jira, Docker, AWS, or Agile sprint workflows." },
    { title: "Isolated Learning", desc: "Coding alone without code reviews, completely missing out on the collaborative, feedback-driven reality of professional teams." },
    { title: "Unpaid 'Dummy' Internships", desc: "Internships where you are simply given busywork or fake projects that no one actually uses, wasting your valuable time." },
  ],

  whyPoints: [
    { title: "Live Project Experience", desc: "You will push code to staging and production environments for real client applications, solving actual business problems." },
    { title: "Modern Tech Curriculum", desc: "We train you on the exact tech stack we use internally: React, Next.js, Node.js, TypeScript, and Tailwind CSS." },
    { title: "Senior Mentorship", desc: "You will have a dedicated Senior Engineer reviewing your Pull Requests (PRs), providing feedback on architecture, security, and best practices." },
    { title: "Agile Immersion", desc: "You will participate in daily standups, sprint planning, and retrospectives, mastering the workflow of top tech companies." },
    { title: "PPO Opportunities", desc: "We actively hire our best interns. Prove your skills and work ethic, and walk away with a full-time Pre-Placement Offer as a Junior Engineer." },
    { title: "Verified Credentials", desc: "Receive a recognized certificate, a detailed recommendation letter, and a robust portfolio of enterprise code to ace future interviews." },
  ],

  solutions: [
    { title: "AI & Automation Training", desc: "Learn to build generative AI solutions, train LLMs, integrate OpenAI APIs, and develop custom AI agents and chatbots." },
    { title: "Web Development Training", desc: "Master modern frontend and backend development using Next.js, React, Node.js, and cloud databases to build full-stack web applications." },
    { title: "Mobile App Development", desc: "Gain hands-on experience building cross-platform mobile applications for iOS and Android using React Native and Flutter." },
    { title: "Enterprise Software & Cloud", desc: "Understand microservices, Docker containerization, AWS deployments, and scalable database architectures." },
  ],

  features: [
    { icon: "💻", title: "Intensive Coding", desc: "Spend 80% of your time writing, debugging, and testing code. This is not a theoretical seminar." },
    { icon: "👨‍🏫", title: "Daily Mentorship", desc: "Direct access to tech leads for architectural guidance, career advice, and complex problem solving." },
    { icon: "🔍", title: "Code Reviews", desc: "Every line of code you write will be reviewed. You will learn to write clean, maintainable, and scalable code." },
    { icon: "🚀", title: "DevOps & CI/CD", desc: "Learn how to deploy applications to Vercel and AWS, configuring automated testing and deployment pipelines." },
    { icon: "📊", title: "Agile Management", desc: "Master Jira, GitHub project boards, sprint methodologies, and effective technical communication." },
    { icon: "🛡️", title: "Security Best Practices", desc: "Learn to implement secure authentication (JWT/OAuth), prevent XSS/CSRF attacks, and manage environment variables securely." },
    { icon: "🌐", title: "API Development", desc: "Design, build, and document robust RESTful and GraphQL APIs using Node.js and Express/NestJS." },
    { icon: "💾", title: "Database Architecture", desc: "Hands-on experience designing schemas for both relational (PostgreSQL) and NoSQL (MongoDB) databases." },
    { icon: "🏆", title: "Hackathons & Challenges", desc: "Participate in internal hackathons to push your limits, innovate rapidly, and build solutions under pressure." },
  ],

  benefits: [
    { title: "Industry-Ready Skills", desc: "Graduate the program fully equipped to pass rigorous technical interviews at top-tier product companies." },
    { title: "Real-World Portfolio", desc: "Leave with a GitHub profile filled with enterprise-grade, production-deployed code, not just basic tutorial clones." },
    { title: "Networking & References", desc: "Build relationships with senior engineers who can provide powerful references and referrals for your future career." },
    { title: "Confidence & Problem Solving", desc: "Overcome the 'imposter syndrome' by proving to yourself that you can tackle and solve complex, real-world engineering problems." },
    { title: "Professional Workflow", desc: "Master the soft skills of software engineering: communication, estimation, teamwork, and accepting constructive criticism." },
    { title: "Direct Hiring Pathway", desc: "Skip the traditional resume queue; exceptional interns are directly transitioned into full-time roles at WebCodian." },
  ],

  techStack: ["Next.js", "React.js", "Node.js", "TypeScript", "Python (AI/ML)", "React Native", "PostgreSQL", "MongoDB", "Git & GitHub", "Docker", "AWS", "Jira & Agile"],

  process: [
    { step: "01", title: "Application & Assessment", desc: "Submit your resume and portfolio. Shortlisted candidates will complete a logical and basic coding assessment." },
    { step: "02", title: "Technical Interview", desc: "A 30-minute interview with a senior engineer to assess your passion, basic programming fundamentals, and cultural fit." },
    { step: "03", title: "Bootcamp Phase (Weeks 1-4)", desc: "Intensive training on our specific tech stack, tools, and workflows to bring you up to production speed." },
    { step: "04", title: "Live Project Phase (Weeks 5-12)", desc: "Integration into an Agile squad. You will pick up tickets, write code, and contribute directly to live client or internal products." },
  ],

  industries: ["Computer Science Students", "Recent IT Graduates", "Self-Taught Developers", "Bootcamp Alumni", "Career Changers", "Aspiring Tech Leads"],

  aiPoints: [
    { title: "Prompt Engineering", desc: "Learn advanced techniques for prompting LLMs (GPT-4, Claude) to generate accurate code, debug errors, and optimize functions." },
    { title: "AI API Integration", desc: "Hands-on experience building wrapper applications around the OpenAI API, implementing streaming responses and function calling." },
    { title: "RAG Architecture", desc: "Build Retrieval-Augmented Generation systems using vector databases (Pinecone/Milvus) to allow AI to 'read' custom documents." },
    { title: "AI Copilots in IDEs", desc: "Master the use of GitHub Copilot and other AI coding assistants to increase your development velocity safely and effectively." },
    { title: "AI Agent Frameworks", desc: "Introduction to frameworks like LangChain and AutoGen for building autonomous, multi-step AI reasoning agents." },
  ],

  securityTitle: "Secure Coding Foundations",
  securityDesc: "A major gap in academic computer science is the lack of focus on software security. In our internship program, you will learn the DevSecOps principles required to build software that withstands malicious attacks.",
  securityPoints: [
    "Understanding and preventing the OWASP Top 10 vulnerabilities (SQLi, XSS, CSRF)",
    "Securely managing API keys and secrets using environment variables (.env)",
    "Implementing proper CORS configurations and strict Content Security Policies (CSP)",
    "Building secure authentication and authorization flows with JWT",
    "Sanitizing user inputs to prevent injection attacks and database corruption",
    "Understanding HTTPS, SSL/TLS, and basic cryptographic principles",
  ],
  securityImg: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?q=80&w=2000&auto=format&fit=crop",

  caseStudy: {
    client: "Rahul S., Former Intern -> Full-Stack Developer",
    label: "Internship Success Story · PPO Winner",
    challenge: "Rahul graduated with a B.Tech in CS but struggled to find a job because his portfolio only contained basic HTML/CSS college projects. He lacked experience with modern backend frameworks and cloud deployments.",
    solution: "Rahul joined the WebCodian 3-month Internship. Within 4 weeks, he mastered Next.js and Tailwind. By week 6, he was assigned to build a complex API integration for a live e-commerce client portal using Node.js.",
    result: "Rahul successfully delivered the integration, significantly improving the client's inventory sync speed. Based on his rapid learning and clean code architecture, he was offered a full-time role as a Junior Full-Stack Developer immediately upon internship completion.",
  },

  stats: [
    { metric: "85%", label: "Placement Rate", desc: "Interns hired internally or at top firms" },
    { metric: "100%", label: "Live Code Delivered", desc: "Every intern pushes production code" },
    { metric: "3-6", label: "Months Duration", desc: "Flexible intensive programs" },
    { metric: "1:4", label: "Mentor Ratio", desc: "Highly personalized technical guidance" },
  ],

  supportPoints: [
    { title: "Resume Building", desc: "We help you structure your resume to highlight the modern tech stack and real-world impact of the projects you built with us." },
    { title: "Mock Interviews", desc: "Senior engineers will conduct rigorous mock technical interviews (DSA and System Design) to prepare you for top-tier company rounds." },
    { title: "Portfolio Review", desc: "Guidance on structuring your GitHub repositories, writing excellent README files, and deploying your projects to create a stunning portfolio." },
    { title: "LinkedIn Optimization", desc: "Training on how to optimize your LinkedIn profile for recruiters, network effectively, and showcase your new technical credentials." },
    { title: "Letter of Recommendation", desc: "A highly detailed, personalized LOR from your Tech Lead outlining your specific contributions and technical strengths." },
    { title: "Alumni Network Access", desc: "Join an exclusive community of past WebCodian interns who are now working at major tech companies for networking and referrals." },
  ],

  faqs: [
    { q: "Is this a paid or unpaid internship?", a: "We offer both stipended and unpaid tracks depending on your initial assessment score and the specific program you are enrolled in. Exceptional candidates who contribute significantly to production code are moved to the stipended track." },
    { q: "Do I need to know how to code before applying?", a: "Yes. This is not a 'from scratch' beginner bootcamp. You must have a strong grasp of programming fundamentals (loops, functions, OOP concepts) in at least one language (like JavaScript, Python, C++, or Java)." },
    { q: "Is the internship remote or in-office?", a: "We offer both hybrid (in-office) and fully remote internship opportunities, ensuring we can work with the best talent regardless of geographic location. Both formats feature intensive daily online collaboration." },
    { q: "What happens if I receive a Pre-Placement Offer (PPO)?", a: "If you excel during your internship, we will offer you a full-time role as a Junior Engineer. The transition is seamless—you simply continue working with your squad, but with full-time salary and benefits." },
  ],

  relatedServices: [
    { label: "Web Development", href: "/web-development" },
    { label: "App Development", href: "/app-development" },
    { label: "AI & Automation", href: "/ai-automation-solutions" },
    { label: "Career Opportunities", href: "/career" },
    { label: "About WebCodian", href: "/about" },
  ],

  ctaHeading: "Ready to Accelerate Your Tech Career?",
  ctaDesc: "Stop learning in a vacuum. Apply for the WebCodian Premium IT Internship and start building real enterprise software today.",
};

export default function Page() {
  return <SolutionPageTemplate data={data} />;
}
