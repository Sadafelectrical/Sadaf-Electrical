'use client';

import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { IconUp } from './Icons';

export default function BackToTop() {
  const [show, setShow] = useState(false);
  const [nearFooter, setNearFooter] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 600);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

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
      window.removeEventListener('scroll', handleScroll);
      if (observer) observer.disconnect();
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [pathname]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      className={`fixed right-4 bottom-4 max-[600px]:right-3 max-[600px]:bottom-3 w-11 h-11 max-[600px]:w-9 max-[600px]:h-9 rounded-full bg-[#0a6fdb] text-white border-0 flex items-center justify-center transition-all duration-250 z-[90] shadow-[0_6px_18px_rgba(10,111,219,0.4)] ${
        show && !nearFooter ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}
    >
      <IconUp className="w-5 h-5 max-[600px]:w-4 max-[600px]:h-4" />
    </button>
  );
}
