import React from 'react';
import Image from 'next/image';

interface SectionInkProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export default function SectionInk({ children, className = "", id }: SectionInkProps) {
  return (
    <section id={id} className={`relative bg-ink text-white overflow-hidden ${className}`}>
      {/* Texture Layer */}
      <div className="absolute inset-0 z-0 opacity-50 pointer-events-none">
        <Image 
          src="/img/motif-dark-wide.png" 
          alt="" 
          fill 
          className="object-cover object-center"
          priority={false}
          aria-hidden="true"
        />
      </div>
      
      {/* Content Layer */}
      <div className="relative z-10 py-s7">
        {children}
      </div>
    </section>
  );
}
