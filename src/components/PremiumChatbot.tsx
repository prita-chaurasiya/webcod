"use client";

import { motion } from "framer-motion";
import { Mic, MessageSquare, AudioWaveform, ArrowRight, Zap, BotMessageSquare } from "lucide-react";
import Link from "next/link";

export function PremiumChatbot() {
  return (
    <div className="bg-white text-gray-900 overflow-hidden">
      
      {/* Premium Hero Section */}
      <section className="relative min-h-[75vh] flex items-center pt-24 pb-16 overflow-hidden bg-slate-900 text-white">
        {/* Background Gradients */}
        <div className="absolute top-[-10%] right-[10%] w-[500px] h-[500px] bg-[#6d28d9]/20 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-[#06b6d4]/10 rounded-full blur-[100px] pointer-events-none"></div>
        
        <div className="container mx-auto px-4 lg:px-6 max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
                <Mic className="w-4 h-4 text-[#06b6d4]" />
                <span className="text-xs font-bold text-slate-200 uppercase tracking-widest">Conversational AI</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1]">
                Speak to <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#06b6d4] to-[#6d28d9]">
                  The Future.
                </span>
              </h1>
              
              <p className="text-lg text-slate-300 max-w-xl leading-relaxed">
                Empower your business with human-like AI Chatbots and Voice Assistants that understand context, resolve queries, and drive sales seamlessly.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <Link href="/contact" className="px-8 py-3.5 bg-[#06b6d4] hover:bg-[#0891b2] text-white rounded-xl font-bold text-base shadow-lg shadow-[#06b6d4]/20 hover:-translate-y-0.5 transition-all flex items-center gap-2">
                  Get a Demo <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

            </motion.div>

            {/* Visual: Chat & Voice Interface Mockup */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="relative flex justify-center"
            >
              <div className="relative w-full max-w-md rounded-[32px] bg-slate-800/50 p-6 shadow-2xl overflow-hidden border border-slate-700 backdrop-blur-xl">
                
                {/* Chat Mockup */}
                <div className="flex flex-col gap-4">
                  <div className="self-end bg-[#06b6d4] text-white p-4 rounded-2xl rounded-tr-sm max-w-[80%] text-sm shadow-sm">
                    Can you help me track my latest order?
                  </div>
                  
                  <div className="self-start bg-slate-700 text-slate-100 p-4 rounded-2xl rounded-tl-sm max-w-[85%] text-sm shadow-sm flex gap-3">
                    <BotMessageSquare className="w-6 h-6 text-[#06b6d4] shrink-0" />
                    <div>
                      Certainly! I've located your order #98234. It is currently out for delivery and will arrive by 4 PM today.
                    </div>
                  </div>
                  
                  {/* Voice Waveform Animation */}
                  <div className="mt-4 bg-slate-900/50 rounded-2xl p-6 border border-slate-700 flex flex-col items-center gap-4">
                    <div className="flex items-center gap-1 h-8">
                      {[1, 2, 3, 4, 5, 6, 7, 6, 5, 4, 3, 2, 1].map((bar, i) => (
                        <motion.div
                          key={i}
                          animate={{ height: ["20%", "100%", "20%"] }}
                          transition={{ duration: 1, repeat: Infinity, delay: i * 0.1 }}
                          className="w-1.5 bg-gradient-to-t from-[#6d28d9] to-[#06b6d4] rounded-full"
                          style={{ height: `${bar * 10}%` }}
                        />
                      ))}
                    </div>
                    <p className="text-xs text-slate-400 font-medium">Listening to user request...</p>
                  </div>
                </div>

              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4 lg:px-6 max-w-7xl">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "24/7 Availability", desc: "Never miss a customer inquiry. Deliver instant responses round the clock in multiple languages.", icon: <MessageSquare className="w-6 h-6 text-[#6d28d9]" /> },
              { title: "Contextual Voice AI", desc: "Voice agents that understand nuances, tone, and context, providing a natural phone experience.", icon: <AudioWaveform className="w-6 h-6 text-[#06b6d4]" /> },
              { title: "Omnichannel Support", desc: "Deploy your bot across WhatsApp, Telegram, website, and phone lines from a single brain.", icon: <Zap className="w-6 h-6 text-[#f97316]" /> }
            ].map((feat, i) => (
              <div key={i} className="bg-slate-50 p-8 rounded-[24px] border border-slate-100 hover:border-[#06b6d4]/30 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center mb-6 shadow-sm">
                  {feat.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feat.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
