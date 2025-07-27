import React from 'react';
import { FaGithub, FaInstagram, FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: <FaGithub />, href: "https://github.com/yourusername" },
    { icon: <FaLinkedinIn />, href: "https://linkedin.com/in/yourusername" },
    { icon: <FaInstagram />, href: "https://www.instagram.com/syntrix.solutions" },
    { icon: <FaFacebookF />, href: "https://facebook.com/yourusername" },
    { icon: <FaTwitter />, href: "https://twitter.com/yourusername" },
  ];

  return (
    <footer className="bg-[#0F0F2D] text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-6">
          {/* Logo Section */}
          <div className="flex items-center gap-3">
            <img src="/syntrix-solutions-logo.png" alt="Syntrix Solutions" className="h-8 w-8" />
            <span className="text-xl font-semibold">Syntrix Solutions</span>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-6">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[#6C63FF] transition-colors duration-300 text-xl"
              >
                {link.icon}
              </a>
            ))}
          </div>

          {/* Divider */}
          <div className="w-full max-w-4xl h-[1px] bg-gray-800"></div>

          {/* Copyright */}
          <div className="text-gray-400 text-sm text-center">
            <p>© {currentYear} Syntrix Solutions. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;