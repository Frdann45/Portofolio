"use client";

import { motion, Variants } from "framer-motion";
import { Folder, Terminal, Cpu } from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};
const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const skillCategories = [
  {
    folderName: "PHOTOGRAPHY_VISUAL",
    title: "Photography & Visual",
    headerColor: "bg-[#FF007A] text-white",
    barFill: "bg-[#FF007A]",
    skills: [
      { name: "Event Photography", level: 90 },
      { name: "Low-light Photography", level: 85 },
      { name: "Astrophotography", level: 85 },
      { name: "Street Photography", level: 75 },
      { name: "Portrait Photography", level: 70 },
    ],
  },
  {
    folderName: "DESIGN_MULTIMEDIA",
    title: "Design & Multimedia",
    headerColor: "bg-[#00F0FF] text-black",
    barFill: "bg-[#00F0FF]",
    skills: [
      { name: "Graphic Design", level: 70 },
      { name: "Video Editing", level: 70 },
      { name: "Adobe Photoshop", level: 75 },
      { name: "Adobe Lightroom", level: 80 },
      { name: "Canva Pro", level: 70 },
    ],
  },
  {
    folderName: "WEB_DEVELOPMENT",
    title: "Web Development",
    headerColor: "bg-[#FFE600] text-black",
    barFill: "bg-[#FFE600]",
    skills: [
      { name: "HTML & CSS", level: 70 },
      { name: "JavaScript / ES6+", level: 65 },
      { name: "React / Next.js", level: 60 },
      { name: "PHP", level: 70 },
      { name: "MySQL / Database", level: 70 },
    ],
  },
  {
    folderName: "SOFT_SKILLS_MGMT",
    title: "Soft Skills & Management",
    headerColor: "bg-[#CCFF00] text-black",
    barFill: "bg-[#CCFF00]",
    skills: [
      { name: "Social Media Management", level: 80 },
      { name: "Event Organizing", level: 75 },
      { name: "Team Collaboration", level: 82 },
      { name: "Communication", level: 78 },
      { name: "Problem Solving", level: 80 },
    ],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 px-4 max-w-7xl mx-auto">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="space-y-10">
        {/* Section Header */}
        <motion.div variants={fadeUp} className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-[#CCFF00] text-black neo-border neo-shadow-sm font-mono text-xs font-black uppercase mb-4">
              <Cpu size={14} className="stroke-[3]" />
              <span>04 // KEAHLIAN & ENGINE</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight">
              SKILLS <span className="bg-[#FF007A] text-white px-2 py-0.5 neo-border inline-block rotate-[1deg]">& EXPERTISE</span>
            </h2>
          </div>
          <p className="font-mono text-xs font-bold uppercase max-w-md bg-black text-[#00F0FF] p-3 neo-border neo-shadow-sm">
            STATUS: MATRIX LOADED // COMBINING TECHNICAL LOGIC & CREATIVE VISUAL MASTRY.
          </p>
        </motion.div>

        {/* Skill Folder Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((cat, ci) => (
            <motion.div
              key={ci}
              variants={fadeUp}
              className="neo-border-lg neo-shadow-lg bg-white dark:bg-[#1E1E24] text-black dark:text-white flex flex-col justify-between overflow-hidden"
            >
              {/* Folder Top Tab */}
              <div>
                <div className="window-header flex justify-between items-center">
                  <div className="flex items-center gap-2 font-mono">
                    <Folder size={16} className="stroke-[3] text-[#FFE600]" />
                    <span>FOLDER://{cat.folderName}</span>
                  </div>
                  <span className="font-mono text-[10px] bg-white text-black px-1.5 py-0.5 neo-border font-bold">
                    DIR_0{ci + 1}
                  </span>
                </div>

                <div className="p-6 md:p-8">
                  <div className="flex items-center justify-between mb-6 pb-4 border-b-3 border-black">
                    <h3 className="font-black text-xl uppercase tracking-tight">{cat.title}</h3>
                    <span className={`px-2.5 py-1 neo-border font-mono text-xs font-black ${cat.headerColor}`}>
                      ACTIVE
                    </span>
                  </div>

                  <div className="space-y-5">
                    {cat.skills.map((skill, si) => (
                      <div key={si} className="space-y-1.5 font-mono">
                        <div className="flex justify-between items-center text-xs font-bold">
                          <span className="uppercase">{skill.name}</span>
                          <span className="bg-black text-white px-1.5 py-0.5 neo-border text-[10px]">
                            {skill.level}%
                          </span>
                        </div>
                        {/* Rigid Brutalist Progress Bar */}
                        <div className="w-full h-5 bg-zinc-200 dark:bg-[#121214] neo-border p-0.5 overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: si * 0.08, ease: "easeOut" }}
                            className={`h-full ${cat.barFill} neo-border-sm relative overflow-hidden`}
                          >
                            {/* Retro diagonal stripes overlay effect */}
                            <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(0,0,0,0.15)_25%,transparent_25%,transparent_50%,rgba(0,0,0,0.15)_50%,rgba(0,0,0,0.15)_75%,transparent_75%,transparent)] bg-[length:8px_8px]" />
                          </motion.div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Folder Footer */}
              <div className="p-4 bg-zinc-100 dark:bg-[#121214] border-t-3 border-black font-mono text-[11px] font-bold flex justify-between items-center">
                <span>[MODULE_VERIFIED: OK]</span>
                <span className="text-[#FF007A]">STMIK DCI // MULTIMEDIA</span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
