'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import BackToTop from '../../components/BackToTop';
import {
  IconCheck,
  IconShield,
  IconClock,
  IconTeam,
  IconPhone,
  IconWhatsapp,
} from '../../components/Icons';
import { servicesList } from '../../components/servicesData';
import ServiceCard from '../../components/ServiceCard';

const services = servicesList;

export default function ServicesContent() {
  const [activeTab, setActiveTab] = useState('all');
  const [openFaq, setOpenFaq] = useState(null);

  const filteredServices =
    activeTab === 'all'
      ? services
      : services.filter((s) => s.category === activeTab);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const serviceFaqs = [
    {
      q: 'Can I combine multiple services like electrical, plumbing, and painting?',
      a: 'Yes! Combining multiple services into one project is our specialty. Having our own full-time team means one single supervisor coordinates everything smoothly with no scheduling delays.',
    },
    {
      q: 'Do you charge for checking the work or giving a quote?',
      a: 'No, our on-site inspection and quote are 100% free with no obligation. We come to your home, check what needs doing, take measurements, and give you an honest written estimate.',
    },
    {
      q: 'Do you provide the materials or do I buy them?',
      a: 'You have complete freedom. You can pick your own designer tiles, faucets, and light fixtures while we supply all technical building materials (cables, pipes, cement, glue). Or we can handle full turnkey procurement for you.',
    },
    {
      q: 'How do you keep dust from spreading to other rooms?',
      a: 'We take cleanliness very seriously. On day one, we lay heavy floor protection sheets and seal off work areas with plastic zip-walls. We also clean up at the end of every single working day.',
    },
    {
      q: 'What warranty is included with your services?',
      a: 'All our installations, plumbing, electrical, and carpentry works come with a dedicated 1-year workmanship warranty. If any issue arises, our maintenance team returns to fix it promptly for free.',
    },
  ];

  return (
    <>
      <Header />
      <main className="bg-white text-[#111827] overflow-x-hidden">
        {/* ================= LIGHT HERO HEADER ================= */}
        <section className="relative pt-10 pb-12 sm:pt-14 sm:pb-16 lg:min-h-[560px] lg:flex lg:items-center bg-gradient-to-b from-[#f5f8fc] via-[#f8fafc] to-white border-b border-[#e5e9f0] overflow-hidden">
          {/* Full-bleed banner image on the right, fading into the background */}
          <div className="hidden lg:flex absolute top-0 right-0 h-full w-[52%] z-[1] items-center justify-end">
            <img
              src="/servicesBanner.png"
              alt="Sadaf Constructions services"
              className="w-full h-auto max-h-full object-contain object-right select-none pointer-events-none [mask-image:linear-gradient(to_right,transparent,black_16%)] [-webkit-mask-image:linear-gradient(to_right,transparent,black_16%)]"
            />
          </div>

          <div className="container-custom relative z-10 w-full">
            <div className="max-w-[820px] lg:max-w-[560px]">
              <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-[#e8f1fc] text-[#0a6fdb] text-[9.5px] sm:text-[11.5px] font-bold tracking-normal sm:tracking-wider uppercase mb-4 border border-[#bfdbfe] whitespace-nowrap max-w-full">
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#0a6fdb] animate-pulse shrink-0" />
                Licensed Bengaluru Renovation &amp; Maintenance Team
              </div>

              <h1 className="h2-title text-[32px] sm:text-[42px] lg:text-[48px] leading-[1.15] text-[#111827] mb-4 font-extrabold">
                Complete Home Services <br />
                <span className="text-[#0a6fdb]">Built With Care, Precision &amp; Trust</span>
              </h1>

              <div className="lg:hidden flex justify-center items-center mb-6">
                <div className="relative w-full max-w-[420px]">
                  <img
                    src="/servicesBanner.png"
                    alt="Sadaf Constructions services"
                    className="w-full h-auto object-contain select-none pointer-events-none rounded-2xl"
                  />
                </div>
              </div>

              <p className="text-[#4b5563] text-[15.5px] sm:text-[16.5px] leading-[1.7] mb-7 max-w-[700px]">
                Whether you need a quick repair or a complete apartment makeover, our full-time in-house team of plumbers, electricians, carpenters, and tilers has you covered across Bengaluru.
              </p>

              {/* Quick Trust Pills */}
              <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 mb-8 text-[12.5px] sm:text-[13px] text-[#334155] font-medium">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white border border-[#e2e8f0] shadow-2xs">
                  <IconCheck className="w-3.5 h-3.5 text-[#059669]" />
                  100% In-House Team
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white border border-[#e2e8f0] shadow-2xs">
                  <IconCheck className="w-3.5 h-3.5 text-[#059669]" />
                  Free On-Site Survey
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white border border-[#e2e8f0] shadow-2xs">
                  <IconCheck className="w-3.5 h-3.5 text-[#059669]" />
                  1-Year Workmanship Warranty
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white border border-[#e2e8f0] shadow-2xs">
                  <IconCheck className="w-3.5 h-3.5 text-[#059669]" />
                  Fixed Written Pricing
                </span>
              </div>

              <div className="flex flex-row gap-2 sm:gap-4">
                <Link
                  href="/contact"
                  className="btn btn-primary flex-1 min-w-0 sm:flex-none sm:w-auto sm:min-w-[170px] shadow-md shadow-[#0a6fdb]/20 !py-3 sm:!py-3.5 !px-2.5 sm:!px-6 !text-[12.5px] sm:!text-[14.5px] !gap-1.5 text-center justify-center font-bold"
                >
                  Book Free Inspection
                </Link>
                <a
                  href="https://wa.me/918618252233?text=Hi%20Sadaf%20Constructions,%20I%20would%20like%20to%20inquire%20about%20your%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn bg-[#25d366] text-white hover:bg-[#20ba59] border-transparent flex-1 min-w-0 sm:flex-none sm:w-auto sm:min-w-[170px] !py-3 sm:!py-3.5 !px-2.5 sm:!px-6 !text-[12.5px] sm:!text-[14.5px] !gap-1.5 shadow-md shadow-[#25d366]/20 text-center justify-center font-bold inline-flex items-center"
                >
                  <IconWhatsapp className="w-4 h-4 shrink-0" />
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ================= SERVICES CATALOG: EXACTLY 3 CARDS PER ROW ON LAPTOP ================= */}
        <section className="section-padding bg-[#f8fafc]" id="all-services">
          <div className="container-custom">
            {/* Section Heading */}
            <div className="text-center max-w-[720px] mx-auto mb-10 sm:mb-12">
              <div className="eyebrow">OUR SERVICE CATALOG</div>
              <h2 className="h2-title text-[28px] sm:text-[36px] text-[#111827] mb-3">
                Everything Your Home Needs, Under One Roof
              </h2>
              <p className="text-[#4b5563] text-[15px]">
                Browse our complete list of services below. Filter by category or explore all 24 services.
              </p>
            </div>

            {/* Filter Tabs - Modern light pill buttons */}
            <div className="flex justify-start sm:justify-center gap-2 sm:gap-2.5 overflow-x-auto scrollbar-hide pb-1 sm:pb-0 sm:flex-wrap mb-10 sm:mb-14 -mx-4 px-4 sm:mx-0 sm:px-0">
              <button
                onClick={() => setActiveTab('all')}
                className={`px-5 py-2.5 rounded-xl text-[13px] sm:text-[13.5px] font-bold transition-all duration-200 border whitespace-nowrap shrink-0 ${
                  activeTab === 'all'
                    ? 'bg-[#0a6fdb] text-white border-[#0a6fdb] shadow-md shadow-[#0a6fdb]/20'
                    : 'bg-white text-[#4b5563] border-[#e2e8f0] hover:bg-[#f1f5f9] hover:text-[#111827]'
                }`}
              >
                All Services (24)
              </button>
              <button
                onClick={() => setActiveTab('renovation')}
                className={`px-5 py-2.5 rounded-xl text-[13px] sm:text-[13.5px] font-bold transition-all duration-200 border whitespace-nowrap shrink-0 ${
                  activeTab === 'renovation'
                    ? 'bg-[#0a6fdb] text-white border-[#0a6fdb] shadow-md shadow-[#0a6fdb]/20'
                    : 'bg-white text-[#4b5563] border-[#e2e8f0] hover:bg-[#f1f5f9] hover:text-[#111827]'
                }`}
              >
                Home Renovations (4)
              </button>
              <button
                onClick={() => setActiveTab('mep')}
                className={`px-5 py-2.5 rounded-xl text-[13px] sm:text-[13.5px] font-bold transition-all duration-200 border whitespace-nowrap shrink-0 ${
                  activeTab === 'mep'
                    ? 'bg-[#0a6fdb] text-white border-[#0a6fdb] shadow-md shadow-[#0a6fdb]/20'
                    : 'bg-white text-[#4b5563] border-[#e2e8f0] hover:bg-[#f1f5f9] hover:text-[#111827]'
                }`}
              >
                Plumbing, Electrical &amp; CCTV (3)
              </button>
              <button
                onClick={() => setActiveTab('woodwork')}
                className={`px-5 py-2.5 rounded-xl text-[13px] sm:text-[13.5px] font-bold transition-all duration-200 border whitespace-nowrap shrink-0 ${
                  activeTab === 'woodwork'
                    ? 'bg-[#0a6fdb] text-white border-[#0a6fdb] shadow-md shadow-[#0a6fdb]/20'
                    : 'bg-white text-[#4b5563] border-[#e2e8f0] hover:bg-[#f1f5f9] hover:text-[#111827]'
                }`}
              >
                Carpentry &amp; Wood Polish (2)
              </button>
              <button
                onClick={() => setActiveTab('civil')}
                className={`px-5 py-2.5 rounded-xl text-[13px] sm:text-[13.5px] font-bold transition-all duration-200 border whitespace-nowrap shrink-0 ${
                  activeTab === 'civil'
                    ? 'bg-[#0a6fdb] text-white border-[#0a6fdb] shadow-md shadow-[#0a6fdb]/20'
                    : 'bg-white text-[#4b5563] border-[#e2e8f0] hover:bg-[#f1f5f9] hover:text-[#111827]'
                }`}
              >
                Civil, Tiling &amp; Ceilings (4)
              </button>
              <button
                onClick={() => setActiveTab('interior')}
                className={`px-5 py-2.5 rounded-xl text-[13px] sm:text-[13.5px] font-bold transition-all duration-200 border whitespace-nowrap shrink-0 ${
                  activeTab === 'interior'
                    ? 'bg-[#0a6fdb] text-white border-[#0a6fdb] shadow-md shadow-[#0a6fdb]/20'
                    : 'bg-white text-[#4b5563] border-[#e2e8f0] hover:bg-[#f1f5f9] hover:text-[#111827]'
                }`}
              >
                Interior &amp; Decor (3)
              </button>
              <button
                onClick={() => setActiveTab('painting')}
                className={`px-5 py-2.5 rounded-xl text-[13px] sm:text-[13.5px] font-bold transition-all duration-200 border whitespace-nowrap shrink-0 ${
                  activeTab === 'painting'
                    ? 'bg-[#0a6fdb] text-white border-[#0a6fdb] shadow-md shadow-[#0a6fdb]/20'
                    : 'bg-white text-[#4b5563] border-[#e2e8f0] hover:bg-[#f1f5f9] hover:text-[#111827]'
                }`}
              >
                Painting &amp; Textures (2)
              </button>
              <button
                onClick={() => setActiveTab('windows')}
                className={`px-5 py-2.5 rounded-xl text-[13px] sm:text-[13.5px] font-bold transition-all duration-200 border whitespace-nowrap shrink-0 ${
                  activeTab === 'windows'
                    ? 'bg-[#0a6fdb] text-white border-[#0a6fdb] shadow-md shadow-[#0a6fdb]/20'
                    : 'bg-white text-[#4b5563] border-[#e2e8f0] hover:bg-[#f1f5f9] hover:text-[#111827]'
                }`}
              >
                Windows &amp; Glass (3)
              </button>
              <button
                onClick={() => setActiveTab('maintenance')}
                className={`px-5 py-2.5 rounded-xl text-[13px] sm:text-[13.5px] font-bold transition-all duration-200 border whitespace-nowrap shrink-0 ${
                  activeTab === 'maintenance'
                    ? 'bg-[#0a6fdb] text-white border-[#0a6fdb] shadow-md shadow-[#0a6fdb]/20'
                    : 'bg-white text-[#4b5563] border-[#e2e8f0] hover:bg-[#f1f5f9] hover:text-[#111827]'
                }`}
              >
                Polishing &amp; Cleaning (2)
              </button>
              <button
                onClick={() => setActiveTab('fabrication')}
                className={`px-5 py-2.5 rounded-xl text-[13px] sm:text-[13.5px] font-bold transition-all duration-200 border whitespace-nowrap shrink-0 ${
                  activeTab === 'fabrication'
                    ? 'bg-[#0a6fdb] text-white border-[#0a6fdb] shadow-md shadow-[#0a6fdb]/20'
                    : 'bg-white text-[#4b5563] border-[#e2e8f0] hover:bg-[#f1f5f9] hover:text-[#111827]'
                }`}
              >
                Fabrication &amp; Gates (1)
              </button>
            </div>

            {/* ================= 2 PER ROW ON PHONE, 4 PER ROW ON LAPTOP & DESKTOP ================= */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-6">
              {filteredServices.map((service, index) => (
                <ServiceCard key={service.id} service={service} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* ================= 4 SIMPLE STEPS WORKFLOW ================= */}
        <section className="py-14 sm:py-20 bg-white border-y border-[#e5e9f0]">
          <div className="container-custom">
            <div className="text-center max-w-[700px] mx-auto mb-12 sm:mb-14">
              <div className="eyebrow">HOW WE WORK</div>
              <h2 className="h2-title text-[26px] sm:text-[34px] text-[#111827] mb-3">
                Simple, Fast &amp; Transparent
              </h2>
              <p className="text-[#4b5563] text-[15px]">
                From your first phone call to final handover, here is what you can expect from us.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
              <div className="p-6 rounded-2xl bg-[#f8fafc] border border-[#e2e8f0] relative">
                <div className="w-10 h-10 rounded-xl bg-[#0a6fdb] text-white flex items-center justify-center font-extrabold text-[15px] mb-4 shadow-sm">
                  1
                </div>
                <h3 className="text-[17px] font-bold text-[#111827] mb-2">Free On-Site Visit</h3>
                <p className="text-[#4b5563] text-[13.5px] leading-relaxed">
                  Our supervisor visits your home, inspects the site, takes accurate measurements, and listens to your requirements.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#f8fafc] border border-[#e2e8f0] relative">
                <div className="w-10 h-10 rounded-xl bg-[#0a6fdb] text-white flex items-center justify-center font-extrabold text-[15px] mb-4 shadow-sm">
                  2
                </div>
                <h3 className="text-[17px] font-bold text-[#111827] mb-2">Clear Written Quote</h3>
                <p className="text-[#4b5563] text-[13.5px] leading-relaxed">
                  You receive an itemized quote with materials, scope, timeline, and fixed prices. Zero surprise additions later.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#f8fafc] border border-[#e2e8f0] relative">
                <div className="w-10 h-10 rounded-xl bg-[#0a6fdb] text-white flex items-center justify-center font-extrabold text-[15px] mb-4 shadow-sm">
                  3
                </div>
                <h3 className="text-[17px] font-bold text-[#111827] mb-2">Clean Execution</h3>
                <p className="text-[#4b5563] text-[13.5px] leading-relaxed">
                  We protect your floors with sheets, control dust, and our full-time crew completes the work neatly on schedule.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#f8fafc] border border-[#e2e8f0] relative">
                <div className="w-10 h-10 rounded-xl bg-[#0a6fdb] text-white flex items-center justify-center font-extrabold text-[15px] mb-4 shadow-sm">
                  4
                </div>
                <h3 className="text-[17px] font-bold text-[#111827] mb-2">Signoff &amp; 1-Yr Warranty</h3>
                <p className="text-[#4b5563] text-[13.5px] leading-relaxed">
                  We walk through the completed work together. You get our full 1-year guarantee on all installations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ================= 3 PROMISES STRIP (LIGHT THEME) ================= */}
        <section className="section-padding bg-[#f8fafc]">
          <div className="container-custom">
            <div className="text-center max-w-[700px] mx-auto mb-12">
              <div className="eyebrow">THE SADAF SERVICE PROMISE</div>
              <h2 className="h2-title text-[26px] sm:text-[34px] text-[#111827] mb-3">
                Why Bengaluru Homeowners Trust Us
              </h2>
              <p className="text-[#4b5563] text-[15px]">
                We make sure your home is respected, protected, and upgraded with total peace of mind.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              <div className="p-7 rounded-2xl bg-white border border-[#e2e8f0] shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-[#e8f1fc] text-[#0a6fdb] flex items-center justify-center mb-5 font-bold">
                  <IconShield className="w-6 h-6" />
                </div>
                <h3 className="text-[18px] font-bold text-[#111827] mb-2">1-Year Workmanship Warranty</h3>
                <p className="text-[#4b5563] text-[14px] leading-relaxed">
                  We stand by every pipe, wire, cabinet, and tile we install. If anything gives you trouble later, we return promptly to fix it at zero cost.
                </p>
              </div>

              <div className="p-7 rounded-2xl bg-white border border-[#e2e8f0] shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-[#e8f1fc] text-[#0a6fdb] flex items-center justify-center mb-5 font-bold">
                  <IconTeam className="w-6 h-6" />
                </div>
                <h3 className="text-[18px] font-bold text-[#111827] mb-2">100% In-House Staff</h3>
                <p className="text-[#4b5563] text-[14px] leading-relaxed">
                  We don't broker your job out to random daily-wage workers. Our own certified electricians, plumbers, and carpenters handle your project.
                </p>
              </div>

              <div className="p-7 rounded-2xl bg-white border border-[#e2e8f0] shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-[#e8f1fc] text-[#0a6fdb] flex items-center justify-center mb-5 font-bold">
                  <IconClock className="w-6 h-6" />
                </div>
                <h3 className="text-[18px] font-bold text-[#111827] mb-2">Fixed Prices &amp; Clean Sites</h3>
                <p className="text-[#4b5563] text-[14px] leading-relaxed">
                  No hidden bills and no project drag. You receive an itemized price quote in writing, and we clean up daily before leaving.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ================= FAQ (BALANCED 2-COLUMN LAYOUT) ================= */}
        <section className="section-padding bg-white border-t border-[#e5e9f0]">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
              {/* Left Column: Heading + Direct Help Card */}
              <div className="lg:col-span-5 lg:sticky lg:top-28">
                <div className="eyebrow">COMMON SERVICE QUESTIONS</div>
                <h2 className="h2-title text-[26px] sm:text-[32px] md:text-[36px] text-[#111827] mb-3 sm:mb-4 leading-tight">
                  Questions About <br className="hidden sm:block" />
                  <span className="text-[#0a6fdb]">Our Services?</span>
                </h2>
                <p className="text-[#4b5563] text-[14.5px] sm:text-[15px] leading-relaxed mb-6">
                  Here are common questions clients ask about booking, pricing, and execution. We are happy to answer any questions directly.
                </p>

                {/* Direct Contact Box */}
                <div className="p-5 sm:p-6 rounded-2xl bg-[#f8fafc] border border-[#e2e8f0] space-y-3.5 shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#0a6fdb] text-white flex items-center justify-center shrink-0 shadow-sm">
                      <IconPhone className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <div>
                      <h4 className="text-[14.5px] sm:text-[15px] font-bold text-[#111827]">Have a custom request?</h4>
                      <p className="text-[12.5px] sm:text-[13px] text-[#64748b]">Talk to our site supervisor directly.</p>
                    </div>
                  </div>
                  <p className="text-[13px] sm:text-[13.5px] text-[#4b5563] leading-relaxed">
                    Call or message us on WhatsApp. We can visit your home anywhere in Bengaluru for a free consultation.
                  </p>
                  <div className="pt-2 flex flex-col sm:flex-row gap-2.5">
                    <a
                      href="tel:+918618252233"
                      className="btn btn-primary text-[13px] py-2.5 px-4 rounded-lg w-full sm:w-auto text-center justify-center font-bold"
                    >
                      Call +91 86182 52233
                    </a>
                    <Link
                      href="/contact"
                      className="btn btn-outline text-[13px] py-2.5 px-4 rounded-lg bg-white w-full sm:w-auto text-center justify-center font-bold"
                    >
                      Contact Page
                    </Link>
                  </div>
                </div>
              </div>

              {/* Right Column: Compact Accordions */}
              <div className="lg:col-span-7 space-y-3 sm:space-y-3.5">
                {serviceFaqs.map((faq, idx) => {
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

        {/* ================= HIGH CONVERTING CTA BANNER ================= */}
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
              Ready to Upgrade Your Home?
            </h2>
            <p className="text-white/80 text-[15px] sm:text-[16.5px] leading-relaxed mb-8 sm:mb-10 max-w-[580px] mx-auto">
              Tell us what you need. Our supervisor will visit your home, take measurements, and give you a free, written price quote with zero obligations.
            </p>
            <div className="flex flex-row gap-2 sm:gap-4 justify-center">
              <Link
                href="/contact"
                className="btn bg-white text-[#0a6fdb] hover:bg-[#f8fafc] font-bold flex-1 min-w-0 sm:flex-none sm:w-auto !px-2.5 sm:!px-8 !py-3 sm:!py-3.5 !text-[12.5px] sm:!text-[15px] rounded-full shadow-xl hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-300 text-center justify-center"
              >
                Book a Free Visit
              </Link>
              <a
                href="https://wa.me/918618252233?text=Hi%20Sadaf%20Constructions,%20I%20would%20like%20to%20get%20a%20quote%20for%20my%20home."
                target="_blank"
                rel="noopener noreferrer"
                className="btn bg-[#25d366] text-white hover:bg-[#20ba59] border-transparent font-bold flex-1 min-w-0 sm:flex-none sm:w-auto !px-2.5 sm:!px-8 !py-3 sm:!py-3.5 !text-[12.5px] sm:!text-[15px] !gap-1.5 rounded-full shadow-xl hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-300 text-center justify-center inline-flex items-center"
              >
                <IconWhatsapp className="w-4 h-4 shrink-0" />
                WhatsApp Us
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
