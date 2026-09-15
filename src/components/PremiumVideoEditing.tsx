"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Video, Scissors, Film, MonitorPlay, Layers, PlayCircle, Star, Sparkles, Wand2 } from "lucide-react";
import Link from "next/link";

const faqs = [
  {
    question: "What video editing services does WebCodian offer?",
    answer: "WebCodian provides professional video editing services to enhance your video content for various purposes including marketing campaigns, social media posts, corporate presentations, and more. Our skilled editors can transform raw footage into polished videos that captivate your audience and convey your message effectively."
  },
  {
    question: "What types of videos can WebCodian edit?",
    answer: "We can edit a wide range of videos including promotional videos, product demonstrations, event coverage, testimonial videos, tutorials, and more. Whether you have existing footage or need assistance with video creation from scratch, our team can help bring your vision to life."
  },
  {
    question: "Can I request specific edits or customizations to my videos?",
    answer: "Absolutely! We welcome specific edit requests and customizations to ensure your videos meet your expectations and objectives. Whether you need to add graphics, text overlays, music, special effects, or other elements, our editors can accommodate your needs."
  },
  {
    question: "How long does it take to complete video editing projects with WebCodian?",
    answer: "The timeline for video editing projects varies depending on factors such as video length, complexity, and specific requirements. We work closely with our clients to understand their timelines and deliver high-quality edited videos within the agreed-upon timeframe."
  },
  {
    question: "Can WebCodian assist with video production in addition to editing?",
    answer: "Yes, we offer comprehensive video production services in addition to editing. Whether you need assistance with scriptwriting, filming, or post-production, our team can handle all aspects of video creation to ensure a polished and professional final product."
  }
];

const tools = [
  { name: "AP Pro", icon: <Video className="w-8 h-8 text-blue-500" /> },
  { name: "Final Cut Pro", icon: <Film className="w-8 h-8 text-purple-500" /> },
  { name: "W M Maker", icon: <Scissors className="w-8 h-8 text-teal-500" /> },
  { name: "Canva Pro", icon: <Sparkles className="w-8 h-8 text-indigo-500" /> },
  { name: "Adobe Effects", icon: <Layers className="w-8 h-8 text-pink-500" /> },
  { name: "Camtasia", icon: <MonitorPlay className="w-8 h-8 text-green-500" /> }
];

export function PremiumVideoEditing() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 overflow-hidden relative">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-400/30 rounded-full blur-[128px] mix-blend-multiply animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-400/30 rounded-full blur-[128px] mix-blend-multiply animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="text-center mb-20 pt-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 border border-slate-200 backdrop-blur-md mb-6 shadow-xl">
            <Sparkles className="w-4 h-4 text-purple-600" />
            <span className="text-sm font-medium bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Premium Service</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 text-slate-900 drop-shadow-sm">
            Transform Your Vision<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-fuchsia-600 to-blue-600 drop-shadow-sm">
              Into Masterpieces
            </span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-600 mb-10">
            Our team of creative professionals is dedicated to transforming your raw footage into polished, professional videos that captivate and engage your audience.
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link 
              href="/contact" 
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-full shadow-[0_0_40px_rgba(147,51,234,0.3)] hover:shadow-[0_0_60px_rgba(147,51,234,0.5)] transition-all duration-300"
            >
              Get A Free Quotation
              <PlayCircle className="w-5 h-5" />
            </Link>
          </motion.div>
        </motion.div>

        {/* Introduction */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="mb-32 max-w-4xl mx-auto"
        >
          <div className="relative p-[2px] rounded-[24px] bg-gradient-to-b from-slate-200 to-transparent">
            <div className="bg-white/80 backdrop-blur-xl rounded-[22px] p-8 md:p-12 text-center shadow-xl">
              <p className="text-xl md:text-2xl font-light leading-relaxed text-slate-700">
                Video editing is the process of assembling, rearranging, and manipulating video clips to create a cohesive and visually appealing narrative. From simple cuts and transitions to advanced effects and color grading, video editing plays a crucial role in shaping the final look and feel of a video production.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Why Choose Us */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-slate-900">Why Choose Us</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-8 relative z-10" style={{ perspective: "1000px" }}>
            <motion.div 
              whileHover={{ rotateY: 5, rotateX: -5, scale: 1.02, zIndex: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="p-10 rounded-3xl bg-gradient-to-br from-white to-slate-50 border border-slate-200 h-full shadow-xl transform-gpu transition-all duration-300 group hover:border-purple-300 hover:shadow-[0_0_40px_rgba(147,51,234,0.15)]">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-100 to-purple-200 border border-purple-200 flex items-center justify-center mb-6 text-purple-600 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                  <Star className="w-8 h-8" />
                </div>
                <h3 className="text-3xl font-bold mb-4 text-slate-900">Creative Expertise</h3>
                <p className="text-slate-600 text-lg leading-relaxed">
                  Our team of experienced video editors combines technical proficiency with creative flair to deliver compelling and impactful video content.
                </p>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ rotateY: -5, rotateX: 5, scale: 1.02, zIndex: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="p-10 rounded-3xl bg-gradient-to-bl from-white to-slate-50 border border-slate-200 h-full shadow-xl transform-gpu transition-all duration-300 group hover:border-blue-300 hover:shadow-[0_0_40px_rgba(59,130,246,0.15)]">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-100 to-blue-200 border border-blue-200 flex items-center justify-center mb-6 text-blue-600 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                  <Wand2 className="w-8 h-8" />
                </div>
                <h3 className="text-3xl font-bold mb-4 text-slate-900">Customization</h3>
                <p className="text-slate-600 text-lg leading-relaxed">
                  We work closely with clients to understand their objectives, preferences, and brand identity, ensuring that each video is tailored to their specific requirements.
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Tools Section */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-slate-900">Our Arsenal</h2>
            <p className="text-slate-600 text-lg">Industry-leading software we master</p>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-3 gap-8"
          >
            {tools.map((tool, idx) => (
              <motion.div key={idx} variants={itemVariants} whileHover={{ y: -10, scale: 1.05 }}>
                <div className="relative group cursor-pointer h-full">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-blue-400/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative p-8 bg-white/80 backdrop-blur-md border border-slate-200 rounded-2xl flex flex-col items-center justify-center gap-4 h-full shadow-lg group-hover:border-purple-200 transition-all duration-300">
                    <div className="p-5 bg-slate-50 rounded-2xl shadow-sm border border-slate-100 group-hover:rotate-12 transition-transform duration-300 group-hover:shadow-md">
                      {tool.icon}
                    </div>
                    <h4 className="font-semibold text-xl text-slate-900 text-center">{tool.name}</h4>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-slate-900">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <motion.div 
                key={idx}
                initial={false}
                animate={{ backgroundColor: openFaq === idx ? "rgba(255, 255, 255, 1)" : "rgba(255, 255, 255, 0.7)" }}
                className="border border-slate-200 rounded-2xl overflow-hidden backdrop-blur-md shadow-md transition-colors duration-300 hover:border-slate-300"
              >
                <button 
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left focus:outline-none group"
                >
                  <span className={`font-medium text-lg pr-4 transition-colors duration-300 ${openFaq === idx ? "text-slate-900" : "text-slate-700 group-hover:text-slate-900"}`}>
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: openFaq === idx ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className={`p-2 rounded-full transition-colors duration-300 ${openFaq === idx ? "bg-slate-100 text-slate-900" : "bg-transparent text-slate-400 group-hover:text-slate-600 group-hover:bg-slate-50"}`}
                  >
                    <ChevronDown className="w-5 h-5" />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openFaq === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-8 pb-6 pt-0 text-slate-600 text-lg leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
