import React from 'react';
import { Github, Linkedin, Twitter, Mail, Instagram } from 'lucide-react';

const SocialIcons = ({ className = "" }) => {
  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/IndraPangestuu',
      icon: Github,
      color: 'hover:text-gray-300'
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/matiasindrapangestu/',
      icon: Linkedin,
      color: 'hover:text-blue-400'
    },
    {
      name: 'Twitter',
      href: 'https://twitter.com/indrapangestu',
      icon: Twitter,
      color: 'hover:text-blue-400'
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/mindrapangestu_/',
      icon: Instagram,
      color: 'hover:text-pink-400'
    },
    {
      name: 'Email',
      href: 'mailto:Matiasindrapangestu@gmail.com',
      icon: Mail,
      color: 'hover:text-green-400'
    }
  ];

  return (
    <div className={className}>
      {socialLinks.map((social) => {
        const IconComponent = social.icon;
        return (
          <a
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-gray-300 ${social.color} transition-all duration-300 hover:scale-110 hover:bg-white/20`}
            aria-label={social.name}
          >
            <IconComponent className="w-5 h-5" />
          </a>
        );
      })}
    </div>
  );
};

export default SocialIcons;