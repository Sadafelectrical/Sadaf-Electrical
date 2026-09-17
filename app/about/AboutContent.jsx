'use client';

import React, { useState, useRef } from 'react';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import BackToTop from '../../components/BackToTop';
import {
  IconShield,
  IconTeam,
  IconClock,
  IconCheck,
  IconHome,
  IconTools,
  IconBolt,
  IconCctv,
  IconStar,
  IconQuote,
  IconPhone,
  IconCal,
  IconMedal,
  IconLeft,
  IconRight,
} from '../../components/Icons';

export default function AboutContent() {
  const [activeTab, setActiveTab] = useState(0);
  const [openFaq, setOpenFaq] = useState(null);
  const reviewTrackRef = useRef(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const promises = [
    {
      title: 'Fixed, Honest Pricing',
      subtitle: 'No surprises on your bill',
      desc: 'The price we agree on before starting is the price you pay. If you decide to add extra work midway, we always give you a written price first before doing anything.',
      points: [
        'Detailed line-by-line quote before work begins',
        'No hidden call-out fees or mystery charges',
        'Flexible payment milestones linked to project stages',
      ],
    },
    {
      title: 'Daily Cleanliness',
      subtitle: 'We treat your home with respect',
      desc: 'Renovations are naturally dusty, but we make sure the mess stays under control. We cover floors, protect your doors and furniture, and clean up at the end of every working day.',
      points: [
        'Heavy-duty floor protection sheets laid on Day 1',
        'Plastic zip-walls to stop dust traveling to other rooms',
        'End-of-day cleanup so your home stays safe and tidy',
      ],
    },
    {
      title: 'Clear Daily Communication',
      subtitle: 'Always know what is happening',
      desc: 'You won’t have to chase five different workers for updates. You get one friendly supervisor who shares photos and videos on WhatsApp every evening.',
      points: [
        'Single supervisor as your main point of contact',
        'Daily evening photos and progress notes on WhatsApp',
        'Always reachable by phone or message during the day',
      ],
    },
    {
      title: 'Real 1-Year Warranty',
      subtitle: 'Peace of mind long after we leave',
      desc: 'We stand behind our work. If a tap drips, a cabinet hinge loosens, or an electrical switch acts up after we finish, we come back and fix it free of charge.',
      points: [
        'Full workmanship warranty on all installations',
        'Prompt response for any maintenance requests',
        'Original manufacturer guarantees on all hardware supplied',
      ],
    },
  ];

  const teamRoles = [
    {
      role: 'Master Carpenters',
      exp: '8+ Years Exp',
      desc: 'Custom kitchen cabinets, built-in wardrobes, wooden doors, and custom shelving made to fit your exact room measurements.',
      tag: 'Woodwork & Kitchens',
    },
    {
      role: 'Certified Electricians',
      exp: 'Licensed & Insured',
      desc: 'Complete rewiring, load balancing, modern LED ambient lighting, chandelier hanging, and safe switchboard upgrades.',
      tag: 'Electrical & Lighting',
    },
    {
      role: 'Plumbing Specialists',
      exp: 'Leak & Fitting Pros',
      desc: 'Concealed leak detection, water heaters, designer washbasins, mixer taps, shower systems, and clean drain routing.',
      tag: 'Plumbing & Bathrooms',
    },
    {
      role: 'Tilers & Civil Finishers',
      exp: 'Precision Finishing',
      desc: 'Laser-level porcelain and ceramic tiling, marble polishing, gypsum false ceiling designs, and smooth wall painting.',
      tag: 'Tiling & Painting',
    },
  ];

  const timelineGuide = [
    {
      type: 'Single Bathroom Remodel',
      time: '7 – 10 Days',
      includes: 'Old tile removal, new waterproofing, tiling, vanity fitting, shower installation, and painting.',
    },
    {
      type: 'Kitchen Renovation',
      time: '10 – 14 Days',
      includes: 'Cabinet replacement, quartz/granite countertop, plumbing connections, backsplash tiling, and lights.',
    },
    {
      type: '2-Bedroom Apartment',
      time: '3 – 4 Weeks',
      includes: 'Full painting, new flooring, bathroom upgrades, custom wardrobes, and updated electrical fittings.',
    },
    {
      type: 'Full Villa Renovation',
      time: '4 – 6 Weeks',
      includes: 'Complete turnkey interior overhaul, civil partition adjustments, lighting overhaul, and deep cleaning.',
    },
  ];

  const clientReviews = [
    {
      name: 'Arjun Reddy',
      location: 'Koramangala • 2-Bedroom Flat',
      stars: 5,
      text: 'Sadaf renovated our apartment. The kitchen cabinets look great, and the team finished two days ahead of schedule. Very respectful and tidy workers.',
    },
    {
      name: 'Sarah Jenkins',
      location: 'Whitefield • Villa Owner',
      stars: 5,
      text: 'Had our two bathrooms completely remodeled and full villa lighting re-done. The price was clear from day one and they kept the place very clean while working.',
    },
    {
      name: 'Rahul Mehta',
      location: 'Indiranagar • Apartment',
      stars: 5,
      text: 'The best part was communication. I received WhatsApp photos every evening showing the progress while I was in the office. Great experience with zero stress.',
    },
    {
      name: 'Priya Nataraj',
      location: 'HSR Layout • Villa Owner',
      stars: 5,
      text: 'They installed CCTV cameras across our whole villa and rewired the garden lighting. Professional team, fair pricing and everything was explained clearly upfront.',
    },
    {
      name: 'James Carter',
      location: 'Sarjapur Road • Apartment',
      stars: 5,
      text: 'Custom wardrobes and a full carpentry overhaul for our bedroom. The finish quality is excellent and they were done a day earlier than promised.',
    },
    {
      name: 'Lakshmi Iyer',
      location: 'JP Nagar • Villa Owner',
      stars: 5,
      text: 'Full villa renovation from civil work to painting. They handled everything, kept us updated daily and the site was always clean when we visited.',
    },
    {
      name: 'Vikram Nair',
      location: 'MG Road • Apartment',
      stars: 5,
      text: 'Quick and reliable handyman service for a few electrical and plumbing fixes. Showed up on time and the pricing was exactly what was quoted.',
    },
  ];

  const scrollReviews = (direction) => {
    const track = reviewTrackRef.current;
    if (!track) return;
    const firstItem = track.firstElementChild;
    const step = (firstItem ? firstItem.offsetWidth : 300) + 24;
    const max = track.scrollWidth - track.clientWidth;
    let next = track.scrollLeft + step * direction;

    if (next > max) next = max;
    if (next < 0) next = 0;

    track.scrollTo({ left: next, behavior: 'smooth' });
  };

  const faqs = [
    {
      q: 'Do you charge for the initial home visit or quotation?',
      a: 'No, our on-site inspection and quote are completely free with no obligation. We visit your home, discuss your requirements, take measurements, and send you an honest written estimate.',
    },
    {
      q: 'How long does a bathroom or kitchen renovation usually take?',
      a: 'A single bathroom or kitchen remodel usually takes 7 to 12 working days. A full 2-3 bedroom flat renovation typically takes 3 to 4 weeks depending on the exact scope.',
    },
    {
      q: 'Can we live in our home while the renovation is going on?',
      a: 'Yes! For partial renovations like a bathroom remodel or custom carpentry, you can comfortably stay at home. We seal off the work zone with heavy plastic zip-walls so dust does not enter your bedrooms or living room.',
    },
    {
      q: 'Do you help with developer NOCs and permits (Emaar, Nakheel, Damac)?',
      a: 'Yes, we handle the contractor documentation needed for developer permits. We provide trade licenses, third-party insurance, and scope-of-work papers for quick approval.',
    },
    {
      q: 'Do you clean up properly after the job is finished?',
      a: 'Yes, absolutely. We clean up at the end of every working day and conduct a thorough deep clean before handing back your keys so your home is ready to enjoy immediately.',
    },
    {
      q: 'How do payments work?',
      a: 'We divide payments into clear milestones tied to project stages (advance for materials, progress payment during work, and final balance after your inspection and satisfaction).',
    },
  ];

  return (
    <>
      <Header />
      <main className="bg-white text-[#111827] overflow-x-hidden">
        {/* ================= HERO SECTION (CLEAN & MOBILE RESPONSIVE) ================= */}
        <section className="relative pt-8 pb-12 sm:pt-12 sm:pb-16 lg:pt-16 lg:pb-24 bg-gradient-to-b from-[#f5f8fc] via-[#f8fafc] to-white border-b border-[#e5e9f0]">
          {/* Subtle decorative background blur */}
          <div className="absolute top-0 right-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-[#0a6fdb]/5 rounded-full blur-3xl pointer-events-none" />

          <div className="container-custom relative z-10">

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left text */}
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-[#e8f1fc] text-[#0a6fdb] text-[11px] sm:text-[12px] font-bold tracking-wider uppercase mb-4 sm:mb-5 border border-[#bfdbfe]">
                  <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#0a6fdb]" />
                  Trusted Bengaluru Renovation Team
                </div>

                <h1 className="h2-title text-[28px] sm:text-[38px] md:text-[44px] lg:text-[52px] leading-[1.18] sm:leading-[1.15] text-[#111827] mb-4 sm:mb-6 font-extrabold break-words">
                  We Make Home Renovations <br className="hidden sm:block" />
                  <span className="text-[#0a6fdb]">Simple, Clean &amp; Stress-Free</span>
                </h1>

                <div className="lg:hidden flex justify-center items-center mb-6">
                  <div className="relative w-full max-w-[420px]">
                    <img
                      src="/about-us-image.webp"
                      alt="Sadaf Renovation Specialists"
                      className="w-full h-auto object-contain select-none pointer-events-none rounded-2xl"
                    />
                  </div>
                </div>

                <p className="text-[#4b5563] text-[15px] sm:text-[16.5px] leading-[1.65] max-w-[600px] mb-6 sm:mb-8">
                  Since 2019, Sadaf has helped hundreds of homeowners in Bengaluru transform their living spaces. With our own in-house team of plumbers, electricians, carpenters, and tilers, we deliver beautiful work on time and at fair, honest prices.
                </p>

                {/* Quick Check Highlights */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 mb-6 sm:mb-8">
                  <div className="flex items-center gap-2.5 text-[13.5px] sm:text-[14px] font-semibold text-[#1f2937]">
                    <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#ecfdf5] text-[#059669] flex items-center justify-center shrink-0">
                      <IconCheck className="w-3 h-3 stroke-[3]" />
                    </div>
                    No surprise costs or hidden extras
                  </div>
                  <div className="flex items-center gap-2.5 text-[13.5px] sm:text-[14px] font-semibold text-[#1f2937]">
                    <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#ecfdf5] text-[#059669] flex items-center justify-center shrink-0">
                      <IconCheck className="w-3 h-3 stroke-[3]" />
                    </div>
                    Daily photo updates on WhatsApp
                  </div>
                  <div className="flex items-center gap-2.5 text-[13.5px] sm:text-[14px] font-semibold text-[#1f2937]">
                    <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#ecfdf5] text-[#059669] flex items-center justify-center shrink-0">
                      <IconCheck className="w-3 h-3 stroke-[3]" />
                    </div>
                    Clean, dust-controlled workspace
                  </div>
                  <div className="flex items-center gap-2.5 text-[13.5px] sm:text-[14px] font-semibold text-[#1f2937]">
                    <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#ecfdf5] text-[#059669] flex items-center justify-center shrink-0">
                      <IconCheck className="w-3 h-3 stroke-[3]" />
                    </div>
                    1-year warranty on all workmanship
                  </div>
                </div>

                <div className="flex flex-row gap-2 sm:gap-4">
                  <Link
                    href="/#contact"
                    className="btn btn-primary flex-1 min-w-0 sm:flex-none sm:w-auto sm:min-w-[170px] shadow-md shadow-[#0a6fdb]/20 !py-3 sm:!py-3.5 !px-2.5 sm:!px-6 !text-[12.5px] sm:!text-[14px] !gap-1.5 text-center justify-center"
                  >
                    Get a Free Quote
                  </Link>
                  <Link
                    href="/services"
                    className="btn btn-outline flex-1 min-w-0 sm:flex-none sm:w-auto sm:min-w-[170px] !py-3 sm:!py-3.5 !px-2.5 sm:!px-6 !text-[12.5px] sm:!text-[14px] !gap-1.5 text-center justify-center"
                  >
                    View Our Services
                  </Link>
                </div>
              </div>

              {/* Right Image Visual (desktop only — mobile shows a simpler image inline above) */}
              <div className="hidden lg:block lg:col-span-5">
                <div className="relative">
                  {/* Outer border decoration */}
                  <div className="rounded-2xl overflow-hidden shadow-xl border-2 sm:border-4 border-white bg-white">
                    <img
                      src="/about-us-image.webp"
                      alt="Sadaf Renovation Specialists"
                      className="w-full h-auto object-cover max-h-[360px] sm:max-h-none"
                    />
                    <div className="p-4 sm:p-5 bg-white border-t border-[#f1f5f9] grid grid-cols-2 divide-x divide-[#f1f5f9] text-center">
                      <div className="pr-3 sm:pr-4">
                        <strong className="block text-[20px] sm:text-[24px] font-extrabold text-[#0a6fdb] leading-none mb-1">5+ Years</strong>
                        <span className="text-[12px] sm:text-[12.5px] text-[#64748b] font-medium">Serving Bengaluru Homes</span>
                      </div>
                      <div className="pl-3 sm:pl-4">
                        <strong className="block text-[20px] sm:text-[24px] font-extrabold text-[#111827] leading-none mb-1">100+</strong>
                        <span className="text-[12px] sm:text-[12.5px] text-[#64748b] font-medium">Delighted Families</span>
                      </div>
                    </div>
                  </div>

                  {/* Trust badge - cleanly positioned on mobile without overflow */}
                  <div className="mt-3 sm:mt-0 sm:absolute sm:-bottom-5 sm:-left-4 bg-[#141d2b] text-white py-2.5 px-3.5 sm:py-3 sm:px-4 rounded-xl shadow-lg flex items-center gap-3 border border-white/10 w-full sm:w-auto">
                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-[#0a6fdb] text-white flex items-center justify-center font-bold shrink-0">
                      <IconShield className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <div>
                      <div className="text-[10px] sm:text-[11px] uppercase tracking-wider text-[#94a3b8] font-semibold">Guaranteed</div>
                      <div className="text-[12.5px] sm:text-[13px] font-bold text-white">Full On-Time Handover</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= 4 NUMBER STATS STRIP ================= */}
        <section className="py-8 sm:py-12 bg-white border-b border-[#e5e9f0]">
          <div className="container-custom grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 text-center">
            <div className="p-2">
              <div className="text-[28px] sm:text-[34px] md:text-[38px] font-black text-[#0a6fdb] leading-none mb-1">100+</div>
              <div className="text-[13px] sm:text-[14px] font-bold text-[#111827] mb-0.5">Projects Done</div>
              <span className="text-[11.5px] sm:text-[12.5px] text-[#64748b]">Flats &amp; villas</span>
            </div>
            <div className="p-2">
              <div className="text-[28px] sm:text-[34px] md:text-[38px] font-black text-[#0a6fdb] leading-none mb-1">5+</div>
              <div className="text-[13px] sm:text-[14px] font-bold text-[#111827] mb-0.5">Years Experience</div>
              <span className="text-[11.5px] sm:text-[12.5px] text-[#64748b]">In Bengaluru &amp; Karnataka</span>
            </div>
            <div className="p-2">
              <div className="text-[28px] sm:text-[34px] md:text-[38px] font-black text-[#0a6fdb] leading-none mb-1">100%</div>
              <div className="text-[13px] sm:text-[14px] font-bold text-[#111827] mb-0.5">In-House Staff</div>
              <span className="text-[11.5px] sm:text-[12.5px] text-[#64748b]">No subcontractors</span>
            </div>
            <div className="p-2">
              <div className="text-[28px] sm:text-[34px] md:text-[38px] font-black text-[#0a6fdb] leading-none mb-1">0</div>
              <div className="text-[13px] sm:text-[14px] font-bold text-[#111827] mb-0.5">Hidden Fees</div>
              <span className="text-[11.5px] sm:text-[12.5px] text-[#64748b]">Fixed estimates</span>
            </div>
          </div>
        </section>

        {/* ================= OUR STORY ================= */}
        <section className="section-padding bg-[#f8fafc]">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Column Story */}
              <div className="lg:col-span-6">
                <div className="eyebrow">OUR STORY</div>
                <h2 className="h2-title text-[26px] sm:text-[32px] md:text-[38px] text-[#111827] mb-4 sm:mb-5 leading-snug">
                  Started With a Very Simple Mission: <br />
                  <span className="text-[#0a6fdb]">Treat Every Home Like Our Own</span>
                </h2>
                <div className="space-y-3.5 text-[#4b5563] text-[14.5px] sm:text-[15px] leading-relaxed">
                  <p>
                    Renovating your home should feel rewarding, but too often in Bengaluru it becomes a frustrating experience with missed deadlines, shifting prices, and workers who don't clean up after themselves.
                  </p>
                  <p>
                    We started Sadaf Constructions to offer a better way. We believe in turning up on time, protecting your floors, giving you a fixed price before starting, and taking genuine pride in every tile we lay and every cabinet we build.
                  </p>
                  <p>
                    Because we employ our own full-time electricians, plumbers, carpenters, and painters, you don’t have to juggle multiple strangers. You get one accountable team, clear communication, and guaranteed quality.
                  </p>
                </div>
              </div>

              {/* Right Column Highlights Card */}
              <div className="lg:col-span-6 bg-white p-5 sm:p-7 md:p-8 rounded-2xl border border-[#e2e8f0] shadow-sm">
                <h3 className="text-[18px] sm:text-[20px] font-bold text-[#111827] mb-5 flex items-center gap-2.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#0a6fdb]" />
                  What You Can Always Count On
                </h3>

                <div className="space-y-4 sm:space-y-5">
                  <div className="flex gap-3 sm:gap-4">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-[#e8f1fc] text-[#0a6fdb] flex items-center justify-center shrink-0 font-bold text-[14px] sm:text-[16px]">
                      1
                    </div>
                    <div>
                      <h4 className="text-[15px] sm:text-[16px] font-bold text-[#111827] mb-1">Fixed Price Before We Start</h4>
                      <p className="text-[13.5px] sm:text-[14px] text-[#64748b] leading-relaxed">
                        You get an itemized quotation listing all materials and labor. You never get hit with surprise add-ons.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3 sm:gap-4">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-[#e8f1fc] text-[#0a6fdb] flex items-center justify-center shrink-0 font-bold text-[14px] sm:text-[16px]">
                      2
                    </div>
                    <div>
                      <h4 className="text-[15px] sm:text-[16px] font-bold text-[#111827] mb-1">Daily Photo Updates</h4>
                      <p className="text-[13.5px] sm:text-[14px] text-[#64748b] leading-relaxed">
                        We send photos and short videos on WhatsApp every evening, so you can track progress right from your phone.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3 sm:gap-4">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-[#e8f1fc] text-[#0a6fdb] flex items-center justify-center shrink-0 font-bold text-[14px] sm:text-[16px]">
                      3
                    </div>
                    <div>
                      <h4 className="text-[15px] sm:text-[16px] font-bold text-[#111827] mb-1">Clean &amp; Protected Floors</h4>
                      <p className="text-[13.5px] sm:text-[14px] text-[#64748b] leading-relaxed">
                        We lay protective floor covers and seal doorways so construction dust stays contained.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3 sm:gap-4">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-[#e8f1fc] text-[#0a6fdb] flex items-center justify-center shrink-0 font-bold text-[14px] sm:text-[16px]">
                      4
                    </div>
                    <div>
                      <h4 className="text-[15px] sm:text-[16px] font-bold text-[#111827] mb-1">Prompt Post-Job Warranty</h4>
                      <p className="text-[13.5px] sm:text-[14px] text-[#64748b] leading-relaxed">
                        Our relationship doesn't end at handover. If anything needs adjustment, we return promptly to fix it.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= INTERACTIVE TABS: OUR 4 PROMISES ================= */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center max-w-[700px] mx-auto mb-8 sm:mb-12">
              <div className="eyebrow">OUR COMMITMENT</div>
              <h2 className="h2-title text-[26px] sm:text-[32px] md:text-[38px] mb-3">How We Protect Your Peace of Mind</h2>
              <p className="text-[#4b5563] text-[14.5px] sm:text-[15.5px]">
                Click each promise below to see how we guarantee a smooth, hassle-free renovation.
              </p>
            </div>

            {/* Tab Buttons - Mobile scrollable or wrap cleanly */}
            <div className="flex justify-start sm:justify-center gap-2 sm:gap-2.5 overflow-x-auto pb-3 sm:pb-0 sm:flex-wrap mb-6 sm:mb-10 -mx-4 px-4 sm:mx-0 sm:px-0">
              {promises.map((p, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTab(idx)}
                  className={`px-4 py-2.5 sm:px-6 sm:py-3 rounded-xl text-[13px] sm:text-[14px] font-bold transition-all duration-200 border whitespace-nowrap shrink-0 ${
                    activeTab === idx
                      ? 'bg-[#0a6fdb] text-white border-[#0a6fdb] shadow-md shadow-[#0a6fdb]/25'
                      : 'bg-[#f8fafc] text-[#4b5563] border-[#e2e8f0] hover:bg-[#f1f5f9] hover:text-[#111827]'
                  }`}
                >
                  {p.title}
                </button>
              ))}
            </div>

            {/* Active Tab Content Card */}
            <div className="max-w-[840px] mx-auto bg-gradient-to-br from-[#f8fafc] to-white p-5 sm:p-8 md:p-12 rounded-2xl border border-[#e2e8f0] shadow-sm">
              <div className="text-[11px] sm:text-[12px] uppercase tracking-wider text-[#0a6fdb] font-bold mb-1">
                {promises[activeTab].subtitle}
              </div>
              <h3 className="text-[20px] sm:text-[24px] md:text-[28px] font-extrabold text-[#111827] mb-3 sm:mb-4">
                {promises[activeTab].title}
              </h3>
              <p className="text-[#4b5563] text-[14.5px] sm:text-[16px] leading-relaxed mb-6">
                {promises[activeTab].desc}
              </p>

              <div className="border-t border-[#e2e8f0] pt-5 sm:pt-6 space-y-2.5 sm:space-y-3">
                {promises[activeTab].points.map((pt, pIdx) => (
                  <div key={pIdx} className="flex items-start sm:items-center gap-2.5 sm:gap-3 text-[13.5px] sm:text-[14.5px] font-semibold text-[#1e293b]">
                    <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#e8f1fc] text-[#0a6fdb] flex items-center justify-center shrink-0 mt-0.5 sm:mt-0">
                      <IconCheck className="w-3 h-3 stroke-[3]" />
                    </div>
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ================= IN-HOUSE TEAM DISCIPLINES ================= */}
        <section className="section-padding bg-[#f8fafc]">
          <div className="container-custom">
            <div className="text-center max-w-[700px] mx-auto mb-10 sm:mb-14">
              <div className="eyebrow">OUR SPECIALISTS</div>
              <h2 className="h2-title text-[26px] sm:text-[32px] md:text-[38px] mb-3">Your Dedicated In-House Team</h2>
              <p className="text-[#4b5563] text-[14.5px] sm:text-[15.5px]">
                No subcontractors. Our experienced in-house crew handles all carpentry, MEP, and finishing under one roof.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {teamRoles.map((member, idx) => (
                <div
                  key={idx}
                  className="bg-white p-5 sm:p-7 rounded-2xl border border-[#e2e8f0] shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3 sm:mb-4">
                      <span className="px-2.5 py-1 rounded-md bg-[#e8f1fc] text-[#0a6fdb] text-[11px] sm:text-[11.5px] font-bold">
                        {member.exp}
                      </span>
                    </div>
                    <h3 className="text-[17px] sm:text-[18px] font-bold text-[#111827] mb-2">{member.role}</h3>
                    <p className="text-[#64748b] text-[13.5px] sm:text-[14px] leading-relaxed mb-4">{member.desc}</p>
                  </div>
                  <div className="text-[11.5px] sm:text-[12px] uppercase tracking-wider font-semibold text-[#0a6fdb] border-t border-[#f1f5f9] pt-3">
                    {member.tag}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= TIMELINE & SCOPE GUIDE ================= */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center max-w-[720px] mx-auto mb-10 sm:mb-14">
              <div className="eyebrow">PROJECT TIMELINES</div>
              <h2 className="h2-title text-[26px] sm:text-[32px] md:text-[38px] mb-3">Typical Time Required for Bengaluru Homes</h2>
              <p className="text-[#4b5563] text-[14.5px] sm:text-[15.5px]">
                We give you a realistic schedule before we begin and stick to it strictly.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {timelineGuide.map((item, idx) => (
                <div
                  key={idx}
                  className="p-5 sm:p-7 rounded-2xl bg-[#f8fafc] border border-[#e2e8f0] flex flex-col justify-between"
                >
                  <div>
                    <div className="text-[12px] sm:text-[13px] font-bold uppercase tracking-wider text-[#0a6fdb] mb-1">
                      Estimated Duration
                    </div>
                    <div className="text-[22px] sm:text-[26px] font-extrabold text-[#111827] mb-2 sm:mb-3">
                      {item.time}
                    </div>
                    <h3 className="text-[16px] sm:text-[17px] font-bold text-[#1e293b] mb-2">
                      {item.type}
                    </h3>
                    <p className="text-[#64748b] text-[13px] sm:text-[13.5px] leading-relaxed">
                      {item.includes}
                    </p>
                  </div>
                  <div className="mt-5 sm:mt-6 pt-4 border-t border-[#e2e8f0]">
                    <Link href="/#contact" className="text-[13px] font-bold text-[#0a6fdb] hover:underline">
                      Get quote for this
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= REAL CLIENT REVIEWS ================= */}
        <section className="section-padding bg-[#f8fafc]">
          <div className="container-custom">
            <div className="text-center max-w-[700px] mx-auto mb-10 sm:mb-12">
              <div className="eyebrow">REAL REVIEWS</div>
              <h2 className="h2-title text-[26px] sm:text-[32px] md:text-[38px] mb-3">What Homeowners Say About Us</h2>
              <p className="text-[#4b5563] text-[14.5px] sm:text-[15px]">
                Honest feedback from residents and landlords across Bengaluru communities.
              </p>
            </div>

            {/* Swipeable review track — 3 per row on desktop, 2 on tablet, 1 on mobile */}
            <div className="review-track" ref={reviewTrackRef}>
              {clientReviews.map((rev, idx) => (
                <div key={idx} className="review-item">
                  <div className="bg-white p-5 sm:p-7 rounded-2xl border border-[#e2e8f0] shadow-sm flex flex-col justify-between h-full">
                    <div>
                      <div className="flex gap-1 text-[#fbbf24] mb-3.5">
                        {[...Array(rev.stars)].map((_, i) => (
                          <IconStar key={i} className="w-4 h-4" />
                        ))}
                      </div>
                      <p className="text-[#4b5563] text-[14px] sm:text-[14.5px] leading-relaxed mb-5 italic">
                        "{rev.text}"
                      </p>
                    </div>
                    <div className="border-t border-[#f1f5f9] pt-3.5">
                      <strong className="block text-[15px] font-bold text-[#111827]">{rev.name}</strong>
                      <span className="text-[12.5px] sm:text-[13px] text-[#64748b]">{rev.location}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-center gap-3 mt-8">
              <button
                className="w-11 h-11 rounded-full border-[1.5px] border-[#dbe3ee] bg-white text-[#111827] flex items-center justify-center shrink-0 transition-colors duration-200 hover:bg-[#0a6fdb] hover:text-white hover:border-[#0a6fdb]"
                onClick={() => scrollReviews(-1)}
                aria-label="Previous reviews"
              >
                <IconLeft className="w-4 h-4" />
              </button>
              <button
                className="w-11 h-11 rounded-full border-[1.5px] border-[#dbe3ee] bg-white text-[#111827] flex items-center justify-center shrink-0 transition-colors duration-200 hover:bg-[#0a6fdb] hover:text-white hover:border-[#0a6fdb]"
                onClick={() => scrollReviews(1)}
                aria-label="Next reviews"
              >
                <IconRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </section>

        {/* ================= FAQ SECTION (2-COLUMN BALANCED & COMPACT) ================= */}
        <section className="section-padding bg-gradient-to-b from-white to-[#f8fafc] border-t border-[#e5e9f0]">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
              {/* Left Column: Title + Direct Help Card */}
              <div className="lg:col-span-5 lg:sticky lg:top-28">
                <div className="eyebrow">FREQUENTLY ASKED QUESTIONS</div>
                <h2 className="h2-title text-[26px] sm:text-[32px] md:text-[36px] text-[#111827] mb-3 sm:mb-4 leading-tight">
                  Got Questions? <br className="hidden sm:block" />
                  <span className="text-[#0a6fdb]">We Have Honest Answers.</span>
                </h2>
                <p className="text-[#4b5563] text-[14.5px] sm:text-[15px] leading-relaxed mb-6">
                  Here are common questions homeowners ask before hiring us. We believe in 100% transparency and clear communication from day one.
                </p>

                {/* Direct Contact Box */}
                <div className="p-5 sm:p-6 rounded-2xl bg-[#f0f6ff] border border-[#bfdbfe] space-y-3 shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#0a6fdb] text-white flex items-center justify-center shrink-0 shadow-sm">
                      <IconPhone className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <div>
                      <h4 className="text-[14.5px] sm:text-[15px] font-bold text-[#111827]">Have a specific question?</h4>
                      <p className="text-[12.5px] sm:text-[13px] text-[#64748b]">Speak directly with our team.</p>
                    </div>
                  </div>
                  <p className="text-[13px] sm:text-[13.5px] text-[#4b5563] leading-relaxed">
                    We are available 7 days a week on phone or WhatsApp for quick advice, pricing estimates, and site visit bookings.
                  </p>
                  <div className="pt-2 flex flex-col sm:flex-row gap-2.5">
                    <a
                      href="tel:+919900281433"
                      className="btn btn-primary text-[13px] py-2.5 px-4 rounded-lg w-full sm:w-auto text-center justify-center"
                    >
                      Call +91 99002 81433
                    </a>
                    <Link
                      href="/#contact"
                      className="btn btn-outline text-[13px] py-2.5 px-4 rounded-lg bg-white w-full sm:w-auto text-center justify-center"
                    >
                      Book Free Visit
                    </Link>
                  </div>
                </div>
              </div>

              {/* Right Column: Compact, Neatly Sized Accordion Cards */}
              <div className="lg:col-span-7 space-y-3 sm:space-y-3.5">
                {faqs.map((faq, idx) => {
                  const isOpen = openFaq === idx;
                  return (
                    <div
                      key={idx}
                      className={`rounded-xl border transition-all duration-200 overflow-hidden bg-white ${
                        isOpen
                          ? 'border-[#0a6fdb] shadow-md shadow-[#0a6fdb]/5'
                          : 'border-[#e2e8f0] hover:border-[#cbd5e1]'
                      }`}
                    >
                      <button
                        onClick={() => toggleFaq(idx)}
                        className="w-full text-left p-4 sm:p-5 font-bold text-[14.5px] sm:text-[15.5px] text-[#111827] flex justify-between items-center gap-3 group"
                      >
                        <span className="group-hover:text-[#0a6fdb] transition-colors leading-snug">
                          {faq.q}
                        </span>
                        <div
                          className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-200 ${
                            isOpen
                              ? 'bg-[#0a6fdb] text-white rotate-45'
                              : 'bg-[#f1f5f9] text-[#64748b] group-hover:bg-[#e8f1fc] group-hover:text-[#0a6fdb]'
                          }`}
                        >
                          <span className="text-[17px] sm:text-[18px] leading-none font-bold">+</span>
                        </div>
                      </button>
                      {isOpen && (
                        <div className="px-4 pb-4 sm:px-5 sm:pb-5 text-[#4b5563] text-[13.5px] sm:text-[14px] leading-relaxed border-t border-[#f1f5f9] pt-3 sm:pt-3.5">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* ================= LIGHT-THEMED HIGH CONVERTING CTA (MOBILE OPTIMIZED) ================= */}
        <section className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-[#0a1525] via-[#0c1b2f] to-[#0a6fdb] text-white overflow-hidden">
          <div className="absolute -top-24 -left-24 w-72 h-72 bg-[#0a6fdb]/40 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-28 -right-20 w-80 h-80 bg-[#38bdf8]/25 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute inset-0 opacity-[0.06] pointer-events-none bg-[radial-gradient(white_1px,transparent_1px)] [background-size:26px_26px]" />

          <div className="container-custom relative z-10 text-center max-w-[720px]">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white text-[11px] sm:text-[12px] font-bold tracking-wider uppercase mb-5 border border-white/20">
              <span className="w-2 h-2 rounded-full bg-[#38bdf8] animate-pulse" />
              FREE ON-SITE VISIT ACROSS DUBAI
            </div>
            <h2 className="text-[28px] sm:text-[36px] lg:text-[44px] font-extrabold mb-4 text-white leading-tight">
              Ready to Discuss Your Home?
            </h2>
            <p className="text-white/80 text-[15px] sm:text-[16.5px] leading-relaxed mb-8 sm:mb-10 max-w-[580px] mx-auto">
              We are happy to visit your place, listen to what you want done, and give you an honest written quote. No pushy sales calls, just helpful advice.
            </p>
            <div className="flex flex-row gap-2 sm:gap-4 justify-center">
              <Link
                href="/#contact"
                className="btn bg-white text-[#0a6fdb] hover:bg-[#f8fafc] font-bold flex-1 min-w-0 sm:flex-none sm:w-auto !px-2.5 sm:!px-8 !py-3 sm:!py-3.5 !text-[12.5px] sm:!text-[15px] rounded-full shadow-xl hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-300 text-center justify-center"
              >
                Get a Free Quote
              </Link>
              <a
                href="tel:+919900281433"
                className="btn border-2 border-white/70 text-white hover:bg-white hover:text-[#0a6fdb] font-bold flex-1 min-w-0 sm:flex-none sm:w-auto !px-2.5 sm:!px-8 !py-3 sm:!py-3.5 !text-[12.5px] sm:!text-[15px] !gap-1.5 rounded-full hover:-translate-y-0.5 transition-all duration-300 text-center justify-center inline-flex items-center"
              >
                <IconPhone className="w-4 h-4 shrink-0" />
                Call
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
