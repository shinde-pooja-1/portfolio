"use client";

import { experience } from "@/data/experience";
import SectionHeading from "@/components/ui/SectionHeading";
import { motion } from "framer-motion";
export default function Experience() {
  return <section id="experience" className="relative py-32 px-6 md:px-12 max-w-4xl mx-auto z-10">
            <SectionHeading subtitle="04. History">
                Experience
            </SectionHeading>

            <div className="relative border-l-2 border-[var(--border)] ml-4 md:ml-8 space-y-20 pt-10">
                {experience.map((item, index) => <motion.div key={item.id} initial={{
        opacity: 0,
        x: -30
      }} whileInView={{
        opacity: 1,
        x: 0
      }} viewport={{
        once: true,
        margin: "-100px"
      }} transition={{
        duration: 0.7,
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1]
      }} className="relative pl-12 md:pl-20 group">
                        {/* Timeline connectors */}
                        <div className="absolute w-5 h-5 rounded-full bg-[var(--bg)] border-[3px] border-[var(--border)] -left-[11px] top-1 group-hover:border-[var(--accent)] group-hover:bg-[var(--accent)] group-hover:shadow-[0_0_15px_rgba(139,92,246,0.6)] transition-all duration-300 z-10" />
                        <div className="absolute w-12 h-[2px] bg-[var(--border)] left-0 top-3 group-hover:bg-[var(--accent)] transition-colors duration-300 opacity-50" />

                        {/* Content */}
                        <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-4 gap-3">
                            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white group-hover:text-[var(--accent)] transition-colors">
                                {item.role}
                            </h3>
                            <span className="text-sm md:text-base text-[var(--accent)] font-bold bg-[var(--accent)]/10 py-1.5 px-4 rounded-full border border-[var(--accent)]/30 shrink-0 uppercase tracking-widest">
                                {item.period}
                            </span>
                        </div>

                        <h4 className="text-xl md:text-2xl text-white/60 font-medium mb-6">
                            {item.company}
                        </h4>

                        <p className="text-[var(--text-muted)] text-lg leading-relaxed md:text-xl">
                            {item.description}
                        </p>
                    </motion.div>)}
            </div>
        </section>;
}