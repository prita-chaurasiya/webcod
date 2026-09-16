"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";

// Inline SVGs for social icons to avoid import errors
const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);

const TwitterIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
);

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
);

const teamMembers = [
  {
    name: "Alex Sterling",
    role: "Founder & CEO",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600&auto=format&fit=crop",
    bio: "Visionary leader with 15+ years in ed-tech and software development.",
    socials: { linkedin: "#", twitter: "#" }
  },
  {
    name: "Sarah Chen",
    role: "Head of Engineering",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop",
    bio: "Ex-Google architect passionate about scalable AI and SaaS solutions.",
    socials: { linkedin: "#", github: "#" }
  },
  {
    name: "Marcus Johnson",
    role: "Lead IT Trainer",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=600&auto=format&fit=crop",
    bio: "Dedicated educator who has trained over 5,000 students in full-stack dev.",
    socials: { linkedin: "#", mail: "#" }
  },
  {
    name: "Priya Patel",
    role: "UX/UI Director",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=600&auto=format&fit=crop",
    bio: "Award-winning designer focusing on accessible, premium digital experiences.",
    socials: { linkedin: "#", twitter: "#" }
  },
  {
    name: "David Kim",
    role: "AI & Automation Lead",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop",
    bio: "Spearheads our generative AI integrations for enterprise clients.",
    socials: { linkedin: "#", github: "#" }
  },
  {
    name: "Elena Rodriguez",
    role: "Client Success Manager",
    image: "https://images.unsplash.com/photo-1598550874175-4d0ef436c909?q=80&w=600&auto=format&fit=crop",
    bio: "Ensures every client and student achieves their technological goals.",
    socials: { linkedin: "#", mail: "#" }
  }
];

export function PremiumTeam() {
  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <div className="text-center mb-16">
          <span className="inline-block py-1.5 px-3 rounded-full bg-slate-50 border border-slate-200 text-slate-500 font-bold text-xs uppercase tracking-widest mb-4">The Minds Behind WebCodian</span>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
            Meet Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2eb872] to-teal-500">Expert Team</span>
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto font-medium leading-relaxed">
            A diverse group of technologists, educators, and strategists united by a passion for excellence in software development and IT training.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative bg-white rounded-3xl p-6 shadow-sm hover:shadow-xl border border-slate-100 transition-all duration-300"
            >
              <div className="relative w-full aspect-square rounded-2xl overflow-hidden mb-6">
                <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors z-10"></div>
                <img src={member.image} alt={member.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500" />
                
                {/* Hover Social Links */}
                <div className="absolute bottom-4 left-0 w-full flex justify-center gap-3 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 z-20">
                  {member.socials.linkedin && (
                    <a href={member.socials.linkedin} className="w-10 h-10 rounded-full bg-white text-slate-800 flex items-center justify-center hover:bg-[#0077b5] hover:text-white transition-colors shadow-lg">
                      <LinkedinIcon />
                    </a>
                  )}
                  {member.socials.twitter && (
                    <a href={member.socials.twitter} className="w-10 h-10 rounded-full bg-white text-slate-800 flex items-center justify-center hover:bg-[#1DA1F2] hover:text-white transition-colors shadow-lg">
                      <TwitterIcon />
                    </a>
                  )}
                  {member.socials.github && (
                    <a href={member.socials.github} className="w-10 h-10 rounded-full bg-white text-slate-800 flex items-center justify-center hover:bg-slate-900 hover:text-white transition-colors shadow-lg">
                      <GithubIcon />
                    </a>
                  )}
                  {member.socials.mail && (
                    <a href={member.socials.mail} className="w-10 h-10 rounded-full bg-white text-slate-800 flex items-center justify-center hover:bg-[#ea4335] hover:text-white transition-colors shadow-lg">
                      <Mail className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>

              <div className="text-center">
                <h3 className="text-xl font-bold text-slate-900 mb-1">{member.name}</h3>
                <p className="text-sm font-bold text-[#2eb872] uppercase tracking-wider mb-3">{member.role}</p>
                <p className="text-slate-500 text-sm font-medium leading-relaxed">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
