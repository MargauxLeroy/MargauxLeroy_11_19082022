import React, { useEffect } from "react";

import ImgBanner from "../components/ImgBanner/ImgBanner";
import Expand from "../components/Expand/Expand";

import aboutImage from "../assets/images/about_img.jpg";

function About() {
  useEffect(() => {
    document.title = "Kaza: À propos";
  }, []);

  return (
    <div className="content-layout page-flex">
      <ImgBanner title="" image={aboutImage} isDense="false" />
      <ul className="page-flex">
        {values.map((value) => (
          <li key={value.id}>
            <Expand
              key={value.id}
              title={value.title}
              content={value.content}
              isOpen={false}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default About;

const values = [
  {
    id: 1,
    title: "Fiabilité",
    content:
      "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.",
  },
  {
    id: 2,
    title: "Respect",
    content:
      "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
  },
  {
    id: 3,
    title: "Service",
    content:
      "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
  },
  {
    id: 4,
    title: "Responsabilité",
    content:
      "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
  },
];
