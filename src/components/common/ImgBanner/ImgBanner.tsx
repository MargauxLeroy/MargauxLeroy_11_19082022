import React from "react";

import "./ImgBanner.scss";

// Questions : comment je met des valeurs optionnels ou pré-configurés ?
type PresentationImgProps = { title: string; image: string; isDense: string };

function PresentationImg(props: PresentationImgProps) {
  return (
    <div
      className="first-section"
      style={{ backgroundImage: `url("${props.image}")` }}
      data-is-dense={props.isDense}
    >
      <h1>{props.title}</h1>
    </div>
  );
}

export default PresentationImg;
