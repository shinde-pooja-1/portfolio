"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });
  const [isHovered, setIsHovered] = useState(false);
  useEffect(() => {
    const updateMousePosition = e => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };
    const handleMouseOver = e => {
      const target = e.target;
      if (target.tagName.toLowerCase() === "a" || target.tagName.toLowerCase() === "button" || target.closest("a") || target.closest("button")) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };
    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseover", handleMouseOver);
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);
  return <>
            <motion.div className="hidden md:flex fixed top-0 left-0 w-8 h-8 rounded-full border border-white/50 pointer-events-none z-[9999] mix-blend-difference items-center justify-center" animate={{
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      scale: isHovered ? 1.5 : 1
    }} transition={{
      type: "tween",
      ease: "backOut",
      duration: 0.2
    }} />
            <motion.div className="hidden md:block fixed top-0 left-0 w-2 h-2 rounded-full bg-white pointer-events-none z-[9999] mix-blend-difference" animate={{
      x: mousePosition.x - 4,
      y: mousePosition.y - 4,
      scale: isHovered ? 0 : 1
    }} transition={{
      type: "tween",
      ease: "backOut",
      duration: 0.1
    }} />
        </>;
}