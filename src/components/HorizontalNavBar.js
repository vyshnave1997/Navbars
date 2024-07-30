// HorizontalNavBar.jsx
import React from "react";
import "./HorizontalNavBar.css";

const HorizontalNavBar = () => (
  <nav className="horizontal-nav">
    <ul>
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

export default HorizontalNavBar;
