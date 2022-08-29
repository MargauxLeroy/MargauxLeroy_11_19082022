import React, { useEffect, useState } from "react";

import ImgBanner from "../components/common/ImgBanner/ImgBanner";
import Gallery from "../components/common/Gallery/Gallery";

import homeImage from "../assets/images/home_img.jpg";

const fetchHousing = async (): Promise<Housing[]> => {
  const data = await fetch("/logements.json");
  const response = await data.json();

  return response;
};

export const useHousings = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [housings, setHousings] = useState<Housing[]>([]);

  useEffect(() => {
    setTimeout(() => {
      fetchHousing()
        .then(setHousings)
        .finally(() => setIsLoading(false));
    }, 300);
  }, [setHousings]);

  return { housings, isLoading };
};

function Home() {
  const { housings } = useHousings();
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
