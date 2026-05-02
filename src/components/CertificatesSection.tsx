"use client";

import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.13 } },
};

const certificates = [
  {
    title: "Intro to Software Engineering",
    issuer: "RevoU - Coding Camp",
    description: "Certificate of attendance — a 1-week certified online course offered by RevoU",
    date: "11 July 2025",
    category: "Online Course",
    image: "/images/certificates/revou-intro-software-engineering.jpg",
    gradient: "from-[#7B5EA7] to-[#F7C948]",
    glow: "shadow-[#7B5EA7]/30",
    border: "border-[#7B5EA7]/25",
    accent: "#7B5EA7",
  },
  {
    title: "Introduction to Financial Literacy",
    issuer: "Dicoding Indonesia",
    description: "Sertifikat Kompetensi Kelulusan — Diberikan kepada Muhamad Fardan Rahmansyah",
    date: "18 Maret 2026",
    category: "Online Course",
    image: "/images/certificates/dicoding-financial-literacy.jpg",
    gradient: "from-[#1A3A4A] to-[#2A8C8C]",
    glow: "shadow-[#2A8C8C]/30",
    border: "border-[#2A8C8C]/25",
    accent: "#2A8C8C",
  },
  {
    title: "Belajar Dasar AI",
    issuer: "Dicoding Indonesia",
    description: "Sertifikat Kompetensi Kelulusan — Diberikan kepada Muhamad Fardan Rahmansyah",
    date: "26 Maret 2026",
    category: "Online Course",
    image: "/images/certificates/dicoding-belajar-dasar-ai.jpg",
    gradient: "from-[#1A3A4A] to-[#2A8C8C]",
    glow: "shadow-[#2A8C8C]/30",
    border: "border-[#2A8C8C]/25",
    accent: "#2A8C8C",
  },
  {
    title: "Prompt Engineering untuk Software Developer",
    issuer: "Dicoding Indonesia",
    description: "Sertifikat Kompetensi Kelulusan — Diberikan kepada Muhamad Fardan Rahmansyah",
    date: "29 Maret 2026",
    category: "Online Course",
    image: "/images/certificates/dicoding-prompt-engineering.jpg",
    gradient: "from-[#1A3A4A] to-[#2A8C8C]",
    glow: "shadow-[#2A8C8C]/30",
    border: "border-[#2A8C8C]/25",
    accent: "#2A8C8C",
  },
];

export default function CertificatesSection() {
  const [selectedCert, setSelectedCert] = useState<number | null>(null);

  return (
    <>
      <section id="certificates" className="py-32 px-6 relative overflow-hidden">
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[400px] bg-[#427AB5]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#427AB5]/10 border border-[#427AB5]/25 text-[#427AB5] dark:text-[#FFE8BE] text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-[#F7DD7D] animate-pulse" />
              Penghargaan & Pengalaman
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Sertifikat{" "}
              <span className="bg-gradient-to-r from-[#427AB5] to-[#F7DD7D] bg-clip-text text-transparent">& Pencapaian.</span>
            </h2>
            <p className="opacity-70 text-lg max-w-2xl">
              Dokumentasi perjalanan kontribusi, pencapaian, dan pengalaman selama aktif di dunia organisasi dan kegiatan kampus.
            </p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid sm:grid-cols-2 gap-6">
            {certificates.map((cert, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className={`relative rounded-2xl border ${cert.border} bg-white/5 backdrop-blur-sm hover:shadow-xl ${cert.glow} transition-all duration-500 group overflow-hidden cursor-pointer`}
                onClick={() => setSelectedCert(i)}
              >
                {/* Gradient accent top bar */}
                <div className={`h-1 w-full bg-gradient-to-r ${cert.gradient}`} />

                {/* Certificate Image */}
                <div className="relative w-full aspect-[16/11] overflow-hidden">
                  <Image
                    src={cert.image}
                    alt={`Sertifikat ${cert.title}`}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 dark:bg-zinc-900/90 rounded-full px-4 py-2 flex items-center gap-2 text-sm font-medium shadow-lg backdrop-blur-sm">
                      <ExternalLink size={14} />
                      Lihat Sertifikat
                    </div>
                  </div>
                </div>

                {/* Info */}
                <div className="p-5">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <div>
                      <span
                        className="inline-block px-2.5 py-0.5 text-xs font-semibold rounded-full text-white mb-2"
                        style={{ background: cert.accent }}
                      >
                        {cert.category}
                      </span>
                      <h3 className="font-bold text-base leading-snug">{cert.title}</h3>
                    </div>
                    <div
                      className="flex-shrink-0 w-9 h-9 rounded-xl flex items-center justify-center text-white shadow-lg"
                      style={{ background: `linear-gradient(135deg, ${cert.accent}, ${cert.accent}dd)` }}
                    >
                      <Award size={16} />
                    </div>
                  </div>
                  <p className="text-sm opacity-60 mb-2">{cert.description}</p>
                  <div className="flex items-center justify-between pt-3 border-t border-zinc-500/10">
                    <span className="text-xs opacity-50 font-medium">{cert.issuer}</span>
                    <span className="text-xs opacity-40 font-mono">{cert.date}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedCert !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 cursor-pointer"
          onClick={() => setSelectedCert(null)}
        >
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="relative max-w-4xl w-full max-h-[90vh] cursor-default"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full aspect-[16/11] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={certificates[selectedCert].image}
                alt={`Sertifikat ${certificates[selectedCert].title}`}
                fill
                className="object-contain bg-white"
                sizes="(max-width: 768px) 100vw, 80vw"
                priority
              />
            </div>
            <div className="mt-4 text-center">
              <h3 className="text-white text-lg font-bold">{certificates[selectedCert].title}</h3>
              <p className="text-white/60 text-sm">{certificates[selectedCert].issuer} — {certificates[selectedCert].date}</p>
            </div>
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white flex items-center justify-center text-xl transition-colors backdrop-blur-sm"
              aria-label="Close"
            >
              ✕
            </button>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}
