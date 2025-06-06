import React, { useState, useEffect, useRef } from 'react';
import styled from "styled-components";
import { useNavigate, useLocation } from 'react-router-dom';
import { scroller } from 'react-scroll';

const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: pink;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  height: 100vh;
  text-align: left;
  padding: 1.6rem;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 1006;
  transition: transform 0.5s ease-in-out;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  overflow-y: auto;

  @media (max-width: 576px) {
    width: 100%;
  }

  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 1rem 0;
    font-weight: bold;
    letter-spacing: 0.1rem;
    color: #0d0c1d;
    cursor: pointer;
    text-decoration: none;
    transition: color 0.3s linear;

  

    &:hover {
      color: rgb(203, 60, 232);
    }
  }

 .menu-group {
    margin-bottom: 1rem;
    font-size: 2rem;
    text-transform: uppercase;
    padding: 0.6rem 0;
    font-weight: bold;
    letter-spacing: 0.1rem;
    color: #0d0c1d;
    cursor: pointer;
    text-decoration: none;
    transition: color 0.5s linear;
  }

  .main-link {
    font-weight: bold;
    margin-bottom: 0.5rem;
    cursor: pointer;
  }

  .submenu-wrapper {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.4s ease-in-out, opacity 0.4s ease-in-out;
    opacity: 0;
  }

  .submenu-wrapper.open {
    max-height: 500px; /* reicht locker für 4 Links */
    opacity: 1;
  }

  .submenu-wrapper a {
    font-size: 1.5rem;
    padding-left: 1.5rem;
    display: block;
    margin-top: 0.3rem;
    line-height: 0.4rem;
  }
`;

const Menue = ({ open, setOpen }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [submenuOpen, setSubmenuOpen] = useState(false);

  const handleClick = (target, isRoute = false) => {
    setOpen(false);
    setSubmenuOpen(false);

    if (isRoute) {
      if (target === '/' && location.pathname !== '/') {
        // Kleiner Delay, damit die Animation zuerst passiert
        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 800); // oder passender Timeout nach deinen Transitions
      }

      else if (target === '/' && location.pathname === '/') {
        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 400);
      }

      navigate(target);
    }
  };


  return (
    <StyledMenu open={open}>
      <div className="menu-group">
        <a onClick={() => handleClick('/', true)}>Home</a>
      </div>
      <div className="menu-group">
        <a onClick={() => handleClick('/about', true)}>About Me</a>
      </div>
      <div className="menu-group">

        <a onClick={() => setSubmenuOpen(!submenuOpen)}>Portfolio {submenuOpen ? '▲' : '▼'}</a>
        <div className={`submenu-wrapper ${submenuOpen ? 'open' : ''}`}>
          <a onClick={() => handleClick('/berlin', true)}>Berlin</a>
          <a onClick={() => handleClick('/tanzania', true)}>Tanzania</a>
          <a onClick={() => handleClick('/newyork', true)}>New York</a>
          <a onClick={() => handleClick('/thailand', true)}>Thailand</a>
          <a onClick={() => handleClick('/istanbul', true)}>Istanbul</a>
        </div>
      </div>
      <div className="menu-group">
        <a onClick={() => handleClick('/blog', true)}>Blog</a>
      </div>
      <div className="menu-group">
        <a onClick={() => handleClick('/contact', true)}>Contact</a>
      </div>
    </StyledMenu>

  );
};

export default Menue;
