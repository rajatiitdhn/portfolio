import { motion } from "framer-motion";
import { technologies } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

const SkillCard = ({ index, name, icon }) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.1, 0.6)}
      whileHover={{ scale: 1.08 }}
      className="bg-black-200 w-[110px] h-[110px] rounded-xl flex flex-col items-center justify-center gap-2 cursor-pointer border border-white/10 hover:border-cyan-400 transition"
    >
      <img
        src={icon}
        alt={name}
        className="w-10 h-10 object-contain"
      />
      <p className="text-cyan-400 text-[13px] font-medium text-center">
        {name}
      </p>
    </motion.div>
  );
};

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>
          My <span className="text-cyan-400">Skills</span>
        </h2>
      </motion.div>

      <div className="mt-14 flex flex-wrap justify-center gap-8">
        {technologies.map((tech, index) => (
          <SkillCard key={tech.name} index={index} {...tech} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "skills");
