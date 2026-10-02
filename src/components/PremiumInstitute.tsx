"use client";

import { motion } from "framer-motion";
import { Laptop, Code2, PenTool, BarChart, Database, MonitorPlay, ArrowRight, Users, Trophy, HeartHandshake } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const learningPaths = [
  { 
    id: "beginner", 
    title: "BEGINNER", 
    courses: "Computer Fundamentals, DCA", 
    icon: <Laptop className="w-6 h-6 text-[var(--primary)]" />,
    gradient: "from-emerald-400 to-teal-500",
    glow: "bg-slate-50/15",
    iconBg: "bg-slate-50 border-slate-100",
    titleColor: "text-[var(--primary)]"
  },
  { 
    id: "professional", 
    title: "PROFESSIONAL", 
    courses: "ADCA, Tally Prime, Adv. Excel", 
    icon: <Database className="w-6 h-6 text-blue-500" />,
    gradient: "from-blue-400 to-cyan-500",
    glow: "bg-blue-500/15",
    iconBg: "bg-blue-50 border-blue-200",
    titleColor: "text-blue-600"
  },
  { 
    id: "developer", 
    title: "DEVELOPER", 
    courses: "Web Dev, React, Full Stack", 
    icon: <Code2 className="w-6 h-6 text-indigo-500" />,
    gradient: "from-indigo-400 to-purple-500",
    glow: "bg-indigo-500/15",
    iconBg: "bg-indigo-50 border-indigo-200",
    titleColor: "text-indigo-600"
  },
  { 
    id: "creative", 
    title: "CREATIVE", 
    courses: "Graphic Design, Video Editing", 
    icon: <PenTool className="w-6 h-6 text-[var(--primary)]" />,
    gradient: "from-pink-400 to-rose-500",
    glow: "bg-slate-50/15",
    iconBg: "bg-slate-50 border-slate-100",
    titleColor: "text-[var(--primary)]"
  },
  { 
    id: "digital", 
    title: "DIGITAL", 
    courses: "Digital Marketing, SEO", 
    icon: <BarChart className="w-6 h-6 text-[var(--primary)]" />,
    gradient: "from-orange-400 to-amber-500",
    glow: "bg-slate-50/15",
    iconBg: "bg-slate-50 border-slate-100",
    titleColor: "text-[var(--primary)]"
  },
  { 
    id: "ai", 
    title: "AI", 
    courses: "Python, AI Tools, Gen AI", 
    icon: <MonitorPlay className="w-6 h-6 text-[var(--primary)]" />,
    gradient: "from-purple-400 to-fuchsia-500",
    glow: "bg-slate-50/15",
    iconBg: "bg-slate-50 border-slate-100",
    titleColor: "text-[var(--primary)]"
  },
];

const courses = [
  { title: "ADCA", desc: "Advanced Diploma in Computer Applications.", skills: "MS Office, Tally, Internet", image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=400&q=80" }, // Office learning
  { title: "Full Stack Development", desc: "Master frontend and backend technologies.", skills: "React, Node.js, MongoDB", image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=400&q=80" }, // Coding laptop
  { title: "Digital Marketing", desc: "Comprehensive marketing strategies.", skills: "SEO, SEM, Social Media", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=400&q=80" }, // Analytics
  { title: "AI & Generative AI", desc: "Learn to build modern AI solutions.", skills: "Python, Prompt Engineering", image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=400&q=80" }, // Tech AI
  { title: "Graphic Design", desc: "Create stunning visual content.", skills: "Photoshop, Illustrator", image: "https://images.unsplash.com/photo-1561070791260-0006a28492bf?auto=format&fit=crop&w=400&q=80" }, // Design
  { title: "React JS Mastery", desc: "Advanced frontend development.", skills: "React, Redux, Next.js", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=400&q=80" }, // Dashboard/Code
];

export function PremiumInstitute() {
  return (
    <section className="py-16 lg:py-12 bg-white relative overflow-hidden">
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-50 via-white to-white" />
      
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
        
        {/* Institute Hero Header with Illustration */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 mb-16 lg:mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white text-blue-700 border border-blue-100 shadow-sm mb-6">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
              <span className="text-[11px] font-bold tracking-widest uppercase">WebCodian Academy</span>
            </div>
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-900 leading-tight mb-6 tracking-tight">
              Empower Your Future with <br className="hidden md:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Professional IT Training</span>
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-xl">
              Build practical digital skills with industry-focused computer and technology training. Learn from senior developers and engineers to kickstart your tech career.
            </p>
            <Link href="/courses" className="btn-primary">
              Explore All Courses
            </Link>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:w-1/2 relative"
          >
            {/* Background Blob */}
            <div className="absolute inset-0 bg-blue-100/50 rounded-full blur-[80px] -z-10"></div>
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border border-white/50 bg-gradient-to-b from-white to-slate-50 p-2">
              <div className="rounded-[1.5rem] overflow-hidden">
                 <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop" alt="Premium Tech Academy" className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Achievements Counter - Inspired by Indian Computer */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16 lg:mb-20">
          {[
            { value: "50,000+", label: "Students Trained", icon: <Users className="w-8 h-8 text-[var(--primary)]" /> },
            { value: "100+", label: "Expert Faculties", icon: <Trophy className="w-8 h-8 text-blue-500" /> },
            { value: "15+", label: "Years Experience", icon: <BarChart className="w-8 h-8 text-[var(--primary)]" /> },
            { value: "100%", label: "Placement Assist", icon: <HeartHandshake className="w-8 h-8 text-[var(--primary)]" /> }
          ].map((stat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="card-premium p-6 md:p-8 text-center relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50/50 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
              <div className="flex justify-center mb-4 relative z-10 group-hover:scale-110 transition-transform">
                {stat.icon}
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-[var(--heading)] mb-2 relative z-10">{stat.value}</h3>
              <p className="text-xs md:text-sm font-semibold text-[var(--foreground)] relative z-10 uppercase tracking-wider">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Premium Course Catalog (User preferred design) */}
        <div className="mb-16 lg:mb-20">
          <div className="text-center mb-16">
            <span className="inline-block py-1.5 px-4 rounded-full bg-blue-50 border border-blue-100 text-blue-600 font-bold text-xs tracking-[0.2em] mb-4 uppercase">
              WebCodian Academy
            </span>
            <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
              Our Premium Courses
            </h3>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Master the most in-demand technologies with our industry-led training programs. Start your journey today.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {courses.map((course, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                whileHover={{ y: -12 }}
                className="bg-gradient-to-b from-white to-slate-50 rounded-[24px] overflow-hidden shadow-[0_15px_40px_rgba(37,99,235,0.04)] hover:shadow-[0_40px_80px_rgba(37,99,235,0.12)] border border-slate-100 transition-all duration-500 group flex flex-col h-full"
              >
                {/* Course Image */}
                <div className="relative h-[220px] overflow-hidden bg-slate-100">
                  <div className="absolute inset-0 bg-blue-900/10 z-10 mix-blend-multiply group-hover:opacity-0 transition-opacity duration-500"></div>
                  <img 
                    src={course.image} 
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
                  />
                  {/* Floating Badge */}
                  <div className="absolute top-4 right-4 z-20">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-md rounded-full text-xs font-bold text-blue-600 shadow-sm">
                      Best Seller
                    </span>
                  </div>
                </div>

                {/* Course Content */}
                <div className="p-8 flex-grow flex flex-col">
                  <h3 className="text-2xl font-extrabold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">{course.title}</h3>
                  <p className="text-slate-600 mb-6 text-base leading-relaxed flex-grow">{course.desc}</p>
                  
                  <div className="mb-8 p-4 bg-slate-50 rounded-[16px] border border-slate-100">
                    <span className="text-xs font-bold uppercase tracking-[0.1em] text-slate-400 block mb-2">Skills Covered</span>
                    <span className="text-sm font-bold text-slate-800">{course.skills}</span>
                  </div>
                  
                  <div className="flex items-center justify-between mt-auto">
                    <Link href="/contact" className="text-sm font-bold text-slate-500 hover:text-blue-600 transition-colors flex items-center gap-1">
                      View Details
                    </Link>
                    <Link 
                      href="/contact" 
                      className="inline-flex items-center gap-2 text-sm font-bold text-white bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3 rounded-full hover:from-blue-500 hover:to-indigo-500 transition-all duration-300 shadow-[0_8px_20px_rgba(37,99,235,0.3)] hover:shadow-[0_12px_25px_rgba(37,99,235,0.5)] hover:-translate-y-0.5"
                    >
                      Enroll Now <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 lg:mt-16 text-center">
          <Link href="/courses" className="inline-flex items-center gap-2 px-8 py-4 btn-primary font-bold rounded-[18px] shadow-xl hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            View All Courses
          </Link>
        </div>

      </div>
    </section>
  );
}

