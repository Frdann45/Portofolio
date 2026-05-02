"use client";

import { motion } from "framer-motion";
import { Code2, Camera, Palette, Users } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const highlights = [
  {
    icon: <Code2 size={22} />,
    label: "Web Development",
    desc: "Membangun aplikasi web modern menggunakan teknologi terkini",
    gradient: "from-[#427AB5] to-[#406AAF]",
    glow: "shadow-[#427AB5]/30",
    bg: "bg-[#427AB5]/10",
    border: "border-[#427AB5]/20",
    iconText: "text-white",
  },
  {
    icon: <Camera size={22} />,
    label: "Photography",
    desc: "Menangkap momen berharga dengan kepekaan artistik tinggi",
    gradient: "from-[#406AAF] to-[#427AB5]",
    glow: "shadow-[#406AAF]/30",
    bg: "bg-[#406AAF]/10",
    border: "border-[#406AAF]/20",
    iconText: "text-white",
  },
  {
    icon: <Palette size={22} />,
    label: "Graphic Design",
    desc: "Merancang visual yang estetis dan komunikatif",
    gradient: "from-[#F7DD7D] to-[#FFE8BE]",
    glow: "shadow-[#F7DD7D]/30",
    bg: "bg-[#F7DD7D]/10",
    border: "border-[#F7DD7D]/20",
    iconText: "text-[#406AAF]",
  },
  {
    icon: <Users size={22} />,
    label: "Social Media",
    desc: "Mengelola konten dan strategi media sosial secara profesional",
    gradient: "from-[#FFE8BE] to-[#F7DD7D]",
    glow: "shadow-[#FFE8BE]/20",
    bg: "bg-[#FFE8BE]/10",
    border: "border-[#FFE8BE]/20",
    iconText: "text-[#406AAF]",
  },
];

interface AboutProps {
  darkMode?: boolean;
}

export default function AboutSection({ darkMode = true }: AboutProps) {
  return (
    <section id="about" className="py-32 px-6 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#427AB5]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-7xl mx-auto">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div variants={fadeUp}>
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-medium mb-6 ${
              darkMode ? "bg-[#427AB5]/15 border-[#427AB5]/30 text-[#FFE8BE]" : "bg-[#427AB5]/10 border-[#427AB5]/30 text-[#406AAF]"
            }`}>
              <span className="w-2 h-2 rounded-full bg-[#F7DD7D] animate-pulse" />
              Tentang Saya
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 leading-[1.15]">
              Mahasiswa Teknik{" "}
              <span className="bg-gradient-to-r from-[#427AB5] to-[#F7DD7D] bg-clip-text text-transparent">Aktif dan Berpengalaman</span>
            </h2>
            <p className={`text-lg leading-relaxed mb-6 ${darkMode ? "text-zinc-300/70" : "text-[#1a2440]/70"}`}>
              Saya adalah Mahasiswa Teknik Informatika di STMIK DCI Tasikmalaya yang memiliki semangat tinggi dalam dunia kreatif dan teknologi. Adaptif, fleksibel, dan selalu siap menghadapi tantangan baru.
            </p>
            <p className={`text-lg leading-relaxed mb-8 ${darkMode ? "text-zinc-300/70" : "text-[#1a2440]/70"}`}>
              Aktif dalam berbagai organisasi kemahasiswaan sebagai Social Media Specialist, dengan keahlian di bidang desain grafis, fotografi, dan pengembangan web.
            </p>
            <div className="flex flex-wrap gap-8">
              {[
                { number: "10+", label: "Proyek Selesai" },
                { number: "5+", label: "Organisasi" },
                { number: "3+", label: "Tahun Aktif" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl font-black bg-gradient-to-r from-[#427AB5] to-[#F7DD7D] bg-clip-text text-transparent">{stat.number}</div>
                  <div className={`text-sm mt-1 ${darkMode ? "text-zinc-400" : "text-[#406AAF]/60"}`}>{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={stagger} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((item, i) => (
              <motion.div key={i} variants={fadeUp}
                className={`p-5 rounded-2xl border ${item.border} ${item.bg} backdrop-blur-sm hover:scale-[1.03] transition-all duration-300 group`}>
                <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center ${item.iconText} shadow-lg ${item.glow} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {item.icon}
                </div>
                <h3 className="font-bold text-base mb-1">{item.label}</h3>
                <p className={`text-sm leading-relaxed ${darkMode ? "text-zinc-400" : "text-[#406AAF]/60"}`}>{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
