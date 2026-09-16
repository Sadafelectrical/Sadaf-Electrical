'use client';

import React, { useState, useEffect, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import BackToTop from '../../components/BackToTop';
import {
  IconPhone,
  IconMail,
  IconPin,
  IconClock,
  IconShield,
  IconChat,
  IconHandshake,
  IconUser,
  IconList,
  IconCheck,
  IconWhatsapp,
} from '../../components/Icons';

function ContactFormInner() {
  const searchParams = useSearchParams();
  const serviceParam = searchParams.get('service');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: serviceParam || 'Full Home & Villa Renovation',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (serviceParam) {
      setFormData((prev) => ({ ...prev, service: serviceParam }));
    }
  }, [serviceParam]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Construct WhatsApp message text
    const text = `*New Project Inquiry - Sadaf Constructions*
---------------------------------------
• *Name:* ${formData.name || 'Not provided'}
• *Phone:* ${formData.phone || 'Not provided'}
• *Email:* ${formData.email || 'Not provided'}
• *Service:* ${formData.service}
• *Message:* ${formData.message || 'I would like to get a quote and discuss our project.'}
---------------------------------------
Sent via Sadaf Website Contact Form`;

    const encodedText = encodeURIComponent(text);
    // Redirect to company WhatsApp
    const whatsappUrl = `https://wa.me/918618252233?text=${encodedText}`;

    setSubmitted(true);

    if (typeof window !== 'undefined') {
      window.open(whatsappUrl, '_blank');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {submitted && (
        <div className="p-4 rounded-xl bg-[#ecfdf5] border border-[#a7f3d0] text-[#065f46] text-[13.5px] flex items-center gap-3">
          <div className="w-6 h-6 rounded-full bg-[#10b981] text-white flex items-center justify-center shrink-0">
            <IconCheck className="w-3.5 h-3.5" />
          </div>
          <div>
            <p className="font-bold">Opening WhatsApp with your details!</p>
            <p className="text-[12.5px] text-[#047857]">
              Our project team will connect with you right away to discuss your project.
            </p>
          </div>
        </div>
      )}

      {/* Row 1: Your Name & Your Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#9ca3af]">
            <IconUser className="w-4 h-4" />
          </div>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name *"
            className="w-full pl-10 pr-4 py-3 bg-white border border-[#e2e8f0] rounded-xl text-[14px] text-[#111827] placeholder-[#9ca3af] focus:border-[#0a6fdb] focus:ring-2 focus:ring-[#0a6fdb]/20 hover:border-[#c7d6e8] outline-none transition-all shadow-sm"
          />
        </div>

        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#9ca3af]">
            <IconMail className="w-4 h-4" />
          </div>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email *"
            className="w-full pl-10 pr-4 py-3 bg-white border border-[#e2e8f0] rounded-xl text-[14px] text-[#111827] placeholder-[#9ca3af] focus:border-[#0a6fdb] focus:ring-2 focus:ring-[#0a6fdb]/20 hover:border-[#c7d6e8] outline-none transition-all shadow-sm"
          />
        </div>
      </div>

      {/* Row 2: Your Phone Number & Service Interested In */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#9ca3af]">
            <IconPhone className="w-4 h-4" />
          </div>
          <input
            type="tel"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            placeholder="Your Phone Number"
            className="w-full pl-10 pr-4 py-3 bg-white border border-[#e2e8f0] rounded-xl text-[14px] text-[#111827] placeholder-[#9ca3af] focus:border-[#0a6fdb] focus:ring-2 focus:ring-[#0a6fdb]/20 hover:border-[#c7d6e8] outline-none transition-all shadow-sm"
          />
        </div>

        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#9ca3af]">
            <IconList className="w-4 h-4" />
          </div>
          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full pl-10 pr-9 py-3 bg-white border border-[#e2e8f0] rounded-xl text-[14px] text-[#374151] focus:border-[#0a6fdb] focus:ring-2 focus:ring-[#0a6fdb]/20 hover:border-[#c7d6e8] outline-none transition-all appearance-none cursor-pointer shadow-sm"
          >
            <option value="Full Home & Villa Renovation">Full Home &amp; Villa Renovation</option>
            <option value="Plumbing & Modern Bathrooms">Plumbing &amp; Modern Bathrooms</option>
            <option value="Electrical & Modern Lighting">Electrical &amp; Modern Lighting</option>
            <option value="Custom Carpentry & Joinery">Custom Carpentry &amp; Joinery</option>
            <option value="Civil Works & Partitions">Civil Works &amp; Partitions</option>
            <option value="Painting & Waterproofing">Painting &amp; Waterproofing</option>
            <option value="Metal Fabrication & Gates">Metal Fabrication &amp; Gates</option>
            <option value="CCTV & Smart Security">CCTV &amp; Smart Security</option>
            <option value="Handyman & Emergency Repairs">Handyman &amp; Emergency Repairs</option>
            <option value="Other Custom Project">Other Custom Project</option>
          </select>
          <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none text-[#9ca3af]">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>

      {/* Row 3: Your Message */}
      <div>
        <div className="relative">
          <div className="absolute top-3.5 left-3.5 pointer-events-none text-[#9ca3af]">
            <IconChat className="w-4 h-4" />
          </div>
          <textarea
            name="message"
            rows="4"
            required
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message *"
            className="w-full pl-10 pr-4 py-3 bg-white border border-[#e2e8f0] rounded-xl text-[14px] text-[#111827] placeholder-[#9ca3af] focus:border-[#0a6fdb] focus:ring-2 focus:ring-[#0a6fdb]/20 hover:border-[#c7d6e8] outline-none transition-all resize-y shadow-sm"
          />
        </div>
        <p className="text-[12.5px] text-[#8a94a6] mt-2">
          Tell us about your project, requirements or any questions.
        </p>
      </div>

      {/* Submit Button (Dark navy pill matching mockup exactly) */}
      <div className="pt-2">
        <button
          type="submit"
          className="bg-gradient-to-r from-[#0c1b2f] to-[#0a6fdb] hover:from-[#0a6fdb] hover:to-[#0c1b2f] text-white font-semibold py-3.5 px-8 rounded-full text-[14px] transition-all duration-300 shadow-lg shadow-[#0a6fdb]/20 hover:shadow-xl hover:shadow-[#0a6fdb]/30 hover:-translate-y-0.5 inline-flex items-center justify-center gap-2.5"
        >
          <span>Send Message</span>
        </button>
      </div>
    </form>
  );
}

export default function ContactContent() {
  return (
    <>
      <Header />
      <main className="bg-white text-[#111827] overflow-x-hidden">
        {/* ================= EXACT HERO SECTION (MATCHING SCREENSHOT) ================= */}
        <section className="relative pt-10 pb-10 sm:pt-14 sm:pb-16 lg:min-h-[600px] bg-gradient-to-b from-[#f4f7fb] to-white overflow-hidden flex items-center">
          {/* Subtle architectural grid/blueprint background on the left */}
          <div className="absolute top-0 left-0 w-full lg:w-[55%] h-full opacity-[0.05] pointer-events-none bg-[radial-gradient(#0a6fdb_1px,transparent_1px)] [background-size:24px_24px]" />

          {/* Full-bleed image on the right, fading into the background */}
          <div className="hidden lg:flex absolute top-0 right-0 h-full w-[56%] z-[1] items-center justify-end">
            <img
              src="/contact-banner.png"
              alt="Sadaf Renovation Interior"
              className="w-full h-auto max-h-full object-contain object-right select-none pointer-events-none [mask-image:linear-gradient(to_right,transparent,black_16%)] [-webkit-mask-image:linear-gradient(to_right,transparent,black_16%)]"
            />
          </div>

          <div className="container-custom relative z-10 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
              {/* Left Column: Eyebrow, Heading, Subtitle & 3 Badges */}
              <div className="lg:col-span-5">
                <div className="text-[13px] font-bold tracking-[0.2em] text-[#0a6fdb] uppercase mb-4">
                  CONTACT US
                </div>

                <h1 className="h2-title text-[28px] sm:text-[38px] md:text-[44px] lg:text-[52px] leading-[1.18] sm:leading-[1.15] text-[#111827] mb-4 sm:mb-6 font-extrabold break-words">
                  Get in Touch
                </h1>

                <p className="text-[#556170] text-[17px] sm:text-[19px] leading-[1.7] mb-10 max-w-[540px]">
                  Let&apos;s build something better together. Whether it&apos;s a renovation, repair or a new project, we&apos;re here to help.
                </p>

                {/* 3 Badges side by side from design */}
                <div className="flex flex-wrap sm:flex-nowrap items-center gap-6 sm:gap-7 pt-1">
                  {/* Badge 1 */}
                  <div className="flex items-center gap-3">
                    <div className="w-[52px] h-[52px] rounded-full bg-[#f0f6ff] border border-[#dbeafe] text-[#0a6fdb] flex items-center justify-center shrink-0">
                      <IconChat className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-[13.5px] font-bold text-[#111827] leading-tight">Quick</h4>
                      <span className="text-[12.5px] text-[#6b7280]">Response</span>
                    </div>
                  </div>

                  {/* Badge 2 */}
                  <div className="flex items-center gap-3">
                    <div className="w-[52px] h-[52px] rounded-full bg-[#f0f6ff] border border-[#dbeafe] text-[#0a6fdb] flex items-center justify-center shrink-0">
                      <IconHandshake className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-[13.5px] font-bold text-[#111827] leading-tight">Free</h4>
                      <span className="text-[12.5px] text-[#6b7280]">Consultation</span>
                    </div>
                  </div>

                  {/* Badge 3 */}
                  <div className="flex items-center gap-3">
                    <div className="w-[52px] h-[52px] rounded-full bg-[#f0f6ff] border border-[#dbeafe] text-[#0a6fdb] flex items-center justify-center shrink-0">
                      <IconShield className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-[13.5px] font-bold text-[#111827] leading-tight">Reliable</h4>
                      <span className="text-[12.5px] text-[#6b7280]">Support</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Image shown only on mobile/tablet (full-bleed version handles desktop) */}
              <div className="lg:hidden flex justify-center items-center w-full">
                <div className="relative w-full max-w-[520px] mx-auto aspect-[4/3] rounded-2xl overflow-hidden">
                  <img
                    src="/contact-banner.png"
                    alt="Sadaf Renovation Interior"
                    className="absolute inset-0 w-full h-full object-cover object-[68%_50%] select-none pointer-events-none"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= 2-COLUMN FORM & CONTACT INFORMATION (MATCHING SCREENSHOT) ================= */}
        <section className="py-12 sm:py-16 bg-[#ffffff]">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-stretch">
              {/* Left Column: Send Us a Message Card */}
              <div className="lg:col-span-7 bg-white p-7 sm:p-9 lg:p-10 rounded-2xl border border-[#e5e9f0] shadow-[0_4px_24px_rgba(0,0,0,0.03)] flex flex-col justify-between">
                <div>
                  <h2 className="text-[24px] font-bold text-[#111827] mb-1.5">
                    Send Us a Message
                  </h2>
                  <p className="text-[14px] text-[#6b7280] mb-7">
                    Fill out the form and our team will get back to you shortly.
                  </p>

                  <Suspense fallback={<div className="py-8 text-center text-slate-400">Loading form...</div>}>
                    <ContactFormInner />
                  </Suspense>
                </div>
              </div>

              {/* Right Column: Contact Information (Soft Ice-Blue Container matching mockup) */}
              <div className="lg:col-span-5 bg-[#edf4fe] p-7 sm:p-9 lg:p-10 rounded-2xl border border-[#dbeafe] shadow-sm flex flex-col justify-between">
                <div>
                  <h2 className="text-[22px] font-bold text-[#111827] mb-1.5">
                    Contact Information
                  </h2>
                  <p className="text-[14px] text-[#6b7280] mb-8">
                    Reach out to us through any of the following channels.
                  </p>

                  <div className="space-y-6">
                    {/* Call Us */}
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-[#d7e7fd] text-[#0a6fdb] flex items-center justify-center shrink-0">
                        <IconPhone className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-[14px] font-bold text-[#111827]">Call Us</h4>
                        <a
                          href="tel:+918618252233"
                          className="text-[15px] font-semibold text-[#111827] hover:text-[#0a6fdb] transition-colors block mt-0.5"
                        >
                          +91 86182 52233
                        </a>
                        <a
                          href="tel:+919900281433"
                          className="text-[15px] font-semibold text-[#111827] hover:text-[#0a6fdb] transition-colors block mt-0.5"
                        >
                          +91 99002 81433
                        </a>
                        <a
                          href="tel:+919743555023"
                          className="text-[15px] font-semibold text-[#111827] hover:text-[#0a6fdb] transition-colors block mt-0.5"
                        >
                          +91 97435 55023
                        </a>
                        <span className="text-[12.5px] text-[#6b7280] block mt-0.5">
                          Mon - Sat, 8:00 AM - 6:00 PM
                        </span>
                      </div>
                    </div>

                    {/* Email Us */}
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-[#d7e7fd] text-[#0a6fdb] flex items-center justify-center shrink-0">
                        <IconMail className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-[14px] font-bold text-[#111827]">Email Us</h4>
                        <a
                          href="mailto:sadafelectrical786@gmail.com"
                          className="text-[15px] font-semibold text-[#111827] hover:text-[#0a6fdb] transition-colors block mt-0.5 break-all"
                        >
                          sadafelectrical786@gmail.com
                        </a>
                        <span className="text-[12.5px] text-[#6b7280] block mt-0.5">
                          We reply within 24 hours
                        </span>
                      </div>
                    </div>

                    {/* Location */}
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-[#d7e7fd] text-[#0a6fdb] flex items-center justify-center shrink-0">
                        <IconPin className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-[14px] font-bold text-[#111827]">Our Location</h4>
                        <p className="text-[14.5px] font-semibold text-[#111827] mt-0.5">
                          Musterstraße 12, 60326 Frankfurt
                        </p>
                        <span className="text-[12.5px] text-[#6b7280] block mt-0.5">
                          Germany
                        </span>
                      </div>
                    </div>

                    {/* Business Hours */}
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-[#d7e7fd] text-[#0a6fdb] flex items-center justify-center shrink-0">
                        <IconClock className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-[14px] font-bold text-[#111827]">Business Hours</h4>
                        <p className="text-[14px] font-semibold text-[#111827] mt-0.5">
                          Monday - Saturday: 8:00 AM - 6:00 PM
                        </p>
                        <span className="text-[12.5px] text-[#6b7280] block mt-0.5">
                          Sunday: Closed
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= INTERACTIVE MAP & VISIT OUR OFFICE (MATCHING SCREENSHOT) ================= */}
        <section className="pb-16 sm:pb-20 bg-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-stretch">
              {/* Left Column: Interactive Map of Frankfurt am Main */}
              <div className="lg:col-span-7 relative min-h-[340px] sm:min-h-[380px] rounded-2xl overflow-hidden border border-[#e2e8f0] shadow-sm">
                <iframe
                  title="Sadaf Constructions Location Map"
                  src="https://maps.google.com/maps?q=Frankfurt+am+Main+Germany&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: '360px' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />

                {/* Floating Map Pin Badge matching exact mockup */}
                <div className="absolute top-8 left-1/2 -translate-x-1/2 sm:translate-x-0 sm:left-1/2 bg-white px-4 py-2.5 rounded-xl border border-black/10 shadow-lg flex items-center gap-2.5 pointer-events-none z-10">
                  <div className="w-3.5 h-3.5 rounded-full bg-[#ef4444] animate-pulse shrink-0" />
                  <div>
                    <h5 className="text-[12.5px] font-bold text-[#111827] leading-tight">
                      Sadaf Constructions
                    </h5>
                    <span className="text-[11px] text-[#6b7280] leading-tight block">
                      and Renovations
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Column: Visit Our Office Card with lets-discuss.png */}
              <div className="lg:col-span-5 relative rounded-2xl overflow-hidden bg-[#141d2b] text-white p-8 sm:p-10 flex flex-col justify-between shadow-md">
                {/* Background Building Architecture from lets-discuss.png */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <img
                    src="/lets-discuss.png"
                    alt="Sadaf Office Building"
                    className="w-full h-full object-cover object-center scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a1120] via-[#0a1120]/40 to-transparent" />
                </div>

                <div className="relative z-10">
                  <div className="text-[11.5px] font-bold tracking-[0.2em] text-[#38bdf8] uppercase mb-3">
                    VISIT OUR OFFICE
                  </div>

                  <h3 className="text-[28px] sm:text-[34px] font-extrabold text-white mb-3 leading-tight">
                    Let&apos;s Discuss <br />
                    Your Project
                  </h3>

                  <p className="text-white/80 text-[14px] leading-relaxed max-w-[380px] mb-8">
                    Meet us in person and get expert advice for your home renovation or construction needs.
                  </p>
                </div>

                <div className="relative z-10">
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Musterstra%C3%9Fe+12+60326+Frankfurt+Germany"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-white/90 hover:bg-white hover:text-[#111827] text-white font-semibold py-2.5 px-6 rounded-full text-[13.5px] transition-all inline-flex items-center gap-2"
                  >
                    <span>Get Directions</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= READY TO START BANNER ================= */}
        <section className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-[#0a1525] via-[#0c1b2f] to-[#0a6fdb] text-white overflow-hidden">
          <div className="absolute -top-24 -left-24 w-72 h-72 bg-[#0a6fdb]/40 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-28 -right-20 w-80 h-80 bg-[#38bdf8]/25 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute inset-0 opacity-[0.06] pointer-events-none bg-[radial-gradient(white_1px,transparent_1px)] [background-size:26px_26px]" />

          <div className="container-custom relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="max-w-[620px]">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-[#38bdf8] text-[11px] sm:text-[11.5px] font-bold tracking-[0.2em] uppercase mb-4 border border-white/20">
                <span className="w-2 h-2 rounded-full bg-[#38bdf8] animate-pulse" />
                READY TO START?
              </div>
              <h2 className="text-[32px] sm:text-[42px] lg:text-[48px] font-extrabold text-white leading-tight mb-3">
                Turn <span className="text-[#38bdf8]">Your Ideas</span> Into Reality
              </h2>
              <p className="text-white/75 text-[14.5px] sm:text-[15.5px] leading-relaxed max-w-[520px]">
                Contact us today and let&apos;s create a better, more beautiful space together.
              </p>
            </div>

            <div className="shrink-0 flex flex-row items-stretch gap-2 sm:gap-3 w-full sm:w-auto">
              <a
                href="#top"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 380, behavior: 'smooth' });
                }}
                className="bg-white text-[#0a6fdb] hover:bg-[#f8fafc] font-bold py-3 sm:py-3.5 px-2.5 sm:px-8 rounded-full text-[12.5px] sm:text-[14.5px] shadow-xl hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-300 inline-flex items-center justify-center gap-1.5 sm:gap-2.5 flex-1 min-w-0 sm:flex-none"
              >
                <span>Get a Free Quote</span>
              </a>
              <a
                href="https://wa.me/918618252233?text=Hi%20Sadaf%20Constructions,%20I%20would%20like%20to%20get%20a%20quote%20for%20my%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25d366] hover:bg-[#20ba59] text-white font-bold py-3 sm:py-3.5 px-2.5 sm:px-8 rounded-full text-[12.5px] sm:text-[14.5px] shadow-xl hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-300 inline-flex items-center justify-center gap-1.5 sm:gap-2.5 flex-1 min-w-0 sm:flex-none"
              >
                <IconWhatsapp className="w-4 h-4 shrink-0" />
                <span>WhatsApp Us</span>
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
