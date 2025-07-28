"use client";

import React, { useEffect } from "react";
import { Globe, Smartphone, Bot, Megaphone } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const services = [
  {
    title: "Web & App Development",
    description: "Building responsive and scalable web and mobile applications.",
    icon: <Globe className="w-10 h-10 text-[#6C63FF]" />,
  },
  {
    title: "Social Media Management",
    description: "Enhancing your online presence with strategic social media solutions.",
    icon: <Smartphone className="w-10 h-10 text-[#6C63FF]" />,
  },
  {
    title: "Custom AI Agents",
    description: "Creating intelligent agents tailored to your business needs.",
    icon: <Bot className="w-10 h-10 text-[#6C63FF]" />,
  },
  {
    title: "Digital Marketing",
    description: "Driving traffic and conversions through SEO, PPC, and content strategy.",
    icon: <Megaphone className="w-10 h-10 text-[#6C63FF]" />,
  },
];

const ServicesSection = () => {
  // Initialize AOS scroll animation
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section
      id="services"
      className="relative bg-[#0F0F2D] py-16 px-4 md:px-6 lg:px-16 overflow-hidden"
    >
      {/* Glowing Effect on the Left */}
      <div className="absolute left-0 top-0 w-[250px] h-[200px] bg-[#6C63FF]/30 blur-[150px] pointer-events-none z-0" />
      <div className="absolute bottom-0 left-0 w-[250px] h-[200px] bg-[#6C63FF]/30 blur-[150px] pointer-events-none z-0" />
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Heading */}
        <h2
          className="text-4xl lg:text-5xl font-bold text-left mb-12 text-white"
          data-aos="fade-right"
        >
          Our Services
        </h2>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="flex flex-col h-full bg-gradient-to-b from-[#0F0F2D] to-[#191947] border border-[#6C63FF]/30 backdrop-blur-lg rounded-xl p-6 shadow-[0_0_15px_rgba(108,99,255,0.3)] hover:shadow-[0_0_25px_rgba(108,99,255,0.6)] transition duration-300"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-2xl font-semibold text-[#6C63FF] mb-2">
                {service.title}
              </h3>
              <p className="text-gray-300 text-base leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;