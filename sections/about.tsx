"use client";

import { motion } from "framer-motion";

export default function About() {
  const infoGrid = [
    { label: "Location", value: "India (Open to remote)" },
    { label: "Education", value: "Final-year B.Tech Student" },
    { label: "Focus", value: "Web Dev (Frontend + Backend), DSA" },
    { label: "Looking for", value: "Internships & Entry-level roles" },
  ];

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section id="about" className="py-20 relative overflow-hidden">
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
              About
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold font-display text-white">Who I am</h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Description Text */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-2 space-y-6"
            >
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a passionate developer from India, currently in my final year of B.Tech. I love solving complex problems through code and building applications that make an impact. My journey has been focused on mastering both frontend and backend technologies, with a strong emphasis on Data Structures and Algorithms.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm deeply interested in the MERN stack, AI/ML applications, and competitive programming. When I'm not coding, you'll find me on platforms like Codeforces and LeetCode, Codechef, sharpening my problem-solving skills or building real-world projects that challenge me to grow.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm actively seeking internship and full-time opportunities where I can contribute meaningfully and continue learning from experienced teams.
              </p>
            </motion.div>

            {/* Combined Info Grid */}
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="space-y-4"
            >
              {infoGrid.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, y: -2 }}
                  className="p-5 rounded-xl bg-[#0d111c]/45 border border-white/5 hover:border-cyan-500/30 transition-all duration-300 shadow-lg shadow-black/15 group backdrop-blur-md"
                >
                  <p className="text-xs text-muted-foreground mb-1 uppercase tracking-wider font-semibold">{item.label}</p>
                  <p className="font-semibold text-foreground group-hover:text-cyan-300 transition-colors">{item.value}</p>
                </motion.div>
              ))}
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
