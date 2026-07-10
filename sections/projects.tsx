"use client";

import { useState } from "react";
import { projectsData } from "@/data/projects";
import ProjectCard from "@/components/project-card";
import { motion } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Award, Github, ExternalLink, ShieldCheck } from "lucide-react";

const filters = ["All", "Web App", "Frontend", "Backend", "Blockchain", "UI/UX"];

export default function Projects() {
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState<(typeof projectsData)[0] | null>(null);

  const filteredProjects =
    selectedFilter === "All"
      ? projectsData
      : projectsData.filter((p) => p.tags.includes(selectedFilter));

  const majorProjects = filteredProjects.filter((p) => !p.isPractice);
  const practiceProjects = filteredProjects.filter((p) => p.isPractice);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
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
              Portfolio
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold font-display text-white">Featured Projects</h2>
          </motion.div>

          {/* Filters */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-wrap gap-2"
          >
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 hover:scale-105 ${
                  selectedFilter === filter
                    ? "bg-gradient-to-r from-indigo-500 to-cyan-500 text-white shadow-[0_0_15px_rgba(99,102,241,0.25)]"
                    : "bg-[#0d111c]/50 border border-white/5 text-muted-foreground hover:text-foreground hover:bg-[#0d111c]"
                }`}
              >
                {filter}
              </button>
            ))}
          </motion.div>

          {/* Major Projects Grid */}
          {majorProjects.length > 0 && (
            <div className="space-y-6">
              <motion.h3 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-lg font-semibold uppercase tracking-wider text-indigo-300 font-display"
              >
                Applications & Systems
              </motion.h3>
              
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {majorProjects.map((project, index) => (
                  <motion.div
                    key={project.name}
                    variants={itemVariants}
                    className="h-full"
                  >
                    <ProjectCard
                      project={project}
                      onClick={() => setSelectedProject(project)}
                    />
                  </motion.div>
                ))}
              </motion.div>
            </div>
          )}

          {/* Practice/UI Projects Grid */}
          {practiceProjects.length > 0 && (
            <div className="space-y-6 pt-8">
              <div className="border-t border-white/5 pt-8">
                <motion.h3 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="text-lg font-semibold uppercase tracking-wider text-cyan-300 font-display"
                >
                  UI & Practice Projects
                </motion.h3>
                <p className="text-xs text-muted-foreground mt-1">
                  Interactive pixel-perfect replicas, sandbox animations, and client-side interfaces.
                </p>
              </div>

              <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
              >
                {practiceProjects.map((project) => (
                  <motion.div
                    key={project.name}
                    variants={itemVariants}
                    className="h-full"
                  >
                    <ProjectCard
                      project={project}
                      onClick={() => setSelectedProject(project)}
                      isCompact={true}
                    />
                  </motion.div>
                ))}
              </motion.div>
            </div>
          )}
        </div>
      </div>

      {/* Project Details Modal */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-2xl bg-[#0b0f19] border border-white/10 text-foreground rounded-2xl shadow-2xl">
          <DialogHeader className="space-y-3">
            {selectedProject?.badge && (
              <div className="inline-flex items-center gap-1.5 self-start px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-purple-500 to-cyan-500 text-white border border-white/10 shadow-[0_0_10px_rgba(99,102,241,0.3)]">
                <Award className="w-3.5 h-3.5 text-yellow-300" />
                {selectedProject.badge}
              </div>
            )}
            <DialogTitle className="text-2xl font-bold font-display text-white">{selectedProject?.name}</DialogTitle>
            <DialogDescription className="text-muted-foreground leading-relaxed">
              {selectedProject?.description}
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-6 mt-4">
            {/* Features */}
            {selectedProject?.features && (
              <div className="space-y-2">
                <h4 className="font-semibold text-sm uppercase tracking-wider text-indigo-300 flex items-center gap-1.5 font-display">
                  <ShieldCheck className="w-4 h-4 text-cyan-400" />
                  Key Achievements & Features
                </h4>
                <ul className="grid grid-cols-1 gap-2 text-sm text-muted-foreground bg-[#05060A]/40 p-4 rounded-xl border border-white/5">
                  {selectedProject.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-cyan-400 mt-1">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            {/* Tech Stack */}
            <div className="space-y-2">
              <h4 className="font-semibold text-sm uppercase tracking-wider text-indigo-300 font-display">
                Technologies & Tools
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject?.techStack?.map((tech, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 rounded-lg text-xs bg-indigo-500/10 text-cyan-300 border border-indigo-500/10 font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 pt-2 border-t border-white/5">
              <a
                href={selectedProject?.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-600 text-white font-semibold text-sm shadow-md transition-all duration-300"
              >
                <Github className="w-4 h-4" />
                View on GitHub
              </a>
              {selectedProject?.liveUrl && (
                <a
                  href={selectedProject?.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-white/10 hover:border-cyan-500/40 text-foreground hover:bg-white/5 font-semibold text-sm transition-all duration-300"
                >
                  <ExternalLink className="w-4 h-4 text-cyan-400" />
                  Live Demo
                </a>
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
