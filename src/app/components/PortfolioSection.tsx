'use client'
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const portfolioItems = [
  {
    id: 1,
    title: "AI Chatbot",
    description: "Custom-trained AI chatbot for e-commerce support.",
    // image: "/portfolio/chatbot.png",
    tech: ["Next.js", "OpenAI", "TailwindCSS"],
    link: "https://your-site.com/chatbot"
  },
  {
    id: 2,
    title: "Mobile App UI",
    description: "Sleek cross-platform finance app UI.",
    // image: "/portfolio/app-ui.png",
    tech: ["React Native", "Figma"],
    link: "https://your-site.com/app"
  },
  {
    id: 3,
    title: "Admin Dashboard",
    description: "Analytics dashboard for SaaS company.",
    // image: "/portfolio/dashboard.png",
    tech: ["Next.js", "Chart.js", "TailwindCSS"],
    link: "https://your-site.com/dashboard"
  }
];

export default function PortfolioSection() {
  return (
    <section className="bg-[#0F0F2D] py-16 px-4 md:px-12" id="portfolio">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Portfolio</h2>
        <p className="text-gray-400 text-lg mb-12">
          A glimpse into what we've built for our clients.
        </p>
        <div className="grid md:grid-cols-3 gap-10">
          {portfolioItems.map(item => (
            <motion.div
              key={item.id}
              className="rounded-2xl overflow-hidden shadow-xl backdrop-blur-sm bg-white/5 border border-white/10 hover:scale-[1.02] transition-transform duration-300"
              whileHover={{ scale: 1.03 }}
            >
              <Image
                src={""}
                alt={item.title}
                width={500}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-5 text-left">
                <h3 className="text-white text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-400 mb-3">{item.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tech.map(tech => (
                    <span
                      key={tech}
                      className="bg-[#6C63FF]/20 text-[#6C63FF] text-xs px-2 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={item.link}
                  target="_blank"
                  className="text-[#00D1FF] hover:underline text-sm"
                >
                  View Project →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
