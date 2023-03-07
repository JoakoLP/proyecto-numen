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
      className="relative w-full p-10 flex flex-col justify-center mb-20 md:mb-0 border-2p-4 items-center bg-black"
    >
      <motion.h1
        variants={fade(0.8, 0.4)}
        className="text-4xl lg:text-7xl font-bold mb-4 inline-block text-purple-600"
      >
        {heroData.name.split("").map((letter, index) => (
          <TextSpan key={index}>{letter === " " ? "\u00a0" : letter}</TextSpan>
        ))}
      </motion.h1>
    </motion.section>
  );
};

export default Hero;
