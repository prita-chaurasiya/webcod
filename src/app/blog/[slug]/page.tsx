"use client";

import { PageBanner } from "@/components/PageBanner";
import { PremiumNewsletter } from "@/components/PremiumNewsletter";
import { motion } from "framer-motion";
import { Calendar, User, Share2, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { use } from "react";

export default function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params);
  const title = resolvedParams.slug.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");

  return (
    <main>
      <PageBanner 
        title="Article" 
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: "Article", href: "#" }
        ]}
      />
      
      <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-6 max-w-4xl relative z-10">
          
          <Link href="/blog" className="inline-flex items-center gap-2 text-gray-500 hover:text-[#2eb872] transition-colors mb-10 font-medium">
            <ArrowLeft className="w-4 h-4" />
            Back to all articles
          </Link>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <div className="flex flex-wrap items-center gap-6 text-sm font-medium text-gray-500 mb-6">
              <span className="flex items-center gap-2 bg-[#e8f6ef] text-[#2eb872] px-4 py-2 rounded-full">
                <Calendar className="w-4 h-4" />
                Latest Update
              </span>
              <span className="flex items-center gap-2">
                <User className="w-4 h-4" />
                By WebCodian Team
              </span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-tight mb-8">
              {title}
            </h1>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="w-full h-[40vh] md:h-[60vh] rounded-3xl overflow-hidden mb-16 shadow-2xl relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-gray-900/40 to-transparent z-10"></div>
            <img 
              src="https://webcodian.com/public/uploads/blog/72ac7e3c0461fe30db23c958a8ef7c7f.png" 
              alt={title}
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.article 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="prose prose-lg md:prose-xl prose-green max-w-none text-gray-600 leading-relaxed"
          >
            <p className="text-2xl text-gray-800 font-medium leading-relaxed mb-10">
              Welcome to this comprehensive guide on {title.toLowerCase()}. In this article, we dive deep into the core concepts, strategies, and innovations that are shaping the future of this domain.
            </p>
            
            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Understanding the Basics</h2>
            <p className="mb-6">
              The digital landscape is evolving rapidly. Whether you are an industry professional looking to upgrade your skills or a business trying to stay ahead of the curve, understanding these core principles is essential. The value provided here transcends basic knowledge, offering a strategic advantage.
            </p>

            <div className="bg-[#f8fafc] border-l-4 border-[#2eb872] p-8 rounded-r-2xl my-12 shadow-sm">
              <p className="text-xl italic text-gray-700 font-medium m-0">
                "Innovation distinguishes between a leader and a follower. By leveraging these new methodologies, you position yourself at the forefront of the industry."
              </p>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Key Takeaways</h2>
            <ul className="space-y-4 mb-10">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 mt-2 rounded-full bg-[#2eb872] shrink-0"></div>
                <span><strong>Strategic Implementation:</strong> Applying these methods guarantees a higher success rate in real-world scenarios.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 mt-2 rounded-full bg-[#2eb872] shrink-0"></div>
                <span><strong>Future Proofing:</strong> Staying updated with these trends ensures long-term viability and growth.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 mt-2 rounded-full bg-[#2eb872] shrink-0"></div>
                <span><strong>Enhanced Productivity:</strong> Streamlined processes lead to significant time and cost savings.</span>
              </li>
            </ul>

            <p>
              In conclusion, embracing these changes is no longer optional. We at WebCodian are committed to bringing you the most relevant and actionable insights to help you thrive in the digital age. Stay tuned for more deep dives into the technologies shaping our world.
            </p>
          </motion.article>

          {/* Share Section */}
          <div className="mt-16 pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-6">
            <h4 className="text-lg font-bold text-gray-800">Share this article:</h4>
            <div className="flex gap-4">
              {['Twitter', 'LinkedIn', 'Facebook'].map(network => (
                <button key={network} className="px-6 py-2 rounded-full bg-gray-50 border border-gray-200 text-gray-600 font-medium hover:text-[#2eb872] hover:border-[#2eb872] hover:bg-[#e8f6ef] transition-all flex items-center gap-2">
                  <Share2 className="w-4 h-4" />
                  {network}
                </button>
              ))}
            </div>
          </div>

        </div>
      </section>
      
      <PremiumNewsletter />
    </main>
  );
}
