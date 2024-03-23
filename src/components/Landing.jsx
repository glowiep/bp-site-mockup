import React from "react";
import '../styles/Landing.scss'

const Landing = ({ embedId }) => {
  return (
    <div className="landing-wrapper">
      <div className="landing">
        <h1>Succeed with BusPlanner</h1>
        <div className="card">
          <h2>
            Thinking of Switching Software?
          </h2>
          <a href={`https://www.youtube.com/watch?v=${embedId}`} target="_blank" rel="noopener noreferrer">
            <button>Watch Our Video</button>
          </a>
          <a href="https://www.busplanner.com/demo.htm" target="_blank" rel="noopener noreferrer">
            <button>Request a Demo</button>
          </a>
        </div>
      </div>
    </div>
  )
};

export default Landing;