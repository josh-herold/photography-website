import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import AnimatedText from './AnimatedText';
import HoverImage from './HoverImage';
import './Portfolio.css';

function Portfolio() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, y: 150 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <div className="portfolio" id="portfolio">
      <div className="portfolio-text">
        <AnimatedText text='portfolio' />
      </div>

      <motion.div
        className="portfolio-container"
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div className="image" variants={imageVariants}>
          <HoverImage
            to='/berlin'
            imgSrc="/photography/images/LowRes/alex.jpg"
            text="BERLIN"
          />

        </motion.div>


        <motion.div className="image" variants={imageVariants}>
          <HoverImage
            to='/tanzania'
            imgSrc="/photography/images/LowRes/kili.jpg"
            text="TANZANIA"
          />

        </motion.div>
        <motion.div className="image" variants={imageVariants}>
          <HoverImage
            to='/newyork'
            imgSrc="/photography/images/LowRes/newyork1.jpg"
            text="NEW YORK"
          />

        </motion.div>
        <motion.div className="image" variants={imageVariants}>
          <HoverImage
            to='/thailand'
            imgSrc="/photography/images/LowRes/thailand.jpg"
            text="THAILAND"
          />

        </motion.div>
        <motion.div className="image" variants={imageVariants}>
          <HoverImage
            to='/istanbul'
            imgSrc="/photography/images/LowRes/istanbul.jpg"
            text="ISTANBUL"
          />

        </motion.div>
      </motion.div>
    </div>
  );
}

export default Portfolio;
