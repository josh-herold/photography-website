import React, { useEffect, useRef, useState } from 'react';
import './Slider.css';

const Slider = () => {
    const originalSlides = [
        { url: '/photography/images/auto.webp' },
        { url: '/photography/images/kotti.webp' },
        { url: '/photography/images/friseur.webp' },
        { url: '/photography/images/goerli.webp' },
    ];

    // Wir klonen das erste & letzte Bild
    const slides = [
        originalSlides[originalSlides.length - 1], // letzter
        ...originalSlides,
        originalSlides[0], // erster
    ];

    const [currentIndex, setCurrentIndex] = useState(1);
    const [transitionEnabled, setTransitionEnabled] = useState(true);
    const sliderRef = useRef();

    const slideWidth = 70 + 2; // 70vw + 2vw gap

    const nextSlide = () => {
        setCurrentIndex((prev) => prev + 1);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => prev - 1);
    };

    // Wenn wir ganz vorne oder ganz hinten sind: Sofort zurückspringen
    useEffect(() => {
        if (currentIndex === slides.length - 1) {
            setTimeout(() => {
                setTransitionEnabled(false);
                setCurrentIndex(1);
            }, 500);
        } else if (currentIndex === 0) {
            setTimeout(() => {
                setTransitionEnabled(false);
                setCurrentIndex(slides.length - 2);
            }, 500);
        } else {
            setTransitionEnabled(true);
        }
    }, [currentIndex]);

    const trackStyle = {
        transform: `translateX(-${currentIndex * slideWidth}vw)`,
        transition: transitionEnabled ? 'transform 0.5s ease' : 'none',
    };

    return (
        <div className="slider-wrapper">
            <button className="prev-button" onClick={prevSlide}>
                ‹
            </button>
            <div className="slider-track" style={trackStyle} ref={sliderRef}>
                {slides.map((slide, index) => (
                    <div
                        className="slide"
                        key={index}
                        style={{ backgroundImage: `url(${slide.url})` }}
                    ></div>
                ))}
            </div>
            <button className="next-button" onClick={nextSlide}>
                ›
            </button>
        </div>
    );
};

export default Slider;
