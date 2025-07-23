import React from "react";

import Header from '../components/layout/Header';
import Hero from '../components/ui/Hero';
import About from '../components/ui/About';
import Skills from '../components/ui/Skills';
import Projects from '../components/ui/Projects';
import Blog from '../components/ui/Blog';
import ContactForm from '../components/ui/ContactForm';
import Footer from '../components/layout/Footer';
import SmoothScroll from '../components/utils/SmoothScroll';
import ParticleBackground from '../components/ui/ParticleBackground';

const Home = () => {
  return (
    <>
      <ParticleBackground />
      <SmoothScroll />
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Blog />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
};

export default Home;
