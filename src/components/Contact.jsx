import { CONTACT } from "../constants";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section className="border-b border-neutral-900 pb-24">
      <motion.h2
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-3xl font-titleFont bg-gradient-to-r from-pink-200 via-slate-400 to-purple-600 lg:text-4xl tracking-tighter bg-clip-text text-transparent"
      >
        Get In Touch
      </motion.h2>
      <div className="text-center tracking-tighter">
        <motion.p
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="my-4"
        >
          {CONTACT.address}
        </motion.p>
        <motion.p
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="my-4"
        >
          <a href="https://wa.me/507764380">{CONTACT.phoneNo}</a>
        </motion.p>
        <motion.p
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <a
            className="border-b"
            href="mailto:khalidelsideeg95@gmail.com"
            target="_blank"
          >
            {CONTACT.email}
          </a>
        </motion.p>
      </div>
    </section>
  );
};

export default Contact;
