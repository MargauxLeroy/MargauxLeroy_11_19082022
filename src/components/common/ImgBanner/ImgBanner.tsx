import React from "react";

import "./ImgBanner.scss";

// Questions : comment je met des valeurs optionnels (? nom pas le type)
// Pré-configurés : dans la déconstruction des props de la fonction
type PresentationImgProps = { title: string; image: string; isDense: string };

function PresentationImg({
  title,
  image,
  isDense = "true",
}: PresentationImgProps) {
  return (
    <div
      className="first-section"
      style={{ backgroundImage: `url("${image}")` }}
      data-is-dense={isDense}
    >
      <h1>{title}</h1>
    </div>
  );
}

export default PresentationImg;
