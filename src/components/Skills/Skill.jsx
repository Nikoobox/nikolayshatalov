import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import "./skills.scss";

const Skill = ({ children }) => {
  const { ref, inView } = useInView({
    // visible percentage before trigering
    threshold: 0.5,
  });
  return (
    <motion.div
      ref={ref}
      className="box"
      initial={{ y: 30, opacity: 0 }}
      animate={inView && { y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

export default Skill;
