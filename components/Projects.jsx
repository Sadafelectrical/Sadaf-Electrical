import React from 'react';
import Link from 'next/link';
import Reveal from './Reveal';

const projectsData = [
  {
    title: 'Complete Flat Renovation',
    location: 'City Apartments',
    image: '/Some of Our Work/Complete Flat Renovation.png',
    alt: 'Complete flat renovation',
  },
  {
    title: 'Modern Kitchen Upgrade',
    location: 'Green View Residency',
    image: '/Some of Our Work/Modern Kitchen Upgrade.png',
    alt: 'Modern kitchen upgrade',
  },
  {
    title: 'Bathroom Renovation',
    location: 'Maple Street',
    image: '/Some of Our Work/Bathroom Renovation.png',
    alt: 'Bathroom renovation',
  },
  {
    title: 'CCTV Installation',
    location: 'Residential Villa',
    image: '/Some of Our Work/CCTV Installation.png',
    alt: 'CCTV installation on a villa wall',
  },
];

export default function Projects() {
  return (
    <section className="section-padding" id="projects">
      <div className="container-custom">
        {/* Header */}
        <Reveal className="flex justify-between items-end mb-8 gap-5 max-[600px]:flex-col max-[600px]:items-start">
          <div>
            <div className="eyebrow">Our Projects</div>
            <h2 className="h2-title">
              Some of Our <span className="accent">Work</span>
            </h2>
          </div>
          <Link href="/projects" className="btn btn-outline-blue">
            View All Projects
          </Link>
        </Reveal>

        {/* Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-[600px]:gap-4">
          {projectsData.map((project, index) => (
            <Reveal key={index} as="article" delay={(index % 4) * 90} className="group cursor-pointer">
              <div className="aspect-[4/3.5] rounded-[4px] overflow-hidden bg-gradient-to-br from-[#dfe6ef] to-[#b7c4d6]">
                <img
                  loading="lazy"
                  src={project.image}
                  alt={project.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="text-[15px] max-[600px]:text-[13.5px] font-bold mt-4 text-[#111827]">
                {project.title}
              </h3>
              <span className="text-[12.5px] text-[#8a94a6] block">
                {project.location}
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
