import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import './AboutPage.css';
import Navbar from '../Components/Navbar';

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
                <div className="aboutpage-parent">
                    <h1 className='aboutpage-header'>About me</h1>

                    <div className="aboutpage-container">

                        <div className="aboutpage-text">

                            <p>
                                Hi,<br />
                                my name is Janosch and I'm currently living and studying computer science in Berlin. Throughout my studies, I have gained solid experience in object-oriented programming with Java, as well as in frontend development using HTML, CSS, JavaScript, and ReactJS.</p>

                            <p>I have a strong passion for modern computing technologies, creative design, and visual composition. For me, applications should not only meet technical requirements, but also be visually appealing and thoughtfully designed.</p>

                            <p>Alongside my academic journey, I’ve developed a deep interest in photography. I actively explore photographic techniques, image composition, color theory, and post-production—especially using Adobe Lightroom and Photoshop. Photography has significantly enriched my creative process and often influences how I approach design and digital projects.</p>

                            <p>I am currently looking for a working student position in the fields of web design, web development, or frontend engineering.</p>

                        </div>
                        <div className="aboutpage-image">
                            <img src="/photography/images/LowRes/laptop.jpg" alt="Laptop" />
                        </div>

                    </div>
                </div>
            </motion.div>
        </>
    );
};

export default AboutPage;
