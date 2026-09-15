"use client";

import { motion } from "framer-motion";
import { Mail, Send } from "lucide-react";

export function PremiumNewsletter() {
  return (
    <section className="py-24 relative overflow-hidden bg-white">
      <div className="container mx-auto px-4 lg:px-6 max-w-5xl relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-[#1f2937] to-black rounded-[3rem] p-8 md:p-16 relative overflow-hidden shadow-2xl"
        >
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#2eb872] opacity-20 rounded-full blur-[100px] pointer-events-none transform translate-x-1/3 -translate-y-1/3"></div>
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-500 opacity-20 rounded-full blur-[80px] pointer-events-none transform -translate-x-1/3 translate-y-1/3"></div>
          
          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            
            <div>
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md mb-6 border border-white/10">
                <Mail className="w-8 h-8 text-[#2eb872]" />
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-white mb-4 leading-tight">
                Subscribe to our <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2eb872] to-emerald-300">Newsletter</span>
              </h2>
              <p className="text-gray-400 text-lg">
                Get the latest insights, tech news, and WebCodian updates delivered directly to your inbox. No spam, just pure value.
              </p>
            </div>

            <form onSubmit={(e) => e.preventDefault()} className="relative">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-[#2eb872] to-blue-500 rounded-full blur opacity-25 group-hover:opacity-50 transition-opacity duration-500"></div>
                <div className="relative flex bg-gray-900 border border-gray-700 rounded-full p-2">
                  <input 
                    type="email" 
                    placeholder="Enter your email address..." 
                    className="flex-1 bg-transparent border-none text-white px-6 py-4 focus:outline-none placeholder-gray-500"
                    required
                  />
                  <button type="submit" className="bg-[#2eb872] hover:bg-[#259b5f] text-white px-8 rounded-full font-bold transition-colors flex items-center justify-center">
                    <Send className="w-5 h-5 md:mr-2" />
                    <span className="hidden md:inline">Subscribe</span>
                  </button>
                </div>
              </div>
              <p className="text-sm text-gray-500 mt-4 text-center lg:text-left">
                By subscribing, you agree to our Privacy Policy.
              </p>
            </form>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
