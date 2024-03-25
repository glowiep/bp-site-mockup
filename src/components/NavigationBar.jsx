import React from "react";
import '../styles/NavigationBar.scss';

const NavigationBar = () => {
  return (
    <nav className="top-nav">
      <ul>
        <li>
          <a href="#watch-our-video">
            Watch Our Video
          </a>
        </li>
        <li>
          <a href="#how-can-bp-help">
            How Can BusPlanner Help
          </a>
        </li>
        <li>
          <a href="#testimonials">
            Testimonials
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