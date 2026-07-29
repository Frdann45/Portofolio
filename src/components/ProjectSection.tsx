"use client";

import { useState, useEffect } from "react";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { Camera, Users, GraduationCap, Film, Image as ImageIcon, X, ChevronLeft, ChevronRight, Folder, Layers } from "lucide-react";

export default function ProjectSection() {
  const [lightbox, setLightbox] = useState<{ images: string[]; index: number } | null>(null);

  useEffect(() => {
    if (lightbox) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [lightbox]);

  const showPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightbox) {
      const isFirst = lightbox.index === 0;
      const newIndex = isFirst ? lightbox.images.length - 1 : lightbox.index - 1;
      setLightbox({ ...lightbox, index: newIndex });
    }
  };

  const showNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightbox) {
      const isLast = lightbox.index === lightbox.images.length - 1;
      const newIndex = isLast ? 0 : lightbox.index + 1;
      setLightbox({ ...lightbox, index: newIndex });
    }
  };

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const projects = [
    {
      code: "PROJ_01",
      title: "Media Partner Suara yang Terbungkam Vol.5",
      client: "UKM Musik STMIK DCI",
      type: "Event Documentation • Music",
      tagIcon: <Camera size={14} className="stroke-[3]" />,
      description: "Mendokumentasikan energi, emosi, dan atmosfer panggung pertunjukan musik indie 'Suara yang Terbungkam Vol.5' yang diselenggarakan oleh UKM Musik STMIK DCI.",
      techStack: ["Musical Event", "Photography", "Event Media", "Low-light Photography"],
      badgeBg: "bg-[#FF007A] text-white",
      images: [
        "/images/syt/1.webp", "/images/syt/2.webp", "/images/syt/3.webp",
        "/images/syt/4.webp", "/images/syt/5.webp", "/images/syt/6.webp"
      ]
    },
    {
      code: "PROJ_02",
      title: "Media Partner Mubes 2025 Himmaji STMIK DCI",
      client: "Himmaji (Himpunan Mahasiswa Jurusan Manajemen Informatika)",
      type: "Organizational Event Documentation",
      tagIcon: <Users size={14} className="stroke-[3]" />,
      description: "Menjadi tim media partner untuk mendokumentasikan Musyawarah Besar (Mubes) Himpunan Mahasiswa Manajemen Informatika (Himmaji) STMIK DCI 2025. Menangkap momen penting diskusi, musyawarah, dan formalitas acara organisasi kemahasiswaan.",
      techStack: ["Event Photography", "Documentation", "Formal Event"],
      badgeBg: "bg-[#00F0FF] text-black",
      images: [
        "/images/himmaji/1.webp", "/images/himmaji/2.webp", "/images/himmaji/3.webp",
        "/images/himmaji/4.webp", "/images/himmaji/5.webp", "/images/himmaji/6.webp"
      ]
    },
    {
      code: "PROJ_03",
      title: "Media Partner Pelantikan Pengurus UKM LDK STMIK DCI 2025/2026",
      client: "UKM LDK STMIK DCI",
      type: "Event Documentation",
      tagIcon: <GraduationCap size={14} className="stroke-[3]" />,
      description: "Bertanggung jawab sebagai media partner dalam mendokumentasikan prosesi Pelantikan dan Pelatihan Pengurus UKM Lembaga Dakwah Kampus (LDK) STMIK DCI periode 2025/2026. Menangkap momen formalitas kegiatan, penyampaian materi, hingga antusiasme para peserta.",
      techStack: ["Event Photography", "Media Partner", "Campus Event"],
      badgeBg: "bg-[#CCFF00] text-black",
      images: [
        "/images/ldk/1.webp", "/images/ldk/2.webp", "/images/ldk/3.webp",
        "/images/ldk/4.webp", "/images/ldk/5.webp", "/images/ldk/6.webp"
      ]
    },
    {
      code: "PROJ_04",
      title: "Tim PDD DIKAFOM 2025 UKM Format STMIK DCI",
      client: "UKM Fotografi & Multimedia (Format) STMIK DCI",
      type: "Event Organizer • Multimedia",
      tagIcon: <Film size={14} className="stroke-[3]" />,
      description: "Mengambil peran strategis dalam divisi PDD (Publikasi, Dekorasi, dan Dokumentasi) untuk menyukseskan acara puncak DIKAFOM 2025. Bertanggung jawab dalam mengelola alur multimedia, pengeditan visual secara langsung, serta mendokumentasikan dinamika peserta.",
      techStack: ["Photography", "Multimedia", "Video Editing", "Event Organizing"],
      badgeBg: "bg-[#FF5722] text-white",
      images: [
        "/images/dikafom/1.webp", "/images/dikafom/2.webp", "/images/dikafom/3.webp",
        "/images/dikafom/4.webp", "/images/dikafom/5.webp", "/images/dikafom/6.webp"
      ]
    },
    {
      code: "PROJ_05",
      title: "Hasil Karya Lainnya & Eksplorasi Visual",
      client: "Personal Project • Eksplorasi Visual",
      type: "Visual Art • Photography",
      tagIcon: <ImageIcon size={14} className="stroke-[3]" />,
      description: "Kumpulan eksplorasi visual personal yang mencakup berbagai genre; mulai dari dinamika street photography, keindahan detail alam, hingga ketekunan dalam menangkap pesona astrofotografi (bintang dan bimasakti).",
      techStack: ["Astrophotography", "Street Photography", "Nature/Macro"],
      badgeBg: "bg-[#FFE600] text-black",
      images: [
        "/images/pbd/1.webp", "/images/pbd/2.webp", "/images/pbd/3.webp",
        "/images/pbd/4.webp", "/images/pbd/5.webp", "/images/pbd/6.webp"
      ]
    }
  ];

  return (
    <>
      <section id="projects" className="py-24 px-4 max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-[#FF007A] text-white neo-border neo-shadow-sm font-mono text-xs font-black uppercase mb-4">
            <Layers size={14} className="stroke-[3]" />
            <span>03 // PORTOFOLIO PROYEK</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight">
            FEATURED <span className="bg-[#00F0FF] text-black px-2 py-0.5 neo-border inline-block rotate-[-1deg]">PROJECTS</span>
          </h2>
          <p className="font-mono text-sm font-bold uppercase mt-2 max-w-2xl bg-black text-[#FFE600] p-3 neo-border neo-shadow-sm">
            KLIK MANAPUN PADA THUMBNAIL FOTO UNTUK MEMBUKA RESOLUSI PENUH DALAM LIGHTBOX RETRO OS.
          </p>
        </motion.div>

        {/* Projects List as Rigid Window Cards */}
        <div className="space-y-12">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="neo-border-lg neo-shadow-xl bg-white dark:bg-[#1E1E24] text-black dark:text-white overflow-hidden"
            >
              {/* Window Header */}
              <div className="window-header flex justify-between items-center">
                <div className="flex items-center gap-2 font-mono">
                  <Folder size={16} className="text-[#00F0FF] stroke-[3]" />
                  <span>WINDOW://{project.code}_{project.client.replace(/[^a-zA-Z0-9]/g, "_").toUpperCase().slice(0, 20)}.EXE</span>
                </div>
                <div className="flex gap-1.5 font-mono text-xs">
                  <span className="px-1.5 bg-[#FF007A] text-white neo-border font-black">[ _ ]</span>
                  <span className="px-1.5 bg-[#FFE600] text-black neo-border font-black">[ 🗖 ]</span>
                  <span className="px-1.5 bg-[#00F0FF] text-black neo-border font-black">[ ✕ ]</span>
                </div>
              </div>

              {/* Project Main Details */}
              <div className="p-6 md:p-8 space-y-6">
                <div className="flex flex-col md:flex-row justify-between gap-6 border-b-3 border-black pb-6">
                  <div className="space-y-3 md:w-2/3">
                    <span className={`inline-flex items-center gap-2 px-3 py-1 font-mono text-xs font-black uppercase neo-border ${project.badgeBg}`}>
                      {project.tagIcon} {project.type}
                    </span>
                    <h3 className="text-2xl md:text-4xl font-black uppercase tracking-tight">{project.title}</h3>
                    <p className="font-mono text-xs font-bold text-zinc-500 dark:text-zinc-400">CLIENT: {project.client}</p>
                    <p className="text-base font-medium leading-relaxed">{project.description}</p>
                  </div>

                  {/* Tech / Tag Badges */}
                  <div className="md:w-1/3 flex flex-wrap gap-2 content-start md:justify-end">
                    {project.techStack.map((tech, i) => (
                      <span key={i} className="px-2.5 py-1 bg-black text-[#00F0FF] neo-border font-mono text-xs font-bold uppercase">
                        #{tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Rigid Thumbnail Cards Grid */}
                <div>
                  <div className="font-mono text-xs font-bold uppercase mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#FF007A] neo-border" />
                    MEDIA_GALLERY ({project.images.length} FILE ATTACHMENTS):
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
                    {project.images.map((img, i) => (
                      <div
                        key={i}
                        onClick={() => setLightbox({ images: project.images, index: i })}
                        className="relative group aspect-square neo-border neo-shadow-sm cursor-pointer overflow-hidden bg-black hover:translate-x-[-2px] hover:translate-y-[-2px] hover:neo-shadow transition-all"
                      >
                        <Image
                          src={img}
                          alt={`Dokumentasi ${project.title} ${i + 1}`}
                          fill
                          sizes="(max-width: 768px) 50vw, 20vw"
                          className="object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                          <span className="opacity-0 group-hover:opacity-100 bg-[#FFE600] text-black font-mono text-[10px] font-black px-2 py-1 neo-border">
                            VIEW_IMG
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="bg-zinc-100 dark:bg-[#121214] px-6 py-2.5 border-t-3 border-black font-mono text-xs font-bold flex justify-between items-center">
                <span>[PROJECT_STATUS: COMPLETED]</span>
                <span className="text-[#FF007A]">STMIK DCI ARCHIVE</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Retro OS Lightbox Modal */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md p-4 flex items-center justify-center"
          onClick={() => setLightbox(null)}
        >
          <div
            className="relative max-w-5xl w-full neo-border-lg neo-shadow-xl bg-[#1E1E24] text-white overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Window Header */}
            <div className="window-header flex justify-between items-center bg-[#FF007A] text-white">
              <span className="font-mono text-xs font-black">
                IMAGE_VIEWER.EXE [{lightbox.index + 1} / {lightbox.images.length}]
              </span>
              <button
                onClick={() => setLightbox(null)}
                className="bg-black text-white px-2 py-0.5 neo-border font-mono font-black hover:bg-white hover:text-black transition-colors"
                aria-label="Close"
              >
                <X size={16} className="stroke-[3]" />
              </button>
            </div>

            {/* Image Preview Container */}
            <div className="relative aspect-video max-h-[75vh] bg-black flex items-center justify-center p-2">
              <Image
                src={lightbox.images[lightbox.index]}
                alt={`Full preview ${lightbox.index + 1}`}
                fill
                className="object-contain"
                priority
              />

              {/* Prev / Next Buttons */}
              <button
                onClick={showPrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-[#FFE600] text-black neo-border neo-shadow font-black hover:bg-[#FF007A] hover:text-white transition-all"
                aria-label="Previous image"
              >
                <ChevronLeft size={24} className="stroke-[3]" />
              </button>

              <button
                onClick={showNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-[#FFE600] text-black neo-border neo-shadow font-black hover:bg-[#FF007A] hover:text-white transition-all"
                aria-label="Next image"
              >
                <ChevronRight size={24} className="stroke-[3]" />
              </button>
            </div>

            <div className="p-4 bg-black font-mono text-xs font-bold text-[#00F0FF] flex justify-between items-center neo-border-t">
              <span>PATH: {lightbox.images[lightbox.index]}</span>
              <span className="text-[#FFE600]">USE LEFT / RIGHT BUTTONS TO NAVIGATE</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
