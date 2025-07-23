import React, { useEffect, useState } from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";

const greetings = ["Hey, I'm Nama Anda 👋", "Welcome to my portfolio!", "Let's build something great!"];

const Hero = () => {
  const [currentGreeting, setCurrentGreeting] = useState(0);
  const { scrollY } = useViewportScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, 50]);
  const y2 = useTransform(scrollY, [0, 300], [0, -50]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGreeting((prev) => (prev + 1) % greetings.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-white"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="rounded-full bg-white bg-opacity-20 p-6 mb-6"
        style={{ y: y1 }}
        animate={{ rotate: [0, 15, -15, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        <span role="img" aria-label="waving hand" className="text-6xl">👋</span>
      </motion.div>
      <motion.h1
        className="text-5xl font-extrabold mb-4"
        key={currentGreeting}
        style={{ y: y2 }}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.5 }}
      >
        {greetings[currentGreeting]}
      </motion.h1>
      <motion.p
        className="text-xl max-w-xl mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        A Front-End Web Developer passionate about building beautiful UIs.
      </motion.p>
      <div className="space-x-4">
        <a href="#projects" className="inline-block bg-white text-blue-600 font-semibold py-3 px-6 rounded shadow hover:bg-blue-100 transition">
          View Projects
        </a>
        <a href="#contact" className="inline-block border border-white text-white font-semibold py-3 px-6 rounded hover:bg-white hover:text-blue-600 transition">
          Contact Me
        </a>
      </div>
    </motion.section>
  );
};

export default Hero;
