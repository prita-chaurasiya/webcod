"use client";

import { useState } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";

export function PremiumAiConsultationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        const form = e.target as HTMLFormElement;
        form.reset();
      }, 3000);
    }, 1500);
  };

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Full Name</label>
          <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-slate-50 focus:bg-white transition-all text-sm text-slate-900" placeholder="John Doe" required />
        </div>
        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Work Email</label>
          <input type="email" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-slate-50 focus:bg-white transition-all text-sm text-slate-900" placeholder="john@company.com" required />
        </div>
      </div>
      <div>
        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Company Name</label>
        <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-slate-50 focus:bg-white transition-all text-sm text-slate-900" placeholder="Acme Corp" />
      </div>
      <div>
        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">How can we help?</label>
        <textarea rows={3} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-slate-50 focus:bg-white transition-all text-sm resize-none text-slate-900" placeholder="Tell us about your project..." required></textarea>
      </div>
      
      <button 
        type="submit" 
        disabled={isSubmitting || isSubmitted}
        className={`w-full flex items-center justify-center gap-2 font-bold py-4 px-8 rounded-xl transition-all shadow-lg ${
          isSubmitted 
            ? 'bg-emerald-500 text-white shadow-emerald-500/30' 
            : 'bg-blue-600 hover:bg-blue-700 text-white hover:shadow-blue-600/30'
        } disabled:opacity-80`}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" /> Processing...
          </>
        ) : isSubmitted ? (
          <>
            <CheckCircle2 className="w-5 h-5" /> Request Received!
          </>
        ) : (
          "Book Free Consultation"
        )}
      </button>
    </form>
  );
}
