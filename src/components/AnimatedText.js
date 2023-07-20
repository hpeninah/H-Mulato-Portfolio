import React from "react";
import { motion } from "framer-motion";

const AnimatedText = ({ text, className = "" }) => {
  const quote = {
    initial: { 
      opacity: 1 
    },
    animate: {
      opacity: 1,
      transition: {
        delay: 0.5,
        staggerChildren: 0.08,
      },
    },
  };

  const words = {
    initial: {
      opacity: 0,
      y: 50,
    },
    animate: {
      opacity: 1,
      y: 0,
    }
  }

  return (
    <div
      className="w-full mx-auto py-2 flex items-center justify-center text-center
    overflow-hidden "
    >
      <motion.h1
        className={`inline-block w-full text-dark font-bold capitalized text-8xl ${className} load-screen--message dark:text-light`}
        variants={quote}
        initial="initial"
        animate="animate"
      >
        {text.split("").map((char, index) => {
          return (
            <motion.span key={char + "-" + index} variants={words}>
              {char}
            </motion.span>
          )
        })}
      </motion.h1>
    </div>
  );
};

export default AnimatedText;
