import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="relative bg-black-100 mt-20">
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative max-w-7xl mx-auto px-6 py-12"
      >
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          
          {/* Left */}
          <div className="text-center md:text-left">
            <h3 className="text-white text-2xl font-bold">
              Rajat <span className="text-cyan-400">.</span>
            </h3>
            <p className="text-secondary mt-2 text-sm">
              Fullstack Developer • DevOps & Cloud Enthusiast
            </p>
          </div>

          {/* Center */}
          <div className="flex gap-6 text-secondary">
            <a
              href="https://github.com/rajatiitdhn"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/rajat-kumar-saw-6317b0289"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition"
            >
              LinkedIn
            </a>
            <a
              href="https://codeforces.com/profile/Rajat31"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition"
            >
              Codeforces
            </a>
            <a
              href="https://leetcode.com/rajat31"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition"
            >
              LeetCode
            </a>
          </div>

          {/* Right */}
          <div className="text-center md:text-right">
            <p className="text-secondary text-sm">Email</p>
            <a
              href="mailto:rrrsaw77@gmail.com"
              className="text-white hover:text-cyan-400 transition"
            >
              rksaw3232@gmail.com
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-10 border-t border-white/10 pt-6 text-center">
          <p className="text-secondary text-sm">
            © {new Date().getFullYear()} Rajat. Made with ❤️
          </p>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
