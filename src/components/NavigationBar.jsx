import React, { useState, useEffect } from "react";
import '../styles/NavigationBar.scss';
import Avatar from '@mui/material/Avatar';

const NavigationBar = () => {
  const [showNavbar, setShowNavbar] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 0) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`top-nav ${showNavbar ? "show" : "hide"}`}>
      <ul>
        <a href="https://www.busplanner.com/index.aspx" target="_blank" rel="noopener noreferrer">
          <Avatar alt="BusPlanner Logo" src="https://raw.githubusercontent.com/glowiep/bp-site-mockup/18c7c45d08e8b5bf037227b8ecbdadf8c7e3f272/src/assets/logo_color.svg" />
        </a>
        <li>
          <a href="https://www.busplanner.com/about.htm?v=1711331837401" target="_blank" rel="noopener noreferrer">
            About Us
          </a>
        </li>
        <li>
          <a href="#testimonials">
            Testimonials
          </a>
        </li>
        <li>
          <a href="https://www.busplanner.com/demo.aspx" target="_blank" rel="noopener noreferrer">
            Request A Demo
          </a>
        </li>
        <li>
          <a href="https://www.busplanner.com/contact.aspx" target="_blank" rel="noopener noreferrer">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  )
};

export default NavigationBar;