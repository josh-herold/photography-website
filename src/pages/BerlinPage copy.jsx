import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import './BerlinPage.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';


const images = [
    { thumb: "/photography/images/thumbs/auto.webp", full: "/photography/images/berlin/LowRes/auto.jpg" },
    { thumb: "/photography/images/thumbs/curry.webp", full: "/photography/images/LowRes/curry.jpg" },
    { thumb: "/photography/images/thumbs/goerli.webp", full: "/photography/images/LowRes/goerli.jpg" },
    { thumb: "/photography/images/thumbs/window.webp", full: "/photography/images/LowRes/window.jpg" },
    { thumb: "/photography/images/thumbs/charlie.webp", full: "/photography/images/LowRes/charlie.jpg" },
    { thumb: "/photography/images/thumbs/umbrella.webp", full: "/photography/images/LowRes/umbrella.jpg" },
    { thumb: "/photography/images/thumbs/room.webp", full: "/photography/images/LowRes/room.jpg" },
    { thumb: "/photography/images/thumbs/oranie2.webp", full: "/photography/images/LowRes/oranie2.jpg" },


    { thumb: "/photography/images/thumbs/billboard.webp", full: "/photography/images/LowRes/billboard.jpg" },
    { thumb: "/photography/images/thumbs/kotti.webp", full: "/photography/images/LowRes/kotti.jpg" },
    { thumb: "/photography/images/thumbs/schinkel.webp", full: "/photography/images/LowRes/schinkel.jpg" },
    { thumb: "/photography/images/thumbs/graffiti.webp", full: "/photography/images/LowRes/graffiti.jpg" },
    { thumb: "/photography/images/thumbs/burger.webp", full: "/photography/images/LowRes/burger.jpg" },
    { thumb: "/photography/images/thumbs/bike.webp", full: "/photography/images/LowRes/bike.jpg" },
    { thumb: "/photography/images/thumbs/friedrich.webp", full: "/photography/images/LowRes/friedrich.jpg" },
    { thumb: "/photography/images/thumbs/oranie1.webp", full: "/photography/images/LowRes/oranie1.jpg" },

    { thumb: "/photography/images/thumbs/orange.webp", full: "/photography/images/LowRes/orange.jpg" },
    { thumb: "/photography/images/thumbs/train.webp", full: "/photography/images/LowRes/train.jpg" },
    { thumb: "/photography/images/thumbs/friseur.webp", full: "/photography/images/LowRes/friseur.jpg" },
    { thumb: "/photography/images/thumbs/holzmarkt.webp", full: "/photography/images/LowRes/holzmarkt.jpg" },

];

const portraitImages = [
    "/photography/images/LowRes/billboard.jpg",
    "/photography/images/LowRes/curry.jpg",
    "/photography/images/LowRes/friedrich.jpg"
];

const isPortrait = (src) => {
    console.log(src);  // Füge dies hinzu, um den Bild-`src` zu überprüfen
    return portraitImages.includes(src);
};


const BerlinPage = () => {
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

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}  // Startet unsichtbar & leicht unten
            animate={{ opacity: 1, y: 0 }}   // Fadet smooth ein
            exit={{ opacity: 0, y: -60, transition: { duration: 0.8, ease: "easeInOut" } }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
        >
            <div>
                <div className="berlin-head">
                    <div className="uber">BERLIN</div>
                    <div className="gallery-container">
                        {images.map((img, index) => (
                            <LazyLoadImage
                                key={index}
                                src={img.thumb}
                                alt={`Foto ${index + 1}`}
                                effect="blur"
                                className={`gallery-item ${isPortrait(img.full) ? "portrait" : ""}`}

                                onClick={() => openLightbox(index)}
                            />
                        ))}
                    </div>
                    <div className="footer-links">
                        <Link to="/tanzania">Tanzania</Link>
                        <Link to="/newyork">New York</Link>
                        <Link to="/thailand">Thailand</Link>

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

export default BerlinPage;
