'use client';

import React, { useState, useEffect } from 'react';
import { IconLeft, IconRight, IconQuote, IconStar } from './Icons';
import Reveal from './Reveal';

const testimonials = [
  {
    quote:
      'Sadaf Constructions renovated our entire flat and the results were amazing! Professional team, on-time delivery and excellent quality. Highly recommended!',
    author: 'Ayesha Khan',
    role: 'Homeowner, Dubai',
  },
  {
    quote:
      'They rewired our whole villa and installed CCTV in two days. Clean work, clear pricing and the team explained everything before starting.',
    author: 'Rahul Mehta',
    role: 'Villa Owner, Sharjah',
  },
  {
    quote:
      'Our old kitchen looks brand new. The custom cabinets are beautifully made and the project was finished a day ahead of schedule.',
    author: 'Fatima Al Sayed',
    role: 'Homeowner, Abu Dhabi',
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const goTo = (index) => {
    setActiveIndex((index + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [activeIndex]);

  return (
    <section className="dark-section py-[60px]" id="testimonials">
      <div className="container-custom">
        {/* Header */}
        <Reveal className="flex justify-between items-end mb-[30px] gap-5 max-[600px]:flex-col max-[600px]:items-start">
          <div>
            <div className="eyebrow">What Our Clients Say</div>
            <h2 className="h2-title text-white">Trusted by Homeowners</h2>
          </div>
          <div className="flex gap-2.5">
            <button
              className="w-11 h-11 rounded-full border-[1.5px] border-white/45 bg-transparent text-white flex items-center justify-center transition-colors duration-200 hover:bg-[#0a6fdb] hover:border-[#0a6fdb]"
              onClick={() => goTo(activeIndex - 1)}
              aria-label="Previous testimonial"
            >
              <IconLeft className="w-[18px] h-[18px]" />
            </button>
            <button
              className="w-11 h-11 rounded-full border-[1.5px] border-white/45 bg-transparent text-white flex items-center justify-center transition-colors duration-200 hover:bg-[#0a6fdb] hover:border-[#0a6fdb]"
              onClick={() => goTo(activeIndex + 1)}
              aria-label="Next testimonial"
            >
              <IconRight className="w-[18px] h-[18px]" />
            </button>
          </div>
        </Reveal>

        {/* Carousel Track */}
        <Reveal delay={150} className="flex overflow-hidden rounded-[6px]">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="min-w-full bg-[#1c2636] rounded-[6px] p-8 lg:px-10 lg:py-[34px] grid grid-cols-1 md:grid-cols-[auto_1fr] lg:grid-cols-[auto_1fr_auto_auto] items-center gap-6 lg:gap-[30px] transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              <div className="self-start text-[#0a6fdb]">
                <IconQuote className="w-11 h-11" />
              </div>

              <p className="text-[15.5px] text-white leading-[1.7] max-w-[560px]">
                {item.quote}
              </p>

              <div className="flex gap-1 text-[#fbbf24] md:col-start-2 lg:col-start-3" aria-label="5 out of 5 stars">
                {[...Array(5)].map((_, starIndex) => (
                  <IconStar key={starIndex} className="w-5 h-5" />
                ))}
              </div>

              <div className="md:col-start-2 lg:col-start-4 lg:border-l lg:border-white/15 lg:pl-[30px] max-[992px]:border-t max-[992px]:border-white/15 max-[992px]:pt-4 min-w-[200px]">
                <strong className="block text-[16px] text-white">{item.author}</strong>
                <span className="text-[13px] text-[#aab4c3]">{item.role}</span>
              </div>
            </div>
          ))}
        </Reveal>

        {/* Indicator Dots */}
        <div className="flex justify-center gap-2 mt-[22px]">
          {testimonials.map((_, dotIndex) => (
            <button
              key={dotIndex}
              onClick={() => goTo(dotIndex)}
              className={`h-2 transition-all duration-200 p-0 border-0 ${
                dotIndex === activeIndex
                  ? 'bg-[#0a6fdb] w-6 rounded-[4px]'
                  : 'bg-[#4a5870] w-2 rounded-full'
              }`}
              aria-label={`Testimonial ${dotIndex + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
