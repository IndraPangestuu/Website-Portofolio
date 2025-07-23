import React from "react";

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

const socialIcons = [
  { label: 'GitHub', href: 'https://github.com/', icon: <svg width="20" height="20" fill="currentColor" className="inline"><circle cx="10" cy="10" r="8" /></svg> },
  { label: 'LinkedIn', href: 'https://linkedin.com/', icon: <svg width="20" height="20" fill="currentColor" className="inline"><rect x="4" y="4" width="12" height="12" /></svg> },
  // Tambahkan ikon lain sesuai kebutuhan
];

const Footer = () => {
  return (
    <footer className="bg-white border-t mt-12 py-8 text-center font-sans">
      <nav className="mb-3 flex flex-wrap justify-center gap-8">
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="text-gray-500 text-base font-medium px-2 py-1 rounded hover:text-blue-700 hover:bg-blue-50 transition-colors duration-200"
          >
            {item.label}
          </a>
        ))}
      </nav>
      <div className="flex justify-center gap-5 mb-3">
        {socialIcons.map((icon) => (
          <a
            key={icon.label}
            href={icon.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-700 transition-colors duration-200"
            aria-label={icon.label}
          >
            {icon.icon}
          </a>
        ))}
      </div>
      <small className="block text-xs text-gray-400 tracking-wide">© {new Date().getFullYear()} Nama Anda. All rights reserved.</small>
    </footer>
  );
};

export default Footer;
