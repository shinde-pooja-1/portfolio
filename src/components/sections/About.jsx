"use client";

import { about } from "@/data/about";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassPanel from "@/components/ui/GlassPanel";
import { motion } from "framer-motion";
export default function About() {
  return <section id="about" className="relative py-32 px-6 md:px-12 max-w-7xl mx-auto z-10">
            <SectionHeading subtitle="01. About">
                {about.heading}
            </SectionHeading>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-24 items-center">
                <div className="space-y-8 text-lg md:text-xl text-[var(--text-muted)] leading-relaxed font-medium">
                    {about.paragraphs.map((p, i) => <motion.p key={i} initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true,
          margin: "-100px"
        }} transition={{
          delay: i * 0.1,
          duration: 0.8,
          ease: [0.16, 1, 0.3, 1]
        }}>
                            {p}
                        </motion.p>)}
                </div>

                <GlassPanel className="grid grid-cols-2 gap-8 md:gap-12">
                    {about.stats.map((stat, i) => <motion.div key={i} initial={{
          opacity: 0,
          scale: 0.9
        }} whileInView={{
          opacity: 1,
          scale: 1
        }} viewport={{
          once: true
        }} transition={{
          delay: 0.3 + i * 0.1,
          duration: 0.6,
          ease: [0.16, 1, 0.3, 1]
        }} className="flex flex-col gap-2">
                            <span className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-[var(--accent)] to-white">
                                {stat.value}
                            </span>
                            <span className="text-xs md:text-sm text-[var(--text-muted)] uppercase tracking-[0.15em] font-medium leading-tight">
                                {stat.label}
                            </span>
                        </motion.div>)}
                </GlassPanel>
            </div>
        </section>;
}