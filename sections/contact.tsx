"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, MailIcon } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    console.log("Form submitted:", formData);
    
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "" });
    }, 1000);
  };

  const socialLinks = [
    {
      name: "Email",
      href: "mailto:agrawalhimanshu464@gmail.com",
      icon: MailIcon,
    },
    {
      name: "GitHub",
      href: "https://github.com/agrawal464",
      icon: Github,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/himanshu-agrawal-8029b1278/",
      icon: Linkedin,
    },
  ];

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="space-y-12">
          
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="space-y-4 text-center"
          >
            <p className="text-sm text-cyan-400 font-semibold uppercase tracking-wider glow-text-accent">
              Get in touch
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold font-display text-white">Let's talk</h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Have a question, an opportunity, or want to collaborate? Feel free to drop a message!
            </p>
          </motion.div>

          {/* Form */}
          <motion.form 
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="space-y-6 p-6 sm:p-8 rounded-2xl glass-card border border-white/5 shadow-2xl relative"
          >
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium text-indigo-200">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2.5 rounded-xl bg-secondary/30 border border-white/5 focus:border-cyan-500/50 outline-none transition-all duration-300 text-foreground"
                placeholder="Your name"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-indigo-200">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2.5 rounded-xl bg-secondary/30 border border-white/5 focus:border-cyan-500/50 outline-none transition-all duration-300 text-foreground"
                placeholder="your@email.com"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-indigo-200">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-2.5 rounded-xl bg-secondary/30 border border-white/5 focus:border-cyan-500/50 outline-none transition-all duration-300 text-foreground resize-none"
                placeholder="Your message..."
              />
            </div>

            <Button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 text-white font-semibold py-2.5 rounded-xl shadow-[0_0_20px_rgba(99,102,241,0.2)] hover:shadow-[0_0_30px_rgba(99,102,241,0.4)] transition-all duration-300 border-0"
              size="lg"
            >
              {loading ? "Sending..." : "Send Message"}
            </Button>
          </motion.form>

          {/* Direct contact & socials */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="border-t border-white/5 pt-12"
          >
            <div className="text-center space-y-6">
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-widest mb-3 font-semibold">Or reach out directly</p>
                <a
                  href="mailto:agrawalhimanshu464@gmail.com"
                  className="inline-block text-lg font-semibold text-cyan-400 hover:text-cyan-300 glow-text-accent transition-colors font-display"
                >
                  agrawalhimanshu464@gmail.com
                </a>
              </div>

              <div className="flex justify-center gap-4">
                {socialLinks.map((link, index) => {
                  const Icon = link.icon;
                  return (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="p-3 rounded-xl bg-[#0d111c]/55 border border-white/5 hover:border-cyan-500/30 text-muted-foreground hover:text-cyan-300 transition-all duration-300 shadow-md"
                      aria-label={link.name}
                    >
                      <Icon className="w-5 h-5" />
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
