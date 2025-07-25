"use client";
import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  
  // Updated navLinks with section IDs
  const navLinks = [
    { name: "Home", id: "home" },
    { name: "Services", id: "services" },
    { name: "About", id: "about" },
    { name: "Portfolio", id: "portfolio" },
    { name: "Contact", id: "contact" }
  ];

  // Scroll handling function
  const handleScroll = (id: string) => {
    setMenuOpen(false); // Close mobile menu
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  // Add useEffect to handle body scroll
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup function
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [menuOpen]);

  return (
    <nav className="bg-[#0F0F2D] py-6 px-6 lg:px-16 font-sans shadow-lg fixed w-full z-50">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img src="/syntrix-solutions-logo.png" alt="Logo" className="h-8 w-8" />
          <span className="text-white text-xl font-semibold tracking-normal">
            Syntrix Solutions
          </span>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex items-center gap-10 absolute left-1/2 -translate-x-1/2">
          {navLinks.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => handleScroll(link.id)}
                className="text-gray-200 hover:text-[#6C63FF] transition-colors text-base font-normal cursor-pointer"
              >
                {link.name}
              </button>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <div className="hidden lg:block">
          <button className="bg-gradient-to-r from-[#6C63FF] to-[#00D1FF] text-white px-6 py-3 rounded-lg text-xs font-semibold uppercase transition-all hover:opacity-90 shadow-lg hover:shadow-[#6C63FF]/20">
            Get a Quote
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white text-2xl focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="lg:hidden fixed inset-0 top-[88px] bg-[#0F0F2D]/95 backdrop-blur-sm z-50"
          >
            <div className="container mx-auto py-6 px-6">
              <ul className="flex flex-col gap-6">
                {navLinks.map((link) => (
                  <li key={link.id}>
                    <button
                      onClick={() => handleScroll(link.id)}
                      className="text-gray-200 hover:text-[#6C63FF] transition-colors text-lg font-normal block py-2 w-full text-left"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
                <li className="pt-4">
                  <button className="w-full bg-gradient-to-r from-[#6C63FF] to-[#00D1FF] text-white px-6 py-3 rounded-lg text-xs font-semibold uppercase transition-all hover:opacity-90 shadow-lg hover:shadow-[#6C63FF]/20">
                    Get a Quote
                  </button>
                </li>
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};