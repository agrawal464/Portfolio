"use client";

import { experienceData } from "@/data/experience";
import { motion } from "framer-motion";

export default function Experience() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const itemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="space-y-12">
          
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <p className="text-sm text-cyan-400 font-semibold uppercase tracking-wider glow-text-accent">
              Journey
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold font-display text-white">Experience & Education</h2>
          </motion.div>

          {/* Timeline */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-8 relative before:absolute before:inset-y-0 before:left-2 before:w-[1px] before:bg-gradient-to-b before:from-indigo-500 before:via-cyan-500 before:to-transparent"
          >
            {experienceData.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative pl-8 group"
              >
                {/* Timeline node */}
                <div className="absolute left-[3px] top-1.5 w-2.5 h-2.5 bg-cyan-400 rounded-full shadow-[0_0_8px_#22d3ee] group-hover:scale-150 group-hover:bg-indigo-400 group-hover:shadow-[0_0_12px_#818cf8] transition-all duration-300"></div>

                <div className="space-y-2 p-5 rounded-2xl glass-card border border-white/5 hover:border-cyan-500/20 transition-all duration-300 hover:translate-x-1 hover:shadow-lg hover:shadow-black/10">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <h3 className="text-lg font-bold text-white font-display group-hover:text-cyan-300 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-sm text-indigo-300 font-semibold">{item.organization}</p>
                    </div>
                    <span className="text-xs font-semibold text-muted-foreground bg-white/5 px-2.5 py-1 rounded-full border border-white/5 w-max">
                      {item.period}
                    </span>
                  </div>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
