import React from "react";
import { heroData } from "../Banner/BannerData";
import { motion } from "framer-motion";
import { staggerContainer, fade } from "./motion";
import TextSpan from "./TextSpan";

const Hero = () => {
  return (
    <motion.section
      variants={staggerContainer(0.4, 1.3)}
      initial="hidden"
      animate="show"
      className="relative w-full p-10 flex flex-col justify-center mb-20 md:mb-0 border-2p-4 items-center"
    >
      <motion.h1
        variants={fade(0.8, 0.4)}
        className="text-4xl lg:text-7xl font-bold mb-4 inline-block text-purple-600"
      >
        {heroData.name.split("").map((letter, index) => (
          <TextSpan key={index}>{letter === " " ? "\u00a0" : letter}</TextSpan>
        ))}
      </motion.h1>
      <motion.h2
        variants={fade(0.8, 0.5)}
        className="text-3xl lg:text-6xl font-bold mb-4 text-white inline-block whitespace-normal"
      >
        {heroData.subheading.split("").map((letter, index) => {
          if (letter === " ") {
            return "\u00a0";
          }
          return (
            <TextSpan key={index}>
              {letter === " " ? "\u00a0" : letter}
            </TextSpan>
          );
        })}
      </motion.h2>
      <motion.p
        variants={fade(0.8, 0.7)}
        className="max-w-xl text-base md:text-lg mb-6 text-white"
      >
        {heroData.description}
      </motion.p>
      <motion.a
        variants={fade(0.8, 0.7)}
        href="/#projects"
        className="px-12 py-2.5 text-lg rounded-md text-white border-[0.1rem] border-primary bg-primary/10 hover:bg-primary/[.05] font-medium transition-colors ease-in-out duration-200"
      >
        Ver Mas
      </motion.a>
    </motion.section>
  );
};

export default Hero;
