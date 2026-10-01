import { IndustryPageTemplate, IndustryPageData } from "@/components/IndustryPageTemplate";

const data: IndustryPageData = {
  heroTitle: "Advanced Technology Solutions for Security & Surveillance",
  heroSubtitle: "Fortify your security operations with custom access control systems, CCTV management platforms, cybersecurity dashboards, and AI-powered threat detection engineered for the modern security enterprise.",
  heroImg: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2000&auto=format&fit=crop",
  breadcrumbLabel: "Security",
  breadcrumbHref: "/industry/security",

  overviewHeading: "Intelligent Security Technology for a Complex Threat Landscape",
  overviewText: "The security industry faces an unprecedented convergence of physical and cyber threats. From corporate campuses and government facilities to smart cities and financial institutions, the demand for integrated, intelligent security technology has never been more critical. WebCodian engineers comprehensive security technology solutions — from unified CCTV management and AI-powered video analytics to cybersecurity dashboards and biometric access control — that give security operations centers real-time, actionable intelligence to prevent incidents before they occur.",
  overviewImg: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?q=80&w=2000&auto=format&fit=crop",
  overviewBullets: [
    "Unified CCTV management with AI-powered video analytics",
    "Biometric & NFC-based physical access control systems",
    "Cybersecurity operations dashboards and SIEM platforms",
    "Incident management and response coordination systems",
    "Guard management and patrol tracking platforms",
  ],

  challenges: [
    { title: "Disconnected Physical & Cyber Security", desc: "Organizations managing physical access control and cybersecurity through separate teams and systems, creating critical blind spots." },
    { title: "CCTV Management at Scale", desc: "Security teams overwhelmed trying to monitor hundreds of cameras manually, making real-time threat detection practically impossible." },
    { title: "Compliance Documentation Burden", desc: "Generating audit-ready security compliance reports (ISO 27001, SOC 2, MHA regulations) from manual records is enormously time-consuming." },
    { title: "Guard Accountability Issues", desc: "Traditional guard management with paper patrol logs enabling ghost reporting, route deviations, and undetected security lapses." },
    { title: "Incident Response Delays", desc: "Slow, uncoordinated incident response due to manual communication processes and no centralized incident management system." },
    { title: "Insider Threat Blind Spots", desc: "No behavioral analytics to detect suspicious employee access patterns, data exfiltration attempts, or social engineering activities." },
  ],

  transformationPoints: [
    { title: "Unified Security Operations Center", desc: "Converge physical and cyber security monitoring into a single, intelligent SOC dashboard for holistic situational awareness." },
    { title: "AI-Powered Video Analytics", desc: "Computer vision models that automatically detect intrusions, abandoned objects, crowd anomalies, and unauthorized access in real-time." },
    { title: "Intelligent Guard Management", desc: "GPS-tracked digital patrol routes, real-time guard location visibility, QR/NFC checkpoint scanning, and automated incident reporting." },
    { title: "Predictive Threat Modeling", desc: "ML models that analyze access patterns, network traffic, and behavioral signals to predict and prevent security incidents proactively." },
    { title: "Automated Compliance Reporting", desc: "One-click generation of audit-ready compliance reports for ISO 27001, SOC 2, PCI-DSS, and government regulatory requirements." },
    { title: "Zero-Trust Architecture Implementation", desc: "Enforcing zero-trust principles across physical and digital access controls, ensuring no implicit trust inside or outside the perimeter." },
  ],

  solutions: [
    { title: "Unified CCTV & VMS Platform", desc: "We engineer Video Management Systems that aggregate feeds from thousands of cameras with AI analytics, motion detection, and facial recognition." },
    { title: "Physical Access Control System", desc: "Biometric, RFID, NFC, and QR-based access control platforms with role-based permissions, anti-tailgating, and real-time audit logs." },
    { title: "Cybersecurity Dashboard & SIEM", desc: "Custom SIEM platforms aggregating logs from all IT infrastructure to provide real-time threat visibility and automated alert correlation." },
    { title: "Guard Management Platform", desc: "GPS-tracked guard management with digital patrol routes, checkpoint scanning, real-time monitoring, and incident escalation workflows." },
  ],

  services: [
    { icon: "📹", title: "CCTV & Video Management", desc: "Unified VMS for multi-site CCTV networks with AI analytics, motion detection, and cloud storage." },
    { icon: "🔐", title: "Access Control System", desc: "Biometric, RFID, and facial recognition-based access control with role-based permissions and audit logs." },
    { icon: "🛡️", title: "Cybersecurity Dashboard", desc: "Real-time SIEM platform with threat detection, log aggregation, and automated incident response playbooks." },
    { icon: "👮", title: "Guard Management Platform", desc: "GPS-tracked patrols, QR checkpoints, real-time location monitoring, and automated shift management." },
    { icon: "🚨", title: "Incident Management System", desc: "Centralized incident logging, investigation workflows, escalation management, and post-incident analytics." },
    { icon: "📋", title: "Compliance Reporting Engine", desc: "Automated generation of ISO 27001, SOC 2, MHA, and PCI-DSS compliance documentation and audit reports." },
    { icon: "🤖", title: "AI Video Analytics", desc: "Computer vision for intrusion detection, crowd analysis, abandoned object alerts, and facial recognition." },
    { icon: "📱", title: "Security Mobile App", desc: "Mobile app for guards, supervisors, and security managers with real-time alerts, incident reporting, and dashboards." },
    { icon: "🔍", title: "Forensic Investigation Tools", desc: "Intelligent video forensics with AI-powered search, timeline reconstruction, and export for legal proceedings." },
  ],

  aiOpportunities: [
    { title: "AI Intrusion Detection", desc: "Computer vision models that detect trespassing, perimeter breaches, and unauthorized access automatically from CCTV feeds." },
    { title: "Behavioral Threat Analytics", desc: "ML models analyzing employee access patterns, badge swipe sequences, and network behavior to detect insider threats." },
    { title: "Predictive Maintenance for Security Hardware", desc: "IoT sensor data analysis to predict camera, sensor, and access control hardware failures before they create security gaps." },
    { title: "Facial Recognition at Scale", desc: "Real-time facial recognition across enterprise-scale camera networks for visitor management, threat identification, and access verification." },
    { title: "Automated Threat Intelligence", desc: "AI that continuously monitors dark web sources, threat intelligence feeds, and vulnerability databases to provide proactive risk alerts." },
  ],

  techStack: ["React.js", "Next.js", "Python", "TensorFlow", "OpenCV", "Node.js", "PostgreSQL", "MongoDB", "TimescaleDB", "AWS", "Azure", "Docker", "Kubernetes", "ONVIF Protocol", "RTSP", "WebRTC", "Kafka", "ELK Stack"],

  devProcess: [
    { step: "01", title: "Security Posture Assessment", desc: "Comprehensive evaluation of your physical security infrastructure, cyber threat landscape, and compliance requirements." },
    { step: "02", title: "Architecture & Integration Design", desc: "Designing a unified security platform that integrates with existing hardware (cameras, sensors, biometrics) via ONVIF and standard protocols." },
    { step: "03", title: "Phased Platform Development", desc: "Building core monitoring, analytics, and management modules in security-first, penetration-tested development sprints." },
    { step: "04", title: "SOC Setup & Team Training", desc: "Security operations center configuration, alert threshold calibration, and comprehensive team training for maximum platform effectiveness." },
  ],

  benefits: [
    { title: "Proactive Threat Prevention", desc: "AI-powered analytics detect anomalies and potential threats minutes or hours before they escalate into actual security incidents." },
    { title: "Massively Expanded Monitoring Coverage", desc: "AI video analytics allow one operator to effectively monitor 500+ cameras simultaneously, compared to 16 with manual methods." },
    { title: "Dramatic Incident Response Improvement", desc: "Centralized incident management reduces average response time from 25 minutes to under 4 minutes for critical security events." },
    { title: "Audit-Ready Compliance", desc: "Automated reporting tools reduce compliance audit preparation time from weeks to hours for all major security standards." },
    { title: "Guard Force Accountability", desc: "GPS-tracked, QR-verified patrol management eliminates ghost reporting and provides 100% accountability for all guard activities." },
    { title: "Reduced Insurance Premiums", desc: "Advanced security infrastructure and incident history documentation frequently results in significant reductions in property and liability insurance premiums." },
  ],

  useCases: [
    { title: "Smart City Surveillance Platform", img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=800&auto=format&fit=crop", desc: "Unified VMS managing 10,000+ city cameras with AI analytics, traffic monitoring, and emergency response integration for a municipal government." },
    { title: "Corporate Cybersecurity SOC", img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop", desc: "Custom SIEM dashboard for a financial services company monitoring 500+ servers, 50TB+ daily log volume, and providing real-time threat intelligence." },
    { title: "Industrial Security Management", img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=800&auto=format&fit=crop", desc: "Integrated physical and cyber security platform for a manufacturing conglomerate with 15 plants, 3,000 employees, and HSE compliance requirements." },
  ],

  caseStudy: {
    client: "Large Corporate Campus — Gurgaon",
    industry: "Security · Physical & Cyber",
    challenge: "A 50,000 sq ft corporate campus was relying on a fragmented mix of DVR-based CCTV, paper patrol logs, and manual visitor books. Security incidents averaged 12 hours to fully investigate due to poor camera management and no centralized incident system.",
    solution: "WebCodian deployed a unified security platform: IP VMS with AI analytics for 200 cameras, biometric access control, digital guard management with GPS patrol tracking, and a centralized incident management system.",
    result: "Incident investigation time reduced from 12 hours to 45 minutes via AI-assisted video search, guard accountability increased to 100%, two attempted intrusions detected and prevented by AI perimeter alerts, and full ISO 27001 audit readiness achieved.",
  },

  stats: [
    { metric: "45 Min", label: "Incident Investigation", desc: "Down from 12 hours average" },
    { metric: "500+", label: "Cameras per Operator", desc: "Via AI video analytics" },
    { metric: "100%", label: "Guard Accountability", desc: "GPS-verified patrol tracking" },
    { metric: "4 Min", label: "Avg Response Time", desc: "Down from 25 min baseline" },
  ],

  securityTitle: "Security-First Architecture for Security Organizations",
  securityDesc: "The irony of security technology companies is that they themselves are prime targets for sophisticated cyberattacks. We build every security platform using zero-trust principles, encrypted data channels, and hardened infrastructure that meets the highest government and enterprise security standards.",
  securityPoints: [
    "Zero-Trust Architecture for All Platform Components",
    "End-to-End Encrypted Video Streams & Storage",
    "MHA & CERT-In Compliant Security Systems",
    "ISO 27001 Certified Development & Deployment Practices",
    "Air-Gapped Deployment Options for High-Security Installations",
    "Regular VAPT (Vulnerability Assessment & Penetration Testing)",
  ],
  securityImg: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=2000&auto=format&fit=crop",

  faqs: [
    { q: "Can your platform integrate with our existing CCTV cameras and DVR/NVR systems?", a: "Yes. We integrate with all ONVIF-compliant IP cameras and can also build connectors for legacy analog and hybrid systems through hardware bridges." },
    { q: "Is facial recognition legal to deploy in India?", a: "Yes, with proper consent and PDPB Act compliance. We ensure all facial recognition deployments include proper consent mechanisms and data governance frameworks." },
    { q: "Can you build an on-premise deployment for high-security environments?", a: "Absolutely. For government, defense, and high-security corporate clients, we deliver fully on-premise, air-gapped deployments with no cloud dependency." },
    { q: "How do you handle the massive video storage requirements?", a: "We architect hybrid storage solutions combining on-site NAS/SAN for high-priority footage with tiered cloud archiving for compliance retention requirements." },
  ],

  relatedIndustries: [
    { label: "Manufacturing", href: "/industry/manufacturing" },
    { label: "Consulting", href: "/industry/consulting" },
    { label: "Healthcare", href: "/industry/healthcare" },
    { label: "Real Estate", href: "/industry/real-estate" },
  ],

  ctaHeading: "Ready to Transform Your Security Operations?",
  ctaDesc: "The next security incident your organization faces will either be detected in minutes by AI — or discovered hours later the manual way. Partner with WebCodian to ensure it's the former.",
};

export default function Page() {
  return <IndustryPageTemplate data={data} />;
}
