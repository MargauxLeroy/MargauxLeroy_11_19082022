import React from "react";

import Caroussel from "../common/Carrousel/Carrousel";
import Expand from "../common/Expand/Expand";
import Owner from "../common/Owner/Owner";
import Rating from "../common/Rating/Rating";

import HousingInfos from "./Infos/Infos";

function HousingPage() {
  return (
    <>
      <Caroussel />
      <HousingInfos />
      <Expand />
      <div className="housing-infos">
        <HousingInfos />
        <div className="notes">
          <Owner />
          <Rating />
        </div>
      </div>
    </>
  );
}

export default HousingPage;
