"use client";

import { motion } from "framer-motion";
import { AboutBreadcrumb } from "@/components/AboutBreadcrumb";
import { PremiumInternshipForm } from "@/components/PremiumInternshipForm";
import { 
  Laptop, Code2, Users, Award, ShieldCheck, Zap, 
  BookOpen, BrainCircuit, MonitorSmartphone, Target,
  Briefcase, CheckCircle2, TrendingUp, Calendar, ChevronRight
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const perks = [
  {
    icon: Code2,
    title: "Live Production Projects",
    desc: "Build and deploy features on actual enterprise client applications with Git, CI/CD, and peer reviews."
  },
  {
    icon: Users,
    title: "1-on-1 Senior Mentorship",
    desc: "Weekly personalized 1:1 architectural reviews, debugging walkthroughs, and career coaching."
  },
  {
    icon: Award,
    title: "Verified Certificate & LOR",
    desc: "Receive an official verifiable certificate with Letter of Recommendation from WebCodian LLP."
  },
  {
    icon: Zap,
    title: "Pre-Placement Offer (PPO)",
    desc: "Top 20% high performers get fast-tracked into full-time software developer and engineer positions."
  }
];

const technologies = [
  "React.js", "Next.js", "Node.js", "Python", "Django", "Flutter", 
  "React Native", "TensorFlow", "AWS", "Docker", "Kubernetes", "MongoDB"
];

const faqs = [
  { q: "Do I need prior coding experience?", a: "Basic programming knowledge is recommended, but our curriculum is designed to take you from foundational concepts to advanced enterprise architecture." },
  { q: "Is this a paid internship?", a: "We offer both stipend-based internships for advanced candidates and comprehensive training-cum-internship programs for beginners. Apply to check your eligibility." },
  { q: "Will I get a certificate?", a: "Yes, every successful candidate receives a verifiable corporate internship certificate and a detailed Letter of Recommendation (LOR)." },
  { q: "Do you provide job placement?", a: "Absolutely. We offer Pre-Placement Offers (PPO) to top performers and 100% placement assistance to all candidates who successfully complete the live projects." }
];

export default function InternshipPage() {
  return (
    <main className="bg-slate-50">
      <AboutBreadcrumb 
        title="TECH INTERNSHIP PROGRAM"
        subtitle="Work on real enterprise applications, learn directly from lead software architects, and fast-track your tech career."
        badge="🚀 2026 COHORT APPLICATIONS OPEN"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "More" },
          { label: "Internship" }
        ]}
        highlights={["Live Client Deployments", "Senior Mentorship", "Verified Certificate", "PPO Opportunities"]}
      />

      {/* Highlights & Benefits Bar (Existing) */}
      <section className="py-14 bg-white border-b border-slate-100 relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 max-w-[1400px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {perks.map((perk, idx) => (
              <motion.div
                key={perk.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="p-6 rounded-[18px] bg-slate-50 border border-slate-100 hover:border-[var(--primary)]/40 hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-[18px] bg-[var(--primary)]/10 text-[var(--primary)] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <perk.icon className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">{perk.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{perk.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Internship Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-[1400px]">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Internship Overview</h2>
              <div className="text-slate-600 text-lg leading-relaxed space-y-4">
                <p>
                  The WebCodian IT Training & Internship Program is a highly immersive, project-driven learning experience. We don't just teach theory; we integrate you into our production teams to build, scale, and maintain enterprise software.
                </p>
                <p>
                  Designed by industry veterans, our internship bridges the massive gap between academic learning and industry expectations. You will write code that gets deployed to actual users, participate in agile scrums, and learn the modern software development lifecycle (SDLC).
                </p>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2 relative rounded-3xl overflow-hidden shadow-2xl"
            >
              <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800" alt="Students Coding" className="w-full h-auto" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose WebCodian */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-[1400px]">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose WebCodian Internship?</h2>
            <p className="text-slate-400 text-lg">We offer an ecosystem of growth, innovation, and absolute engineering excellence.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Live Client Projects", desc: "Say goodbye to dummy projects. Work on software that generates revenue and solves real-world business problems.", img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800" },
              { title: "Expert Mentorship", desc: "Get mentored by Senior Engineers who have built scalable architectures for global enterprises.", img: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800" },
              { title: "Corporate Environment", desc: "Experience the actual culture, pace, and agility of a top-tier IT agency before you even graduate.", img: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800" }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-slate-800 rounded-3xl overflow-hidden group"
              >
                <div className="h-48 overflow-hidden">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-slate-400">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Programs */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-[1400px]">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Our Training Programs</h2>
            <p className="text-slate-600 text-lg">Choose from our highly specialized, industry-relevant training domains.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* AI */}
            <motion.div whileHover={{ y: -10 }} className="p-8 rounded-3xl bg-blue-50 border border-blue-100">
              <BrainCircuit className="w-12 h-12 text-blue-600 mb-6" />
              <h3 className="text-2xl font-bold text-slate-900 mb-4">AI & Automation</h3>
              <p className="text-slate-600 mb-6">Master Machine Learning, Generative AI, LLMs, and enterprise automation utilizing Python and TensorFlow.</p>
              <ul className="space-y-3">
                {["Prompt Engineering", "Custom GPTs", "NLP & Computer Vision", "AI SaaS Architecture"].map(i => (
                  <li key={i} className="flex items-center gap-2 text-sm font-medium text-slate-700"><CheckCircle2 className="w-4 h-4 text-blue-600"/>{i}</li>
                ))}
              </ul>
            </motion.div>

            {/* Web */}
            <motion.div whileHover={{ y: -10 }} className="p-8 rounded-3xl bg-indigo-50 border border-indigo-100">
              <Laptop className="w-12 h-12 text-indigo-600 mb-6" />
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Web Development</h3>
              <p className="text-slate-600 mb-6">Become a Full-Stack Web Developer. Build scalable, SSR/SSG applications using modern JavaScript frameworks.</p>
              <ul className="space-y-3">
                {["React & Next.js", "Node.js & Express", "Database Design", "Cloud Deployment"].map(i => (
                  <li key={i} className="flex items-center gap-2 text-sm font-medium text-slate-700"><CheckCircle2 className="w-4 h-4 text-indigo-600"/>{i}</li>
                ))}
              </ul>
            </motion.div>

            {/* Mobile */}
            <motion.div whileHover={{ y: -10 }} className="p-8 rounded-3xl bg-purple-50 border border-purple-100">
              <MonitorSmartphone className="w-12 h-12 text-purple-600 mb-6" />
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Mobile App Dev</h3>
              <p className="text-slate-600 mb-6">Develop native and cross-platform mobile applications for iOS and Android with beautiful user interfaces.</p>
              <ul className="space-y-3">
                {["Flutter & Dart", "React Native", "API Integrations", "App Store Publishing"].map(i => (
                  <li key={i} className="flex items-center gap-2 text-sm font-medium text-slate-700"><CheckCircle2 className="w-4 h-4 text-purple-600"/>{i}</li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Learning Roadmap */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-4 lg:px-8 max-w-[1400px]">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">The Learning Roadmap</h2>
            <p className="text-slate-600 text-lg">A structured, proven path to transform you into an enterprise-ready engineer.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-200 -translate-y-1/2 z-0"></div>
            
            {[
              { step: "01", title: "Foundation", desc: "Master core languages, algorithms, and industry-standard coding practices." },
              { step: "02", title: "Frameworks", desc: "Dive deep into modern frameworks (React, Next, Node) and UI libraries." },
              { step: "03", title: "Architecture", desc: "Learn system design, database modeling, and scalable cloud deployments." },
              { step: "04", title: "Live Client", desc: "Deploy your code to production environments on real client applications." }
            ].map((phase, idx) => (
              <div key={idx} className="relative z-10 bg-white p-8 rounded-3xl shadow-lg border border-slate-100 text-center">
                <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-bold mx-auto mb-6 shadow-xl shadow-blue-600/30">
                  {phase.step}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{phase.title}</h3>
                <p className="text-slate-600 text-sm">{phase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies & Certification */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-[1400px]">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Technologies Covered</h2>
              <p className="text-slate-600 text-lg mb-8">We train you on the exact tech stack utilized by top Fortune 500 companies and leading startups globally.</p>
              <div className="flex flex-wrap gap-3">
                {technologies.map(tech => (
                  <span key={tech} className="px-5 py-2.5 bg-slate-100 text-slate-800 rounded-full font-medium border border-slate-200 hover:bg-blue-600 hover:text-white transition-colors cursor-default">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="lg:w-1/2 bg-gradient-to-br from-slate-900 to-slate-800 p-10 md:p-14 rounded-[40px] text-white shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <Award className="w-48 h-48" />
              </div>
              <Award className="w-12 h-12 text-yellow-400 mb-6" />
              <h2 className="text-3xl font-bold mb-4 relative z-10">Corporate Certification</h2>
              <p className="text-slate-300 text-lg mb-8 relative z-10">
                Upon successful completion of the internship and live projects, receive a globally recognized, verifiable Corporate Internship Certificate alongside a personalized Letter of Recommendation.
              </p>
              <ul className="space-y-4 relative z-10">
                <li className="flex items-center gap-3"><CheckCircle2 className="text-green-400"/> Verifiable Digital Credential</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="text-green-400"/> Detailed LOR from Lead Architect</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="text-green-400"/> Validated GitHub Contributions</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Placement & Student Journey */}
      <section className="py-20 bg-blue-600 text-white overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 max-w-[1400px] relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Placement Assistance & Pre-Placement Offers</h2>
              <p className="text-blue-100 text-lg mb-8 leading-relaxed">
                Our ultimate goal is your successful career. High-performing interns who demonstrate exceptional problem-solving skills and teamwork are offered direct full-time positions (PPOs) at WebCodian. 
              </p>
              <p className="text-blue-100 text-lg mb-10 leading-relaxed">
                For all certified candidates, we provide rigorous resume-building workshops, mock technical interviews, and direct referrals to our extensive network of partner IT firms.
              </p>
              <div className="flex items-center gap-6">
                <div className="flex flex-col">
                  <span className="text-4xl font-bold">100%</span>
                  <span className="text-blue-200">Placement Assistance</span>
                </div>
                <div className="w-px h-12 bg-blue-400"></div>
                <div className="flex flex-col">
                  <span className="text-4xl font-bold">50+</span>
                  <span className="text-blue-200">Hiring Partners</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800" alt="Placements" className="rounded-3xl shadow-2xl relative z-10" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-yellow-400 rounded-full blur-3xl opacity-30 z-0"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Batch Schedule & Eligibility */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-[1400px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                <Calendar className="text-blue-600" /> Batch Schedule
              </h2>
              <div className="space-y-6">
                <div className="p-6 bg-slate-50 border border-slate-200 rounded-2xl flex justify-between items-center">
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg">Summer Cohort 2026</h4>
                    <p className="text-slate-500">Duration: 3 to 6 Months</p>
                  </div>
                  <span className="px-4 py-1.5 bg-green-100 text-green-700 rounded-full text-sm font-bold">Admissions Open</span>
                </div>
                <div className="p-6 bg-slate-50 border border-slate-200 rounded-2xl flex justify-between items-center">
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg">Winter Cohort 2026</h4>
                    <p className="text-slate-500">Duration: 3 to 6 Months</p>
                  </div>
                  <span className="px-4 py-1.5 bg-slate-200 text-slate-600 rounded-full text-sm font-bold">Upcoming</span>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                <Target className="text-blue-600" /> Eligibility Criteria
              </h2>
              <ul className="space-y-4">
                <li className="flex gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100">
                  <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0 font-bold">1</div>
                  <div>
                    <h4 className="font-bold text-slate-900">Academic Background</h4>
                    <p className="text-slate-600 text-sm">B.Tech, BCA, MCA, B.Sc (IT), or equivalent degree students (Pursuing or Graduated).</p>
                  </div>
                </li>
                <li className="flex gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100">
                  <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0 font-bold">2</div>
                  <div>
                    <h4 className="font-bold text-slate-900">Foundation Knowledge</h4>
                    <p className="text-slate-600 text-sm">Basic understanding of programming fundamentals (C, C++, Java, or Python).</p>
                  </div>
                </li>
                <li className="flex gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100">
                  <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0 font-bold">3</div>
                  <div>
                    <h4 className="font-bold text-slate-900">Passion for Tech</h4>
                    <p className="text-slate-600 text-sm">A strong drive to solve logic problems, learn new frameworks, and build products.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-6">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                <h3 className="text-xl font-bold text-slate-900 mb-3">{faq.q}</h3>
                <p className="text-slate-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form CTA - Keeping existing component */}
      <div className="border-t border-slate-200" id="apply">
        <PremiumInternshipForm />
      </div>
    </main>
  );
}
