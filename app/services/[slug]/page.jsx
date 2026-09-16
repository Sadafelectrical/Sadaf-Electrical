import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import BackToTop from '../../../components/BackToTop';
import { servicesList } from '../../../components/servicesData';
import {
  IconCheck,
  IconPhone,
  IconWhatsapp,
  IconShield,
  IconClock,
} from '../../../components/Icons';

export function generateStaticParams() {
  return servicesList.map((service) => ({ slug: service.slug }));
}

export function generateMetadata({ params }) {
  const service = servicesList.find((s) => s.slug === params.slug);
  if (!service) return {};
  return {
    title: `${service.title} | Sadaf Constructions and Renovations`,
    description: service.desc,
  };
}

export default function ServiceDetailPage({ params }) {
  const service = servicesList.find((s) => s.slug === params.slug);
  if (!service) notFound();

  const related = servicesList.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      <Header />
      <main className="bg-white text-[#111827] overflow-x-hidden">
        {/* ================= HERO ================= */}
        <section className="relative pt-10 pb-12 sm:pt-14 sm:pb-16 lg:min-h-[560px] lg:flex lg:items-center bg-gradient-to-b from-[#f5f8fc] via-[#f8fafc] to-white border-b border-[#e5e9f0] overflow-hidden">
          <div className="hidden lg:flex absolute top-0 right-0 h-full w-[48%] z-[1] items-center justify-center">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-auto max-h-full object-contain object-center select-none pointer-events-none [mask-image:linear-gradient(to_right,transparent,black_16%)] [-webkit-mask-image:linear-gradient(to_right,transparent,black_16%)]"
            />
          </div>

          <div className="container-custom relative z-10 w-full">

            <div className="max-w-[820px] lg:max-w-[580px]">
              <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-[#e8f1fc] text-[#0a6fdb] text-[9.5px] sm:text-[11.5px] font-bold tracking-normal sm:tracking-wider uppercase mb-4 border border-[#bfdbfe] whitespace-nowrap max-w-full">
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#0a6fdb] animate-pulse shrink-0" />
                {service.badge}
              </div>

              <h1 className="h2-title text-[32px] sm:text-[42px] lg:text-[48px] leading-[1.15] text-[#111827] mb-3 font-extrabold">
                {service.title}
              </h1>

              <div className="lg:hidden flex justify-center items-center mb-6">
                <div className="relative w-full max-w-[420px]">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-auto object-contain select-none pointer-events-none rounded-2xl"
                  />
                </div>
              </div>

              <p className="text-[#0a6fdb] text-[14px] sm:text-[15px] font-bold uppercase tracking-wide mb-4">
                {service.tagline}
              </p>

              <p className="text-[#4b5563] text-[15.5px] sm:text-[16.5px] leading-[1.7] mb-7 max-w-[560px]">
                {service.desc}
              </p>

              <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 mb-8">
                {service.highlights.map((tag, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white border border-[#e2e8f0] shadow-2xs text-[12.5px] sm:text-[13px] text-[#334155] font-medium"
                  >
                    <IconCheck className="w-3.5 h-3.5 text-[#059669]" />
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex flex-row gap-2 sm:gap-4">
                <Link
                  href={`/contact?service=${encodeURIComponent(service.title)}`}
                  className="btn btn-primary flex-1 min-w-0 sm:flex-none sm:w-auto sm:min-w-[170px] shadow-md shadow-[#0a6fdb]/20 !py-3 sm:!py-3.5 !px-2.5 sm:!px-6 !text-[12.5px] sm:!text-[14.5px] !gap-1.5 text-center justify-center font-bold"
                >
                  Book Free Inspection
                </Link>
                <a
                  href={`https://wa.me/971501234567?text=${encodeURIComponent(
                    `Hi Sadaf Constructions, I would like to inquire about your ${service.title} service.`
                  )}`}
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

        {/* ================= DETAILS + CONTACT CARD ================= */}
        <section className="section-padding bg-[#f8fafc]">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
              {/* Left: Feature Breakdown */}
              <div className="lg:col-span-7">
                <div className="eyebrow">WHAT'S INCLUDED</div>
                <h2 className="h2-title text-[26px] sm:text-[34px] text-[#111827] mb-3 leading-tight">
                  {service.title} <span className="text-[#0a6fdb]">Scope of Work</span>
                </h2>
                <p className="text-[#4b5563] text-[15px] leading-relaxed mb-8">
                  {service.desc}
                </p>

                <div className="space-y-3">
                  {service.features.map((feat, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3.5 p-4 rounded-xl bg-white border border-[#e2e8f0] shadow-sm"
                    >
                      <div className="w-6 h-6 rounded-full bg-[#ecfdf5] text-[#059669] flex items-center justify-center shrink-0 mt-0.5">
                        <IconCheck className="w-3.5 h-3.5 stroke-[3]" />
                      </div>
                      <span className="text-[14.5px] text-[#334155] font-medium leading-snug pt-0.5">
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: Sticky Contact Card */}
              <div className="lg:col-span-5 lg:sticky lg:top-28">
                <div className="p-6 sm:p-7 rounded-2xl bg-white border border-[#e2e8f0] shadow-sm space-y-5">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-xl bg-[#0a6fdb] text-white flex items-center justify-center shrink-0 shadow-sm">
                      {service.icon}
                    </div>
                    <div>
                      <h4 className="text-[15px] font-bold text-[#111827]">{service.timeline}</h4>
                      <p className="text-[12.5px] text-[#64748b]">Estimated project timeline</p>
                    </div>
                  </div>

                  <div className="border-t border-[#f1f5f9] pt-5 space-y-3.5">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-[#f0f6ff] border border-[#dbeafe] text-[#0a6fdb] flex items-center justify-center shrink-0">
                        <IconShield className="w-4 h-4" />
                      </div>
                      <span className="text-[13.5px] text-[#334155] font-medium">1-Year Workmanship Warranty</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-[#f0f6ff] border border-[#dbeafe] text-[#0a6fdb] flex items-center justify-center shrink-0">
                        <IconClock className="w-4 h-4" />
                      </div>
                      <span className="text-[13.5px] text-[#334155] font-medium">Free On-Site Inspection</span>
                    </div>
                  </div>

                  <div className="border-t border-[#f1f5f9] pt-5 flex flex-col gap-2.5">
                    <a
                      href="tel:+971501234567"
                      className="btn btn-primary text-[13.5px] py-3 px-4 rounded-lg w-full text-center justify-center font-bold inline-flex items-center gap-2"
                    >
                      <IconPhone className="w-4 h-4" />
                      Call +971 50 123 4567
                    </a>
                    <Link
                      href={`/contact?service=${encodeURIComponent(service.title)}`}
                      className="btn btn-outline text-[13.5px] py-3 px-4 rounded-lg bg-white w-full text-center justify-center font-bold"
                    >
                      Request a Free Quote
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= HOW WE DELIVER THIS SERVICE ================= */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center max-w-[700px] mx-auto mb-10 sm:mb-12">
              <div className="eyebrow">HOW IT WORKS</div>
              <h2 className="h2-title text-[26px] sm:text-[34px] text-[#111827] mb-3">
                Getting Your {service.title} Started
              </h2>
              <p className="text-[#4b5563] text-[15px]">
                A simple, transparent process from your first message to the final handover.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-7">
              <div className="p-6 rounded-2xl bg-[#f8fafc] border border-[#e2e8f0] relative">
                <div className="w-10 h-10 rounded-xl bg-[#0a6fdb] text-white flex items-center justify-center font-extrabold text-[15px] mb-4 shadow-sm">
                  1
                </div>
                <h3 className="text-[17px] font-bold text-[#111827] mb-2">Free Site Visit</h3>
                <p className="text-[#4b5563] text-[13.5px] leading-relaxed">
                  Our supervisor visits your home, inspects the site and understands exactly what you need for your {service.title.toLowerCase()}.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#f8fafc] border border-[#e2e8f0] relative">
                <div className="w-10 h-10 rounded-xl bg-[#0a6fdb] text-white flex items-center justify-center font-extrabold text-[15px] mb-4 shadow-sm">
                  2
                </div>
                <h3 className="text-[17px] font-bold text-[#111827] mb-2">Written Quote</h3>
                <p className="text-[#4b5563] text-[13.5px] leading-relaxed">
                  You receive a clear, itemized price with the full scope of work and timeline — {service.timeline.toLowerCase()}.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#f8fafc] border border-[#e2e8f0] relative">
                <div className="w-10 h-10 rounded-xl bg-[#0a6fdb] text-white flex items-center justify-center font-extrabold text-[15px] mb-4 shadow-sm">
                  3
                </div>
                <h3 className="text-[17px] font-bold text-[#111827] mb-2">Clean Execution</h3>
                <p className="text-[#4b5563] text-[13.5px] leading-relaxed">
                  Our in-house team completes the work neatly and on schedule, backed by a 1-year workmanship warranty.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ================= RELATED SERVICES ================= */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center max-w-[700px] mx-auto mb-10 sm:mb-12">
              <div className="eyebrow">EXPLORE MORE</div>
              <h2 className="h2-title text-[26px] sm:text-[34px] text-[#111827] mb-3">
                Other Services You Might Need
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {related.map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="group bg-white rounded-2xl overflow-hidden border border-[#e2e8f0] shadow-sm hover:shadow-xl hover:border-[#0a6fdb]/40 transition-all duration-300 block"
                >
                  <div className="relative aspect-square overflow-hidden bg-slate-100">
                    <img
                      src={s.image}
                      alt={s.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/15" />
                    <div className="absolute bottom-3 left-4 w-11 h-11 rounded-xl bg-white text-[#0a6fdb] flex items-center justify-center shadow-lg border border-white/90">
                      {s.icon}
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="text-[16px] font-extrabold text-[#111827] group-hover:text-[#0a6fdb] transition-colors">
                      {s.title}
                    </h3>
                    <p className="text-[13px] text-[#8a94a6] mt-1">{s.tagline}</p>
                  </div>
                </Link>
              ))}
            </div>

            <div className="text-center mt-10">
              <Link href="/services" className="btn-view-all">
                View All Services
              </Link>
            </div>
          </div>
        </section>

        {/* ================= CTA BANNER ================= */}
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
              Ready to Start Your {service.title}?
            </h2>
            <p className="text-white/80 text-[15px] sm:text-[16.5px] leading-relaxed mb-8 sm:mb-10 max-w-[580px] mx-auto">
              Tell us what you need. Our supervisor will visit your home, take measurements, and give you a free, written price quote with zero obligations.
            </p>
            <div className="flex flex-row gap-2 sm:gap-4 justify-center">
              <Link
                href={`/contact?service=${encodeURIComponent(service.title)}`}
                className="btn bg-white text-[#0a6fdb] hover:bg-[#f8fafc] font-bold flex-1 min-w-0 sm:flex-none sm:w-auto !px-2.5 sm:!px-8 !py-3 sm:!py-3.5 !text-[12.5px] sm:!text-[15px] rounded-full shadow-xl hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-300 text-center justify-center"
              >
                Book a Free Visit
              </Link>
              <a
                href={`https://wa.me/971501234567?text=${encodeURIComponent(
                  `Hi Sadaf Constructions, I would like to get a quote for ${service.title}.`
                )}`}
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
