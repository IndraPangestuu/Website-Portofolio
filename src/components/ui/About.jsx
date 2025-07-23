import React from "react";
import { motion } from "framer-motion";
import SocialIcons from './SocialIcons';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8
      }
    }
  };

  return (
    <section id="about" className="py-20 px-6 bg-gray-50 dark:bg-gray-900 dark-transition">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Left Side - Image/Visual */}
          <motion.div 
            className="relative"
            variants={itemVariants}
          >
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-72 h-72 rounded-full bg-gradient-to-br from-blue-400/20 to-purple-600/20 blur-3xl"></div>
              <div className="absolute -bottom-4 -right-4 w-72 h-72 rounded-full bg-gradient-to-br from-pink-400/20 to-cyan-600/20 blur-3xl"></div>
              
              {/* Profile placeholder */}
              <motion.div 
                className="relative glass rounded-3xl p-8 mx-auto max-w-sm"
                whileHover={{ 
                  scale: 1.02,
                  rotateY: 5,
                  rotateX: 5,
                }}
                style={{
                  transformStyle: 'preserve-3d',
                }}
              >
                <div className="w-64 h-64 mx-auto rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-1">
                  <div className="w-full h-full rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-6xl">
                    👨‍💻
                  </div>
                </div>
                
                {/* Floating elements */}
                <motion.div
                  className="absolute -top-2 -right-2 glass rounded-full p-3"
                  animate={{ 
                    y: [0, -10, 0],
                    rotate: [0, 10, 0]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <span className="text-2xl">⚛️</span>
                </motion.div>
                
                <motion.div
                  className="absolute -bottom-2 -left-2 glass rounded-full p-3"
                  animate={{ 
                    y: [0, 10, 0],
                    rotate: [0, -10, 0]
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                >
                  <span className="text-2xl">🚀</span>
                </motion.div>
                
                <motion.div
                  className="absolute top-1/2 -left-4 glass rounded-full p-3"
                  animate={{ 
                    x: [0, -5, 0],
                    rotate: [0, 15, 0]
                  }}
                  transition={{ 
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2
                  }}
                >
                  <span className="text-2xl">💡</span>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div 
            className="space-y-6"
            variants={itemVariants}
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="gradient-text">About Me</span>
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-6"></div>
            </motion.div>

            <motion.div 
              className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed"
              variants={itemVariants}
            >
              <p className="text-lg">
                Hi! I'm a <span className="font-bold text-blue-600 dark:text-blue-400">Creative Frontend Developer</span> passionate about crafting exceptional digital experiences that combine beautiful design with powerful functionality.
              </p>
              
              <p>
                With <span className="font-semibold text-purple-600 dark:text-purple-400">3+ years of experience</span> in web development, I specialize in building modern, responsive applications using cutting-edge technologies like React, TypeScript, and Tailwind CSS.
              </p>
              
              <p>
                I believe in writing clean, maintainable code and creating user interfaces that not only look stunning but also provide intuitive user experiences. My goal is to bridge the gap between design and technology.
              </p>
            </motion.div>

            {/* Key Points */}
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-8"
              variants={itemVariants}
            >
              {[
                { icon: "🎯", title: "Detail Oriented", desc: "Pixel-perfect implementations" },
                { icon: "⚡", title: "Performance Focused", desc: "Optimized for speed & SEO" },
                { icon: "📱", title: "Mobile First", desc: "Responsive across all devices" },
                { icon: "🚀", title: "Modern Stack", desc: "Latest technologies & frameworks" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="glass rounded-xl p-4 flex items-start space-x-3"
                  whileHover={{ scale: 1.02, y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">{item.title}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA and Social Links */}
            <motion.div 
              className="flex flex-col sm:flex-row items-center gap-6"
              variants={itemVariants}
            >
              <motion.a
                href="#contact"
                className="btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Let's Work Together
              </motion.a>
              
              <SocialIcons className="flex gap-4" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
