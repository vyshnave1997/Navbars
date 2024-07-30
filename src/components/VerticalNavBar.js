// VerticalNavBar.jsx
import React from "react";
import "./VerticalNavBar.css";

const VerticalNavBar = () => (
  <nav className="vertical-nav">
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

export default VerticalNavBar;
