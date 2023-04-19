import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import logements from "../data/logements.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Accordion from './Accordion';
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import "../styles/logement.scss";

function Logement() {
  const { id } = useParams();
  const [property, setProperty] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const foundProperty = logements.find((logement) => logement.id === id);
    setProperty(foundProperty);
  }, [id]);

  const handlePrevClick = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + property.pictures.length) % property.pictures.length
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % property.pictures.length);
  };

  return (
    <div className="logement">
      {property ? (
        <>
          <div className="image-container">
            <button
              className="image-navigation image-navigation-left"
              onClick={handlePrevClick}
            >
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <img
              className="property-image"
              src={property.pictures[currentIndex]}
              alt={` ${currentIndex + 1} de ${property.title}`}
            />
            <div className="image-counter">
              {currentIndex + 1}/{property.pictures.length}
            </div>
            <button
              className="image-navigation image-navigation-right"
              onClick={handleNextClick}
            >
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </div>
          <div className="property-infos">
            <div className="property-description">
              <h2>{property.title}</h2>
              <p className="property-Decription">{property.description}</p>
              <ul>
                {property.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            </div>
            <div className="user-rating-container">
              <div className="user">
                  <p className="user-name"> {property.host.name}</p>
                <img
                  className="user-picture"
                  src={property.host.picture}
                  alt={` ${property.host.name}`}
                />
              </div>
                  <div className="rating">
                    {[...Array(5)].map((star, index) => {
                      const filled = index < property.rating;
                      return filled ? (
                        <span key={index} className="filled-star">
                          &#9733;
                        </span>
                      ) : (
                        <span key={index} className="empty-star">
                          &#9734;
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>
          <div className="property-band">
  <div className="accordion-container">
    <Accordion title="Description" textArray={[property.description]} />
  </div>
  <div className="accordion-container">
    <Accordion title="Équipements" textArray={property.equipments} />
  </div>
</div>

        </>
      ) : (
        <p>Logement non trouvé</p>
      )}
    </div>
  );
}

export default Logement;

