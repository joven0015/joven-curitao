import React, { useState, useEffect } from 'react';
import "./Navbar.css";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
   const [lastScrollY, setLastScrollY] = useState(window.scrollY);
  useEffect(() => {
  const controlNavbar = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY) {
      setShowNavbar(false);
    } else {
      setShowNavbar(true);
    }

    setLastScrollY(currentScrollY);
  };

  window.addEventListener('scroll', controlNavbar);

  return () => {
    window.removeEventListener('scroll', controlNavbar);
  };
}, [lastScrollY]);


  return (
    <nav className={`navbar-container ${showNavbar ? 'show' : 'hide'}`}>
      <ul className="nav-links">
        <li>
          <a href="#header">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
