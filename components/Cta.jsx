import React from 'react';
import Reveal from './Reveal';

export default function Cta() {
  return (
    <section className="relative bg-[#f5f7fb] overflow-hidden">
      {/* Decorative polygons */}
      <div className="absolute right-0 bottom-0 w-full lg:w-[52%] h-[45%] lg:h-full pointer-events-none opacity-95 lg:opacity-100 z-[1]" aria-hidden="true">
        <svg viewBox="0 0 700 300" preserveAspectRatio="none" className="w-full h-full">
          <polygon points="0,300 440,20 700,160 700,300" fill="#0a6fdb" />
          <polygon points="30,300 440,40 700,185 700,300" fill="#ffffff" />
          <polygon points="60,300 440,60 700,205 700,300" fill="#6b7280" />
          <polygon points="80,300 440,72 700,220 700,300" fill="#141d2b" />
        </svg>
      </div>

      <div className="container-custom grid grid-cols-1 lg:grid-cols-[1.3fr_0.7fr] items-center min-h-[300px] relative z-[2]">
        <Reveal className="py-[60px] pb-[160px] lg:py-[70px] relative z-[2]">
          <h2 className="h2-title mb-3">
            Let's Build Your <span className="accent">Dream Space</span>
          </h2>
          <p className="text-[#4b5563] mb-7 text-[15px]">
            Get in touch today for a free consultation and quote.
          </p>
          <div className="flex gap-4 flex-wrap" style={{ marginBottom: 0 }}>
            <a href="tel:+919742255503" className="btn btn-primary min-w-[180px] max-[600px]:flex-1 max-[600px]:min-w-0">
              Get a Free Quote
            </a>
            <a href="mailto:sadafelectrical786@gmail.com" className="btn btn-outline min-w-[180px] max-[600px]:flex-1 max-[600px]:min-w-0">
              Contact Us
            </a>
          </div>
        </Reveal>
      </div>

      {/* Slogan */}
      <div className="absolute right-[max(24px,calc((100vw-1360px)/2+24px))] bottom-10 max-[600px]:bottom-[26px] z-[2] text-white text-right text-[17px] max-[600px]:text-[14px] tracking-[0.08em] leading-[1.5] uppercase font-medium">
        Your home.<br />Our responsibility.
      </div>
    </section>
  );
}
