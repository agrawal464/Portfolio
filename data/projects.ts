export interface Project {
  name: string;
  description: string;
  githubUrl: string;
  liveUrl: string;
  tags: string[];
  techStack: string[];
  features: string[];
  isFeatured?: boolean;
  isPractice?: boolean;
  badge?: string;
}

export const projectsData: Project[] = [
  {
    name: "FlexiPay",
    description: "Decentralized payment platform with Ethereum transfers and privacy-preserving KYC using Anon Aadhaar. Won 1st Place in Blockchain Track.",
    githubUrl: "https://github.com/agrawal464/FlexiPay",
    liveUrl: "https://flexipay-dapp.vercel.app",
    tags: ["Web App", "Blockchain"],
    techStack: ["Next.js", "TypeScript", "Solidity", "Ethereum", "Anon Aadhaar"],
    features: [
      "1st Place Blockchain Track @ Hack on Hills 6.0 (NIT Hamirpur, 200+ teams)",
      "Ethereum integration for secure crypto transfers",
      "Privacy-preserving KYC verification with Anon Aadhaar",
      "Real-time transaction alerts using Soundbox API",
      "Type-safe frontend with TypeScript and secure smart contracts",
    ],
    isFeatured: true,
    badge: "🏆 1st Place @ NIT Hamirpur Hackathon",
  },
  {
    name: "AI Trip Planner",
    description: "AI-powered travel planning app that generates personalized itineraries, hotel suggestions, and day-by-day plans based on your destination and budget.",
    githubUrl: "https://github.com/agrawal464/Ai-trip-planner",
    liveUrl: "https://ai-trip-planner-omega-three.vercel.app",
    tags: ["Web App", "AI"],
    techStack: ["React.js", "JavaScript", "Gemini AI", "Firebase", "Tailwind CSS"],
    features: [
      "AI-generated personalized travel itineraries using Gemini API",
      "Smart hotel recommendations based on budget and location",
      "Day-by-day activity planner with time and cost estimates",
      "Google OAuth authentication with Firebase",
      "Fully responsive and modern UI with smooth animations",
    ],
    isFeatured: true,
    badge: "🤖 AI-Powered",
  },
  {
    name: "Interview Coach AI",
    description: "AI-powered mock interview platform that simulates real technical and HR interviews, evaluates answers, and gives instant performance feedback.",
    githubUrl: "https://github.com/agrawal464/Interview-Coach-AI",
    liveUrl: "https://interview-coach-ai--agrawalhimansh1.replit.app/",
    tags: ["Web App", "AI"],
    techStack: ["TypeScript", "React.js", "Gemini AI", "Tailwind CSS"],
    features: [
      "AI-driven interview simulation with real-time Q&A",
      "Instant answer evaluation with detailed scoring feedback",
      "Supports technical, HR, and behavioral interview formats",
      "Speech-to-text input for natural voice-based responses",
      "Session history and performance analytics dashboard",
    ],
    isFeatured: true,
    badge: "🎤 AI Mock Interviews",
  },
  {
    name: "Learning Platform",
    description: "Full-stack e-learning platform with course management, progress tracking, quizzes, and an AI-assisted learning experience for students.",
    githubUrl: "https://github.com/agrawal464/learning-platform",
    liveUrl: "https://github.com/agrawal464/learning-platform",
    tags: ["Web App", "Full Stack"],
    techStack: ["React.js", "Node.js", "MongoDB", "Tailwind CSS"],
    features: [
      "Course creation and management for instructors",
      "Student progress tracking with visual dashboards",
      "Interactive quizzes with instant grading",
      "AI-assisted content recommendations",
      "Responsive design with modern dark theme UI",
    ],
  },
  {
    name: "Employee Management System",
    description: "Role-based access control system with real-time task status dashboard and local storage persistence.",
    githubUrl: "https://github.com/agrawal464/Employee_management_system",
    liveUrl: "https://employee-management-system-seven-olive.vercel.app",
    tags: ["Web App", "Frontend"],
    techStack: ["React.js", "JavaScript", "Tailwind CSS"],
    features: [
      "Role-based access control (Admin & Employee dashboards)",
      "Real-time task assignment and status updates",
      "Local storage persistence for a seamless, stateful experience",
      "Dynamic task categorization: Completed, Pending, Failed, New",
      "Clean, modern fully responsive UI layout",
    ],
  },
  {
    name: "URL Shortener",
    description: "Built a URL shortener with RESTful API reducing URL length by 70% and enabling persistent redirection.",
    githubUrl: "https://github.com/agrawal464",
    liveUrl: "https://url-shortener-agrawal.vercel.app",
    tags: ["Web App", "Backend"],
    techStack: ["Node.js", "MongoDB", "Express"],
    features: [
      "RESTful API for the full lifecycle of shortening links",
      "70% URL length reduction for long web addresses",
      "Persistent redirection functionality with database caching",
      "MongoDB database indexing for optimized query times",
      "Comprehensive Swagger API documentation",
    ],
  },
  {
    name: "Gemini Clone",
    description: "UI clone inspired by Google Gemini/AI assistants showcasing clean layouts and modern responsive design.",
    githubUrl: "https://github.com/agrawal464/gemini-clone",
    liveUrl: "https://gemini-ai-replica.vercel.app",
    tags: ["Frontend", "UI/UX"],
    techStack: ["React", "JavaScript", "Tailwind CSS"],
    features: [
      "Responsive AI chat interface looking exactly like Gemini",
      "Clean and modern sidebar layout with history support",
      "Smooth animations and transitions on state change",
      "Dark mode support by default",
      "Mobile-first responsive fluid grids",
    ],
    isPractice: true,
  },
  {
    name: "iPhone Website",
    description: "Modern landing page inspired by Apple's iPhone website with smooth sections and product-focused design.",
    githubUrl: "https://github.com/agrawal464/iphone-website",
    liveUrl: "https://apple-iphone-mockup.vercel.app",
    tags: ["Frontend", "UI/UX"],
    techStack: ["JavaScript", "HTML", "CSS"],
    features: [
      "Smooth scroll sections with product showcase galleries",
      "Responsive pixel-perfect Apple grid layouts",
      "Product color toggler and configuration preview",
      "High-quality optimized imagery integration",
      "Clean and modern standard CSS animations",
    ],
    isPractice: true,
  },
  {
    name: "Zentry",
    description: "Visually-rich landing page with animations and modern styling for gaming or product branding.",
    githubUrl: "https://github.com/agrawal464/Zentry",
    liveUrl: "https://zentry-gaming-clone.vercel.app",
    tags: ["Frontend", "UI/UX"],
    techStack: ["JavaScript", "React", "Tailwind CSS"],
    features: [
      "Eye-catching modern animations and screen transitions",
      "Highly stylized responsive typography and grids",
      "Smooth custom scroll containers and interactions",
      "Visually rich design for gaming or digital product landing",
      "Optimized for smooth high-FPS performance",
    ],
    isPractice: true,
  },
];
