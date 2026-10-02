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
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800",
    excerpt: "Why professional industry-aligned certifications outshine conventional academic pathways in real-world tech recruitment."
  },
  {
    title: "Mastering Time Management: A Key Skill for Modern Engineers & Learners",
    category: "Career",
    date: "28-Jan-2026",
    readTime: "4 min read",
    url: "/blog/mastering-time-management-a-key-skill-for-online-learners",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800",
    excerpt: "Actionable frameworks for balancing full-stack software development projects, continuous learning, and sprint cycles."
  },
  {
    title: "The Future of Autonomous AI Agents & Intelligent Enterprise SaaS",
    category: "AI & Cloud",
    date: "10-Jan-2026",
    readTime: "7 min read",
    url: "/blog/the-future-of-online-learning-pdtce-s-innovative-approach",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
    excerpt: "How generative AI, multi-agent systems, and automated pipelines are revolutionizing high-velocity software production."
  },
  {
    title: "Architecting Ultra-Fast Scalable Web Applications with Next.js & React 19",
    category: "Web Dev",
    date: "18-Dec-2025",
    readTime: "6 min read",
    url: "/blog/unlocking-your-career-potential-the-value-of-professional-diplomas",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop",
    excerpt: "Deep-dive into server actions, partial prerendering, and optimized client rendering for enterprise web portals."
  },
  {
    title: "Custom CRM & ERP Automation: Driving Measurable ROI for Mid-Market Enterprises",
    category: "Software",
    date: "02-Dec-2025",
    readTime: "5 min read",
    url: "/blog/mastering-time-management-a-key-skill-for-online-learners",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
    excerpt: "Eliminating data silos and manual operational bottlenecks with bespoke cloud dashboards and microservices."
  },
  {
    title: "Building Resilient REST APIs and Microservices: Security, Rate Limiting & Auth",
    category: "Web Dev",
    date: "15-Nov-2025",
    readTime: "6 min read",
    url: "/blog/the-future-of-online-learning-pdtce-s-innovative-approach",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=800&auto=format&fit=crop",
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
    <section className="py-12 bg-slate-50 relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--primary)]/8 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/8 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
        
        {/* CrelioHealth Style Section Header */}
        <div className="text-center mb-12">
          <div className="inline-block mb-4 px-4 py-1.5 bg-blue-50 text-blue-600 text-[11px] font-bold tracking-widest uppercase rounded-full border border-blue-100 shadow-sm">
            Knowledge Hub
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
            Latest Insights & Resources
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Discover our latest thoughts on technology, enterprise SaaS, and career growth.
          </p>
        </div>

        {/* Controls: Search and Filter Tabs */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-14">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 p-1.5 bg-gradient-to-b from-white to-slate-50 rounded-[18px] border border-slate-200 shadow-sm w-full md:w-auto">
            {categories.map((cat) => {
              const active = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`relative px-5 py-2.5 rounded-[18px] text-xs font-bold transition-all duration-300 ${
                    active ? "text-[var(--heading)]" : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                  }`}
                >
                  {active && (
                    <motion.div
                      layoutId="activeBlogTab"
                      className="absolute inset-0 bg-gradient-to-b from-white to-slate-50 rounded-[18px] shadow-md"
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
            <Search className="w-4 h-4 text-slate-500 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search articles & guides..."
              className="w-full pl-11 pr-4 py-3 bg-gradient-to-b from-white to-slate-50 border border-slate-200 rounded-[18px] text-sm font-medium text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent transition-all shadow-sm"
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
                <div className="group bg-[#f3f7fb] rounded-[24px] overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-400 border border-slate-100 flex flex-col h-full relative">
                  
                  {/* Image with Category badge */}
                  <div className="relative w-full h-56 overflow-hidden bg-slate-100">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out img-premium"
                    />
                    <div className="absolute top-5 left-5 z-10">
                      <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white text-blue-600 text-xs font-bold tracking-wide uppercase shadow-sm">
                        <Tag className="w-3.5 h-3.5 text-blue-600" />
                        {blog.category}
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 md:p-8 flex flex-col flex-grow">
                    <div className="flex items-center justify-between text-[13px] text-slate-500 font-medium mb-5">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-4 h-4 text-blue-500" />
                        <span>{blog.date}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-4 h-4 text-slate-400" />
                        <span>{blog.readTime}</span>
                      </div>
                    </div>

                    <h3 className="text-[22px] md:text-2xl font-bold text-slate-900 leading-[1.35] mb-4 group-hover:text-blue-600 transition-colors duration-300">
                      {blog.title}
                    </h3>

                    <p className="text-slate-500 text-base leading-relaxed mb-8 line-clamp-2">
                      {blog.excerpt}
                    </p>

                    <div className="mt-auto pt-5 border-t border-white/60 flex items-center justify-between">
                      <span className="text-[13px] font-bold text-slate-900 flex items-center gap-1.5">
                        Read Full Article
                        <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform duration-300" />
                      </span>
                      <span className="w-2 h-2 rounded-full bg-blue-300 group-hover:bg-blue-600 group-hover:scale-150 transition-all duration-300"></span>
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
            className="text-center py-12 bg-gradient-to-b from-white to-slate-50 rounded-[18px] border border-slate-100 mt-4"
          >
            <Search className="w-12 h-12 text-slate-600 mx-auto mb-4" />
            <h4 className="text-xl font-bold text-slate-800 mb-2">No matching articles found</h4>
            <p className="text-slate-500 text-sm mb-6">Try searching with different keywords or switch categories.</p>
            <button
              onClick={() => { setSelectedCategory("All"); setSearchQuery(""); }}
              className="px-6 py-2.5 rounded-[18px] btn-primary text-xs font-bold hover:bg-[var(--primary)] transition-colors"
            >
              Reset Filters
            </button>
          </motion.div>
        )}

      </div>
    </section>
  );
}


