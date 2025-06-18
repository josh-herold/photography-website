import { React, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Header from '../Components/Header';
import Portfolio from '../Components/Portfolio';
import './HomePage.css'

const HomePage = () => {
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
        <motion.div
            initial={isMobile ? { opacity: 0 } : { opacity: 0, scale: 1, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={isMobile ? { opacity: 0 } : { opacity: 0, scale: 1, y: -60 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
        >
            <div>
                <Header />
                <Portfolio />

            </div>
        </motion.div>
    );
};

export default HomePage;
