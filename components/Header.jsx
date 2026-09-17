'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { servicesList } from './servicesData';

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesSubOpen, setIsServicesSubOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const isHomePage = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    if (isHomePage) {
      const sectionIds = ['home', 'about', 'services', 'projects', 'contact'];
      const sections = sectionIds.map(id => document.getElementById(id)).filter(Boolean);

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(entry.target.id);
            }
          });
        },
        { rootMargin: '-45% 0px -50% 0px' }
      );

      sections.forEach((section) => observer.observe(section));

      return () => {
        window.removeEventListener('scroll', handleScroll);
        observer.disconnect();
      };
    } else {
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [isHomePage]);

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsServicesSubOpen(false);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const isHomeActive = isHomePage && activeSection === 'home';
  const isAboutActive = pathname === '/about' || (isHomePage && activeSection === 'about');
  const isServicesActive = pathname === '/services' || (isHomePage && activeSection === 'services');
  const isProjectsActive = pathname === '/projects';
  const isContactActive = pathname === '/contact' || (isHomePage && activeSection === 'contact');

  return (
    <header className={`header sticky top-0 z-[100] bg-[rgba(255,255,255,0.96)] backdrop-blur-md transition-shadow duration-200 ${isScrolled ? 'scrolled shadow-[0_2px_16px_rgba(17,24,39,0.08)]' : ''}`} id="header">
      <div className="container-custom flex items-center justify-between h-[98px] max-[600px]:h-[82px] gap-6">
        <Link href="/" className="flex flex-col items-center shrink-0" aria-label="Sadaf Constructions and Renovations home" onClick={closeMenu}>
          <img src="/sadaf-logo-new.png" alt="Sadaf Constructions" className="h-[56px] max-[600px]:h-[44px] w-auto object-contain" />
          <span className="text-[13px] max-[600px]:text-[11px] font-bold tracking-wide text-[#111827] whitespace-nowrap mt-1">
            Constructions &amp; Renovations
          </span>
        </Link>

        {/* Desktop & Mobile Navigation Links */}
        <nav
          className={`nav-links flex gap-[38px] max-[992px]:fixed max-[992px]:top-[98px] max-[600px]:top-[82px] max-[992px]:left-0 max-[992px]:right-0 max-[992px]:bg-white max-[992px]:flex-col max-[992px]:gap-0 max-[992px]:px-6 max-[992px]:pb-6 max-[992px]:shadow-[0_12px_24px_rgba(17,24,39,0.08)] max-[992px]:max-h-[calc(100vh-98px)] max-[600px]:max-h-[calc(100vh-82px)] max-[992px]:overflow-y-auto max-[992px]:overscroll-contain scrollbar-hide transition-all duration-200 ${
            isMenuOpen
              ? 'max-[992px]:translate-y-0 max-[992px]:opacity-100 max-[992px]:visible'
              : 'max-[992px]:-translate-y-3 max-[992px]:opacity-0 max-[992px]:invisible'
          }`}
          aria-label="Main"
        >
          <Link
            href="/"
            onClick={closeMenu}
            className={`nav-top-link text-[14px] font-medium relative py-1.5 max-[992px]:py-3.5 max-[992px]:border-b max-[992px]:border-[#e5e9f0] transition-colors duration-200 hover:text-[#0a6fdb] ${
              isHomeActive ? 'text-[#0a6fdb] active-nav-link' : 'text-[#111827]'
            }`}
          >
            Home
          </Link>
          <Link
            href="/about"
            onClick={closeMenu}
            className={`nav-top-link text-[14px] font-medium relative py-1.5 max-[992px]:py-3.5 max-[992px]:border-b max-[992px]:border-[#e5e9f0] transition-colors duration-200 hover:text-[#0a6fdb] ${
              isAboutActive ? 'text-[#0a6fdb] active-nav-link' : 'text-[#111827]'
            }`}
          >
            About
          </Link>
          {/* Services - Desktop Dropdown */}
          <div className="hidden min-[993px]:flex items-center relative group py-1.5">
            <Link
              href="/services"
              className={`nav-top-link text-[14px] font-medium relative inline-flex items-center gap-1.5 transition-colors duration-200 hover:text-[#0a6fdb] ${
                isServicesActive ? 'text-[#0a6fdb] active-nav-link' : 'text-[#111827]'
              }`}
            >
              Services
              <svg className="w-3 h-3 transition-transform duration-200 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </Link>

            {/* Dropdown Panel */}
            <div className="absolute left-1/2 -translate-x-1/2 top-full pt-4 opacity-0 invisible -translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-250 z-50">
              <div className="w-[780px] max-w-[90vw] bg-white rounded-2xl shadow-[0_20px_50px_rgba(17,24,39,0.16)] border border-[#e5e9f0] overflow-hidden">
                <div className="grid grid-cols-3 gap-1 p-4 max-h-[65vh] overflow-y-auto">
                  {servicesList.map((service) => (
                    <Link
                      key={service.slug}
                      href={`/services/${service.slug}`}
                      className="group/item flex items-center gap-3 p-3 rounded-xl hover:bg-[#f0f6ff] transition-colors duration-200"
                    >
                      <div className="w-10 h-10 rounded-lg bg-[#f0f6ff] text-[#0a6fdb] flex items-center justify-center shrink-0 group-hover/item:bg-[#0a6fdb] group-hover/item:text-white transition-colors duration-200">
                        {service.icon}
                      </div>
                      <div className="min-w-0">
                        <div className="text-[13.5px] font-bold text-[#111827] truncate">{service.title}</div>
                        <div className="text-[11.5px] text-[#8a94a6] truncate">{service.tagline}</div>
                      </div>
                    </Link>
                  ))}
                </div>
                <Link
                  href="/services"
                  className="flex items-center justify-center gap-1.5 py-3.5 bg-[#f8fafc] border-t border-[#f1f5f9] text-[13px] font-bold text-[#0a6fdb] hover:text-[#0857ad] transition-colors"
                >
                  View All Services
                </Link>
              </div>
            </div>
          </div>

          {/* Services - Mobile Accordion */}
          <div className="min-[993px]:hidden border-b border-[#e5e9f0]">
            <div className="w-full flex items-center justify-between py-3.5">
              <Link
                href="/services"
                onClick={closeMenu}
                className={`text-[14px] font-medium transition-colors duration-200 ${
                  isServicesActive ? 'text-[#0a6fdb]' : 'text-[#111827]'
                }`}
              >
                Services
              </Link>
              <button
                onClick={() => setIsServicesSubOpen(!isServicesSubOpen)}
                className="p-1.5 -mr-1.5 text-[#111827]"
                aria-label="Toggle services list"
                aria-expanded={isServicesSubOpen}
              >
                <svg
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${isServicesSubOpen ? 'rotate-180' : ''}`}
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
            {isServicesSubOpen && (
              <div className="pb-3 space-y-0.5">
                {servicesList.map((service) => (
                  <Link
                    key={service.slug}
                    href={`/services/${service.slug}`}
                    onClick={closeMenu}
                    className="flex items-center gap-2.5 py-2 pl-2 text-[13.5px] text-[#4b5563] hover:text-[#0a6fdb] transition-colors"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#c7d2e0]" />
                    {service.title}
                  </Link>
                ))}
                <Link
                  href="/services"
                  onClick={closeMenu}
                  className="block pt-1 pl-2 text-[13.5px] font-bold text-[#0a6fdb]"
                >
                  View All Services
                </Link>
              </div>
            )}
          </div>
          <Link
            href="/projects"
            onClick={closeMenu}
            className={`nav-top-link text-[14px] font-medium relative py-1.5 max-[992px]:py-3.5 max-[992px]:border-b max-[992px]:border-[#e5e9f0] transition-colors duration-200 hover:text-[#0a6fdb] ${
              isProjectsActive ? 'text-[#0a6fdb] active-nav-link' : 'text-[#111827]'
            }`}
          >
            Projects
          </Link>
          <Link
            href="/contact"
            onClick={closeMenu}
            className={`nav-top-link text-[14px] font-medium relative py-1.5 max-[992px]:py-3.5 max-[992px]:border-b max-[992px]:border-[#e5e9f0] transition-colors duration-200 hover:text-[#0a6fdb] ${
              isContactActive ? 'text-[#0a6fdb] active-nav-link' : 'text-[#111827]'
            }`}
          >
            Contact
          </Link>
          <Link
            href="/contact"
            onClick={closeMenu}
            className="btn btn-primary min-[993px]:hidden mt-4 w-full"
          >
            Get a Quote
          </Link>
        </nav>

        {/* Desktop CTA */}
        <Link href="/contact" className="btn btn-primary max-[992px]:hidden">
          Get a Quote
        </Link>

        {/* Mobile Hamburger Button */}
        <button
          className="menu-toggle hidden max-[992px]:flex bg-transparent border-0 w-11 h-11 items-center justify-center cursor-pointer p-0"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
        >
          <div className="relative w-6 h-[16px] flex items-center justify-center">
            <span
              className={`block w-6 h-0.5 bg-[#111827] transition-all duration-250 absolute ${
                isMenuOpen ? 'bg-transparent' : ''
              }`}
            >
              <span
                className={`block w-6 h-0.5 bg-[#111827] absolute left-0 transition-all duration-250 ${
                  isMenuOpen ? 'top-0 rotate-45' : '-top-[7px]'
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-[#111827] absolute left-0 transition-all duration-250 ${
                  isMenuOpen ? 'top-0 -rotate-45' : 'top-[7px]'
                }`}
              />
            </span>
          </div>
        </button>
      </div>

      <style jsx>{`
        .active-nav-link::after,
        .nav-top-link:hover::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: 0;
          height: 2px;
          width: 100%;
          background: #0a6fdb;
          transition: width 0.25s;
        }
        @media (max-width: 992px) {
          .active-nav-link::after,
          .nav-top-link:hover::after {
            display: none;
          }
        }
      `}</style>
    </header>
  );
}
