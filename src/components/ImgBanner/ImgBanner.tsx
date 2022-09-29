import React from "react";

import "./ImgBanner.scss";

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
