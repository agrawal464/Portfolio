import { ExternalLink, Github, Award } from 'lucide-react';

interface ProjectCardProps {
  project: {
    name: string;
    description: string;
    githubUrl: string;
    liveUrl?: string;
    tags: string[];
    techStack: string[];
    badge?: string;
  };
  onClick: () => void;
  isCompact?: boolean;
}

export default function ProjectCard({ project, onClick, isCompact = false }: ProjectCardProps) {
  return (
    <div
      onClick={onClick}
      className={`group relative rounded-2xl glass-card cursor-pointer transition-all duration-300 flex flex-col justify-between h-full ${
        isCompact 
          ? "p-5 border-white/5 hover:border-cyan-500/25 hover:shadow-[0_4px_20px_rgba(99,102,241,0.08)] hover:-translate-y-1" 
          : "p-6 border-white/5 hover:border-cyan-500/35 hover:shadow-[0_10px_30px_-10px_rgba(99,102,241,0.25)] hover:-translate-y-1.5"
      }`}
    >
      <div className="space-y-3">
        {/* Badge */}
        {!isCompact && project.badge && (
          <div className="absolute -top-3 right-4 z-20 px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-bold tracking-wider bg-gradient-to-r from-purple-500 via-indigo-500 to-cyan-500 text-white shadow-[0_0_15px_rgba(99,102,241,0.4)] border border-white/10 flex items-center gap-1">
            <Award className="w-3 h-3 text-yellow-300 animate-spin" style={{ animationDuration: '6s' }} />
            {project.badge}
          </div>
        )}

        <div>
          <h3 className={`font-semibold group-hover:text-cyan-400 transition-colors font-display text-white ${isCompact ? "text-lg" : "text-xl"}`}>
            {project.name}
          </h3>
          <p className={`text-muted-foreground mt-2 line-clamp-3 leading-relaxed ${isCompact ? "text-xs" : "text-sm"}`}>
            {project.description}
          </p>
        </div>
      </div>

      <div className="space-y-4 pt-4">
        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-1.5">
          {project.techStack.slice(0, isCompact ? 2 : 3).map((tech, i) => (
            <span
              key={i}
              className="px-2 py-0.5 rounded text-[10px] sm:text-xs bg-indigo-500/10 text-indigo-300 border border-indigo-500/10"
            >
              {tech}
            </span>
          ))}
          {project.techStack.length > (isCompact ? 2 : 3) && (
            <span className="px-2 py-0.5 rounded text-[10px] sm:text-xs text-muted-foreground bg-white/5">
              +{project.techStack.length - (isCompact ? 2 : 3)}
            </span>
          )}
        </div>

        {/* Links */}
        <div className="flex items-center justify-between pt-3 border-t border-white/5">
          <div className="flex gap-2">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="p-1.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-white/5 transition-all duration-300"
              title="View on GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="p-1.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-white/5 transition-all duration-300"
                title="Live Demo"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
          <span className="text-[11px] text-muted-foreground group-hover:text-cyan-400 group-hover:translate-x-0.5 transition-all duration-300">
            Details →
          </span>
        </div>
      </div>
    </div>
  );
}
