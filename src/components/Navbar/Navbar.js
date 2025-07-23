import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar-container">
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
