import { useState } from "react";
import { motion, useAnimationControls } from "framer-motion";

const TextSpan = ({ children }) => {
  const controls = useAnimationControls();
  const [isPlaying, setIsPlaying] = useState(false);

  const rubberBand = () => {
    controls.start({
      transform: [
        "scale3d(1, 1, 1)",
        "scale3d(1.25, 0.75, 1)",
        "scale3d(0.75, 1.25, 1)",
        "scale3d(1.15, 0.85, 1)",
        "scale3d(0.95, 1.05, 1)",
        "scale3d(1.05, .95, 1)",
        "scale3d(1, 1, 1)",
      ],
      transition: {
        duration: 0.6,

        type: "spring",
      },
    });
    setIsPlaying(true);
  };
  return (
    <motion.span
      animate={controls}
      onMouseOver={() => {
        if (!isPlaying) {
          rubberBand();
        }
      }}
      onAnimationComplete={() => setIsPlaying(false)}
      className=" hover:text-rose-400 inline-block"
    >
      {children}
    </motion.span>
  );
};

export default TextSpan;
