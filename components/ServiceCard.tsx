import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface ServiceCardProps {
  number: string;
  title: string;
  description: string;
  setupTime: string;
  roi: string;
  href: string;
  imageSrc: string;
  className?: string;
}

export default function ServiceCard({
  number,
  title,
  description,
  setupTime,
  roi,
  href,
  imageSrc,
  className = ""
}: ServiceCardProps) {
  return (
    <Link href={href} className={`block bg-white rounded shadow-card hover:shadow-card-hover transition-all duration-tbc transform hover:-translate-y-1 overflow-hidden border border-light-grey group ${className}`}>
      {/* 16:9 Hero Image Cap */}
      <div className="relative w-full aspect-video bg-ink overflow-hidden">
        <Image 
          src={imageSrc} 
          alt="" 
          fill 
          className="object-cover opacity-90 group-hover:scale-105 transition-transform duration-tbc"
          aria-hidden="true"
        />
      </div>
      
      {/* Card Content */}
      <div className="p-s4">
        <span className="block text-gold font-display font-bold text-caption tracking-[1.5px] mb-2">
          {number}
        </span>
        <h3 className="text-h3 font-display font-bold text-ink mb-2 text-balance leading-tight">
          {title}
        </h3>
        <p className="text-body text-mid-grey mb-4 line-clamp-2">
          {description}
        </p>
        
        {/* Metadata & CTA */}
        <div className="flex flex-wrap items-center justify-between mt-auto pt-4 border-t border-light-grey">
          <span className="text-caption text-mid-grey">
            Setup {setupTime} &bull; ROI {roi}
          </span>
          <span className="text-royal font-bold text-btn group-hover:text-royal-mid transition-colors">
            Learn more &rarr;
          </span>
        </div>
      </div>
    </Link>
  );
}
