import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { Tilt } from "react-tilt";
const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "transparent",
        boxShadow: "none",
        padding: 0,
      }}
      contentArrowStyle={{ borderRight: "7px solid #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
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
      <Tilt
        options={{
          max: 15,
          scale: 1.03,
          speed: 400,
        }}
      >
        <div className="bg-black-200 rounded-2xl p-6 border-2 border-white/10 hover:border-cyan-400 transition duration-300">
          <h3 className="text-white text-[22px] font-bold">
            {experience.title}
          </h3>

          <p className="text-secondary text-[15px] font-medium mt-1">
            {experience.company_name}
          </p>

          <ul className="mt-4 list-disc ml-5 space-y-2">
            {experience.points.map((point, index) => (
              <li
                key={`experience-point-${index}`}
                className="text-white-100 text-[14px] tracking-wide leading-relaxed"
              >
                {point}
              </li>
            ))}
          </ul>
        </div>
      </Tilt>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>
          What I’ve accomplished so far
        </p>

        <h2 className={styles.sectionHeadText}>
          Achievements{" "}
          <span className="text-cyan-400">& Milestones</span>
        </h2>
      </motion.div>

      <div className="mt-16 flex flex-col">
        <VerticalTimeline lineColor="rgba(56, 189, 248, 0.5)">
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "achievements");
