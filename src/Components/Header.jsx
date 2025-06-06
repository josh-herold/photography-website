import React from 'react';
import './Header.css';
import 'react-slideshow-image/dist/styles.css';
import SliderCarousel from '../Components/SliderCarousel';

const Header = () => {
  return (
    <div className="header" id="header">


      <div className="slider-container">
        <SliderCarousel />
        {/*<div className="image-container"></div>*/}
      </div>


    </div>
  );
};

export default Header;
