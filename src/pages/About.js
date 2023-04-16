import React from "react";
import "../styles/About.scss";
import Banner from "../components/Banner";
import Accordion from "../components/Accordion";
import section2Image from "../pictures/kalen-emsley-Bkci_8qcdvQ-unsplash 2.png";

const ABOUT_SECTIONS = [
  {
    title: "Fiabilité",
    text: "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.",
  },
  {
    title: "Respect",
    text: "Nous La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme. le respect mutuel entre les hôtes et les voyageurs. Tout comportement irrespectueux ou nuisible au voisinage entraînera une exclusion de notre plateforme.",
  },
  {
    title: "Service",
    text: "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N hésitez pas à nous contacter si vous avez la moindre question.",
  },
  {
    title: "Sécurité",
    text: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l hôte qu au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
  },
];

function About() {
  return (
    <div>
      <Banner>
        <img src={section2Image} alt="Description de l'image" />
      </Banner>

      <div className="accordion-container">
        {ABOUT_SECTIONS.map(({ title, text }) => (
          <Accordion key={`about-${title}`} title={title} textArray={[text]} />
        ))}
      </div>
    </div>
  );
}

export default About;
