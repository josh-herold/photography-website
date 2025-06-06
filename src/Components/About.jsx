import React from 'react'
import { motion } from 'framer-motion';
import AnimatedText from './AnimatedText';
import ShiftUp from "./ShiftUp";
import './About.css';
import { Link } from 'react-router-dom';


function About() {

  return (

    <div>



      <div className="about" id='about'>
        <ShiftUp direction="right" delay={0.4}>
          <div className="about-header">

            <span className="letter">th</span>
            <span className="letter">at</span>
            <span className="letter">s</span>
            <span className="letter small">me</span>

          </div>
        </ShiftUp>

        <div className="about-text">
          <ShiftUp direction="up" delay={0.4}>
            <p>I'm a web designer and photographer with a passion for aesthetics, technology, and creative concepts. My work combines modern design with user-friendly functionality — whether I'm crafting websites or capturing unique moments through the lens. My goal is to create visually striking experiences that leave a lasting impression.</p>

            <Link to="/about">...more</Link>
          </ShiftUp>
        </div>

        <div className="about-image">

        </div>



      </div>

    </div >

  )
}

export default About
