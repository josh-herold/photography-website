import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import './BlogPage.css';

const BlogPage = () => {

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
                <div className="blogpage-parent">
                    <h1 className='blogpage-header'>Blog</h1>

                    <div className="blogpage-container">
                        <div className="blogpage-image">
                            <img src="/photography/images/LowRes/retrocam.jpg" alt="Beschreibung des Bildes" />
                        </div>
                        <div className="blogpage-text">

                            <p>

                                When I'm out shooting, I need gear I can rely on—lightweight, flexible, yet high-quality. Right now, I’m working with the Sony Alpha 6400, which I really appreciate for its compact size and excellent image quality, especially when it comes to street and travel photography.</p>

                            <p>I usually carry two lenses with me: a 35mm f/1.8 for natural portraits, and a compact zoom like the 18-105mm, which gives me maximum flexibility. A small travel tripod, a spare battery, and a lightweight ND filter complete my setup.</p>

                            <p>It’s important to me that I can react quickly without carrying heavy gear—because often, the best moments happen unexpectedly…</p>



                        </div>

                    </div>

                    <div className="blogpage-container">
                        <div className="blogpage-image">
                            <img src="/photography/images/LowRes/thailand.jpg" alt="Beschreibung des Bildes" />
                        </div>
                        <div className="blogpage-text">

                            <p>My journey through Thailand was a feast for the senses—and for the camera. Between street food stalls, temples, and the narrow alleys of Bangkok, I used my Sony Alpha 6400 to capture those small, genuine moments: a vendor arranging his fruit, children playing by the roadside, or the golden light filtering through the rooftops of Chatuchak Market.</p>

                            <p>I explored most of the country on foot—and the less I planned, the better my photos turned out. Thailand is full of life, and that’s exactly what I wanted to capture with my street photography: authenticity, movement, everyday life.</p>

                            <p>I was especially fascinated by Chiang Mai, with its quiet side streets, colorful markets, and kind people. I shot mostly in the early morning, when the city slowly comes to life—the steam rising from freshly cooked rice, monks in orange robes, and the first sunbeams hitting the old facades.
                                To me, that was pure magic.</p>





                        </div>

                    </div>
                </div>
            </motion.div>
        </>
    );
};

export default BlogPage;
