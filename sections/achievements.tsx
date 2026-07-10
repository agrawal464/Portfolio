"use client";

import { achievementsData } from "@/data/achievements";
import { ExternalLink, Award } from 'lucide-react';
import { motion } from "framer-motion";

export default function Achievements() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 25, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section id="achievements" className="py-20 relative overflow-hidden">
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
              Achievements
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold font-display text-white">Badges & Milestones</h2>
          </motion.div>

          {/* Cards Grid */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {achievementsData.map((achievement, index) => {
              const isHack = achievement.isHackathon;
              return (
                <motion.a
                  key={achievement.title}
                  href={achievement.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, y: -4 }}
                  className={`relative p-6 rounded-2xl glass-card flex flex-col justify-between transition-all duration-300 group ${
                    isHack 
                      ? "md:col-span-2 lg:col-span-3 border-purple-500/25 bg-gradient-to-r from-[#0d111c]/60 via-[#14102b]/40 to-[#0d111c]/60 shadow-[0_0_30px_rgba(168,85,247,0.08)] hover:border-purple-500/40 hover:shadow-[0_0_40px_rgba(168,85,247,0.15)]" 
                      : "border-white/5 hover:border-cyan-500/25 hover:shadow-[0_10px_30px_-10px_rgba(99,102,241,0.15)]"
                  }`}
                >
                  {isHack && (
                    <div className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-purple-500 to-indigo-500 text-white border border-purple-400/20 shadow-md">
                      <Award className="w-3.5 h-3.5 text-yellow-300 animate-pulse" />
                      Featured Win
                    </div>
                  )}

                  <div className="space-y-4">
                    {/* Header: Icon & Title */}
                    <div className="flex items-center gap-4">
                      <div className={`text-4xl p-2.5 rounded-xl bg-white/5 border border-white/5 group-hover:scale-110 transition-transform ${
                        isHack ? "text-purple-400 border-purple-500/10" : "text-cyan-400"
                      }`}>
                        {achievement.icon}
                      </div>
                      <div>
                        <h3 className={`font-bold font-display text-white transition-colors group-hover:text-cyan-300 ${
                          isHack ? "text-2xl" : "text-lg"
                        }`}>
                          {achievement.title}
                        </h3>
                        {isHack && (
                          <p className="text-xs text-purple-400 font-semibold tracking-wider uppercase mt-0.5">
                            Hack on Hills 6.0 • NIT Hamirpur
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Description */}
                    <p className={`text-muted-foreground leading-relaxed ${isHack ? "text-base max-w-4xl" : "text-sm"}`}>
                      {achievement.description}
                    </p>

                    {/* Inline Stats Grid */}
                    {achievement.stats && (
                      <div className="grid grid-cols-3 gap-2 mt-4 pt-4 border-t border-white/5">
                        {achievement.stats.map((stat, i) => (
                          <div 
                            key={i} 
                            className="text-center bg-[#05060A]/40 rounded-xl py-2 px-1 border border-white/5 group-hover:border-cyan-500/10 transition-colors"
                          >
                            <p className="text-[9px] sm:text-[10px] text-muted-foreground uppercase tracking-wide font-semibold">
                              {stat.label}
                            </p>
                            <p className="text-xs sm:text-sm font-extrabold text-cyan-300 mt-0.5 glow-text-accent">
                              {stat.value}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Profile Link Button */}
                  <div className={`flex items-center gap-1.5 text-xs font-semibold pt-4 transition-transform group-hover:translate-x-1 duration-300 ${
                    isHack ? "text-purple-400" : "text-cyan-400"
                  }`}>
                    {isHack ? "View Project Source" : "View Profile"}
                    <ExternalLink className="w-3.5 h-3.5" />
                  </div>

                </motion.a>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
