import { IndustryPageTemplate, IndustryPageData } from "@/components/IndustryPageTemplate";

const data: IndustryPageData = {
  heroTitle: "Digital Transformation for Education & EdTech",
  heroSubtitle: "Empower students, teachers, and institutions with custom LMS platforms, AI-adaptive learning engines, and comprehensive ERP systems that redefine the modern educational experience.",
  heroImg: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2000&auto=format&fit=crop",
  breadcrumbLabel: "Education",
  breadcrumbHref: "/industry/education",

  overviewHeading: "Building the Classroom of the Future",
  overviewText: "From K-12 schools and universities to EdTech startups and corporate training platforms, education technology is fundamentally changing how knowledge is created, delivered, and assessed. WebCodian engineers powerful, scalable digital education ecosystems — from custom Learning Management Systems and AI-adaptive curricula to complete institutional ERPs — that make learning more accessible, measurable, and impactful for millions of learners.",
  overviewImg: "https://images.unsplash.com/photo-1561070791260-0006a28492bf?q=80&w=2000&auto=format&fit=crop",
  overviewBullets: [
    "Custom LMS with AI-adaptive content delivery and gamification",
    "Student portals with performance analytics, assignments, and scheduling",
    "Automated online examination systems with anti-cheating measures",
    "Smart attendance tracking with facial recognition and RFID integration",
    "End-to-end institutional ERP covering admissions, fees, HR, and payroll",
  ],

  challenges: [
    { title: "Fragmented Digital Infrastructure", desc: "Schools managing attendance in spreadsheets, fees in separate software, and communication via informal WhatsApp groups, with no integration." },
    { title: "Low Student Engagement", desc: "Static PDFs and passive video content failing to engage Gen-Z learners who expect interactive, personalized digital experiences." },
    { title: "Examination Integrity", desc: "Online exams vulnerable to cheating, plagiarism, and identity fraud, undermining the credibility of digital certifications." },
    { title: "Compliance & Accreditation Data", desc: "Institutions struggling to compile accurate accreditation data (NAAC, NBA, NIRF) from disconnected systems under tight deadlines." },
    { title: "Fee Management Inefficiency", desc: "Manual fee collection, defaulter tracking, and receipt generation consuming significant administrative time and causing revenue leakage." },
    { title: "Parent Communication Gaps", desc: "Parents disconnected from their children's academic progress, attendance, and behavioral reports in real-time." },
  ],

  transformationPoints: [
    { title: "AI-Adaptive Learning Pathways", desc: "Machine learning algorithms that adjust lesson complexity and content type based on individual student performance and learning style." },
    { title: "Unified Institutional ERP", desc: "Single platform managing admissions, attendance, academics, fees, HR, payroll, and library across all branches." },
    { title: "Virtual Classrooms & Live Teaching", desc: "WebRTC-powered virtual classrooms with breakout rooms, interactive whiteboards, hand-raising, polls, and recording." },
    { title: "Automated Assessment Engine", desc: "AI-generated question banks, randomized tests, auto-grading, and instant performance analytics for teachers and students." },
    { title: "Mobile-First Student Experience", desc: "Native mobile apps for students and parents delivering live classes, schedules, results, and notifications on the go." },
    { title: "Data-Driven Academic Insights", desc: "Predictive analytics that identify at-risk students early, enabling targeted interventions to improve outcomes and retention." },
  ],

  solutions: [
    { title: "Custom LMS Development", desc: "We build fully branded, white-label Learning Management Systems with SCORM/xAPI compliance, gamification, and AI content recommendations." },
    { title: "Institutional ERP Engineering", desc: "Comprehensive ERP covering the full student lifecycle — from inquiry and admission to alumni management — on a single, integrated platform." },
    { title: "Online Exam & Assessment Platform", desc: "Secure online examination systems with browser lockdown, facial recognition, AI proctoring, randomized question banks, and auto-evaluation." },
    { title: "Mobile Learning Applications", desc: "Cross-platform mobile apps (iOS & Android) with offline content access, push notifications, and gamified daily learning streaks." },
  ],

  services: [
    { icon: "📚", title: "Learning Management System (LMS)", desc: "SCORM-compliant LMS with AI course recommendations, live classes, assignments, quizzes, and certificates." },
    { icon: "🏫", title: "School & College ERP", desc: "All-in-one ERP covering admissions, academics, attendance, fees, HR, payroll, and transport management." },
    { icon: "📝", title: "Online Examination System", desc: "AI-proctored, browser-locked examination system with randomized questions, auto-grading, and detailed analytics." },
    { icon: "📊", title: "Student Performance Analytics", desc: "Comprehensive dashboards for students, parents, and teachers showing academic trends, strengths, and areas of improvement." },
    { icon: "🎓", title: "Admission Management Portal", desc: "Online application, document upload, shortlisting, merit list generation, and fee payment in a single workflow." },
    { icon: "📱", title: "Mobile Learning App", desc: "iOS and Android apps with offline content access, live classes, assignments, and gamified leaderboards." },
    { icon: "📡", title: "Smart Attendance System", desc: "Biometric, RFID, QR code, and facial recognition-based attendance with real-time parent SMS/WhatsApp alerts." },
    { icon: "💰", title: "Fee Management & Payment", desc: "Online fee collection with automated receipts, installment plans, defaulter alerts, and accounting integration." },
    { icon: "🤖", title: "AI Tutoring Chatbot", desc: "24/7 AI tutor that answers subject-specific queries, explains concepts, and generates personalized practice questions." },
  ],

  aiOpportunities: [
    { title: "Adaptive Learning Engine", desc: "AI continuously adjusts the difficulty and type of learning content based on each student's real-time performance data." },
    { title: "Early Dropout Prediction", desc: "ML models analyzing attendance, grades, and engagement patterns to identify students at risk of dropping out." },
    { title: "Automated Content Generation", desc: "Generative AI that creates subject-specific lesson summaries, practice questions, and revision notes from curriculum documents." },
    { title: "NLP-Based Essay Grading", desc: "Natural Language Processing models that evaluate essay quality, argument strength, and grammar, providing instant, objective feedback." },
    { title: "Intelligent Timetable Optimization", desc: "AI that generates conflict-free, optimized class schedules considering faculty availability, room capacity, and curriculum requirements." },
  ],

  techStack: ["React.js", "Next.js", "Node.js", "Python", "Django", "Flutter", "React Native", "PostgreSQL", "MongoDB", "AWS", "Google Cloud", "TensorFlow", "OpenAI API", "WebRTC", "SCORM", "xAPI", "Twilio", "Firebase"],

  devProcess: [
    { step: "01", title: "Academic Discovery", desc: "Deep workshops with educators, administrators, and students to map institutional workflows and digital goals." },
    { step: "02", title: "Pedagogical Architecture", desc: "Designing UX and data architecture specifically for learning experiences — not just generic software UI." },
    { step: "03", title: "Agile Development", desc: "Sprint-based delivery with educator feedback loops, ensuring the product aligns with classroom reality." },
    { step: "04", title: "Rollout & Training", desc: "Phased go-live strategy with dedicated onboarding sessions and training materials for staff, students, and parents." },
  ],

  benefits: [
    { title: "Improved Learning Outcomes", desc: "AI-adaptive content and personalized feedback measurably improve student performance by 30–45% within a single academic year." },
    { title: "Significant Cost Savings", desc: "Replacing disparate systems with a unified ERP reduces IT and operational costs by 40–60% over three years." },
    { title: "Higher Student Retention", desc: "Gamified, engaging LMS platforms increase course completion rates by up to 55% compared to static eLearning portals." },
    { title: "Real-Time Institutional Visibility", desc: "Administrators gain complete, real-time visibility into academic performance, finances, and operations from a single dashboard." },
    { title: "Streamlined Accreditation", desc: "Automated data compilation tools reduce NAAC/NBA accreditation report preparation time from months to days." },
    { title: "Enhanced Parent Engagement", desc: "Mobile parent portals with live attendance alerts, grade updates, and direct teacher communication increase parental involvement by 80%." },
  ],

  useCases: [
    { title: "University Digital Campus", img: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=800&auto=format&fit=crop", desc: "End-to-end digital campus transformation for a 15,000-student university, unifying LMS, ERP, admissions, and fee management on a single platform." },
    { title: "K-12 School ERP Rollout", img: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=800&auto=format&fit=crop", desc: "Custom ERP deployed across a 25-school chain, automating attendance, fees, and parent communication for 35,000 students." },
    { title: "EdTech Learning App", img: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=800&auto=format&fit=crop", desc: "AI-powered mobile learning platform with 100,000+ active monthly learners, adaptive courses, and gamified progress tracking." },
  ],

  caseStudy: {
    client: "Leading EdTech Platform — Pan-India",
    industry: "Education · EdTech",
    challenge: "A rapidly scaling EdTech startup needed to replace their outsourced, buggy LMS with a fully owned, AI-powered learning platform capable of supporting 500,000 concurrent users without performance degradation.",
    solution: "We engineered a cloud-native, microservices-based LMS on AWS with AI-adaptive content delivery, live WebRTC classrooms, and an integrated proctored examination engine. The new platform was delivered in 5 months using agile sprints.",
    result: "Platform uptime improved from 91% to 99.97%, course completion rates rose from 23% to 61%, and the client secured Series B funding citing the new proprietary platform as a core competitive differentiator.",
  },

  stats: [
    { metric: "61%", label: "Course Completion Rate", desc: "Up from 23% with AI adaptation" },
    { metric: "99.97%", label: "Platform Uptime", desc: "On all LMS deployments" },
    { metric: "500K+", label: "Concurrent Users", desc: "Supported on our infrastructure" },
    { metric: "5 Months", label: "Full LMS Delivery", desc: "From discovery to go-live" },
  ],

  securityTitle: "Data Security & Student Privacy Protection",
  securityDesc: "Student data is among the most sensitive personal information in existence. We build every educational platform with privacy-first architectures that comply with FERPA, COPPA, India's DPDP Act, and GDPR — ensuring student, parent, and institutional data is protected at every layer.",
  securityPoints: [
    "FERPA, COPPA & DPDP Act Compliant Architecture",
    "AES-256 Encryption for All Student Records",
    "Role-Based Access Control (RBAC) for Staff & Admin",
    "AI Proctoring with Facial Recognition for Exam Integrity",
    "Regular Penetration Testing & Security Audits",
    "GDPR-Ready Data Residency & Right to Erasure Support",
  ],
  securityImg: "https://images.unsplash.com/photo-1526498460520-4c246339dccb?q=80&w=2000&auto=format&fit=crop",

  faqs: [
    { q: "Can your LMS integrate with existing college management systems?", a: "Yes. We specialize in API-based integrations with popular ERPs (Fedena, EduSys, Campuswire) and can build custom connectors for legacy systems." },
    { q: "Is your online exam platform truly cheat-proof?", a: "Our proctoring system combines AI facial recognition, eye tracking, browser lockdown, and network monitoring to make cheating extremely difficult. It's not 100% foolproof, but it is the industry standard." },
    { q: "How do you handle SCORM and xAPI content for existing courses?", a: "We fully support SCORM 1.2, SCORM 2004, and xAPI (Tin Can) standards, so you can import your existing eLearning content without rebuilding it." },
    { q: "What level of customization is available for the LMS branding?", a: "Complete white-labelling. Your logo, colors, fonts, domain, and mobile app store name. It will look and feel exactly like your own product." },
  ],

  relatedIndustries: [
    { label: "Healthcare", href: "/industry/healthcare" },
    { label: "NGO", href: "/industry/ngo" },
    { label: "Consulting", href: "/industry/consulting" },
    { label: "News & Blog", href: "/industry/news-blog" },
  ],

  ctaHeading: "Ready to Build Your Digital Education Platform?",
  ctaDesc: "Join leading schools, universities, and EdTech companies who trust WebCodian to engineer world-class learning experiences at enterprise scale.",
};

export default function Page() {
  return <IndustryPageTemplate data={data} />;
}
