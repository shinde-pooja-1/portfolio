"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
export default function MagneticButton({
  children,
  className,
  onClick
}) {
  const buttonRef = useRef(null);
  const [position, setPosition] = useState({
    x: 0,
    y: 0
  });
  const handleMouse = e => {
    const {
      clientX,
      clientY
    } = e;
    const {
      height,
      width,
      left,
      top
    } = buttonRef.current.getBoundingClientRect();
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    setPosition({
      x: x * 0.3,
      y: y * 0.3
    }); // 30% magnetic pull
  };
  const handleMouseLeave = () => {
    setPosition({
      x: 0,
      y: 0
    });
  };
  return <motion.button ref={buttonRef} onMouseMove={handleMouse} onMouseLeave={handleMouseLeave} onClick={onClick} animate={{
    x: position.x,
    y: position.y
  }} transition={{
    type: "spring",
    stiffness: 150,
    damping: 15,
    mass: 0.1
  }} className={cn("relative px-8 py-4 rounded-full overflow-hidden group border border-[var(--border)] bg-[var(--glass)] backdrop-blur-md transition-colors hover:border-[var(--accent)] cursor-none", className)}>
            <span className="relative z-10 flex items-center gap-2 font-medium tracking-wide">
                {children}
            </span>
            <div className="absolute inset-0 rounded-full bg-[var(--glow)] opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none" />
        </motion.button>;
}