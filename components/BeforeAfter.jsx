'use client';

import React, { useState, useRef } from 'react';
import { IconLeft, IconRight, IconLeftRight } from './Icons';
import Reveal from './Reveal';

const comparisons = [
  {
    id: 'kitchen',
    title: 'Kitchen Renovation',
    afterImage: '/BeforeAndAfter/Kitchen Renovation-a.png',
    beforeImage: '/BeforeAndAfter/Kitchen Renovation-b.png',
    altAfter: 'Kitchen after renovation',
    altBefore: 'Kitchen before renovation',
  },
  {
    id: 'bathroom',
    title: 'Bathroom Upgrade',
    afterImage: '/BeforeAndAfter/Bathroom Upgrade-a.png',
    beforeImage: '/BeforeAndAfter/Bathroom Upgrade-b.png',
    altAfter: 'Bathroom after upgrade',
    altBefore: 'Bathroom before upgrade',
  },
  {
    id: 'living',
    title: 'Living Room Makeover',
    afterImage: '/BeforeAndAfter/Living Room Makeover-a.png',
    beforeImage: '/BeforeAndAfter/Living Room Makeover-b.png',
    altAfter: 'Living room after makeover',
    altBefore: 'Living room before makeover',
  },
  {
    id: 'bedroom',
    title: 'Bedroom Refresh',
    afterImage: '/BeforeAndAfter/Bedroom Refresh-a.png',
    beforeImage: '/BeforeAndAfter/Bedroom Refresh-b.png',
    altAfter: 'Bedroom after renovation',
    altBefore: 'Bedroom before renovation',
  },
];

function CompareSlider({ item }) {
  const [sliderPos, setSliderPos] = useState(50);

  return (
    <div className="ba-item">
      <div className="compare">
        {/* After image (base) */}
        <img loading="lazy" src={item.afterImage} alt={item.altAfter} />

        {/* Before image (clipped) */}
        <div
          className="before-wrap"
          style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
        >
          <img loading="lazy" src={item.beforeImage} alt={item.altBefore} />
        </div>

        {/* Badges */}
        <span className="tag b">Before</span>
        <span className="tag a">After</span>

        {/* Vertical divider */}
        <div
          className="divider"
          style={{ left: `${sliderPos}%` }}
        />

        {/* Circle handle */}
        <div
          className="handle"
          style={{ left: `${sliderPos}%` }}
        >
          <IconLeftRight className="w-[18px] h-[18px]" />
        </div>

        {/* Invisible Range slider */}
        <input
          type="range"
          min="0"
          max="100"
          value={sliderPos}
          onChange={(e) => setSliderPos(Number(e.target.value))}
          aria-label={`Compare ${item.title} before and after`}
        />
      </div>
      <h3 className="text-center text-[14.5px] font-semibold mt-4 text-white">
        {item.title}
      </h3>
    </div>
  );
}

export default function BeforeAfter() {
  const trackRef = useRef(null);

  const scroll = (direction) => {
    if (!trackRef.current) return;
    const track = trackRef.current;
    const firstItem = track.firstElementChild;
    const step = (firstItem ? firstItem.offsetWidth : 300) + 24;
    const max = track.scrollWidth - track.clientWidth;
    let next = track.scrollLeft + step * direction;

    if (next > max) next = max;
    if (next < 0) next = 0;

    track.scrollTo({ left: next, behavior: 'smooth' });
  };

  return (
    <section className="section-padding dark-section" id="before-after">
      <div className="container-custom">
        {/* Header */}
        <Reveal className="flex justify-between items-end mb-[30px] gap-5 max-[600px]:flex-col max-[600px]:items-start">
          <div>
            <h2 className="h2-title text-white">
              Before &amp; <span className="accent">After</span>
            </h2>
            <p className="text-[#d4dae4] mt-1.5 text-[15px]">
              Real transformations. Real results.
            </p>
          </div>
          <div className="flex gap-2.5">
            <button
              className="w-11 h-11 rounded-full border-[1.5px] border-white/45 bg-transparent text-white flex items-center justify-center transition-colors duration-200 hover:bg-[#0a6fdb] hover:border-[#0a6fdb]"
              onClick={() => scroll(-1)}
              aria-label="Previous"
            >
              <IconLeft className="w-[18px] h-[18px]" />
            </button>
            <button
              className="w-11 h-11 rounded-full border-[1.5px] border-white/45 bg-transparent text-white flex items-center justify-center transition-colors duration-200 hover:bg-[#0a6fdb] hover:border-[#0a6fdb]"
              onClick={() => scroll(1)}
              aria-label="Next"
            >
              <IconRight className="w-[18px] h-[18px]" />
            </button>
          </div>
        </Reveal>

        {/* Carousel Track */}
        <Reveal delay={150} className="slider-track" ref={trackRef} id="ba">
          {comparisons.map((item) => (
            <CompareSlider key={item.id} item={item} />
          ))}
        </Reveal>
      </div>
    </section>
  );
}
