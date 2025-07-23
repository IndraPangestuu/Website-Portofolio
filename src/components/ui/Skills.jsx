import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const skillsData = [
  {
    category: "Frontend",
    skills: [
      { name: "React", level: 95, icon: "⚛️", color: "#61DAFB" },
      { name: "JavaScript", level: 90, icon: "🟨", color: "#F7DF1E" },
      { name: "TypeScript", level: 85, icon: "🔷", color: "#3178C6" },
      { name: "HTML5", level: 95, icon: "🌐", color: "#E34F26" },
      { name: "CSS3", level: 90, icon: "🎨", color: "#1572B6" },
      { name: "Tailwind CSS", level: 88, icon: "🎨", color: "#06B6D4" },
    ]
  },
  {
    category: "Backend & Tools",
    skills: [
      { name: "Node.js", level: 80, icon: "🟢", color: "#339933" },
      { name: "Python", level: 75, icon: "🐍", color: "#3776AB" },
      { name: "Git", level: 85, icon: "📋", color: "#F05032" },
      { name: "Firebase", level: 78, icon: "🔥", color: "#FFCA28" },
      { name: "MongoDB", level: 70, icon: "🍃", color: "#47A248" },
      { name: "Docker", level: 65, icon: "🐳", color: "#2496ED" },
    ]
  },
  {
    category: "Design & Others",
    skills: [
      { name: "Figma", level: 85, icon: "🎨", color: "#F24E1E" },
      { name: "Adobe XD", level: 80, icon: "🎨", color: "#FF61F6" },
      { name: "Photoshop", level: 75, icon: "🎨", color: "#31A8FF" },
      { name: "UI/UX Design", level: 82, icon: "✨", color: "#FF6B6B" },
      { name: "Responsive Design", level: 90, icon: "📱", color: "#4ECDC4" },
      { name: "Performance Optimization", level: 78, icon: "⚡", color: "#FFE66D" },
    ]
  }
];

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const skillsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="skills" className="py-20 px-6 bg-gray-50 dark:bg-gray-900 dark-transition" ref={skillsRef}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Skills & Expertise</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Mastering modern technologies to create exceptional digital experiences
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {skillsData.map((category, index) => (
            <motion.button
              key={category.category}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === index
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                  : 'glass text-gray-700 dark:text-gray-300 hover:bg-white/20'
              }`}
              onClick={() => setActiveCategory(index)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.category}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {skillsData[activeCategory].skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="glass rounded-2xl p-6 card-hover"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
                rotateX: 5,
              }}
              style={{
                transformStyle: 'preserve-3d',
              }}
            >
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-3" style={{ color: skill.color }}>
                  {skill.icon}
                </span>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                  {skill.name}
                </h3>
              </div>
              
              <div className="mb-2">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Proficiency</span>
                  <span className="text-sm font-bold text-gray-800 dark:text-white">{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <motion.div
                    className="skill-progress"
                    initial={{ width: 0 }}
                    animate={isVisible ? { width: `${skill.level}%` } : { width: 0 }}
                    transition={{ duration: 1.5, delay: index * 0.1 }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {[
            { label: "Projects Completed", value: "50+", icon: "🚀" },
            { label: "Happy Clients", value: "30+", icon: "😊" },
            { label: "Years Experience", value: "3+", icon: "📅" },
            { label: "Technologies", value: "20+", icon: "⚡" },
          ].map((stat) => (
            <motion.div
              key={stat.label}
              className="text-center glass rounded-xl p-6"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-4xl mb-2">{stat.icon}</div>
              <div className="text-3xl font-bold gradient-text mb-1">{stat.value}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;