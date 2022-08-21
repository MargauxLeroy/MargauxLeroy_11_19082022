import React from "react";

import "./Caroussel.scss";

import chevron from "../../../assets/icones/chevron.svg";

type Props = { pictures: string[] };

function Caroussel(props: Props) {
  return (
    <div
      className="caroussel"
      style={{ backgroundImage: `url("${props.pictures[0]}")` }}
    >
      <div className="actions">
        <img src={chevron} alt="Chevron précédent" />
        <img src={chevron} alt="Chevron suivant" />
      </div>

      <span>1/{props.pictures.length}</span>
    </div>
  );
}

export default Caroussel;
