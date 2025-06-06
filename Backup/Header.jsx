import React from 'react';
import './Header.css';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const images = [
  '/photography/images/jpg/auto.jpg',
  '/photography/images/jpg/holzmarkt.jpg',
  '/photography/images/jpg/skyline.jpg'
];

const Header = () => {
  return (
    <div className="header" id="header">


      <div className="header-image">
        <Fade
          duration={5000}
          transitionDuration={1000}
          arrows={false}
          infinite={true}
          autoplay={true}
          pauseOnHover={false}
        >
          {images.map((img, index) => (
            <div key={index} className="header-slide">
              <img
                src={img}
                alt={`slide ${index}`}

              />
            </div>
          ))}
        </Fade>
      </div>


    </div>
  );
};

export default Header;
