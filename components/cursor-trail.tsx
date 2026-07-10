"use client";

import { useEffect, useState, useRef } from "react";

export default function CursorTrail() {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);

    // Disable on touch devices or mobile screens
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    const isMobile = window.innerWidth < 768;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (isTouch || isMobile || prefersReducedMotion) return;

    setVisible(true);

    const dot = dotRef.current;
    if (!dot) return;

    let mouseX = 0;
    let mouseY = 0;
    let dotX = 0;
    let dotY = 0;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener("mousemove", onMouseMove);

    let animationId: number;
    const tick = () => {
      // Easing speed (12% of the distance per frame)
      const ease = 0.12;
      dotX += (mouseX - dotX) * ease;
      dotY += (mouseY - dotY) * ease;

      if (dot) {
        dot.style.transform = `translate3d(${dotX - 8}px, ${dotY - 8}px, 0)`;
      }

      animationId = requestAnimationFrame(tick);
    };

    tick();

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(animationId);
    };
  }, []);

  if (!mounted || !visible) return null;

  return (
    <div
      ref={dotRef}
      className="fixed top-0 left-0 w-4 h-4 rounded-full pointer-events-none z-50 opacity-70 transition-opacity duration-300 mix-blend-screen"
      style={{
        background: "radial-gradient(circle, rgba(6,182,212,1) 0%, rgba(99,102,241,0.6) 50%, rgba(99,102,241,0) 100%)",
        boxShadow: "0 0 10px rgba(6, 182, 212, 0.5), 0 0 20px rgba(99, 102, 241, 0.3)",
        transform: "translate3d(-20px, -20px, 0)",
        willChange: "transform",
      }}
    />
  );
}
