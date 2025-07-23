import React from "react";

const skills = [
  { name: 'HTML', icon: <span>🌐</span> },
  { name: 'CSS', icon: <span>🎨</span> },
  { name: 'JavaScript', icon: <span>🟨</span> },
  { name: 'React', icon: <span>⚛️</span> },
  { name: 'SASS', icon: <span>💅</span> },
  { name: 'Git', icon: <span>🔧</span> },
  { name: 'SEO', icon: <span>🔍</span> },
  { name: 'WordPress', icon: <span>📝</span> },
];

const Skills = () => {
  return (
    <section id="skills" className="max-w-3xl mx-auto py-12">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-900 dark:text-gray-100">Tech Stack & Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 justify-items-center">
        {skills.map((skill) => (
          <div key={skill.name} className="flex flex-col items-center">
            <div className="text-3xl mb-2">{skill.icon}</div>
            <span className="text-gray-700 dark:text-gray-300 font-medium">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
