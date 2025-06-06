import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import './SliderCarousel.css';

const SliderCarousel = () => {
    const originalSlides = [
        { url: '/photography/images/auto.webp' },
        { url: '/photography/images/kotti.webp' },
        { url: '/photography/images/friseur.webp' },
        { url: '/photography/images/goerli.webp' },
        { url: '/photography/images/goerli.webp' },
        { url: '/photography/images/goerli.webp' },
    ];

    const [width, setWidth] = useState(0);
    const carousel = useRef();

    useEffect(() => {
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }, []);



    return (
        <motion.div ref={carousel} className="carousel" whileTap={{ cursor: 'grabbing' }}>
            <motion.div
                drag='x'
                dragConstraints={{ right: 0, left: -width }}
                className='inner-carousel'
            >
                {originalSlides.map((image, index) => {
                    return (
                        <motion.div className='item' key={index}>
                            <img src={image.url} alt={`Slide ${index}`} />

                        </motion.div>

                    );
                })}
            </motion.div>
        </motion.div>

    );
};

export default SliderCarousel;
