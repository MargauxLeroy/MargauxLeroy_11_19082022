import React from "react";
import { Housing } from "../../Home";

import "./Gallery.scss";

type GalleryProps = { housings: Housing[] };

function Gallery(props: GalleryProps) {
  return (
    <ul className="gallery-section">
      {props.housings.map((housing) => (
        <Thumb key={housing.id} label={housing.title} image={housing.cover} />
      ))}
    </ul>
  );
}

export default Gallery;

type ThumbProps = { label: string; image: string };

function Thumb({ label, image }: ThumbProps) {
  return (
    <li style={{ backgroundImage: `url("${image}")` }}>
      <a href="#">
        <h3>{label}</h3>
        <span className="gradient"></span>
      </a>
    </li>
  );
}
