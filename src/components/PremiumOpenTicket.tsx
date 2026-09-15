"use client";

import { motion } from "framer-motion";
import { Send, UploadCloud, Ticket } from "lucide-react";

export function PremiumOpenTicket() {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background Ambient Lights */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-gradient-to-br from-[#2eb872]/10 to-teal-400/10 rounded-full blur-[100px] mix-blend-multiply animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-gradient-to-tr from-blue-400/10 to-indigo-400/10 rounded-full blur-[120px] mix-blend-multiply animate-pulse" style={{ animationDuration: '10s' }} />
      </div>

      <div className="container mx-auto px-4 lg:px-6 max-w-4xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.06)] border border-slate-100 relative"
        >
          {/* Top Decorative bar */}
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 via-teal-400 to-[#2eb872]"></div>

          <div className="text-center mb-10">
            <div className="w-16 h-16 bg-[#2eb872]/10 rounded-full flex items-center justify-center mx-auto mb-4 text-[#2eb872]">
              <Ticket className="w-8 h-8" />
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-2">
              Open Ticket
            </h2>
            <p className="text-slate-500 font-medium">
              We're here to help! Please fill out the form below to open a new support ticket.
            </p>
          </div>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Client ID */}
              <div className="space-y-2">
                <label className="block text-sm font-bold text-slate-700">Client ID</label>
                <input 
                  type="text" 
                  placeholder="Enter Client ID" 
                  className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2eb872] focus:border-transparent transition-all font-medium text-slate-700 placeholder-slate-400"
                />
              </div>

              {/* Email ID */}
              <div className="space-y-2">
                <label className="block text-sm font-bold text-slate-700">Email ID</label>
                <input 
                  type="email" 
                  placeholder="Enter Email" 
                  className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2eb872] focus:border-transparent transition-all font-medium text-slate-700 placeholder-slate-400"
                />
              </div>

              {/* Phone No */}
              <div className="space-y-2">
                <label className="block text-sm font-bold text-slate-700">Phone No</label>
                <input 
                  type="text" 
                  placeholder="Enter Mobile" 
                  className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2eb872] focus:border-transparent transition-all font-medium text-slate-700 placeholder-slate-400"
                />
              </div>

              {/* Subject */}
              <div className="space-y-2">
                <label className="block text-sm font-bold text-slate-700">Subject</label>
                <input 
                  type="text" 
                  placeholder="Enter Subject" 
                  className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2eb872] focus:border-transparent transition-all font-medium text-slate-700 placeholder-slate-400"
                />
              </div>

              {/* Department */}
              <div className="space-y-2">
                <label className="block text-sm font-bold text-slate-700">Department *</label>
                <select className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2eb872] focus:border-transparent transition-all font-medium text-slate-700 appearance-none">
                  <option value="" disabled selected>Select Department</option>
                  <option value="technical">Technical Support</option>
                  <option value="billing">Billing & Accounts</option>
                  <option value="sales">Sales Inquiry</option>
                </select>
              </div>

              {/* Priority */}
              <div className="space-y-2">
                <label className="block text-sm font-bold text-slate-700">Priority</label>
                <select className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2eb872] focus:border-transparent transition-all font-medium text-slate-700 appearance-none">
                  <option value="" disabled selected>Select Priority</option>
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                  <option value="urgent">Urgent</option>
                </select>
              </div>
            </div>

            {/* Message */}
            <div className="space-y-2">
              <label className="block text-sm font-bold text-slate-700">Message</label>
              <textarea 
                rows={5}
                placeholder="Describe your issue..." 
                className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2eb872] focus:border-transparent transition-all font-medium text-slate-700 placeholder-slate-400 resize-none"
              ></textarea>
            </div>

            {/* Attach File */}
            <div className="space-y-3">
              <label className="block text-sm font-bold text-slate-700">Attach File (JPG, JPEG, PNG image with size upto 20 KB)</label>
              <div className="relative border-2 border-dashed border-slate-300 bg-slate-50 rounded-xl p-4 flex items-center hover:bg-slate-100 hover:border-[#2eb872] transition-colors cursor-pointer group">
                <input 
                  type="file" 
                  multiple 
                  accept="image/jpeg, image/png, image/jpg"
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
                <div className="flex items-center gap-4 w-full">
                  <div className="w-12 h-12 bg-white rounded-lg shadow flex items-center justify-center text-slate-400 group-hover:text-[#2eb872] transition-colors">
                    <UploadCloud className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-slate-700 font-semibold">Choose Files</p>
                    <p className="text-slate-400 text-sm">No file chosen</p>
                  </div>
                </div>
              </div>
              <p className="text-xs text-slate-500 font-medium">Note: Hold down the Ctrl (or Command) key while selecting multiple images.</p>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button 
                type="submit"
                className="w-full md:w-auto relative overflow-hidden group inline-flex items-center justify-center px-10 py-4 font-bold text-white bg-[#2eb872] rounded-xl shadow-lg hover:shadow-[#2eb872]/30 hover:-translate-y-0.5 transition-all duration-300"
              >
                <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-black"></span>
                <span className="relative flex items-center gap-2 text-lg">
                  Submit Ticket
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
            </div>
          </form>

        </motion.div>
      </div>
    </section>
  );
}
