import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`
        ${styles.paddingX}
        fixed top-0 w-full z-20 transition-all duration-300
        ${scrolled
          ? "bg-black/60 backdrop-blur-md shadow-lg"
          : "bg-transparent"}
      `}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4">

        <Link
          to="/"
          className="flex items-center gap-3"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <motion.img
            src={logo}
            alt="logo"
            className="w-9 h-9 object-contain"
            whileHover={{ rotate: 10, scale: 1.1 }}
          />
          <span className="text-white text-[18px] font-bold tracking-wide">
            Rajat
            <span className="hidden sm:inline text-cyan-400"> | DevOps</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden sm:flex gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              onClick={() => setActive(link.title)}
              className="relative cursor-pointer group"
            >
              <a
                href={`#${link.id}`}
                className={`text-[16px] font-medium transition ${
                  active === link.title
                    ? "text-white"
                    : "text-secondary"
                }`}
              >
                {link.title}
              </a>

              {/* Animated underline */}
              <span
                className={`absolute left-0 -bottom-1 h-[2px] bg-cyan-400 transition-all duration-300
                ${active === link.title ? "w-full" : "w-0 group-hover:w-full"}`}
              />
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className="sm:hidden flex items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-7 h-7 cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {toggle && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="sm:hidden bg-black/80 backdrop-blur-md mx-4 mt-2 rounded-2xl p-6"
          >
            <ul className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`text-[16px] font-medium ${
                    active === link.title
                      ? "text-white"
                      : "text-secondary"
                  }`}
                  onClick={() => {
                    setActive(link.title);
                    setToggle(false);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
