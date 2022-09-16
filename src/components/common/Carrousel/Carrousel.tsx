import React, { useState } from "react";

import "./Caroussel.scss";

import chevron from "../../../assets/icones/chevron.svg";

type Props = { pictures: string[] };

function Caroussel(props: Props) {
  const pictures = props.pictures;
  const [currentIndex, setCurrentIndex] = useState(0);

  const updateIndex = (newIndex: number) => {
    if (newIndex < 0) {
      newIndex = pictures.length - 1;
    }
    if (newIndex >= pictures.length) {
      newIndex = 0;
    }

    setCurrentIndex(newIndex);
  };

  return (
    <div className="carousel">
      {pictures.length > 1 && (
        <>
          <div className="actions">
            <button onClick={() => updateIndex(currentIndex - 1)}>
              <img src={chevron} alt="Chevron précédent" />
            </button>
            <button onClick={() => updateIndex(currentIndex + 1)}>
              <img src={chevron} alt="Chevron suivant" />
            </button>
          </div>

          <span>
            {currentIndex + 1}/{pictures.length}
          </span>
        </>
      )}

      {pictures.map((picture, index) => {
        return (
          <img
            key={index}
            src={picture}
            className="carousel-item"
            style={{ transform: `translate(-${currentIndex * 100}%)` }}
            alt="Logement"
          />
        );
      })}
    </div>
  );
}

export default Caroussel;
