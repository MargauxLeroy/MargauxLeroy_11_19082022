import React from "react";

import "./Expand.scss";

import chevron from "../../../assets/chevron.svg";

function Expand() {
  const isDescription = true;

  return (
    <div className="expand">
      <div className="title">
        <h3>Description</h3>
        <img src={chevron} alt="Chevron" />
      </div>

      <div className="content">
        {isDescription ? (
          <p>
            Vous serez à 50m du canal Saint-martin où vous pourrez pique-niquer
            l'été et à côté de nombreux bars et restaurants. Au cœur de Paris
            avec 5 lignes de métro et de nombreux bus. Logement parfait pour les
            voyageurs en solo et les voyageurs d'affaires. Vous êtes à1 station
            de la gare de l'est (7 minutes à pied).
          </p>
        ) : (
          <ul>
            <li>Coucou</li>
            <li>cava</li>
            <li>très bien</li>
          </ul>
        )}
      </div>
    </div>
  );
}

export default Expand;
