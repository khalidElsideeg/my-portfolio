import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <section className="border-b border-neutral-900 pb-24">
      <motion.h2
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="my-20 text-center text-3xl font-titleFont bg-gradient-to-r from-pink-200 via-slate-400 to-purple-600 lg:text-4xl tracking-tighter bg-clip-text text-transparent"
      >
        Experience
      </motion.h2>
      {EXPERIENCES.map((experience, idx) => (
        <div key={idx} className="mb-8 flex flex-wrap lg:justify-center">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="w-full lg:w-1/4"
          >
            <p className="mb-2 text-neutral-400 text-sm">{experience.year}</p>
          </motion.div>
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="w-full lg:w-3/4 max-w-xl"
          >
            <h6 className="mb-2 font-semibold">
              {experience.role} -{" "}
              <span className="text-sm text-purple-100">
                {experience.company}
              </span>
            </h6>
            <p className="text-sm mb-2 text-neutral-400">
              {experience.description}
            </p>
            {experience.technologies.map((tech, idx) => (
              <span
                className="text-sm bg-neutral-900 text-purple-800 rounded mr-2 font-medium px-2 py-1"
                key={idx}
              >
                {tech}
              </span>
            ))}
          </motion.div>
        </div>
      ))}
    </section>
  );
};

export default Experience;
