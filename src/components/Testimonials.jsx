import React from "react";
import '../styles/Testimonials.scss'

const Testimonials = () => {
  return (
    <div>
      <h1 className="title">Testimonials</h1>
      <a href="https://www.busplanner.com/press.htm?v1711053122644" target="_blank" rel="noopener noreferrer" className="testimonial-link">
        <div className="testimonial-card">
          <p className="testimonial-quote">
            "BusPlanner is an excellent example of the new generation of highly sophisticated School Bus Routing and Scheduling software available today. This dynamically robust and highly scalable ..."
          </p>
          <p>
          Director, Transportation Services
          Osceola District Schools, Florida
          </p>
        </div>
      </a>
    </div>
  )
};

export default Testimonials;