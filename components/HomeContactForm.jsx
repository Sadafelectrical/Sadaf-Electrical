'use client';

import React, { useState } from 'react';
import {
  IconUser,
  IconMail,
  IconPhone,
  IconList,
  IconChat,
  IconCheck,
} from './Icons';

export default function HomeContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Full Home & Villa Renovation',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

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
    const whatsappUrl = `https://wa.me/918618252233?text=${encodedText}`;

    setSubmitted(true);

    if (typeof window !== 'undefined') {
      window.open(whatsappUrl, '_blank');
    }
  };

  return (
    <section className="section-padding bg-[#f5f7fb]" id="contact">
      <div className="container-custom">
        <div className="text-center max-w-[700px] mx-auto mb-10">
          <div className="eyebrow eyebrow-lines">GET IN TOUCH</div>
          <h2 className="h2-title mb-3.5">
            Request a Free <span className="accent">Quote</span>
          </h2>
          <p className="text-[#4b5563] text-[15px]">
            Fill out the form below and our team will get back to you shortly to discuss your project.
          </p>
        </div>

        <div className="max-w-[760px] mx-auto bg-white p-7 sm:p-10 rounded-2xl border border-[#e5e9f0] shadow-[0_8px_32px_rgba(0,0,0,0.05)]">
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

            <div className="pt-2">
              <button
                type="submit"
                className="w-full sm:w-auto bg-gradient-to-r from-[#0c1b2f] to-[#0a6fdb] hover:from-[#0a6fdb] hover:to-[#0c1b2f] text-white font-semibold py-3.5 px-8 rounded-full text-[14px] transition-all duration-300 shadow-lg shadow-[#0a6fdb]/20 hover:shadow-xl hover:shadow-[#0a6fdb]/30 hover:-translate-y-0.5 inline-flex items-center justify-center gap-2.5"
              >
                <span>Send Message</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
