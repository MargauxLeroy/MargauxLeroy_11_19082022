import React from "react";

import Caroussel from "./common/Carrousel/Carrousel";
import Expand from "./common/Expand/Expand";
import Owner from "./common/Owner/Owner";
import Rating from "./common/Rating/Rating";

import HousingInfos from "./HousingInfos/Infos";

function HousingPage() {
  return (
    <div className="content-layout page-flex">
      <Caroussel />
      <HousingInfos />
      <Expand title="Description" content="coucou" isOpen="true" />
      <div className="housing-infos">
        <HousingInfos />
        <div className="notes">
          <Owner />
          <Rating />
        </div>
      </div>
    </div>
  );
}

export default HousingPage;
