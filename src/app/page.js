import About from '@/components/About';
import Blog from '@/components/Blog';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navber';
import Portfolio from '@/components/Portfolio';
import Skills from '@/components/Skills';
import Testimonials from '@/components/Testimonials';
import React from 'react';

const page = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Portfolio/>
      <Skills/>
      <Testimonials/>
      <Blog/>
      <Contact/>
      <Footer/>
    </div>
  );
};

export default page;