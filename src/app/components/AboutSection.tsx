'use client';
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import CountUp from "react-countup";

const stats = [
  {
    value: 20,
    suffix: "+",
    label: "Projects Delivered",
    color: "from-[#6C63FF] to-[#00D1FF]",
    textColor: "text-[#6C63FF]",
  },
  {
    value: 5,
    suffix: "+",
    label: "Years Experience",
    color: "from-[#00D1FF] to-[#6C63FF]",
    textColor: "text-[#00D1FF]",
  },
  {
    value: 100,
    suffix: "%",
    label: "Client Satisfaction",
    color: "from-[#6C63FF] to-[#00D1FF]",
    textColor: "text-[#6C63FF]",
  },
  {
    value: 24,
    suffix: "/7",
    label: "Support",
    color: "from-[#00D1FF] to-[#6C63FF]",
    textColor: "text-[#00D1FF]",
  },
];

const AboutSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section
      id="about"
      className="relative bg-[#0F0F2D] py-16 px-4 md:px-6 lg:px-16 overflow-hidden text-white"
    >
      {/* Glowing Background Effect (left blob) */}
      <div className="absolute left-0 top-0 w-[250px] h-[200px] bg-[#6C63FF]/30 blur-[150px] pointer-events-none z-0" />

      <div className="relative z-10 container mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Text Content */}
        <div>
          <h2 className="text-4xl lg:text-5xl font-semibold mb-6">
            About Our Company
          </h2>
          <p className="text-lg text-gray-300 mb-4">
            We are a team of passionate professionals dedicated to delivering
            innovative IT solutions. Our mission is to empower businesses with
            cutting-edge technology and exceptional service.
          </p>
          <p className="text-lg text-gray-300">
            With over 5 years of experience and 20+ successful projects, we
            strive to exceed client expectations and drive success.
          </p>
        </div>

        {/* Right Floating Stat Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 place-items-center">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`relative rounded-xl p-[1px] bg-gradient-to-br ${stat.color} hover:scale-105 transition-transform duration-300`}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="bg-[#0F0F2D]/80 backdrop-blur-md rounded-lg p-6 text-center w-[140px] h-[100px] flex flex-col items-center justify-center shadow-[0_0_15px_rgba(108,99,255,0.25)]">
                <h3 className={`text-2xl font-semibold mb-1 ${stat.textColor}`}>
                  <CountUp
                    end={stat.value}
                    duration={2}
                    enableScrollSpy
                    scrollSpyOnce
                  />
                  {stat.suffix}
                </h3>
                <p className="text-sm text-gray leading-tight text-center">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;