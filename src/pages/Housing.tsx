import React from "react";
import { Navigate, useParams } from "react-router-dom";
import { useHousings } from "../utils/states";

import Caroussel from "../components/Carrousel/Carrousel";
import Expand from "../components/Expand/Expand";
import HousingInfos from "../components/HousingInfos/Infos";

const useHousing = (id: string) => {
  const { housings, isLoading } = useHousings();

  return {
    /// Renvoit le logement si l'id en paramètre
    /// correspond à l'id d'un des logements existants
    housing: housings.find((housing) => housing.id === id),
    isLoading,
  };
};

function HousingPage() {
  /// On récupère l'id dans l'URL
  const params = useParams();
  const housingId = params.housingId;

  if (!housingId) {
    throw new Error("This component need an housingId as url param");
  }

  const { housing, isLoading } = useHousing(housingId);

  if (isLoading) return <div style={{ height: "100vh" }}></div>;
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
          isOpen={false}
        />
        <Expand
          title="Équipements"
          content={housing.equipments}
          isOpen={false}
        />
      </div>
    </div>
  );
}

export default HousingPage;
