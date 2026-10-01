"use client";

import { motion } from "framer-motion";
import { AboutBreadcrumb } from "@/components/AboutBreadcrumb";
import { PremiumBlog } from "@/components/PremiumBlog";
import { PremiumNewsletter } from "@/components/PremiumNewsletter";
import { 
  Terminal, Search, TrendingUp, Star, ChevronRight, Hash, Clock
} from "lucide-react";
import Link from "next/link";

const categories = [
  "Artificial Intelligence", "Machine Learning", "Generative AI", 
  "Web Development", "Mobile Development", "React", "Next.js", 
  "Python", "Laravel", "ERPNext", "Frappe", "Cloud", "AWS", 
  "DevOps", "UI/UX", "Cyber Security", "Digital Marketing", 
  "Career Tips", "Interview Preparation", "Industry News"
];

const trendingTopics = [
  { title: "Building Scalable LLM Apps with LangChain", reads: "15k" },
  { title: "Next.js 15 Server Components Deep Dive", reads: "12k" },
  { title: "How ERPNext Transforms Manufacturing", reads: "9k" },
  { title: "AWS Cost Optimization Strategies 2026", reads: "8.5k" },
  { title: "Top 5 Mobile App UI/UX Trends", reads: "7k" }
];

export default function BlogPage() {
  return (
    <main className="bg-slate-50 min-h-screen">
      <AboutBreadcrumb 
        title="TECHNOLOGY RESOURCE CENTER"
        subtitle="Discover in-depth engineering breakdowns, modern tech tutorials, software trends, and career roadmaps."
        badge="✦ ARTICLES & INDUSTRY TRENDS"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "More" },
          { label: "Blog" }
        ]}
        highlights={["Modern Architecture", "AI Developments", "Software Engineering", "Career Guides"]}
      />

      {/* Featured Article & Category Explorer */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="container mx-auto px-4 lg:px-8 max-w-[1400px]">
          <div className="flex flex-col lg:flex-row gap-12">
            
            {/* Featured Article */}
            <div className="lg:w-2/3">
              <div className="flex items-center gap-2 text-blue-600 font-bold mb-6">
                <Star className="w-5 h-5" /> Editor's Pick
              </div>
              <div className="group cursor-pointer">
                <div className="rounded-3xl overflow-hidden mb-6 relative shadow-2xl h-[400px]">
                  <img src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=1200" alt="AI Workspace" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-0 left-0 p-8 w-full">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="px-3 py-1 bg-blue-600 text-white text-xs font-bold rounded-full">Artificial Intelligence</span>
                      <span className="text-slate-300 text-sm flex items-center gap-1"><Clock className="w-4 h-4"/> 10 Min Read</span>
                    </div>
                    <h2 className="text-3xl lg:text-4xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">The Future of Generative AI in Enterprise SaaS Architectures</h2>
                    <p className="text-slate-300 text-lg hidden md:block">How large language models are completely reshaping the way we build multi-tenant B2B software systems in 2026.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar: Categories & Search */}
            <div className="lg:w-1/3">
              <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200 h-full">
                <div className="relative mb-8">
                  <input type="text" placeholder="Search resources..." className="w-full pl-12 pr-4 py-4 rounded-xl border border-slate-200 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" />
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                </div>

                <h3 className="font-bold text-slate-900 mb-6 flex items-center gap-2">
                  <Terminal className="w-5 h-5 text-blue-600" /> Explore Categories
                </h3>
                
                <div className="flex flex-wrap gap-2 max-h-[300px] overflow-y-auto pr-2 custom-scrollbar">
                  {categories.map(cat => (
                    <span key={cat} className="px-4 py-2 bg-white border border-slate-200 text-slate-700 text-sm rounded-lg hover:border-blue-500 hover:text-blue-600 transition-colors cursor-pointer">
                      {cat}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Articles (Existing Component) */}
      <div className="bg-slate-50 py-10">
        <PremiumBlog />
      </div>

      {/* Trending Topics & Author Spotlight */}
      <section className="py-20 bg-white border-y border-slate-200">
        <div className="container mx-auto px-4 lg:px-8 max-w-[1400px]">
          <div className="flex flex-col lg:flex-row gap-16">
            
            {/* Trending */}
            <div className="lg:w-1/2">
              <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                <TrendingUp className="w-6 h-6 text-red-500" /> Trending Topics
              </h3>
              <div className="space-y-4">
                {trendingTopics.map((topic, idx) => (
                  <div key={idx} className="group flex items-center justify-between p-4 rounded-2xl hover:bg-slate-50 border border-transparent hover:border-slate-200 transition-colors cursor-pointer">
                    <div className="flex items-center gap-4">
                      <span className="text-3xl font-bold text-slate-200 group-hover:text-blue-100 transition-colors">0{idx+1}</span>
                      <h4 className="font-bold text-slate-800 group-hover:text-blue-600 transition-colors">{topic.title}</h4>
                    </div>
                    <span className="text-xs font-bold text-slate-500 bg-slate-100 px-3 py-1 rounded-full">{topic.reads} Reads</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Top Authors */}
            <div className="lg:w-1/2">
              <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                <Hash className="w-6 h-6 text-indigo-500" /> Featured Authors
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { name: "Sarah Drasner", role: "VP Developer Experience", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80" },
                  { name: "John Resig", role: "Lead Architect", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&q=80" },
                  { name: "Addy Osmani", role: "Engineering Manager", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" },
                  { name: "Emma Bostian", role: "Senior Software Engineer", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=100&q=80" }
                ].map((author, idx) => (
                  <div key={idx} className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                    <img src={author.img} alt={author.name} className="w-14 h-14 rounded-full object-cover" />
                    <div>
                      <h4 className="font-bold text-slate-900">{author.name}</h4>
                      <p className="text-xs text-slate-500">{author.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Existing Newsletter */}
      <PremiumNewsletter />
      
    </main>
  );
}
