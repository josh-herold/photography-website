import React, { useState, useEffect, useRef } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  // Menü-Zustand umschalten
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Schließen, wenn außerhalb geklickt wird
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen]);

  // Scroll-Funktion
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false); // Menü schließen nach dem Klick
    }
  };

  return (
    <div className='navbar-container'>
      <div className="logo-container">
        <div className="vorname">
          <a className="logo-link" onClick={() => scrollToSection("header")}>JANOSCH HEROLD</a>
        </div>

      </div>


      {/* Menü, das rausfährt */}
      <div ref={menuRef} className={`side-menu ${menuOpen ? 'open' : ''}`}>
        <div className="menu-tab1" onClick={toggleMenu}>
          <p>MENUE</p>
          {/* ☰ */}
        </div>
        <a className="menu-item" onClick={() => scrollToSection('header', '/Header')}>Home</a>
        <a className="menu-item" onClick={() => scrollToSection("about")}>About Me</a>
        <a className="menu-item" onClick={() => scrollToSection('berlin')}>Portfolio</a>
        <a className="menu-item" onClick={() => scrollToSection('blog')}>Blog</a>
        <a className="menu-item" onClick={() => scrollToSection('projects')}>Projects</a>
      </div>
    </div>
  );
};

export default Navbar;
