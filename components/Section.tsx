import React from 'react';

interface SectionProps {
  id: string;
  title?: string;
  className?: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, title, className = "", children }) => {
  return (
    <section id={id} className={`scroll-mt-28 py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto ${className}`}>
      {title && (
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4 relative inline-block">
            {title}
            <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-primary-500 rounded-full"></span>
          </h2>
        </div>
      )}
      {children}
    </section>
  );
};

export default Section;