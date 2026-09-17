'use client';

import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { IconWhatsapp, IconPhone } from './Icons';

export default function FloatingContact() {
  const [nearFooter, setNearFooter] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setNearFooter(false);

    let observer;
    let rafId;

    const attach = () => {
      const footer = document.querySelector('footer');
      if (!footer) {
        rafId = requestAnimationFrame(attach);
        return;
      }
      observer = new IntersectionObserver(
        ([entry]) => setNearFooter(entry.isIntersecting),
        { rootMargin: '0px' }
      );
      observer.observe(footer);
    };

    attach();

    return () => {
      if (observer) observer.disconnect();
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [pathname]);

  return (
    <div
      className={`fixed right-4 bottom-16 max-[600px]:right-3 max-[600px]:bottom-14 z-[90] flex flex-col gap-3 max-[600px]:gap-2.5 items-end transition-all duration-300 ${
        nearFooter ? 'opacity-0 translate-y-3 pointer-events-none' : 'opacity-100 translate-y-0'
      }`}
    >
      {/* Call */}
      <a
        href="tel:+919900281433"
        aria-label="Call us"
        className="group relative w-14 h-14 max-[600px]:w-10 max-[600px]:h-10 rounded-full bg-gradient-to-br from-[#0a6fdb] to-[#0c1b2f] text-white flex items-center justify-center shadow-[0_8px_24px_rgba(10,111,219,0.45)] ring-2 ring-white/40 hover:ring-white transition-all duration-300 hover:scale-110 hover:-rotate-6"
      >
        <span className="absolute inset-0 rounded-full bg-[#0a6fdb] opacity-40 animate-ping" />
        <IconPhone className="w-5 h-5 max-[600px]:w-4 max-[600px]:h-4 relative z-10" />

        <div className="pointer-events-none absolute right-[calc(100%+14px)] top-1/2 -translate-y-1/2 opacity-0 translate-x-2 scale-95 group-hover:opacity-100 group-hover:translate-x-0 group-hover:scale-100 transition-all duration-300 origin-right">
          <div className="relative whitespace-nowrap bg-[#0c1b2f] text-white text-[13px] font-semibold px-4 py-2 rounded-full shadow-lg">
            Call Us Now
            <span className="absolute left-full top-1/2 -translate-y-1/2 border-8 border-transparent border-l-[#0c1b2f]" />
          </div>
        </div>
      </a>

      {/* WhatsApp */}
      <a
        href="https://wa.me/919900281433"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="group relative w-14 h-14 max-[600px]:w-10 max-[600px]:h-10 rounded-full bg-gradient-to-br from-[#25D366] to-[#128C4A] text-white flex items-center justify-center shadow-[0_8px_24px_rgba(37,211,102,0.5)] ring-2 ring-white/40 hover:ring-white transition-all duration-300 hover:scale-110 hover:rotate-6"
      >
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 animate-ping" />
        <IconWhatsapp className="w-9 h-9 max-[600px]:w-6 max-[600px]:h-6 relative z-10" />

        <div className="pointer-events-none absolute right-[calc(100%+14px)] top-1/2 -translate-y-1/2 opacity-0 translate-x-2 scale-95 group-hover:opacity-100 group-hover:translate-x-0 group-hover:scale-100 transition-all duration-300 origin-right">
          <div className="relative whitespace-nowrap bg-[#128C4A] text-white text-[13px] font-semibold px-4 py-2 rounded-full shadow-lg">
            Chat on WhatsApp
            <span className="absolute left-full top-1/2 -translate-y-1/2 border-8 border-transparent border-l-[#128C4A]" />
          </div>
        </div>
      </a>
    </div>
  );
}
