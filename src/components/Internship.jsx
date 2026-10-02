import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { motion } from "framer-motion";
import { Tilt } from "react-tilt";

import { styles } from "../styles";
import { internships } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant, fadeIn } from "../utils/motion";

const InternshipCard = ({ internship, index }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "transparent",
        boxShadow: "none",
        padding: 0,
      }}
      contentArrowStyle={{
        borderRight: "7px solid rgba(161, 0, 255, 0.6)",
      }}
      date={internship.date}
      iconStyle={{
        background: internship.iconBg,
        boxShadow: "0 0 0 4px rgba(161,0,255,0.4)",
      }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={internship.icon}
            alt={internship.company_name}
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
          <div className="relative rounded-2xl p-[1px] bg-gradient-to-r from-purple-500/40 to-pink-500/40">
            <div className="rounded-2xl bg-black-200/80 backdrop-blur-xl p-6 sm:p-7 border border-white/10 hover:border-purple-400 transition-all duration-300">
              
              {/* Role title */}
              <h3 className="text-white text-[22px] font-bold leading-tight">
                {internship.title}
              </h3>

              {/* Company name */}
              <p className="text-purple-400 text-[15px] font-medium mt-1">
                {internship.company_name}
              </p>

              {/* Location */}
              {internship.location && (
                <p className="text-white/50 text-[13px] mt-1">
                  📍 {internship.location}
                </p>
              )}

              {/* Tech stack badges */}
              {internship.techStack && internship.techStack.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-3">
                  {internship.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 text-[11px] font-medium rounded-full bg-purple-500/15 text-purple-300 border border-purple-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}

              {/* Description points */}
              <ul className="mt-4 space-y-2 list-disc ml-5">
                {internship.points.map((point, idx) => (
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

const Internship = () => {
  return (
    <>
      {/* Section Header */}
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>
          Where I've worked
        </p>

        <h2 className={styles.sectionHeadText}>
          Internship{" "}
          <span className="text-purple-400">Experience</span>
        </h2>
      </motion.div>

      {/* Timeline */}
      <div className="mt-20">
        <VerticalTimeline
          lineColor="rgba(161, 0, 255, 0.35)"
        >
          {internships.map((internship, index) => (
            <InternshipCard
              key={index}
              internship={internship}
              index={index}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Internship, "internship");
