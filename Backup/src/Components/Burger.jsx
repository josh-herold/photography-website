import React from "react";
import styled from "styled-components";

const StyledBurger = styled.button`
  position: fixed;
  top: 1rem;  /* Position von oben im Container */
  right: 2rem;  /* Position von rechts im Container */
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 4px;
  z-index: 1100;

  &:focus {
    outline: none;
  }

  div {
  width: 2rem;
  height: 0.35rem;
  background: ${({ open }) => (open ? "white" : "gray")};
  border-radius: 3px;
  transition: all 0.3s linear;
  position: relative;
  transform-origin: 1px;
  
}

  &:hover div {
    background: ${({ open }) => (open ? "gray" : "lightgray")};
  }

  @media (max-width: 1024px) {
  top: 0.6rem;  /* Position von oben im Container */
  right: 1rem;  /* Position von rechts im Container */

   div {
  width: 2rem;
  height: 0.35rem;
  background: ${({ open }) => (open ? "white" : "#f0f0f0")};
  
  
}
  

  
}



/* Wichtig: Das sind jetzt eigene Selektoren, nicht innerhalb von 'div'! */
div:first-child {
    width: 1.5rem;
  transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
}

div:nth-child(2) {
  opacity: ${({ open }) => (open ? "0" : "1")};
  transform: ${({ open }) => (open ? "translateX(20px)" : "translateX(0)")};
}

div:nth-child(3) {
    width: 1.5rem;
  transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
}

  &:hover div:first-child {
    transform: ${({ open }) =>
    open ? "rotate(45deg)" : "translateX(4px)"};
  }

  &:hover div:nth-child(2) {
    transform: ${({ open }) =>
    open ? "translateX(20px)" : "translateX(-4px)"};
  }

  &:hover div:nth-child(3) {
    transform: ${({ open }) =>
    open ? "rotate(-45deg)" : "translateX(4px)"};
  }



`;

const Burger = ({ open, setOpen }) => {
  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </StyledBurger>
  );
};

export default Burger;
