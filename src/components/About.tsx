import React from "react";

import ImgBanner from "./common/ImgBanner/ImgBanner";
import Expand from "./common/Expand/Expand";

import aboutImage from "../assets/images/about_img.jpg";

function About() {
  return (
    <div className="content-layout page-flex">
      <ImgBanner title="" image={aboutImage} isDense="false" />
      <ul>
        {values.map((value) => (
          <li>
            <Expand
              key={value.id}
              title={value.title}
              content={value.content}
              isOpen="true"
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
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris volutpat pellentesque ligula, a efficitur enim venenatis non. Aenean iaculis augue non suscipit hendrerit. Pellentesque ut nulla nulla.",
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
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris volutpat pellentesque ligula, a efficitur enim venenatis non. Aenean iaculis augue non suscipit hendrerit. Pellentesque ut nulla nulla.",
  },
  {
    id: 4,
    title: "Responsabilité",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris volutpat pellentesque ligula, a efficitur enim venenatis non. Aenean iaculis augue non suscipit hendrerit. Pellentesque ut nulla nulla.",
  },
];
