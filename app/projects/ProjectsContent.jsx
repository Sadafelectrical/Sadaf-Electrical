'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import BackToTop from '../../components/BackToTop';
import Testimonials from '../../components/Testimonials';
import {
  IconCheck,
  IconPhone,
  IconWhatsapp,
  IconShield,
  IconTeam,
  IconClock,
} from '../../components/Icons';

const projectsData = [
  {
    id: '01',
    category: 'renovation',
    tag: 'Full Renovation',
    title: 'Complete Flat Renovation',
    location: 'City Apartments, Bengaluru',
    image: '/Some of Our Work/Complete Flat Renovation.png',
    desc: 'A full end-to-end apartment makeover covering demolition, flooring, false ceilings, and custom joinery delivered in under 4 weeks.',
  },
  {
    id: '02',
    category: 'kitchen',
    tag: 'Kitchen Upgrade',
    title: 'Modern Kitchen Upgrade',
    location: 'Green View Residency',
    image: '/Some of Our Work/Modern Kitchen Upgrade.png',
    desc: 'Open-concept kitchen remodel with quartz countertops, soft-close cabinetry, and warm indirect LED lighting.',
  },
  {
    id: '03',
    category: 'bathroom',
    tag: 'Bathroom Remodel',
    title: 'Bathroom Renovation',
    location: 'Maple Street',
    image: '/Some of Our Work/Bathroom Renovation.png',
    desc: 'Walk-in rain shower, floating vanity, and premium tiling installed with zero-leak plumbing guarantee.',
  },
  {
    id: '04',
    category: 'security',
    tag: 'Smart Security',
    title: 'CCTV Installation',
    location: 'Residential Villa',
    image: '/Some of Our Work/CCTV Installation.png',
    desc: '4K night-vision camera coverage with concealed cabling and instant mobile alerts across the whole villa.',
  },
  {
    id: '05',
    category: 'kitchen',
    tag: 'Kitchen Upgrade',
    title: 'Kitchen Renovation',
    location: 'Koramangala Residence',
    image: '/BeforeAndAfter/Kitchen Renovation-a.png',
    desc: 'Complete transformation from a dated layout into a bright, functional modern cooking space.',
  },
  {
    id: '06',
    category: 'bathroom',
    tag: 'Bathroom Remodel',
    title: 'Bathroom Upgrade',
    location: 'Whitefield',
    image: '/BeforeAndAfter/Bathroom Upgrade-a.png',
    desc: 'Compact bathroom reimagined with a sleek, spa-inspired finish and better use of space.',
  },
  {
    id: '07',
    category: 'renovation',
    tag: 'Bedroom Refresh',
    title: 'Bedroom Refresh',
    location: 'Downtown Apartments',
    image: '/BeforeAndAfter/Bedroom Refresh-a.png',
    desc: 'A calming bedroom overhaul with custom wardrobes, fresh paint, and upgraded lighting.',
  },
  {
    id: '08',
    category: 'renovation',
    tag: 'Living Room Makeover',
    title: 'Living Room Makeover',
    location: 'Sarjapur Villas',
    image: '/BeforeAndAfter/Living Room Makeover-a.png',
    desc: 'Living space reworked with a modern feature wall, new flooring, and warm ambient lighting.',
  },
];

const categories = [
  { id: 'all', label: 'All Projects' },
  { id: 'renovation', label: 'Renovation' },
  { id: 'kitchen', label: 'Kitchen' },
  { id: 'bathroom', label: 'Bathroom' },
  { id: 'security', label: 'Security' },
];

export default function ProjectsContent() {
  const [activeTab, setActiveTab] = useState('all');
  const [activeProject, setActiveProject] = useState(null);

  const filteredProjects =
    activeTab === 'all'
      ? projectsData
      : projectsData.filter((p) => p.category === activeTab);

  return (
    <>
      <Header />
      <main className="bg-white text-[#111827] overflow-x-hidden">
        {/* ================= HERO HEADER ================= */}
        <section className="relative pt-10 pb-12 sm:pt-14 sm:pb-16 lg:min-h-[560px] lg:flex lg:items-center bg-gradient-to-b from-[#f5f8fc] via-[#f8fafc] to-white border-b border-[#e5e9f0] overflow-hidden">
          {/* Full-bleed banner image on the right, fading into the background */}
          <div className="hidden lg:flex absolute top-0 right-0 h-full w-[52%] z-[1] items-center justify-end">
            <img
              src="/ProjectBanner.png"
              alt="Sadaf Constructions projects"
              className="w-full h-auto max-h-full object-contain object-right select-none pointer-events-none [mask-image:linear-gradient(to_right,transparent,black_16%)] [-webkit-mask-image:linear-gradient(to_right,transparent,black_16%)]"
            />
          </div>

          <div className="container-custom relative z-10 w-full">

            <div className="max-w-[820px] lg:max-w-[560px]">
              <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-[#e8f1fc] text-[#0a6fdb] text-[9.5px] sm:text-[11.5px] font-bold tracking-normal sm:tracking-wider uppercase mb-4 border border-[#bfdbfe] whitespace-nowrap max-w-full">
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#0a6fdb] animate-pulse shrink-0" />
                100+ Homes Transformed Across Bengaluru
              </div>

              <h1 className="h2-title text-[32px] sm:text-[42px] lg:text-[48px] leading-[1.15] text-[#111827] mb-4 font-extrabold">
                Real Homes, <span className="text-[#0a6fdb]">Real Transformations</span>
              </h1>

              <div className="lg:hidden flex justify-center items-center mb-6">
                <div className="relative w-full max-w-[420px]">
                  <img
                    src="/ProjectBanner.png"
                    alt="Sadaf Constructions projects"
                    className="w-full h-auto object-contain select-none pointer-events-none rounded-2xl"
                  />
                </div>
              </div>

              <p className="text-[#4b5563] text-[15.5px] sm:text-[16.5px] leading-[1.7] mb-7 max-w-[700px]">
                Browse a selection of our recent renovation, kitchen, bathroom and security installation projects across Bengaluru and Karnataka.
              </p>

              <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 mb-8 text-[12.5px] sm:text-[13px] text-[#334155] font-medium">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white border border-[#e2e8f0] shadow-2xs">
                  <IconCheck className="w-3.5 h-3.5 text-[#059669]" />
                  100% In-House Team
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white border border-[#e2e8f0] shadow-2xs">
                  <IconCheck className="w-3.5 h-3.5 text-[#059669]" />
                  1-Year Workmanship Warranty
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white border border-[#e2e8f0] shadow-2xs">
                  <IconCheck className="w-3.5 h-3.5 text-[#059669]" />
                  Free On-Site Survey
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
                  href="https://wa.me/919741931730?text=Hi%20Sadaf%20Constructions,%20I%20would%20like%20to%20see%20more%20of%20your%20projects."
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
              <div className="text-[28px] sm:text-[34px] md:text-[38px] font-black text-[#0a6fdb] leading-none mb-1">1-Yr</div>
              <div className="text-[13px] sm:text-[14px] font-bold text-[#111827] mb-0.5">Warranty</div>
              <span className="text-[11.5px] sm:text-[12.5px] text-[#64748b]">On every job</span>
            </div>
          </div>
        </section>

        {/* ================= FILTERABLE PROJECT GALLERY ================= */}
        <section className="section-padding bg-[#f8fafc]" id="all-projects">
          <div className="container-custom">
            <div className="text-center max-w-[720px] mx-auto mb-10 sm:mb-12">
              <div className="eyebrow">OUR PORTFOLIO</div>
              <h2 className="h2-title text-[28px] sm:text-[36px] text-[#111827] mb-3">
                Some of Our Recent Work
              </h2>
              <p className="text-[#4b5563] text-[15px]">
                Filter by category to see the kind of projects our team delivers, from full renovations to security upgrades.
              </p>
            </div>

            {/* Filter Tabs */}
            <div className="flex justify-start sm:justify-center gap-2 sm:gap-2.5 overflow-x-auto scrollbar-hide pb-1 sm:pb-0 sm:flex-wrap mb-10 sm:mb-14 -mx-4 px-4 sm:mx-0 sm:px-0">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  className={`px-5 py-2.5 rounded-xl text-[13px] sm:text-[13.5px] font-bold transition-all duration-200 border whitespace-nowrap shrink-0 ${
                    activeTab === cat.id
                      ? 'bg-[#0a6fdb] text-white border-[#0a6fdb] shadow-md shadow-[#0a6fdb]/20'
                      : 'bg-white text-[#4b5563] border-[#e2e8f0] hover:bg-[#f1f5f9] hover:text-[#111827]'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Project Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredProjects.map((project) => (
                <article
                  key={project.id}
                  className="group cursor-pointer bg-white rounded-2xl overflow-hidden border border-[#e2e8f0] shadow-sm hover:shadow-xl hover:border-[#0a6fdb]/40 transition-all duration-300"
                  onClick={() => setActiveProject(project)}
                >
                  <div className="relative aspect-[4/3.4] overflow-hidden bg-slate-100">
                    <img
                      loading="lazy"
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <span className="absolute top-3.5 left-3.5 px-2.5 py-1 bg-white/90 backdrop-blur-md text-[#0a6fdb] text-[11px] font-extrabold rounded-md shadow-sm uppercase tracking-wide">
                      {project.tag}
                    </span>

                    <span className="absolute bottom-3.5 right-3.5 w-9 h-9 rounded-full bg-white text-[#0a6fdb] flex items-center justify-center shadow-lg opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 3h6v6M14 10l6.1-6.1M9 21H3v-6m0 6l6.1-6.1" />
                      </svg>
                    </span>
                  </div>

                  <div className="p-5">
                    <h3 className="text-[15.5px] font-bold text-[#111827] group-hover:text-[#0a6fdb] transition-colors">
                      {project.title}
                    </h3>
                    <span className="text-[12.5px] text-[#8a94a6] block mt-0.5">
                      {project.location}
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ================= 3 PROMISES STRIP ================= */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center max-w-[700px] mx-auto mb-12">
              <div className="eyebrow">WHY IT LOOKS THIS GOOD</div>
              <h2 className="h2-title text-[26px] sm:text-[34px] text-[#111827] mb-3">
                The Craft Behind Every Project
              </h2>
              <p className="text-[#4b5563] text-[15px]">
                Every project on this page was delivered by our own in-house team, on schedule, with a written warranty.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              <div className="p-7 rounded-2xl bg-[#f8fafc] border border-[#e2e8f0] shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-[#e8f1fc] text-[#0a6fdb] flex items-center justify-center mb-5 font-bold">
                  <IconShield className="w-6 h-6" />
                </div>
                <h3 className="text-[18px] font-bold text-[#111827] mb-2">1-Year Workmanship Warranty</h3>
                <p className="text-[#4b5563] text-[14px] leading-relaxed">
                  Every finish, fixture and installation you see is backed by our written 1-year guarantee.
                </p>
              </div>

              <div className="p-7 rounded-2xl bg-[#f8fafc] border border-[#e2e8f0] shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-[#e8f1fc] text-[#0a6fdb] flex items-center justify-center mb-5 font-bold">
                  <IconTeam className="w-6 h-6" />
                </div>
                <h3 className="text-[18px] font-bold text-[#111827] mb-2">100% In-House Team</h3>
                <p className="text-[#4b5563] text-[14px] leading-relaxed">
                  Our own certified electricians, plumbers and carpenters worked on each project shown here.
                </p>
              </div>

              <div className="p-7 rounded-2xl bg-[#f8fafc] border border-[#e2e8f0] shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-[#e8f1fc] text-[#0a6fdb] flex items-center justify-center mb-5 font-bold">
                  <IconClock className="w-6 h-6" />
                </div>
                <h3 className="text-[18px] font-bold text-[#111827] mb-2">On-Time, Clean Execution</h3>
                <p className="text-[#4b5563] text-[14px] leading-relaxed">
                  Dust control, daily cleanup, and fixed timelines are standard on every job we take on.
                </p>
              </div>
            </div>
          </div>
        </section>

        <Testimonials />

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
              Like What You See? Let&apos;s Build Yours.
            </h2>
            <p className="text-white/80 text-[15px] sm:text-[16.5px] leading-relaxed mb-8 sm:mb-10 max-w-[580px] mx-auto">
              Tell us about your space. Our supervisor will visit your home, take measurements, and give you a free, written price quote with zero obligations.
            </p>
            <div className="flex flex-row gap-2 sm:gap-4 justify-center">
              <Link
                href="/contact"
                className="btn bg-white text-[#0a6fdb] hover:bg-[#f8fafc] font-bold flex-1 min-w-0 sm:flex-none sm:w-auto !px-2.5 sm:!px-8 !py-3 sm:!py-3.5 !text-[12.5px] sm:!text-[15px] rounded-full shadow-xl hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-300 text-center justify-center"
              >
                Book a Free Visit
              </Link>
              <a
                href="https://wa.me/919741931730?text=Hi%20Sadaf%20Constructions,%20I%20would%20like%20to%20get%20a%20quote%20for%20my%20home."
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

      {/* ================= PROJECT DETAIL LIGHTBOX ================= */}
      {activeProject && (
        <div
          className="fixed inset-0 z-[200] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8"
          onClick={() => setActiveProject(null)}
        >
          <div
            className="bg-white rounded-2xl overflow-hidden max-w-[900px] w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[16/9] bg-slate-100">
              <img
                src={activeProject.image}
                alt={activeProject.title}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setActiveProject(null)}
                aria-label="Close"
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/90 hover:bg-white text-[#111827] flex items-center justify-center shadow-md transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <span className="absolute top-4 left-4 px-2.5 py-1 bg-white/90 backdrop-blur-md text-[#0a6fdb] text-[11px] font-extrabold rounded-md shadow-sm uppercase tracking-wide">
                {activeProject.tag}
              </span>
            </div>
            <div className="p-6 sm:p-8">
              <h3 className="text-[22px] sm:text-[26px] font-extrabold text-[#111827] mb-1.5">
                {activeProject.title}
              </h3>
              <span className="text-[13px] text-[#8a94a6] block mb-4">
                {activeProject.location}
              </span>
              <p className="text-[#4b5563] text-[14.5px] leading-relaxed mb-6">
                {activeProject.desc}
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/contact"
                  className="btn btn-primary text-[13.5px] py-3 px-6 rounded-lg text-center justify-center font-bold"
                >
                  Start a Similar Project
                </Link>
                <a
                  href="tel:+919741931730"
                  className="btn btn-outline text-[13.5px] py-3 px-6 rounded-lg text-[#0a6fdb] border-[#bfdbfe] hover:bg-[#e8f1fc] text-center justify-center inline-flex items-center gap-2"
                >
                  <IconPhone className="w-4 h-4" />
                  Call Us
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
