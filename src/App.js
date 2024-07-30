// src/App.js
import React from "react";
import HorizontalNavBar from "./components/HorizontalNavBar";
import VerticalNavBar from "./components/VerticalNavBar";
import CenteredNavBar from "./components/CenteredNavBar";
import ResponsiveNavBar from "./components/ResponsiveNavBar";
import "./App.css"; // Ensure global styles are imported

const App = () => {
  return (
    <div className="App">
      <header>
        <ResponsiveNavBar />
      </header>
      <main>
        <section className="section" id="home">
          <h1>Home</h1>
          <p>
            Welcome to the home page. Here is a brief introduction to our site.
          </p>
        </section>
        <CenteredNavBar />

        <section className="section" id="about">
          <h1>About Us</h1>
          <p>Learn more about our mission and values.</p>
        </section>
        <VerticalNavBar />

        <section className="section" id="services">
          <h1>Our Services</h1>
          <p>Discover the services we offer and how we can help you.</p>
        </section>
        <HorizontalNavBar />
        <section className="section" id="contact">
          <h1>Contact Us</h1>
          <p>Get in touch with us for more information.</p>
        </section>
      </main>
    </div>
  );
};

export default App;
