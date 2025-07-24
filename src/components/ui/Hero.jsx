import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const greetings = [
  "Hey, I'm a Creative Developer 👋", 
  "Welcome to my Digital Universe!", 
  "Let's Build Something Extraordinary!"
];

const Hero = () => {
  const [currentGreeting, setCurrentGreeting] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, 50]);
  const y2 = useTransform(scrollY, [0, 300], [0, -50]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGreeting((prev) => (prev + 1) % greetings.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <motion.section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden"
      style={{ opacity }}
    >
      {/* Animated Background */}
      <div className="absolute inset-0 animated-gradient pointer-events-none z-0"></div>
      
      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <motion.div
          className="absolute w-96 h-96 rounded-full bg-white bg-opacity-10 blur-3xl"
          style={{
            left: `${mousePosition.x * 0.1}%`,
            top: `${mousePosition.y * 0.1}%`,
          }}
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute w-64 h-64 rounded-full bg-purple-400 bg-opacity-20 blur-2xl"
          style={{
            right: `${mousePosition.x * 0.05}%`,
            bottom: `${mousePosition.y * 0.05}%`,
          }}
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-white">
        {/* Profile Image/Avatar Placeholder */}
        <motion.div
          className="glass rounded-full p-8 mb-8 inline-block glow-hover"
          style={{ y: y1 }}
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ 
            duration: 1,
            type: "spring",
            stiffness: 100,
            damping: 15
          }}
        >
          <motion.div
            className="w-32 h-32 rounded-full bg-gradient-to-br from-white/30 to-white/10 flex items-center justify-center text-6xl float"
            whileHover={{ 
              scale: 1.1,
              rotate: [0, -10, 10, -10, 0],
              transition: { duration: 0.5 }
            }}
          >
            <span role="img" aria-label="waving hand">👨‍💻</span>
          </motion.div>
        </motion.div>

        {/* Greeting Text */}
        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-shadow-lg"
          key={currentGreeting}
          style={{ y: y2 }}
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -50, scale: 1.2 }}
          transition={{ 
            duration: 0.8,
            type: "spring",
            stiffness: 100
          }}
        >
          {greetings[currentGreeting]}
        </motion.h1>

        {/* Subtitle */}
        <motion.div
          className="max-w-3xl mx-auto mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <p className="text-xl md:text-2xl text-white/90 font-light leading-relaxed">
            Crafting <span className="font-bold text-yellow-300">pixel-perfect</span> experiences with 
            <span className="font-bold text-pink-300"> modern technologies</span> and 
            <span className="font-bold text-cyan-300"> creative solutions</span>
          </p>
        </motion.div>

        {/* Call to Action Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <motion.a
            href="#projects"
            className="btn-primary text-lg px-8 py-4 glow-hover will-animate"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(102, 126, 234, 0.4)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            Explore My Work
          </motion.a>
          
          <motion.a
            href="#contact"
            className="glass border-2 border-white/30 text-white font-semibold text-lg px-8 py-4 rounded-full hover:bg-white/10 transition-all duration-300 glow-hover will-animate"
            whileHover={{ 
              scale: 1.05,
              backgroundColor: "rgba(255, 255, 255, 0.1)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            Let's Connect
          </motion.a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <motion.div
            className="flex flex-col items-center text-white/70 cursor-pointer"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
          >
            <span className="text-sm mb-2">Scroll Down</span>
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
