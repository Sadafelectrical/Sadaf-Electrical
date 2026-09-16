'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { IconMedal, IconTeam, IconCal } from './Icons';
import Reveal from './Reveal';

function useCounter(targetNumber, isVisible, duration = 1200) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    let startTime = null;
    let animationFrameId;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // Ease-out cubic
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(targetNumber * easedProgress));

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isVisible, targetNumber, duration]);

  return count;
}

export default function About() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const countProjects = useCounter(100, isVisible);
  const countClients = useCounter(50, isVisible);
  const countYears = useCounter(5, isVisible);

  return (
    <section className="bg-[#f5f7fb] p-0 overflow-hidden" id="about" ref={sectionRef}>
      <div className="container-custom grid grid-cols-1 lg:grid-cols-2 items-center gap-10 pt-[30px]">
        {/* Left Visual */}
        <Reveal className="order-2 lg:order-1 relative">
          <img
            src="/about-us-image.webp"
            alt="About Us"
            className="w-full lg:w-[112%] lg:max-w-none lg:-ml-[8%] h-auto object-cover"
          />
        </Reveal>

        {/* Right Content */}
        <Reveal delay={150} className="order-1 lg:order-2 py-2.5 pb-[60px] lg:py-[60px]">
          <div className="eyebrow">About Us</div>
          <h2 className="h2-title mb-[18px]">
            Sadaf Constructions
            <br />
            <span className="accent">and Renovations</span>
          </h2>
          <p className="text-[#4b5563] text-[15px] mb-[30px] max-w-[540px] leading-[1.6]">
            We are a trusted team of professionals dedicated to delivering high-quality construction and renovation services. Whether it's a small repair or a complete home transformation, we ensure every project is handled with care, precision and attention to detail.
          </p>

          {/* Stats */}
          <div className="flex gap-9 max-[600px]:gap-[22px] flex-wrap mb-8">
            <div className="flex items-center gap-3">
              <IconMedal className="w-[34px] h-[34px] text-[#0a6fdb]" />
              <div>
                <strong className="block text-[26px] font-bold text-[#0a6fdb] leading-[1.1]">
                  <span>{countProjects}</span>+
                </strong>
                <span className="text-[12.5px] text-[#4b5563]">Projects Completed</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <IconTeam className="w-[34px] h-[34px] text-[#0a6fdb]" />
              <div>
                <strong className="block text-[26px] font-bold text-[#0a6fdb] leading-[1.1]">
                  <span>{countClients}</span>+
                </strong>
                <span className="text-[12.5px] text-[#4b5563]">Happy Clients</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <IconCal className="w-[34px] h-[34px] text-[#0a6fdb]" />
              <div>
                <strong className="block text-[26px] font-bold text-[#0a6fdb] leading-[1.1]">
                  <span>{countYears}</span>+
                </strong>
                <span className="text-[12.5px] text-[#4b5563]">Years of Experience</span>
              </div>
            </div>
          </div>

          <Link href="/about" className="btn btn-outline-blue">
            Learn More
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
