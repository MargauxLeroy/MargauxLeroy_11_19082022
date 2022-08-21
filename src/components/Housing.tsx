import React from "react";
import { useParams } from "react-router-dom";

import Caroussel from "./common/Carrousel/Carrousel";
import Expand from "./common/Expand/Expand";
import Host from "./common/Host/Host";
import Rating from "./common/Rating/Rating";
import { useHousing } from "./Home";

import HousingInfos from "./HousingInfos/Infos";

function HousingPage() {
  const params = useParams();
  const housingId = params.housingId;

  if (!housingId) {
    throw new Error("This component need housingId as url param");
  }

  const housing = useHousing(housingId);

  if (!housing) return null;

  return (
    <div className="content-layout page-flex">
      <Caroussel pictures={housing.pictures} />

      <div className="housing-infos">
        <HousingInfos
          title={housing.title}
          location={housing.location}
          tags={housing.tags}
        />
        <div className="notes">
          <Host host={housing.host} />
          <Rating />
        </div>
        <Expand
          title="Description"
          content={housing.description}
          isOpen={true}
        />
        <Expand
          title="Équipements"
          content={housing.equipments}
          isOpen={true}
        />
      </div>
    </div>
  );
}

export default HousingPage;
