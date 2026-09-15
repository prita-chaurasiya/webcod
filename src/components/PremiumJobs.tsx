"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, CalendarDays, MapPin, IndianRupee, GraduationCap, ArrowRight, X } from "lucide-react";
import Link from "next/link";

const jobs = [
  {
    id: 1,
    title: "Laravel Developer",
    qualifications: "B.Tech, M.Tech",
    date: "01 Nov, 2024",
    experience: "5 years in Laravel",
    location: "Lanka, Varanasi",
    salary: "500,000/year",
    description: "Webcodian LLP is a dynamic and innovative web development company specializing in creating cutting-edge web solutions for our clients. We are committed to delivering high-quality projects and ensuring client satisfaction. We are looking for a skilled and experienced Laravel Developer to join our team. The ideal candidate will have a strong background in PHP and be proficient in the Laravel framework."
  },
  {
    id: 2,
    title: "Graphic Designer",
    qualifications: "Bachelor’s Degree in Design, Fine Arts, or related field",
    date: "30 Sep, 2024",
    experience: "3 years in Graphic Design",
    location: "Lanka, Varanasi",
    salary: "400,000/year",
    description: "Webcodian LLP is a creative and forward-thinking web development company that specializes in delivering unique and engaging web solutions. We are seeking a talented Graphic Designer to join our team. The ideal candidate will have a strong portfolio showcasing their design skills and creativity. You will be responsible for creating visually appealing graphics for web and print, including logos, banners, social media posts, and marketing materials."
  }
];

export function PremiumJobs() {
  const [selectedJob, setSelectedJob] = useState<number | null>(null);

  return (
    <section id="open-roles" className="py-24 bg-[#f8fafc] relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-6 max-w-5xl relative z-10">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-extrabold text-[#1f2937] mb-6"
          >
            Open <span className="text-[#2eb872]">Positions</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-500 max-w-2xl mx-auto text-lg"
          >
            Don't see a role that fits? Send us your resume anyway. We are always looking for incredible talent to join our team.
          </motion.p>
        </div>

        <div className="space-y-8 perspective-1000">
          {jobs.map((job, index) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1, type: "spring", stiffness: 50 }}
            >
              <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 hover:rotate-x-1 group">
                
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-8">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-[#2eb872] transition-colors">
                      {job.title}
                    </h3>
                    <div className="flex flex-wrap gap-4 text-sm font-medium text-gray-500">
                      <span className="flex items-center gap-1 bg-gray-50 px-3 py-1 rounded-full"><GraduationCap className="w-4 h-4 text-[#f59e0b]"/> {job.qualifications}</span>
                      <span className="flex items-center gap-1 bg-gray-50 px-3 py-1 rounded-full"><Briefcase className="w-4 h-4 text-blue-500"/> {job.experience}</span>
                      <span className="flex items-center gap-1 bg-gray-50 px-3 py-1 rounded-full"><CalendarDays className="w-4 h-4 text-[#2eb872]"/> {job.date}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 text-gray-700 bg-[#e8f6ef] px-6 py-3 rounded-2xl shrink-0">
                     <div>
                       <span className="block text-xs font-bold text-[#2eb872] uppercase tracking-wider mb-1">Salary</span>
                       <span className="flex items-center font-bold text-lg"><IndianRupee className="w-4 h-4"/> {job.salary}</span>
                     </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-gray-500 mb-6 font-medium">
                  <MapPin className="w-5 h-5 text-red-500" />
                  {job.location}
                </div>

                <p className="text-gray-600 leading-relaxed mb-8 max-w-4xl line-clamp-2">
                  {job.description}
                </p>

                <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                  <button 
                    onClick={() => setSelectedJob(job.id)}
                    className="text-[#2eb872] font-bold hover:text-[#259b5f] transition-colors flex items-center gap-2"
                  >
                    View Details
                  </button>
                  <button className="bg-[#1f2937] hover:bg-[#111827] text-white px-6 py-2.5 rounded-full font-bold transition-all shadow-md hover:shadow-xl hover:-translate-y-1 flex items-center gap-2 group/btn">
                    Apply Now
                    <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedJob !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedJob(null)}
              className="absolute inset-0 bg-gray-900/40 backdrop-blur-sm"
            />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
            >
              {(() => {
                const job = jobs.find(j => j.id === selectedJob);
                if (!job) return null;
                
                return (
                  <>
                    <div className="p-8 border-b border-gray-100 bg-gray-50 flex justify-between items-start">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-2">{job.title}</h3>
                        <span className="flex items-center gap-1 text-gray-500 font-medium"><MapPin className="w-4 h-4 text-red-500"/> {job.location}</span>
                      </div>
                      <button 
                        onClick={() => setSelectedJob(null)}
                        className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-500 hover:text-red-500 hover:bg-red-50 transition-all shadow-sm"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </div>
                    
                    <div className="p-8 overflow-y-auto">
                      <div className="grid grid-cols-2 gap-6 mb-8 p-6 bg-[#e8f6ef] rounded-2xl">
                        <div>
                          <span className="block text-sm font-bold text-gray-500 mb-1">Experience Required</span>
                          <span className="font-bold text-gray-800">{job.experience}</span>
                        </div>
                        <div>
                          <span className="block text-sm font-bold text-gray-500 mb-1">Salary</span>
                          <span className="font-bold text-[#2eb872] flex items-center"><IndianRupee className="w-4 h-4"/>{job.salary}</span>
                        </div>
                      </div>
                      
                      <h4 className="text-lg font-bold text-gray-800 mb-4">Job Description</h4>
                      <p className="text-gray-600 leading-relaxed">
                        {job.description}
                      </p>
                    </div>
                    
                    <div className="p-8 border-t border-gray-100 bg-gray-50">
                      <h4 className="text-lg font-bold text-gray-800 mb-6 flex items-center gap-2">
                        Submit Your Application
                      </h4>
                      <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-1">Full Name <span className="text-red-500">*</span></label>
                            <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#2eb872] focus:border-transparent transition-all text-gray-900" placeholder="John Doe" required />
                          </div>
                          <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-1">Email Address <span className="text-red-500">*</span></label>
                            <input type="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#2eb872] focus:border-transparent transition-all text-gray-900" placeholder="john@example.com" required />
                          </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-1">Mobile No <span className="text-red-500">*</span></label>
                            <input type="tel" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#2eb872] focus:border-transparent transition-all text-gray-900" placeholder="+91 XXXXX XXXXX" required />
                          </div>
                          <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-1">Upload Resume <span className="text-red-500">*</span></label>
                            <input type="file" className="w-full px-4 py-2.5 bg-white rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#2eb872] transition-all file:mr-4 file:py-1 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#e8f6ef] file:text-[#2eb872] hover:file:bg-[#d1ecd9]" required />
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-1">Cover Letter <span className="text-red-500">*</span></label>
                          <textarea className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#2eb872] focus:border-transparent transition-all text-gray-900" rows={3} placeholder="Why are you a great fit?" required></textarea>
                        </div>
                        <div className="pt-4 flex justify-end">
                           <button type="submit" className="w-full md:w-auto bg-[#2eb872] hover:bg-[#259b5f] text-white px-8 py-3 rounded-xl font-bold transition-all shadow-[0_0_20px_rgba(46,184,114,0.3)] hover:shadow-[0_0_30px_rgba(46,184,114,0.5)]">
                            Submit Application
                          </button>
                        </div>
                      </form>
                    </div>
                  </>
                );
              })()}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
