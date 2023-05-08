import React from "react";
import { motion } from "framer-motion";

const AnimatedText = ({ text, className = "" }) => {
  const quote = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: { staggerChildren: 1, delay:0.5 },
    },
  };

  const child = {
    initial: {
      opacity: 1,
      x: 0,
      y:0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      x: -20,
      y: 10,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  const words = text.split(" ");

  return (
    <div
      className="w-full mx-auto py-2 flex items-center justify-center text-center
    overflow-hidden"
    >
      <motion.h1
        className={`inline-block w-full text-dark font-bold capitalized text-8xl ${className}`}
        variants={quote}
        initial="initial"
        animate="animate"
      >
        {words.map((word, index) => [
          <motion.span variants={child} className="inline-block" key={index}>
            {word}&nbsp;
          </motion.span>,
        ])}
      </motion.h1>
    </div>
  );
};

export default AnimatedText;
