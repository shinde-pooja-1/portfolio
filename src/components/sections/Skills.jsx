"use client";

import { useState } from "react";
import { skills } from "@/data/skills";
import SectionHeading from "@/components/ui/SectionHeading";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
export default function Skills() {
  const [activeCategory, setActiveCategory] = useState(skills[0].category);
  return <section id="skills" className="relative py-32 px-6 md:px-12 max-w-7xl mx-auto z-10">
            <SectionHeading subtitle="02. Expertise">
                Skills & Technologies
            </SectionHeading>

            <div className="flex flex-wrap gap-3 md:gap-4 mb-16">
                {skills.map(skillGroup => <button key={skillGroup.category} onClick={() => setActiveCategory(skillGroup.category)} className={cn("px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 border backdrop-blur-sm cursor-none", activeCategory === skillGroup.category ? "bg-[var(--accent)] border-[var(--accent)] text-white shadow-[0_0_20px_rgba(139,92,246,0.3)]" : "bg-transparent border-[var(--border)] text-[var(--text-muted)] hover:border-white/30 hover:text-white")}>
                        {skillGroup.category}
                    </button>)}
            </div>

            <div className="min-h-[300px]">
                <AnimatePresence mode="wait">
                    {skills.map(skillGroup => skillGroup.category === activeCategory && <motion.div key={skillGroup.category} initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} exit={{
          opacity: 0,
          y: -20
        }} transition={{
          duration: 0.4,
          ease: [0.16, 1, 0.3, 1]
        }} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                                    {skillGroup.items.map((item, i) => <motion.div key={item} initial={{
            opacity: 0,
            scale: 0.9
          }} animate={{
            opacity: 1,
            scale: 1
          }} transition={{
            delay: i * 0.05,
            duration: 0.4
          }} className="group relative p-6 md:p-8 rounded-2xl bg-[var(--glass)] border border-[var(--border)] overflow-hidden hover:border-[var(--accent)] transition-all duration-300 hover:shadow-[0_0_30px_-10px_rgba(139,92,246,0.2)]">
                                            <div className="absolute inset-0 bg-gradient-to-br from-[var(--glow)] to-transparent opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
                                            <span className="relative z-10 font-bold text-lg md:text-xl text-white/80 group-hover:text-white transition-colors">
                                                {item}
                                            </span>
                                        </motion.div>)}
                                </motion.div>)}
                </AnimatePresence>
            </div>
        </section>;
}