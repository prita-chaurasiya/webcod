"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { User, MapPin, GraduationCap, ArrowRight, ArrowLeft, Upload, CheckCircle2 } from "lucide-react";

export function PremiumInternshipForm() {
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const nextStep = () => {
    if (step < 3) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const steps = [
    { id: 1, title: "Personal Details", icon: <User className="w-5 h-5" /> },
    { id: 2, title: "Address Details", icon: <MapPin className="w-5 h-5" /> },
    { id: 3, title: "Qualification", icon: <GraduationCap className="w-5 h-5" /> }
  ];

  if (isSubmitted) {
    return (
      <section className="py-12 md:py-16 bg-slate-50 relative overflow-hidden min-h-[60vh] flex items-center justify-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-gradient-to-b from-white to-slate-50 p-12 rounded-[2.5rem] shadow-lg border border-slate-100 text-center max-w-lg w-full relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-slate-50/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="w-24 h-24 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6 shadow-[0_0_30px_rgba(34,197,94,0.3)]">
            <CheckCircle2 className="w-12 h-12 text-[var(--primary)]" />
          </div>
          <h3 className="text-3xl font-bold text-slate-900 mb-4">Application Submitted!</h3>
          <p className="text-slate-500 text-lg mb-8">Thank you for applying to the WebCodian Internship Program. Our team will review your details and contact you soon.</p>
          <button onClick={() => window.location.reload()} className="px-8 py-3 btn-primary rounded-full font-bold hover:bg-white transition-colors">
            Submit Another
          </button>
        </motion.div>
      </section>
    );
  }

  return (
    <section className="py-12 md:py-16 bg-slate-50 relative overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--primary)]/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
        
        <div className="bg-gradient-to-b from-white to-slate-50 rounded-[2.5rem] shadow-lg border border-slate-100 overflow-hidden flex flex-col lg:flex-row">
          
          {/* Left Panel: Visual */}
          <div className="lg:w-2/5 relative btn-primary p-10 lg:p-16 flex flex-col justify-between overflow-hidden">
            {/* Background Image / Overlay */}
            <div className="absolute inset-0">
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80" 
                alt="Student coding" 
                className="w-full h-full object-cover opacity-30 mix-blend-overlay img-premium"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-slate-900/40"></div>
            </div>
            
            <div className="relative z-10 mb-20">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-blue-300 font-semibold text-sm mb-6 backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
                INTERNSHIP PROGRAM
              </div>
              <h2 className="text-4xl font-bold mb-6 leading-tight">
                Start Your <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-blue-400">Learning Journey</span>
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                Join our premium training programs and build real-world skills working alongside industry professionals on live projects.
              </p>
            </div>
            
            <div className="relative z-10">
              <div className="flex -space-x-4 mb-4">
                <img className="w-12 h-12 rounded-full border-2 border-slate-900 object-cover img-premium" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=100&q=80" alt="Student 1" />
                <img className="w-12 h-12 rounded-full border-2 border-slate-900 object-cover img-premium" src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=100&q=80" alt="Student 2" />
                <img className="w-12 h-12 rounded-full border-2 border-slate-900 object-cover img-premium" src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=100&q=80" alt="Student 3" />
                <div className="w-12 h-12 rounded-full border-2 border-slate-900 bg-white flex items-center justify-center text-sm font-bold text-[var(--heading)]">+500</div>
              </div>
              <p className="text-sm text-slate-500 font-medium">Join 500+ successful interns.</p>
            </div>
          </div>

          {/* Right Panel: Form */}
          <div className="lg:w-3/5 p-8 lg:p-16">
            
            {/* Stepper */}
            <div className="flex justify-between items-center mb-12 relative max-w-lg mx-auto">
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-slate-100 rounded-full z-0"></div>
              <div 
                className="absolute left-0 top-1/2 -translate-y-1/2 h-1 bg-[var(--primary)] rounded-full z-0 transition-all duration-500 ease-in-out" 
                style={{ width: `${((step - 1) / 2) * 100}%` }}
              ></div>
              
              {steps.map((s) => (
                <div key={s.id} className="relative z-10 flex flex-col items-center">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center border-4 transition-all duration-500 ${step >= s.id ? 'bg-[var(--primary)] border-white shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05)] text-white' : 'bg-gradient-to-b from-white to-slate-50 border-slate-100 text-slate-500'}`}>
                    {s.icon}
                  </div>
                  <span className={`absolute -bottom-8 w-32 text-center text-xs font-bold transition-colors duration-300 ${step >= s.id ? 'text-slate-900' : 'text-slate-500'}`}>
                    {s.title}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-16">
              <form onSubmit={handleSubmit} className="relative min-h-[400px]">
                <AnimatePresence mode="wait">
                  
                  {/* Step 1: Personal */}
                  {step === 1 && (
                    <motion.div
                      key="step1"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-6"
                    >
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-semibold text-slate-700 mb-2">First Name <span className="text-[var(--primary)]">*</span></label>
                          <input type="text" className="w-full px-5 py-4 rounded-[18px] border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[var(--primary)] transition-all bg-slate-50 focus:bg-white text-slate-900 placeholder:text-slate-500 shadow-sm" placeholder="Enter Your Name" required />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-slate-700 mb-2">Father/Husband Name <span className="text-[var(--primary)]">*</span></label>
                          <input type="text" className="w-full px-5 py-4 rounded-[18px] border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[var(--primary)] transition-all bg-slate-50 focus:bg-white text-slate-900 placeholder:text-slate-500 shadow-sm" placeholder="Enter Last Name" required />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-semibold text-slate-700 mb-2">Gender <span className="text-[var(--primary)]">*</span></label>
                          <select className="w-full px-5 py-4 rounded-[18px] border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[var(--primary)] transition-all bg-slate-50 focus:bg-white appearance-none text-slate-900 shadow-sm" required defaultValue="">
                            <option value="" disabled>Select Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-slate-700 mb-2">Date of Birth <span className="text-[var(--primary)]">*</span></label>
                          <input type="date" className="w-full px-5 py-4 rounded-[18px] border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[var(--primary)] transition-all bg-slate-50 focus:bg-white text-slate-900 shadow-sm" required />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">Email ID <span className="text-[var(--primary)]">*</span></label>
                        <input type="email" className="w-full px-5 py-4 rounded-[18px] border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[var(--primary)] transition-all bg-slate-50 focus:bg-white text-slate-900 placeholder:text-slate-500 shadow-sm" placeholder="Enter Email ID" required />
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-semibold text-slate-700 mb-2">WhatsApp Number <span className="text-[var(--primary)]">*</span></label>
                          <input type="tel" className="w-full px-5 py-4 rounded-[18px] border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[var(--primary)] transition-all bg-slate-50 focus:bg-white text-slate-900 placeholder:text-slate-500 shadow-sm" placeholder="WhatsApp No" maxLength={10} required />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-slate-700 mb-2">Phone Number <span className="text-[var(--primary)]">*</span></label>
                          <input type="tel" className="w-full px-5 py-4 rounded-[18px] border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[var(--primary)] transition-all bg-slate-50 focus:bg-white text-slate-900 placeholder:text-slate-500 shadow-sm" placeholder="Mobile No" maxLength={10} required />
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Step 2: Address */}
                  {step === 2 && (
                    <motion.div
                      key="step2"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-6"
                    >
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">Full Address <span className="text-[var(--primary)]">*</span></label>
                        <input type="text" className="w-full px-5 py-4 rounded-[18px] border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[var(--primary)] transition-all bg-slate-50 focus:bg-white text-slate-900 placeholder:text-slate-500 shadow-sm" placeholder="Enter Address" required />
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-semibold text-slate-700 mb-2">Pin Code <span className="text-[var(--primary)]">*</span></label>
                          <input type="text" className="w-full px-5 py-4 rounded-[18px] border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[var(--primary)] transition-all bg-slate-50 focus:bg-white text-slate-900 placeholder:text-slate-500 shadow-sm" placeholder="Enter Pincode" maxLength={6} required />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-slate-700 mb-2">City/District <span className="text-[var(--primary)]">*</span></label>
                          <input type="text" className="w-full px-5 py-4 rounded-[18px] border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[var(--primary)] transition-all bg-slate-50 focus:bg-white text-slate-900 placeholder:text-slate-500 shadow-sm" placeholder="Enter District" required />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">State <span className="text-[var(--primary)]">*</span></label>
                        <input type="text" className="w-full px-5 py-4 rounded-[18px] border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[var(--primary)] transition-all bg-slate-50 focus:bg-white text-slate-900 placeholder:text-slate-500 shadow-sm" placeholder="Enter State" required />
                      </div>
                    </motion.div>
                  )}

                  {/* Step 3: Qualification */}
                  {step === 3 && (
                    <motion.div
                      key="step3"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-6"
                    >
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-semibold text-slate-700 mb-2">Highest Qualification <span className="text-[var(--primary)]">*</span></label>
                          <select className="w-full px-5 py-4 rounded-[18px] border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[var(--primary)] transition-all bg-slate-50 focus:bg-white appearance-none text-slate-900 shadow-sm" required defaultValue="">
                            <option value="" disabled>Select Qualification</option>
                            <option value="10 (SSLC)">10 (SSLC)</option>
                            <option value="10+2 (Intermediate)">10+2 (Intermediate)</option>
                            <option value="Degree (UG)">Degree (UG)</option>
                            <option value="Degree (PG)">Degree (PG)</option>
                            <option value="Diploma">Diploma</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-slate-700 mb-2">Internship For <span className="text-[var(--primary)]">*</span></label>
                          <select className="w-full px-5 py-4 rounded-[18px] border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[var(--primary)] transition-all bg-slate-50 focus:bg-white appearance-none text-slate-900 shadow-sm" required defaultValue="">
                            <option value="" disabled>Select Role</option>
                            <option value="Sales">Sales</option>
                            <option value="Development">Development</option>
                            <option value="Management">Management</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-4">Do you have a personal laptop? <span className="text-[var(--primary)]">*</span></label>
                        <div className="flex gap-6">
                          <label className="flex items-center gap-3 cursor-pointer group">
                            <input type="radio" name="laptop" value="yes" className="w-5 h-5 accent-[var(--primary)]" required />
                            <span className="text-slate-700 font-medium">Yes</span>
                          </label>
                          <label className="flex items-center gap-3 cursor-pointer group">
                            <input type="radio" name="laptop" value="no" className="w-5 h-5 accent-[var(--primary)]" required />
                            <span className="text-slate-700 font-medium">No</span>
                          </label>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">Upload Resume <span className="text-[var(--primary)]">*</span></label>
                        <div className="relative group cursor-pointer">
                          <div className="absolute inset-0 bg-gradient-to-r from-[var(--primary)] to-blue-500 rounded-[18px] blur opacity-10 group-hover:opacity-20 transition-opacity"></div>
                          <div className="relative border-2 border-dashed border-slate-300 rounded-[18px] p-8 text-center bg-slate-50 hover:bg-white transition-colors">
                            <Upload className="w-8 h-8 text-slate-500 mx-auto mb-3" />
                            <span className="text-slate-500 text-sm font-medium">Click to upload your resume (PDF/DOC)</span>
                            <input type="file" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" required />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Navigation Buttons */}
                <div className="mt-12 flex items-center justify-between pt-6 border-t border-slate-100">
                  {step > 1 ? (
                    <button type="button" onClick={prevStep} className="px-6 py-3 text-slate-500 font-bold hover:text-slate-900 transition-colors flex items-center gap-2">
                      <ArrowLeft className="w-4 h-4" /> Previous
                    </button>
                  ) : <div></div>}

                  {step < 3 ? (
                    <button type="button" onClick={nextStep} className="px-8 py-3 btn-primary rounded-[18px] font-bold shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05)] hover:shadow-xl hover:-translate-y-1 transition-all flex items-center gap-2">
                      Next Step <ArrowRight className="w-4 h-4" />
                    </button>
                  ) : (
                    <button type="submit" className="px-8 py-3 bg-[var(--primary)] text-white rounded-[18px] font-bold shadow-[0_0_20px_rgba(46,184,114,0.3)] hover:shadow-[0_0_30px_rgba(46,184,114,0.5)] hover:-translate-y-1 transition-all flex items-center gap-2">
                      Submit Application <CheckCircle2 className="w-5 h-5" />
                    </button>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}


