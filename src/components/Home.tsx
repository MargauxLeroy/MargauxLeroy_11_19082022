import React, { useEffect, useState } from "react";

import ImgBanner from "./common/ImgBanner/ImgBanner";
import Gallery from "./common/Gallery/Gallery";

import homeImage from "../assets/images/home_img.jpg";

const fetchHousing = async (): Promise<Housing[]> => {
  const data = await fetch("/logements.json");
  const response = await data.json();

  return response;
};

const useHousings = () => {
  const [housings, setHousings] = useState<Housing[]>([]);

  useEffect(() => {
    fetchHousing().then(setHousings);
  }, [setHousings]);

  return housings;
};

export const useHousing = (id: string) => {
  const housings = useHousings();

  return housings.find((housing) => housing.id === id);
};

function Home() {
  const housings = useHousings();
  console.log(housings);

  return (
    <div className="content-layout page-flex">
      <ImgBanner
        title="Chez vous, partout et ailleurs"
        image={homeImage}
        isDense="true"
      />
      <Gallery housings={housings} />
    </div>
  );
}

export default Home;

export type Housing = {
  id: string;
  title: string;
  cover: string;
  pictures: string[];
  description: string;
  host: {
    name: string;
    picture: string;
  };
  rating: string;
  location: string;
  equipments: string[];
  tags: string[];
};
