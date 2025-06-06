import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './HoverImage.css';

const HoverImage = ({ to, imgSrc, text }) => {
  return (
    <Link to={to} className="hover-wrapper">
      <motion.div
        className="hover-container"
        whileHover="hover"
        initial="rest"
        animate="rest"
      >
        <motion.img
          src={imgSrc}
          alt={text}
          variants={{
            hover: { scale: 1.02 },
            rest: { scale: 1 },
          }}
          transition={{ duration: 0.3 }}
        />

        <motion.div
          className="hover-overlay"
          variants={{
            hover: { opacity: 1 },
            rest: { opacity: 0 },
          }}
          transition={{ duration: 0.6 }}
        >
          <span>{text}</span>
        </motion.div>
      </motion.div>
    </Link>
  );
};

export default HoverImage;
