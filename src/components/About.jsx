import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";
import developer from "../assets/3d-website-developer-working-on-laptop-illustration-png.webp";

const About = () => {
  return (
    <section className="border-b border-neutral-900 pb-4 ">
      <motion.h2
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="lg:mt-16 lg:mb-0 my-10 lg:my-0 text-center text-3xl font-titleFont bg-gradient-to-r from-pink-200 via-slate-400 to-purple-600 lg:text-4xl tracking-tighter bg-clip-text text-transparent"
      >
        About Me
      </motion.h2>
      <div className="flex flex-wrap items-center justify-center">
        <div className="w-full lg:w-1/2 hidden lg:flex">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className=" flex w-full items-center justify-center"
          >
            <img src={developer} alt="Dev_Image" className="rounded-2xl " />
          </motion.div>
        </div>
        <div className="w-full lg:w-1/2 flex items-center justify-center">
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex  items-center lg:items-start"
          >
            <p className="-mt-12 lg:mt-0 tracking-tighter py-10 max-w-xl">
              {ABOUT_TEXT}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
