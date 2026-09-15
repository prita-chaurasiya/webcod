"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { courses } from "@/data/courses";
import { Clock, BookOpen, ArrowRight } from "lucide-react";

export function FeaturedCourses() {
  const featuredCourses = courses.filter((course) => course.featured).slice(0, 8);

  return (
    <section className="py-24 bg-zinc-50 dark:bg-black">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-4">
              <span className="text-sm font-semibold tracking-wider uppercase">WebCodian Academy</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground font-space-grotesk">
              Popular Training Programs
            </h2>
          </div>
          <Link href="/courses" className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary/80 transition-colors">
            View All Courses <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredCourses.map((course, i) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group bg-white dark:bg-[#111111] rounded-2xl border border-zinc-200 dark:border-white/10 overflow-hidden hover:shadow-2xl hover:border-primary/50 transition-all flex flex-col h-full"
            >
              {/* Image Placeholder */}
              <div className="relative h-48 bg-zinc-200 dark:bg-white/5 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                <div className="absolute bottom-4 left-4 z-20">
                  <span className="px-3 py-1 bg-primary text-white text-xs font-bold rounded-full">
                    {course.category}
                  </span>
                </div>
                {/* Fallback pattern since we don't have images yet */}
                <div className="absolute inset-0 opacity-20 group-hover:scale-110 transition-transform duration-500 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary via-transparent to-transparent" />
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-lg font-bold text-foreground mb-3 line-clamp-2 font-space-grotesk group-hover:text-primary transition-colors">
                  {course.title}
                </h3>
                
                <p className="text-sm text-muted-foreground line-clamp-2 mb-6 flex-grow">
                  {course.shortDesc}
                </p>
                
                <div className="flex items-center justify-between pt-4 border-t border-zinc-100 dark:border-white/5 mt-auto">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground font-medium">
                    <Clock className="w-4 h-4" />
                    {course.duration}
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground font-medium">
                    <BookOpen className="w-4 h-4" />
                    {course.mode}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
