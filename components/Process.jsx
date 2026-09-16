import React from 'react';
import { IconChat, IconDoc, IconGear, IconCheck, IconArrow } from './Icons';
import Reveal from './Reveal';

export default function Process() {
  return (
    <section className="section-padding dark-section" id="process">
      <div className="container-custom">
        <Reveal as="h2" className="h2-title text-white">
          Our Process
          <br />
          Simple. Transparent. <span className="accent">Hassle-Free.</span>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] items-start gap-2.5 max-[992px]:gap-y-10 max-[992px]:gap-x-6 mt-11">
          {/* Step 1 */}
          <Reveal className="text-center">
            <div className="w-16 h-16 rounded-full bg-[#0a6fdb] flex items-center justify-center mx-auto mb-5 shadow-[0_0_0_8px_rgba(10,111,219,0.15)] text-white">
              <IconChat className="w-7 h-7" />
            </div>
            <h3 className="text-[18px] font-semibold mb-2 text-white">1. Consultation</h3>
            <p className="text-[14px] text-[#c8d0dc] max-w-[230px] mx-auto">
              We understand your needs and provide expert advice.
            </p>
          </Reveal>

          {/* Arrow 1 */}
          <div className="text-white pt-[22px] hidden lg:flex items-center justify-center">
            <IconArrow className="w-7 h-7" />
          </div>

          {/* Step 2 */}
          <Reveal delay={100} className="text-center">
            <div className="w-16 h-16 rounded-full bg-[#0a6fdb] flex items-center justify-center mx-auto mb-5 shadow-[0_0_0_8px_rgba(10,111,219,0.15)] text-white">
              <IconDoc className="w-7 h-7" />
            </div>
            <h3 className="text-[18px] font-semibold mb-2 text-white">2. Planning &amp; Quote</h3>
            <p className="text-[14px] text-[#c8d0dc] max-w-[230px] mx-auto">
              Get a detailed plan and transparent pricing.
            </p>
          </Reveal>

          {/* Arrow 2 */}
          <div className="text-white pt-[22px] hidden lg:flex items-center justify-center">
            <IconArrow className="w-7 h-7" />
          </div>

          {/* Step 3 */}
          <Reveal delay={200} className="text-center">
            <div className="w-16 h-16 rounded-full bg-[#0a6fdb] flex items-center justify-center mx-auto mb-5 shadow-[0_0_0_8px_rgba(10,111,219,0.15)] text-white">
              <IconGear className="w-7 h-7" />
            </div>
            <h3 className="text-[18px] font-semibold mb-2 text-white">3. Execution</h3>
            <p className="text-[14px] text-[#c8d0dc] max-w-[230px] mx-auto">
              Our skilled team gets to work with quality materials.
            </p>
          </Reveal>

          {/* Arrow 3 */}
          <div className="text-white pt-[22px] hidden lg:flex items-center justify-center">
            <IconArrow className="w-7 h-7" />
          </div>

          {/* Step 4 */}
          <Reveal delay={300} className="text-center">
            <div className="w-16 h-16 rounded-full bg-[#0a6fdb] flex items-center justify-center mx-auto mb-5 shadow-[0_0_0_8px_rgba(10,111,219,0.15)] text-white">
              <IconCheck className="w-7 h-7" />
            </div>
            <h3 className="text-[18px] font-semibold mb-2 text-white">4. Final Inspection</h3>
            <p className="text-[14px] text-[#c8d0dc] max-w-[230px] mx-auto">
              We ensure everything is perfect, before we hand over.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
