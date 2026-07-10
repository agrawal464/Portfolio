"use client";

import { useEffect, useRef } from "react";

interface Star {
  x: number;
  y: number;
  size: number;
  baseAlpha: number;
  alpha: number;
  twinkleSpeed: number;
  twinklePhase: number;
  layer: number; // 0 = back, 1 = mid, 2 = front
}

interface ShootingStar {
  x: number;
  y: number;
  length: number;
  speed: number;
  angle: number;
  alpha: number;
  active: boolean;
}

export default function StarfieldBg() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Check prefers-reduced-motion
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let animationFrameId: number;
    let stars: Star[] = [];
    let shootingStars: ShootingStar[] = [];
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Mouse movement track for parallax
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX = (e.clientX - width / 2) / (width / 2);
      targetMouseY = (e.clientY - height / 2) / (height / 2);
    };

    const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

    if (!isMobile && !prefersReducedMotion) {
      window.addEventListener("mousemove", handleMouseMove);
    }

    const initStars = () => {
      stars = [];
      // Reduce star density on mobile
      const starCount = isMobile ? 80 : 180;

      for (let i = 0; i < starCount; i++) {
        const size = Math.random() * 1.5 + 0.3; // stars size between 0.3px and 1.8px
        const layer = size < 0.8 ? 0 : size < 1.3 ? 1 : 2; // split into 3 parallax layers

        stars.push({
          x: Math.random() * width,
          y: Math.random() * height,
          size,
          baseAlpha: Math.random() * 0.5 + 0.4, // alpha range 0.4 to 0.9
          alpha: 0,
          twinkleSpeed: Math.random() * 0.015 + 0.005,
          twinklePhase: Math.random() * Math.PI * 2,
          layer,
        });
      }
    };

    const spawnShootingStar = () => {
      if (prefersReducedMotion) return;

      // Spawn 2-3 shooting stars at once for a rain effect
      const count = Math.floor(Math.random() * 2) + 2;
      for (let i = 0; i < count; i++) {
        const startX = Math.random() * (width * 0.85);
        const startY = Math.random() * (height * 0.5);
        shootingStars.push({
          x: startX,
          y: startY,
          length: Math.random() * 100 + 60,  // longer trails
          speed: Math.random() * 12 + 10,     // faster
          angle: Math.PI / 6 + Math.random() * (Math.PI / 10), // ~30-48 deg downward
          alpha: 0,
          active: true,
        });
      }
    };

    // Shooting star trigger interval: 2-4s (was 15-20s)
    let shootingStarTimer = setInterval(spawnShootingStar, Math.random() * 2000 + 2000);

    const resizeCanvas = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initStars();
    };

    window.addEventListener("resize", resizeCanvas);
    initStars();



    const render = () => {
      // Clear canvas
      ctx.fillStyle = "#05060A";
      ctx.fillRect(0, 0, width, height);

      // Smooth mouse movement interpolation
      if (!isMobile && !prefersReducedMotion) {
        mouseX += (targetMouseX - mouseX) * 0.05;
        mouseY += (targetMouseY - mouseY) * 0.05;
      }

      // Update & Draw stars
      stars.forEach((star) => {
        // Apply parallax offsets (mouse only — never mutate star.y to avoid scroll drift)
        let offsetX = 0;

        if (!prefersReducedMotion) {
          // Mouse parallax: compute offset per-frame, do NOT store into star.x/y
          const parallaxMultiplier = (star.layer + 1) * 12;
          offsetX = mouseX * parallaxMultiplier;
        }

        // Twinkle effect: oscillate alpha
        if (!prefersReducedMotion) {
          star.twinklePhase += star.twinkleSpeed;
          star.alpha = star.baseAlpha + Math.sin(star.twinklePhase) * 0.25;
          // Clamp alpha
          star.alpha = Math.max(0.15, Math.min(1, star.alpha));
        } else {
          star.alpha = star.baseAlpha;
        }

        // Color tinting: small chance of light blue tint
        const isBlueTint = star.size > 1.1 && (Math.floor(star.x) % 3 === 0);
        ctx.fillStyle = isBlueTint
          ? `rgba(165, 243, 252, ${star.alpha})`
          : `rgba(255, 255, 255, ${star.alpha})`;

        ctx.beginPath();
        ctx.arc(star.x + offsetX, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
      });

      // Update & Draw shooting stars
      shootingStars.forEach((s) => {
        if (!s.active) return;

        // Move shooting star
        const dx = Math.cos(s.angle) * s.speed;
        const dy = Math.sin(s.angle) * s.speed;
        s.x += dx;
        s.y += dy;

        // Fade in, then fade out
        if (s.alpha < 1 && s.x < width / 2) {
          s.alpha += 0.06;
        } else {
          s.alpha -= 0.02;
        }

        if (s.alpha <= 0 || s.x > width || s.y > height) {
          s.active = false;
          return;
        }

        // Draw trail
        ctx.strokeStyle = `rgba(99, 102, 241, ${s.alpha * 0.25})`; // Indigo-violet trail
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(s.x, s.y);
        ctx.lineTo(s.x - Math.cos(s.angle) * s.length, s.y - Math.sin(s.angle) * s.length);
        ctx.stroke();

        // Draw bright core
        const grad = ctx.createLinearGradient(
          s.x,
          s.y,
          s.x - Math.cos(s.angle) * 15,
          s.y - Math.sin(s.angle) * 15
        );
        grad.addColorStop(0, `rgba(255, 255, 255, ${s.alpha})`);
        grad.addColorStop(0.5, `rgba(6, 182, 212, ${s.alpha * 0.7})`); // Cyan core transition
        grad.addColorStop(1, "rgba(6, 182, 212, 0)");

        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(s.x, s.y);
        ctx.lineTo(s.x - Math.cos(s.angle) * 15, s.y - Math.sin(s.angle) * 15);
        ctx.stroke();
      });

      // Clean inactive shooting stars
      shootingStars = shootingStars.filter((s) => s.active);


      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      clearInterval(shootingStarTimer);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ background: "#05060A" }}
    />
  );
}
