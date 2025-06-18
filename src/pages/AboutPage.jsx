import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import ShiftUp from "../Components/ShiftUp";
import './AboutPage.css';

const AboutPage = () => {

    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);  // Sicherstellen, dass beim Verlassen die Seite nicht nach oben scrollt
    }, [pathname]);

    const [isMobile, setIsMobile] = useState(null);

    // Überprüft, ob das Gerät ein Mobilgerät ist
    useEffect(() => {
        const checkIsMobile = () => setIsMobile(window.innerWidth < 768);
        checkIsMobile(); // Initiale Überprüfung
        window.addEventListener('resize', checkIsMobile); // Event-Listener für Bildschirmgrößenänderung
        return () => window.removeEventListener('resize', checkIsMobile); // Event-Listener entfernen
    }, []);

    // Wenn `isMobile` null ist (noch nicht bestimmt), rendere nichts oder eine vorübergehende Animation
    if (isMobile === null) {
        return null; // oder ein "Lade"-Indikator
    }

    return (
        <>

            <motion.div
                initial={isMobile ? { opacity: 0 } : { opacity: 0, scale: 1, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={isMobile ? { opacity: 0 } : { opacity: 0, scale: 1, y: -60 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
            >
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

                                <Link to="/">...home</Link>
                            </ShiftUp>
                        </div>

                        <div className="about-image">

                        </div>



                    </div>

                </div >
            </motion.div>
        </>
    );
};

export default AboutPage;
