"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

// @ts-ignore
import { ReactLenis } from "@studio-freight/react-lenis";

import { Mail, Phone, MapPin, Download, Sparkles, ArrowDown } from "lucide-react";
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
      <div className={`min-h-screen transition-colors duration-500 ${
        darkMode ? "bg-[#080d18] text-zinc-50" : "bg-[#f0f4fa] text-[#1a2440]"
      }`}>
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

        {/* HERO */}
        <section id="home" className="min-h-screen flex flex-col justify-center px-6 max-w-7xl mx-auto pt-20 relative overflow-hidden">
          <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-[#427AB5]/12 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-1/4 -right-32 w-[500px] h-[500px] bg-[#F7DD7D]/8 rounded-full blur-3xl pointer-events-none" />

          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-medium mb-8 ${
                darkMode ? "bg-[#427AB5]/15 border-[#427AB5]/30 text-[#FFE8BE]" : "bg-[#427AB5]/10 border-[#427AB5]/30 text-[#406AAF]"
              }`}
            >
              <Sparkles size={14} className={darkMode ? "text-[#F7DD7D]" : "text-[#427AB5]"} />
              Tersedia untuk Proyek Freelance
              <span className="w-2 h-2 rounded-full bg-[#F7DD7D] animate-pulse ml-1" />
            </motion.div>

            <h1 className="text-6xl md:text-8xl font-black tracking-tight leading-[1.05] mb-8">
              <span className={`block ${darkMode ? "text-white" : "text-[#406AAF]"}`}>Muhamad</span>
              <span className="block bg-gradient-to-r from-[#427AB5] via-[#406AAF] to-[#F7DD7D] bg-clip-text text-transparent">Fardan</span>
              <span className={`block text-5xl md:text-7xl font-bold ${darkMode ? "text-[#427AB5]" : "text-[#427AB5]"}`}>Rahmansyah.</span>
            </h1>

            <p className={`max-w-2xl text-lg md:text-xl leading-relaxed mb-10 ${darkMode ? "text-zinc-300/80" : "text-[#1a2440]/70"}`}>
              Mahasiswa Teknik Informatika yang adaptif dan fleksibel. Aktif berorganisasi dan berpengalaman sebagai{" "}
              <span className="text-[#F7DD7D] font-semibold">Social Media Specialist</span>, serta memiliki keahlian dalam{" "}
              <span className="text-[#427AB5] font-semibold">desain grafis</span>,{" "}
              <span className="text-[#F7DD7D] font-semibold">fotografi</span>, dan{" "}
              <span className="text-[#427AB5] font-semibold">pengembangan web</span>.
            </p>

            <div className="flex flex-wrap gap-4 mb-16">
              <a
                href="/docs/CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-[#427AB5] to-[#406AAF] text-white rounded-full font-semibold hover:opacity-90 hover:scale-[1.03] transition-all duration-300 shadow-lg shadow-[#427AB5]/35"
              >
                <Download size={18} /> Download CV
              </a>
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }); }}
                className={`flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold border transition-all duration-300 hover:scale-[1.03] ${
                  darkMode ? "border-[#427AB5]/40 text-[#FFE8BE] hover:border-[#F7DD7D] hover:text-[#F7DD7D]"
                  : "border-[#427AB5]/50 text-[#406AAF] hover:bg-[#427AB5]/8"
                }`}
              >
                Hubungi Saya
              </a>
            </div>

            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
              className="flex items-center gap-2 text-sm text-[#427AB5]/60"
            >
              <ArrowDown size={16} /> Scroll untuk melihat lebih
            </motion.div>
          </motion.div>
        </section>

        <div className="h-px w-full max-w-7xl mx-auto bg-gradient-to-r from-transparent via-[#427AB5]/30 to-transparent" />
        <AboutSection darkMode={darkMode} />
        <div className="h-px w-full max-w-7xl mx-auto bg-gradient-to-r from-transparent via-[#F7DD7D]/30 to-transparent" />
        <ProjectSection />
        <div className="h-px w-full max-w-7xl mx-auto bg-gradient-to-r from-transparent via-[#427AB5]/30 to-transparent" />
        <SkillsSection />
        <div className="h-px w-full max-w-7xl mx-auto bg-gradient-to-r from-transparent via-[#F7DD7D]/30 to-transparent" />
        <CertificatesSection />
        <div className="h-px w-full max-w-7xl mx-auto bg-gradient-to-r from-transparent via-[#427AB5]/30 to-transparent" />

        {/* CONTACT */}
        <section id="contact" className="py-32 px-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#427AB5]/8 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#F7DD7D]/6 rounded-full blur-3xl pointer-events-none" />
          <div className="max-w-7xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center mb-16">
              <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-medium mb-6 ${
                darkMode ? "bg-[#427AB5]/15 border-[#427AB5]/30 text-[#FFE8BE]" : "bg-[#427AB5]/10 border-[#427AB5]/30 text-[#406AAF]"
              }`}>
                <span className="w-2 h-2 rounded-full bg-[#F7DD7D] animate-pulse" />
                Hubungi Saya
              </div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                Mari <span className="bg-gradient-to-r from-[#427AB5] to-[#406AAF] bg-clip-text text-transparent">Terhubung.</span>
              </h2>
              <p className={`text-lg max-w-lg mx-auto ${darkMode ? "text-zinc-400" : "text-[#406AAF]/70"}`}>
                Tersedia untuk peluang kerja paruh waktu atau proyek freelance di bidang IT, Fotografi, dan Multimedia.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.1 }} className="max-w-2xl mx-auto">
              <div className={`p-8 md:p-10 rounded-3xl border backdrop-blur-sm ${
                darkMode ? "border-[#427AB5]/20 bg-[#0d1424]/60" : "border-[#427AB5]/20 bg-white/60"
              }`}>
                <div className="space-y-3">
                  <a href="mailto:danzzrhmnsyh@gmail.com" className={`flex items-center gap-4 p-4 rounded-2xl group transition-all duration-300 ${darkMode ? "hover:bg-[#427AB5]/15" : "hover:bg-[#427AB5]/8"}`}>
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#427AB5] to-[#406AAF] flex items-center justify-center text-white shadow-lg shadow-[#427AB5]/30 group-hover:scale-110 transition-transform">
                      <Mail size={20} />
                    </div>
                    <div>
                      <p className={`text-xs mb-0.5 uppercase tracking-wider font-semibold ${darkMode ? "text-[#F7DD7D]/60" : "text-[#406AAF]/60"}`}>Email</p>
                      <span className="text-base font-medium">danzzrhmnsyh@gmail.com</span>
                    </div>
                  </a>
                  <a href="tel:083879296663" className={`flex items-center gap-4 p-4 rounded-2xl group transition-all duration-300 ${darkMode ? "hover:bg-[#406AAF]/15" : "hover:bg-[#406AAF]/8"}`}>
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#406AAF] to-[#427AB5] flex items-center justify-center text-white shadow-lg shadow-[#406AAF]/30 group-hover:scale-110 transition-transform">
                      <Phone size={20} />
                    </div>
                    <div>
                      <p className={`text-xs mb-0.5 uppercase tracking-wider font-semibold ${darkMode ? "text-[#F7DD7D]/60" : "text-[#406AAF]/60"}`}>WhatsApp</p>
                      <span className="text-base font-medium">083879296663</span>
                    </div>
                  </a>
                  <a href="https://instagram.com/dann.dng" target="_blank" rel="noopener noreferrer" className={`flex items-center gap-4 p-4 rounded-2xl group transition-all duration-300 ${darkMode ? "hover:bg-[#F7DD7D]/10" : "hover:bg-[#F7DD7D]/15"}`}>
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#F7DD7D] to-[#FFE8BE] flex items-center justify-center text-[#406AAF] shadow-lg shadow-[#F7DD7D]/25 group-hover:scale-110 transition-transform">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                      </svg>
                    </div>
                    <div>
                      <p className={`text-xs mb-0.5 uppercase tracking-wider font-semibold ${darkMode ? "text-[#F7DD7D]/60" : "text-[#406AAF]/60"}`}>Instagram</p>
                      <span className="text-base font-medium">@dann.dng</span>
                    </div>
                  </a>
                  <div className="flex items-center gap-4 p-4 rounded-2xl">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#FFE8BE] to-[#F7DD7D] flex items-center justify-center text-[#406AAF] shadow-lg shadow-[#F7DD7D]/20">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <p className={`text-xs mb-0.5 uppercase tracking-wider font-semibold ${darkMode ? "text-[#F7DD7D]/60" : "text-[#406AAF]/60"}`}>Lokasi</p>
                      <span className="text-base font-medium">Jln. Bungursari, Tasikmalaya</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className={`py-10 border-t text-center text-sm ${darkMode ? "border-[#427AB5]/15 text-[#427AB5]/60" : "border-[#427AB5]/20 text-[#427AB5]/70"}`}>
          <p>
            © {new Date().getFullYear()}{" "}
            <span className="bg-gradient-to-r from-[#427AB5] to-[#F7DD7D] bg-clip-text text-transparent font-semibold">
              Muhamad Fardan Rahmansyah
            </span>
            . Built with Next.js & Framer Motion.
          </p>
        </footer>
      </div>
    </ReactLenis>
  );
}