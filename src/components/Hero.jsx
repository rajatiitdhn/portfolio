import { motion, AnimatePresence } from "framer-motion";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { styles } from "../styles";

const roles = ["Frontend Developer", "Backend Developer", "DevOps Engineer"];

const Hero = ({ theme, setTheme }) => {
  const [text] = useTypewriter({
    words: roles,
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <section className="relative w-full h-screen mx-auto overflow-hidden">

      {/* Animated background blobs */}
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.6, 0.4] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute top-40 -right-40 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-3xl"
      />

      {/* Content */}
      <div className={`${styles.paddingX} relative z-10 max-w-7xl mx-auto flex flex-col justify-center h-full`}>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={styles.heroHeadText}
        >
          Hi, I’m <span className="text-[#915eff]">Rajat</span>
        </motion.h1>

        {/* Typing role */}
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-4 text-[22px] sm:text-[28px] font-semibold text-cyan-400"
        >
          {text}
          <Cursor cursorStyle="|" />
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className={`${styles.heroSubText} mt-6 max-w-2xl`}
        >
          I build scalable, secure, and high-performance web systems with modern technologies.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mt-10 flex gap-6 flex-wrap"
        >
          <a
            href="/resume.pdf"
            target="_blank"
            className="px-8 py-3 rounded-xl bg-cyan-500 text-black font-bold hover:bg-cyan-400 transition"
          >
            Download Resume
          </a>

          <a
            href="#contact"
            className="px-8 py-3 rounded-xl border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition"
          >
            Contact Me
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
     <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
