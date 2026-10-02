import { PageBanner } from "@/components/PageBanner";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const services = [
  { title: "Web Development", image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800", slug: "web-development" },
  { title: "Software Development", image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800", slug: "software-development" },
  { title: "Digital Marketing", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800", slug: "digital-marketing" },
  { title: "App Development", image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800", slug: "app-development" },
  { title: "SEO/SMO", image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=800", slug: "seo-smo" },
  { title: "Graphic Design", image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=800", slug: "graphic-design" },
  { title: "Bulk SMS", image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=800", slug: "bulk-sms" },
  { title: "Maintenance", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800", slug: "maintenance" },
  { title: "Bulk Whatsapp SMS", image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?q=80&w=800", slug: "bulk-whatsapp-sms" },
  { title: "Digital Product", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800", slug: "digital-product" },
  { title: "Bulk Voice Call", image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?q=80&w=800", slug: "bulk-voice-call" },
  { title: "Video Editing", image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=800", slug: "video-editing" },
];

export default function Page() {
  return (
    <div className="bg-[#0B1121] min-h-screen">
      <PageBanner 
        title="Our Digital Services" 
        subtitle="End-to-end digital transformation solutions designed for modern businesses."
        breadcrumbs={[{ label: "Services" }]} 
        badge="Enterprise Solutions"
      />
      <section className="py-20 lg:py-28 relative overflow-hidden">
        {/* Ambient Lights */}
        <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {services.map((service, idx) => (
              <div 
                key={idx}
                className="group relative bg-white/5 rounded-[24px] overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.2)] hover:shadow-[0_40px_80px_rgba(37,99,235,0.15)] border border-white/10 transition-all duration-500 flex flex-col h-[400px]"
              >
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                  <div className="absolute inset-0 bg-blue-900/20 z-10 mix-blend-multiply group-hover:opacity-0 transition-opacity duration-500"></div>
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
                  />
                </div>
                
                {/* Gradients for Text Visibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1121] via-[#0B1121]/60 to-transparent z-10 opacity-95 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Content */}
                <div className="relative z-20 flex flex-col h-full justify-end p-8 text-left">
                  <h3 className="text-3xl font-bold text-white mb-3 leading-snug drop-shadow-lg group-hover:text-blue-200 transition-colors">
                    {service.title}
                  </h3>
                  
                  {/* Read More Interaction */}
                  <div className="flex items-center gap-2 text-base font-bold text-blue-300 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    <Link href={`/${service.slug}`} className="flex items-center gap-2">
                      Explore Solutions
                      <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1.5 transition-transform duration-300" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}
