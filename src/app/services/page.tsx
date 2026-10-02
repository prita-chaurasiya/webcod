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
    <div className="bg-slate-50 min-h-screen">
      <PageBanner 
        title="Our Digital Services" 
        subtitle="End-to-end digital transformation solutions designed for modern businesses."
        breadcrumbs={[{ label: "Services" }]} 
        badge="Enterprise Solutions"
      />
      <section className="py-20 lg:py-28 relative overflow-hidden">
        {/* Ambient Lights */}
        <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-blue-400/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-indigo-400/10 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {services.map((service, idx) => (
              <div 
                key={idx}
                className="group relative bg-gradient-to-b from-white to-slate-50 rounded-[24px] overflow-hidden shadow-[0_15px_40px_rgba(37,99,235,0.04)] hover:shadow-[0_40px_80px_rgba(37,99,235,0.12)] border border-slate-100 transition-all duration-500 flex flex-col h-[400px]"
              >
                {/* Image Container (Top Half) */}
                <div className="h-[55%] w-full overflow-hidden relative bg-slate-100">
                  <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/10 transition-colors duration-500 z-10 mix-blend-multiply"></div>
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                  />
                </div>
                
                {/* Content Container (Bottom Half) */}
                <div className="flex-1 flex flex-col justify-center p-6 relative z-20 bg-white">
                  <h3 className="text-xl font-bold text-slate-900 mb-3 leading-snug group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>
                  
                  {/* Read More Interaction */}
                  <div className="flex items-center gap-2 text-sm font-bold text-blue-600 transition-all duration-300">
                    <Link href={`/${service.slug}`} className="flex items-center gap-2">
                      Explore Solutions
                      <ArrowRight className="w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-300" />
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
