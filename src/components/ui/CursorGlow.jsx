"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
export default function CursorGlow() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });
  useEffect(() => {
    const updateMousePosition = e => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };
    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);
  return <motion.div className="pointer-events-none fixed top-0 left-0 w-[600px] h-[600px] rounded-full bg-[var(--glow)] blur-[120px] opacity-30 z-[-1]" animate={{
    x: mousePosition.x - 300,
    y: mousePosition.y - 300
  }} transition={{
    type: "tween",
    ease: "linear",
    duration: 0.15
  }} />;
}