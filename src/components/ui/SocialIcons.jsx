import React from "react";

const socials = [
  { label: 'GitHub', href: 'https://github.com/', icon: <svg width="24" height="24" fill="currentColor" className="inline"><circle cx="12" cy="12" r="10" /></svg> },
  { label: 'LinkedIn', href: 'https://linkedin.com/', icon: <svg width="24" height="24" fill="currentColor" className="inline"><rect x="6" y="6" width="12" height="12" /></svg> },
  { label: 'YouTube', href: 'https://youtube.com/', icon: <svg width="24" height="24" fill="currentColor" className="inline"><rect x="4" y="8" width="16" height="8" /></svg> },
  { label: 'Dev.to', href: 'https://dev.to/', icon: <svg width="24" height="24" fill="currentColor" className="inline"><rect x="6" y="6" width="12" height="12" /></svg> },
  { label: 'Twitter', href: 'https://twitter.com/', icon: <svg width="24" height="24" fill="currentColor" className="inline"><circle cx="12" cy="12" r="10" /></svg> },
];

const SocialIcons = ({ className = '' }) => (
  <div className={`flex gap-4 ${className}`}>
    {socials.map((social) => (
      <a
        key={social.label}
        href={social.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-blue-600 transition"
        aria-label={social.label}
      >
        {social.icon}
      </a>
    ))}
  </div>
);

export default SocialIcons;
