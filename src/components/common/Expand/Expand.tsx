import React from "react";

import "./Expand.scss";

import chevron from "../../../assets/icones/chevron.svg";

type ExpandProps = { title: string; content: string; isOpen: string };

function Expand(props: ExpandProps) {
  const isDescription = true;
  // var isOpen = props.isOpen;

  return (
    <div className="expand" data-is-open={props.isOpen}>
      <div
        className="title"
        onClick={() => {
          console.log("toto");
          // isOpen = !isOpen;
        }}
      >
        <h3>{props.title}</h3>
        <img src={chevron} alt="Chevron" />
      </div>

      {props.isOpen && (
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
