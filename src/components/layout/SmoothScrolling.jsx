"use client";

import { ReactLenis, useLenis } from "@studio-freight/react-lenis";
import { useEffect } from "react";
export default function SmoothScrolling({
  children
}) {
  const lenis = useLenis(({
    scroll
  }) => {
    // can listen to scroll here if needed
  });
  useEffect(() => {
    const handleAnchorClick = e => {
      const target = e.target;
      const link = target.closest('a');
      if (!link) return;
      const href = link.getAttribute('href');
      if (href && href.startsWith('#') && href.length > 1) {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element && lenis) {
          lenis.scrollTo(element);
        } else if (element) {
          element.scrollIntoView({
            behavior: 'smooth'
          });
        }
      }
    };
    document.documentElement.addEventListener('click', handleAnchorClick);
    return () => {
      document.documentElement.removeEventListener('click', handleAnchorClick);
    };
  }, [lenis]);
  return <ReactLenis root options={{
    lerp: 0.1,
    duration: 1.5,
    smoothWheel: true
  }}>
            {children}
        </ReactLenis>;
}