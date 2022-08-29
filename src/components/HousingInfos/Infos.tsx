import React from "react";
import Host, { HostType } from "../common/Host/Host";
import Rating from "../common/Rating/Rating";

import "./Infos.scss";

type HousingInfosProps = {
  title: string;
  location: string;
  tags: string[];
  host: HostType;
  rating: string;
};

function HousingInfos(props: HousingInfosProps) {
  return (
    <div className="housing-infos">
      <div className="housing-first">
        <div className="housing-title">
          <h2>{props.title}</h2>
          <h3>{props.location}</h3>
        </div>
        <ul>
          {props.tags.map((tag) => (
            <li key={tag} className="tag">
              {tag}
            </li>
          ))}
        </ul>
      </div>
      <div className="housing-second">
        <Rating rating={props.rating} />
        <Host host={props.host} />
      </div>
    </div>
  );
}

export default HousingInfos;
