"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

// Menyembunyikan error TypeScript untuk library Lenis
// @ts-ignore
import { ReactLenis } from "@studio-freight/react-lenis";

// Import Lucide React TANPA Instagram (bebas error)
import { Sun, Moon, Mail, Phone, MapPin, Download } from "lucide-react";
import ProjectSection from "@/components/ProjectSection";

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(true);

  // Mengatur transisi dark mode ke elemen root HTML
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <ReactLenis root>
      <div className={`min-h-screen transition-colors duration-500 ${darkMode ? 'bg-zinc-950 text-zinc-50' : 'bg-zinc-50 text-zinc-900'}`}>
        
        {/* Navbar Sticky */}
        <nav className="fixed top-0 w-full z-50 backdrop-blur-md border-b border-zinc-500/10 bg-inherit/80 px-6 py-4">
          <div className="max-w-6xl mx-auto flex justify-between items-center">
            <span className="font-bold text-xl tracking-tighter">Portofolio Fardan.</span>
            <div className="flex items-center gap-6">
              <button 
                onClick={() => setDarkMode(!darkMode)} 
                className="p-2 rounded-full bg-zinc-500/10 hover:bg-zinc-500/20 transition"
                aria-label="Toggle Dark Mode"
              >
                {darkMode ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="min-h-screen flex flex-col justify-center px-6 max-w-6xl mx-auto pt-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-[1.1] mb-6">
              Muhamad Fardan <br />
              <span className="text-zinc-500 font-medium">Rahmansyah.</span>
            </h1>
            <p className="max-w-2xl text-lg md:text-xl opacity-80 leading-relaxed mb-8">
              Mahasiswa Teknik Informatika semester empat yang adaptif dan fleksibel. Aktif berorganisasi dan berpengalaman dalam Social Media Specialist, serta memiliki keahlian dalam desain grafis, fotografi, dan pengembangan web.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="/docs/CV.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-zinc-900 dark:bg-zinc-50 text-zinc-50 dark:text-zinc-900 rounded-full font-medium hover:opacity-80 transition"
              >
                <Download size={18} /> Download CV
              </a>
            </div>
          </motion.div>
        </section>

        {/* Bagian Proyek (Memanggil komponen eksternal) */}
        <ProjectSection />

        {/* Contact Section */}
        <section id="contact" className="py-32 px-6 border-t border-zinc-500/10 bg-zinc-500/5">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tighter">Mari Terhubung.</h2>
              <p className="opacity-70 mb-10 text-lg max-w-md">
                Tersedia untuk peluang kerja paruh waktu atau proyek freelance di bidang IT, Fotografi, dan Multimedia.
              </p>
              
              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-center gap-4 group">
                  <div className="p-3 bg-zinc-500/10 rounded-full group-hover:bg-zinc-500/20 transition-colors">
                    <Mail size={20} />
                  </div>
                  <span className="text-lg">danzzrhmnsyh@gmail.com</span>
                </div>
                
                {/* Telepon / WA */}
                <div className="flex items-center gap-4 group">
                  <div className="p-3 bg-zinc-500/10 rounded-full group-hover:bg-zinc-500/20 transition-colors">
                    <Phone size={20} />
                  </div>
                  <span className="text-lg">083879296663</span>
                </div>

                {/* Instagram Menggunakan SVG Murni */}
                <a 
                  href="https://instagram.com/dann.dng" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-4 group hover:opacity-80 transition-opacity w-fit"
                >
                  <div className="p-3 bg-zinc-500/10 rounded-full group-hover:bg-zinc-500/20 transition-colors">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                    </svg>
                  </div>
                  <span className="text-lg font-medium">@dann.dng</span>
                </a>

                {/* Lokasi */}
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-zinc-500/10 rounded-full">
                    <MapPin size={20} />
                  </div>
                  <span className="text-lg">jln.Bungursari, Tasikmalaya</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 border-t border-zinc-500/10 text-center opacity-50 text-sm">
          <p>© {new Date().getFullYear()} Muhamad Fardan Rahmansyah. Built with Next.js & Framer Motion.</p>
        </footer>
      </div>
    </ReactLenis>
  );
}