import { SolutionPageTemplate, SolutionPageData } from "@/components/SolutionPageTemplate";

const data: SolutionPageData = {
  heroTitle: "Premium Mobile App Development",
  heroSubtitle: "Engineer native-feeling, high-performance mobile applications for iOS and Android. From consumer-facing startups to complex enterprise mobility solutions, we build apps that dominate the App Store.",
  heroImg: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&w=2000&auto=format&fit=crop",
  breadcrumbLabel: "Mobile App Dev",
  category: "Mobile & Web Solutions",

  overviewHeading: "Putting Your Business in the Pockets of Millions",
  overviewText: "In a mobile-first world, a poorly designed app is worse than having no app at all. Users expect instant load times, intuitive gestures, and flawless offline capabilities. WebCodian engineers premium mobile applications using modern frameworks like React Native and Flutter, allowing you to launch on both iOS and Android simultaneously without compromising on native performance or design.",
  overviewImg: "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2000&auto=format&fit=crop",
  overviewBullets: [
    "Cross-Platform Development (React Native, Flutter)",
    "Native iOS (Swift) and Android (Kotlin) Engineering",
    "Enterprise Mobility and Internal Staff Apps",
    "Mobile Commerce and High-Volume Booking Apps",
    "Hardware Integration (Bluetooth, RFID, Biometrics)",
    "App Store Optimization (ASO) and Launch Strategy",
  ],

  challenges: [
    { title: "Slow, Clunky User Experiences", desc: "Apps built with outdated hybrid wrappers (like Cordova) that feel sluggish, drain battery life, and fail to provide the smooth animations users expect from native apps." },
    { title: "High Costs of Dual Development", desc: "Hiring two separate teams (one for Swift/iOS, one for Kotlin/Android) effectively doubling the development cost, timeline, and ongoing maintenance budget." },
    { title: "App Store Rejections", desc: "Spending months building an app only to have it repeatedly rejected by Apple or Google due to obscure guideline violations or poor performance." },
    { title: "Offline Uselessness", desc: "Apps that instantly crash or freeze the moment the user loses internet connection, destroying the user experience in transit or rural areas." },
    { title: "Poor Backend Architecture", desc: "A beautiful app that fails to load data because the backend APIs are slow, unscalable, or poorly designed for mobile data consumption." },
    { title: "Low User Retention", desc: "Launching an app that gets downloaded but is deleted within 3 days because the onboarding is confusing and the core value is hard to access." },
  ],

  whyPoints: [
    { title: "Write Once, Deploy Everywhere", desc: "Using React Native or Flutter, we build a single codebase that compiles to native code for both iOS and Android, cutting development time and costs by up to 40%." },
    { title: "True Native Performance", desc: "Unlike older hybrid apps, modern cross-platform frameworks communicate directly with the device's GPU and hardware, ensuring 60fps animations and native feel." },
    { title: "Offline-First Engineering", desc: "We implement robust local databases (SQLite/WatermelonDB) so your app remains functional and queues user actions even when the internet drops." },
    { title: "Frictionless Onboarding", desc: "We design UX flows that guide users to the app's core value immediately, heavily utilizing biometrics (FaceID/TouchID) and social logins." },
    { title: "Seamless Hardware Integration", desc: "Deep integration with device capabilities including camera, GPS, push notifications, Bluetooth LE, and haptic feedback." },
    { title: "End-to-End Delivery", desc: "We handle everything from the initial Figma design and API backend architecture to the final submission and approval in the App Store and Google Play." },
  ],

  solutions: [
    { title: "Consumer App Engineering", desc: "Building beautiful, addictive B2C applications designed for mass consumer adoption, featuring social features, gamification, and in-app purchases." },
    { title: "Enterprise Mobility Apps", desc: "Developing secure, internal applications for field sales teams, warehouse workers, or executives, deeply integrated with your corporate ERP/CRM." },
    { title: "Mobile Commerce (M-Commerce)", desc: "Engineering lightning-fast shopping apps with Apple Pay/Google Pay integration, AR product visualization, and personalized push notifications." },
    { title: "IoT & Hardware Connected Apps", desc: "Creating specialized apps that interface via Bluetooth or Wi-Fi with custom hardware, wearables, or smart home devices." },
  ],

  features: [
    { icon: "⚛️", title: "React Native / Flutter", desc: "Industry-leading frameworks backed by Meta and Google for building premium cross-platform applications." },
    { icon: "🎨", title: "Native UI/UX Design", desc: "Following Apple's Human Interface Guidelines and Google's Material Design to ensure the app feels 'right' on both platforms." },
    { icon: "🔒", title: "Biometric Authentication", desc: "Frictionless, highly secure user login utilizing native FaceID, TouchID, and Android Fingerprint APIs." },
    { icon: "🔔", title: "Rich Push Notifications", desc: "Deeply integrated notification strategies using Firebase (FCM) to re-engage users with personalized, deep-linked alerts." },
    { icon: "📍", title: "Advanced Geolocation", desc: "Real-time background location tracking, geofencing, and map integration for delivery, fitness, or logistics apps." },
    { icon: "💳", title: "In-App Payments", desc: "Seamless integration with Stripe, Razorpay, Apple In-App Purchases (IAP), and Google Play Billing for subscriptions." },
    { icon: "💾", title: "Offline Syncing", desc: "Intelligent data caching strategies ensuring users can read and write data without an active network connection." },
    { icon: "📊", title: "Mobile Analytics", desc: "Integration with Amplitude, Mixpanel, or Firebase to track user journeys, screen time, and feature adoption." },
    { icon: "🤖", title: "On-Device Machine Learning", desc: "Integrating CoreML or ML Kit for offline image recognition, barcode scanning, or natural language processing." },
  ],

  benefits: [
    { title: "Accelerated Time-to-Market", desc: "Cross-platform development allows you to capture both the iOS and Android markets simultaneously in the time it takes to build one native app." },
    { title: "Lower Maintenance Costs", desc: "When you want to add a feature or fix a bug, you only update one codebase, drastically reducing your ongoing engineering retainer." },
    { title: "Higher User Retention", desc: "Smooth performance, intuitive UX, and strategic push notifications combine to keep users opening your app daily." },
    { title: "Increased Brand Loyalty", desc: "Occupying real estate on a customer's home screen creates a constant, daily brand impression that a website cannot match." },
    { title: "Streamlined Field Operations", desc: "Enterprise apps eliminate paper trails and manual data entry, providing field workers with immediate access to corporate data." },
    { title: "New Revenue Streams", desc: "Unlock subscription models, in-app purchases, and mobile-specific monetization strategies directly through the app stores." },
  ],

  techStack: ["React Native", "Flutter", "Swift (iOS)", "Kotlin (Android)", "Node.js", "Firebase", "SQLite / WatermelonDB", "GraphQL", "Redux Toolkit", "Stripe", "AWS", "Fastlane"],

  process: [
    { step: "01", title: "UX Strategy & Wireframing", desc: "Mapping the mobile user journey, designing intuitive thumb-friendly interfaces, and creating clickable Figma prototypes." },
    { step: "02", title: "API & Architecture", desc: "Designing a highly scalable, secure backend API specifically optimized to deliver small data payloads to mobile devices." },
    { step: "03", title: "Cross-Platform Engineering", desc: "Developing the app using React Native/Flutter in Agile sprints, ensuring 60fps performance and native feature integration." },
    { step: "04", title: "Testing & App Store Launch", desc: "Rigorous testing across dozens of real physical devices, managing the App Store review process, and executing a successful launch." },
  ],

  industries: ["Health & Fitness", "FinTech & Banking", "E-Commerce & Retail", "On-Demand Delivery", "Real Estate", "Education (EdTech)", "Social Networking", "Enterprise Logistics"],

  aiPoints: [
    { title: "AI-Powered Personalization", desc: "Machine learning algorithms that analyze in-app behavior to customize the home feed, suggesting exactly what the user wants to see next." },
    { title: "On-Device Computer Vision", desc: "Using the phone's camera and local AI models to instantly scan documents, recognize products, or apply real-time AR filters without needing internet." },
    { title: "Conversational Interfaces", desc: "Integrating voice recognition and LLMs directly into the app, allowing users to navigate or execute commands entirely hands-free." },
    { title: "Predictive Caching", desc: "AI that learns an individual user's habits and pre-downloads content they are likely to view (like the next episode or specific product images) for instant loading." },
    { title: "Smart Notification Timing", desc: "Algorithms that determine the exact minute a specific user is most likely to open the app, and delaying push notifications until that precise moment." },
  ],

  securityTitle: "Ironclad Mobile Security Architecture",
  securityDesc: "Mobile apps often store highly sensitive personal and financial data directly on a device that is easily lost or stolen. We engineer mobile applications with military-grade security, protecting data both at rest on the phone and in transit to the server.",
  securityPoints: [
    "Secure Enclave/Keystore utilization for storing cryptographic keys and JWT tokens",
    "Certificate Pinning to prevent Man-in-the-Middle (MITM) API attacks",
    "Jailbreak and Root detection to prevent app execution on compromised devices",
    "End-to-End Encryption for all sensitive data transmission",
    "Obfuscation of source code to prevent reverse engineering of the APK/IPA",
    "Biometric-gated application execution (App Lock)",
  ],
  securityImg: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?q=80&w=2000&auto=format&fit=crop",

  caseStudy: {
    client: "National Logistics Fleet — Delhi NCR",
    label: "Mobile App · Enterprise Field Operations",
    challenge: "A logistics company with 500+ drivers relied on WhatsApp and paper manifests. Drivers frequently lost connectivity on highways, leading to lost delivery confirmations, delayed invoicing, and massive administrative overhead.",
    solution: "WebCodian engineered an offline-first React Native app for the drivers, deeply integrated with the company's central ERP. It featured GPS tracking, barcode scanning, and digital signature capture.",
    result: "Because the app utilized a local SQLite database, drivers could capture signatures and update statuses completely offline; the app automatically synced the moment they regained a 4G connection. Invoicing delays dropped from 4 days to 4 minutes, and administrative data entry costs were reduced by 85%.",
  },

  stats: [
    { metric: "100%", label: "Offline Functionality", desc: "Zero data loss in dead zones" },
    { metric: "4m", label: "Invoicing Speed", desc: "Down from 4 days" },
    { metric: "85%", label: "Admin Cost Reduction", desc: "Eliminated manual data entry" },
    { metric: "500+", label: "Daily Active Drivers", desc: "Seamless enterprise adoption" },
  ],

  supportPoints: [
    { title: "OS Update Compatibility", desc: "Apple and Google release new OS versions annually. We proactively update your app to ensure it doesn't break when iOS 18 or Android 15 drops." },
    { title: "Crash Analytics Monitoring", desc: "Continuous monitoring via Sentry or Firebase Crashlytics. If the app crashes for a user, our engineers are instantly alerted with the exact line of code that caused it." },
    { title: "App Store Optimization (ASO)", desc: "Monthly refinement of your app's keywords, screenshots, and description to improve its organic ranking in the App Store search results." },
    { title: "Feature Iteration", desc: "Analyzing user behavior data to design, build, and push new features in regular update cycles (sprints)." },
    { title: "Security Patching", desc: "Regular auditing and updating of all third-party libraries (NPM packages) to protect the app against newly discovered vulnerabilities." },
    { title: "Backend API Scaling", desc: "As your app goes viral and user numbers spike, we manage the cloud infrastructure to ensure the APIs remain lightning fast." },
  ],

  faqs: [
    { q: "Should we build Native (Swift/Kotlin) or Cross-Platform (React Native)?", a: "For 95% of businesses, we highly recommend React Native or Flutter. They allow you to build for both iOS and Android simultaneously using one codebase, saving massive time and money, while delivering performance that is indistinguishable from true native apps. We only recommend pure Native if you are building heavy 3D games or apps that require extremely low-level hardware access." },
    { q: "How long does it take to build a mobile app?", a: "A high-quality Minimum Viable Product (MVP) typically takes 10 to 14 weeks. This includes UX design, API development, mobile engineering, and the App Store review process. Highly complex enterprise apps may take longer." },
    { q: "Do you handle the App Store submission process?", a: "Yes. Getting approved by Apple (in particular) can be notoriously difficult due to their strict guidelines. We handle the entire compilation, signing, and submission process for both the Apple App Store and Google Play Store." },
    { q: "Can a mobile app work without the internet?", a: "Yes. We specialize in 'Offline-First' architecture. We build a local database on the phone itself. The user can continue to use the app, save data, and trigger actions. The moment the phone detects an internet connection, the app automatically syncs all changes with the cloud server seamlessly in the background." },
  ],

  relatedServices: [
    { label: "App Development", href: "/app-development" },
    { label: "Digital Product Design", href: "/digital-product" },
    { label: "UI/UX Design", href: "/ui-ux-design-and-prototyping" },
    { label: "Web Application Dev", href: "/web-application-development" },
    { label: "Custom Software", href: "/custom-software-development" },
  ],

  ctaHeading: "Ready to Build Your Mobile Experience?",
  ctaDesc: "Stop settling for clunky apps. Partner with WebCodian to engineer a premium, native-feeling mobile application that users love.",
};

export default function Page() {
  return <SolutionPageTemplate data={data} />;
}
