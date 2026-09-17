"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Calendar, ArrowRight, Clock, Search, Tag, Sparkles } from "lucide-react";

interface BlogPost {
  title: string;
  category: string;
  date: string;
  readTime: string;
  url: string;
  image: string;
  excerpt: string;
}

const allBlogs: BlogPost[] = [
  {
    title: "Unlocking Your Career Potential: The Value of Professional Diplomas",
    category: "Career",
    date: "14-Feb-2026",
    readTime: "5 min read",
    url: "/blog/unlocking-your-career-potential-the-value-of-professional-diplomas",
    image: "https://webcodian.com/public/uploads/blog/72ac7e3c0461fe30db23c958a8ef7c7f.png",
    excerpt: "Why professional industry-aligned certifications outshine conventional academic pathways in real-world tech recruitment."
  },
  {
    title: "Mastering Time Management: A Key Skill for Modern Engineers & Learners",
    category: "Career",
    date: "28-Jan-2026",
    readTime: "4 min read",
    url: "/blog/mastering-time-management-a-key-skill-for-online-learners",
    image: "https://webcodian.com/public/uploads/blog/539b2043499978d8df9fd700a0d2be3f.png",
    excerpt: "Actionable frameworks for balancing full-stack software development projects, continuous learning, and sprint cycles."
  },
  {
    title: "The Future of Autonomous AI Agents & Intelligent Enterprise SaaS",
    category: "AI & Cloud",
    date: "10-Jan-2026",
    readTime: "7 min read",
    url: "/blog/the-future-of-online-learning-pdtce-s-innovative-approach",
    image: "https://webcodian.com/public/uploads/blog/91908ad90df562f81d86f8d828c50362.png",
    excerpt: "How generative AI, multi-agent systems, and automated pipelines are revolutionizing high-velocity software production."
  },
  {
    title: "Architecting Ultra-Fast Scalable Web Applications with Next.js & React 19",
    category: "Web Dev",
    date: "18-Dec-2025",
    readTime: "6 min read",
    url: "/blog/unlocking-your-career-potential-the-value-of-professional-diplomas",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop",
    excerpt: "Deep-dive into server actions, partial prerendering, and optimized client rendering for enterprise web portals."
  },
  {
    title: "Custom CRM & ERP Automation: Driving Measurable ROI for Mid-Market Enterprises",
    category: "Software",
    date: "02-Dec-2025",
    readTime: "5 min read",
    url: "/blog/mastering-time-management-a-key-skill-for-online-learners",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
    excerpt: "Eliminating data silos and manual operational bottlenecks with bespoke cloud dashboards and microservices."
  },
  {
    title: "Building Resilient REST APIs and Microservices: Security, Rate Limiting & Auth",
    category: "Web Dev",
    date: "15-Nov-2025",
    readTime: "6 min read",
    url: "/blog/the-future-of-online-learning-pdtce-s-innovative-approach",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&auto=format&fit=crop",
    excerpt: "Critical patterns for securing backend systems against traffic spikes, injection threats, and unauthorized access."
  }
];

const categories = ["All", "Career", "AI & Cloud", "Web Dev", "Software"];

export function PremiumBlog() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredBlogs = useMemo(() => {
    return allBlogs.filter(blog => {
      const matchesCategory = selectedCategory === "All" || blog.category === selectedCategory;
      const matchesSearch = blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section className="py-20 bg-slate-50 relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#2eb872]/8 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/8 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
        
        {/* Controls: Search and Filter Tabs */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-14">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 p-1.5 bg-white rounded-2xl border border-slate-200 shadow-sm w-full md:w-auto">
            {categories.map((cat) => {
              const active = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`relative px-5 py-2.5 rounded-xl text-xs font-bold transition-all duration-300 ${
                    active ? "text-white" : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                  }`}
                >
                  {active && (
                    <motion.div
                      layoutId="activeBlogTab"
                      className="absolute inset-0 bg-slate-900 rounded-xl shadow-md"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-1.5">
                    {cat === "All" && <Sparkles className="w-3.5 h-3.5" />}
                    {cat}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search articles & guides..."
              className="w-full pl-11 pr-4 py-3 bg-white border border-slate-200 rounded-2xl text-sm font-medium text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#2eb872] focus:border-transparent transition-all shadow-sm"
            />
          </div>

        </div>

        {/* Blog Cards Grid with Layout Animation */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredBlogs.map((blog, index) => (
              <motion.div
                key={blog.title}
                layout
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -20 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="h-full"
              >
                <div className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-400 border border-slate-100 flex flex-col h-full relative">
                  
                  {/* Image with Category badge */}
                  <div className="relative w-full h-52 overflow-hidden bg-slate-100">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute top-4 left-4 z-10">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-md text-white text-[11px] font-bold tracking-wide border border-white/10">
                        <Tag className="w-3 h-3 text-[#2eb872]" />
                        {blog.category}
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-7 flex flex-col flex-grow">
                    <div className="flex items-center justify-between text-xs text-slate-400 font-medium mb-3">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-[#2eb872]" />
                        <span>{blog.date}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-slate-400" />
                        <span>{blog.readTime}</span>
                      </div>
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 leading-snug mb-3 group-hover:text-[#2eb872] transition-colors duration-300">
                      {blog.title}
                    </h3>

                    <p className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-2">
                      {blog.excerpt}
                    </p>

                    <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-900 group-hover:text-[#2eb872] transition-colors flex items-center gap-1.5">
                        Read Full Article
                        <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform duration-300" />
                      </span>
                      <span className="w-2 h-2 rounded-full bg-[#2eb872]/40 group-hover:bg-[#2eb872] group-hover:scale-150 transition-all duration-300"></span>
                    </div>
                  </div>

                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty Search State */}
        {filteredBlogs.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-20 bg-white rounded-3xl border border-slate-100 mt-4"
          >
            <Search className="w-12 h-12 text-slate-300 mx-auto mb-4" />
            <h4 className="text-xl font-bold text-slate-800 mb-2">No matching articles found</h4>
            <p className="text-slate-500 text-sm mb-6">Try searching with different keywords or switch categories.</p>
            <button
              onClick={() => { setSelectedCategory("All"); setSearchQuery(""); }}
              className="px-6 py-2.5 rounded-xl bg-slate-900 text-white text-xs font-bold hover:bg-[#2eb872] transition-colors"
            >
              Reset Filters
            </button>
          </motion.div>
        )}

      </div>
    </section>
  );
}
