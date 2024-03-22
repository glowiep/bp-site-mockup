import React from "react";
import '../styles/Features.scss'
import { featureData } from "../data/featureData";

const Features = () => {
  return (
    <div className="feature-div">
      {featureData.map((feature) => (
        <a href={feature.url} target="_blank" rel="noopener noreferrer" key={feature.id}>
          <div className="feature-card glassy-background">
            <h3>
              {feature.title}
            </h3>
            <p>{feature.description}</p>
            <img alt="feature image" src={feature.image}></img>
          </div>
        </a>
      ))}
    </div>
  )
};

export default Features;