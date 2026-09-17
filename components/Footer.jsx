import React from 'react';
import Link from 'next/link';
import {
  IconPhone,
  IconMail,
  IconPin,
  IconFacebook,
  IconInstagram,
  IconWhatsapp,
} from './Icons';

export default function Footer({
  showCta = false,
  ctaTitle = 'Ready to start your next project?',
  ctaSubtitle = 'Get a free consultation and a written quote from our team today.',
  ctaPrimaryLabel = 'Get a Free Quote',
  ctaPrimaryHref = '/contact',
  ctaWhatsappText = 'Hi Sadaf Constructions, I would like to get a free quote.',
}) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#f8fafc] border-t border-[#e5e9f0] overflow-hidden">
      {/* Glowing CTA strip */}
      {showCta && (
        <div className="relative bg-gradient-to-r from-[#0c1b2f] via-[#0e2138] to-[#0a6fdb] overflow-hidden">
          <div className="absolute inset-0 opacity-[0.07] pointer-events-none bg-[radial-gradient(white_1px,transparent_1px)] [background-size:22px_22px]" />
          <div className="container-custom relative z-10 py-8 sm:py-10 flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-5 text-center sm:text-left">
            <div>
              <h3 className="text-white text-[18px] sm:text-[22px] font-extrabold mb-1 leading-snug">
                {ctaTitle}
              </h3>
              <p className="text-white/75 text-[13px] sm:text-[14px]">
                {ctaSubtitle}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto shrink-0">
              <Link
                href={ctaPrimaryHref}
                className="bg-white text-[#0a6fdb] hover:bg-[#f1f5f9] font-bold px-6 py-3 rounded-full text-[13.5px] transition-all duration-300 shadow-lg hover:-translate-y-0.5 w-full sm:w-auto text-center"
              >
                {ctaPrimaryLabel}
              </Link>
              <a
                href={`https://wa.me/919900281433?text=${encodeURIComponent(ctaWhatsappText)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] hover:bg-[#20ba59] text-white font-bold px-5 py-3 rounded-full text-[13.5px] transition-all duration-300 shadow-lg hover:-translate-y-0.5 w-full sm:w-auto inline-flex items-center justify-center gap-2"
              >
                <IconWhatsapp className="w-4 h-4" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Subtle blueprint watermark */}
      <div className={`absolute ${showCta ? 'top-[92px]' : 'top-0'} left-0 w-full h-full opacity-[0.035] pointer-events-none bg-[radial-gradient(#0a6fdb_1px,transparent_1px)] [background-size:26px_26px]`} />

      <div className="container-custom relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1.2fr] gap-x-10 gap-y-12 pt-16 sm:pt-20 pb-12 sm:pb-14">
        {/* Brand info */}
        <div>
          <Link href="/" className="inline-block" aria-label="Sadaf Constructions home">
            <img src="/sadaf-logo-new.png" alt="Sadaf Constructions" className="h-[62px] max-[600px]:h-[52px] w-auto object-contain" />
          </Link>
          <p className="text-[14px] text-[#4b5563] mt-4 max-w-[300px] leading-relaxed">
            Building better homes with quality, trust and expertise. Your vision. Our work.
          </p>

          <div className="flex gap-2.5 mt-6">
            <a
              href="https://www.facebook.com/share/19MSNnnddi/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-9 h-9 rounded-full bg-[#f0f6ff] border border-[#dbeafe] text-[#0a6fdb] flex items-center justify-center transition-all duration-250 hover:bg-[#0a6fdb] hover:text-white hover:-translate-y-0.5 hover:shadow-md"
            >
              <IconFacebook className="w-4 h-4" />
            </a>
            <a
              href="https://www.instagram.com/mohammed1682000"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-9 h-9 rounded-full bg-[#f0f6ff] border border-[#dbeafe] text-[#0a6fdb] flex items-center justify-center transition-all duration-250 hover:bg-[#0a6fdb] hover:text-white hover:-translate-y-0.5 hover:shadow-md"
            >
              <IconInstagram className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Quick links */}
        <div>
          <h4 className="text-[15px] font-bold mb-5 text-[#111827] relative inline-block">
            Quick Links
            <span className="absolute -bottom-2 left-0 w-8 h-[3px] rounded-full bg-[#0a6fdb]" />
          </h4>
          <ul className="space-y-[11px] mt-3">
            {[
              { href: '/', label: 'Home' },
              { href: '/about', label: 'About Us' },
              { href: '/services', label: 'Services' },
              { href: '/projects', label: 'Projects' },
              { href: '/contact', label: 'Contact' },
            ].map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="group text-[14px] text-[#4b5563] hover:text-[#0a6fdb] transition-colors duration-200 inline-flex items-center gap-2"
                >
                  <span className="w-1 h-1 rounded-full bg-[#c7d2e0] group-hover:bg-[#0a6fdb] transition-colors duration-200" />
                  <span className="group-hover:translate-x-0.5 transition-transform duration-200">
                    {link.label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-[15px] font-bold mb-5 text-[#111827] relative inline-block">
            Our Services
            <span className="absolute -bottom-2 left-0 w-8 h-[3px] rounded-full bg-[#0a6fdb]" />
          </h4>
          <ul className="space-y-[11px] mt-3">
            {[
              'Plumbing',
              'Electrical',
              'Carpenter',
              'Home Renovation',
              'Construction',
              'Fabrication',
              'Camera Installation',
            ].map((service) => (
              <li key={service}>
                <Link
                  href="/services"
                  className="group text-[14px] text-[#4b5563] hover:text-[#0a6fdb] transition-colors duration-200 inline-flex items-center gap-2"
                >
                  <span className="w-1 h-1 rounded-full bg-[#c7d2e0] group-hover:bg-[#0a6fdb] transition-colors duration-200" />
                  <span className="group-hover:translate-x-0.5 transition-transform duration-200">
                    {service}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div className="mb-6 sm:mb-0">
          <h4 className="text-[15px] font-bold mb-5 text-[#111827] relative inline-block">
            Contact Us
            <span className="absolute -bottom-2 left-0 w-8 h-[3px] rounded-full bg-[#0a6fdb]" />
          </h4>
          <ul className="space-y-5 mt-4">
            <li className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-full bg-[#f0f6ff] border border-[#dbeafe] text-[#0a6fdb] flex items-center justify-center shrink-0 mt-0.5">
                <IconPhone className="w-4 h-4" />
              </div>
              <div className="flex flex-col gap-1.5">
                <a href="tel:+919900281433" className="text-[14px] text-[#4b5563] hover:text-[#0a6fdb] transition-colors duration-200 font-medium">
                  +91 99002 81433
                </a>
                <a href="tel:+919742555023" className="text-[14px] text-[#4b5563] hover:text-[#0a6fdb] transition-colors duration-200 font-medium">
                  +91 97425 55023
                </a>
                <a href="tel:+919741931730" className="text-[14px] text-[#4b5563] hover:text-[#0a6fdb] transition-colors duration-200 font-medium">
                  +91 97419 31730
                </a>
              </div>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#f0f6ff] border border-[#dbeafe] text-[#0a6fdb] flex items-center justify-center shrink-0">
                <IconMail className="w-4 h-4" />
              </div>
              <a href="mailto:sadafelectrical786@gmail.com" className="text-[14px] text-[#4b5563] hover:text-[#0a6fdb] transition-colors duration-200 font-medium break-all">
                sadafelectrical786@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#f0f6ff] border border-[#dbeafe] text-[#0a6fdb] flex items-center justify-center shrink-0">
                <IconPin className="w-4 h-4" />
              </div>
              <span className="text-[14px] text-[#4b5563] font-medium">Koramangala, Bengaluru, Karnataka 560030</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-[#e5e9f0]">
        <div className="container-custom relative z-10 !py-6 max-[600px]:!pt-4 max-[600px]:!pb-5 flex justify-between items-center gap-3 flex-wrap max-[600px]:flex-col max-[600px]:text-center text-[12.5px] text-[#8a94a6]">
          <span>&copy; {currentYear} Sadaf Constructions and Renovations. All Rights Reserved.</span>
          <span className="flex flex-col sm:flex-row items-center gap-0.5 sm:gap-0 text-[12.5px]">
            <span className="whitespace-nowrap">
              Built with <span className="text-[#e11d48]">&hearts;</span> for better homes
            </span>
            <span className="hidden sm:inline mx-1.5 text-[#c7d2e0]">&bull;</span>
            <span className="whitespace-nowrap">
              Developed by{' '}
              <a
                href="https://nexa-solutions.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-[#0a6fdb] hover:text-[#0857ad] transition-colors"
              >
                Nexa Solutions
              </a>
            </span>
          </span>
        </div>
      </div>
    </footer>
  );
}
