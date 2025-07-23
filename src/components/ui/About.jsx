import React from "react";

import SocialIcons from './SocialIcons';

const About = () => {
  return (
    <section id="about" className="max-w-2xl mx-auto text-center py-12">
      <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">About Me</h2>
      <p className="text-gray-600 dark:text-gray-300 mb-6">
        Saya adalah seorang front-end developer yang berfokus pada pembuatan antarmuka web modern, responsif, dan ramah pengguna. Berpengalaman dalam React, Tailwind CSS, dan berbagai tools pengembangan web. Selalu bersemangat untuk belajar teknologi baru dan membangun solusi digital yang impactful.
      </p>
      <SocialIcons className="justify-center" />
    </section>
  );
};

export default About;
