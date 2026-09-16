import React from 'react';
import Link from 'next/link';
import { IconShield, IconTeam, IconClock } from './Icons';
import Reveal from './Reveal';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-white via-[#f7f9fc] via-45% to-[#eef2f7] overflow-hidden" id="home">
      <div className="container-custom grid grid-cols-1 lg:grid-cols-[1fr_1.05fr] items-center gap-6 min-h-[560px]">
        {/* Left Content */}
        <Reveal className="py-[60px] max-[992px]:pt-12 max-[992px]:pb-2.5 text-left">
          <div className="flex gap-3.5 max-[600px]:gap-2.5 text-[11px] max-[600px]:text-[10px] tracking-[0.3em] font-semibold text-[#111827] mb-[18px]">
            BUILD <span className="text-[#9aa3b2] not-italic">|</span> RENOVATE <span className="text-[#9aa3b2] not-italic">|</span> IMPROVE
          </div>
          <h1 className="text-[clamp(36px,5vw,60px)] leading-[1.08] font-extrabold tracking-[-0.02em] mb-[22px] text-[#111827]">
            Your Space.<br />Our <span className="accent">Expertise.</span>
          </h1>
          <p className="text-[15.5px] text-[#4b5563] max-w-[520px] mb-[30px] leading-[1.6]">
            From complete home renovations to plumbing, electrical, carpentry, security systems and more — Sadaf Constructions and Renovations brings your vision to life with quality, reliability and craftsmanship.
          </p>
          <div className="flex gap-4 flex-wrap mb-[42px]">
            <a href="#contact" className="btn btn-primary min-w-[180px] max-[600px]:flex-1 max-[600px]:min-w-0">
              Get a Free Quote
            </a>
            <Link href="/services" className="btn btn-outline min-w-[180px] max-[600px]:flex-1 max-[600px]:min-w-0">
              Our Services
            </Link>
          </div>
          <div className="flex gap-[34px] max-[600px]:gap-[18px] flex-wrap">
            <div className="flex items-center gap-2.5 text-[13.5px] font-medium text-[#111827]">
              <IconShield className="w-7 h-7 text-[#0a6fdb]" />
              <span>Quality Work</span>
            </div>
            <div className="flex items-center gap-2.5 text-[13.5px] font-medium text-[#111827]">
              <IconTeam className="w-7 h-7 text-[#0a6fdb]" />
              <span>Experienced Team</span>
            </div>
            <div className="flex items-center gap-2.5 text-[13.5px] font-medium text-[#111827]">
              <IconClock className="w-7 h-7 text-[#0a6fdb]" />
              <span>On-Time Delivery</span>
            </div>
          </div>
        </Reveal>

        {/* Right Visual */}
        <Reveal delay={150} className="relative self-stretch flex items-center">
          <img
            src="/banner-image.webp"
            alt="Hero Banner"
            className="w-full lg:w-[112%] lg:max-w-none lg:-ml-[4%] h-auto object-cover"
          />
          <div className="absolute right-0 bottom-6 max-[992px]:bottom-0 bg-[#141d2b] text-white py-4 px-[26px] max-[992px]:py-3 max-[992px]:px-[18px] text-right text-[14px] max-[992px]:text-[12px] tracking-[0.12em] leading-[1.5] font-medium uppercase shadow-lg">
            Renovating spaces<br />building better lives
          </div>
        </Reveal>
      </div>
    </section>
  );
}
