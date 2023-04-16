import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Importez le composant Link
import "../styles/Gallery.scss";
import logements from "../data/logements.json";

function Gallery() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    setProperties(logements);
  }, []);

  return (
    <div className="gallery">
      {properties.map((property) => (
        <div className="property" key={property.id}>
          <div className="square">
            <Link to={`/logement/${property.id}`}>
              <img
                src={property.cover}
                alt={`Couverture de ${property.title}`}
              />
              <h3>{property.title}</h3>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Gallery;
