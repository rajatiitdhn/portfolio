import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { competitiveProfiles } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { Tilt } from "react-tilt";

const CPCard = ({ index, data }) => (
  <Tilt  options={{
      max: 20,
      scale: 1.05,
      speed: 400,
    }}
    className="w-full sm:w-[320px]">
    <motion.div
      variants={fadeIn("up", "spring", index * 0.3, 0.75)}
      className="bg-black-200 rounded-2xl p-6 w-full sm:w-[320px] relative "
    >
      {/* top gradient */}
      <div
        className={`absolute inset-x-0 top-0 h-[4px] rounded-t-2xl bg-gradient-to-r ${data.color}`}
      />

      {/* header */}
      <div className="flex items-center justify-between mb-4">
        <img src={data.icon} alt={data.platform} className="w-8 h-8" />
        <a
          href={data.link}
          target="_blank"
          rel="noreferrer"
          className="text-secondary hover:text-white"
        >
          ↗
        </a>
      </div>

      <h3 className="text-white text-[22px] font-bold">{data.platform}</h3>
      <p className="text-secondary text-sm mb-6">{data.username}</p>

      {/* stats */}
      <div className="flex flex-col gap-3">
        <div className="flex justify-between bg-black-100 px-4 py-2 rounded-lg">
          <span className="text-secondary text-sm">Current Rating</span>
          <span className="text-cyan-400 font-semibold">
            {data.currentRating}
          </span>
        </div>

        <div className="flex justify-between bg-black-100 px-4 py-2 rounded-lg">
          <span className="text-secondary text-sm">Max Rating</span>
          <span className="text-yellow-400 font-semibold">
            🏆 {data.maxRating}
          </span>
        </div>

        <div className="flex justify-between bg-black-100 px-4 py-2 rounded-lg">
          <span className="text-secondary text-sm">Title</span>
          <span className="bg-blue-500/20 text-blue-400 px-3 rounded-full text-sm">
            {data.title}
          </span>
        </div>

        <div className="flex justify-between bg-black-100 px-4 py-2 rounded-lg">
          <span className="text-secondary text-sm">Problems Solved</span>
          <span className="text-green-400 font-semibold">{data.solved}</span>
        </div>
      </div>
    </motion.div>
  </Tilt>
);

const CompetitiveProgramming = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>
          Competitive <span className="text-cyan-400">Programming</span>
        </h2>
        <p className={`${styles.sectionSubText} mt-2`}>
          Solved <span className="text-purple-400 font-semibold">1200+</span>{" "}
          problems across multiple platforms
        </p>
      </motion.div>

      <div className="mt-12 flex flex-wrap gap-8">
        {competitiveProfiles.map((profile, index) => (
          <CPCard key={profile.platform} index={index} data={profile} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(CompetitiveProgramming, "cp");
