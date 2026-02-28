"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
export default function ProjectCard3D({ project, index }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x, {
    stiffness: 150,
    damping: 15,
    mass: 0.5,
  });
  const mouseYSpring = useSpring(y, {
    stiffness: 150,
    damping: 15,
    mass: 0.5,
  });
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["12deg", "-12deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-12deg", "12deg"]);
  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set(mouseX / width - 0.5);
    y.set(mouseY / height - 0.5);
  };
  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 50,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        margin: "-100px",
      }}
      transition={{
        duration: 0.8,
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
      style={{
        perspective: 1200,
      }}
      className="relative w-full h-full cursor-none"
    >
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="relative group rounded-3xl bg-[var(--glass)] border border-[var(--border)] overflow-hidden h-full flex flex-col"
      >
        <div
          style={{
            transform: "translateZ(40px)",
          }}
          className="relative h-[250px] md:h-[320px] w-full overflow-hidden rounded-t-3xl bg-[#111118]"
        >
          <div className="relative w-full h-64 overflow-hidden group">
            <div className="absolute inset-0 ">
              {project?.image ? (
                <Image
                  src={project.image}
                  alt={project?.title}
                  fill
                  className="object-cover h-full w-full opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                />
              ) : (
                <h4 className="flex items-center justify-center w-full h-full text-[var(--text-muted)] text-opacity-20 font-black text-6xl md:text-8xl tracking-tighter">
                  {project.title.substring(0, 4).toUpperCase()}
                </h4>
              )}
            </div>
          </div>
        </div>

        <div
          style={{
            transform: "translateZ(30px)",
          }}
          className="p-8 md:p-10 flex-1 flex flex-col relative bg-gradient-to-t from-[var(--bg)] to-[var(--glass)]"
        >
          <div className="flex justify-between items-start mb-6">
            <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-[var(--accent)] transition-colors">
              {project.title}
            </h3>
            <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300">
              <ArrowUpRight className="w-5 h-5 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
          <p className="text-[var(--text-muted)] text-lg mb-8 flex-1 leading-relaxed">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-3">
            {project.tech.map((t) => (
              <span
                key={t}
                className="text-xs uppercase tracking-wider font-bold px-4 py-2 rounded-full border border-[var(--border)] bg-black/50 text-white/80"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
