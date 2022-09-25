import React from "react";

import "./Rating.scss";

type starType = {
  isFilled?: boolean;
};

const Star = ({ isFilled = false }: starType) => {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      xmlns="http://www.w3.org/2000/svg"
      data-is-filled={isFilled}
    >
      <path d="M18.645 12L15 0L11.355 12H0L9.27 18.615L5.745 30L15 22.965L24.27 30L20.745 18.615L30 12H18.645Z" />
    </svg>
  );
};

function Rating(props: { rating: string }) {
  const ratingNumber = Number(props.rating);
  const list = new Array(5).fill(false);

  return (
    <div className="rating">
      {list.map((_, index) => (
        <Star key={index} isFilled={index < ratingNumber} />
      ))}
    </div>
  );
}

export default Rating;
