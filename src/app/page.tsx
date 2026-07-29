"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

// @ts-ignore
import { ReactLenis } from "@studio-freight/react-lenis";

import { Mail, Phone, MapPin, Download, Sparkles, Send, Terminal, Flame, Star } from "lucide-react";
import ProjectSection from "@/components/ProjectSection";
import Navbar from "@/components/Navbar";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import CertificatesSection from "@/components/CertificatesSection";

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <ReactLenis root>
      <div className={`min-h-screen transition-colors duration-300 ${
        darkMode ? "bg-[#121214] text-white" : "bg-[#FFE600] text-black"
      }`}>
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

        {/* HERO SECTION */}
        <section id="home" className="min-h-screen pt-28 pb-16 px-4 max-w-7xl mx-auto flex flex-col justify-center relative overflow-hidden">
          
          {/* Top Marquee Banner */}
          <div className="mb-8 w-full overflow-hidden bg-black text-[#00F0FF] py-2.5 neo-border neo-shadow font-mono text-xs font-black tracking-widest uppercase">
            <div className="animate-marquee whitespace-nowrap flex gap-8">
              <span>⚡ TERSEDIA UNTUK PROYEK FREELANCE</span>
              <span>•</span>
              <span>INFORMATICS ENGINEERING STUDENT</span>
              <span>•</span>
              <span>SOCIAL MEDIA SPECIALIST</span>
              <span>•</span>
              <span>WEB DEVELOPER</span>
              <span>•</span>
              <span>PHOTOGRAPHER & MULTIMEDIA</span>
              <span>•</span>
              <span>STMIK DCI TASIKMALAYA</span>
              <span>•</span>
              <span>⚡ TERSEDIA UNTUK PROYEK FREELANCE</span>
              <span>•</span>
              <span>INFORMATICS ENGINEERING STUDENT</span>
              <span>•</span>
              <span>SOCIAL MEDIA SPECIALIST</span>
              <span>•</span>
              <span>WEB DEVELOPER</span>
              <span>•</span>
              <span>PHOTOGRAPHER & MULTIMEDIA</span>
              <span>•</span>
              <span>STMIK DCI TASIKMALAYA</span>
            </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Main Hero Area */}
            <div className="lg:col-span-8 space-y-6">
              
              {/* Retro Tag Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2.5 px-4 py-2 bg-[#FF007A] text-white neo-border neo-shadow font-mono text-xs font-black uppercase"
              >
                <span className="w-3 h-3 rounded-full bg-[#CCFF00] neo-border animate-ping" />
                <Sparkles size={16} className="stroke-[3]" />
                <span>TERSEDIA UNTUK PROYEK FREELANCE</span>
              </motion.div>

              {/* Big Bold Headline */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="space-y-2"
              >
                <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black uppercase tracking-tight leading-[0.95]">
                  <span className="block text-black bg-[#FFE600] dark:bg-white dark:text-black px-3 py-1 neo-border-lg neo-shadow inline-block mb-2">
                    MUHAMAD
                  </span>
                  <span className="block text-white bg-[#FF007A] px-3 py-1 neo-border-lg neo-shadow inline-block mb-2 rotate-[-1deg]">
                    FARDAN
                  </span>
                  <span className="block text-black bg-[#00F0FF] px-3 py-1 neo-border-lg neo-shadow inline-block rotate-[1deg]">
                    RAHMANSYAH.
                  </span>
                </h1>
              </motion.div>

              {/* Direct Role Description in Retro Window Callout */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className={`neo-border-lg neo-shadow-lg p-6 font-medium ${
                  darkMode ? "bg-[#1E1E24] text-white" : "bg-white text-black"
                }`}
              >
                <div className="window-header -mx-6 -mt-6 mb-4">
                  <span>ROLE_PROFILE.SYS</span>
                  <div className="flex gap-1">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FF007A] inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FFE600] inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#00F0FF] inline-block" />
                  </div>
                </div>

                <p className="text-base md:text-xl leading-relaxed">
                  Mahasiswa Teknik Informatika yang adaptif dan fleksibel. Aktif berorganisasi dan berpengalaman sebagai{" "}
                  <span className="bg-[#FF007A] text-white px-1.5 py-0.5 neo-border font-bold">Social Media Specialist</span>, serta memiliki keahlian dalam{" "}
                  <span className="bg-[#00F0FF] text-black px-1.5 py-0.5 neo-border font-bold">desain grafis</span>,{" "}
                  <span className="bg-[#CCFF00] text-black px-1.5 py-0.5 neo-border font-bold">fotografi</span>, dan{" "}
                  <span className="bg-[#FFE600] text-black px-1.5 py-0.5 neo-border font-bold">pengembangan web</span>.
                </p>
              </motion.div>

              {/* Hard-edged Brutalist Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-wrap gap-4 pt-2"
              >
                <a
                  href="/docs/CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="neo-btn-lg bg-[#00F0FF] text-black px-8 py-4 flex items-center gap-3 text-base"
                >
                  <Download size={20} className="stroke-[3]" />
                  <span>DOWNLOAD CV</span>
                </a>

                <a
                  href="#contact"
                  onClick={(e) => { e.preventDefault(); document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }); }}
                  className="neo-btn-lg bg-[#FF007A] text-white px-8 py-4 flex items-center gap-3 text-base"
                >
                  <Send size={20} className="stroke-[3]" />
                  <span>HUBUNGI SAYA</span>
                </a>
              </motion.div>
            </div>

            {/* Right Side Retro Badges & Floating Widget */}
            <div className="lg:col-span-4 space-y-4">
              <div className="neo-border-lg neo-shadow-lg bg-[#CCFF00] text-black p-6 space-y-4 font-mono">
                <div className="flex justify-between items-center border-b-3 border-black pb-2">
                  <span className="font-black text-sm uppercase">QUICK_STATS</span>
                  <Flame size={18} className="stroke-[3] text-black" />
                </div>

                <div className="space-y-3 font-bold text-xs">
                  <div className="flex justify-between bg-white p-2 neo-border">
                    <span>ROLE:</span>
                    <span className="font-black">WEB DEV & MEDIA</span>
                  </div>
                  <div className="flex justify-between bg-white p-2 neo-border">
                    <span>CAMPUS:</span>
                    <span className="font-black">STMIK DCI TASIKMALAYA</span>
                  </div>
                  <div className="flex justify-between bg-white p-2 neo-border">
                    <span>EXPERIENCE:</span>
                    <span className="font-black">3+ YEARS ACTIVE</span>
                  </div>
                  <div className="flex justify-between bg-white p-2 neo-border">
                    <span>STATUS:</span>
                    <span className="font-black text-[#FF007A]">AVAILABLE 🟢</span>
                  </div>
                </div>
              </div>

              {/* Retro Sticker Badge Grid */}
              <div className="grid grid-cols-2 gap-3 font-mono text-xs font-black uppercase">
                <div className="bg-[#FF007A] text-white p-3 neo-border neo-shadow text-center rotate-[-2deg]">
                  🎯 100% HANDCRAFTED
                </div>
                <div className="bg-[#00F0FF] text-black p-3 neo-border neo-shadow text-center rotate-[2deg]">
                  ⚡ HIGH CONTRAST
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* SECTION DIVIDER BAR */}
        <div className="w-full bg-black text-[#FFE600] py-2 neo-border font-mono text-xs font-black uppercase text-center tracking-widest">
          /// NEO-BRUTALIST PORTFOLIO ARCHITECTURE /// STMIK DCI TASIKMALAYA ///
        </div>

        <AboutSection darkMode={darkMode} />

        <div className="w-full bg-black text-[#00F0FF] py-2 neo-border font-mono text-xs font-black uppercase text-center tracking-widest">
          /// RECENT WORK & VISUAL ARCHIVES ///
        </div>

        <ProjectSection />

        <div className="w-full bg-black text-[#FF007A] py-2 neo-border font-mono text-xs font-black uppercase text-center tracking-widest">
          /// TECHNICAL SKILLS & SYSTEM ENGINE ///
        </div>

        <SkillsSection />

        <div className="w-full bg-black text-[#CCFF00] py-2 neo-border font-mono text-xs font-black uppercase text-center tracking-widest">
          /// CERTIFICATES & OFFICIAL CREDENTIALS ///
        </div>

        <CertificatesSection />

        {/* CONTACT SECTION */}
        <section id="contact" className="py-24 px-4 max-w-7xl mx-auto">
          <div className={`neo-border-lg neo-shadow-xl ${
            darkMode ? "bg-[#1E1E24] text-white" : "bg-white text-black"
          }`}>
            <div className="window-header bg-[#FF007A] text-white">
              <div className="flex items-center gap-2">
                <Terminal size={18} className="stroke-[3]" />
                <span>TERMINAL://CONTACT_STATION.EXE</span>
              </div>
              <div className="flex gap-1.5 font-mono text-xs">
                <span className="px-1.5 bg-black text-white neo-border font-black">[ _ ]</span>
                <span className="px-1.5 bg-[#FFE600] text-black neo-border font-black">[ 🗖 ]</span>
                <span className="px-1.5 bg-[#00F0FF] text-black neo-border font-black">[ ✕ ]</span>
              </div>
            </div>

            <div className="p-6 md:p-12 space-y-8">
              <div className="text-center max-w-2xl mx-auto space-y-4">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-[#FFE600] text-black neo-border neo-shadow-sm font-mono text-xs font-black uppercase">
                  <Star size={14} className="stroke-[3]" />
                  <span>06 // HUBUNGI SAYA</span>
                </div>
                <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight">
                  MARI <span className="bg-[#00F0FF] text-black px-2 py-0.5 neo-border inline-block rotate-[-1deg]">TERHUBUNG.</span>
                </h2>
                <p className="font-mono text-sm font-bold uppercase opacity-80">
                  Tersedia untuk peluang kerja paruh waktu atau proyek freelance di bidang IT, Fotografi, dan Multimedia.
                </p>
              </div>

              {/* Chunky Pressable Contact Cards */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 font-mono">
                
                {/* Email */}
                <a
                  href="mailto:danzzrhmnsyh@gmail.com"
                  className="neo-border-lg neo-shadow p-5 bg-[#00F0FF] text-black hover:bg-[#FF007A] hover:text-white transition-all duration-150 hover:translate-x-[-3px] hover:translate-y-[-3px] hover:neo-shadow-lg flex flex-col justify-between"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className="w-10 h-10 bg-black text-white neo-border flex items-center justify-center">
                      <Mail size={20} className="stroke-[3]" />
                    </div>
                    <span className="text-[10px] font-black uppercase bg-white text-black px-1.5 py-0.5 neo-border">EMAIL</span>
                  </div>
                  <div>
                    <p className="text-[11px] font-black uppercase opacity-70 mb-1">KIRIM EMAIL:</p>
                    <p className="text-xs font-black truncate">danzzrhmnsyh@gmail.com</p>
                  </div>
                </a>

                {/* WhatsApp */}
                <a
                  href="tel:083879296663"
                  className="neo-border-lg neo-shadow p-5 bg-[#CCFF00] text-black hover:bg-[#00F0FF] transition-all duration-150 hover:translate-x-[-3px] hover:translate-y-[-3px] hover:neo-shadow-lg flex flex-col justify-between"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className="w-10 h-10 bg-black text-white neo-border flex items-center justify-center">
                      <Phone size={20} className="stroke-[3]" />
                    </div>
                    <span className="text-[10px] font-black uppercase bg-white text-black px-1.5 py-0.5 neo-border">PHONE / WA</span>
                  </div>
                  <div>
                    <p className="text-[11px] font-black uppercase opacity-70 mb-1">WHATSAPP:</p>
                    <p className="text-sm font-black">083879296663</p>
                  </div>
                </a>

                {/* Instagram */}
                <a
                  href="https://instagram.com/dann.dng"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="neo-border-lg neo-shadow p-5 bg-[#FF007A] text-white hover:bg-[#FFE600] hover:text-black transition-all duration-150 hover:translate-x-[-3px] hover:translate-y-[-3px] hover:neo-shadow-lg flex flex-col justify-between"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className="w-10 h-10 bg-black text-white neo-border flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                      </svg>
                    </div>
                    <span className="text-[10px] font-black uppercase bg-white text-black px-1.5 py-0.5 neo-border">INSTAGRAM</span>
                  </div>
                  <div>
                    <p className="text-[11px] font-black uppercase opacity-80 mb-1">INSTAGRAM HANDAL:</p>
                    <p className="text-sm font-black">@dann.dng</p>
                  </div>
                </a>

                {/* Location */}
                <div className="neo-border-lg neo-shadow p-5 bg-[#FFE600] text-black flex flex-col justify-between">
                  <div className="flex justify-between items-start mb-4">
                    <div className="w-10 h-10 bg-black text-white neo-border flex items-center justify-center">
                      <MapPin size={20} className="stroke-[3]" />
                    </div>
                    <span className="text-[10px] font-black uppercase bg-white text-black px-1.5 py-0.5 neo-border">LOCATION</span>
                  </div>
                  <div>
                    <p className="text-[11px] font-black uppercase opacity-70 mb-1">LOKASI SAYA:</p>
                    <p className="text-xs font-black">Bungursari, Tasikmalaya</p>
                  </div>
                </div>

              </div>
            </div>

            <div className="bg-black text-[#FFE600] p-4 neo-border-t font-mono text-xs font-bold text-center">
              [DISPATCHER READY — RESPONSE TIME WITHIN 24 HOURS]
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className={`py-12 px-4 neo-border-t font-mono text-center text-xs font-bold ${
          darkMode ? "bg-[#121214] text-white" : "bg-[#FFE600] text-black"
        }`}>
          <div className="max-w-7xl mx-auto space-y-4">
            <div className="inline-block bg-black text-[#00F0FF] px-4 py-2 neo-border neo-shadow">
              © {new Date().getFullYear()} MUHAMAD FARDAN RAHMANSYAH • NEO-BRUTALIST EDITION
            </div>
            <p className="uppercase tracking-wide opacity-80">
              BUILT WITH NEXT.JS 16, TAILWIND CSS & FRAMER MOTION // DESIGNED WITH ANTU GRAVITY NEO-BRUTALISM
            </p>
          </div>
        </footer>

      </div>
    </ReactLenis>
  );
}
