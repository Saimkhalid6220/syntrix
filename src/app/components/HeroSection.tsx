"use client";

import React from "react";
import Image from "next/image";

const HeroSection = () => {
  // Add scroll handling function
  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section id="home" className="relative min-h-screen w-full bg-[#0F0F2D] pt-20 md:pt-24 px-4 md:px-6 lg:px-16 overflow-hidden">
      {/* Glow Effect */}
      <div className="absolute top-1/2 -translate-y-1/2 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] rounded-full bg-[#4066ff]/20 blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto min-h-[calc(100vh-80px)] flex flex-col lg:grid lg:grid-cols-2 items-center gap-0 lg:gap-8 relative">
        {/* Image Section - Adjusted top margin */}
        <div className="relative order-1 lg:order-2 mt-6 md:mt-8 lg:mt-0 mb-2 lg:mb-0">
          <Image
            src="/syntrix-hero.png"
            alt="Digital Vision Illustration"
            width={600}
            height={600}
            className="w-full max-w-[280px] sm:max-w-[300px] md:max-w-[320px] lg:max-w-full h-auto relative z-10 mx-auto"
            priority
          />
        </div>

        {/* Text Content */}
        <div className="text-center lg:text-left space-y-3 md:space-y-4 order-2 lg:order-1 -mt-2 lg:mt-0">
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white leading-tight">
            Empowering Your Digital Vision
          </h1>
          <p className="text-base sm:text-lg text-gray-300 font-normal max-w-xl mx-auto lg:mx-0">
            We build smart solutions for smarter businesses.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-4">
            <button
              onClick={() => handleScroll('services')}
              className="bg-gradient-to-r from-[#6C63FF] to-[#00D1FF] text-white px-6 sm:px-8 py-3 rounded-full font-medium text-base sm:text-lg transition-all hover:shadow-lg hover:shadow-blue-500/30 w-full sm:w-auto text-center"
            >
              Our Services
            </button>
            <button
              onClick={() => handleScroll('portfolio')}
              className="bg-transparent border-2 border-white/20 text-white px-6 sm:px-8 py-3 rounded-full font-medium text-base sm:text-lg transition-all hover:bg-white/10 w-full sm:w-auto text-center"
            >
              View Portfolio
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;