import React from "react";

import "../styles/Gallery.scss";

function Gallery() {
  return (
    <ul className="gallery-section">
      <Thumb />
      <Thumb />
      <Thumb />
      <Thumb />
    </ul>
  );
}

export default Gallery;

function Thumb() {
  return (
    <li>
      <a href="#">
        <h3>Titre de la location</h3>
        <span className="gradient"></span>
      </a>
    </li>
  );
}
