"use client";

import { motion, Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};
const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const skillCategories = [
  {
    title: "Photography & Visual",
    gradient: "from-[#427AB5] to-[#406AAF]",
    borderColor: "border-[#427AB5]/25",
    bgColor: "bg-[#427AB5]/6",
    skills: [
      { name: "Event Photography", level: 90 },
      { name: "Low-light Photography", level: 85 },
      { name: "Astrophotography", level: 85 },
      { name: "Street Photography", level: 75 },
      { name: "Portrait Photography", level: 70 },
    ],
  },
  {
    title: "Design & Multimedia",
    gradient: "from-[#406AAF] to-[#427AB5]",
    borderColor: "border-[#406AAF]/25",
    bgColor: "bg-[#406AAF]/6",
    skills: [
      { name: "Graphic Design", level: 70 },
      { name: "Video Editing", level: 70 },
      { name: "Adobe Photoshop", level: 75 },
      { name: "Adobe Lightroom", level: 80 },
      { name: "Canva", level: 70 },
    ],
  },
  {
    title: "Web Development",
    gradient: "from-[#F7DD7D] to-[#FFE8BE]",
    borderColor: "border-[#F7DD7D]/25",
    bgColor: "bg-[#F7DD7D]/6",
    skills: [
      { name: "HTML & CSS", level: 70 },
      { name: "JavaScript", level: 65 },
      { name: "React / Next.js", level: 60 },
      { name: "PHP", level: 70 },
      { name: "MySQL", level: 70 },
    ],
  },
  {
    title: "Soft Skills",
    gradient: "from-[#427AB5] to-[#F7DD7D]",
    borderColor: "border-[#427AB5]/25",
    bgColor: "bg-[#427AB5]/6",
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
    <section id="skills" className="py-32 px-6 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[500px] h-[400px] bg-[#F7DD7D]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-7xl mx-auto">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F7DD7D]/10 border border-[#F7DD7D]/25 text-[#F7DD7D] text-sm font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-[#F7DD7D] animate-pulse" />
            Keahlian
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Skills{" "}
            <span className="bg-gradient-to-r from-[#F7DD7D] to-[#427AB5] bg-clip-text text-transparent">& Expertise.</span>
          </h2>
          <p className="opacity-70 text-lg max-w-2xl">
            Kombinasi keahlian teknis dan kreatif yang terus diasah melalui pengalaman nyata dalam berbagai proyek dan organisasi.
          </p>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((cat, ci) => (
            <motion.div key={ci} variants={fadeUp} className={`p-6 md:p-8 rounded-2xl border ${cat.borderColor} ${cat.bgColor} backdrop-blur-sm`}>
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${cat.gradient}`} />
                <h3 className="font-bold text-lg">{cat.title}</h3>
              </div>
              <div className="space-y-4">
                {cat.skills.map((skill, si) => (
                  <div key={si}>
                    <div className="flex justify-between mb-1.5">
                      <span className="text-sm font-medium opacity-80">{skill.name}</span>
                      <span className="text-sm font-bold opacity-60">{skill.level}%</span>
                    </div>
                    <div className="w-full h-2 bg-zinc-500/10 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: si * 0.1, ease: "easeOut" }}
                        className={`h-full rounded-full bg-gradient-to-r ${cat.gradient}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
