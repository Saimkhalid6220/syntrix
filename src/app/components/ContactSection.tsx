'use client'
import React, { useState } from "react";
import { HiOutlineMail } from 'react-icons/hi';
import { FiPhone } from 'react-icons/fi';
import { GoLocation } from 'react-icons/go';

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);
    try {
      const res = await fetch("/api/contactform", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setSuccess("Message sent successfully!");
        setForm({ name: "", email: "", message: "" });
      } else {
        setSuccess("Failed to send message.");
      }
    } catch {
      setSuccess("Failed to send message.");
    }
    setLoading(false);
  };

  return (
    <section className="bg-[#0F0F2D] text-white py-20 px-4 md:px-12" id="contact">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">Get In Touch</h2>
        <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
          Have a project in mind or just want to say hello? Reach out to us.
        </p>
        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Form */}
          <form
            className="bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 shadow-xl"
            onSubmit={handleSubmit}
          >
            <div className="mb-6">
              <label htmlFor="name" className="block text-sm mb-2">Name</label>
              <input
                type="text"
                id="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                className="w-full p-3 bg-transparent border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#6C63FF]"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block text-sm mb-2">Email</label>
              <input
                type="email"
                id="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full p-3 bg-transparent border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#6C63FF]"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-sm mb-2">Message</label>
              <textarea
                id="message"
                rows={5}
                value={form.message}
                onChange={handleChange}
                placeholder="Your message..."
                className="w-full p-3 bg-transparent border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#6C63FF]"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-gradient-to-r from-[#6C63FF] to-[#00D1FF] px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
            {success && (
              <p className={`mt-4 text-center ${success.includes("success") ? "text-green-400" : "text-red-400"}`}>
                {success}
              </p>
            )}
          </form>

          {/* Contact Info */}
          <div className="flex flex-col justify-center gap-6 text-sm md:text-base">
            <div className="flex items-start gap-4">
              <HiOutlineMail className="text-[#00D1FF] w-6 h-6" />
              <div>
                <p className="text-gray-300">Email</p>
                <p className="text-white font-medium">info@yourcompany.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <FiPhone className="text-[#00D1FF] w-6 h-6" />
              <div>
                <p className="text-gray-300">Phone</p>
                <p className="text-white font-medium">+92 300 1234567</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <GoLocation className="text-[#00D1FF] w-6 h-6" />
              <div>
                <p className="text-gray-300">Office</p>
                <p className="text-white font-medium">Karachi, Pakistan</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
