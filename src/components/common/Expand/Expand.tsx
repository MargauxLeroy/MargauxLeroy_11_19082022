import React, { useState } from "react";

import "./Expand.scss";

import chevron from "../../../assets/icones/chevron.svg";

type ExpandProps = {
  title: string;
  content: string | string[];
  isOpen: boolean;
};

function Expand(props: ExpandProps) {
  const [isOpen, setIsOpen] = useState(props.isOpen);

  return (
    <div className="expand" data-is-open={isOpen}>
      <div
        className="title"
        onClick={() => {
          console.log("toto");
          setIsOpen(!isOpen);
        }}
      >
        <h3>{props.title}</h3>
        <img src={chevron} alt="Chevron" />
      </div>

      {isOpen && (
        <div className="content">
          {Array.isArray(props.content) ? (
            <ul className="equipements">
              {props.content.map((equipement) => (
                <li key={equipement}>{equipement}</li>
              ))}
            </ul>
          ) : (
            <p>{props.content}</p>
          )}
        </div>
      )}
    </div>
  );
}

export default Expand;
