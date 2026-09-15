"use client";

import { motion } from "framer-motion";
import { Laptop, Code2, PenTool, BarChart, Database, MonitorPlay, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const learningPaths = [
  { 
    id: "beginner", 
    title: "BEGINNER", 
    courses: "Computer Fundamentals, DCA", 
    icon: <Laptop className="w-6 h-6 text-emerald-500" />,
    gradient: "from-emerald-400 to-teal-500",
    glow: "bg-emerald-500/15",
    iconBg: "bg-emerald-50 border-emerald-200",
    titleColor: "text-emerald-600"
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
    icon: <PenTool className="w-6 h-6 text-pink-500" />,
    gradient: "from-pink-400 to-rose-500",
    glow: "bg-pink-500/15",
    iconBg: "bg-pink-50 border-pink-200",
    titleColor: "text-pink-600"
  },
  { 
    id: "digital", 
    title: "DIGITAL", 
    courses: "Digital Marketing, SEO", 
    icon: <BarChart className="w-6 h-6 text-orange-500" />,
    gradient: "from-orange-400 to-amber-500",
    glow: "bg-orange-500/15",
    iconBg: "bg-orange-50 border-orange-200",
    titleColor: "text-orange-600"
  },
  { 
    id: "ai", 
    title: "AI", 
    courses: "Python, AI Tools, Gen AI", 
    icon: <MonitorPlay className="w-6 h-6 text-purple-500" />,
    gradient: "from-purple-400 to-fuchsia-500",
    glow: "bg-purple-500/15",
    iconBg: "bg-purple-50 border-purple-200",
    titleColor: "text-purple-600"
  },
];

const courses = [
  { title: "ADCA", desc: "Advanced Diploma in Computer Applications.", skills: "MS Office, Tally, Internet", image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=400&q=80" },
  { title: "Full Stack Development", desc: "Master frontend and backend technologies.", skills: "React, Node.js, MongoDB", image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=400&q=80" },
  { title: "Digital Marketing", desc: "Comprehensive marketing strategies.", skills: "SEO, SEM, Social Media", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=400&q=80" },
  { title: "AI & Generative AI", desc: "Learn to build modern AI solutions.", skills: "Python, Prompt Engineering", image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=400&q=80" },
  { title: "Graphic Design", desc: "Create stunning visual content.", skills: "Photoshop, Illustrator", image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=400&q=80" },
  { title: "React JS Mastery", desc: "Advanced frontend development.", skills: "React, Redux, Next.js", image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=400&q=80" },
];

export function PremiumInstitute() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-50 via-white to-white" />
      
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
        
        {/* Institute Hero Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-6"
          >
            <span className="text-sm font-semibold text-blue-700 tracking-wider uppercase">WebCodian Academy</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6"
          >
            Computer Institute & <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Professional Training</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600"
          >
            Build practical digital skills with industry-focused computer and technology training. Learn from professionals and kickstart your career.
          </motion.p>
        </div>

        {/* Choose Your Learning Path */}
        <div className="mb-24 relative">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">Choose Your Learning Path</h3>
            <div className="h-1.5 w-24 bg-gradient-to-r from-[#2eb872] to-blue-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
            {/* Background connecting line (hidden on mobile) */}
            <div className="hidden lg:block absolute top-1/2 left-10 right-10 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent -translate-y-1/2 z-0" />
            
            {learningPaths.map((path, idx) => (
              <motion.div 
                key={path.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.1, type: "spring", bounce: 0.4 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="relative bg-white rounded-3xl p-8 shadow-[0_10px_30px_rgba(0,0,0,0.06)] border border-transparent transition-all duration-500 group overflow-hidden z-10"
              >
                {/* Always-on Animated Gradient Border Overlay */}
                <motion.div 
                  animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                  className={`absolute inset-0 bg-gradient-to-r ${path.gradient} bg-[length:200%_200%] opacity-100 rounded-3xl -z-10`}
                />
                
                {/* Inner slightly tinted white background */}
                <div className="absolute inset-[2px] bg-gradient-to-br from-white to-slate-50/95 rounded-[22px] -z-10"></div>
                
                {/* Always-on Glow Effect that pulses */}
                <motion.div 
                  animate={{ opacity: [0.4, 0.8, 0.4], scale: [1, 1.2, 1] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: idx * 0.2 }}
                  className={`absolute -bottom-10 -right-10 w-40 h-40 ${path.glow} blur-3xl rounded-full pointer-events-none`}
                />

                <div className="relative z-10 flex flex-col items-start">
                  <div className={`w-16 h-16 rounded-2xl ${path.iconBg} flex items-center justify-center mb-6 border shadow-sm group-hover:scale-110 group-hover:-rotate-3 transition-all duration-500`}>
                    {path.icon}
                  </div>
                  <h4 className={`text-xl font-bold ${path.titleColor} mb-3`}>{path.title}</h4>
                  <p className="text-slate-700 font-medium leading-relaxed">{path.courses}</p>
                </div>
                
                {/* Arrow indicator always visible but animates slightly */}
                <motion.div 
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-8 right-8 transition-all duration-500"
                >
                  <ArrowRight className={`w-6 h-6 ${path.titleColor}`} />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Course Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-3xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.05)] hover:shadow-[0_30px_60px_rgba(0,0,0,0.12)] border border-slate-100 transition-all duration-300 group"
            >
              <div className="relative h-48 overflow-hidden bg-slate-100">
                <img 
                  src={course.image} 
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">{course.title}</h3>
                <p className="text-slate-600 mb-4 text-sm line-clamp-2">{course.desc}</p>
                <div className="mb-6">
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block mb-1">Skills Covered</span>
                  <span className="text-sm font-medium text-slate-700">{course.skills}</span>
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                  <Link href="/contact" className="text-sm font-bold text-slate-500 hover:text-blue-600 transition-colors">
                    View Course
                  </Link>
                  <Link href="/contact" className="inline-flex items-center gap-2 text-sm font-bold text-white bg-blue-600 px-5 py-2.5 rounded-full hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg">
                    Enroll Now <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <Link href="/services" className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 text-white font-bold rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
            View All Courses
          </Link>
        </div>

      </div>
    </section>
  );
}
