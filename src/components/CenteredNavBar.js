// CenteredNavBar.jsx
import React from "react";
import "./CenteredNavBar.css";

const CenteredNavBar = () => (
  <nav className="centered-nav">
    <div className="logo">
      <a href="#home">Logo</a>
    </div>
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

export default CenteredNavBar;
