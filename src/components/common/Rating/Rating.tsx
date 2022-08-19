import React from "react";

import "./Rating.scss";

import starIcon from "../../../assets/star.svg";

const Star = (props: { isFilled: boolean }) => {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      xmlns="http://www.w3.org/2000/svg"
      data-isFilled={props.isFilled}
    >
      <path d="M18.645 12L15 0L11.355 12H0L9.27 18.615L5.745 30L15 22.965L24.27 30L20.745 18.615L30 12H18.645Z" />
    </svg>
  );
};

function Rating() {
  var isFilled = true;

  return (
    <div className="rating">
      <Star isFilled={true} />
      <Star isFilled={true} />
      <Star isFilled={true} />
      <Star isFilled={false} />
      <Star isFilled={false} />
    </div>
  );
}

export default Rating;
