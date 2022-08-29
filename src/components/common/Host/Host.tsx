import React from "react";

import "./Host.scss";

export type HostType = { name: string; picture: string };

function Host({ host }: { host: HostType }) {
  const [firstName, lastName] = host.name.split(" ");

  return (
    <div className="owner">
      <p>
        {firstName} <br /> {lastName}
      </p>
      <img src={host.picture} alt="" />
    </div>
  );
}

export default Host;
