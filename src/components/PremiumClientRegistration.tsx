"use client";

import { motion } from "framer-motion";
import { UserPlus, UploadCloud, Send } from "lucide-react";

export function PremiumClientRegistration() {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background Ambient Lights */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[0%] left-[-10%] w-[600px] h-[600px] bg-gradient-to-br from-[#2eb872]/10 to-teal-400/10 rounded-full blur-[100px] mix-blend-multiply animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute bottom-[0%] right-[-5%] w-[500px] h-[500px] bg-gradient-to-tr from-blue-400/10 to-indigo-400/10 rounded-full blur-[120px] mix-blend-multiply animate-pulse" style={{ animationDuration: '10s' }} />
      </div>

      <div className="container mx-auto px-4 lg:px-6 max-w-5xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.06)] border border-slate-100 relative"
        >
          {/* Top Decorative bar */}
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#2eb872] via-teal-400 to-blue-500"></div>

          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-[#2eb872]/10 rounded-full flex items-center justify-center mx-auto mb-4 text-[#2eb872]">
              <UserPlus className="w-8 h-8" />
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-2">
              Client Registration
            </h2>
            <p className="text-slate-500 font-medium">
              Create your account to start your journey with WebCodian LLP.
            </p>
          </div>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
              
              {/* First Name */}
              <div className="space-y-2">
                <label className="block text-sm font-bold text-slate-700">Client First Name</label>
                <input 
                  type="text" 
                  placeholder="Enter Your First Name" 
                  className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2eb872] focus:border-transparent transition-all font-medium text-slate-700 placeholder-slate-400"
                />
              </div>

              {/* Last Name */}
              <div className="space-y-2">
                <label className="block text-sm font-bold text-slate-700">Client Last Name</label>
                <input 
                  type="text" 
                  placeholder="Enter Your Last Name" 
                  className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2eb872] focus:border-transparent transition-all font-medium text-slate-700 placeholder-slate-400"
                />
              </div>

              {/* Contact No */}
              <div className="space-y-2">
                <label className="block text-sm font-bold text-slate-700">Contact No</label>
                <input 
                  type="text" 
                  placeholder="Enter Mobile No" 
                  className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2eb872] focus:border-transparent transition-all font-medium text-slate-700 placeholder-slate-400"
                />
              </div>

              {/* Whatsapp No */}
              <div className="space-y-2">
                <label className="block text-sm font-bold text-slate-700">Whatsapp No</label>
                <input 
                  type="text" 
                  placeholder="Enter Whatsapp No" 
                  className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2eb872] focus:border-transparent transition-all font-medium text-slate-700 placeholder-slate-400"
                />
              </div>

              {/* Email ID */}
              <div className="space-y-2">
                <label className="block text-sm font-bold text-slate-700">Email ID</label>
                <input 
                  type="email" 
                  placeholder="Enter Email ID" 
                  className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2eb872] focus:border-transparent transition-all font-medium text-slate-700 placeholder-slate-400"
                />
              </div>

              {/* Firm Name */}
              <div className="space-y-2">
                <label className="block text-sm font-bold text-slate-700">Firm Name</label>
                <input 
                  type="text" 
                  placeholder="Enter Firm Name" 
                  className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2eb872] focus:border-transparent transition-all font-medium text-slate-700 placeholder-slate-400"
                />
              </div>

              {/* Address */}
              <div className="space-y-2">
                <label className="block text-sm font-bold text-slate-700">Address</label>
                <input 
                  type="text" 
                  placeholder="Enter Address" 
                  className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2eb872] focus:border-transparent transition-all font-medium text-slate-700 placeholder-slate-400"
                />
              </div>

              {/* Pincode */}
              <div className="space-y-2">
                <label className="block text-sm font-bold text-slate-700">Pincode</label>
                <input 
                  type="text" 
                  placeholder="Enter Pincode" 
                  className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2eb872] focus:border-transparent transition-all font-medium text-slate-700 placeholder-slate-400"
                />
              </div>

              {/* District */}
              <div className="space-y-2">
                <label className="block text-sm font-bold text-slate-700">District</label>
                <input 
                  type="text" 
                  placeholder="Enter District" 
                  className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2eb872] focus:border-transparent transition-all font-medium text-slate-700 placeholder-slate-400"
                />
              </div>

              {/* State */}
              <div className="space-y-2">
                <label className="block text-sm font-bold text-slate-700">State</label>
                <input 
                  type="text" 
                  placeholder="Enter State" 
                  className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2eb872] focus:border-transparent transition-all font-medium text-slate-700 placeholder-slate-400"
                />
              </div>

              {/* Country */}
              <div className="space-y-2">
                <label className="block text-sm font-bold text-slate-700">Country</label>
                <input 
                  type="text" 
                  placeholder="Enter Country" 
                  className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2eb872] focus:border-transparent transition-all font-medium text-slate-700 placeholder-slate-400"
                />
              </div>

              {/* Client Type */}
              <div className="space-y-2">
                <label className="block text-sm font-bold text-slate-700">Client Type</label>
                <input 
                  type="text" 
                  placeholder="Enter Client Type" 
                  className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2eb872] focus:border-transparent transition-all font-medium text-slate-700 placeholder-slate-400"
                />
              </div>

              {/* Client Position */}
              <div className="space-y-2">
                <label className="block text-sm font-bold text-slate-700">Client Position</label>
                <input 
                  type="text" 
                  placeholder="Enter Client Position" 
                  className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2eb872] focus:border-transparent transition-all font-medium text-slate-700 placeholder-slate-400"
                />
              </div>

              {/* Client Photo */}
              <div className="space-y-3">
                <label className="block text-sm font-bold text-slate-700">Client Photo</label>
                <div className="relative border-2 border-dashed border-slate-300 bg-slate-50 rounded-xl p-4 flex items-center hover:bg-slate-100 hover:border-[#2eb872] transition-colors cursor-pointer group">
                  <input 
                    type="file" 
                    accept="image/*"
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                  <div className="flex items-center gap-4 w-full">
                    <div className="w-12 h-12 bg-white rounded-lg shadow flex items-center justify-center text-slate-400 group-hover:text-[#2eb872] transition-colors">
                      <UploadCloud className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-slate-700 font-semibold">Choose File</p>
                      <p className="text-slate-400 text-sm">No file chosen</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-6">
              <button 
                type="submit"
                className="w-full md:w-auto relative overflow-hidden group inline-flex items-center justify-center px-12 py-4 font-bold text-white bg-[#2eb872] rounded-xl shadow-lg hover:shadow-[#2eb872]/30 hover:-translate-y-0.5 transition-all duration-300"
              >
                <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-black"></span>
                <span className="relative flex items-center gap-2 text-lg">
                  Submit
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
