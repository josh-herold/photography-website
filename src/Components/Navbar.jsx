import React, { useState, useEffect, useCallback, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { scroller } from 'react-scroll';
import Burger from "./Burger";
import Menue from "./Menue";
import './Navbar.css';

//schliesst das Menü bei click ausserhalb

const useOnClickOutside = (ref, handler) => {
  React.useEffect(() => {
    const listener = event => {
      if (!ref.current || ref.current.contains(event.target)) return;
      handler(event);
    };
    document.addEventListener("mousedown", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
    };
  }, [ref, handler]);
};


const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  const node = React.useRef();
  useOnClickOutside(node, () => setOpen(false));
  const [scrollY, setScrollY] = useState(0);
  const [hideLogo, setHideLogo] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const handleLogoClick = (target, isRoute = false) => {
    setOpen(false);

    if (isRoute) {
      // Nur navigieren (kein Scroll)
      navigate(target);
    } else {
      if (location.pathname !== '/') {
        // Erst zur Startseite navigieren, dann scrollen
        navigate('/');
        setTimeout(() => {
          scroller.scrollTo(target, {
            duration: 900,
            delay: 0,
            smooth: 'easeInOutQuart',
          });
        }, 100);
      }
    }
  };

  //lässt das Logo verschwinden

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if (currentScroll > scrollY && currentScroll > 100) {
        setHideLogo(true);  // runtergescrollt
      } else {
        setHideLogo(false); // hochgescrollt
      }
      setScrollY(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollY]);





  return (
    <div className='navbar-container' id='navbar'>
      <div className={`logo-container ${hideLogo ? 'hide-logo' : ''}`}>
        <div className="vorname">
          <a className="logo-link" onClick={() => handleLogoClick("header")}>JANOSCH HEROLD</a>
        </div>

      </div>
      <div ref={node}>
        <Burger open={open} setOpen={setOpen} />
        <Menue open={open} setOpen={setOpen} />
      </div>

    </div>
  );
};

export default Navbar;
