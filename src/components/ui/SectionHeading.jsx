"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import { cn } from "@/lib/utils";
export default function SectionHeading({
  children,
  subtitle,
  className
}) {
  return <motion.div initial="initial" whileInView="animate" viewport={{
    once: true,
    margin: "-100px"
  }} variants={fadeUp} className={cn("mb-12 md:mb-20", className)}>
            {subtitle && <span className="text-[var(--accent)] text-xs md:text-sm uppercase tracking-[0.2em] font-medium mb-4 block">
                    {subtitle}
                </span>}
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gradient">
                {children}
            </h2>
        </motion.div>;
}