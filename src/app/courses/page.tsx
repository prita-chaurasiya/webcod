"use client";

import { PageBanner } from "@/components/PageBanner";
import Link from "next/link";
import { ArrowRight, Search, Filter } from "lucide-react";
import { motion } from "framer-motion";

const courses = [
  { title: "ADCA", desc: "Advanced Diploma in Computer Applications.", skills: "MS Office, Tally, Internet", image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80", category: "Basics" },
  { title: "Full Stack Development", desc: "Master frontend and backend technologies. Become a complete web developer.", skills: "React, Node.js, MongoDB", image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80", category: "Development" },
  { title: "Digital Marketing", desc: "Comprehensive marketing strategies to drive exponential business growth.", skills: "SEO, SEM, Social Media", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80", category: "Marketing" },
  { title: "AI & Generative AI", desc: "Learn to build modern AI solutions and leverage ChatGPT/LLMs.", skills: "Python, Prompt Engineering", image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=80", category: "AI" },
  { title: "Graphic Design", desc: "Create stunning visual content using industry standard tools.", skills: "Photoshop, Illustrator, Figma", image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80", category: "Design" },
  { title: "React JS Mastery", desc: "Advanced frontend development focusing purely on the React ecosystem.", skills: "React, Redux, Next.js", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80", category: "Development" },
  { title: "Data Science with Python", desc: "Analyze data, build machine learning models, and derive insights.", skills: "Python, Pandas, Scikit-Learn", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80", category: "Data" },
  { title: "Cyber Security", desc: "Protect systems and networks from digital attacks and threats.", skills: "Networking, Kali Linux, CEH", image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80", category: "Security" },
  { title: "Video Editing (Premiere Pro)", desc: "Professional video editing for YouTube, Films, and Social Media.", skills: "Premiere Pro, After Effects", image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=800&q=80", category: "Design" },
];

export default function CoursesPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <PageBanner 
        title="WebCodian Academy" 
        subtitle="Empower Your Future with Professional IT Training & Certifications."
        breadcrumbs={[{ label: "Courses" }]} 
        badge="Premium Learning"
      />
      
      <section className="py-12 lg:py-20 relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
          
          {/* Filters & Search */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-12 bg-gradient-to-b from-white to-slate-50 p-4 rounded-[20px] shadow-sm border border-slate-100">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
              <input 
                type="text" 
                placeholder="Search courses (e.g. React, Python)" 
                className="w-full pl-12 pr-4 py-3 rounded-xl bg-slate-50 border-transparent focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
              />
            </div>
            <div className="flex gap-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
              {['All', 'Development', 'Design', 'Marketing', 'AI'].map((cat, i) => (
                <button 
                  key={i}
                  className={`px-6 py-2.5 rounded-xl text-sm font-bold whitespace-nowrap transition-all ${
                    i === 0 ? 'bg-blue-600 text-white shadow-md' : 'bg-slate-50 text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {courses.map((course, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (idx % 3) * 0.1, duration: 0.6 }}
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
                      {course.category}
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
      </section>
    </div>
  );
}


