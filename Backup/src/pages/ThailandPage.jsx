import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import './ThailandPage.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';





const ThailandPage = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const openLightbox = (index) => {
        setCurrentImageIndex(index);
        setIsOpen(true);
    };

    const closeLightbox = () => {
        setIsOpen(false);
    };

    const nextImage = (e) => {
        e.stopPropagation();
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevImage = (e) => {
        e.stopPropagation();
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const [images, setImages] = useState([]);

    useEffect(() => {
        fetch('/photography/images/thailand-images.json')
            .then(res => res.json())
            .then(data => setImages(data));
    }, []);

    useEffect(() => {
        const preloadImage = new Image();
        preloadImage.src = images[currentImageIndex + 1]?.full;
    }, [currentImageIndex]);

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
                <div className="thailand-head">
                    <div className="uber">Thailand</div>
                    <div className="gallery-container">
                        {images.map((img, index) => (
                            <LazyLoadImage
                                key={index}
                                src={img.thumb}
                                alt={`Foto ${index + 1}`}
                                effect="blur"
                                className={`gallery-item`}

                                onClick={() => openLightbox(index)}
                            />
                        ))}
                    </div>
                    <div className="footer-links">
                        <Link to="/berlin">Berlin</Link>
                        <Link to="/newyork">New York</Link>
                        <Link to="/tanzania">Tanzania</Link>

                    </div>
                </div>

                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            className="berlin-lightbox-overlay"
                            onClick={closeLightbox}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.7 }}
                        >
                            <div className="lightbox-content" onClick={nextImage}>

                                <button className="berlin-close-btn" onClick={closeLightbox}>X</button>

                                <img
                                    src={images[currentImageIndex]?.full}
                                    alt={`Foto ${currentImageIndex + 1}`}
                                    className="lightbox-image"
                                />

                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.div>
    );
};

export default ThailandPage;
