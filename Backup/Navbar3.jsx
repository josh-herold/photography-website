import React, { useState, useEffect, useCallback, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';
import { scroller } from 'react-scroll';
import './Navbar3.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/';
  const lastScrollY = useRef(0);
  const menuWrapperRef = useRef(null);

  // Scroll-Handling für Unterseiten
  const handleScroll = useCallback(() => {
    if (!isHomePage) {
      const currentScrollY = window.scrollY;
      if (currentScrollY === 0) {
        setShowNavbar(true);
      } else if (currentScrollY > lastScrollY.current) {
        setShowNavbar(false);
      }
      lastScrollY.current = currentScrollY;
    }
  }, [isHomePage]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  // Menü schließen, wenn außerhalb geklickt wird
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuWrapperRef.current && !menuWrapperRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    }

    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [menuOpen]);

  const handleStateChange = (state) => setMenuOpen(state.isOpen);
  const closeMenu = () => setMenuOpen(false);

  const handleNavClick = (section, path = "/") => {
    if (section === "blog") {
      navigate("/blog");
    } else if (location.pathname === "/") {
      scroller.scrollTo(section, { duration: 1200, smooth: "easeInOutQuart" });
    } else {
      navigate(path);
    }
    closeMenu();
  };

  return (
    <div className={`navbar-container ${!showNavbar && !isHomePage ? 'hidden' : ''}`}>
      <div className="logo-container">
        <div className="vorname">
          <a className="logo-link" onClick={() => handleNavClick("header")}>JANOSCH HEROLD</a>
        </div>

      </div>

      {/* Reiter für das Menü */}
      <div className="menu-tab" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

      {/* Das Burger-Menü */}
      <div ref={menuWrapperRef}>
        <Menu

          right
          isOpen={menuOpen}
          onStateChange={handleStateChange}
          customBurgerIcon={<div>☰</div>}
          customCrossIcon={<div>✖</div>}
          styles={{ bmMenuWrap: { right: '0px' } }}
          animation="slide"

        >
          <div className="menue-main">
            <a className="menu-item" onClick={() => handleNavClick("header")}>home</a>
            <a className="menu-item" onClick={() => handleNavClick("about", "/about")}>about me</a>
            <a className="menu-item" onClick={() => handleNavClick("portfolio", "/portfolio")}>portfolio</a>
            <a className="menu-item" onClick={() => handleNavClick("blog")}>blog</a>

            <div className="menue-separator"></div>

            <div className="menue-secondary">
              <a className="menu-item" onClick={() => handleNavClick("berlin", "/berlin")}>berlin</a>
              <a className="menu-item" onClick={() => handleNavClick("tanzania", "/tanzania")}>tanzania</a>
              <a className="menu-item" onClick={() => handleNavClick("newyork", "/newyork")}>new york</a>
              <a className="menu-item" onClick={() => handleNavClick("thailand", "/thailand")}>thailand</a>
            </div>
          </div>
        </Menu>
      </div>
    </div>
  );
};

export default Navbar;
