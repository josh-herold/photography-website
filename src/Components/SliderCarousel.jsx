import React, { useEffect, useRef, useState } from 'react';
import { easeIn, motion } from 'framer-motion';
import './SliderCarousel.css';

const SliderCarousel = () => {
    const originalSlides = [
        { url: '/photography/images/thumbs/auto.webp' },
        { url: '/photography/images/tanzania/schoolkids.jpg' },
        { url: '/photography/images/thumbs/istanbul.jpg' },
        { url: '/photography/images/thumbs/graffiti.webp' },
        { url: '/photography/images/thumbs/erosion.jpg' },
        { url: '/photography/images/thumbs/umbrella.webp' },
        { url: '/photography/images/thumbs/curry.webp' },

        { url: '/photography/images/thumbs/oranie1.webp' },
        { url: '/photography/images/thumbs/kotti.webp' },
    ];

    const [width, setWidth] = useState(0);
    const [activeImage, setActiveImage] = useState(null); // Zum Verfolgen des aktuellen Hover-Bildes
    const carousel = useRef();

    const holesPerImage = 18;
    const holeCount = originalSlides.length * holesPerImage;

    useEffect(() => {
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);

        const startingPosition = 0; // Index des Bildes, mit dem du starten möchtest
        carousel.current.scrollLeft = (carousel.current.offsetWidth * startingPosition);

    }, []);

    return (
        <motion.div ref={carousel} className="carousel" whileTap={{ cursor: 'grabbing' }} whileHover={{ cursor: 'grab' }}>
            <motion.div
                drag="x"
                dragConstraints={{ right: 0, left: -width }}
                className="inner-carousel"
            >
                <div className="filmstrip">
                    <div className="perforation-row top" >
                        {[...Array(holeCount)].map((_, i) => (
                            <div className="hole" key={`top-${i}`} />
                        ))}
                    </div>

                    <div className="frame-row">
                        {originalSlides.map((image, index) => (
                            <div
                                className="item"
                                key={index}
                                onMouseEnter={() => setActiveImage(index)} // Bild wird farbig, wenn der Cursor drauf ist
                                onMouseLeave={() => setActiveImage(null)} // Bild wird wieder schwarz-weiß, wenn der Cursor weg ist
                            >
                                <img
                                    src={image.url}
                                    alt={`Slide ${index}`}
                                    style={{
                                        filter: activeImage === index ? 'none' : 'invert(100%) grayscale(100%)', // Negativ + schwarz-weiß
                                        transition: 'filter 1s ease', transform: '0.5s ease' // Sanfter Übergang von negativ zu positiv
                                    }}
                                />
                            </div>
                        ))}
                    </div>

                    <div className="perforation-row bottom" >
                        {[...Array(holeCount)].map((_, i) => (
                            <div className="hole" key={`bottom-${i}`} />
                        ))}
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default SliderCarousel;
