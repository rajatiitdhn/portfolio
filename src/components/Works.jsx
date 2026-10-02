import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

import { ExternalLink } from "lucide-react";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  live_demo_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full border border-white/5 hover:border-cyan-400/40 transition-all duration-300"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />

          <div className="absolute inset-0 flex justify-end gap-2 m-3 card-img_hover">
            {live_demo_link && (
              <div
                onClick={() => window.open(live_demo_link, "_blank")}
                title="View Live Demo"
                className="bg-cyan-500 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer shadow-md hover:scale-110 transition"
              >
                <ExternalLink size={18} className="text-black" />
              </div>
            )}
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              title="View Source Code on GitHub"
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer shadow-md hover:scale-110 transition"
            >
              <img
                src={github}
                alt="source code"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px] leading-relaxed">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={`${name}-${tag.name}`}
              className={`text-[13px] px-2 py-0.5 rounded-md bg-white/5 ${tag.color}`}
            >
              #{tag.name}
            </span>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
         <h2 className={styles.sectionHeadText}>
          Pro<span className="text-cyan-400">jects</span>
        </h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          The projects below represent my practical exposure to full-stack
          development, security-focused systems, and problem-solving. They
          highlight my ability to design, implement, and optimize applications
          with a focus on reliability and performance.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");
