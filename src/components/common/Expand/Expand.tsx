import React, { useState } from "react";

import "./Expand.scss";

import chevron from "../../../assets/icones/chevron.svg";

type ExpandProps = { title: string; content: string; isOpen: boolean };

function Expand(props: ExpandProps) {
  const isDescription = true;

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
          {isDescription ? (
            <p>{props.content}</p>
          ) : (
            <ul>
              <li>Coucou</li>
              <li>cava</li>
              <li>très bien</li>
            </ul>
          )}
        </div>
      )}
    </div>
  );
}

export default Expand;
