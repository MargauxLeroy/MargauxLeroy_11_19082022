import React from "react";

import "./Infos.scss";

type HousingInfosProps = {
  title: string;
  location: string;
  tags: string[];
};

function HousingInfos(props: HousingInfosProps) {
  return (
    <div className="title">
      <h2>{props.title}</h2>
      <h3>{props.location}</h3>
      <ul>
        {props.tags.map((tag) => (
          <li key={tag} className="tag">
            {tag}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HousingInfos;
