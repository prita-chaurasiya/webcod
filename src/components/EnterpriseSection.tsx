import { ReactNode } from 'react';

interface EnterpriseSectionProps {
  children: ReactNode;
  className?: string;
  background?: 'white' | 'slate' | 'navy' | 'blue' | 'dark';
  padding?: 'normal' | 'large' | 'none';
}

export function EnterpriseSection({ 
  children, 
  className = '', 
  background = 'white',
  padding = 'normal'
}: EnterpriseSectionProps) {
  
  const bgColors = {
    white: 'bg-white',
    slate: 'bg-slate-50 border-y border-slate-100',
    navy: 'bg-slate-900',
    blue: 'bg-blue-600',
    dark: 'bg-slate-800',
  };

  const paddings = {
    normal: 'py-16 md:py-20',
    large: 'py-20 md:py-24',
    none: 'py-0',
  };

  return (
    <section className={`w-full ${bgColors[background]} ${paddings[padding]} ${className}`}>
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        {children}
      </div>
    </section>
  );
}
