"use client";

import { motion, Variants } from "framer-motion";
import { Award, ExternalLink, X, ShieldCheck } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};
const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const certificates = [
  {
    code: "CERT_01",
    title: "Intro to Software Engineering",
    issuer: "RevoU - Coding Camp",
    description: "Certificate of attendance — a 1-week certified online course offered by RevoU",
    date: "11 July 2025",
    category: "Online Course",
    image: "/images/certificates/revou-intro-software-engineering.jpg",
    badgeBg: "bg-[#FF007A] text-white",
  },
  {
    code: "CERT_02",
    title: "Introduction to Financial Literacy",
    issuer: "Dicoding Indonesia",
    description: "Sertifikat Kompetensi Kelulusan — Diberikan kepada Muhamad Fardan Rahmansyah",
    date: "18 Maret 2026",
    category: "Online Course",
    image: "/images/certificates/dicoding-financial-literacy.jpg",
    badgeBg: "bg-[#00F0FF] text-black",
  },
  {
    code: "CERT_03",
    title: "Belajar Dasar AI",
    issuer: "Dicoding Indonesia",
    description: "Sertifikat Kompetensi Kelulusan — Diberikan kepada Muhamad Fardan Rahmansyah",
    date: "26 Maret 2026",
    category: "Online Course",
    image: "/images/certificates/dicoding-belajar-dasar-ai.jpg",
    badgeBg: "bg-[#CCFF00] text-black",
  },
  {
    code: "CERT_04",
    title: "Prompt Engineering untuk Software Developer",
    issuer: "Dicoding Indonesia",
    description: "Sertifikat Kompetensi Kelulusan — Diberikan kepada Muhamad Fardan Rahmansyah",
    date: "29 Maret 2026",
    category: "Online Course",
    image: "/images/certificates/dicoding-prompt-engineering.jpg",
    badgeBg: "bg-[#FFE600] text-black",
  },
];

export default function CertificatesSection() {
  const [selectedCert, setSelectedCert] = useState<number | null>(null);

  return (
    <>
      <section id="certificates" className="py-24 px-4 max-w-7xl mx-auto">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="space-y-10">
          <motion.div variants={fadeUp}>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-[#00F0FF] text-black neo-border neo-shadow-sm font-mono text-xs font-black uppercase mb-4">
              <ShieldCheck size={14} className="stroke-[3]" />
              <span>05 // SERTIFIKAT & PENCAPAIAN</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight">
              CERTIFICATES <span className="bg-[#FFE600] text-black px-2 py-0.5 neo-border inline-block rotate-[1deg]">& CREDENTIALS</span>
            </h2>
          </motion.div>

          {/* Certificate Cards Grid */}
          <div className="grid sm:grid-cols-2 gap-8">
            {certificates.map((cert, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                onClick={() => setSelectedCert(i)}
                className="neo-border-lg neo-shadow-lg bg-white dark:bg-[#1E1E24] text-black dark:text-white cursor-pointer hover:translate-x-[-3px] hover:translate-y-[-3px] hover:neo-shadow-xl transition-all duration-200 overflow-hidden flex flex-col justify-between"
              >
                <div>
                  {/* Card Header Bar */}
                  <div className="window-header flex justify-between items-center">
                    <span className="font-mono text-xs">DOC://{cert.code}_VERIFIED.PDF</span>
                    <Award size={16} className="text-[#FFE600]" />
                  </div>

                  {/* Certificate Image Frame */}
                  <div className="relative w-full aspect-[16/10] neo-border-b bg-black overflow-hidden group">
                    <Image
                      src={cert.image}
                      alt={`Sertifikat ${cert.title}`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 640px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                      <span className="opacity-0 group-hover:opacity-100 bg-[#FF007A] text-white font-mono text-xs font-black px-3 py-1.5 neo-border neo-shadow-sm flex items-center gap-1.5">
                        <ExternalLink size={14} className="stroke-[3]" /> LIHAT FULL
                      </span>
                    </div>
                  </div>

                  {/* Info Details */}
                  <div className="p-6 space-y-3">
                    <div className="flex items-center justify-between gap-2">
                      <span className={`px-2.5 py-0.5 neo-border font-mono text-[10px] font-black uppercase ${cert.badgeBg}`}>
                        {cert.category}
                      </span>
                      <span className="font-mono text-xs font-bold text-zinc-500 dark:text-zinc-400">
                        {cert.date}
                      </span>
                    </div>

                    <h3 className="font-black text-xl uppercase leading-tight">{cert.title}</h3>
                    <p className="text-sm font-medium leading-relaxed opacity-80">{cert.description}</p>
                  </div>
                </div>

                <div className="px-6 py-3 bg-zinc-100 dark:bg-[#121214] border-t-3 border-black font-mono text-xs font-bold flex justify-between items-center">
                  <span>ISSUER: {cert.issuer}</span>
                  <span className="text-[#00F0FF]">VERIFIED 🗸</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Lightbox Modal */}
      {selectedCert !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md p-4 flex items-center justify-center cursor-pointer"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="relative max-w-4xl w-full neo-border-lg neo-shadow-xl bg-[#1E1E24] text-white overflow-hidden cursor-default"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="window-header bg-[#FFE600] text-black">
              <span className="font-mono text-xs font-black">
                CERTIFICATE_VIEWER.EXE // {certificates[selectedCert].code}
              </span>
              <button
                onClick={() => setSelectedCert(null)}
                className="bg-black text-white px-2 py-0.5 neo-border font-mono font-black hover:bg-[#FF007A] transition-colors"
                aria-label="Close"
              >
                <X size={16} className="stroke-[3]" />
              </button>
            </div>

            <div className="relative w-full aspect-[16/10] bg-white p-2 neo-border-b">
              <Image
                src={certificates[selectedCert].image}
                alt={`Sertifikat ${certificates[selectedCert].title}`}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 80vw"
                priority
              />
            </div>

            <div className="p-4 bg-black font-mono text-xs font-bold flex flex-col sm:flex-row justify-between items-center gap-2">
              <div>
                <span className="text-[#FFE600] font-black">{certificates[selectedCert].title}</span> — {certificates[selectedCert].issuer}
              </div>
              <span className="text-[#00F0FF]">{certificates[selectedCert].date}</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
