"use client";

import { hero } from "@/data/hero";
import MagneticButton from "@/components/ui/MagneticButton";
import { ArrowDownRight } from "lucide-react";
import { motion } from "framer-motion";
export default function Hero() {
  const scrollToWork = () => {
    const workSection = document.getElementById("projects");
    if (workSection) {
      workSection.scrollIntoView({
        behavior: "smooth",
      });
    }
  };
  return (
    <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
      <div className="z-10 text-center px-4 mix-blend-difference pointer-events-none">
        <motion.div
          initial={{
            opacity: 0,
            y: 50,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1.2,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <h1 className="text-6xl sm:text-8xl md:text-9xl lg:text-[11rem] font-bold tracking-tighter mb-4 text-white leading-none">
            {hero?.name}
          </h1>
        </motion.div>

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
            delay: 0.2,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <p className="text-xl md:text-3xl font-medium text-white/80 mb-10 max-w-2xl mx-auto">
            {hero.tagline}
          </p>
        </motion.div>

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.8,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1,
            delay: 0.4,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="flex justify-center pointer-events-auto"
        >
          <MagneticButton onClick={scrollToWork}>
            {hero.cta}
            <ArrowDownRight className="w-5 h-5" />
          </MagneticButton>
        </motion.div>
      </div>

      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 0.5,
        }}
        transition={{
          delay: 1.5,
          duration: 1,
        }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 mix-blend-difference"
      >
        <span className="text-xs tracking-widest uppercase text-white font-medium">
          Scroll
        </span>
        <div className="w-[1px] h-16 bg-white/20 relative overflow-hidden">
          <motion.div
            className="w-full bg-white h-1/2 absolute top-0"
            animate={{
              y: ["-100%", "200%"],
            }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
              ease: "linear",
            }}
          />
        </div>
      </motion.div>
    </section>
  );
}
