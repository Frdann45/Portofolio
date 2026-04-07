"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
// Menambahkan ikon ChevronLeft (Kiri) dan ChevronRight (Kanan)
import { Camera, Users, GraduationCap, Film, Image as ImageIcon, X, ChevronLeft, ChevronRight } from "lucide-react";

export default function ProjectSection() {
  // State baru: Menyimpan array gambar dan index gambar yang sedang dilihat
  const [lightbox, setLightbox] = useState<{ images: string[]; index: number } | null>(null);

  // Mencegah scroll background saat Lightbox terbuka
  useEffect(() => {
    if (lightbox) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [lightbox]);

  // Fungsi untuk ke gambar sebelumnya
  const showPrev = (e: React.MouseEvent) => {
    e.stopPropagation(); // Mencegah klik menembus ke background (yang menutup lightbox)
    if (lightbox) {
      const isFirst = lightbox.index === 0;
      const newIndex = isFirst ? lightbox.images.length - 1 : lightbox.index - 1;
      setLightbox({ ...lightbox, index: newIndex });
    }
  };

  // Fungsi untuk ke gambar berikutnya
  const showNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightbox) {
      const isLast = lightbox.index === lightbox.images.length - 1;
      const newIndex = isLast ? 0 : lightbox.index + 1;
      setLightbox({ ...lightbox, index: newIndex });
    }
  };

  const fadeUp: any = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const projects = [
    {
      title: "Media Partner Suara yang Terbungkam Vol.5",
      client: "UKM Musik STMIK DCI",
      type: "Event Documentation • Music",
      tagIcon: <Camera size={14} />,
      description: "Mendokumentasikan energi, emosi, dan atmosfer panggung pertunjukan musik indie 'Suara yang Terbungkam Vol.5' yang diselenggarakan oleh UKM Musik STMIK DCI.",
      techStack: ["Musical Event","Photography", "Event Media", "Low-light Photography"],
      images: [
        "/images/syt/1.webp", "/images/syt/2.webp", "/images/syt/3.webp",
        "/images/syt/4.webp", "/images/syt/5.webp", "/images/syt/6.webp"
      ]
    },
    {
      title: "Media Partner Mubes Himmaji STMIK DCI 2025",
      client: "Himmaji (Himpunan Mahasiswa Jurusan Manajemen Informatika)",
      type: "Organizational Event Documentation",
      tagIcon: <Users size={14} />,
      description: "Menjadi tim media partner untuk mendokumentasikan Musyawarah Besar (Mubes) Himpunan Mahasiswa Manajemen Informatika (Himmaji) STMIK DCI 2025. Menangkap momen penting diskusi, musyawarah, dan formalitas acara organisasi kemahasiswaan.",
      techStack: ["Event Photography", "Documentation", "Formal Event"],
      images: [
        "/images/himmaji/1.webp", "/images/himmaji/2.webp", "/images/himmaji/3.webp",
        "/images/himmaji/4.webp", "/images/himmaji/5.webp", "/images/himmaji/6.webp"
      ]
    },
    {
      title: "Media Partner Pelantikan Pengurus UKM LDK STMIK DCI 2025/2026",
      client: "UKM LDK STMIK DCI",
      type: "Event Documentation",
      tagIcon: <GraduationCap size={14} />,
      description: "Bertanggung jawab sebagai media partner dalam mendokumentasikan prosesi Pelantikan dan Pelatihan Pengurus UKM Lembaga Dakwah Kampus (LDK) STMIK DCI periode 2025/2026. Menangkap momen formalitas kegiatan, penyampaian materi, hingga antusiasme dan interaksi para peserta.",
      techStack: ["Event Photography", "Media Partner", "Campus Event"],
      images: [
        "/images/ldk/1.webp", "/images/ldk/2.webp", "/images/ldk/3.webp",
        "/images/ldk/4.webp", "/images/ldk/5.webp", "/images/ldk/6.webp"
      ]
    },
    {
      title: "Tim PDD Dikafom 2025 UKM Format STMIK DCI",
      client: "UKM Fotografi & Multimedia (Format) STMIK DCI",
      type: "Event Organizer • Multimedia",
      tagIcon: <Film size={14} />,
      description: "Mengambil peran strategis dalam divisi PDD (Publikasi, Dekorasi, dan Dokumentasi) untuk menyukseskan acara puncak DIKAFOM 2025. Bertanggung jawab dalam mengelola alur multimedia, pengeditan visual secara langsung, serta mendokumentasikan keseluruhan dinamika peserta.",
      techStack: ["Photography", "Multimedia", "Video Editing", "Event Organizing"],
      images: [
        "/images/dikafom/1.webp", "/images/dikafom/2.webp", "/images/dikafom/3.webp",
        "/images/dikafom/4.webp", "/images/dikafom/5.webp", "/images/dikafom/6.webp"
      ]
    },
    {
      title: "Hasil Karya Lainnya",
      client: "Personal Project • Eksplorasi Visual",
      type: "Visual Art • Photography",
      tagIcon: <ImageIcon size={14} />,
      description: "Kumpulan eksplorasi visual personal yang mencakup berbagai genre; mulai dari dinamika street photography, keindahan detail alam, hingga ketekunan dalam menangkap pesona astrofotografi (bintang dan bimasakti). Karya ini mencerminkan kepekaan seni dan fleksibilitas teknis dalam memanfaatkan cahaya.",
      techStack: ["Astrophotography", "Street Photography", "Nature/Macro"],
      images: [
        "/images/pbd/1.webp", "/images/pbd/2.webp", "/images/pbd/3.webp",
        "/images/pbd/4.webp", "/images/pbd/5.webp", "/images/pbd/6.webp"
      ]
    }
  ];

  return (
    <>
      <section id="projects" className="py-32 px-6 max-w-6xl mx-auto border-t border-zinc-500/10 relative">
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }} 
          variants={fadeUp} 
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4 text-zinc-900 dark:text-zinc-50">
            Proyek & Karya.
          </h2>
          <p className="opacity-70 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
            Eksplorasi visual dan dokumentasi event yang telah dikerjakan selama masa perkuliahan. Klik gambar untuk melihat resolusi penuh.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-12">
          {projects.map((project, idx) => (
            <motion.div 
              key={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="group flex flex-col gap-8 p-8 md:p-10 rounded-3xl border border-zinc-500/20 bg-zinc-500/5 hover:bg-zinc-500/10 transition-all duration-500"
            >
              {/* Bagian Teks & Info Proyek */}
              <div className="flex flex-col md:flex-row justify-between gap-6 border-b border-zinc-500/10 pb-8">
                <div className="md:w-2/3">
                  <h3 className="text-3xl font-bold mb-3 text-zinc-900 dark:text-zinc-50">{project.title}</h3>
                  <p className="text-sm font-medium opacity-60 mb-4 uppercase flex items-center gap-2 text-zinc-600 dark:text-zinc-400">
                    {project.tagIcon} {project.type}
                  </p>
                  <p className="opacity-70 leading-relaxed text-zinc-700 dark:text-zinc-300 max-w-3xl">
                    {project.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 md:justify-end content-start md:w-1/3">
                  {project.techStack.map((tech, i) => (
                    <span key={i} className="px-3 py-1 text-xs rounded-full border border-zinc-500/20 text-zinc-600 dark:text-zinc-400 whitespace-nowrap">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bagian Visual: GRID FOTO */}
              {project.images && (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 mt-2">
                  {project.images.map((img, i) => (
                    <div 
                      key={i} 
                      // Mengirim array gambar proyek dan index yang diklik ke Lightbox
                      onClick={() => setLightbox({ images: project.images, index: i })}
                      className="relative overflow-hidden rounded-xl md:rounded-2xl border border-zinc-500/20 aspect-video md:aspect-square cursor-zoom-in"
                    >
                      <Image 
                        src={img} 
                        alt={`Dokumentasi ${project.title} ${i+1}`} 
                        fill
                        sizes="(max-width: 768px) 50vw, 33vw"
                        className="object-cover grayscale-[30%] hover:grayscale-0 hover:scale-110 transition-all duration-700 ease-in-out"
                      />
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* OVERLAY LIGHTBOX FULLSCREEN DENGAN NAVIGASI */}
      <AnimatePresence>
        {lightbox && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-zinc-950/95 backdrop-blur-sm p-4 md:p-12 cursor-zoom-out"
            onClick={() => setLightbox(null)}
          >
            {/* Tombol Close */}
            <button 
              className="absolute top-6 right-6 z-[110] p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors"
              onClick={() => setLightbox(null)}
            >
              <X size={24} />
            </button>

            {/* Tombol Kiri (Previous) */}
            <button 
              className="absolute left-4 md:left-8 z-[110] p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors"
              onClick={showPrev}
            >
              <ChevronLeft size={32} />
            </button>
            
            {/* Wadah Gambar Full */}
            <div 
              className="relative w-full h-full max-w-7xl flex items-center justify-center cursor-default"
              onClick={(e) => e.stopPropagation()} // Mencegah klik di area gambar menutup lightbox
            >
              <Image 
                src={lightbox.images[lightbox.index]} 
                alt="Preview Karya Fullscreen" 
                fill
                className="object-contain"
                sizes="100vw"
                quality={100}
                priority // Memastikan gambar resolusi tinggi langsung di-load
              />
            </div>

            {/* Tombol Kanan (Next) */}
            <button 
              className="absolute right-4 md:right-8 z-[110] p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors"
              onClick={showNext}
            >
              <ChevronRight size={32} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}