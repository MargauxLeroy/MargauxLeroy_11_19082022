import React from "react";

import "./Caroussel.scss";

import chevron from "../../../assets/chevron.svg";

function Caroussel() {
  return (
    <div className="caroussel">
      <div className="actions">
        <img src={chevron} alt="Chevron précédent" />
        <img src={chevron} alt="Chevron suivant" />
      </div>

      <span>1/4</span>
    </div>
  );
}

export default Caroussel;
