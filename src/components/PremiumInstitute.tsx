"use client";

import { motion } from "framer-motion";
import { Laptop, Code2, PenTool, BarChart, Database, MonitorPlay, ArrowRight, Users, Trophy, HeartHandshake } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const learningPaths = [
  { 
    id: "beginner", 
    title: "BEGINNER", 
    courses: "Computer Fundamentals, DCA", 
    icon: <Laptop className="w-6 h-6 text-cyan-400" />,
    gradient: "from-cyan-400/20 to-blue-500/20",
    glow: "bg-cyan-500/15",
    iconBg: "bg-cyan-500/10 border-cyan-500/20",
    titleColor: "text-cyan-400"
  },
  { 
    id: "professional", 
    title: "PROFESSIONAL", 
    courses: "ADCA, Tally Prime, Adv. Excel", 
    icon: <Database className="w-6 h-6 text-blue-400" />,
    gradient: "from-blue-400/20 to-cyan-500/20",
    glow: "bg-blue-500/15",
    iconBg: "bg-blue-500/10 border-blue-500/20",
    titleColor: "text-blue-400"
  },
  { 
    id: "developer", 
    title: "DEVELOPER", 
    courses: "Web Dev, React, Full Stack", 
    icon: <Code2 className="w-6 h-6 text-cyan-300" />,
    gradient: "from-cyan-300/20 to-blue-400/20",
    glow: "bg-cyan-400/15",
    iconBg: "bg-cyan-400/10 border-cyan-400/20",
    titleColor: "text-cyan-300"
  },
  { 
    id: "creative", 
    title: "CREATIVE", 
    courses: "Graphic Design, Video Editing", 
    icon: <PenTool className="w-6 h-6 text-blue-300" />,
    gradient: "from-blue-300/20 to-cyan-400/20",
    glow: "bg-blue-400/15",
    iconBg: "bg-blue-400/10 border-blue-400/20",
    titleColor: "text-blue-300"
  },
  { 
    id: "digital", 
    title: "DIGITAL", 
    courses: "Digital Marketing, SEO", 
    icon: <BarChart className="w-6 h-6 text-cyan-400" />,
    gradient: "from-cyan-400/20 to-blue-500/20",
    glow: "bg-cyan-500/15",
    iconBg: "bg-cyan-500/10 border-cyan-500/20",
    titleColor: "text-cyan-400"
  },
  { 
    id: "ai", 
    title: "AI", 
    courses: "Python, AI Tools, Gen AI", 
    icon: <MonitorPlay className="w-6 h-6 text-blue-400" />,
    gradient: "from-blue-400/20 to-cyan-500/20",
    glow: "bg-blue-500/15",
    iconBg: "bg-blue-500/10 border-blue-500/20",
    titleColor: "text-blue-400"
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
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const paths = containerRef.current.querySelectorAll('.learning-path-card');
      const coursesEls = containerRef.current.querySelectorAll('.course-card');

      gsap.fromTo(paths,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: paths[0],
            start: "top 80%",
            toggleActions: "play none none none"
          }
        }
      );

      gsap.fromTo(coursesEls,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: coursesEls[0],
            start: "top 80%",
            toggleActions: "play none none none"
          }
        }
      );
    }
  }, []);

  return (
    <section className="py-16 lg:py-20 bg-[#0a0f1c] relative overflow-hidden" ref={containerRef}>
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#0f172a] via-[#0a0f1c] to-[#0a0f1c]" />
      
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
        
        {/* Institute Hero Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6 shadow-[0_0_15px_rgba(59,130,246,0.15)]"
          >
            <span className="text-sm font-semibold text-blue-400 tracking-wider uppercase">WebCodian Academy</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold text-white mb-6"
          >
            Computer Institute & <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Professional Training</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-300"
          >
            Build practical digital skills with industry-focused computer and technology training. Learn from professionals and kickstart your career.
          </motion.p>
        </div>

        {/* Achievements Counter - Inspired by Indian Computer */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16 lg:mb-20">
          {[
            { value: "50,000+", label: "Students Trained", icon: <Users className="w-8 h-8 text-cyan-400" /> },
            { value: "100+", label: "Expert Faculties", icon: <Trophy className="w-8 h-8 text-blue-400" /> },
            { value: "15+", label: "Years Experience", icon: <BarChart className="w-8 h-8 text-cyan-300" /> },
            { value: "100%", label: "Placement Assist", icon: <HeartHandshake className="w-8 h-8 text-blue-300" /> }
          ].map((stat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8 text-center relative overflow-hidden group shadow-[0_10px_30px_rgba(0,0,0,0.3)] backdrop-blur-md hover:bg-white/10 transition-colors"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
              <div className="flex justify-center mb-4 relative z-10 group-hover:scale-110 transition-transform">
                {stat.icon}
              </div>
              <h3 className="text-3xl md:text-4xl font-black text-white mb-2 relative z-10">{stat.value}</h3>
              <p className="text-xs md:text-sm font-semibold text-slate-400 relative z-10 uppercase tracking-wider">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Choose Your Learning Path */}
        <div className="mb-16 lg:mb-20 relative">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight">Choose Your Learning Path</h3>
            <div className="h-1.5 w-24 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="flex md:grid overflow-x-auto md:overflow-visible pb-8 md:pb-0 snap-x snap-mandatory md:snap-none md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 relative z-10 scroll-smooth [&::-webkit-scrollbar]:hidden" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            {/* Background connecting line (hidden on mobile) */}
            <div className="hidden lg:block absolute top-1/2 left-10 right-10 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent -translate-y-1/2 z-0" />
            
            {learningPaths.map((path, idx) => (
              <motion.div 
                key={path.id}
                whileHover={{ y: -10, scale: 1.02 }}
                className="learning-path-card opacity-0 relative shrink-0 w-[85vw] snap-center md:w-auto md:shrink md:snap-none bg-[#0f172a] rounded-3xl p-8 shadow-[0_10px_30px_rgba(0,0,0,0.5)] border border-white/5 hover:border-white/20 transition-all duration-500 group overflow-hidden z-10"
              >
                {/* Always-on Animated Gradient Border Overlay */}
                <motion.div 
                  animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                  className={`absolute inset-0 bg-gradient-to-r ${path.gradient} bg-[length:200%_200%] opacity-100 rounded-3xl -z-10`}
                />
                
                {/* Inner slightly tinted dark background */}
                <div className="absolute inset-[2px] bg-gradient-to-br from-[#0f172a] to-[#0a0f1c] rounded-[22px] -z-10"></div>
                
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
                  <p className="text-slate-300 font-medium leading-relaxed">{path.courses}</p>
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
              whileHover={{ y: -10 }}
              className="course-card opacity-0 bg-[#0f172a] rounded-3xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.4)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.6)] border border-white/5 hover:border-white/20 transition-all duration-300 group"
            >
              <div className="relative h-48 overflow-hidden bg-slate-900">
                <img 
                  src={course.image} 
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] to-transparent opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-8 relative z-10 -mt-8">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors drop-shadow-md">{course.title}</h3>
                <p className="text-slate-400 mb-4 text-sm line-clamp-2">{course.desc}</p>
                <div className="mb-6">
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 block mb-1">Skills Covered</span>
                  <span className="text-sm font-medium text-slate-300">{course.skills}</span>
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <Link href="/contact" className="text-sm font-bold text-slate-400 hover:text-cyan-400 transition-colors">
                    View Course
                  </Link>
                  <Link href="/contact" className="inline-flex items-center gap-2 text-sm font-bold text-white bg-cyan-600 px-5 py-2.5 rounded-full hover:bg-cyan-500 transition-colors shadow-md hover:shadow-[0_0_15px_rgba(6,182,212,0.4)] border border-cyan-500/50">
                    Enroll Now <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 lg:mt-16 text-center">
          <Link href="/services" className="inline-flex items-center gap-2 px-8 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-2xl shadow-xl hover:shadow-[0_0_25px_rgba(255,255,255,0.1)] hover:-translate-y-1 hover:bg-white/10 transition-all duration-300 backdrop-blur-md">
            View All Courses
          </Link>
        </div>

      </div>
    </section>
  );
}
