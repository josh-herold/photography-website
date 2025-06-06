// components/AnimatedText.jsx
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const letterAnimation = {
  hidden: { opacity: 0, y: 10 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.05,
      duration: 0.5
    }
  })
};

const AnimatedElement = ({ text = "", className = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20% 0px" }); // startet etwas früher

  return (
    <h1 className={className} ref={ref}>
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          custom={index}
          variants={letterAnimation}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          style={{ display: "inline-block" }}
        >
          {char}
        </motion.span>
      ))}
    </h1>
  );
};

export default AnimatedElement;
