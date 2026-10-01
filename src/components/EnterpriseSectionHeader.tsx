import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface EnterpriseSectionHeaderProps {
  badge?: string;
  title: ReactNode;
  subtitle?: string;
  alignment?: 'left' | 'center';
  lightText?: boolean;
}

export function EnterpriseSectionHeader({
  badge,
  title,
  subtitle,
  alignment = 'center',
  lightText = false
}: EnterpriseSectionHeaderProps) {
  
  const alignClass = alignment === 'center' ? 'text-center mx-auto' : 'text-left';
  const titleColor = lightText ? 'text-white' : 'text-[var(--heading)]';
  const subtitleColor = lightText ? 'text-slate-300' : 'text-slate-600';
  
  return (
    <div className={`max-w-3xl mb-16 ${alignClass}`}>
      {badge && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`inline-block mb-4 px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase ${lightText ? 'bg-white/10 text-white' : 'bg-blue-50 text-[var(--primary)]'}`}
        >
          {badge}
        </motion.div>
      )}
      
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className={`text-3xl md:text-4xl lg:text-[44px] font-bold tracking-tight leading-[1.2] mb-6 ${titleColor}`}
      >
        {title}
      </motion.h2>
      
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className={`text-lg md:text-xl ${subtitleColor} leading-relaxed`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
