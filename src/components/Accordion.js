import React, { useState } from "react";
import "../styles/Accordion.scss";
import VectorSVG from "../pictures/Vector.svg";

const Accordion = ({ title, textArray }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion">
      <div className="accordion-title" onClick={toggleAccordion}>
        {title}
        <span className={`accordion-icon ${isOpen ? "open" : "closed"}`}>
          <img
            src={VectorSVG}
            alt="Accordion Icon"
            className={`accordion-icon ${isOpen ? "open" : "closed"}`}
          />
        </span>
      </div>
      {isOpen && (
        <div className="accordion-content">
          {textArray.map((text, index) => (
            <p className="accordion-text" key={`accordion-text-${index}`}>
              {text}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default Accordion;
