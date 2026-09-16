"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    company: "TechInnovate Solutions",
    text: "We are extremely satisfied with our new software platform. The WebCodian team understood our vision perfectly, delivered a high-quality product on time, and provided excellent support throughout the development process.",
    name: "Rahul Sharma",
    role: "CEO & Director",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop",
    rating: 5
  },
  {
    id: 2,
    company: "EduGrowth Institute",
    text: "We have been associated with WebCodian for over 3 years, and they have always delivered reliable and customized IT solutions. Their team helped us streamline our learning management system with a solution tailored to our exact needs.",
    name: "Priya Patel",
    role: "Founder",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop",
    rating: 5
  },
  {
    id: 3,
    company: "Global Logistics Pvt Ltd",
    text: "Working with the WebCodian team was a great experience. They built a powerful and easy-to-use ERP software that met all our complex business requirements. Their commitment to quality and timely delivery is truly appreciated.",
    name: "Amit Kumar",
    role: "Operations Manager",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=200&auto=format&fit=crop",
    rating: 5
  },
  {
    id: 4,
    company: "Future Healthcare Systems",
    text: "We are very happy with the complete software developed for our clinic. The team delivered a reliable, user-friendly solution that perfectly met our healthcare requirements. Their professionalism made the entire experience smooth.",
    name: "Dr. Ananya Singh",
    role: "Medical Director",
    image: "https://images.unsplash.com/photo-1598550874175-4d0ef436c909?q=80&w=200&auto=format&fit=crop",
    rating: 5
  },
  {
    id: 5,
    company: "FinTech Innovations",
    text: "The financial tracking application provided by WebCodian significantly increased our operational efficiency. Their expertise in secure software architecture is top-tier. Highly recommended for any scaling enterprise.",
    name: "Vikas Verma",
    role: "Chief Technical Officer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
    rating: 5
  },
  {
    id: 6,
    company: "Elite Real Estate",
    text: "WebCodian's custom CRM solution completely revolutionized how we manage properties and leads. The UI is incredibly intuitive and the automated workflows saved us hundreds of manual hours every month.",
    name: "Neha Gupta",
    role: "Sales Director",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop",
    rating: 5
  }
];

export function PremiumTestimonials() {
  return (
    <section className="py-24 bg-slate-50 relative">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        
        {/* Digiature-style Center Title */}
        <div className="text-center max-w-4xl mx-auto mb-20" data-aos="fade-up">
          <span className="inline-block py-1 px-3 rounded text-[#2eb872] bg-teal-50 font-bold text-sm tracking-wide uppercase mb-4 border border-teal-100">
            Client Testimonials
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
            Customer Reviews and Feedback for Our Software Services
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            At WebCodian, our work speaks through the businesses we have helped build, automate, and grow. From healthcare platforms to real estate software and logistics systems, our clients come from diverse industries — and they share one consistent experience: reliable delivery, transparent communication, and software that actually works at scale.
          </p>
        </div>

        {/* Digiature-style Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {testimonials.map((testimonial, idx) => (
            <motion.div 
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col justify-between relative mt-8"
            >
              {/* Floating Avatar */}
              <div className="absolute -top-10 left-8">
                <div className="w-20 h-20 rounded-full border-4 border-white shadow-lg overflow-hidden bg-slate-100">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="pt-10 mb-8 flex-1">
                <span className="block text-[#2eb872] font-bold text-lg mb-4 uppercase tracking-wide">
                  {testimonial.company}
                </span>
                <p className="text-slate-600 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between pt-6 border-t border-slate-100">
                <div>
                  <h3 className="font-bold text-slate-900">{testimonial.name}</h3>
                  <span className="text-sm text-slate-500 font-medium">{testimonial.role}</span>
                </div>
                
                {/* 5 Stars */}
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
