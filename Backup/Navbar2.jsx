import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Menü-Zustand umschalten
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>


      {/* Menü, das rausfährt */}
      <div className={`side-menu ${menuOpen ? 'open' : ''}`}>
        <div className="menu-tab1" onClick={toggleMenu}><p>MENUE</p>
          {/* ☰ */}
        </div>
        <a className="menu-item" onClick={() => setMenuOpen(false)}>Home</a>
        <a className="menu-item" onClick={() => setMenuOpen(false)}>About Me</a>
        <a className="menu-item" onClick={() => setMenuOpen(false)}>Blog</a>
        <a className="menu-item" onClick={() => setMenuOpen(false)}>Portfolio</a>
        <a className="menu-item" onClick={() => setMenuOpen(false)}>Projects</a>
      </div>
    </div>
  );
};

export default Navbar;
