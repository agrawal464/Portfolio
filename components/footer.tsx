import { Github, Linkedin, Mail } from 'lucide-react';
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();
 
  return (
    <footer className="border-t border-white/5 bg-transparent py-12 relative z-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center gap-6">
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/agrawal464"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-primary/10 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/himanshu-agrawal-8029b1278/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-primary/10 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:agrawalhimanshu464@gmail.com"
              className="p-2 rounded-lg hover:bg-primary/10 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
          <p className="text-sm text-muted-foreground text-center">
            © {currentYear} Himanshu Agrawal. Built with React, TypeScript & Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}
