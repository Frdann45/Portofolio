"use client";

import { motion, Variants } from "framer-motion";
import { Code2, Camera, Palette, Users, Sparkles, Terminal } from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};
const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const highlights = [
  {
    icon: <Code2 size={24} className="stroke-[3]" />,
    label: "WEB DEVELOPMENT",
    desc: "Membangun aplikasi web modern, performan, dan berarsitektur bersih.",
    bgColor: "bg-[#00F0FF]",
    textColor: "text-black",
    headerCode: "DEV_01",
  },
  {
    icon: <Camera size={24} className="stroke-[3]" />,
    label: "PHOTOGRAPHY",
    desc: "Mendokumentasikan lanskap, event, astrofotografi, dan momen spesial.",
    bgColor: "bg-[#FF007A]",
    textColor: "text-white",
    headerCode: "CAM_02",
  },
  {
    icon: <Palette size={24} className="stroke-[3]" />,
    label: "GRAPHIC DESIGN",
    desc: "Merancang identitas visual, materi promosi, dan desain multimedia.",
    bgColor: "bg-[#CCFF00]",
    textColor: "text-black",
    headerCode: "DES_03",
  },
  {
    icon: <Users size={24} className="stroke-[3]" />,
    label: "SOCIAL MEDIA",
    desc: "Mengelola strategi konten, keterlibatan audiens, dan kampanye digital.",
    bgColor: "bg-[#FF5722]",
    textColor: "text-white",
    headerCode: "SOC_04",
  },
];

interface AboutProps {
  darkMode?: boolean;
}

export default function AboutSection({ darkMode = true }: AboutProps) {
  return (
    <section id="about" className="py-24 px-4 max-w-7xl mx-auto">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={stagger}
        className="space-y-12"
      >
        {/* Main About Window Box */}
        <motion.div
          variants={fadeUp}
          className={`neo-border-lg neo-shadow-xl ${
            darkMode ? "bg-[#1E1E24] text-white" : "bg-white text-black"
          }`}
        >
          {/* Retro Window Top Bar */}
          <div className="window-header flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Terminal size={16} className="stroke-[3]" />
              <span>C:\FARDAN\PROFILE\ABOUT_ME.TXT</span>
            </div>
            <div className="flex items-center gap-1.5 font-mono text-xs">
              <span className="px-1.5 bg-[#FF007A] text-white neo-border font-black">[ _ ]</span>
              <span className="px-1.5 bg-[#FFE600] text-black neo-border font-black">[ 🗖 ]</span>
              <span className="px-1.5 bg-[#00F0FF] text-black neo-border font-black">[ ✕ ]</span>
            </div>
          </div>

          <div className="p-6 md:p-10 grid md:grid-cols-12 gap-8 items-stretch">
            {/* Left Content Column */}
            <div className="md:col-span-7 flex flex-col justify-between space-y-6">
              <div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-[#00F0FF] text-black neo-border neo-shadow-sm font-mono text-xs font-black uppercase mb-6">
                  <Sparkles size={14} className="stroke-[3]" />
                  <span>02 // TENTANG SAYA</span>
                </div>

                <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-none uppercase mb-6">
                  Mahasiswa Teknik{" "}
                  <span className="bg-[#FFE600] text-black px-2 py-0.5 neo-border inline-block rotate-[-1deg]">
                    Informatika
                  </span>{" "}
                  & Spesialis Media
                </h2>

                <p className={`text-base md:text-lg leading-relaxed font-medium mb-4 ${darkMode ? "text-zinc-200" : "text-zinc-800"}`}>
                  Saya adalah Mahasiswa Teknik Informatika di STMIK DCI Tasikmalaya yang aktif berorganisasi dan adaptif. Menggabungkan logika pemograman perangkat lunak dengan estetika visual multimedia.
                </p>

                <p className={`text-base md:text-lg leading-relaxed font-medium ${darkMode ? "text-zinc-300" : "text-zinc-700"}`}>
                  Berpengalaman sebagai <strong className="bg-[#FF007A] text-white px-1.5 py-0.5 neo-border">Social Media Specialist</strong>, photografer event, serta pengembang web yang berorientasi pada hasil dan fungsionalitas.
                </p>
              </div>

              {/* Stats Boxes (Rigid, Bordered, Retro Style Boxes) */}
              <div className="pt-4 border-t-4 border-black grid grid-cols-3 gap-3 md:gap-4 font-mono">
                <div className="bg-[#FF007A] text-white neo-border neo-shadow p-3 md:p-4 text-center hover:translate-y-[-2px] transition-transform">
                  <div className="text-2xl md:text-4xl font-black">10+</div>
                  <div className="text-[10px] md:text-xs font-bold uppercase tracking-wider mt-1">Proyek Selesai</div>
                </div>

                <div className="bg-[#00F0FF] text-black neo-border neo-shadow p-3 md:p-4 text-center hover:translate-y-[-2px] transition-transform">
                  <div className="text-2xl md:text-4xl font-black">5+</div>
                  <div className="text-[10px] md:text-xs font-bold uppercase tracking-wider mt-1">Organisasi</div>
                </div>

                <div className="bg-[#CCFF00] text-black neo-border neo-shadow p-3 md:p-4 text-center hover:translate-y-[-2px] transition-transform">
                  <div className="text-2xl md:text-4xl font-black">3+</div>
                  <div className="text-[10px] md:text-xs font-bold uppercase tracking-wider mt-1">Tahun Aktif</div>
                </div>
              </div>
            </div>

            {/* Right Side: Retro Info Sticky Box */}
            <div className={`md:col-span-5 neo-border-lg neo-shadow p-6 flex flex-col justify-between ${
              darkMode ? "bg-[#121214]" : "bg-[#FFE600]"
            }`}>
              <div className="space-y-4 font-mono">
                <div className="bg-black text-[#CCFF00] p-3 neo-border text-xs font-bold tracking-widest uppercase">
                  STATUS: [ACTIVE_FREELANCER]
                </div>

                <div className="space-y-2 text-xs font-bold">
                  <div className="flex justify-between border-b-2 border-black pb-1">
                    <span>LOKASI:</span>
                    <span className="font-mono">Tasikmalaya, ID</span>
                  </div>
                  <div className="flex justify-between border-b-2 border-black pb-1">
                    <span>KAMPUS:</span>
                    <span className="font-mono">STMIK DCI</span>
                  </div>
                  <div className="flex justify-between border-b-2 border-black pb-1">
                    <span>PROGRAM:</span>
                    <span className="font-mono">Teknik Informatika</span>
                  </div>
                  <div className="flex justify-between border-b-2 border-black pb-1">
                    <span>FOKUS:</span>
                    <span className="font-mono">Web & Multimedia</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t-2 border-black bg-white text-black p-4 neo-border neo-shadow-sm font-sans">
                <p className="text-xs font-bold uppercase tracking-wide text-zinc-600 mb-1">MOTTO / ETHOS:</p>
                <p className="text-sm font-black italic">
                  "Menghadirkan solusi teknologi presisi tinggi dengan pendekatan desain yang berani dan komunikatif."
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Highlight Cards Grid - Rebuilt into Rigid Retro Window Cards */}
        <div>
          <div className="inline-block bg-black text-[#FFE600] neo-border neo-shadow px-4 py-1.5 font-mono text-sm font-black uppercase mb-6">
            CORE_COMPETENCIES.MODULES
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className={`neo-border-lg neo-shadow hover:translate-x-[-3px] hover:translate-y-[-3px] hover:neo-shadow-lg transition-all duration-200 flex flex-col justify-between ${
                  darkMode ? "bg-[#1E1E24] text-white" : "bg-white text-black"
                }`}
              >
                <div>
                  {/* Card Retro Header Bar */}
                  <div className="window-header flex justify-between items-center text-[10px]">
                    <span>SYS_MOD::{item.headerCode}</span>
                    <div className="flex gap-1">
                      <span className="w-2 h-2 rounded-full bg-[#FF007A] inline-block" />
                      <span className="w-2 h-2 rounded-full bg-[#FFE600] inline-block" />
                    </div>
                  </div>

                  <div className="p-5">
                    <div className={`w-12 h-12 neo-border neo-shadow-sm ${item.bgColor} ${item.textColor} flex items-center justify-center mb-4`}>
                      {item.icon}
                    </div>

                    <h3 className="font-black text-lg tracking-tight uppercase mb-2">
                      {item.label}
                    </h3>

                    <p className={`text-sm font-medium leading-normal ${darkMode ? "text-zinc-300" : "text-zinc-700"}`}>
                      {item.desc}
                    </p>
                  </div>
                </div>

                <div className="px-5 pb-4">
                  <span className="inline-block px-2 py-0.5 bg-black text-white neo-border text-[10px] font-mono font-bold uppercase">
                    MODULE READY
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
