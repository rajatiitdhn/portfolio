import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  Code2,
  Terminal,
  ArrowUpRight,
  ArrowUp,
  CheckCircle2,
} from "lucide-react";

const socials = [
  {
    name: "GitHub",
    icon: Github,
    link: "https://github.com/rajatiitdhn",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    link: "https://www.linkedin.com/in/rajat-kumar-saw-6317b0289",
  },
  {
    name: "Codeforces",
    icon: Code2,
    link: "https://codeforces.com/profile/Rajat31",
  },
  {
    name: "LeetCode",
    icon: Terminal,
    link: "https://leetcode.com/rajat31",
  },
];

const Footer = () => {
  return (
    <footer className="relative mt-28 bg-black-100 overflow-hidden">

      {/* Background glow */}
      <div className="absolute -top-40 -left-40 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -right-40 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative max-w-7xl mx-auto px-6 py-14"
      >
        {/* Top animated gradient line */}
        <div className="mb-12 h-[2px] w-full bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent animate-pulse" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-10">

          {/* Brand + Status */}
          <div className="text-center md:text-left">
            <h3 className="text-white text-2xl font-bold tracking-wide">
              Rajat<span className="text-cyan-400">.</span>
            </h3>

            <p className="mt-2 text-secondary text-sm max-w-xs">
              Full-Stack Developer • DevOps & Cloud Enthusiast
            </p>

            {/* Status badge */}
            <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-400 text-sm font-medium">
              <CheckCircle2 size={16} />
              Open to opportunities
            </div>
          </div>

          {/* Social links with text */}
          <div className="flex flex-col gap-3">
            {socials.map(({ name, icon: Icon, link }) => (
              <motion.a
                key={name}
                href={link}
                target="_blank"
                rel="noreferrer"
                whileHover={{ x: 6 }}
                className="flex items-center gap-3 text-secondary hover:text-white transition"
              >
                <Icon size={18} className="text-cyan-400" />
                <span className="text-sm">{name}</span>
                <ArrowUpRight size={14} />
              </motion.a>
            ))}
          </div>

          {/* Contact */}
          <div className="text-center md:text-right">
            <p className="text-secondary text-sm">Contact</p>
            <a
              href="mailto:rksaw3232@gmail.com"
              className="mt-2 inline-flex items-center gap-2 text-white hover:text-cyan-400 transition"
            >
              <Mail size={16} />
              rksaw3232@gmail.com
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-8 border-t border-white/10 pt-6 text-center text-secondary text-sm">
          © {new Date().getFullYear()} Rajat • Built with React, Tailwind & Framer Motion
        </div>
      </motion.div>

      {/* Back to top button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 right-6 z-50 p-3 rounded-xl bg-cyan-500 text-black shadow-lg hover:bg-cyan-400 transition"
        aria-label="Back to top"
      >
        <ArrowUp size={20} />
      </motion.button>
    </footer>
  );
};

export default Footer;
