import { IndustryPageTemplate, IndustryPageData } from "@/components/IndustryPageTemplate";

const data: IndustryPageData = {
  heroTitle: "Industry 4.0 Solutions for Manufacturing & Industrial Enterprises",
  heroSubtitle: "Modernize your factory floor with custom ERP systems, IoT-powered production intelligence, AI quality control, and supply chain digitization engineered for the modern manufacturing enterprise.",
  heroImg: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2000&auto=format&fit=crop",
  breadcrumbLabel: "Manufacturing",
  breadcrumbHref: "/industry/manufacturing",

  overviewHeading: "Powering the Smart Factory of Tomorrow",
  overviewText: "Indian manufacturing is at a critical inflection point. With the PLI scheme, global supply chain realignment, and the China+1 strategy, Indian manufacturers have a once-in-a-generation opportunity to capture global market share. But this opportunity requires operational excellence that manual processes simply cannot deliver. WebCodian engineers comprehensive Industry 4.0 solutions — from custom ERP and MES systems to IoT sensor networks and AI quality inspection — that help manufacturers achieve the productivity, quality, and traceability standards demanded by global customers.",
  overviewImg: "https://images.unsplash.com/photo-1565043666747-69f6646db940?q=80&w=2000&auto=format&fit=crop",
  overviewBullets: [
    "Custom ERP systems designed for discrete and process manufacturing",
    "MES (Manufacturing Execution System) with real-time production tracking",
    "IoT sensor integration for machine monitoring and OEE optimization",
    "AI-powered visual quality inspection systems",
    "End-to-end supply chain digitization and supplier portals",
  ],

  challenges: [
    { title: "Production Visibility Gaps", desc: "Managers lacking real-time visibility into production output, machine status, and shop floor efficiency across multiple plants." },
    { title: "Legacy ERP Limitations", desc: "Outdated SAP or Tally implementations unable to handle modern IoT data, mobile workflows, or real-time production analytics." },
    { title: "Quality Control Inefficiencies", desc: "Manual quality inspection creating high defect escape rates, customer returns, and warranty claim costs." },
    { title: "Supply Chain Disruption Vulnerability", desc: "Single-source supplier dependencies and poor supply chain visibility making manufacturers extremely vulnerable to disruption." },
    { title: "Maintenance & Downtime Costs", desc: "Reactive maintenance strategies resulting in catastrophic machine failures, production stoppages, and high emergency repair costs." },
    { title: "Inventory & Working Capital Lock-Up", desc: "Excess raw material inventory and poor finished goods management locking up crores of working capital unnecessarily." },
  ],

  transformationPoints: [
    { title: "Real-Time OEE Monitoring", desc: "IoT sensors on every machine providing real-time Overall Equipment Effectiveness (OEE) data accessible from any device anywhere." },
    { title: "Predictive Maintenance (PdM)", desc: "ML models analyzing vibration, temperature, and power consumption data to predict machine failures 2–4 weeks in advance." },
    { title: "AI Visual Quality Inspection", desc: "Computer vision systems on production lines that detect defects at microscopic levels faster and more consistently than human inspectors." },
    { title: "Digital Supply Chain Visibility", desc: "End-to-end supply chain tower giving procurement teams real-time visibility into supplier inventory, delivery schedules, and risk indicators." },
    { title: "Paperless Factory Floor", desc: "Mobile-first production execution with digital work orders, electronic batch records, QC checklists, and e-signatures replacing all paper processes." },
    { title: "Energy Intelligence Platform", desc: "IoT energy monitoring across all machinery and buildings with AI-powered optimization recommendations to reduce energy costs by 20–35%." },
  ],

  solutions: [
    { title: "Custom Manufacturing ERP", desc: "Purpose-built ERP covering production planning, inventory, procurement, quality, maintenance, finance, and HRMS in one unified platform." },
    { title: "Manufacturing Execution System (MES)", desc: "Real-time shop floor execution system with work order management, machine integration, genealogy tracking, and OEE dashboards." },
    { title: "IoT Platform & Machine Integration", desc: "Industrial IoT platforms that connect PLCs, SCADA systems, and legacy machines to provide real-time operational intelligence." },
    { title: "AI Quality Inspection System", desc: "Computer vision-based automated quality inspection that detects dimensional and surface defects at production line speed." },
  ],

  services: [
    { icon: "🏭", title: "Manufacturing ERP System", desc: "End-to-end ERP for production planning, inventory, procurement, quality, and financials in one platform." },
    { icon: "⚙️", title: "Manufacturing Execution System", desc: "Real-time shop floor execution with work orders, machine data, genealogy, and OEE monitoring." },
    { icon: "📡", title: "Industrial IoT Platform", desc: "Machine connectivity, sensor data collection, real-time dashboards, and predictive analytics for factory operations." },
    { icon: "🔍", title: "AI Quality Inspection", desc: "Computer vision-based defect detection on production lines for visual quality at machine speed." },
    { icon: "🚚", title: "Supply Chain Management", desc: "Supplier portals, purchase automation, demand planning, and logistics tracking for end-to-end supply visibility." },
    { icon: "📦", title: "Inventory & Warehouse Management", desc: "Real-time inventory tracking, barcode/RFID scanning, FIFO/FEFO management, and automated reorder points." },
    { icon: "🔧", title: "Predictive Maintenance System", desc: "AI-powered maintenance forecasting from IoT sensor data to prevent breakdowns and optimize maintenance schedules." },
    { icon: "📊", title: "Production Analytics Dashboard", desc: "Real-time and historical production performance dashboards with OEE, scrap rates, and downtime analysis." },
    { icon: "📋", title: "Quality Management System (QMS)", desc: "ISO-compliant QMS with SOP management, CAPA workflows, audit trails, and customer complaint management." },
  ],

  aiOpportunities: [
    { title: "Predictive Maintenance (PdM)", desc: "ML models analyzing real-time IoT sensor data to predict machine failures 2–4 weeks ahead, enabling planned maintenance instead of emergency stoppages." },
    { title: "AI Visual Defect Detection", desc: "Computer vision systems achieving 99.2%+ defect detection accuracy on production lines, dramatically reducing customer escapes." },
    { title: "Demand-Driven Production Planning", desc: "ML demand forecasting integrated with ERP to generate optimal production plans that minimize inventory while meeting customer delivery commitments." },
    { title: "Energy Consumption Optimization", desc: "AI analysis of machine energy data to identify inefficiencies and automatically schedule energy-intensive operations during off-peak tariff periods." },
    { title: "Supplier Risk Intelligence", desc: "AI monitoring of supplier financial health, geopolitical risks, and delivery performance to proactively manage supply chain disruption risks." },
  ],

  techStack: ["React.js", "Node.js", "Python", "Django", "PostgreSQL", "TimescaleDB", "InfluxDB", "MQTT", "OPC-UA", "AWS IoT", "Azure IoT Hub", "TensorFlow", "OpenCV", "Kafka", "Docker", "Kubernetes", "Power BI", "SCADA Integration"],

  devProcess: [
    { step: "01", title: "Factory & Process Audit", desc: "On-site assessment of your production processes, machine infrastructure, current systems, and data collection capabilities." },
    { step: "02", title: "IoT & Integration Architecture", desc: "Designing the machine connectivity layer, data pipeline, and integration architecture for your specific equipment and protocols." },
    { step: "03", title: "Phased Platform Development", desc: "Building ERP, MES, and IoT layers in parallel with continuous testing on actual production data from your factory." },
    { step: "04", title: "Go-Live & Continuous Optimization", desc: "Phased rollout starting with one plant or product line, followed by expansion and ongoing AI model improvement." },
  ],

  benefits: [
    { title: "20–40% OEE Improvement", desc: "Real-time machine monitoring and predictive maintenance routinely deliver 20–40% improvements in Overall Equipment Effectiveness." },
    { title: "70% Reduction in Quality Escapes", desc: "AI visual inspection dramatically reduces the customer-visible defect rate compared to manual inspection methods." },
    { title: "Significant Working Capital Reduction", desc: "Demand-driven inventory management typically reduces raw material and WIP inventory by 25–40%, freeing significant working capital." },
    { title: "Regulatory Traceability Compliance", desc: "Digital batch records, genealogy tracking, and electronic signatures enable instant regulatory traceability for automotive, pharma, and food manufacturers." },
    { title: "Global Customer Confidence", desc: "IATF 16949 / ISO 9001 digital quality management builds the confidence of international OEM customers in your manufacturing quality system." },
    { title: "Energy Cost Reduction", desc: "AI energy optimization platforms typically achieve 15–25% reductions in manufacturing energy costs within 12–18 months." },
  ],

  useCases: [
    { title: "Auto Component Manufacturer MES", img: "https://images.unsplash.com/photo-1565043666747-69f6646db940?q=80&w=800&auto=format&fit=crop", desc: "MES with full genealogy traceability for a Tier 1 auto component maker, meeting IATF 16949 requirements for 12 OEM customers." },
    { title: "Pharma Production ERP", img: "https://images.unsplash.com/photo-1606206887553-5c8b99c9bca5?q=80&w=800&auto=format&fit=crop", desc: "21 CFR Part 11 compliant ERP for a pharmaceutical manufacturer, covering batch production, quality, and regulatory reporting." },
    { title: "Textile Mill IoT Platform", img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=800&auto=format&fit=crop", desc: "IoT platform connecting 500 looms in a textile mill, providing real-time OEE, energy consumption, and production output dashboards." },
  ],

  caseStudy: {
    client: "Mid-Size Auto Component Manufacturer — Pune",
    industry: "Manufacturing · Automotive Components",
    challenge: "An IATF 16949-certified auto component maker was running production on a legacy Tally + Excel system with no real-time machine data, manual quality records on paper, and frequent customer complaints about delivery delays and quality escapes.",
    solution: "WebCodian deployed a custom MES with OPC-UA machine integration (35 CNCs and VMCs), AI visual defect detection on the finishing line, a digital QMS with CAPA workflows, and a supplier portal for Tier 2 vendors.",
    result: "OEE improved from 61% to 84%, customer quality escapes reduced by 78%, on-time delivery improved from 82% to 97%, and the company successfully passed an international OEM audit citing their digital quality system as best-in-class.",
  },

  stats: [
    { metric: "84%", label: "OEE Achievement", desc: "Up from 61% baseline" },
    { metric: "78%", label: "Quality Escape Reduction", desc: "Via AI visual inspection" },
    { metric: "97%", label: "On-Time Delivery Rate", desc: "Up from 82% baseline" },
    { metric: "35+", label: "Machines Connected", desc: "Via OPC-UA IoT integration" },
  ],

  securityTitle: "Industrial Cybersecurity & Operational Technology Protection",
  securityDesc: "Manufacturing facilities are increasingly targeted by ransomware and industrial espionage. We design every industrial IoT and ERP platform with OT (Operational Technology) security principles, network segmentation, and air-gapped architectures that protect your production systems from cyber threats without compromising operational efficiency.",
  securityPoints: [
    "IEC 62443 Industrial Cybersecurity Standards Compliance",
    "IT/OT Network Segmentation & Firewall Architecture",
    "Secure Machine-to-Cloud Data Encryption (TLS 1.3)",
    "Role-Based Access Control for Shop Floor Systems",
    "Regular OT Vulnerability Assessments & Penetration Testing",
    "Disaster Recovery Planning for Production-Critical Systems",
  ],
  securityImg: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2000&auto=format&fit=crop",

  faqs: [
    { q: "Can you integrate with our existing CNC machines and PLCs?", a: "Yes. We integrate with machines from all major manufacturers (Fanuc, Siemens, Mitsubishi, Haas) using OPC-UA, MQTT, and Modbus protocols, as well as legacy machines via edge computing devices." },
    { q: "How long does a typical manufacturing ERP implementation take?", a: "A core ERP covering production, inventory, and quality typically takes 4–6 months. Adding IoT machine connectivity and AI quality inspection adds another 2–4 months, delivered in agile sprints." },
    { q: "Can your ERP handle multi-plant operations?", a: "Yes. Our ERP is architected for multi-plant, multi-currency, and multi-entity operations with consolidated reporting at the group level." },
    { q: "Do you support IATF 16949 and ISO 9001 compliance features?", a: "Yes. We build IATF 16949 and ISO 9001 compliance workflows including APQP, PPAP, FMEA, control plan management, and customer-specific requirement handling." },
  ],

  relatedIndustries: [
    { label: "Security", href: "/industry/security" },
    { label: "Consulting", href: "/industry/consulting" },
    { label: "Real Estate", href: "/industry/real-estate" },
    { label: "E-Commerce", href: "/industry/e-commerce" },
  ],

  ctaHeading: "Ready to Build Your Smart Factory?",
  ctaDesc: "India's manufacturing renaissance is happening now. Partner with WebCodian to build the digital infrastructure that will make your factory the most efficient, highest-quality, and most competitive in your industry.",
};

export default function Page() {
  return <IndustryPageTemplate data={data} />;
}
