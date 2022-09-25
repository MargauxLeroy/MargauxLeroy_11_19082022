import React from "react";
import { Link } from "react-router-dom";
import { Housing } from "../../utils/states";

import "./Gallery.scss";

type GalleryProps = { housings: Housing[] };

function Gallery(props: GalleryProps) {
  return (
    <ul className="gallery-section">
      {props.housings.map((housing) => (
        <Thumb
          key={housing.id}
          id={housing.id}
          label={housing.title}
          image={housing.cover}
        />
      ))}
    </ul>
  );
}

export default Gallery;

type ThumbProps = { id: string; label: string; image: string };

function Thumb({ label, image, id }: ThumbProps) {
  return (
    <li style={{ backgroundImage: `url("${image}")` }}>
      <Link to={`/housing/${id}`}>
        <h3>{label}</h3>
        <span className="gradient"></span>
      </Link>
    </li>
  );
}
