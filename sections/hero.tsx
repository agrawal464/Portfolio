"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from 'lucide-react';
import Image from 'next/image';
import { motion, AnimatePresence } from "framer-motion";

const techStack = [
  "C++",
  "JavaScript",
  "HTML",
  "CSS",
  "React",
  "Tailwind CSS",
  "Nodejs",
  "MongoDB",
  "SQL",
  "Solidity",
];

const roles = [
  "Full-Stack Developer",
  "Competitive Programmer",
  "Blockchain Builder"
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleScroll = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-28 pb-16 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Info */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 space-y-6 text-left"
          >
            {/* Availability Banner */}
            <motion.div variants={itemVariants}>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-400 text-xs sm:text-sm font-medium backdrop-blur-md shadow-[0_0_15px_rgba(6,182,212,0.1)] hover:border-cyan-500/50 transition-colors">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                </span>
                Actively interviewing for SDE roles — graduating June 2026
              </div>
            </motion.div>

            {/* Typography Name Hero */}
            <motion.div variants={itemVariants} className="space-y-2">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold font-display tracking-tight leading-[1.1] text-white">
                Himanshu <br className="sm:hidden" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 filter drop-shadow-[0_0_15px_rgba(99,102,241,0.15)]">
                  Agrawal
                </span>
              </h1>
              
              {/* Typewriter role cycler */}
              <div className="h-10 relative overflow-hidden flex items-center pt-2">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={roleIndex}
                    initial={{ y: 15, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -15, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="absolute text-xl sm:text-2xl font-semibold bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent glow-text-accent"
                  >
                    {roles[roleIndex]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </motion.div>

            {/* Subtext description */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl"
            >
              I build modern web applications with a focus on clean UI, solid backend logic, and scalable architecture. Passionate about solving complex problems through code and competitive programming.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                size="lg"
                onClick={() => handleScroll("projects")}
                className="group bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 text-white font-medium shadow-[0_0_20px_rgba(99,102,241,0.3)] hover:shadow-[0_0_30px_rgba(99,102,241,0.5)] transition-all duration-300 border-0"
              >
                View Projects
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                asChild
                className="border-white/10 hover:bg-white/5 hover:border-cyan-500/40 text-foreground transition-all duration-300"
              >
                <a href="/Himanshu_Agrawal_Resume.pdf" download="Himanshu_Agrawal_Resume.pdf" className="flex items-center">
                  <Download className="mr-2 w-4 h-4" /> Download Resume
                </a>
              </Button>
            </motion.div>

            {/* Tech Stack Pills */}
            <motion.div variants={itemVariants} className="pt-6">
              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-3 font-semibold">Tech Stack</p>
              <div className="flex flex-wrap gap-2 max-w-xl">
                {techStack.map((tech, index) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full text-xs bg-[#0d111c]/60 text-cyan-300 border border-white/5 hover:border-cyan-500/40 hover:scale-105 transition-all duration-300 shadow-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Avatar Area */}
          <div className="lg:col-span-5 flex items-center justify-center pt-8 lg:pt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative w-72 h-72 sm:w-80 sm:h-80"
            >
              <motion.div
                animate={{
                  y: [0, -12, 0],
                }}
                transition={{
                  duration: 6,
                  ease: "easeInOut",
                  repeat: Infinity,
                }}
                className="relative w-full h-full"
              >
                {/* Space Portal Background Glow */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-indigo-500/30 to-cyan-500/30 opacity-40 blur-3xl -z-10 animate-pulse-glow" />
                <div className="absolute inset-0 rounded-full border border-cyan-500/20 scale-105 pointer-events-none" />
                <div className="absolute inset-0 rounded-full border border-indigo-500/10 scale-110 pointer-events-none animate-spin" style={{ animationDuration: '40s' }} />
                
                <Image
                  src="/himanshu-profile.jpg"
                  alt="Himanshu Agrawal"
                  width={320}
                  height={320}
                  className="w-full h-full rounded-full object-cover shadow-2xl border-2 border-white/10"
                  priority
                />
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
