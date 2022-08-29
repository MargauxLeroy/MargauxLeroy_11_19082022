import React from "react";
import { Navigate, useParams } from "react-router-dom";

import Caroussel from "../components/common/Carrousel/Carrousel";
import Expand from "../components/common/Expand/Expand";
import { useHousings } from "./Home";

import HousingInfos from "../components/HousingInfos/Infos";

const useHousing = (id: string) => {
  const { housings, isLoading } = useHousings();

  return {
    housing: housings.find((housing) => housing.id === id),
    isLoading,
  };
};

function HousingPage() {
  const params = useParams();
  const housingId = params.housingId;

  if (!housingId) {
    throw new Error("This component need housingId as url param");
  }

  const { housing, isLoading } = useHousing(housingId);

  if (isLoading) return <div style={{ height: "100vh" }}></div>; // TODO: shimmer ? ou div full height

  if (!housing) return <Navigate to={"/404"} />;

  return (
    <div className="content-layout page-flex">
      <Caroussel pictures={housing.pictures} />

      <HousingInfos
        title={housing.title}
        location={housing.location}
        tags={housing.tags}
        host={housing.host}
        rating={housing.rating}
      />

      <div className="housing-expands">
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
