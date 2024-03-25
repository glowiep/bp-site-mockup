import React from "react";
import '../styles/Features.scss';
import { featureData } from "../data/featureData";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

const Features = () => {
  const handleIntersection = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  };

  useIntersectionObserver(".feature-card", handleIntersection, {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  });


  return (
    <section className="feature-div" id="how-can-bp-help">
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
    </section>
  )
};

export default Features;