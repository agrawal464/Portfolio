"use client";

import { skillsData } from "@/data/skills";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.07 },
    },
  };

  const cardVariants = {
    hidden: { y: 30, opacity: 0, scale: 0.92 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.45, ease: "easeOut" },
    },
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background glow blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/3 left-1/4 w-72 h-72 rounded-full opacity-10 blur-3xl"
          style={{ background: "radial-gradient(circle, #6366F1, transparent)" }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full opacity-8 blur-3xl"
          style={{ background: "radial-gradient(circle, #06B6D4, transparent)" }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-3"
        >
          <p className="text-sm text-cyan-400 font-semibold uppercase tracking-widest glow-text-accent">
            What I work with
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold font-display text-white">
            My{" "}
            <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-sm sm:text-base">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4"
        >
          {skillsData.map((skill) => (
            <motion.div
              key={skill.name}
              variants={cardVariants}
              whileHover={{
                scale: 1.07,
                y: -5,
                transition: { duration: 0.2, ease: "easeOut" },
              }}
              className="skill-card group relative flex flex-col items-center justify-center gap-3 p-5 rounded-2xl cursor-default select-none"
              style={
                {
                  "--skill-color": skill.color,
                } as React.CSSProperties
              }
            >
              {/* Left accent bar */}
              <div
                className="absolute left-0 top-4 bottom-4 w-[3px] rounded-r-full opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: skill.color }}
              />
              {/* Right accent bar */}
              <div
                className="absolute right-0 top-4 bottom-4 w-[3px] rounded-l-full opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: skill.color }}
              />

              {/* Glow on hover */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                  boxShadow: `0 0 20px ${skill.color}30, inset 0 0 20px ${skill.color}08`,
                }}
              />

              {/* Icon */}
              <div className="relative w-12 h-12 flex items-center justify-center">
                <Image
                  src={skill.icon}
                  alt={skill.name}
                  width={48}
                  height={48}
                  className="w-12 h-12 object-contain drop-shadow-lg group-hover:scale-110 transition-transform duration-300"
                  unoptimized
                />
              </div>

              {/* Name */}
              <span className="text-xs sm:text-sm font-medium text-slate-300 group-hover:text-white transition-colors duration-200 text-center leading-tight">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
