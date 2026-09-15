"use client";

import { motion } from "framer-motion";
import { FileText } from "lucide-react";

interface PremiumDocumentLayoutProps {
  title: string;
  lastUpdated: string;
  content: string;
}

export function PremiumDocumentLayout({ title, lastUpdated, content }: PremiumDocumentLayoutProps) {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-6 max-w-4xl relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl p-8 md:p-16 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center shrink-0">
               <FileText className="w-6 h-6 text-blue-500" />
            </div>
            <div>
              <h2 className="text-3xl font-extrabold text-gray-800">{title}</h2>
              <p className="text-sm font-semibold text-gray-400 mt-1">Last Updated: {lastUpdated}</p>
            </div>
          </div>
          
          <div className="w-full h-px bg-gray-100 mb-8"></div>
          
          <div className="prose prose-lg prose-green max-w-none text-gray-600">
             {content.split('\n').map((paragraph, idx) => (
                <p key={idx} className="mb-4 leading-relaxed">{paragraph}</p>
             ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
