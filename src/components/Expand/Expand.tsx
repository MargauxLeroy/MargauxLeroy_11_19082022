import React, { useState } from "react";

import "./Expand.scss";

import chevron from "../../assets/icones/chevron.svg";

type ExpandProps = {
  title: string;
  content: string | string[];
  isOpen: boolean;
};

function Expand({
  title,
  content,
  isOpen: defaultIsOpen = false,
}: ExpandProps) {
  const [isOpen, setIsOpen] = useState(defaultIsOpen);

  return (
    <div className="expand" data-is-open={isOpen}>
      <div className="title" onClick={() => setIsOpen(!isOpen)}>
        <h3>{title}</h3>
        <img src={chevron} alt="Chevron" />
      </div>

      {isOpen && (
        <div className="content">
          {Array.isArray(content) ? (
            <ul className="equipements">
              {content.map((equipement) => (
                <li key={equipement}>{equipement}</li>
              ))}
            </ul>
          ) : (
            <p>{content}</p>
          )}
        </div>
      )}
    </div>
  );
}

export default Expand;
