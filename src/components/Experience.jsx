import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { motion } from "framer-motion";
import { Tilt } from "react-tilt";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant, fadeIn } from "../utils/motion";

const ExperienceCard = ({ experience, index }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "transparent",
        boxShadow: "none",
        padding: 0,
      }}
      contentArrowStyle={{
        borderRight: "7px solid rgba(56, 189, 248, 0.6)",
      }}
      date={experience.date}
      iconStyle={{
        background: experience.iconBg,
        boxShadow: "0 0 0 4px rgba(56,189,248,0.4)",
      }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <motion.div
        variants={fadeIn("up", "spring", index * 0.25, 0.75)}
      >
        <Tilt
          options={{
            max: 12,
            scale: 1.04,
            speed: 450,
          }}
        >
          <div className="relative rounded-2xl p-[1px] bg-gradient-to-r from-cyan-400/40 to-purple-500/40">
            <div className="rounded-2xl bg-black-200/80 backdrop-blur-xl p-6 sm:p-7 border border-white/10 hover:border-cyan-400 transition-all duration-300">
              
              <h3 className="text-white text-[22px] font-bold leading-tight">
                {experience.title}
              </h3>

              <p className="text-cyan-400 text-[15px] font-medium mt-1">
                {experience.company_name}
              </p>

              <ul className="mt-4 space-y-2 list-disc ml-5">
                {experience.points.map((point, idx) => (
                  <li
                    key={idx}
                    className="text-white/90 text-[14px] leading-relaxed tracking-wide"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Tilt>
      </motion.div>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      {/* Section Header */}
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>
          What I’ve accomplished so far
        </p>

        <h2 className={styles.sectionHeadText}>
          Achievements{" "}
          <span className="text-cyan-400">& Milestones</span>
        </h2>
      </motion.div>

      {/* Timeline */}
      <div className="mt-20">
        <VerticalTimeline
          lineColor="rgba(56, 189, 248, 0.35)"
        >
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={index}
              experience={experience}
              index={index}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "achievements");
