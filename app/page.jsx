import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import BeforeAfter from '../components/BeforeAfter';
import About from '../components/About';
import Process from '../components/Process';
import Projects from '../components/Projects';
import Testimonials from '../components/Testimonials';
import Cta from '../components/Cta';
import HomeContactForm from '../components/HomeContactForm';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <BeforeAfter />
        <About />
        <Process />
        <Projects />
        <Testimonials />
        <Cta />
        <HomeContactForm />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
