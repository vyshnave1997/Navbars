// ResponsiveNavBar.jsx
import React, { useState } from "react";
import "./ResponsiveNavBar.css";

const ResponsiveNavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="responsive-nav">
      <div className="logo">
        <a href="#home">Logo</a>
      </div>
      <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </button>
      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default ResponsiveNavBar;
