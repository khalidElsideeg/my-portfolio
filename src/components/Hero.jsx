import { HERO_CONTENT } from "./../constants/index";
import { motion } from "framer-motion";
import BackToTop from "./BackToTop";
import developer from "../assets/web-developer-4506461-3738664.webp";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.5, delay: delay } },
});

const Hero = () => {
  return (
    <section className="border-b border-neutral-900 pb-4 lg:mb-32">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="text-3xl pb-12 font-thin tracking-tighter lg:mt-10 lg:text-6xl font-titleFont"
            >
              Khalid Elsideeg
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 text-3xl lg:text-4xl tracking-tighter bg-clip-text text-transparent"
            >
              Front End Developer
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 py-6 font-light tracking-tighter max-w-xl"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2  flex items-center justify-center">
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className=" w-full flex items-center justify-center lg:p-8"
          >
            <img
              src={developer}
              alt="Dev_Image"
              className="object-contain rounded-md"
            />
          </motion.div>
        </div>
      </div>
      <BackToTop />
    </section>
  );
};

export default Hero;
