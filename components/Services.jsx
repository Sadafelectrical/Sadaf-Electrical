import React from 'react';
import Link from 'next/link';
import Reveal from './Reveal';
import {
  IconDrop,
  IconBolt,
  IconTools,
  IconHome,
  IconBuilding,
  IconGear,
  IconCctv,
  IconArrow,
} from './Icons';

const servicesData = [
  {
    id: '01',
    slug: 'plumbing-bathroom-remodel',
    title: 'Plumbing',
    description: 'Repairs, installation and complete plumbing solutions.',
    icon: <IconDrop className="w-6 h-6 text-white" />,
    iconBg: 'icon-blue',
    image: '/Services/Plumbing.webp',
    alt: 'Plumbing pipes under a sink',
  },
  {
    id: '02',
    slug: 'electrical-lighting',
    title: 'Electrical',
    description: 'Wiring, lighting, fittings and electrical maintenance.',
    icon: <IconBolt className="w-6 h-6 text-white" />,
    iconBg: 'icon-yellow',
    image: '/Services/Electrical.png',
    alt: 'Electrician wiring a switch box',
  },
  {
    id: '03',
    slug: 'custom-carpentry-joinery',
    title: 'Carpenter',
    description: 'Custom woodwork, doors, wardrobes and more.',
    icon: <IconTools className="w-6 h-6 text-white" />,
    iconBg: 'icon-brown',
    image: '/Services/Carpenter.webp',
    alt: 'Carpenter working with wood',
  },
  {
    id: '04',
    slug: 'full-home-renovation',
    title: 'Home Renovation',
    description: 'Transform your flat with modern and functional designs.',
    icon: <IconHome className="w-6 h-6 text-white" />,
    iconBg: 'icon-green',
    image: '/Services/Home Renovation.png',
    alt: 'Renovated modern living room',
  },
  {
    id: '05',
    slug: 'civil-construction-works',
    title: 'Construction',
    description: 'From small projects to complete builds.',
    icon: <IconBuilding className="w-6 h-6 text-white" />,
    iconBg: 'icon-blue',
    image: '/Services/Construction.png',
    alt: 'Construction site workers',
  },
  {
    id: '06',
    slug: 'metal-fabrication-gates',
    title: 'Fabrication',
    description: 'Custom metal work for your needs.',
    icon: <IconGear className="w-6 h-6 text-white" />,
    iconBg: 'icon-yellow',
    image: '/Services/Fabrication.png',
    alt: 'Metal welding with sparks',
  },
  {
    id: '07',
    slug: 'cctv-camera-installation',
    title: 'Camera Installation',
    description: 'CCTV and security system installation.',
    icon: <IconCctv className="w-6 h-6 text-white" />,
    iconBg: 'icon-brown',
    image: '/Services/Camera Installation.png',
    alt: 'Security CCTV camera',
  },
  {
    id: '08',
    slug: 'custom-projects',
    href: '/services',
    title: 'And Much More',
    description: "We handle custom requests and specialized projects. Let's discuss your vision.",
    icon: <IconArrow className="w-6 h-6 text-white" />,
    iconBg: 'icon-green',
    image: '/Services/And Much More.png',
    alt: 'Custom Projects',
  },
];

export default function Services() {
  return (
    <section className="section-padding section-services" id="services">
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <Reveal className="text-center max-w-[860px] mx-auto mb-11">
          <div className="eyebrow eyebrow-lines">OUR SERVICES</div>
          <h2 className="h2-title mb-3.5">
            Complete Solutions for <span className="accent">Your Home</span>
          </h2>
          <p className="text-[#4b5563] text-[15px]">
            We provide end-to-end construction and renovation services to make your home safer, smarter and more beautiful.
          </p>
        </Reveal>

        {/* Services Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-6">
          {servicesData.map((service, index) => (
            <Reveal key={service.id} as="article" delay={(index % 4) * 90} className="service-card">
              <div className="img">
                <img loading="lazy" src={service.image} alt={service.alt} />
              </div>
              <div className="card-meta">
                <div className={`icon-box ${service.iconBg}`}>{service.icon}</div>
                <div className="card-num">{service.id}</div>
              </div>
              <div className="body flex-1 flex flex-col justify-between">
                <div>
                  <h3>{service.title}</h3>
                  <p className="hidden sm:block">{service.description}</p>
                </div>
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3 mt-3 sm:mt-4">
                  <Link
                    href={service.href || `/services/${service.slug}`}
                    className="btn btn-outline !text-[12px] sm:!text-[13px] !py-2 sm:!py-2.5 !px-2 sm:!px-4 rounded-md flex-1 min-w-0 text-center justify-center font-bold"
                  >
                    View Details
                  </Link>
                  <a
                    href="/contact"
                    className="btn btn-primary !text-[12px] sm:!text-[13px] !py-2 sm:!py-2.5 !px-2 sm:!px-4 rounded-md flex-1 min-w-0 text-center justify-center font-bold"
                  >
                    Contact Now
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Services Footer */}
        <div className="services-footer">
          <div className="handwriting">
            Better Homes
            <br />- Brighter Tomorrows
          </div>
          <Link href="/services" className="btn-view-all">
            View All Services
          </Link>
          <div className="build-text">BUILD &bull; RENOVATE &bull; IMPROVE</div>
        </div>
      </div>
    </section>
  );
}
